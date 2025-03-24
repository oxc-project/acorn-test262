__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 89,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 1,
      "end": 39,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 16,
        "end": 39,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 31,
          "end": 39,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
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
      "start": 41,
      "end": 89,
      "declaration": {
        "type": "ObjectExpression",
        "start": 56,
        "end": 88,
        "properties": [
          {
            "type": "Property",
            "start": 62,
            "end": 85,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
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
              "start": 68,
              "end": 85,
              "raw": "\"another default\"",
              "value": "another default"
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
