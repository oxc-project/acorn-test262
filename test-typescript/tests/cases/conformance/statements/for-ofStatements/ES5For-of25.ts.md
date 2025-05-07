__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 17,
            "elements": [
              {
                "type": "Literal",
                "start": 9,
                "end": 10,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 12,
                "end": 13,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 15,
                "end": 16,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 19,
      "end": 53,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 53,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 42,
            "end": 44,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 51,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
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
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
