__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "BlockStatement",
      "start": 7,
      "end": 32,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 13,
          "end": 19,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 17,
              "end": 18,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "ExpressionStatement",
          "start": 24,
          "end": 30,
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 24,
            "end": 29,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 28,
              "end": 29,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "SwitchStatement",
      "start": 41,
      "end": 112,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 58,
          "end": 110,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 74,
              "end": 80,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 78,
                  "end": 79,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExpressionStatement",
              "start": 89,
              "end": 95,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 89,
                "end": 94,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 93,
                  "end": 94,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            },
            {
              "type": "BreakStatement",
              "start": 104,
              "end": 110,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 63,
            "end": 64,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 49,
        "end": 50,
        "raw": "1",
        "value": 1,
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
