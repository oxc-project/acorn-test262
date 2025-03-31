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
          "end": 25,
          "expression": {
            "type": "ArrowFunctionExpression",
            "start": 17,
            "end": 24,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "SwitchStatement",
      "start": 29,
      "end": 102,
      "discriminant": {
        "type": "Literal",
        "start": 37,
        "end": 38,
        "value": 1,
        "raw": "1"
      },
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
                  "id": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
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
              "start": 77,
              "end": 85,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 77,
                "end": 84,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "directive": null
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
