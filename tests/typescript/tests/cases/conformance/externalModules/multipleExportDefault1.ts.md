__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
          "start": 24,
          "end": 27
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
          "start": 30,
          "end": 38
        },
        "expression": false,
        "start": 15,
        "end": 38
      },
      "exportKind": "value",
      "start": 0,
      "end": 38
    },
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
              "start": 61,
              "end": 65
            },
            "value": {
              "type": "Literal",
              "value": "another default",
              "raw": "\"another default\"",
              "start": 67,
              "end": 84
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 61,
            "end": 84
          }
        ],
        "start": 55,
        "end": 87
      },
      "exportKind": "value",
      "start": 40,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
