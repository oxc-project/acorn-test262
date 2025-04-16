__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 24,
            "end": 27,
            "elements": [
              {
                "type": "Literal",
                "start": 25,
                "end": 26,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 29,
      "end": 56,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
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
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 56,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 52,
            "end": 54,
            "expression": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
