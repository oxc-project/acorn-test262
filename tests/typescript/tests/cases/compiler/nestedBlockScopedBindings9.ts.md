__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 11
              },
              "init": null,
              "definite": false,
              "start": 10,
              "end": 11
            }
          ],
          "declare": false,
          "start": 6,
          "end": 12
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "id": null,
            "generator": false,
            "start": 17,
            "end": 24
          },
          "directive": null,
          "start": 17,
          "end": 25
        }
      ],
      "start": 0,
      "end": 27
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 37,
        "end": 38
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 51,
            "end": 52
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 67
                  },
                  "init": null,
                  "definite": false,
                  "start": 66,
                  "end": 67
                }
              ],
              "declare": false,
              "start": 62,
              "end": 68
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "id": null,
                "generator": false,
                "start": 77,
                "end": 84
              },
              "directive": null,
              "start": 77,
              "end": 85
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 94,
              "end": 100
            }
          ],
          "start": 46,
          "end": 100
        }
      ],
      "start": 29,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
