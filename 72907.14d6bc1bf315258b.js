(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72907],{72907:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TUI_DEFAULT_MATCHER, TuiContext, TuiHandler, tuiIsNumber} from '@taiga-ui/cdk';\nimport {map, Observable, shareReplay, startWith, Subject, switchMap, timer} from 'rxjs';\n\nconst DICTIONARY = [\n    {id: 1, name: 'Luke Skywalker'},\n    {id: 2, name: 'Princess Leia'},\n    {id: 3, name: 'Darth Vader'},\n    {id: 4, name: 'Han Solo'},\n    {id: 5, name: 'Obi-Wan Kenobi'},\n    {id: 6, name: 'Yoda'},\n];\n\n@Component({\n    selector: 'tui-multi-select-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport class TuiMultiSelectExample4 {\n    // Server request emulation\n    private readonly server$ = timer(5000).pipe(\n        map(() => DICTIONARY),\n        shareReplay({bufferSize: 1, refCount: true}),\n    );\n\n    private readonly search$ = new Subject<string>();\n\n    // Items only hold IDs\n    readonly items$ = this.search$.pipe(\n        startWith(''),\n        switchMap(search =>\n            this.server$.pipe(\n                map(items =>\n                    items\n                        .filter(({name}) => TUI_DEFAULT_MATCHER(name, search))\n                        .map(({id}) => id),\n                ),\n            ),\n        ),\n        startWith(null), // <-- loading\n    );\n\n    // Stringify mapper that turns IDs to names\n    readonly stringify$: Observable<TuiHandler<TuiContext<number> | number, string>> =\n        this.server$.pipe(\n            map(\n                items => new Map(items.map<[number, string]>(({id, name}) => [id, name])),\n            ),\n            startWith(new Map()),\n            map(\n                map => (id: TuiContext<number> | number) =>\n                    (tuiIsNumber(id) ? map.get(id) : map.get(id.$implicit)) ||\n                    'Loading...',\n            ),\n        );\n\n    readonly control = new FormControl([2, 3]);\n\n    onSearch(search: string | null): void {\n        this.search$.next(search || '');\n    }\n}\n"}}]);