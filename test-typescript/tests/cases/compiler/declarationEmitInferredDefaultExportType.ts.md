declarationEmitInferredDefaultExportType.ts
```json
{
  "type": "Program",
  "start": 11,
  "end": 70,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 11,
      "end": 70,
      "declaration": {
        "type": "ObjectExpression",
        "start": 26,
        "end": 70,
        "properties": [
          {
            "type": "Property",
            "start": 30,
            "end": 37,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ArrayExpression",
              "start": 35,
              "end": 37,
              "elements": []
            }
          },
          {
            "type": "Property",
            "start": 41,
            "end": 55,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Identifier",
              "start": 46,
              "end": 55,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          },
          {
            "type": "Property",
            "start": 59,
            "end": 68,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 64,
              "end": 68,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
