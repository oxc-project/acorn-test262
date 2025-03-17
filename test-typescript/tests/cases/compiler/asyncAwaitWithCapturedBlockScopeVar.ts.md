__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 571,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 124,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 39,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 33,
                  "name": "ar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 36,
                  "end": 38,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 44,
            "end": 122,
            "init": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 58,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 58,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 57,
                    "end": 58,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 60,
              "end": 65,
              "left": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 64,
                "end": 65,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 67,
              "end": 70,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 72,
              "end": 122,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 82,
                  "end": 90,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 82,
                    "end": 89,
                    "argument": {
                      "type": "Literal",
                      "start": 88,
                      "end": 89,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 99,
                  "end": 116,
                  "expression": {
                    "type": "CallExpression",
                    "start": 99,
                    "end": 115,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 99,
                      "end": 106,
                      "object": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 101,
                        "name": "ar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 106,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 107,
                        "end": 114,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 114,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
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
      "start": 126,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
        "name": "fn2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 147,
        "end": 265,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 153,
            "end": 165,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 157,
                "end": 164,
                "id": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 159,
                  "name": "ar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 162,
                  "end": 164,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 170,
            "end": 263,
            "init": {
              "type": "VariableDeclaration",
              "start": 175,
              "end": 184,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 179,
                  "end": 184,
                  "id": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 183,
                    "end": 184,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 186,
              "end": 191,
              "left": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 190,
                "end": 191,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 193,
              "end": 196,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 198,
              "end": 263,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 208,
                  "end": 216,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 208,
                    "end": 215,
                    "argument": {
                      "type": "Literal",
                      "start": 214,
                      "end": 215,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 225,
                  "end": 242,
                  "expression": {
                    "type": "CallExpression",
                    "start": 225,
                    "end": 241,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 225,
                      "end": 232,
                      "object": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 227,
                        "name": "ar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 232,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 233,
                        "end": 240,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 267,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 285,
        "name": "fn3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 288,
        "end": 409,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 294,
            "end": 306,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 305,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 300,
                  "name": "ar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 303,
                  "end": 305,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 311,
            "end": 407,
            "init": {
              "type": "VariableDeclaration",
              "start": 316,
              "end": 325,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 320,
                  "end": 325,
                  "id": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 324,
                    "end": 325,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 327,
              "end": 332,
              "left": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 331,
                "end": 332,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 334,
              "end": 337,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 339,
              "end": 407,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 349,
                  "end": 357,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 349,
                    "end": 356,
                    "argument": {
                      "type": "Literal",
                      "start": 355,
                      "end": 356,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 366,
                  "end": 383,
                  "expression": {
                    "type": "CallExpression",
                    "start": 366,
                    "end": 382,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 366,
                      "end": 373,
                      "object": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 368,
                        "name": "ar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 373,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 374,
                        "end": 381,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 381,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ContinueStatement",
                  "start": 392,
                  "end": 401,
                  "label": null
                }
              ]
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
      "start": 411,
      "end": 570,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 429,
        "name": "fn4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 449,
        "end": 570,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 455,
            "end": 467,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 459,
                "end": 466,
                "id": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 461,
                  "name": "ar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 464,
                  "end": 466,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 472,
            "end": 568,
            "init": {
              "type": "VariableDeclaration",
              "start": 477,
              "end": 486,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 481,
                  "end": 486,
                  "id": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 488,
              "end": 493,
              "left": {
                "type": "Identifier",
                "start": 488,
                "end": 489,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 492,
                "end": 493,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 495,
              "end": 498,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 495,
                "end": 496,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 500,
              "end": 568,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 510,
                  "end": 518,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 510,
                    "end": 517,
                    "argument": {
                      "type": "Literal",
                      "start": 516,
                      "end": 517,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 527,
                  "end": 544,
                  "expression": {
                    "type": "CallExpression",
                    "start": 527,
                    "end": 543,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 527,
                      "end": 534,
                      "object": {
                        "type": "Identifier",
                        "start": 527,
                        "end": 529,
                        "name": "ar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 534,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 535,
                        "end": 542,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 542,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 553,
                  "end": 562,
                  "argument": {
                    "type": "Literal",
                    "start": 560,
                    "end": 561,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 431,
        "end": 448,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 433,
          "end": 448,
          "typeName": {
            "type": "Identifier",
            "start": 433,
            "end": 440,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 440,
            "end": 448,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 441,
                "end": 447
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
