__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 829,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 98,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 98,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 47,
                "end": 98,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 47,
                    "end": 53
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 56,
                    "end": 62
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 65,
                    "end": 72
                  },
                  {
                    "type": "TSArrayType",
                    "start": 75,
                    "end": 80,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 75,
                      "end": 78
                    }
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 83,
                    "end": 89
                  },
                  {
                    "type": "TSBigIntKeyword",
                    "start": 92,
                    "end": 98
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 100,
      "end": 156,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 133,
        "end": 156,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 144,
            "expression": {
              "type": "Identifier",
              "start": 139,
              "end": 143,
              "decorators": [],
              "name": "var1",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 104,
        "end": 131,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 104,
          "end": 120,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 108,
            "decorators": [],
            "name": "var1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 120,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 125,
          "end": 131,
          "decorators": [],
          "name": "String",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 157,
      "end": 213,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 190,
        "end": 213,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 201,
            "expression": {
              "type": "Identifier",
              "start": 196,
              "end": 200,
              "decorators": [],
              "name": "var1",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 161,
        "end": 188,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 161,
          "end": 177,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 161,
            "end": 165,
            "decorators": [],
            "name": "var1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 166,
            "end": 177,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 182,
          "end": 188,
          "decorators": [],
          "name": "Number",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 214,
      "end": 272,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 248,
        "end": 272,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 254,
            "end": 259,
            "expression": {
              "type": "Identifier",
              "start": 254,
              "end": 258,
              "decorators": [],
              "name": "var1",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 218,
        "end": 246,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 218,
          "end": 234,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "decorators": [],
            "name": "var1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 223,
            "end": 234,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 239,
          "end": 246,
          "decorators": [],
          "name": "Boolean",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 273,
      "end": 327,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 305,
        "end": 327,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 311,
            "end": 316,
            "expression": {
              "type": "Identifier",
              "start": 311,
              "end": 315,
              "decorators": [],
              "name": "var1",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 277,
        "end": 303,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 277,
          "end": 293,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 277,
            "end": 281,
            "decorators": [],
            "name": "var1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 282,
            "end": 293,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 298,
          "end": 303,
          "decorators": [],
          "name": "Array",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 328,
      "end": 384,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 361,
        "end": 384,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 367,
            "end": 372,
            "expression": {
              "type": "Identifier",
              "start": 367,
              "end": 371,
              "decorators": [],
              "name": "var1",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 332,
        "end": 359,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 332,
          "end": 348,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 332,
            "end": 336,
            "decorators": [],
            "name": "var1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 337,
            "end": 348,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 353,
          "end": 359,
          "decorators": [],
          "name": "Symbol",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 385,
      "end": 441,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 418,
        "end": 441,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 424,
            "end": 429,
            "expression": {
              "type": "Identifier",
              "start": 424,
              "end": 428,
              "decorators": [],
              "name": "var1",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 389,
        "end": 416,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 389,
          "end": 405,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 389,
            "end": 393,
            "decorators": [],
            "name": "var1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 394,
            "end": 405,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 410,
          "end": 416,
          "decorators": [],
          "name": "BigInt",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 487,
      "end": 541,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 491,
          "end": 540,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 491,
            "end": 540,
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 540,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 497,
                "end": 540,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 497,
                    "end": 503,
                    "typeName": {
                      "type": "Identifier",
                      "start": 497,
                      "end": 503,
                      "decorators": [],
                      "name": "String",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 506,
                    "end": 512,
                    "typeName": {
                      "type": "Identifier",
                      "start": 506,
                      "end": 512,
                      "decorators": [],
                      "name": "Number",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 515,
                    "end": 522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 522,
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 525,
                    "end": 531,
                    "typeName": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 531,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 534,
                    "end": 540,
                    "typeName": {
                      "type": "Identifier",
                      "start": 534,
                      "end": 540,
                      "decorators": [],
                      "name": "BigInt",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 542,
      "end": 598,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 575,
        "end": 598,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 581,
            "end": 586,
            "expression": {
              "type": "Identifier",
              "start": 581,
              "end": 585,
              "decorators": [],
              "name": "var2",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 546,
        "end": 573,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 546,
          "end": 562,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 546,
            "end": 550,
            "decorators": [],
            "name": "var2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 551,
            "end": 562,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 567,
          "end": 573,
          "decorators": [],
          "name": "String",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 599,
      "end": 655,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 632,
        "end": 655,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 638,
            "end": 643,
            "expression": {
              "type": "Identifier",
              "start": 638,
              "end": 642,
              "decorators": [],
              "name": "var2",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 603,
        "end": 630,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 603,
          "end": 619,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 603,
            "end": 607,
            "decorators": [],
            "name": "var2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 608,
            "end": 619,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 624,
          "end": 630,
          "decorators": [],
          "name": "Number",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 656,
      "end": 714,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 690,
        "end": 714,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 696,
            "end": 701,
            "expression": {
              "type": "Identifier",
              "start": 696,
              "end": 700,
              "decorators": [],
              "name": "var2",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 660,
        "end": 688,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 660,
          "end": 676,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 660,
            "end": 664,
            "decorators": [],
            "name": "var2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 665,
            "end": 676,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 681,
          "end": 688,
          "decorators": [],
          "name": "Boolean",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 715,
      "end": 771,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 748,
        "end": 771,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 754,
            "end": 759,
            "expression": {
              "type": "Identifier",
              "start": 754,
              "end": 758,
              "decorators": [],
              "name": "var2",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 719,
        "end": 746,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 719,
          "end": 735,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 719,
            "end": 723,
            "decorators": [],
            "name": "var2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 724,
            "end": 735,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 740,
          "end": 746,
          "decorators": [],
          "name": "Symbol",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 772,
      "end": 828,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 805,
        "end": 828,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 811,
            "end": 816,
            "expression": {
              "type": "Identifier",
              "start": 811,
              "end": 815,
              "decorators": [],
              "name": "var2",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 776,
        "end": 803,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 776,
          "end": 792,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 776,
            "end": 780,
            "decorators": [],
            "name": "var2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 781,
            "end": 792,
            "decorators": [],
            "name": "constructor",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 797,
          "end": 803,
          "decorators": [],
          "name": "BigInt",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
