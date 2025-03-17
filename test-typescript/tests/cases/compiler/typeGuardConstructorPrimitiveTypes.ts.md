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
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 98,
            "name": "var1",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 100,
      "end": 156,
      "test": {
        "type": "BinaryExpression",
        "start": 104,
        "end": 131,
        "left": {
          "type": "MemberExpression",
          "start": 104,
          "end": 120,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 108,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 120,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 125,
          "end": 131,
          "name": "String",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 157,
      "end": 213,
      "test": {
        "type": "BinaryExpression",
        "start": 161,
        "end": 188,
        "left": {
          "type": "MemberExpression",
          "start": 161,
          "end": 177,
          "object": {
            "type": "Identifier",
            "start": 161,
            "end": 165,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 166,
            "end": 177,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 182,
          "end": 188,
          "name": "Number",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 214,
      "end": 272,
      "test": {
        "type": "BinaryExpression",
        "start": 218,
        "end": 246,
        "left": {
          "type": "MemberExpression",
          "start": 218,
          "end": 234,
          "object": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 223,
            "end": 234,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 239,
          "end": 246,
          "name": "Boolean",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 273,
      "end": 327,
      "test": {
        "type": "BinaryExpression",
        "start": 277,
        "end": 303,
        "left": {
          "type": "MemberExpression",
          "start": 277,
          "end": 293,
          "object": {
            "type": "Identifier",
            "start": 277,
            "end": 281,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 282,
            "end": 293,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 298,
          "end": 303,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 328,
      "end": 384,
      "test": {
        "type": "BinaryExpression",
        "start": 332,
        "end": 359,
        "left": {
          "type": "MemberExpression",
          "start": 332,
          "end": 348,
          "object": {
            "type": "Identifier",
            "start": 332,
            "end": 336,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 337,
            "end": 348,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 353,
          "end": 359,
          "name": "Symbol",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 385,
      "end": 441,
      "test": {
        "type": "BinaryExpression",
        "start": 389,
        "end": 416,
        "left": {
          "type": "MemberExpression",
          "start": 389,
          "end": 405,
          "object": {
            "type": "Identifier",
            "start": 389,
            "end": 393,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 394,
            "end": 405,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 410,
          "end": 416,
          "name": "BigInt",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 491,
            "end": 540,
            "name": "var2",
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
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 506,
                    "end": 512,
                    "typeName": {
                      "type": "Identifier",
                      "start": 506,
                      "end": 512,
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 515,
                    "end": 522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 522,
                      "name": "Boolean",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 525,
                    "end": 531,
                    "typeName": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 531,
                      "name": "Symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 534,
                    "end": 540,
                    "typeName": {
                      "type": "Identifier",
                      "start": 534,
                      "end": 540,
                      "name": "BigInt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 542,
      "end": 598,
      "test": {
        "type": "BinaryExpression",
        "start": 546,
        "end": 573,
        "left": {
          "type": "MemberExpression",
          "start": 546,
          "end": 562,
          "object": {
            "type": "Identifier",
            "start": 546,
            "end": 550,
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 551,
            "end": 562,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 567,
          "end": 573,
          "name": "String",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 599,
      "end": 655,
      "test": {
        "type": "BinaryExpression",
        "start": 603,
        "end": 630,
        "left": {
          "type": "MemberExpression",
          "start": 603,
          "end": 619,
          "object": {
            "type": "Identifier",
            "start": 603,
            "end": 607,
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 608,
            "end": 619,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 624,
          "end": 630,
          "name": "Number",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 656,
      "end": 714,
      "test": {
        "type": "BinaryExpression",
        "start": 660,
        "end": 688,
        "left": {
          "type": "MemberExpression",
          "start": 660,
          "end": 676,
          "object": {
            "type": "Identifier",
            "start": 660,
            "end": 664,
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 665,
            "end": 676,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 681,
          "end": 688,
          "name": "Boolean",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 715,
      "end": 771,
      "test": {
        "type": "BinaryExpression",
        "start": 719,
        "end": 746,
        "left": {
          "type": "MemberExpression",
          "start": 719,
          "end": 735,
          "object": {
            "type": "Identifier",
            "start": 719,
            "end": 723,
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 724,
            "end": 735,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 740,
          "end": 746,
          "name": "Symbol",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 772,
      "end": 828,
      "test": {
        "type": "BinaryExpression",
        "start": 776,
        "end": 803,
        "left": {
          "type": "MemberExpression",
          "start": 776,
          "end": 792,
          "object": {
            "type": "Identifier",
            "start": 776,
            "end": 780,
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 781,
            "end": 792,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 797,
          "end": 803,
          "name": "BigInt",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "var2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
