narrowByBooleanComparison.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2014,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 15,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 17,
                "end": 20,
                "literal": {
                  "type": "Literal",
                  "start": 17,
                  "end": 20,
                  "raw": "\"A\"",
                  "value": "A"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 41,
                "end": 44,
                "literal": {
                  "type": "Literal",
                  "start": 41,
                  "end": 44,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 71,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 57,
        "end": 70,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 68,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 68,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 65,
                "end": 68,
                "literal": {
                  "type": "Literal",
                  "start": 65,
                  "end": 68,
                  "raw": "\"C\"",
                  "value": "C"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 97,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 84,
        "decorators": [],
        "name": "MyUnion",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 87,
        "end": 96,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 87,
            "end": 88,
            "typeName": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 91,
            "end": 92,
            "typeName": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 96,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "decorators": [],
            "name": "isA",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 111,
            "end": 149,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 135,
              "end": 149,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 135,
                "end": 141,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 146,
                "end": 149,
                "raw": "\"A\"",
                "value": "A"
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 122,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 113,
                  "end": 122,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 122,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 122,
                      "decorators": [],
                      "name": "MyUnion",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 125,
                "end": 131,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 130,
                  "end": 131,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 130,
                    "end": 131,
                    "typeName": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 152,
      "end": 541,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 541,
        "body": [
          {
            "type": "IfStatement",
            "start": 185,
            "end": 224,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 206,
              "end": 224,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 216,
                  "end": 218,
                  "expression": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 189,
              "end": 204,
              "operator": "!==",
              "left": {
                "type": "CallExpression",
                "start": 189,
                "end": 195,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "decorators": [],
                  "name": "isA",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 200,
                "end": 204,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 230,
            "end": 270,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 252,
              "end": 270,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 262,
                  "end": 264,
                  "expression": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 234,
              "end": 250,
              "operator": "!==",
              "left": {
                "type": "CallExpression",
                "start": 234,
                "end": 240,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 237,
                  "decorators": [],
                  "name": "isA",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 245,
                "end": 250,
                "raw": "false",
                "value": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 276,
            "end": 316,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 298,
              "end": 316,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 308,
                  "end": 310,
                  "expression": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 309,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 280,
              "end": 296,
              "operator": "===",
              "left": {
                "type": "CallExpression",
                "start": 280,
                "end": 286,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 283,
                  "decorators": [],
                  "name": "isA",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 291,
                "end": 296,
                "raw": "false",
                "value": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 322,
            "end": 361,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 343,
              "end": 361,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 353,
                  "end": 355,
                  "expression": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 354,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 326,
              "end": 341,
              "operator": "===",
              "left": {
                "type": "CallExpression",
                "start": 326,
                "end": 332,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 329,
                  "decorators": [],
                  "name": "isA",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 337,
                "end": 341,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 367,
            "end": 405,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 387,
              "end": 405,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 397,
                  "end": 399,
                  "expression": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 398,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 371,
              "end": 385,
              "operator": "!=",
              "left": {
                "type": "CallExpression",
                "start": 371,
                "end": 377,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 374,
                  "decorators": [],
                  "name": "isA",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 381,
                "end": 385,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 411,
            "end": 449,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 431,
              "end": 449,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 441,
                  "end": 443,
                  "expression": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 415,
              "end": 429,
              "operator": "==",
              "left": {
                "type": "CallExpression",
                "start": 415,
                "end": 421,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 418,
                  "decorators": [],
                  "name": "isA",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 425,
                "end": 429,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 455,
            "end": 494,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 476,
              "end": 494,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 486,
                  "end": 488,
                  "expression": {
                    "type": "Identifier",
                    "start": 486,
                    "end": 487,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 459,
              "end": 474,
              "operator": "!==",
              "left": {
                "type": "Literal",
                "start": 459,
                "end": 463,
                "raw": "true",
                "value": true
              },
              "right": {
                "type": "CallExpression",
                "start": 468,
                "end": 474,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 472,
                    "end": 473,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 471,
                  "decorators": [],
                  "name": "isA",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 500,
            "end": 539,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 521,
              "end": 539,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 531,
                  "end": 533,
                  "expression": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 504,
              "end": 519,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 504,
                "end": 508,
                "raw": "true",
                "value": true
              },
              "right": {
                "type": "CallExpression",
                "start": 513,
                "end": 519,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 517,
                    "end": 518,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 516,
                  "decorators": [],
                  "name": "isA",
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
        "start": 161,
        "end": 166,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 167,
          "end": 177,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 177,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 177,
                "decorators": [],
                "name": "MyUnion",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 599,
      "end": 698,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 626,
        "end": 698,
        "body": [
          {
            "type": "IfStatement",
            "start": 632,
            "end": 689,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 666,
              "end": 689,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 676,
                  "end": 683,
                  "argument": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 636,
              "end": 664,
              "operator": "===",
              "left": {
                "type": "BinaryExpression",
                "start": 636,
                "end": 654,
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 654,
                  "decorators": [],
                  "name": "Error",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 659,
                "end": 664,
                "raw": "false",
                "value": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 694,
            "end": 696,
            "expression": {
              "type": "Identifier",
              "start": 694,
              "end": 695,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 613,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 614,
          "end": 624,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 615,
            "end": 624,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 617,
              "end": 624
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 756,
      "end": 923,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 785,
        "end": 923,
        "body": [
          {
            "type": "IfStatement",
            "start": 791,
            "end": 912,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 852,
              "end": 912,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 862,
                  "end": 906,
                  "argument": {
                    "type": "NewExpression",
                    "start": 868,
                    "end": 905,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 878,
                        "end": 904,
                        "raw": "'Not a string or an array'",
                        "value": "Not a string or an array"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 877,
                      "decorators": [],
                      "name": "Error",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 795,
              "end": 850,
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 795,
                "end": 818,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 795,
                  "end": 805,
                  "argument": {
                    "type": "Identifier",
                    "start": 802,
                    "end": 805,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 810,
                  "end": 818,
                  "raw": "'string'",
                  "value": "string"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 822,
                "end": 850,
                "operator": "===",
                "left": {
                  "type": "CallExpression",
                  "start": 822,
                  "end": 840,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 836,
                      "end": 839,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 822,
                    "end": 835,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 822,
                      "end": 827,
                      "decorators": [],
                      "name": "Array",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 828,
                      "end": 835,
                      "decorators": [],
                      "name": "isArray",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 845,
                  "end": 850,
                  "raw": "false",
                  "value": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 917,
            "end": 921,
            "expression": {
              "type": "Identifier",
              "start": 917,
              "end": 920,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 765,
        "end": 770,
        "decorators": [],
        "name": "test3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 771,
          "end": 783,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 774,
            "end": 783,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 776,
              "end": 783
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 981,
      "end": 1037,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1013,
        "end": 1037,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1019,
            "end": 1035,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1019,
              "end": 1025,
              "decorators": [],
              "name": "status",
              "optional": false
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1026,
              "end": 1034,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1028,
                "end": 1034
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 987,
        "end": 995,
        "decorators": [],
        "name": "WebError",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1004,
        "end": 1012,
        "decorators": [],
        "name": "URIError",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1038,
      "end": 1232,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1055,
        "end": 1232,
        "body": [
          {
            "type": "TryStatement",
            "start": 1061,
            "end": 1230,
            "block": {
              "type": "BlockStatement",
              "start": 1065,
              "end": 1098,
              "body": []
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 1099,
              "end": 1230,
              "body": {
                "type": "BlockStatement",
                "start": 1111,
                "end": 1230,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1121,
                    "end": 1224,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1181,
                      "end": 1224,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1195,
                          "end": 1214,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1195,
                            "end": 1213,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1209,
                                "end": 1212,
                                "decorators": [],
                                "name": "err",
                                "optional": false
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1195,
                              "end": 1208,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 1195,
                                "end": 1202,
                                "decorators": [],
                                "name": "console",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1203,
                                "end": 1208,
                                "decorators": [],
                                "name": "error",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 1125,
                      "end": 1179,
                      "operator": "||",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1125,
                        "end": 1158,
                        "operator": "===",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1125,
                          "end": 1148,
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "start": 1125,
                            "end": 1128,
                            "decorators": [],
                            "name": "err",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1140,
                            "end": 1148,
                            "decorators": [],
                            "name": "WebError",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1153,
                          "end": 1158,
                          "raw": "false",
                          "value": false
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 1162,
                        "end": 1179,
                        "operator": "!=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 1162,
                          "end": 1172,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1162,
                            "end": 1165,
                            "decorators": [],
                            "name": "err",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1166,
                            "end": 1172,
                            "decorators": [],
                            "name": "status",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1176,
                          "end": 1179,
                          "raw": "401",
                          "value": 401
                        }
                      }
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 1106,
                "end": 1109,
                "decorators": [],
                "name": "err",
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
        "start": 1047,
        "end": 1052,
        "decorators": [],
        "name": "test4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1290,
      "end": 1328,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1307,
        "end": 1328,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1313,
            "end": 1326,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1313,
              "end": 1317,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1317,
              "end": 1325,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1319,
                "end": 1325
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1300,
        "end": 1306,
        "decorators": [],
        "name": "Entity",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1329,
      "end": 1356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1335,
          "end": 1355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1335,
            "end": 1345,
            "decorators": [],
            "name": "ACTOR_TYPE",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1348,
            "end": 1355,
            "raw": "\"actor\"",
            "value": "actor"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1357,
      "end": 1420,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1388,
        "end": 1420,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1394,
            "end": 1418,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1394,
              "end": 1398,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1398,
              "end": 1417,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1400,
                "end": 1417,
                "exprName": {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1417,
                  "decorators": [],
                  "name": "ACTOR_TYPE",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1381,
          "end": 1387,
          "expression": {
            "type": "Identifier",
            "start": 1381,
            "end": 1387,
            "decorators": [],
            "name": "Entity",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1367,
        "end": 1372,
        "decorators": [],
        "name": "Actor",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1421,
      "end": 1513,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1471,
        "end": 1513,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1477,
            "end": 1511,
            "argument": {
              "type": "BinaryExpression",
              "start": 1484,
              "end": 1510,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 1484,
                "end": 1495,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1484,
                  "end": 1490,
                  "decorators": [],
                  "name": "entity",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1491,
                  "end": 1495,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1500,
                "end": 1510,
                "decorators": [],
                "name": "ACTOR_TYPE",
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
        "start": 1430,
        "end": 1437,
        "decorators": [],
        "name": "isActor",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1438,
          "end": 1452,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1444,
            "end": 1452,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1446,
              "end": 1452,
              "typeName": {
                "type": "Identifier",
                "start": 1446,
                "end": 1452,
                "decorators": [],
                "name": "Entity",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1453,
        "end": 1470,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1455,
          "end": 1470,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 1455,
            "end": 1461,
            "decorators": [],
            "name": "entity",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1465,
            "end": 1470,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1465,
              "end": 1470,
              "typeName": {
                "type": "Identifier",
                "start": 1465,
                "end": 1470,
                "decorators": [],
                "name": "Actor",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1514,
      "end": 1624,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1542,
        "end": 1624,
        "body": [
          {
            "type": "IfStatement",
            "start": 1548,
            "end": 1622,
            "alternate": {
              "type": "BlockStatement",
              "start": 1602,
              "end": 1622,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1612,
                  "end": 1616,
                  "expression": {
                    "type": "Identifier",
                    "start": 1612,
                    "end": 1615,
                    "decorators": [],
                    "name": "bin",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1576,
              "end": 1596,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1586,
                  "end": 1590,
                  "expression": {
                    "type": "Identifier",
                    "start": 1586,
                    "end": 1589,
                    "decorators": [],
                    "name": "bin",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1552,
              "end": 1574,
              "operator": "===",
              "left": {
                "type": "CallExpression",
                "start": 1552,
                "end": 1564,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1560,
                    "end": 1563,
                    "decorators": [],
                    "name": "bin",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1552,
                  "end": 1559,
                  "decorators": [],
                  "name": "isActor",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1569,
                "end": 1574,
                "raw": "false",
                "value": false
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
        "start": 1523,
        "end": 1528,
        "decorators": [],
        "name": "test5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1529,
          "end": 1540,
          "decorators": [],
          "name": "bin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1532,
            "end": 1540,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1534,
              "end": 1540,
              "typeName": {
                "type": "Identifier",
                "start": 1534,
                "end": 1540,
                "decorators": [],
                "name": "Entity",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1625,
      "end": 1734,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1653,
        "end": 1734,
        "body": [
          {
            "type": "IfStatement",
            "start": 1659,
            "end": 1732,
            "alternate": {
              "type": "BlockStatement",
              "start": 1712,
              "end": 1732,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1722,
                  "end": 1726,
                  "expression": {
                    "type": "Identifier",
                    "start": 1722,
                    "end": 1725,
                    "decorators": [],
                    "name": "bin",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1686,
              "end": 1706,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1696,
                  "end": 1700,
                  "expression": {
                    "type": "Identifier",
                    "start": 1696,
                    "end": 1699,
                    "decorators": [],
                    "name": "bin",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1663,
              "end": 1684,
              "operator": "==",
              "left": {
                "type": "CallExpression",
                "start": 1663,
                "end": 1675,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1671,
                    "end": 1674,
                    "decorators": [],
                    "name": "bin",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1663,
                  "end": 1670,
                  "decorators": [],
                  "name": "isActor",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1679,
                "end": 1684,
                "raw": "false",
                "value": false
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
        "start": 1634,
        "end": 1639,
        "decorators": [],
        "name": "test6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1640,
          "end": 1651,
          "decorators": [],
          "name": "bin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1643,
            "end": 1651,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1645,
              "end": 1651,
              "typeName": {
                "type": "Identifier",
                "start": 1645,
                "end": 1651,
                "decorators": [],
                "name": "Entity",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1792,
      "end": 1878,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1839,
        "end": 1878,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1845,
            "end": 1876,
            "argument": {
              "type": "BinaryExpression",
              "start": 1852,
              "end": 1875,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 1852,
                "end": 1860,
                "argument": {
                  "type": "Identifier",
                  "start": 1859,
                  "end": 1860,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1865,
                "end": 1875,
                "raw": "\"function\"",
                "value": "function"
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
        "start": 1801,
        "end": 1811,
        "decorators": [],
        "name": "isFunction",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1812,
          "end": 1822,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1813,
            "end": 1822,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1815,
              "end": 1822
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1823,
        "end": 1838,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1825,
          "end": 1838,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 1825,
            "end": 1826,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1830,
            "end": 1838,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1830,
              "end": 1838,
              "typeName": {
                "type": "Identifier",
                "start": 1830,
                "end": 1838,
                "decorators": [],
                "name": "Function",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1880,
      "end": 2013,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1907,
        "end": 2013,
        "body": [
          {
            "type": "IfStatement",
            "start": 1913,
            "end": 1960,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1942,
              "end": 1960,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1952,
                  "end": 1954,
                  "expression": {
                    "type": "Identifier",
                    "start": 1952,
                    "end": 1953,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1917,
              "end": 1940,
              "operator": "!==",
              "left": {
                "type": "CallExpression",
                "start": 1917,
                "end": 1930,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1928,
                    "end": 1929,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1917,
                  "end": 1927,
                  "decorators": [],
                  "name": "isFunction",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1935,
                "end": 1940,
                "raw": "false",
                "value": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1965,
            "end": 2011,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1993,
              "end": 2011,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2003,
                  "end": 2005,
                  "expression": {
                    "type": "Identifier",
                    "start": 2003,
                    "end": 2004,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1969,
              "end": 1991,
              "operator": "===",
              "left": {
                "type": "CallExpression",
                "start": 1969,
                "end": 1982,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1980,
                    "end": 1981,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1969,
                  "end": 1979,
                  "decorators": [],
                  "name": "isFunction",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1987,
                "end": 1991,
                "raw": "true",
                "value": true
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
        "start": 1889,
        "end": 1894,
        "decorators": [],
        "name": "test7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1895,
          "end": 1905,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1896,
            "end": 1905,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1898,
              "end": 1905
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
