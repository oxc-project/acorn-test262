__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4485,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 54,
        "decorators": [],
        "name": "foo0",
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
          "start": 55,
          "end": 56,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 237,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 64,
            "end": 222,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 69,
              "end": 74,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 73,
                  "end": 74,
                  "id": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
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
            "right": {
              "type": "ArrayExpression",
              "start": 78,
              "end": 80,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 82,
              "end": 222,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 92,
                  "end": 102,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 96,
                      "end": 101,
                      "id": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 111,
                  "end": 141,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 112,
                    "end": 139,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 123,
                      "end": 139,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 125,
                          "end": 137,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 132,
                            "end": 137,
                            "left": {
                              "type": "Identifier",
                              "start": 132,
                              "end": 133,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 137,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 150,
                  "end": 164,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 151,
                    "end": 162,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 157,
                      "end": 162,
                      "left": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 158,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 173,
                  "end": 216,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 177,
                    "end": 183,
                    "left": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 182,
                      "end": 183,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 185,
                    "end": 216,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 199,
                        "end": 206,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 228,
            "end": 235,
            "expression": {
              "type": "CallExpression",
              "start": 228,
              "end": 234,
              "callee": {
                "type": "Identifier",
                "start": 228,
                "end": 231,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 233,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 438,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 253,
        "decorators": [],
        "name": "foo00",
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
          "start": 254,
          "end": 255,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 438,
        "body": [
          {
            "type": "ForInStatement",
            "start": 263,
            "end": 423,
            "left": {
              "type": "VariableDeclaration",
              "start": 268,
              "end": 273,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 272,
                  "end": 273,
                  "id": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
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
            "right": {
              "type": "ArrayExpression",
              "start": 277,
              "end": 279,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 281,
              "end": 423,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 291,
                  "end": 301,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 295,
                      "end": 300,
                      "id": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 300,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 310,
                  "end": 340,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 311,
                    "end": 338,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 322,
                      "end": 338,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 324,
                          "end": 336,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 331,
                            "end": 336,
                            "left": {
                              "type": "Identifier",
                              "start": 331,
                              "end": 332,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 335,
                              "end": 336,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 349,
                  "end": 363,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 350,
                    "end": 361,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 356,
                      "end": 361,
                      "left": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 357,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 361,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 372,
                  "end": 417,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 376,
                    "end": 384,
                    "left": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 377,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 381,
                      "end": 384,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 386,
                    "end": 417,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 400,
                        "end": 407,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 429,
            "end": 436,
            "expression": {
              "type": "CallExpression",
              "start": 429,
              "end": 435,
              "callee": {
                "type": "Identifier",
                "start": 429,
                "end": 432,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 440,
      "end": 646,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 453,
        "decorators": [],
        "name": "foo1",
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
          "start": 454,
          "end": 455,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 457,
        "end": 646,
        "body": [
          {
            "type": "ForStatement",
            "start": 463,
            "end": 631,
            "init": {
              "type": "VariableDeclaration",
              "start": 468,
              "end": 477,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 472,
                  "end": 477,
                  "id": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 473,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 476,
                    "end": 477,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 479,
              "end": 484,
              "left": {
                "type": "Identifier",
                "start": 479,
                "end": 480,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 483,
                "end": 484,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 486,
              "end": 489,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 488,
                "end": 489,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 491,
              "end": 631,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 501,
                  "end": 511,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 505,
                      "end": 510,
                      "id": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 509,
                        "end": 510,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 520,
                  "end": 550,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 521,
                    "end": 548,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 532,
                      "end": 548,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 534,
                          "end": 546,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 541,
                            "end": 546,
                            "left": {
                              "type": "Identifier",
                              "start": 541,
                              "end": 542,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 545,
                              "end": 546,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 559,
                  "end": 573,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 560,
                    "end": 571,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 566,
                      "end": 571,
                      "left": {
                        "type": "Identifier",
                        "start": 566,
                        "end": 567,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 571,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 582,
                  "end": 625,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 586,
                    "end": 592,
                    "left": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 587,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 591,
                      "end": 592,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 594,
                    "end": 625,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 608,
                        "end": 615,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 637,
            "end": 644,
            "expression": {
              "type": "CallExpression",
              "start": 637,
              "end": 643,
              "callee": {
                "type": "Identifier",
                "start": 637,
                "end": 640,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 641,
                  "end": 642,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 648,
      "end": 865,
      "id": {
        "type": "Identifier",
        "start": 657,
        "end": 661,
        "decorators": [],
        "name": "foo2",
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
          "start": 662,
          "end": 663,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 665,
        "end": 865,
        "body": [
          {
            "type": "WhileStatement",
            "start": 671,
            "end": 846,
            "test": {
              "type": "BinaryExpression",
              "start": 678,
              "end": 685,
              "left": {
                "type": "Literal",
                "start": 678,
                "end": 679,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 684,
                "end": 685,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 687,
              "end": 846,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 697,
                  "end": 707,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 701,
                      "end": 706,
                      "id": {
                        "type": "Identifier",
                        "start": 701,
                        "end": 702,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 705,
                        "end": 706,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 716,
                  "end": 726,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 720,
                      "end": 725,
                      "id": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 724,
                        "end": 725,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 735,
                  "end": 765,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 736,
                    "end": 763,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 747,
                      "end": 763,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 749,
                          "end": 761,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 756,
                            "end": 761,
                            "left": {
                              "type": "Identifier",
                              "start": 756,
                              "end": 757,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 760,
                              "end": 761,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 774,
                  "end": 788,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 775,
                    "end": 786,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 781,
                      "end": 786,
                      "left": {
                        "type": "Identifier",
                        "start": 781,
                        "end": 782,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 785,
                        "end": 786,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 797,
                  "end": 840,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 801,
                    "end": 807,
                    "left": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 802,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 806,
                      "end": 807,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 809,
                    "end": 840,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 823,
                        "end": 830,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 856,
            "end": 863,
            "expression": {
              "type": "CallExpression",
              "start": 856,
              "end": 862,
              "callee": {
                "type": "Identifier",
                "start": 856,
                "end": 859,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 860,
                  "end": 861,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 867,
      "end": 1079,
      "id": {
        "type": "Identifier",
        "start": 876,
        "end": 880,
        "decorators": [],
        "name": "foo3",
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
          "start": 881,
          "end": 882,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 884,
        "end": 1079,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 890,
            "end": 1060,
            "body": {
              "type": "BlockStatement",
              "start": 893,
              "end": 1044,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 903,
                  "end": 909,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 907,
                      "end": 908,
                      "id": {
                        "type": "Identifier",
                        "start": 907,
                        "end": 908,
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
                  "type": "VariableDeclaration",
                  "start": 918,
                  "end": 924,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 922,
                      "end": 923,
                      "id": {
                        "type": "Identifier",
                        "start": 922,
                        "end": 923,
                        "decorators": [],
                        "name": "v",
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
                  "start": 933,
                  "end": 963,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 934,
                    "end": 961,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 945,
                      "end": 961,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 947,
                          "end": 959,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 954,
                            "end": 959,
                            "left": {
                              "type": "Identifier",
                              "start": 954,
                              "end": 955,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 958,
                              "end": 959,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 972,
                  "end": 986,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 973,
                    "end": 984,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 979,
                      "end": 984,
                      "left": {
                        "type": "Identifier",
                        "start": 979,
                        "end": 980,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 983,
                        "end": 984,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 995,
                  "end": 1038,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 999,
                    "end": 1005,
                    "left": {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1000,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 1004,
                      "end": 1005,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1007,
                    "end": 1038,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1021,
                        "end": 1028,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1052,
              "end": 1059,
              "left": {
                "type": "Literal",
                "start": 1052,
                "end": 1053,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1058,
                "end": 1059,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1070,
            "end": 1077,
            "expression": {
              "type": "CallExpression",
              "start": 1070,
              "end": 1076,
              "callee": {
                "type": "Identifier",
                "start": 1070,
                "end": 1073,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1074,
                  "end": 1075,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1081,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1090,
        "end": 1094,
        "decorators": [],
        "name": "foo4",
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
          "start": 1095,
          "end": 1096,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1098,
        "end": 1310,
        "body": [
          {
            "type": "ForStatement",
            "start": 1104,
            "end": 1291,
            "init": {
              "type": "VariableDeclaration",
              "start": 1109,
              "end": 1118,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1113,
                  "end": 1118,
                  "id": {
                    "type": "Identifier",
                    "start": 1113,
                    "end": 1114,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1117,
                    "end": 1118,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1120,
              "end": 1125,
              "left": {
                "type": "Identifier",
                "start": 1120,
                "end": 1121,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 1124,
                "end": 1125,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1127,
              "end": 1130,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1129,
                "end": 1130,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1132,
              "end": 1291,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1142,
                  "end": 1152,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1146,
                      "end": 1151,
                      "id": {
                        "type": "Identifier",
                        "start": 1146,
                        "end": 1147,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1150,
                        "end": 1151,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1161,
                  "end": 1171,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1165,
                      "end": 1170,
                      "id": {
                        "type": "Identifier",
                        "start": 1165,
                        "end": 1166,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1169,
                        "end": 1170,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1180,
                  "end": 1210,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1181,
                    "end": 1208,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1192,
                      "end": 1208,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1194,
                          "end": 1206,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1201,
                            "end": 1206,
                            "left": {
                              "type": "Identifier",
                              "start": 1201,
                              "end": 1202,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1205,
                              "end": 1206,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1219,
                  "end": 1233,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1220,
                    "end": 1231,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1226,
                      "end": 1231,
                      "left": {
                        "type": "Identifier",
                        "start": 1226,
                        "end": 1227,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1230,
                        "end": 1231,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1242,
                  "end": 1285,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1246,
                    "end": 1252,
                    "left": {
                      "type": "Identifier",
                      "start": 1246,
                      "end": 1247,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 1251,
                      "end": 1252,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1254,
                    "end": 1285,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1268,
                        "end": 1275,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1301,
            "end": 1308,
            "expression": {
              "type": "CallExpression",
              "start": 1301,
              "end": 1307,
              "callee": {
                "type": "Identifier",
                "start": 1301,
                "end": 1304,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1306,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1312,
      "end": 1537,
      "id": {
        "type": "Identifier",
        "start": 1321,
        "end": 1325,
        "decorators": [],
        "name": "foo5",
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
          "start": 1326,
          "end": 1327,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1329,
        "end": 1537,
        "body": [
          {
            "type": "ForStatement",
            "start": 1335,
            "end": 1518,
            "init": {
              "type": "VariableDeclaration",
              "start": 1340,
              "end": 1356,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1344,
                  "end": 1349,
                  "id": {
                    "type": "Identifier",
                    "start": 1344,
                    "end": 1345,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1348,
                    "end": 1349,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 1351,
                  "end": 1356,
                  "id": {
                    "type": "Identifier",
                    "start": 1351,
                    "end": 1352,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1355,
                    "end": 1356,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1358,
              "end": 1363,
              "left": {
                "type": "Identifier",
                "start": 1358,
                "end": 1359,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 1362,
                "end": 1363,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1365,
              "end": 1368,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1367,
                "end": 1368,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1370,
              "end": 1518,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1380,
                  "end": 1390,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1384,
                      "end": 1389,
                      "id": {
                        "type": "Identifier",
                        "start": 1384,
                        "end": 1385,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1388,
                        "end": 1389,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1399,
                  "end": 1433,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1400,
                    "end": 1431,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1411,
                      "end": 1431,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1413,
                          "end": 1429,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1420,
                            "end": 1429,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1420,
                              "end": 1425,
                              "left": {
                                "type": "Identifier",
                                "start": 1420,
                                "end": 1421,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 1424,
                                "end": 1425,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1428,
                              "end": 1429,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1442,
                  "end": 1460,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1443,
                    "end": 1458,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1449,
                      "end": 1458,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1449,
                        "end": 1454,
                        "left": {
                          "type": "Identifier",
                          "start": 1449,
                          "end": 1450,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 1453,
                          "end": 1454,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1457,
                        "end": 1458,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1469,
                  "end": 1512,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1473,
                    "end": 1479,
                    "left": {
                      "type": "Identifier",
                      "start": 1473,
                      "end": 1474,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 1478,
                      "end": 1479,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1481,
                    "end": 1512,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1495,
                        "end": 1502,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1528,
            "end": 1535,
            "expression": {
              "type": "CallExpression",
              "start": 1528,
              "end": 1534,
              "callee": {
                "type": "Identifier",
                "start": 1528,
                "end": 1531,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1532,
                  "end": 1533,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1540,
      "end": 1764,
      "id": {
        "type": "Identifier",
        "start": 1549,
        "end": 1553,
        "decorators": [],
        "name": "foo6",
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
          "start": 1554,
          "end": 1555,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1557,
        "end": 1764,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1563,
            "end": 1745,
            "test": {
              "type": "BinaryExpression",
              "start": 1570,
              "end": 1577,
              "left": {
                "type": "Literal",
                "start": 1570,
                "end": 1571,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1576,
                "end": 1577,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1579,
              "end": 1745,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1589,
                  "end": 1598,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1593,
                      "end": 1594,
                      "id": {
                        "type": "Identifier",
                        "start": 1593,
                        "end": 1594,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": null,
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 1596,
                      "end": 1597,
                      "id": {
                        "type": "Identifier",
                        "start": 1596,
                        "end": 1597,
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
                  "type": "VariableDeclaration",
                  "start": 1607,
                  "end": 1617,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1611,
                      "end": 1616,
                      "id": {
                        "type": "Identifier",
                        "start": 1611,
                        "end": 1612,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1615,
                        "end": 1616,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1626,
                  "end": 1660,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1627,
                    "end": 1658,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1638,
                      "end": 1658,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1640,
                          "end": 1656,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1647,
                            "end": 1656,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1647,
                              "end": 1652,
                              "left": {
                                "type": "Identifier",
                                "start": 1647,
                                "end": 1648,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 1651,
                                "end": 1652,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1655,
                              "end": 1656,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1669,
                  "end": 1687,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1670,
                    "end": 1685,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1676,
                      "end": 1685,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1676,
                        "end": 1681,
                        "left": {
                          "type": "Identifier",
                          "start": 1676,
                          "end": 1677,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 1680,
                          "end": 1681,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1684,
                        "end": 1685,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1696,
                  "end": 1739,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1700,
                    "end": 1706,
                    "left": {
                      "type": "Identifier",
                      "start": 1700,
                      "end": 1701,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 1705,
                      "end": 1706,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1708,
                    "end": 1739,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1722,
                        "end": 1729,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "EmptyStatement",
            "start": 1745,
            "end": 1746
          },
          {
            "type": "ExpressionStatement",
            "start": 1756,
            "end": 1762,
            "expression": {
              "type": "CallExpression",
              "start": 1756,
              "end": 1762,
              "callee": {
                "type": "Identifier",
                "start": 1756,
                "end": 1759,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1760,
                  "end": 1761,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1766,
      "end": 1994,
      "id": {
        "type": "Identifier",
        "start": 1775,
        "end": 1779,
        "decorators": [],
        "name": "foo7",
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
          "start": 1780,
          "end": 1781,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1783,
        "end": 1994,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 1789,
            "end": 1975,
            "body": {
              "type": "BlockStatement",
              "start": 1792,
              "end": 1958,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1802,
                  "end": 1811,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1806,
                      "end": 1807,
                      "id": {
                        "type": "Identifier",
                        "start": 1806,
                        "end": 1807,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": null,
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 1809,
                      "end": 1810,
                      "id": {
                        "type": "Identifier",
                        "start": 1809,
                        "end": 1810,
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
                  "type": "VariableDeclaration",
                  "start": 1820,
                  "end": 1830,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1824,
                      "end": 1829,
                      "id": {
                        "type": "Identifier",
                        "start": 1824,
                        "end": 1825,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1828,
                        "end": 1829,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1839,
                  "end": 1873,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1840,
                    "end": 1871,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1851,
                      "end": 1871,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1853,
                          "end": 1869,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1860,
                            "end": 1869,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1860,
                              "end": 1865,
                              "left": {
                                "type": "Identifier",
                                "start": 1860,
                                "end": 1861,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 1864,
                                "end": 1865,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1868,
                              "end": 1869,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1882,
                  "end": 1900,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1883,
                    "end": 1898,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1889,
                      "end": 1898,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1889,
                        "end": 1894,
                        "left": {
                          "type": "Identifier",
                          "start": 1889,
                          "end": 1890,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 1893,
                          "end": 1894,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1897,
                        "end": 1898,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1909,
                  "end": 1952,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1913,
                    "end": 1919,
                    "left": {
                      "type": "Identifier",
                      "start": 1913,
                      "end": 1914,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 1918,
                      "end": 1919,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1921,
                    "end": 1952,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1935,
                        "end": 1942,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1966,
              "end": 1973,
              "left": {
                "type": "Literal",
                "start": 1966,
                "end": 1967,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1972,
                "end": 1973,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1985,
            "end": 1992,
            "expression": {
              "type": "CallExpression",
              "start": 1985,
              "end": 1991,
              "callee": {
                "type": "Identifier",
                "start": 1985,
                "end": 1988,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1989,
                  "end": 1990,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1997,
      "end": 2234,
      "id": {
        "type": "Identifier",
        "start": 2006,
        "end": 2010,
        "decorators": [],
        "name": "foo8",
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
          "start": 2011,
          "end": 2012,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2014,
        "end": 2234,
        "body": [
          {
            "type": "ForStatement",
            "start": 2020,
            "end": 2215,
            "init": {
              "type": "VariableDeclaration",
              "start": 2025,
              "end": 2034,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2029,
                  "end": 2034,
                  "id": {
                    "type": "Identifier",
                    "start": 2029,
                    "end": 2030,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2033,
                    "end": 2034,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2036,
              "end": 2041,
              "left": {
                "type": "Identifier",
                "start": 2036,
                "end": 2037,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 2040,
                "end": 2041,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 2043,
              "end": 2046,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 2045,
                "end": 2046,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 2048,
              "end": 2215,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2058,
                  "end": 2068,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2062,
                      "end": 2067,
                      "id": {
                        "type": "Identifier",
                        "start": 2062,
                        "end": 2063,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2066,
                        "end": 2067,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2077,
                  "end": 2087,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2081,
                      "end": 2086,
                      "id": {
                        "type": "Identifier",
                        "start": 2081,
                        "end": 2082,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2085,
                        "end": 2086,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2096,
                  "end": 2130,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2097,
                    "end": 2128,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2108,
                      "end": 2128,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2110,
                          "end": 2126,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2117,
                            "end": 2126,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 2117,
                              "end": 2122,
                              "left": {
                                "type": "Identifier",
                                "start": 2117,
                                "end": 2118,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 2121,
                                "end": 2122,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2125,
                              "end": 2126,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2139,
                  "end": 2157,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2140,
                    "end": 2155,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2146,
                      "end": 2155,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2146,
                        "end": 2151,
                        "left": {
                          "type": "Identifier",
                          "start": 2146,
                          "end": 2147,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 2150,
                          "end": 2151,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2154,
                        "end": 2155,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 2166,
                  "end": 2209,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 2170,
                    "end": 2176,
                    "left": {
                      "type": "Identifier",
                      "start": 2170,
                      "end": 2171,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 2175,
                      "end": 2176,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 2178,
                    "end": 2209,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2192,
                        "end": 2199,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2225,
            "end": 2232,
            "expression": {
              "type": "CallExpression",
              "start": 2225,
              "end": 2231,
              "callee": {
                "type": "Identifier",
                "start": 2225,
                "end": 2228,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2229,
                  "end": 2230,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2248,
      "end": 2448,
      "id": {
        "type": "Identifier",
        "start": 2257,
        "end": 2263,
        "decorators": [],
        "name": "foo0_c",
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
          "start": 2264,
          "end": 2265,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2267,
        "end": 2448,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 2273,
            "end": 2433,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2278,
              "end": 2285,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2284,
                  "end": 2285,
                  "id": {
                    "type": "Identifier",
                    "start": 2284,
                    "end": 2285,
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
            "right": {
              "type": "ArrayExpression",
              "start": 2289,
              "end": 2291,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2293,
              "end": 2433,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2303,
                  "end": 2313,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2307,
                      "end": 2312,
                      "id": {
                        "type": "Identifier",
                        "start": 2307,
                        "end": 2308,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2311,
                        "end": 2312,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2322,
                  "end": 2352,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2323,
                    "end": 2350,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2334,
                      "end": 2350,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2336,
                          "end": 2348,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2343,
                            "end": 2348,
                            "left": {
                              "type": "Identifier",
                              "start": 2343,
                              "end": 2344,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2347,
                              "end": 2348,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2361,
                  "end": 2375,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2362,
                    "end": 2373,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2368,
                      "end": 2373,
                      "left": {
                        "type": "Identifier",
                        "start": 2368,
                        "end": 2369,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2372,
                        "end": 2373,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 2384,
                  "end": 2427,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 2388,
                    "end": 2394,
                    "left": {
                      "type": "Identifier",
                      "start": 2388,
                      "end": 2389,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 2393,
                      "end": 2394,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 2396,
                    "end": 2427,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2410,
                        "end": 2417,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2439,
            "end": 2446,
            "expression": {
              "type": "CallExpression",
              "start": 2439,
              "end": 2445,
              "callee": {
                "type": "Identifier",
                "start": 2439,
                "end": 2442,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2443,
                  "end": 2444,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2450,
      "end": 2653,
      "id": {
        "type": "Identifier",
        "start": 2459,
        "end": 2466,
        "decorators": [],
        "name": "foo00_c",
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
          "start": 2467,
          "end": 2468,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2470,
        "end": 2653,
        "body": [
          {
            "type": "ForInStatement",
            "start": 2476,
            "end": 2638,
            "left": {
              "type": "VariableDeclaration",
              "start": 2481,
              "end": 2488,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2487,
                  "end": 2488,
                  "id": {
                    "type": "Identifier",
                    "start": 2487,
                    "end": 2488,
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
            "right": {
              "type": "ArrayExpression",
              "start": 2492,
              "end": 2494,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2496,
              "end": 2638,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2506,
                  "end": 2516,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2510,
                      "end": 2515,
                      "id": {
                        "type": "Identifier",
                        "start": 2510,
                        "end": 2511,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2514,
                        "end": 2515,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2525,
                  "end": 2555,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2526,
                    "end": 2553,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2537,
                      "end": 2553,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2539,
                          "end": 2551,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2546,
                            "end": 2551,
                            "left": {
                              "type": "Identifier",
                              "start": 2546,
                              "end": 2547,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2550,
                              "end": 2551,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2564,
                  "end": 2578,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2565,
                    "end": 2576,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2571,
                      "end": 2576,
                      "left": {
                        "type": "Identifier",
                        "start": 2571,
                        "end": 2572,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2575,
                        "end": 2576,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 2587,
                  "end": 2632,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 2591,
                    "end": 2599,
                    "left": {
                      "type": "Identifier",
                      "start": 2591,
                      "end": 2592,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 2596,
                      "end": 2599,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 2601,
                    "end": 2632,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2615,
                        "end": 2622,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2644,
            "end": 2651,
            "expression": {
              "type": "CallExpression",
              "start": 2644,
              "end": 2650,
              "callee": {
                "type": "Identifier",
                "start": 2644,
                "end": 2647,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2648,
                  "end": 2649,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2655,
      "end": 2861,
      "id": {
        "type": "Identifier",
        "start": 2664,
        "end": 2670,
        "decorators": [],
        "name": "foo1_c",
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
          "start": 2671,
          "end": 2672,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2674,
        "end": 2861,
        "body": [
          {
            "type": "ForStatement",
            "start": 2680,
            "end": 2846,
            "init": {
              "type": "VariableDeclaration",
              "start": 2685,
              "end": 2696,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2691,
                  "end": 2696,
                  "id": {
                    "type": "Identifier",
                    "start": 2691,
                    "end": 2692,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2695,
                    "end": 2696,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2698,
              "end": 2703,
              "left": {
                "type": "Identifier",
                "start": 2698,
                "end": 2699,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 2702,
                "end": 2703,
                "value": 1,
                "raw": "1"
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2706,
              "end": 2846,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2716,
                  "end": 2726,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2720,
                      "end": 2725,
                      "id": {
                        "type": "Identifier",
                        "start": 2720,
                        "end": 2721,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2724,
                        "end": 2725,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2735,
                  "end": 2765,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2736,
                    "end": 2763,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2747,
                      "end": 2763,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2749,
                          "end": 2761,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2756,
                            "end": 2761,
                            "left": {
                              "type": "Identifier",
                              "start": 2756,
                              "end": 2757,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2760,
                              "end": 2761,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2774,
                  "end": 2788,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2775,
                    "end": 2786,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2781,
                      "end": 2786,
                      "left": {
                        "type": "Identifier",
                        "start": 2781,
                        "end": 2782,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2785,
                        "end": 2786,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 2797,
                  "end": 2840,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 2801,
                    "end": 2807,
                    "left": {
                      "type": "Identifier",
                      "start": 2801,
                      "end": 2802,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 2806,
                      "end": 2807,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 2809,
                    "end": 2840,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2823,
                        "end": 2830,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2852,
            "end": 2859,
            "expression": {
              "type": "CallExpression",
              "start": 2852,
              "end": 2858,
              "callee": {
                "type": "Identifier",
                "start": 2852,
                "end": 2855,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2856,
                  "end": 2857,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2863,
      "end": 3084,
      "id": {
        "type": "Identifier",
        "start": 2872,
        "end": 2878,
        "decorators": [],
        "name": "foo2_c",
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
          "start": 2879,
          "end": 2880,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2882,
        "end": 3084,
        "body": [
          {
            "type": "WhileStatement",
            "start": 2888,
            "end": 3065,
            "test": {
              "type": "BinaryExpression",
              "start": 2895,
              "end": 2902,
              "left": {
                "type": "Literal",
                "start": 2895,
                "end": 2896,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2901,
                "end": 2902,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 2904,
              "end": 3065,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2914,
                  "end": 2926,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2920,
                      "end": 2925,
                      "id": {
                        "type": "Identifier",
                        "start": 2920,
                        "end": 2921,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2924,
                        "end": 2925,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2935,
                  "end": 2945,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2939,
                      "end": 2944,
                      "id": {
                        "type": "Identifier",
                        "start": 2939,
                        "end": 2940,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2943,
                        "end": 2944,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2954,
                  "end": 2984,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2955,
                    "end": 2982,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2966,
                      "end": 2982,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2968,
                          "end": 2980,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2975,
                            "end": 2980,
                            "left": {
                              "type": "Identifier",
                              "start": 2975,
                              "end": 2976,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2979,
                              "end": 2980,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2993,
                  "end": 3007,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2994,
                    "end": 3005,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3000,
                      "end": 3005,
                      "left": {
                        "type": "Identifier",
                        "start": 3000,
                        "end": 3001,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3004,
                        "end": 3005,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 3016,
                  "end": 3059,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 3020,
                    "end": 3026,
                    "left": {
                      "type": "Identifier",
                      "start": 3020,
                      "end": 3021,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 3025,
                      "end": 3026,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3028,
                    "end": 3059,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 3042,
                        "end": 3049,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3075,
            "end": 3082,
            "expression": {
              "type": "CallExpression",
              "start": 3075,
              "end": 3081,
              "callee": {
                "type": "Identifier",
                "start": 3075,
                "end": 3078,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3079,
                  "end": 3080,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3086,
      "end": 3306,
      "id": {
        "type": "Identifier",
        "start": 3095,
        "end": 3101,
        "decorators": [],
        "name": "foo3_c",
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
          "start": 3102,
          "end": 3103,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3105,
        "end": 3306,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 3111,
            "end": 3287,
            "body": {
              "type": "BlockStatement",
              "start": 3114,
              "end": 3271,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3124,
                  "end": 3136,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3130,
                      "end": 3135,
                      "id": {
                        "type": "Identifier",
                        "start": 3130,
                        "end": 3131,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3134,
                        "end": 3135,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3145,
                  "end": 3151,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3149,
                      "end": 3150,
                      "id": {
                        "type": "Identifier",
                        "start": 3149,
                        "end": 3150,
                        "decorators": [],
                        "name": "v",
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
                  "start": 3160,
                  "end": 3190,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 3161,
                    "end": 3188,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3172,
                      "end": 3188,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3174,
                          "end": 3186,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3181,
                            "end": 3186,
                            "left": {
                              "type": "Identifier",
                              "start": 3181,
                              "end": 3182,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 3185,
                              "end": 3186,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3199,
                  "end": 3213,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3200,
                    "end": 3211,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3206,
                      "end": 3211,
                      "left": {
                        "type": "Identifier",
                        "start": 3206,
                        "end": 3207,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3210,
                        "end": 3211,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 3222,
                  "end": 3265,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 3226,
                    "end": 3232,
                    "left": {
                      "type": "Identifier",
                      "start": 3226,
                      "end": 3227,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 3231,
                      "end": 3232,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3234,
                    "end": 3265,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 3248,
                        "end": 3255,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3279,
              "end": 3286,
              "left": {
                "type": "Literal",
                "start": 3279,
                "end": 3280,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 3285,
                "end": 3286,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3297,
            "end": 3304,
            "expression": {
              "type": "CallExpression",
              "start": 3297,
              "end": 3303,
              "callee": {
                "type": "Identifier",
                "start": 3297,
                "end": 3300,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3301,
                  "end": 3302,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3308,
      "end": 3537,
      "id": {
        "type": "Identifier",
        "start": 3317,
        "end": 3323,
        "decorators": [],
        "name": "foo4_c",
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
          "start": 3324,
          "end": 3325,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3327,
        "end": 3537,
        "body": [
          {
            "type": "ForStatement",
            "start": 3333,
            "end": 3518,
            "init": {
              "type": "VariableDeclaration",
              "start": 3338,
              "end": 3349,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3344,
                  "end": 3349,
                  "id": {
                    "type": "Identifier",
                    "start": 3344,
                    "end": 3345,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 3348,
                    "end": 3349,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3351,
              "end": 3356,
              "left": {
                "type": "Identifier",
                "start": 3351,
                "end": 3352,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 3355,
                "end": 3356,
                "value": 1,
                "raw": "1"
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 3359,
              "end": 3518,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3369,
                  "end": 3379,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3373,
                      "end": 3378,
                      "id": {
                        "type": "Identifier",
                        "start": 3373,
                        "end": 3374,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3377,
                        "end": 3378,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3388,
                  "end": 3398,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3392,
                      "end": 3397,
                      "id": {
                        "type": "Identifier",
                        "start": 3392,
                        "end": 3393,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3396,
                        "end": 3397,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3407,
                  "end": 3437,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 3408,
                    "end": 3435,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3419,
                      "end": 3435,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3421,
                          "end": 3433,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3428,
                            "end": 3433,
                            "left": {
                              "type": "Identifier",
                              "start": 3428,
                              "end": 3429,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 3432,
                              "end": 3433,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3446,
                  "end": 3460,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3447,
                    "end": 3458,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3453,
                      "end": 3458,
                      "left": {
                        "type": "Identifier",
                        "start": 3453,
                        "end": 3454,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3457,
                        "end": 3458,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 3469,
                  "end": 3512,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 3473,
                    "end": 3479,
                    "left": {
                      "type": "Identifier",
                      "start": 3473,
                      "end": 3474,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 3478,
                      "end": 3479,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3481,
                    "end": 3512,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 3495,
                        "end": 3502,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3528,
            "end": 3535,
            "expression": {
              "type": "CallExpression",
              "start": 3528,
              "end": 3534,
              "callee": {
                "type": "Identifier",
                "start": 3528,
                "end": 3531,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3532,
                  "end": 3533,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3539,
      "end": 3764,
      "id": {
        "type": "Identifier",
        "start": 3548,
        "end": 3554,
        "decorators": [],
        "name": "foo5_c",
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
          "start": 3555,
          "end": 3556,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3558,
        "end": 3764,
        "body": [
          {
            "type": "ForStatement",
            "start": 3564,
            "end": 3745,
            "init": {
              "type": "VariableDeclaration",
              "start": 3569,
              "end": 3587,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3575,
                  "end": 3580,
                  "id": {
                    "type": "Identifier",
                    "start": 3575,
                    "end": 3576,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 3579,
                    "end": 3580,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 3582,
                  "end": 3587,
                  "id": {
                    "type": "Identifier",
                    "start": 3582,
                    "end": 3583,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 3586,
                    "end": 3587,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3589,
              "end": 3594,
              "left": {
                "type": "Identifier",
                "start": 3589,
                "end": 3590,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 3593,
                "end": 3594,
                "value": 1,
                "raw": "1"
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 3597,
              "end": 3745,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3607,
                  "end": 3617,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3611,
                      "end": 3616,
                      "id": {
                        "type": "Identifier",
                        "start": 3611,
                        "end": 3612,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3615,
                        "end": 3616,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3626,
                  "end": 3660,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 3627,
                    "end": 3658,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3638,
                      "end": 3658,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3640,
                          "end": 3656,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3647,
                            "end": 3656,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 3647,
                              "end": 3652,
                              "left": {
                                "type": "Identifier",
                                "start": 3647,
                                "end": 3648,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 3651,
                                "end": 3652,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 3655,
                              "end": 3656,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3669,
                  "end": 3687,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3670,
                    "end": 3685,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3676,
                      "end": 3685,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 3676,
                        "end": 3681,
                        "left": {
                          "type": "Identifier",
                          "start": 3676,
                          "end": 3677,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 3680,
                          "end": 3681,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3684,
                        "end": 3685,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 3696,
                  "end": 3739,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 3700,
                    "end": 3706,
                    "left": {
                      "type": "Identifier",
                      "start": 3700,
                      "end": 3701,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 3705,
                      "end": 3706,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3708,
                    "end": 3739,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 3722,
                        "end": 3729,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3755,
            "end": 3762,
            "expression": {
              "type": "CallExpression",
              "start": 3755,
              "end": 3761,
              "callee": {
                "type": "Identifier",
                "start": 3755,
                "end": 3758,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3759,
                  "end": 3760,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3767,
      "end": 4002,
      "id": {
        "type": "Identifier",
        "start": 3776,
        "end": 3782,
        "decorators": [],
        "name": "foo6_c",
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
          "start": 3783,
          "end": 3784,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3786,
        "end": 4002,
        "body": [
          {
            "type": "WhileStatement",
            "start": 3792,
            "end": 3984,
            "test": {
              "type": "BinaryExpression",
              "start": 3799,
              "end": 3806,
              "left": {
                "type": "Literal",
                "start": 3799,
                "end": 3800,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 3805,
                "end": 3806,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 3808,
              "end": 3984,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3818,
                  "end": 3837,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3824,
                      "end": 3829,
                      "id": {
                        "type": "Identifier",
                        "start": 3824,
                        "end": 3825,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3828,
                        "end": 3829,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 3831,
                      "end": 3836,
                      "id": {
                        "type": "Identifier",
                        "start": 3831,
                        "end": 3832,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3835,
                        "end": 3836,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3846,
                  "end": 3856,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3850,
                      "end": 3855,
                      "id": {
                        "type": "Identifier",
                        "start": 3850,
                        "end": 3851,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3854,
                        "end": 3855,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3865,
                  "end": 3899,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 3866,
                    "end": 3897,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3877,
                      "end": 3897,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3879,
                          "end": 3895,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3886,
                            "end": 3895,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 3886,
                              "end": 3891,
                              "left": {
                                "type": "Identifier",
                                "start": 3886,
                                "end": 3887,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 3890,
                                "end": 3891,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 3894,
                              "end": 3895,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3908,
                  "end": 3926,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3909,
                    "end": 3924,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3915,
                      "end": 3924,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 3915,
                        "end": 3920,
                        "left": {
                          "type": "Identifier",
                          "start": 3915,
                          "end": 3916,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 3919,
                          "end": 3920,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3923,
                        "end": 3924,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 3935,
                  "end": 3978,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 3939,
                    "end": 3945,
                    "left": {
                      "type": "Identifier",
                      "start": 3939,
                      "end": 3940,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 3944,
                      "end": 3945,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3947,
                    "end": 3978,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 3961,
                        "end": 3968,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3994,
            "end": 4000,
            "expression": {
              "type": "CallExpression",
              "start": 3994,
              "end": 4000,
              "callee": {
                "type": "Identifier",
                "start": 3994,
                "end": 3997,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3998,
                  "end": 3999,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4004,
      "end": 4243,
      "id": {
        "type": "Identifier",
        "start": 4013,
        "end": 4019,
        "decorators": [],
        "name": "foo7_c",
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
          "start": 4020,
          "end": 4021,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4023,
        "end": 4243,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 4029,
            "end": 4224,
            "body": {
              "type": "BlockStatement",
              "start": 4032,
              "end": 4208,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4042,
                  "end": 4061,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4048,
                      "end": 4053,
                      "id": {
                        "type": "Identifier",
                        "start": 4048,
                        "end": 4049,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 4052,
                        "end": 4053,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 4055,
                      "end": 4060,
                      "id": {
                        "type": "Identifier",
                        "start": 4055,
                        "end": 4056,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 4059,
                        "end": 4060,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 4070,
                  "end": 4080,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4074,
                      "end": 4079,
                      "id": {
                        "type": "Identifier",
                        "start": 4074,
                        "end": 4075,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 4078,
                        "end": 4079,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4089,
                  "end": 4123,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 4090,
                    "end": 4121,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 4101,
                      "end": 4121,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 4103,
                          "end": 4119,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 4110,
                            "end": 4119,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 4110,
                              "end": 4115,
                              "left": {
                                "type": "Identifier",
                                "start": 4110,
                                "end": 4111,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 4114,
                                "end": 4115,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 4118,
                              "end": 4119,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4132,
                  "end": 4150,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 4133,
                    "end": 4148,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 4139,
                      "end": 4148,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 4139,
                        "end": 4144,
                        "left": {
                          "type": "Identifier",
                          "start": 4139,
                          "end": 4140,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 4143,
                          "end": 4144,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 4147,
                        "end": 4148,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 4159,
                  "end": 4202,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 4163,
                    "end": 4169,
                    "left": {
                      "type": "Identifier",
                      "start": 4163,
                      "end": 4164,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 4168,
                      "end": 4169,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 4171,
                    "end": 4202,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 4185,
                        "end": 4192,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4216,
              "end": 4223,
              "left": {
                "type": "Literal",
                "start": 4216,
                "end": 4217,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4222,
                "end": 4223,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 4234,
            "end": 4241,
            "expression": {
              "type": "CallExpression",
              "start": 4234,
              "end": 4240,
              "callee": {
                "type": "Identifier",
                "start": 4234,
                "end": 4237,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 4238,
                  "end": 4239,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4246,
      "end": 4485,
      "id": {
        "type": "Identifier",
        "start": 4255,
        "end": 4261,
        "decorators": [],
        "name": "foo8_c",
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
          "start": 4262,
          "end": 4263,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4265,
        "end": 4485,
        "body": [
          {
            "type": "ForStatement",
            "start": 4271,
            "end": 4466,
            "init": {
              "type": "VariableDeclaration",
              "start": 4276,
              "end": 4287,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4282,
                  "end": 4287,
                  "id": {
                    "type": "Identifier",
                    "start": 4282,
                    "end": 4283,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 4286,
                    "end": 4287,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4289,
              "end": 4294,
              "left": {
                "type": "Identifier",
                "start": 4289,
                "end": 4290,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 4293,
                "end": 4294,
                "value": 1,
                "raw": "1"
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 4297,
              "end": 4466,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4307,
                  "end": 4319,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4313,
                      "end": 4318,
                      "id": {
                        "type": "Identifier",
                        "start": 4313,
                        "end": 4314,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 4317,
                        "end": 4318,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 4328,
                  "end": 4338,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4332,
                      "end": 4337,
                      "id": {
                        "type": "Identifier",
                        "start": 4332,
                        "end": 4333,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 4336,
                        "end": 4337,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4347,
                  "end": 4381,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 4348,
                    "end": 4379,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 4359,
                      "end": 4379,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 4361,
                          "end": 4377,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 4368,
                            "end": 4377,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 4368,
                              "end": 4373,
                              "left": {
                                "type": "Identifier",
                                "start": 4368,
                                "end": 4369,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 4372,
                                "end": 4373,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 4376,
                              "end": 4377,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4390,
                  "end": 4408,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 4391,
                    "end": 4406,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 4397,
                      "end": 4406,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 4397,
                        "end": 4402,
                        "left": {
                          "type": "Identifier",
                          "start": 4397,
                          "end": 4398,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 4401,
                          "end": 4402,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 4405,
                        "end": 4406,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 4417,
                  "end": 4460,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 4421,
                    "end": 4427,
                    "left": {
                      "type": "Identifier",
                      "start": 4421,
                      "end": 4422,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 4426,
                      "end": 4427,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 4429,
                    "end": 4460,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 4443,
                        "end": 4450,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 4476,
            "end": 4483,
            "expression": {
              "type": "CallExpression",
              "start": 4476,
              "end": 4482,
              "callee": {
                "type": "Identifier",
                "start": 4476,
                "end": 4479,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 4480,
                  "end": 4481,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
