__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 486,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 73,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 58,
            "end": 71,
            "argument": {
              "type": "BinaryExpression",
              "start": 65,
              "end": 70,
              "left": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 69,
                "end": 70,
                "value": 1,
                "raw": "1"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 75,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 96,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 96,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 90,
              "end": 96
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 151,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 136,
            "end": 149,
            "argument": {
              "type": "BinaryExpression",
              "start": 143,
              "end": 148,
              "left": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 147,
                "end": 148,
                "value": 1,
                "raw": "1"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 164,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 165,
          "end": 174,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 174,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 168,
              "end": 174
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 184,
        "end": 247,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 227,
            "end": 245,
            "argument": {
              "type": "BinaryExpression",
              "start": 234,
              "end": 244,
              "left": {
                "type": "MemberExpression",
                "start": 234,
                "end": 240,
                "object": {
                  "type": "ThisExpression",
                  "start": 234,
                  "end": 238
                },
                "property": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 183,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 177,
          "end": 183
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 335,
            "name": "f4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 335,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 314,
                "end": 335,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 315,
                    "end": 324,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 326,
                  "end": 335,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 329,
                    "end": 335
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 338,
            "end": 353,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 338,
                "end": 339,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 343,
              "end": 353,
              "left": {
                "type": "MemberExpression",
                "start": 343,
                "end": 349,
                "object": {
                  "type": "ThisExpression",
                  "start": 343,
                  "end": 347
                },
                "property": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 349,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 352,
                "end": 353,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "name": "f5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 364,
            "end": 380,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 370,
              "end": 380,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "ThisExpression",
                "start": 376,
                "end": 380
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "name": "f6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 392,
            "end": 425,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 403,
              "end": 425,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 405,
                  "end": 423,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 412,
                    "end": 422,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "ThisExpression",
                      "start": 418,
                      "end": 422
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 484,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 433,
            "name": "f7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 436,
            "end": 484,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 447,
              "end": 484,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 449,
                  "end": 482,
                  "argument": {
                    "type": "FunctionExpression",
                    "start": 456,
                    "end": 482,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 467,
                      "end": 482,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 469,
                          "end": 480,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 476,
                            "end": 480
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
