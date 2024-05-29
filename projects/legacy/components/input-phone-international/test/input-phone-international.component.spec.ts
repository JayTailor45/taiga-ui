import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootComponent, tuiSvgOptionsProvider} from '@taiga-ui/core';
import type {TuiCountryIsoCode, TuiLanguage} from '@taiga-ui/i18n';
import {TUI_ENGLISH_LANGUAGE, TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';
import {TuiInputPhoneInternationalComponent} from '@taiga-ui/legacy';
import {TuiNativeInputPO} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import metadata from 'libphonenumber-js/max/metadata';
import {of} from 'rxjs';

describe('InputPhoneInternational', () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-phone-international
                    [countries]="countries"
                    [formControl]="control"
                    [readOnly]="readOnly"
                    [(countryIsoCode)]="countryIsoCode"
                ></tui-input-phone-international>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputPhoneInternationalComponent, {static: true})
        public component!: TuiInputPhoneInternationalComponent;

        public control = new FormControl('+79110330102');

        public countries: TuiCountryIsoCode[] = ['RU', 'KZ', 'UA', 'BY', 'TW', 'BD'];

        public countryIsoCode: TuiCountryIsoCode = 'RU';

        public readOnly = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputPhoneInternationalComponent;
    let inputPO: TuiNativeInputPO;

    const initializeTestModule = (language: TuiLanguage = TUI_ENGLISH_LANGUAGE): void => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [
                    TuiRootComponent,
                    TuiInputPhoneInternationalComponent,
                    ReactiveFormsModule,
                    NoopAnimationsModule,
                ],
                declarations: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
                    tuiSvgOptionsProvider({
                        path: (_: string) => 'path/tuiIcon.svg#tuiIcon',
                    }),
                    {
                        provide: TUI_LANGUAGE,
                        useValue: of(language),
                    },
                ],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            component = testComponent.component;
            fixture.detectChanges();
            inputPO = new TuiNativeInputPO(
                fixture,
                fixture.debugElement.query(By.css('tui-input input')),
            );
        });
    };

    describe('select new country from dropdown', () => {
        initializeTestModule();

        it('should switch country calling code and keeps all rest digits', async () => {
            component.onItemClick('UA');

            fixture.detectChanges();
            await fixture.whenStable();

            expect(testComponent.control.value).toBe('+3809110330102');
        });
    });

    describe('paste', () => {
        initializeTestModule();

        const paste = async (data: string): Promise<void> => {
            const event = new InputEvent('beforeinput', {
                inputType: 'insertFromPaste',
                data,
            });

            component.onPaste(event, metadata);
            fixture.detectChanges();

            inputPO.sendText(data);
            await fixture.whenStable();
        };

        it('should set correct country code on paste event', async () => {
            await paste('+380123456789');

            expect(testComponent.countryIsoCode).toBe('UA');
        });

        it('should set country code on paste event', async () => {
            await paste('88005553535');

            expect(testComponent.countryIsoCode).toBe('RU');
        });

        describe('should set KZ country code on paste event', () => {
            ['+7 777 777-7777', '+7 7272 588300'].forEach(phone => {
                it(`${phone}`, async () => {
                    await paste(phone);

                    expect(testComponent.countryIsoCode).toBe('KZ');
                });
            });
        });

        it('should replace code 8 on paste event', async () => {
            await paste('88005553535');

            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+7 800 555-35-35');
        });

        it('should update value on paste', async () => {
            await paste('+380 (12) 345-67-89');

            expect(testComponent.control.value).toBe('+380123456789');
        });

        it('should update value without "+" on paste', async () => {
            await paste('380 (98) 765-4321');

            expect(inputPO.value).toBe('+380 98 765-4321');
        });

        it('should set country code on paste event 8(863)', async () => {
            await paste('88635553535');

            expect(testComponent.countryIsoCode).toBe('RU');
        });

        it('should set country code on paste event +886', async () => {
            await paste('+886355535353');

            expect(testComponent.countryIsoCode).toBe('TW');
        });
    });

    describe('programmatically patch', () => {
        initializeTestModule();

        it('should correct update control', () => {
            let result: unknown;
            const phoneNumber = '+380123456789';

            testComponent.control.valueChanges.subscribe(value => {
                result = value;
            });

            testComponent.countryIsoCode = 'UA';
            testComponent.control.patchValue(phoneNumber);
            expect(result).toEqual(phoneNumber);
        });
    });

    describe('i18n', () => {
        describe('RUSSIAN', () => {
            initializeTestModule(TUI_RUSSIAN_LANGUAGE);

            it('displays country names in Russian inside dropdown', () => {
                getCountrySelector().nativeElement.click();
                fixture.detectChanges();

                expect(getDropdownCountryNames()).toEqual([
                    'Россия',
                    'Казахстан',
                    'Украина',
                    'Беларусь (Белоруссия)',
                    'Тайвань',
                    'Бангладеш',
                ]);
            });
        });

        describe('ENGLISH', () => {
            initializeTestModule(TUI_ENGLISH_LANGUAGE);

            it('displays country names in English inside dropdown', () => {
                getCountrySelector().nativeElement.click();
                fixture.detectChanges();

                expect(getDropdownCountryNames()).toEqual([
                    'Russia',
                    'Kazakhstan',
                    'Ukraine',
                    'Belarus',
                    'Taiwan',
                    'Bangladesh',
                ]);
            });
        });
    });

    function getDropdownCountryNames(): string[] {
        const countryNameContainers =
            fixture.debugElement.queryAll(By.css('.t-country-item-name')) || [];

        return countryNameContainers.map(container =>
            container.nativeElement.textContent?.trim(),
        );
    }

    function getCountrySelector(): DebugElement {
        return fixture.debugElement.query(By.css('.t-country-select input'));
    }
});
