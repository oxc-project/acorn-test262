__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 1
      },
      "directive": null,
      "start": 0,
      "end": 2
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "init": null,
            "definite": false,
            "start": 12,
            "end": 13
          }
        ],
        "declare": false,
        "start": 8,
        "end": 13
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 18,
            "end": 19
          }
        ],
        "start": 17,
        "end": 20
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 22,
        "end": 25
      },
      "start": 3,
      "end": 25
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
