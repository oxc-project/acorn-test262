__ESTREE_TEST__:PASS:
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
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "name": "uhoh",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 28,
              "end": 45,
              "value": "another default",
              "raw": "\"another default\""
            },
            "kind": "init",
            "optional": false
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
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 81,
          "end": 84,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
