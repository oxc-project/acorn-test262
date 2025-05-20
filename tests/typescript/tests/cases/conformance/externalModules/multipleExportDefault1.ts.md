__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 38,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 38,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 30,
          "end": 38,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 40,
      "end": 88,
      "declaration": {
        "type": "ObjectExpression",
        "start": 55,
        "end": 87,
        "properties": [
          {
            "type": "Property",
            "start": 61,
            "end": 84,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
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
              "start": 67,
              "end": 84,
              "raw": "\"another default\"",
              "value": "another default"
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
