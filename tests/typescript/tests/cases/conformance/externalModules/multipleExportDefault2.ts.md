__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uhoh",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "value": {
              "type": "Literal",
              "value": "another default",
              "raw": "\"another default\"",
              "start": 27,
              "end": 44
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 21,
            "end": 44
          }
        ],
        "start": 15,
        "end": 47
      },
      "exportKind": "value",
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 77
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 80,
          "end": 83
        },
        "expression": false,
        "start": 65,
        "end": 83
      },
      "exportKind": "value",
      "start": 50,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 84
}
```
