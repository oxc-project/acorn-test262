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
      "expression": {
        "type": "Identifier",
        "start": 0,
        "end": 1,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ForOfStatement",
      "start": 3,
      "end": 25,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 8,
        "end": 13,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
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
            "value": 0,
            "raw": "0"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
