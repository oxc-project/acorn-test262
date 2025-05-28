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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
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
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 42,
                    "end": 43,
                    "id": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
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
                "start": 53,
                "end": 61,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 53,
                  "end": 60,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
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
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 77,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
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
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 113,
                    "end": 114,
                    "id": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
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
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "decorators": [],
            "name": "z0",
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
                "test": {
                  "type": "Literal",
                  "start": 194,
                  "end": 195,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 209,
                    "end": 216,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 213,
                        "end": 215,
                        "id": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 215,
                          "decorators": [],
                          "name": "z0",
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
                    "start": 229,
                    "end": 238,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 229,
                      "end": 237,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 237,
                        "decorators": [],
                        "name": "z0",
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
                    "start": 251,
                    "end": 257,
                    "label": null
                  }
                ]
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "decorators": [],
            "name": "z",
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
                "test": {
                  "type": "Literal",
                  "start": 320,
                  "end": 321,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 335,
                    "end": 341,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 339,
                        "end": 340,
                        "id": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 340,
                          "decorators": [],
                          "name": "z",
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
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
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
                ]
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
