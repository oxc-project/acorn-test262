__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 48,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 47,
        "properties": [
          {
            "type": "Property",
            "start": 21,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "uhoh",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 44,
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
      "start": 50,
      "end": 83,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 65,
        "end": 83,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 80,
          "end": 83,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
