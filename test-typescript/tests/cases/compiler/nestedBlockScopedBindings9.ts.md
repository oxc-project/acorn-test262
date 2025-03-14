__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 27,
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
          "end": 25,
          "expression": {
            "type": "ArrowFunctionExpression",
            "start": 17,
            "end": 24,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ]
    },
    {
      "type": "SwitchStatement",
      "start": 29,
      "end": 102,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 46,
          "end": 100,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 62,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 66,
                  "end": 67,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
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
              "start": 77,
              "end": 85,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 77,
                "end": 84,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "BreakStatement",
              "start": 94,
              "end": 100,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 51,
            "end": 52,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 37,
        "end": 38,
        "raw": "1",
        "value": 1
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
