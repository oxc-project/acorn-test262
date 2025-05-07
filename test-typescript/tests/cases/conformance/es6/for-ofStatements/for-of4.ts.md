__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 29,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 29,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 25,
            "end": 27,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
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
        "start": 14,
        "end": 17,
        "elements": [
          {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
