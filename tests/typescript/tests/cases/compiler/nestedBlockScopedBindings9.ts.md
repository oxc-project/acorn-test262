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
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 10,
              "end": 11,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null,
              "definite": false
            }
          ],
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
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
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
          "test": {
            "type": "Literal",
            "start": 51,
            "end": 52,
            "value": 1,
            "raw": "1"
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 62,
              "end": 68,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 66,
                  "end": 67,
                  "id": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 94,
              "end": 100,
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
