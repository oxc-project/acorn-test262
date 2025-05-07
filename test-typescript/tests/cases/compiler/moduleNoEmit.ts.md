__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 20,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 20,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 14,
            "end": 18,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 14,
              "end": 17,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 16,
                "end": 17,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
