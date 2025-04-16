__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 25,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 6,
          "end": 12,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 10,
              "end": 11,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "name": "x",
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
        {
          "type": "ExpressionStatement",
          "start": 17,
          "end": 23,
          "expression": {
            "type": "AssignmentExpression",
            "start": 17,
            "end": 22,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
        }
      ]
    },
    {
      "type": "SwitchStatement",
      "start": 27,
      "end": 98,
      "discriminant": {
        "type": "Literal",
        "start": 35,
        "end": 36,
        "value": 1,
        "raw": "1"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 44,
          "end": 96,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 60,
              "end": 66,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 64,
                  "end": 65,
                  "id": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "y",
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
            {
              "type": "ExpressionStatement",
              "start": 75,
              "end": 81,
              "expression": {
                "type": "AssignmentExpression",
                "start": 75,
                "end": 80,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "value": 1,
                  "raw": "1"
                }
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 90,
              "end": 96,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 49,
            "end": 50,
            "value": 1,
            "raw": "1"
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
