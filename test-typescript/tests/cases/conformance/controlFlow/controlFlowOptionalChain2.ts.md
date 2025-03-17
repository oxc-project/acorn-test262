__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1487,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 41,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 13,
            "end": 23,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 19,
                "end": 22,
                "literal": {
                  "type": "Literal",
                  "start": 19,
                  "end": 22,
                  "value": "A",
                  "raw": "'A'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 30,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 43,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 52,
        "end": 68,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 66,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 65,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 62,
                "end": 65,
                "literal": {
                  "type": "Literal",
                  "start": 62,
                  "end": 65,
                  "value": "B",
                  "raw": "'B'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 86,
        "name": "funcTwo",
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
          "start": 87,
          "end": 109,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 109,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 92,
              "end": 109,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 92,
                  "end": 93,
                  "typeName": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 97,
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 100,
                  "end": 109
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 111,
        "end": 194,
        "body": [
          {
            "type": "IfStatement",
            "start": 115,
            "end": 171,
            "test": {
              "type": "BinaryExpression",
              "start": 119,
              "end": 136,
              "left": {
                "type": "ChainExpression",
                "start": 119,
                "end": 128,
                "expression": {
                  "type": "MemberExpression",
                  "start": 119,
                  "end": 128,
                  "object": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 128,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 133,
                "end": 136,
                "value": "B",
                "raw": "'B'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 138,
              "end": 171,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 144,
                  "end": 148,
                  "expression": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 147,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 160,
                  "end": 167,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 175,
            "end": 179,
            "expression": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "name": "arg",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 182,
            "end": 192,
            "expression": {
              "type": "ChainExpression",
              "start": 182,
              "end": 191,
              "expression": {
                "type": "MemberExpression",
                "start": 182,
                "end": 191,
                "object": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 185,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 191,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 196,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 214,
        "name": "funcThree",
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
          "start": 215,
          "end": 232,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 218,
            "end": 232,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 220,
              "end": 232,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 220,
                  "end": 221,
                  "typeName": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 224,
                  "end": 225,
                  "typeName": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 225,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 228,
                  "end": 232
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 234,
        "end": 317,
        "body": [
          {
            "type": "IfStatement",
            "start": 238,
            "end": 294,
            "test": {
              "type": "BinaryExpression",
              "start": 242,
              "end": 259,
              "left": {
                "type": "ChainExpression",
                "start": 242,
                "end": 251,
                "expression": {
                  "type": "MemberExpression",
                  "start": 242,
                  "end": 251,
                  "object": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 245,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 251,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 256,
                "end": 259,
                "value": "B",
                "raw": "'B'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 261,
              "end": 294,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 267,
                  "end": 271,
                  "expression": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 270,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 283,
                  "end": 290,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 298,
            "end": 302,
            "expression": {
              "type": "Identifier",
              "start": 298,
              "end": 301,
              "name": "arg",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 305,
            "end": 315,
            "expression": {
              "type": "ChainExpression",
              "start": 305,
              "end": 314,
              "expression": {
                "type": "MemberExpression",
                "start": 305,
                "end": 314,
                "object": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 308,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 314,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 319,
      "end": 355,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 325,
        "name": "U",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 328,
        "end": 355,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 330,
            "end": 346,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 334,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 345,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 336,
                "end": 345
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 347,
            "end": 353,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 353,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 350,
                "end": 353,
                "literal": {
                  "type": "Literal",
                  "start": 350,
                  "end": 353,
                  "value": "u",
                  "raw": "'u'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 356,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 362,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 365,
        "end": 387,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 367,
            "end": 378,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 371,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 377,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 373,
                "end": 377
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 379,
            "end": 385,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 385,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 382,
                "end": 385,
                "literal": {
                  "type": "Literal",
                  "start": 382,
                  "end": 385,
                  "value": "n",
                  "raw": "'n'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 388,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 394,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 397,
        "end": 418,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 399,
            "end": 409,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 399,
              "end": 403,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 408,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 405,
                "end": 408,
                "literal": {
                  "type": "Literal",
                  "start": 405,
                  "end": 408,
                  "value": "X",
                  "raw": "'X'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 410,
            "end": 416,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 411,
              "end": 416,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 413,
                "end": 416,
                "literal": {
                  "type": "Literal",
                  "start": 413,
                  "end": 416,
                  "value": "x",
                  "raw": "'x'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 420,
      "end": 557,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 431,
        "name": "f1",
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
          "start": 432,
          "end": 452,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 433,
            "end": 452,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 435,
              "end": 452,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 435,
                  "end": 436,
                  "typeName": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 436,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 439,
                  "end": 440,
                  "typeName": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 440,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 443,
                  "end": 452
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 454,
        "end": 557,
        "body": [
          {
            "type": "IfStatement",
            "start": 460,
            "end": 555,
            "test": {
              "type": "BinaryExpression",
              "start": 464,
              "end": 485,
              "left": {
                "type": "ChainExpression",
                "start": 464,
                "end": 471,
                "expression": {
                  "type": "MemberExpression",
                  "start": 464,
                  "end": 471,
                  "object": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 471,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 476,
                "end": 485,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 487,
              "end": 522,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 497,
                  "end": 499,
                  "expression": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 498,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 532,
              "end": 555,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 542,
                  "end": 544,
                  "expression": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 543,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 559,
      "end": 696,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 570,
        "name": "f2",
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
          "start": 571,
          "end": 591,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 591,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 574,
              "end": 591,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 574,
                  "end": 575,
                  "typeName": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 578,
                  "end": 579,
                  "typeName": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 579,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 582,
                  "end": 591
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 593,
        "end": 696,
        "body": [
          {
            "type": "IfStatement",
            "start": 599,
            "end": 694,
            "test": {
              "type": "BinaryExpression",
              "start": 603,
              "end": 624,
              "left": {
                "type": "ChainExpression",
                "start": 603,
                "end": 610,
                "expression": {
                  "type": "MemberExpression",
                  "start": 603,
                  "end": 610,
                  "object": {
                    "type": "Identifier",
                    "start": 603,
                    "end": 604,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 606,
                    "end": 610,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 615,
                "end": 624,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 626,
              "end": 657,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 636,
                  "end": 638,
                  "expression": {
                    "type": "Identifier",
                    "start": 636,
                    "end": 637,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 667,
              "end": 694,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 677,
                  "end": 679,
                  "expression": {
                    "type": "Identifier",
                    "start": 677,
                    "end": 678,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 698,
      "end": 825,
      "id": {
        "type": "Identifier",
        "start": 707,
        "end": 709,
        "name": "f3",
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
          "start": 710,
          "end": 725,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 711,
            "end": 725,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 713,
              "end": 725,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 713,
                  "end": 714,
                  "typeName": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 717,
                  "end": 718,
                  "typeName": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 721,
                  "end": 725
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 727,
        "end": 825,
        "body": [
          {
            "type": "IfStatement",
            "start": 733,
            "end": 823,
            "test": {
              "type": "BinaryExpression",
              "start": 737,
              "end": 758,
              "left": {
                "type": "ChainExpression",
                "start": 737,
                "end": 744,
                "expression": {
                  "type": "MemberExpression",
                  "start": 737,
                  "end": 744,
                  "object": {
                    "type": "Identifier",
                    "start": 737,
                    "end": 738,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 744,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 749,
                "end": 758,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 760,
              "end": 790,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 770,
                  "end": 772,
                  "expression": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 771,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 800,
              "end": 823,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 810,
                  "end": 812,
                  "expression": {
                    "type": "Identifier",
                    "start": 810,
                    "end": 811,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 827,
      "end": 954,
      "id": {
        "type": "Identifier",
        "start": 836,
        "end": 838,
        "name": "f4",
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
          "start": 839,
          "end": 854,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 840,
            "end": 854,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 842,
              "end": 854,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 842,
                  "end": 843,
                  "typeName": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 843,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 846,
                  "end": 847,
                  "typeName": {
                    "type": "Identifier",
                    "start": 846,
                    "end": 847,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 850,
                  "end": 854
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 856,
        "end": 954,
        "body": [
          {
            "type": "IfStatement",
            "start": 862,
            "end": 952,
            "test": {
              "type": "BinaryExpression",
              "start": 866,
              "end": 887,
              "left": {
                "type": "ChainExpression",
                "start": 866,
                "end": 873,
                "expression": {
                  "type": "MemberExpression",
                  "start": 866,
                  "end": 873,
                  "object": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 867,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 869,
                    "end": 873,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 878,
                "end": 887,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 889,
              "end": 915,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 899,
                  "end": 901,
                  "expression": {
                    "type": "Identifier",
                    "start": 899,
                    "end": 900,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 925,
              "end": 952,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 935,
                  "end": 937,
                  "expression": {
                    "type": "Identifier",
                    "start": 935,
                    "end": 936,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 956,
      "end": 1096,
      "id": {
        "type": "Identifier",
        "start": 965,
        "end": 967,
        "name": "f5",
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
          "start": 968,
          "end": 988,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 969,
            "end": 988,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 971,
              "end": 988,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 971,
                  "end": 972,
                  "typeName": {
                    "type": "Identifier",
                    "start": 971,
                    "end": 972,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 975,
                  "end": 976,
                  "typeName": {
                    "type": "Identifier",
                    "start": 975,
                    "end": 976,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 979,
                  "end": 988
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 990,
        "end": 1096,
        "body": [
          {
            "type": "IfStatement",
            "start": 996,
            "end": 1094,
            "test": {
              "type": "BinaryExpression",
              "start": 1000,
              "end": 1016,
              "left": {
                "type": "ChainExpression",
                "start": 1000,
                "end": 1007,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1000,
                  "end": 1007,
                  "object": {
                    "type": "Identifier",
                    "start": 1000,
                    "end": 1001,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1007,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1012,
                "end": 1016,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1018,
              "end": 1045,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1028,
                  "end": 1030,
                  "expression": {
                    "type": "Identifier",
                    "start": 1028,
                    "end": 1029,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1055,
              "end": 1094,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1065,
                  "end": 1067,
                  "expression": {
                    "type": "Identifier",
                    "start": 1065,
                    "end": 1066,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 1098,
      "end": 1230,
      "id": {
        "type": "Identifier",
        "start": 1107,
        "end": 1109,
        "name": "f6",
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
          "start": 1110,
          "end": 1130,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1111,
            "end": 1130,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1113,
              "end": 1130,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1113,
                  "end": 1114,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1113,
                    "end": 1114,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1117,
                  "end": 1118,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1117,
                    "end": 1118,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1121,
                  "end": 1130
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1132,
        "end": 1230,
        "body": [
          {
            "type": "IfStatement",
            "start": 1138,
            "end": 1228,
            "test": {
              "type": "BinaryExpression",
              "start": 1142,
              "end": 1158,
              "left": {
                "type": "ChainExpression",
                "start": 1142,
                "end": 1149,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1142,
                  "end": 1149,
                  "object": {
                    "type": "Identifier",
                    "start": 1142,
                    "end": 1143,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1145,
                    "end": 1149,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1154,
                "end": 1158,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1160,
              "end": 1183,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1170,
                  "end": 1172,
                  "expression": {
                    "type": "Identifier",
                    "start": 1170,
                    "end": 1171,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1193,
              "end": 1228,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1203,
                  "end": 1205,
                  "expression": {
                    "type": "Identifier",
                    "start": 1203,
                    "end": 1204,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 1232,
      "end": 1362,
      "id": {
        "type": "Identifier",
        "start": 1241,
        "end": 1243,
        "name": "f7",
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
          "start": 1244,
          "end": 1259,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1245,
            "end": 1259,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1247,
              "end": 1259,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1247,
                  "end": 1248,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1247,
                    "end": 1248,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1251,
                  "end": 1252,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1251,
                    "end": 1252,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1255,
                  "end": 1259
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1261,
        "end": 1362,
        "body": [
          {
            "type": "IfStatement",
            "start": 1267,
            "end": 1360,
            "test": {
              "type": "BinaryExpression",
              "start": 1271,
              "end": 1287,
              "left": {
                "type": "ChainExpression",
                "start": 1271,
                "end": 1278,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1271,
                  "end": 1278,
                  "object": {
                    "type": "Identifier",
                    "start": 1271,
                    "end": 1272,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1274,
                    "end": 1278,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1283,
                "end": 1287,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1289,
              "end": 1316,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1299,
                  "end": 1301,
                  "expression": {
                    "type": "Identifier",
                    "start": 1299,
                    "end": 1300,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1326,
              "end": 1360,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1336,
                  "end": 1338,
                  "expression": {
                    "type": "Identifier",
                    "start": 1336,
                    "end": 1337,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 1364,
      "end": 1486,
      "id": {
        "type": "Identifier",
        "start": 1373,
        "end": 1375,
        "name": "f8",
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
          "start": 1376,
          "end": 1391,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1377,
            "end": 1391,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1379,
              "end": 1391,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1379,
                  "end": 1380,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1379,
                    "end": 1380,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1383,
                  "end": 1384,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1383,
                    "end": 1384,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1387,
                  "end": 1391
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1393,
        "end": 1486,
        "body": [
          {
            "type": "IfStatement",
            "start": 1399,
            "end": 1484,
            "test": {
              "type": "BinaryExpression",
              "start": 1403,
              "end": 1419,
              "left": {
                "type": "ChainExpression",
                "start": 1403,
                "end": 1410,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1403,
                  "end": 1410,
                  "object": {
                    "type": "Identifier",
                    "start": 1403,
                    "end": 1404,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1406,
                    "end": 1410,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1415,
                "end": 1419,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1421,
              "end": 1444,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1431,
                  "end": 1433,
                  "expression": {
                    "type": "Identifier",
                    "start": 1431,
                    "end": 1432,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1454,
              "end": 1484,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1464,
                  "end": 1466,
                  "expression": {
                    "type": "Identifier",
                    "start": 1464,
                    "end": 1465,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
