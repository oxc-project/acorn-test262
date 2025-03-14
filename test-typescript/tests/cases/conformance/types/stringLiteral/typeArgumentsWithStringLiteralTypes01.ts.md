__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3528,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 37,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "randBool",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 36,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 29,
          "end": 36
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 93,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 71,
        "decorators": [],
        "name": "takeReturnString",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 83,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 83,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 77,
              "end": 83
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 92,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 86,
          "end": 92
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 94,
      "end": 150,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 126,
        "decorators": [],
        "name": "takeReturnHello",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 139,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 139,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 132,
              "end": 139,
              "literal": {
                "type": "Literal",
                "start": 132,
                "end": 139,
                "raw": "\"Hello\"",
                "value": "Hello"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 140,
        "end": 149,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 142,
          "end": 149,
          "literal": {
            "type": "Literal",
            "start": 142,
            "end": 149,
            "raw": "\"Hello\"",
            "value": "Hello"
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 151,
      "end": 232,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 188,
        "decorators": [],
        "name": "takeReturnHelloWorld",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 211,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 192,
            "end": 211,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 194,
              "end": 211,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 194,
                  "end": 201,
                  "literal": {
                    "type": "Literal",
                    "start": 194,
                    "end": 201,
                    "raw": "\"Hello\"",
                    "value": "Hello"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 204,
                  "end": 211,
                  "literal": {
                    "type": "Literal",
                    "start": 204,
                    "end": 211,
                    "raw": "\"World\"",
                    "value": "World"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 212,
        "end": 231,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 214,
          "end": 231,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 214,
              "end": 221,
              "literal": {
                "type": "Literal",
                "start": 214,
                "end": 221,
                "raw": "\"Hello\"",
                "value": "Hello"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 224,
              "end": 231,
              "literal": {
                "type": "Literal",
                "start": 224,
                "end": 231,
                "raw": "\"World\"",
                "value": "World"
              }
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 234,
      "end": 297,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 263,
        "end": 297,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 269,
            "end": 295,
            "argument": {
              "type": "ConditionalExpression",
              "start": 276,
              "end": 294,
              "alternate": {
                "type": "Identifier",
                "start": 293,
                "end": 294,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 289,
                "end": 290,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "test": {
                "type": "CallExpression",
                "start": 276,
                "end": 286,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 284,
                  "decorators": [],
                  "name": "randBool",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 247,
        "decorators": [],
        "name": "fun1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 251,
          "end": 255,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 255,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 254,
              "end": 255,
              "typeName": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 257,
          "end": 261,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 258,
            "end": 261,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 261,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 247,
        "end": 250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 248,
            "end": 249,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 299,
      "end": 365,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 331,
        "end": 365,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 337,
            "end": 363,
            "argument": {
              "type": "ConditionalExpression",
              "start": 344,
              "end": 362,
              "alternate": {
                "type": "Identifier",
                "start": 361,
                "end": 362,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 357,
                "end": 358,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "test": {
                "type": "CallExpression",
                "start": 344,
                "end": 354,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 352,
                  "decorators": [],
                  "name": "randBool",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 312,
        "decorators": [],
        "name": "fun2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 319,
          "end": 323,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 320,
            "end": 323,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 322,
              "end": 323,
              "typeName": {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 325,
          "end": 329,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 326,
            "end": 329,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 328,
              "end": 329,
              "typeName": {
                "type": "Identifier",
                "start": 328,
                "end": 329,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 312,
        "end": 318,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 313,
            "end": 314,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 316,
            "end": 317,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 367,
      "end": 434,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 401,
        "end": 434,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 407,
            "end": 432,
            "argument": {
              "type": "MemberExpression",
              "start": 414,
              "end": 431,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 414,
                "end": 418,
                "decorators": [],
                "name": "args",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "UnaryExpression",
                "start": 419,
                "end": 430,
                "argument": {
                  "type": "CallExpression",
                  "start": 420,
                  "end": 430,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 428,
                    "decorators": [],
                    "name": "randBool",
                    "optional": false
                  },
                  "optional": false
                },
                "operator": "+",
                "prefix": true
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 380,
        "decorators": [],
        "name": "fun3",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 384,
          "end": 396,
          "argument": {
            "type": "Identifier",
            "start": 387,
            "end": 391,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 396,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 393,
              "end": 396,
              "elementType": {
                "type": "TSTypeReference",
                "start": 393,
                "end": 394,
                "typeName": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 394,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 397,
        "end": 400,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 399,
          "end": 400,
          "typeName": {
            "type": "Identifier",
            "start": 399,
            "end": 400,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 380,
        "end": 383,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 381,
            "end": 382,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 381,
              "end": 382,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 436,
      "end": 1469,
      "body": {
        "type": "TSModuleBlock",
        "start": 449,
        "end": 1469,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 647,
            "end": 685,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 654,
              "end": 685,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 658,
                  "end": 684,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 659,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 662,
                    "end": 684,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 667,
                        "end": 674,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 676,
                        "end": 683,
                        "raw": "\"World\"",
                        "value": "World"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 662,
                      "end": 666,
                      "decorators": [],
                      "name": "fun1",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 690,
            "end": 728,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 697,
              "end": 728,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 701,
                  "end": 727,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 702,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 705,
                    "end": 727,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 710,
                        "end": 717,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 719,
                        "end": 726,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 705,
                      "end": 709,
                      "decorators": [],
                      "name": "fun1",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 733,
            "end": 771,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 740,
              "end": 771,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 744,
                  "end": 770,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 745,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 748,
                    "end": 770,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 753,
                        "end": 760,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 762,
                        "end": 769,
                        "raw": "\"World\"",
                        "value": "World"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 752,
                      "decorators": [],
                      "name": "fun2",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 776,
            "end": 814,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 783,
              "end": 814,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 787,
                  "end": 813,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 787,
                    "end": 788,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 791,
                    "end": 813,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 796,
                        "end": 803,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 805,
                        "end": 812,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 791,
                      "end": 795,
                      "decorators": [],
                      "name": "fun2",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 819,
            "end": 873,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 826,
              "end": 873,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 830,
                  "end": 872,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 830,
                    "end": 831,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 834,
                    "end": 872,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 839,
                        "end": 846,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 848,
                        "end": 855,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 857,
                        "end": 864,
                        "raw": "\"World\"",
                        "value": "World"
                      },
                      {
                        "type": "Literal",
                        "start": 866,
                        "end": 871,
                        "raw": "\"Foo\"",
                        "value": "Foo"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 838,
                      "decorators": [],
                      "name": "fun3",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 902,
            "end": 926,
            "expression": {
              "type": "AssignmentExpression",
              "start": 902,
              "end": 925,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 902,
                "end": 903,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 906,
                "end": 925,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 923,
                    "end": 924,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 906,
                  "end": 922,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 931,
            "end": 955,
            "expression": {
              "type": "AssignmentExpression",
              "start": 931,
              "end": 954,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 931,
                "end": 932,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 935,
                "end": 954,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 952,
                    "end": 953,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 935,
                  "end": 951,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 960,
            "end": 984,
            "expression": {
              "type": "AssignmentExpression",
              "start": 960,
              "end": 983,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 960,
                "end": 961,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 964,
                "end": 983,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 981,
                    "end": 982,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 964,
                  "end": 980,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 989,
            "end": 1013,
            "expression": {
              "type": "AssignmentExpression",
              "start": 989,
              "end": 1012,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 989,
                "end": 990,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 993,
                "end": 1012,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1011,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 993,
                  "end": 1009,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1018,
            "end": 1042,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1018,
              "end": 1041,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1018,
                "end": 1019,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1022,
                "end": 1041,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1039,
                    "end": 1040,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1038,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1109,
            "end": 1132,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1109,
              "end": 1131,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1109,
                "end": 1110,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1113,
                "end": 1131,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1129,
                    "end": 1130,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1113,
                  "end": 1128,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1137,
            "end": 1160,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1137,
              "end": 1159,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1137,
                "end": 1138,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1141,
                "end": 1159,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1157,
                    "end": 1158,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1141,
                  "end": 1156,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1165,
            "end": 1188,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1165,
              "end": 1187,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1165,
                "end": 1166,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1169,
                "end": 1187,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1185,
                    "end": 1186,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1184,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1193,
            "end": 1216,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1193,
              "end": 1215,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1193,
                "end": 1194,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1197,
                "end": 1215,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1214,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1197,
                  "end": 1212,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1221,
            "end": 1244,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1221,
              "end": 1243,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1221,
                "end": 1222,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1225,
                "end": 1243,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1242,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1225,
                  "end": 1240,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1307,
            "end": 1335,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1307,
              "end": 1334,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1307,
                "end": 1308,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1311,
                "end": 1334,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1332,
                    "end": 1333,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1311,
                  "end": 1331,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1340,
            "end": 1368,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1340,
              "end": 1367,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1340,
                "end": 1341,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1344,
                "end": 1367,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1365,
                    "end": 1366,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1364,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1373,
            "end": 1401,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1373,
              "end": 1400,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1373,
                "end": 1374,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1377,
                "end": 1400,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1398,
                    "end": 1399,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1377,
                  "end": 1397,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1406,
            "end": 1434,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1406,
              "end": 1433,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1406,
                "end": 1407,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1410,
                "end": 1433,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1431,
                    "end": 1432,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1430,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1439,
            "end": 1467,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1439,
              "end": 1466,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1439,
                "end": 1440,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1443,
                "end": 1466,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1464,
                    "end": 1465,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1443,
                  "end": 1463,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 448,
        "decorators": [],
        "name": "n1",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1471,
      "end": 2480,
      "body": {
        "type": "TSModuleBlock",
        "start": 1484,
        "end": 2480,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1599,
            "end": 1646,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1606,
              "end": 1646,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1610,
                  "end": 1645,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1610,
                    "end": 1611,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1614,
                    "end": 1645,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1628,
                        "end": 1635,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 1637,
                        "end": 1644,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1614,
                      "end": 1618,
                      "decorators": [],
                      "name": "fun1",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1618,
                      "end": 1627,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 1619,
                          "end": 1626,
                          "literal": {
                            "type": "Literal",
                            "start": 1619,
                            "end": 1626,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1651,
            "end": 1698,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1658,
              "end": 1698,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1662,
                  "end": 1697,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1662,
                    "end": 1663,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1666,
                    "end": 1697,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1680,
                        "end": 1687,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 1689,
                        "end": 1696,
                        "raw": "\"World\"",
                        "value": "World"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1666,
                      "end": 1670,
                      "decorators": [],
                      "name": "fun1",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1670,
                      "end": 1679,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 1671,
                          "end": 1678,
                          "literal": {
                            "type": "Literal",
                            "start": 1671,
                            "end": 1678,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1703,
            "end": 1759,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1710,
              "end": 1759,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1714,
                  "end": 1758,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1714,
                    "end": 1715,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1718,
                    "end": 1758,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1741,
                        "end": 1748,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 1750,
                        "end": 1757,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1718,
                      "end": 1722,
                      "decorators": [],
                      "name": "fun2",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1722,
                      "end": 1740,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 1723,
                          "end": 1730,
                          "literal": {
                            "type": "Literal",
                            "start": 1723,
                            "end": 1730,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1732,
                          "end": 1739,
                          "literal": {
                            "type": "Literal",
                            "start": 1732,
                            "end": 1739,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1764,
            "end": 1820,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1771,
              "end": 1820,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1775,
                  "end": 1819,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1775,
                    "end": 1776,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1779,
                    "end": 1819,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1802,
                        "end": 1809,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 1811,
                        "end": 1818,
                        "raw": "\"World\"",
                        "value": "World"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1779,
                      "end": 1783,
                      "decorators": [],
                      "name": "fun2",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1783,
                      "end": 1801,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 1784,
                          "end": 1791,
                          "literal": {
                            "type": "Literal",
                            "start": 1784,
                            "end": 1791,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1793,
                          "end": 1800,
                          "literal": {
                            "type": "Literal",
                            "start": 1793,
                            "end": 1800,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1825,
            "end": 1872,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1832,
              "end": 1872,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1836,
                  "end": 1871,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1836,
                    "end": 1837,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1840,
                    "end": 1871,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1854,
                        "end": 1861,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 1863,
                        "end": 1870,
                        "raw": "\"World\"",
                        "value": "World"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1840,
                      "end": 1844,
                      "decorators": [],
                      "name": "fun3",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1844,
                      "end": 1853,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 1845,
                          "end": 1852,
                          "literal": {
                            "type": "Literal",
                            "start": 1845,
                            "end": 1852,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 1943,
            "end": 1967,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1943,
              "end": 1966,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1943,
                "end": 1944,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1947,
                "end": 1966,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1964,
                    "end": 1965,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1947,
                  "end": 1963,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1972,
            "end": 1996,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1972,
              "end": 1995,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1972,
                "end": 1973,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1976,
                "end": 1995,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1993,
                    "end": 1994,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1976,
                  "end": 1992,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2001,
            "end": 2025,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2001,
              "end": 2024,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2001,
                "end": 2002,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2005,
                "end": 2024,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2022,
                    "end": 2023,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2005,
                  "end": 2021,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2030,
            "end": 2054,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2030,
              "end": 2053,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2030,
                "end": 2031,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2034,
                "end": 2053,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2051,
                    "end": 2052,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2034,
                  "end": 2050,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2059,
            "end": 2083,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2059,
              "end": 2082,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2059,
                "end": 2060,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2063,
                "end": 2082,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2080,
                    "end": 2081,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2063,
                  "end": 2079,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2112,
            "end": 2135,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2112,
              "end": 2134,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2112,
                "end": 2113,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2116,
                "end": 2134,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2132,
                    "end": 2133,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2116,
                  "end": 2131,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2140,
            "end": 2163,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2140,
              "end": 2162,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2140,
                "end": 2141,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2144,
                "end": 2162,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2160,
                    "end": 2161,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2144,
                  "end": 2159,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2168,
            "end": 2191,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2168,
              "end": 2190,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2168,
                "end": 2169,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2172,
                "end": 2190,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2188,
                    "end": 2189,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2172,
                  "end": 2187,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2196,
            "end": 2219,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2196,
              "end": 2218,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2196,
                "end": 2197,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2200,
                "end": 2218,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2216,
                    "end": 2217,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2200,
                  "end": 2215,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2224,
            "end": 2247,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2224,
              "end": 2246,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2224,
                "end": 2225,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2228,
                "end": 2246,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2244,
                    "end": 2245,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2228,
                  "end": 2243,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2318,
            "end": 2346,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2318,
              "end": 2345,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2318,
                "end": 2319,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2322,
                "end": 2345,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2343,
                    "end": 2344,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2322,
                  "end": 2342,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2351,
            "end": 2379,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2351,
              "end": 2378,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2351,
                "end": 2352,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2355,
                "end": 2378,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2376,
                    "end": 2377,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2355,
                  "end": 2375,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2384,
            "end": 2412,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2384,
              "end": 2411,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2384,
                "end": 2385,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2388,
                "end": 2411,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2409,
                    "end": 2410,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2388,
                  "end": 2408,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2417,
            "end": 2445,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2417,
              "end": 2444,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2417,
                "end": 2418,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2421,
                "end": 2444,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2442,
                    "end": 2443,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2421,
                  "end": 2441,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2450,
            "end": 2478,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2450,
              "end": 2477,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2450,
                "end": 2451,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2454,
                "end": 2477,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2475,
                    "end": 2476,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2454,
                  "end": 2474,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1481,
        "end": 1483,
        "decorators": [],
        "name": "n2",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2483,
      "end": 3528,
      "body": {
        "type": "TSModuleBlock",
        "start": 2496,
        "end": 3528,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2621,
            "end": 2677,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2628,
              "end": 2677,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2632,
                  "end": 2676,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2632,
                    "end": 2633,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2636,
                    "end": 2676,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2659,
                        "end": 2666,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 2668,
                        "end": 2675,
                        "raw": "\"World\"",
                        "value": "World"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2636,
                      "end": 2640,
                      "decorators": [],
                      "name": "fun2",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2640,
                      "end": 2658,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 2641,
                          "end": 2648,
                          "literal": {
                            "type": "Literal",
                            "start": 2641,
                            "end": 2648,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2650,
                          "end": 2657,
                          "literal": {
                            "type": "Literal",
                            "start": 2650,
                            "end": 2657,
                            "raw": "\"World\"",
                            "value": "World"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2682,
            "end": 2738,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2689,
              "end": 2738,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2693,
                  "end": 2737,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2693,
                    "end": 2694,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2697,
                    "end": 2737,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2720,
                        "end": 2727,
                        "raw": "\"World\"",
                        "value": "World"
                      },
                      {
                        "type": "Literal",
                        "start": 2729,
                        "end": 2736,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2697,
                      "end": 2701,
                      "decorators": [],
                      "name": "fun2",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2701,
                      "end": 2719,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 2702,
                          "end": 2709,
                          "literal": {
                            "type": "Literal",
                            "start": 2702,
                            "end": 2709,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2711,
                          "end": 2718,
                          "literal": {
                            "type": "Literal",
                            "start": 2711,
                            "end": 2718,
                            "raw": "\"World\"",
                            "value": "World"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2743,
            "end": 2799,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2750,
              "end": 2799,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2754,
                  "end": 2798,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2754,
                    "end": 2755,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2758,
                    "end": 2798,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2781,
                        "end": 2788,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 2790,
                        "end": 2797,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2758,
                      "end": 2762,
                      "decorators": [],
                      "name": "fun2",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2762,
                      "end": 2780,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 2763,
                          "end": 2770,
                          "literal": {
                            "type": "Literal",
                            "start": 2763,
                            "end": 2770,
                            "raw": "\"World\"",
                            "value": "World"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2772,
                          "end": 2779,
                          "literal": {
                            "type": "Literal",
                            "start": 2772,
                            "end": 2779,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2804,
            "end": 2860,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2811,
              "end": 2860,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2815,
                  "end": 2859,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2815,
                    "end": 2816,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2819,
                    "end": 2859,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2842,
                        "end": 2849,
                        "raw": "\"World\"",
                        "value": "World"
                      },
                      {
                        "type": "Literal",
                        "start": 2851,
                        "end": 2858,
                        "raw": "\"World\"",
                        "value": "World"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2819,
                      "end": 2823,
                      "decorators": [],
                      "name": "fun2",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2823,
                      "end": 2841,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 2824,
                          "end": 2831,
                          "literal": {
                            "type": "Literal",
                            "start": 2824,
                            "end": 2831,
                            "raw": "\"World\"",
                            "value": "World"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2833,
                          "end": 2840,
                          "literal": {
                            "type": "Literal",
                            "start": 2833,
                            "end": 2840,
                            "raw": "\"Hello\"",
                            "value": "Hello"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2865,
            "end": 2922,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2872,
              "end": 2922,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2876,
                  "end": 2921,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2876,
                    "end": 2877,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2880,
                    "end": 2921,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2904,
                        "end": 2911,
                        "raw": "\"Hello\"",
                        "value": "Hello"
                      },
                      {
                        "type": "Literal",
                        "start": 2913,
                        "end": 2920,
                        "raw": "\"World\"",
                        "value": "World"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2880,
                      "end": 2884,
                      "decorators": [],
                      "name": "fun3",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2884,
                      "end": 2903,
                      "params": [
                        {
                          "type": "TSUnionType",
                          "start": 2885,
                          "end": 2902,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 2885,
                              "end": 2892,
                              "literal": {
                                "type": "Literal",
                                "start": 2885,
                                "end": 2892,
                                "raw": "\"Hello\"",
                                "value": "Hello"
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 2895,
                              "end": 2902,
                              "literal": {
                                "type": "Literal",
                                "start": 2895,
                                "end": 2902,
                                "raw": "\"World\"",
                                "value": "World"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 2993,
            "end": 3017,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2993,
              "end": 3016,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2993,
                "end": 2994,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2997,
                "end": 3016,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3014,
                    "end": 3015,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2997,
                  "end": 3013,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3022,
            "end": 3046,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3022,
              "end": 3045,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3022,
                "end": 3023,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3026,
                "end": 3045,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3043,
                    "end": 3044,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3026,
                  "end": 3042,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3051,
            "end": 3075,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3051,
              "end": 3074,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3051,
                "end": 3052,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3055,
                "end": 3074,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3072,
                    "end": 3073,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3055,
                  "end": 3071,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3080,
            "end": 3104,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3080,
              "end": 3103,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3080,
                "end": 3081,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3084,
                "end": 3103,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3101,
                    "end": 3102,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3084,
                  "end": 3100,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3109,
            "end": 3133,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3109,
              "end": 3132,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3109,
                "end": 3110,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3113,
                "end": 3132,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3130,
                    "end": 3131,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3113,
                  "end": 3129,
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3196,
            "end": 3219,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3196,
              "end": 3218,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3196,
                "end": 3197,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3200,
                "end": 3218,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3216,
                    "end": 3217,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3200,
                  "end": 3215,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3224,
            "end": 3247,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3224,
              "end": 3246,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3224,
                "end": 3225,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3228,
                "end": 3246,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3244,
                    "end": 3245,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3228,
                  "end": 3243,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3252,
            "end": 3275,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3252,
              "end": 3274,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3252,
                "end": 3253,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3256,
                "end": 3274,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3272,
                    "end": 3273,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3256,
                  "end": 3271,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3280,
            "end": 3303,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3280,
              "end": 3302,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3280,
                "end": 3281,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3284,
                "end": 3302,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3300,
                    "end": 3301,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3284,
                  "end": 3299,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3308,
            "end": 3331,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3308,
              "end": 3330,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3308,
                "end": 3309,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3312,
                "end": 3330,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3328,
                    "end": 3329,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3312,
                  "end": 3327,
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3366,
            "end": 3394,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3366,
              "end": 3393,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3366,
                "end": 3367,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3370,
                "end": 3393,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3391,
                    "end": 3392,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3370,
                  "end": 3390,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3399,
            "end": 3427,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3399,
              "end": 3426,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3399,
                "end": 3400,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3403,
                "end": 3426,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3424,
                    "end": 3425,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3403,
                  "end": 3423,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3432,
            "end": 3460,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3432,
              "end": 3459,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3432,
                "end": 3433,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3436,
                "end": 3459,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3457,
                    "end": 3458,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3436,
                  "end": 3456,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3465,
            "end": 3493,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3465,
              "end": 3492,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3465,
                "end": 3466,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3469,
                "end": 3492,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3490,
                    "end": 3491,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3469,
                  "end": 3489,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3498,
            "end": 3526,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3498,
              "end": 3525,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3498,
                "end": 3499,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3502,
                "end": 3525,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3523,
                    "end": 3524,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3502,
                  "end": 3522,
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 2493,
        "end": 2495,
        "decorators": [],
        "name": "n3",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
