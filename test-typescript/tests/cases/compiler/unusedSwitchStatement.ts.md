__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "SwitchStatement",
      "start": 0,
      "end": 136,
      "discriminant": {
        "type": "Literal",
        "start": 8,
        "end": 9,
        "value": 1,
        "raw": "1"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 17,
          "end": 54,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 39,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 37,
                  "end": 38,
                  "id": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
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
              "type": "BreakStatement",
              "start": 48,
              "end": 54,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 22,
            "end": 23,
            "value": 0,
            "raw": "0"
          }
        },
        {
          "type": "SwitchCase",
          "start": 59,
          "end": 102,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 75,
              "end": 87,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 81,
                  "end": 86,
                  "id": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 85,
                    "end": 86,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "BreakStatement",
              "start": 96,
              "end": 102,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "value": 1,
            "raw": "1"
          }
        },
        {
          "type": "SwitchCase",
          "start": 107,
          "end": 134,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 124,
              "end": 134,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 128,
                  "end": 133,
                  "id": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 132,
                    "end": 133,
                    "value": 2,
                    "raw": "2"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            }
          ],
          "test": null
        }
      ]
    },
    {
      "type": "SwitchStatement",
      "start": 139,
      "end": 205,
      "discriminant": {
        "type": "Literal",
        "start": 147,
        "end": 148,
        "value": 2,
        "raw": "2"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 156,
          "end": 178,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 172,
              "end": 178,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 176,
                  "end": 177,
                  "id": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
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
            }
          ],
          "test": {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "value": 0,
            "raw": "0"
          }
        },
        {
          "type": "SwitchCase",
          "start": 183,
          "end": 203,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 199,
              "end": 203,
              "expression": {
                "type": "AssignmentExpression",
                "start": 199,
                "end": 202,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 201,
                  "end": 202,
                  "value": 1,
                  "raw": "1"
                }
              },
              "directive": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 188,
            "end": 189,
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
