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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "uhoh",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 44,
              "value": "another default",
              "raw": "\"another default\""
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
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
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 80,
          "end": 83,
          "body": []
        },
        "expression": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
