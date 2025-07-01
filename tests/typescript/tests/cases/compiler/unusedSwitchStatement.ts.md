__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 8,
        "end": 9
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 22,
            "end": 23
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "init": null,
                  "definite": false,
                  "start": 37,
                  "end": 38
                }
              ],
              "declare": false,
              "start": 33,
              "end": 39
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 48,
              "end": 54
            }
          ],
          "start": 17,
          "end": 54
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 64,
            "end": 65
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 85,
                    "end": 86
                  },
                  "definite": false,
                  "start": 81,
                  "end": 86
                }
              ],
              "declare": false,
              "start": 75,
              "end": 87
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 96,
              "end": 102
            }
          ],
          "start": 59,
          "end": 102
        },
        {
          "type": "SwitchCase",
          "test": null,
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 132,
                    "end": 133
                  },
                  "definite": false,
                  "start": 128,
                  "end": 133
                }
              ],
              "declare": false,
              "start": 124,
              "end": 134
            }
          ],
          "start": 107,
          "end": 134
        }
      ],
      "start": 0,
      "end": 136
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 2,
        "raw": "2",
        "start": 147,
        "end": 148
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 177
                  },
                  "init": null,
                  "definite": false,
                  "start": 176,
                  "end": 177
                }
              ],
              "declare": false,
              "start": 172,
              "end": 178
            }
          ],
          "start": 156,
          "end": 178
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 188,
            "end": 189
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 200
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 201,
                  "end": 202
                },
                "start": 199,
                "end": 202
              },
              "directive": null,
              "start": 199,
              "end": 203
            }
          ],
          "start": 183,
          "end": 203
        }
      ],
      "start": 139,
      "end": 205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 205
}
```
