nonPrimitiveStrictNull.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1084,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 42,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 42,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 29,
                "end": 42,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 29,
                    "end": 35
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 38,
                    "end": 42
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 76,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 76,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 58,
                "end": 76,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 58,
                    "end": 64
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 67,
                    "end": 76
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 117,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 117,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 92,
                "end": 117,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 92,
                    "end": 98
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 101,
                    "end": 105
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 108,
                    "end": 117
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 138,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 138,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 125,
                "end": 138,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 125,
                    "end": 131
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 134,
                    "end": 138
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 150,
      "expression": {
        "type": "MemberExpression",
        "start": 139,
        "end": 149,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 141,
          "end": 149,
          "decorators": [],
          "name": "toString",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 174,
      "expression": {
        "type": "AssignmentExpression",
        "start": 160,
        "end": 173,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 173,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 188,
          "end": 192,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 203,
        "end": 208,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 203,
          "end": 204,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 225,
      "expression": {
        "type": "AssignmentExpression",
        "start": 219,
        "end": 224,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 223,
          "end": 224,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 241,
      "expression": {
        "type": "AssignmentExpression",
        "start": 235,
        "end": 240,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 235,
          "end": 236,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "decorators": [],
          "name": "d",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 258,
      "expression": {
        "type": "AssignmentExpression",
        "start": 252,
        "end": 257,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 252,
          "end": 253,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 256,
          "end": 257,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 271,
      "expression": {
        "type": "AssignmentExpression",
        "start": 265,
        "end": 270,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 265,
          "end": 266,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 269,
          "end": 270,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 279,
      "end": 343,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 306,
        "end": 343,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 312,
            "end": 325,
            "expression": {
              "type": "CallExpression",
              "start": 312,
              "end": 324,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 312,
                "end": 322,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 322,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 283,
        "end": 304,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 283,
          "end": 291,
          "argument": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 296,
          "end": 304,
          "raw": "'object'",
          "value": "object"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 345,
      "end": 414,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 372,
        "end": 414,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 378,
            "end": 384,
            "expression": {
              "type": "AssignmentExpression",
              "start": 378,
              "end": 383,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 349,
        "end": 370,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 349,
          "end": 357,
          "argument": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 362,
          "end": 370,
          "raw": "'object'",
          "value": "object"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 416,
      "end": 552,
      "alternate": {
        "type": "BlockStatement",
        "start": 511,
        "end": 552,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 517,
            "end": 530,
            "expression": {
              "type": "CallExpression",
              "start": 517,
              "end": 529,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 517,
                "end": 527,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 518,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 527,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 443,
        "end": 505,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 449,
            "end": 455,
            "expression": {
              "type": "AssignmentExpression",
              "start": 449,
              "end": 454,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 453,
                "end": 454,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 466,
            "end": 479,
            "expression": {
              "type": "CallExpression",
              "start": 466,
              "end": 478,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 466,
                "end": 476,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 467,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 476,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 420,
        "end": 441,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 420,
          "end": 428,
          "argument": {
            "type": "Identifier",
            "start": 427,
            "end": 428,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 433,
          "end": 441,
          "raw": "'object'",
          "value": "object"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 554,
      "end": 654,
      "alternate": {
        "type": "BlockStatement",
        "start": 623,
        "end": 654,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 629,
            "end": 642,
            "expression": {
              "type": "CallExpression",
              "start": 629,
              "end": 641,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 629,
                "end": 639,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 629,
                  "end": 630,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 639,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 569,
        "end": 617,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 575,
            "end": 588,
            "expression": {
              "type": "CallExpression",
              "start": 575,
              "end": 587,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 575,
                "end": 585,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 576,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 585,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 558,
        "end": 567,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 558,
          "end": 559,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 563,
          "end": 567,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 656,
      "end": 764,
      "alternate": {
        "type": "BlockStatement",
        "start": 714,
        "end": 764,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 720,
            "end": 733,
            "expression": {
              "type": "CallExpression",
              "start": 720,
              "end": 732,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 720,
                "end": 730,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 721,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 722,
                  "end": 730,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 672,
        "end": 708,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 678,
            "end": 691,
            "expression": {
              "type": "CallExpression",
              "start": 678,
              "end": 690,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 678,
                "end": 688,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 688,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 660,
        "end": 670,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 660,
          "end": 661,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 666,
          "end": 670,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 766,
      "end": 888,
      "alternate": {
        "type": "BlockStatement",
        "start": 843,
        "end": 888,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 849,
            "end": 862,
            "expression": {
              "type": "CallExpression",
              "start": 849,
              "end": 861,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 849,
                "end": 859,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 850,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 859,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 796,
        "end": 837,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 802,
            "end": 815,
            "expression": {
              "type": "CallExpression",
              "start": 802,
              "end": 814,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 802,
                "end": 812,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 803,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 812,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 770,
        "end": 794,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 770,
          "end": 778,
          "argument": {
            "type": "Identifier",
            "start": 777,
            "end": 778,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 783,
          "end": 794,
          "raw": "'undefined'",
          "value": "undefined"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 890,
      "end": 926,
      "body": {
        "type": "TSInterfaceBody",
        "start": 924,
        "end": 926,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 900,
        "end": 905,
        "decorators": [],
        "name": "Proxy",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 905,
        "end": 923,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 906,
            "end": 922,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 916,
              "end": 922
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 906,
              "end": 907,
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
      "type": "VariableDeclaration",
      "start": 928,
      "end": 949,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 932,
          "end": 948,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 932,
            "end": 948,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 933,
              "end": 948,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 935,
                "end": 948,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 940,
                  "end": 948,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 941,
                      "end": 947
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 935,
                  "end": 940,
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 959,
      "end": 978,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 963,
          "end": 977,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 977,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 964,
              "end": 977,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 966,
                "end": 977,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 971,
                  "end": 977,
                  "params": [
                    {
                      "type": "TSNullKeyword",
                      "start": 972,
                      "end": 976
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 966,
                  "end": 971,
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 988,
      "end": 1012,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 992,
          "end": 1011,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 992,
            "end": 1011,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 993,
              "end": 1011,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 995,
                "end": 1011,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1000,
                  "end": 1011,
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1001,
                      "end": 1010
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 995,
                  "end": 1000,
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1023,
      "end": 1056,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1038,
        "end": 1056,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1042,
            "end": 1054,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1042,
              "end": 1045,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1045,
              "end": 1053,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1047,
                "end": 1053
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1033,
        "end": 1037,
        "decorators": [],
        "name": "Blah",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1058,
      "end": 1077,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1062,
          "end": 1076,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1062,
            "end": 1076,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1063,
              "end": 1076,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1065,
                "end": 1076,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1070,
                  "end": 1076,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1071,
                      "end": 1075,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1071,
                        "end": 1075,
                        "decorators": [],
                        "name": "Blah",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1070,
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
