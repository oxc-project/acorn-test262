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
      "expression": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ForOfStatement",
      "start": 19,
      "end": 41,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 24,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 28,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
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
            "value": 0,
            "raw": "0"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 41,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
