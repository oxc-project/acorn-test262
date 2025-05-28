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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 20,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 14,
            "end": 18,
            "expression": {
              "type": "BinaryExpression",
              "start": 14,
              "end": 17,
              "left": {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 16,
                "end": 17,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
