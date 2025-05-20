__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 570,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 124,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 33,
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 36,
                  "end": 38,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 44,
            "end": 122,
            "body": {
              "type": "BlockStatement",
              "start": 72,
              "end": 122,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 82,
                  "end": 90,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 82,
                    "end": 89,
                    "argument": {
                      "type": "Literal",
                      "start": 88,
                      "end": 89,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 99,
                  "end": 116,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 99,
                    "end": 115,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 107,
                        "end": 114,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 114,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 99,
                      "end": 106,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 101,
                        "decorators": [],
                        "name": "ar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 106,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 58,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 58,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 57,
                    "end": 58,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 60,
              "end": 65,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 64,
                "end": 65,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 67,
              "end": 70,
              "argument": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 265,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 159,
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 162,
                  "end": 164,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 170,
            "end": 263,
            "body": {
              "type": "BlockStatement",
              "start": 198,
              "end": 263,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 208,
                  "end": 216,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 208,
                    "end": 215,
                    "argument": {
                      "type": "Literal",
                      "start": 214,
                      "end": 215,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 225,
                  "end": 242,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 225,
                    "end": 241,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 233,
                        "end": 240,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 225,
                      "end": 232,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 227,
                        "decorators": [],
                        "name": "ar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 232,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 251,
                  "end": 257,
                  "label": null
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 175,
              "end": 184,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 179,
                  "end": 184,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 183,
                    "end": 184,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 186,
              "end": 191,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 190,
                "end": 191,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 193,
              "end": 196,
              "argument": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 267,
      "end": 409,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 300,
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 303,
                  "end": 305,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 311,
            "end": 407,
            "body": {
              "type": "BlockStatement",
              "start": 339,
              "end": 407,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 349,
                  "end": 357,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 349,
                    "end": 356,
                    "argument": {
                      "type": "Literal",
                      "start": 355,
                      "end": 356,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 366,
                  "end": 383,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 366,
                    "end": 382,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 374,
                        "end": 381,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 381,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 366,
                      "end": 373,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 368,
                        "decorators": [],
                        "name": "ar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 373,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ContinueStatement",
                  "start": 392,
                  "end": 401,
                  "label": null
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 316,
              "end": 325,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 320,
                  "end": 325,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 324,
                    "end": 325,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 327,
              "end": 332,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 331,
                "end": 332,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 334,
              "end": 337,
              "argument": {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 285,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 570,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 461,
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 464,
                  "end": 466,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 472,
            "end": 568,
            "body": {
              "type": "BlockStatement",
              "start": 500,
              "end": 568,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 510,
                  "end": 518,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 510,
                    "end": 517,
                    "argument": {
                      "type": "Literal",
                      "start": 516,
                      "end": 517,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 527,
                  "end": 544,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 527,
                    "end": 543,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 535,
                        "end": 542,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 542,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 527,
                      "end": 534,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 527,
                        "end": 529,
                        "decorators": [],
                        "name": "ar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 534,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 553,
                  "end": 562,
                  "argument": {
                    "type": "Literal",
                    "start": 560,
                    "end": 561,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 477,
              "end": 486,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 481,
                  "end": 486,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 488,
              "end": 493,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 488,
                "end": 489,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 492,
                "end": 493,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 495,
              "end": 498,
              "argument": {
                "type": "Identifier",
                "start": 495,
                "end": 496,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 429,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 431,
        "end": 448,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 433,
          "end": 448,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 433,
            "end": 440,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
