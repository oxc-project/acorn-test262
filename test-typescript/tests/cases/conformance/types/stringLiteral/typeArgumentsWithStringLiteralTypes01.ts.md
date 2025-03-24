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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "name": "randBool",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 71,
        "name": "takeReturnString",
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
          "start": 72,
          "end": 83,
          "name": "str",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 83,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 77,
              "end": 83
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 126,
        "name": "takeReturnHello",
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
          "start": 127,
          "end": 139,
          "name": "str",
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
                "value": "Hello",
                "raw": "\"Hello\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "value": "Hello",
            "raw": "\"Hello\""
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 151,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 188,
        "name": "takeReturnHelloWorld",
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
          "start": 189,
          "end": 211,
          "name": "str",
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
                    "value": "Hello",
                    "raw": "\"Hello\""
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
                    "value": "World",
                    "raw": "\"World\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
                "value": "Hello",
                "raw": "\"Hello\""
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
                "value": "World",
                "raw": "\"World\""
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
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 247,
        "name": "fun1",
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
          "start": 251,
          "end": 255,
          "name": "x",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 257,
          "end": 261,
          "name": "y",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "CallExpression",
                "start": 276,
                "end": 286,
                "callee": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 284,
                  "name": "randBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "Identifier",
                "start": 289,
                "end": 290,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 293,
                "end": 294,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 247,
        "end": 250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 248,
            "end": 249,
            "name": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 299,
      "end": 365,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 312,
        "name": "fun2",
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
          "start": 319,
          "end": 323,
          "name": "x",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 325,
          "end": 329,
          "name": "y",
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "CallExpression",
                "start": 344,
                "end": 354,
                "callee": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 352,
                  "name": "randBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "Identifier",
                "start": 357,
                "end": 358,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 361,
                "end": 362,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 312,
        "end": 318,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 313,
            "end": 314,
            "name": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 316,
            "end": 317,
            "name": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 367,
      "end": 434,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 380,
        "name": "fun3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 384,
          "end": 396,
          "argument": {
            "type": "Identifier",
            "start": 387,
            "end": 391,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
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
              "object": {
                "type": "Identifier",
                "start": 414,
                "end": 418,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "UnaryExpression",
                "start": 419,
                "end": 430,
                "operator": "+",
                "prefix": true,
                "argument": {
                  "type": "CallExpression",
                  "start": 420,
                  "end": 430,
                  "callee": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 428,
                    "name": "randBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "computed": true,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 380,
        "end": 383,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 381,
            "end": 382,
            "name": {
              "type": "Identifier",
              "start": 381,
              "end": 382,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 436,
      "end": 1469,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 448,
        "name": "n1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 449,
        "end": 1469,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 647,
            "end": 685,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 654,
              "end": 685,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 658,
                  "end": 684,
                  "id": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 659,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 662,
                    "end": 684,
                    "callee": {
                      "type": "Identifier",
                      "start": 662,
                      "end": 666,
                      "name": "fun1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 667,
                        "end": 674,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 676,
                        "end": 683,
                        "value": "World",
                        "raw": "\"World\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 690,
            "end": 728,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 697,
              "end": 728,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 701,
                  "end": 727,
                  "id": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 702,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 705,
                    "end": 727,
                    "callee": {
                      "type": "Identifier",
                      "start": 705,
                      "end": 709,
                      "name": "fun1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 710,
                        "end": 717,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 719,
                        "end": 726,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 733,
            "end": 771,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 740,
              "end": 771,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 744,
                  "end": 770,
                  "id": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 745,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 748,
                    "end": 770,
                    "callee": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 752,
                      "name": "fun2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 753,
                        "end": 760,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 762,
                        "end": 769,
                        "value": "World",
                        "raw": "\"World\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 776,
            "end": 814,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 783,
              "end": 814,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 787,
                  "end": 813,
                  "id": {
                    "type": "Identifier",
                    "start": 787,
                    "end": 788,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 791,
                    "end": 813,
                    "callee": {
                      "type": "Identifier",
                      "start": 791,
                      "end": 795,
                      "name": "fun2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 796,
                        "end": 803,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 805,
                        "end": 812,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 819,
            "end": 873,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 826,
              "end": 873,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 830,
                  "end": 872,
                  "id": {
                    "type": "Identifier",
                    "start": 830,
                    "end": 831,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 834,
                    "end": 872,
                    "callee": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 838,
                      "name": "fun3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 839,
                        "end": 846,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 848,
                        "end": 855,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 857,
                        "end": 864,
                        "value": "World",
                        "raw": "\"World\""
                      },
                      {
                        "type": "Literal",
                        "start": 866,
                        "end": 871,
                        "value": "Foo",
                        "raw": "\"Foo\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 906,
                "end": 925,
                "callee": {
                  "type": "Identifier",
                  "start": 906,
                  "end": 922,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 923,
                    "end": 924,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 935,
                "end": 954,
                "callee": {
                  "type": "Identifier",
                  "start": 935,
                  "end": 951,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 952,
                    "end": 953,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 964,
                "end": 983,
                "callee": {
                  "type": "Identifier",
                  "start": 964,
                  "end": 980,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 981,
                    "end": 982,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 993,
                "end": 1012,
                "callee": {
                  "type": "Identifier",
                  "start": 993,
                  "end": 1009,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1011,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1022,
                "end": 1041,
                "callee": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1038,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1039,
                    "end": 1040,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1113,
                "end": 1131,
                "callee": {
                  "type": "Identifier",
                  "start": 1113,
                  "end": 1128,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1129,
                    "end": 1130,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1141,
                "end": 1159,
                "callee": {
                  "type": "Identifier",
                  "start": 1141,
                  "end": 1156,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1157,
                    "end": 1158,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1169,
                "end": 1187,
                "callee": {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1184,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1185,
                    "end": 1186,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1197,
                "end": 1215,
                "callee": {
                  "type": "Identifier",
                  "start": 1197,
                  "end": 1212,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1214,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1225,
                "end": 1243,
                "callee": {
                  "type": "Identifier",
                  "start": 1225,
                  "end": 1240,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1242,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1311,
                "end": 1334,
                "callee": {
                  "type": "Identifier",
                  "start": 1311,
                  "end": 1331,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1332,
                    "end": 1333,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1344,
                "end": 1367,
                "callee": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1364,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1365,
                    "end": 1366,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1377,
                "end": 1400,
                "callee": {
                  "type": "Identifier",
                  "start": 1377,
                  "end": 1397,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1398,
                    "end": 1399,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1410,
                "end": 1433,
                "callee": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1430,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1431,
                    "end": 1432,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1443,
                "end": 1466,
                "callee": {
                  "type": "Identifier",
                  "start": 1443,
                  "end": 1463,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1464,
                    "end": 1465,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1471,
      "end": 2480,
      "id": {
        "type": "Identifier",
        "start": 1481,
        "end": 1483,
        "name": "n2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1484,
        "end": 2480,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1599,
            "end": 1646,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1606,
              "end": 1646,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1610,
                  "end": 1645,
                  "id": {
                    "type": "Identifier",
                    "start": 1610,
                    "end": 1611,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1614,
                    "end": 1645,
                    "callee": {
                      "type": "Identifier",
                      "start": 1614,
                      "end": 1618,
                      "name": "fun1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1628,
                        "end": 1635,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 1637,
                        "end": 1644,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      }
                    ],
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
                            "value": "Hello",
                            "raw": "\"Hello\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1651,
            "end": 1698,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1658,
              "end": 1698,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1662,
                  "end": 1697,
                  "id": {
                    "type": "Identifier",
                    "start": 1662,
                    "end": 1663,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1666,
                    "end": 1697,
                    "callee": {
                      "type": "Identifier",
                      "start": 1666,
                      "end": 1670,
                      "name": "fun1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1680,
                        "end": 1687,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 1689,
                        "end": 1696,
                        "value": "World",
                        "raw": "\"World\""
                      }
                    ],
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
                            "value": "Hello",
                            "raw": "\"Hello\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1703,
            "end": 1759,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1710,
              "end": 1759,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1714,
                  "end": 1758,
                  "id": {
                    "type": "Identifier",
                    "start": 1714,
                    "end": 1715,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1718,
                    "end": 1758,
                    "callee": {
                      "type": "Identifier",
                      "start": 1718,
                      "end": 1722,
                      "name": "fun2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1741,
                        "end": 1748,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 1750,
                        "end": 1757,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      }
                    ],
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
                            "value": "Hello",
                            "raw": "\"Hello\""
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
                            "value": "Hello",
                            "raw": "\"Hello\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1764,
            "end": 1820,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1771,
              "end": 1820,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1775,
                  "end": 1819,
                  "id": {
                    "type": "Identifier",
                    "start": 1775,
                    "end": 1776,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1779,
                    "end": 1819,
                    "callee": {
                      "type": "Identifier",
                      "start": 1779,
                      "end": 1783,
                      "name": "fun2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1802,
                        "end": 1809,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 1811,
                        "end": 1818,
                        "value": "World",
                        "raw": "\"World\""
                      }
                    ],
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
                            "value": "Hello",
                            "raw": "\"Hello\""
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
                            "value": "Hello",
                            "raw": "\"Hello\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1825,
            "end": 1872,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1832,
              "end": 1872,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1836,
                  "end": 1871,
                  "id": {
                    "type": "Identifier",
                    "start": 1836,
                    "end": 1837,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1840,
                    "end": 1871,
                    "callee": {
                      "type": "Identifier",
                      "start": 1840,
                      "end": 1844,
                      "name": "fun3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1854,
                        "end": 1861,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 1863,
                        "end": 1870,
                        "value": "World",
                        "raw": "\"World\""
                      }
                    ],
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
                            "value": "Hello",
                            "raw": "\"Hello\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1947,
                "end": 1966,
                "callee": {
                  "type": "Identifier",
                  "start": 1947,
                  "end": 1963,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1964,
                    "end": 1965,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1976,
                "end": 1995,
                "callee": {
                  "type": "Identifier",
                  "start": 1976,
                  "end": 1992,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1993,
                    "end": 1994,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2005,
                "end": 2024,
                "callee": {
                  "type": "Identifier",
                  "start": 2005,
                  "end": 2021,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2022,
                    "end": 2023,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2034,
                "end": 2053,
                "callee": {
                  "type": "Identifier",
                  "start": 2034,
                  "end": 2050,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2051,
                    "end": 2052,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2063,
                "end": 2082,
                "callee": {
                  "type": "Identifier",
                  "start": 2063,
                  "end": 2079,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2080,
                    "end": 2081,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2116,
                "end": 2134,
                "callee": {
                  "type": "Identifier",
                  "start": 2116,
                  "end": 2131,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2132,
                    "end": 2133,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2144,
                "end": 2162,
                "callee": {
                  "type": "Identifier",
                  "start": 2144,
                  "end": 2159,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2160,
                    "end": 2161,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2172,
                "end": 2190,
                "callee": {
                  "type": "Identifier",
                  "start": 2172,
                  "end": 2187,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2188,
                    "end": 2189,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2200,
                "end": 2218,
                "callee": {
                  "type": "Identifier",
                  "start": 2200,
                  "end": 2215,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2216,
                    "end": 2217,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2228,
                "end": 2246,
                "callee": {
                  "type": "Identifier",
                  "start": 2228,
                  "end": 2243,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2244,
                    "end": 2245,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2322,
                "end": 2345,
                "callee": {
                  "type": "Identifier",
                  "start": 2322,
                  "end": 2342,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2343,
                    "end": 2344,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2355,
                "end": 2378,
                "callee": {
                  "type": "Identifier",
                  "start": 2355,
                  "end": 2375,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2376,
                    "end": 2377,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2388,
                "end": 2411,
                "callee": {
                  "type": "Identifier",
                  "start": 2388,
                  "end": 2408,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2409,
                    "end": 2410,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2421,
                "end": 2444,
                "callee": {
                  "type": "Identifier",
                  "start": 2421,
                  "end": 2441,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2442,
                    "end": 2443,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2454,
                "end": 2477,
                "callee": {
                  "type": "Identifier",
                  "start": 2454,
                  "end": 2474,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2475,
                    "end": 2476,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2483,
      "end": 3528,
      "id": {
        "type": "Identifier",
        "start": 2493,
        "end": 2495,
        "name": "n3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2496,
        "end": 3528,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2621,
            "end": 2677,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2628,
              "end": 2677,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2632,
                  "end": 2676,
                  "id": {
                    "type": "Identifier",
                    "start": 2632,
                    "end": 2633,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2636,
                    "end": 2676,
                    "callee": {
                      "type": "Identifier",
                      "start": 2636,
                      "end": 2640,
                      "name": "fun2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2659,
                        "end": 2666,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 2668,
                        "end": 2675,
                        "value": "World",
                        "raw": "\"World\""
                      }
                    ],
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
                            "value": "Hello",
                            "raw": "\"Hello\""
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
                            "value": "World",
                            "raw": "\"World\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2682,
            "end": 2738,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2689,
              "end": 2738,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2693,
                  "end": 2737,
                  "id": {
                    "type": "Identifier",
                    "start": 2693,
                    "end": 2694,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2697,
                    "end": 2737,
                    "callee": {
                      "type": "Identifier",
                      "start": 2697,
                      "end": 2701,
                      "name": "fun2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2720,
                        "end": 2727,
                        "value": "World",
                        "raw": "\"World\""
                      },
                      {
                        "type": "Literal",
                        "start": 2729,
                        "end": 2736,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      }
                    ],
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
                            "value": "Hello",
                            "raw": "\"Hello\""
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
                            "value": "World",
                            "raw": "\"World\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2743,
            "end": 2799,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2750,
              "end": 2799,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2754,
                  "end": 2798,
                  "id": {
                    "type": "Identifier",
                    "start": 2754,
                    "end": 2755,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2758,
                    "end": 2798,
                    "callee": {
                      "type": "Identifier",
                      "start": 2758,
                      "end": 2762,
                      "name": "fun2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2781,
                        "end": 2788,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 2790,
                        "end": 2797,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      }
                    ],
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
                            "value": "World",
                            "raw": "\"World\""
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
                            "value": "Hello",
                            "raw": "\"Hello\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2804,
            "end": 2860,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2811,
              "end": 2860,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2815,
                  "end": 2859,
                  "id": {
                    "type": "Identifier",
                    "start": 2815,
                    "end": 2816,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2819,
                    "end": 2859,
                    "callee": {
                      "type": "Identifier",
                      "start": 2819,
                      "end": 2823,
                      "name": "fun2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2842,
                        "end": 2849,
                        "value": "World",
                        "raw": "\"World\""
                      },
                      {
                        "type": "Literal",
                        "start": 2851,
                        "end": 2858,
                        "value": "World",
                        "raw": "\"World\""
                      }
                    ],
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
                            "value": "World",
                            "raw": "\"World\""
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
                            "value": "Hello",
                            "raw": "\"Hello\""
                          }
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2865,
            "end": 2922,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2872,
              "end": 2922,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2876,
                  "end": 2921,
                  "id": {
                    "type": "Identifier",
                    "start": 2876,
                    "end": 2877,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2880,
                    "end": 2921,
                    "callee": {
                      "type": "Identifier",
                      "start": 2880,
                      "end": 2884,
                      "name": "fun3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2904,
                        "end": 2911,
                        "value": "Hello",
                        "raw": "\"Hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 2913,
                        "end": 2920,
                        "value": "World",
                        "raw": "\"World\""
                      }
                    ],
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
                                "value": "Hello",
                                "raw": "\"Hello\""
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
                                "value": "World",
                                "raw": "\"World\""
                              }
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 2997,
                "end": 3016,
                "callee": {
                  "type": "Identifier",
                  "start": 2997,
                  "end": 3013,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3014,
                    "end": 3015,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3026,
                "end": 3045,
                "callee": {
                  "type": "Identifier",
                  "start": 3026,
                  "end": 3042,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3043,
                    "end": 3044,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3055,
                "end": 3074,
                "callee": {
                  "type": "Identifier",
                  "start": 3055,
                  "end": 3071,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3072,
                    "end": 3073,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3084,
                "end": 3103,
                "callee": {
                  "type": "Identifier",
                  "start": 3084,
                  "end": 3100,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3101,
                    "end": 3102,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3113,
                "end": 3132,
                "callee": {
                  "type": "Identifier",
                  "start": 3113,
                  "end": 3129,
                  "name": "takeReturnString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3130,
                    "end": 3131,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3200,
                "end": 3218,
                "callee": {
                  "type": "Identifier",
                  "start": 3200,
                  "end": 3215,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3216,
                    "end": 3217,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3228,
                "end": 3246,
                "callee": {
                  "type": "Identifier",
                  "start": 3228,
                  "end": 3243,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3244,
                    "end": 3245,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3256,
                "end": 3274,
                "callee": {
                  "type": "Identifier",
                  "start": 3256,
                  "end": 3271,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3272,
                    "end": 3273,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3284,
                "end": 3302,
                "callee": {
                  "type": "Identifier",
                  "start": 3284,
                  "end": 3299,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3300,
                    "end": 3301,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3312,
                "end": 3330,
                "callee": {
                  "type": "Identifier",
                  "start": 3312,
                  "end": 3327,
                  "name": "takeReturnHello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3328,
                    "end": 3329,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3370,
                "end": 3393,
                "callee": {
                  "type": "Identifier",
                  "start": 3370,
                  "end": 3390,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3391,
                    "end": 3392,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3403,
                "end": 3426,
                "callee": {
                  "type": "Identifier",
                  "start": 3403,
                  "end": 3423,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3424,
                    "end": 3425,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3436,
                "end": 3459,
                "callee": {
                  "type": "Identifier",
                  "start": 3436,
                  "end": 3456,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3457,
                    "end": 3458,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3469,
                "end": 3492,
                "callee": {
                  "type": "Identifier",
                  "start": 3469,
                  "end": 3489,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3490,
                    "end": 3491,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 3502,
                "end": 3525,
                "callee": {
                  "type": "Identifier",
                  "start": 3502,
                  "end": 3522,
                  "name": "takeReturnHelloWorld",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3523,
                    "end": 3524,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
