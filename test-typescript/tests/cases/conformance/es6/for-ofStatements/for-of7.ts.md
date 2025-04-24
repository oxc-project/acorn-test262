__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 2,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 0,
        "end": 1,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 3,
      "end": 25,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 8,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 12,
            "end": 13,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 17,
        "end": 20,
        "elements": [
          {
            "type": "Literal",
            "start": 18,
            "end": 19,
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
