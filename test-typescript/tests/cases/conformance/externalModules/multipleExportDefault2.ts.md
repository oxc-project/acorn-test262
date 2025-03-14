multipleExportDefault2.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 86,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 1,
      "end": 49,
      "declaration": {
        "type": "ObjectExpression",
        "start": 16,
        "end": 48,
        "properties": [
          {
            "type": "Property",
            "start": 22,
            "end": 45,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "uhoh",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 28,
              "end": 45,
              "raw": "\"another default\"",
              "value": "another default"
            }
          }
        ]
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 51,
      "end": 84,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 66,
        "end": 84,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 81,
          "end": 84,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
