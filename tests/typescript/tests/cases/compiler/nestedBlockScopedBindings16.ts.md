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
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        }
      ],
      "declare": false,
      "start": 0,
      "end": 6
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 14,
        "end": 19
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
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
                      "start": 42,
                      "end": 43
                    },
                    "init": null,
                    "definite": false,
                    "start": 42,
                    "end": 43
                  }
                ],
                "declare": false,
                "start": 38,
                "end": 44
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
                    "start": 59,
                    "end": 60
                  },
                  "id": null,
                  "generator": false,
                  "start": 53,
                  "end": 60
                },
                "directive": null,
                "start": 53,
                "end": 61
              }
            ],
            "start": 28,
            "end": 67
          }
        ],
        "start": 22,
        "end": 69
      },
      "start": 7,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 75,
          "end": 76
        }
      ],
      "declare": false,
      "start": 71,
      "end": 77
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 85,
        "end": 90
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "init": null,
                    "definite": false,
                    "start": 113,
                    "end": 114
                  }
                ],
                "declare": false,
                "start": 109,
                "end": 115
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 128,
                    "end": 129
                  },
                  "start": 124,
                  "end": 129
                },
                "directive": null,
                "start": 124,
                "end": 130
              }
            ],
            "start": 99,
            "end": 136
          }
        ],
        "start": 93,
        "end": 138
      },
      "start": 78,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z0",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 146
        }
      ],
      "declare": false,
      "start": 140,
      "end": 147
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 155,
        "end": 160
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 177,
              "end": 178
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 194,
                  "end": 195
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
                          "name": "z0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 215
                        },
                        "init": null,
                        "definite": false,
                        "start": 213,
                        "end": 215
                      }
                    ],
                    "declare": false,
                    "start": 209,
                    "end": 216
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
                        "name": "z0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 237
                      },
                      "id": null,
                      "generator": false,
                      "start": 229,
                      "end": 237
                    },
                    "directive": null,
                    "start": 229,
                    "end": 238
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 251,
                    "end": 257
                  }
                ],
                "start": 189,
                "end": 257
              }
            ],
            "start": 169,
            "end": 263
          }
        ],
        "start": 163,
        "end": 265
      },
      "start": 148,
      "end": 265
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 272
          },
          "init": null,
          "definite": false,
          "start": 271,
          "end": 272
        }
      ],
      "declare": false,
      "start": 267,
      "end": 273
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 281,
        "end": 286
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 303,
              "end": 304
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 320,
                  "end": 321
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 339,
                          "end": 340
                        },
                        "init": null,
                        "definite": false,
                        "start": 339,
                        "end": 340
                      }
                    ],
                    "declare": false,
                    "start": 335,
                    "end": 341
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 358,
                        "end": 359
                      },
                      "start": 354,
                      "end": 359
                    },
                    "directive": null,
                    "start": 354,
                    "end": 360
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 373,
                    "end": 379
                  }
                ],
                "start": 315,
                "end": 379
              }
            ],
            "start": 295,
            "end": 385
          }
        ],
        "start": 289,
        "end": 387
      },
      "start": 274,
      "end": 387
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 387
}
```
