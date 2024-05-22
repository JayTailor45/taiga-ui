(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26597],{26597:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {delay, of} from 'rxjs';\n\ninterface Python {\n    readonly id: number;\n    readonly name: string;\n}\n\nconst ITEMS: readonly Python[] = [\n    {id: 42, name: 'John Cleese'},\n    {id: 237, name: 'Eric Idle'},\n    {id: 666, name: 'Michael Palin'},\n    {id: 123, name: 'Terry Gilliam'},\n    {id: 777, name: 'Terry Jones'},\n    {id: 999, name: 'Graham Chapman'},\n];\n\n@Component({\n    selector: 'tui-select-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSelectExample5 {\n    protected value = 42;\n\n    // Server request for items imitation\n    protected readonly items$ = of(ITEMS).pipe(delay(3000));\n\n    @tuiPure\n    protected stringify(items: readonly Python[]): TuiStringHandler<TuiContext<number>> {\n        const map = new Map(items.map(({id, name}) => [id, name] as [number, string]));\n\n        return ({$implicit}: TuiContext<number>) => map.get($implicit) || '';\n    }\n}\n"}}]);