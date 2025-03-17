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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
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
          "start": 24,
          "end": 30,
          "expression": {
            "type": "AssignmentExpression",
            "start": 24,
            "end": 29,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 28,
              "end": 29,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 41,
      "end": 112,
      "discriminant": {
        "type": "Literal",
        "start": 49,
        "end": 50,
        "value": 1,
        "raw": "1"
      },
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
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
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
              "start": 89,
              "end": 95,
              "expression": {
                "type": "AssignmentExpression",
                "start": 89,
                "end": 94,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 93,
                  "end": 94,
                  "value": 1,
                  "raw": "1"
                }
              },
              "directive": null
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
