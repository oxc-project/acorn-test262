__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 41,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 18,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 19,
      "end": 41,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 41,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 24,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 28,
            "end": 29,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 33,
        "end": 36,
        "elements": [
          {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "raw": "0",
            "value": 0
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
