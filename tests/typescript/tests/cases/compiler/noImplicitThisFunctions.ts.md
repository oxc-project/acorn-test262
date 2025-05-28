__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 485,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 75,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 96,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 96,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 90,
              "end": 96
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 164,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 165,
          "end": 174,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 174,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 168,
              "end": 174
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 183,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 177,
          "end": 183
        }
      },
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 354,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 335,
            "decorators": [],
            "name": "f4",
            "optional": false,
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
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
                      }
                    }
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
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 338,
            "end": 353,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 338,
                "end": 339,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 352,
                "end": 353,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 381,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "decorators": [],
            "name": "f5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 364,
            "end": 380,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 370,
              "end": 380,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ThisExpression",
                "start": 376,
                "end": 380
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 426,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "decorators": [],
            "name": "f6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 392,
            "end": 425,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "ThisExpression",
                      "start": 418,
                      "end": 422
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 485,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 484,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 433,
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 436,
            "end": 484,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
