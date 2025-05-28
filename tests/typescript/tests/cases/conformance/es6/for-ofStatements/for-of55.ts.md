__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 11,
            "elements": [
              {
                "type": "Literal",
                "start": 9,
                "end": 10,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 13,
      "end": 40,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 18,
        "end": 23,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 22,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 40,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 36,
            "end": 38,
            "expression": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
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
