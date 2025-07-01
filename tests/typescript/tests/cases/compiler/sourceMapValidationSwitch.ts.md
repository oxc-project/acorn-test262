__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 34,
            "end": 35
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "start": 45,
                "end": 48
              },
              "directive": null,
              "start": 45,
              "end": 49
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 58,
              "end": 64
            }
          ],
          "start": 29,
          "end": 64
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 74,
            "end": 76
          },
          "consequent": [
            {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 101
                    },
                    "start": 100,
                    "end": 103
                  },
                  "directive": null,
                  "start": 100,
                  "end": 104
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 117,
                  "end": 123
                }
              ],
              "start": 86,
              "end": 133
            }
          ],
          "start": 69,
          "end": 133
        },
        {
          "type": "SwitchCase",
          "test": null,
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
                  "start": 155,
                  "end": 156
                },
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 160
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 162,
                    "end": 164
                  },
                  "start": 159,
                  "end": 164
                },
                "start": 155,
                "end": 164
              },
              "directive": null,
              "start": 155,
              "end": 165
            }
          ],
          "start": 138,
          "end": 165
        }
      ],
      "start": 12,
      "end": 167
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 177
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 190,
            "end": 191
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 202
                },
                "start": 201,
                "end": 204
              },
              "directive": null,
              "start": 201,
              "end": 205
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 214,
              "end": 220
            }
          ],
          "start": 185,
          "end": 220
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 230,
            "end": 232
          },
          "consequent": [
            {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 257
                    },
                    "start": 256,
                    "end": 259
                  },
                  "directive": null,
                  "start": 256,
                  "end": 260
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 273,
                  "end": 279
                }
              ],
              "start": 242,
              "end": 289
            }
          ],
          "start": 225,
          "end": 289
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "BlockStatement",
              "body": [
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
                      "start": 325,
                      "end": 326
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 330
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 333,
                        "end": 335
                      },
                      "start": 329,
                      "end": 335
                    },
                    "start": 325,
                    "end": 335
                  },
                  "directive": null,
                  "start": 325,
                  "end": 336
                }
              ],
              "start": 311,
              "end": 346
            }
          ],
          "start": 294,
          "end": 346
        }
      ],
      "start": 168,
      "end": 348
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 348
}
```
