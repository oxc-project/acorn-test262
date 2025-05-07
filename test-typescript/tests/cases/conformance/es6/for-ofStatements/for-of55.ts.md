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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForOfStatement",
      "start": 13,
      "end": 40,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 40,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 36,
            "end": 38,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
        "start": 18,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 22,
            "end": 23,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
