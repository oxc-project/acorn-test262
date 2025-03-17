__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 387,
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
      "type": "ForStatement",
      "start": 7,
      "end": 69,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 69,
        "body": [
          {
            "type": "BlockStatement",
            "start": 28,
            "end": 67,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 38,
                "end": 44,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 42,
                    "end": 43,
                    "id": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
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
                "start": 53,
                "end": 61,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 53,
                  "end": 60,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
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
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
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
      "type": "ForStatement",
      "start": 78,
      "end": 138,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 85,
        "end": 90,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 93,
        "end": 138,
        "body": [
          {
            "type": "BlockStatement",
            "start": 99,
            "end": 136,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 109,
                "end": 115,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 113,
                    "end": 114,
                    "id": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
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
                "start": 124,
                "end": 130,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 124,
                  "end": 129,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 128,
                    "end": 129,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "name": "z0",
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
      "type": "ForStatement",
      "start": 148,
      "end": 265,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 155,
        "end": 160,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 265,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 169,
            "end": 263,
            "discriminant": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "value": 1,
              "raw": "1"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 189,
                "end": 257,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 209,
                    "end": 216,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 213,
                        "end": 215,
                        "id": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 215,
                          "name": "z0",
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
                    "start": 229,
                    "end": 238,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 229,
                      "end": 237,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 237,
                        "name": "z0",
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
                    "start": 251,
                    "end": 257,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 194,
                  "end": 195,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "name": "z",
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
      "type": "ForStatement",
      "start": 274,
      "end": 387,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 281,
        "end": 286,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 387,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 295,
            "end": 385,
            "discriminant": {
              "type": "Literal",
              "start": 303,
              "end": 304,
              "value": 1,
              "raw": "1"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 315,
                "end": 379,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 335,
                    "end": 341,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 339,
                        "end": 340,
                        "id": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 340,
                          "name": "z",
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
                    "start": 354,
                    "end": 360,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 354,
                      "end": 359,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 358,
                        "end": 359,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 373,
                    "end": 379,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 320,
                  "end": 321,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
