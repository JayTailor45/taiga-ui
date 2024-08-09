// cspell:disable
import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce/types';

export const TUI_CURRENCY_DICTIONARY: Record<TuiCurrencyCode, TuiCurrency> = {
    [TuiCurrencyCode.Ruble]: TuiCurrency.Ruble,
    [TuiCurrencyCode.Dollar]: TuiCurrency.Dollar,
    [TuiCurrencyCode.MexicanPeso]: TuiCurrency.MexicanPeso,
    [TuiCurrencyCode.MoldovanLeu]: TuiCurrency.MoldovanLeu,
    [TuiCurrencyCode.PolandZloty]: TuiCurrency.PolandZloty,
    [TuiCurrencyCode.SingaporeDollar]: TuiCurrency.SingaporeDollar,
    [TuiCurrencyCode.AustralianDollar]: TuiCurrency.AustralianDollar,
    [TuiCurrencyCode.HongKongDollar]: TuiCurrency.HongKongDollar,
    [TuiCurrencyCode.CanadianDollar]: TuiCurrency.CanadianDollar,
    [TuiCurrencyCode.CzechKoruna]: TuiCurrency.CzechKoruna,
    [TuiCurrencyCode.EastCaribbeanDollar]: TuiCurrency.EastCaribbeanDollar,
    [TuiCurrencyCode.Euro]: TuiCurrency.Euro,
    [TuiCurrencyCode.Forint]: TuiCurrency.Forint,
    [TuiCurrencyCode.Pound]: TuiCurrency.Pound,
    [TuiCurrencyCode.Baht]: TuiCurrency.Baht,
    [TuiCurrencyCode.BahrainiDinar]: TuiCurrency.BahrainiDinar,
    [TuiCurrencyCode.TurkishLira]: TuiCurrency.TurkishLira,
    [TuiCurrencyCode.YuanRenminbi]: TuiCurrency.YuanRenminbi,
    [TuiCurrencyCode.Yen]: TuiCurrency.Yen,
    [TuiCurrencyCode.IsraeliShekel]: TuiCurrency.IsraeliShekel,
    [TuiCurrencyCode.IndianRupee]: TuiCurrency.IndianRupee,
    [TuiCurrencyCode.SwissFranc]: TuiCurrency.SwissFranc,
    [TuiCurrencyCode.ArmenianDram]: TuiCurrency.ArmenianDram,
    [TuiCurrencyCode.Won]: TuiCurrency.Won,
    [TuiCurrencyCode.Tenge]: TuiCurrency.Tenge,
    [TuiCurrencyCode.Hryvnia]: TuiCurrency.Hryvnia,
    [TuiCurrencyCode.UzbekSum]: TuiCurrency.UzbekSum,
    [TuiCurrencyCode.KyrgyzstanSom]: TuiCurrency.KyrgyzstanSom,
    [TuiCurrencyCode.Dirham]: TuiCurrency.Dirham,
    [TuiCurrencyCode.TajikistaniSomoni]: TuiCurrency.TajikistaniSomoni,
    [TuiCurrencyCode.MalaysianRinggit]: TuiCurrency.MalaysianRinggit,
    [TuiCurrencyCode.BelarusianRuble]: TuiCurrency.BelarusianRuble,
    [TuiCurrencyCode.GeorgianLari]: TuiCurrency.GeorgianLari,
    [TuiCurrencyCode.AzerbaijaniManat]: TuiCurrency.AzerbaijaniManat,
    [TuiCurrencyCode.SriLankanRupee]: TuiCurrency.SriLankanRupee,
    [TuiCurrencyCode.SerbianDinar]: TuiCurrency.SerbianDinar,
    [TuiCurrencyCode.SaudiRiyal]: TuiCurrency.SaudiRiyal,
    [TuiCurrencyCode.MongolianTugrik]: TuiCurrency.MongolianTugrik,
    [TuiCurrencyCode.SouthAfricanRand]: TuiCurrency.SouthAfricanRand,
    [TuiCurrencyCode.IranianRial]: TuiCurrency.IranianRial,
    [TuiCurrencyCode.IndonesianRupiah]: TuiCurrency.IndonesianRupiah,
    [TuiCurrencyCode.VietnameseDong]: TuiCurrency.VietnameseDong,
    [TuiCurrencyCode.NewTurkmenManat]: TuiCurrency.NewTurkmenManat,
    [TuiCurrencyCode.BrazilianReal]: TuiCurrency.BrazilianReal,
};

export function tuiGetCurrencyByCode(currency: TuiCurrencyCode): TuiCurrency | null {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return TUI_CURRENCY_DICTIONARY[currency] ?? null;
}
