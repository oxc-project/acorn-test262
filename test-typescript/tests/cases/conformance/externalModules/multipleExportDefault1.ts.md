__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 90,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 1,
      "end": 39,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 16,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
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
          "start": 31,
          "end": 39,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
              "name": "uhoh",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 85,
              "value": "another default",
              "raw": "\"another default\""
            },
            "kind": "init",
            "optional": false
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
