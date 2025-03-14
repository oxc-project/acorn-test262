nestedBlockScopedBindings10.ts
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
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
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
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "raw": "1",
              "value": 1
            }
          }
        }
      ]
    },
    {
      "type": "SwitchStatement",
      "start": 27,
      "end": 98,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
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
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "raw": "1",
                  "value": 1
                }
              }
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
            "raw": "1",
            "value": 1
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 35,
        "end": 36,
        "raw": "1",
        "value": 1
      }
    }
  ],
  "sourceType": "script"
}
```
