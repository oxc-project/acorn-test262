__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 872,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 31,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 46,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
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
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 72,
        "decorators": [],
        "name": "HelloOrWorld",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 81,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 103,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 96,
                "end": 103
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
      "type": "TSInterfaceDeclaration",
      "start": 108,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 127,
        "decorators": [],
        "name": "JustHello",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 136,
          "end": 140,
          "expression": {
            "type": "Identifier",
            "start": 136,
            "end": 140,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 141,
        "end": 161,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 147,
            "end": 159,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 149,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 158,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 151,
                "end": 158
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
      "type": "TSInterfaceDeclaration",
      "start": 163,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 182,
        "decorators": [],
        "name": "JustWorld",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 191,
          "end": 195,
          "expression": {
            "type": "Identifier",
            "start": 191,
            "end": 195,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 196,
        "end": 216,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 202,
            "end": 214,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 204,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 213,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 206,
                "end": 213
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
      "type": "VariableDeclaration",
      "start": 218,
      "end": 237,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 236,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 236,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 229,
                "end": 236,
                "literal": {
                  "type": "Literal",
                  "start": 229,
                  "end": 236,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 257,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 256,
            "decorators": [],
            "name": "world",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 256,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 249,
                "end": 256,
                "literal": {
                  "type": "Literal",
                  "start": 249,
                  "end": 256,
                  "value": "world",
                  "raw": "\"world\""
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 294,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 293,
            "decorators": [],
            "name": "helloOrWorld",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 293,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 276,
                "end": 293,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 276,
                    "end": 283,
                    "literal": {
                      "type": "Literal",
                      "start": 276,
                      "end": 283,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 286,
                    "end": 293,
                    "literal": {
                      "type": "Literal",
                      "start": 286,
                      "end": 293,
                      "value": "world",
                      "raw": "\"world\""
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 296,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 306,
        "decorators": [],
        "name": "f",
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
          "start": 307,
          "end": 317,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 308,
            "end": 317,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 310,
              "end": 317,
              "literal": {
                "type": "Literal",
                "start": 310,
                "end": 317,
                "value": "hello",
                "raw": "\"hello\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 318,
        "end": 329,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 320,
          "end": 329,
          "typeName": {
            "type": "Identifier",
            "start": 320,
            "end": 329,
            "decorators": [],
            "name": "JustHello",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 331,
      "end": 378,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 341,
        "decorators": [],
        "name": "f",
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
          "start": 342,
          "end": 362,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 343,
            "end": 362,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 345,
              "end": 362,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 345,
                  "end": 352,
                  "literal": {
                    "type": "Literal",
                    "start": 345,
                    "end": 352,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 355,
                  "end": 362,
                  "literal": {
                    "type": "Literal",
                    "start": 355,
                    "end": 362,
                    "value": "world",
                    "raw": "\"world\""
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 363,
        "end": 377,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 365,
          "end": 377,
          "typeName": {
            "type": "Identifier",
            "start": 365,
            "end": 377,
            "decorators": [],
            "name": "HelloOrWorld",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 379,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "decorators": [],
        "name": "f",
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
          "start": 390,
          "end": 400,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 400,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 393,
              "end": 400,
              "literal": {
                "type": "Literal",
                "start": 393,
                "end": 400,
                "value": "world",
                "raw": "\"world\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 401,
        "end": 412,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 403,
          "end": 412,
          "typeName": {
            "type": "Identifier",
            "start": 403,
            "end": 412,
            "decorators": [],
            "name": "JustWorld",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 414,
      "end": 442,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 424,
        "decorators": [],
        "name": "f",
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
          "start": 425,
          "end": 434,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 426,
            "end": 434,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 428,
              "end": 434
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 435,
        "end": 441,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 437,
          "end": 441,
          "typeName": {
            "type": "Identifier",
            "start": 437,
            "end": 441,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 443,
      "end": 500,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 453,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 454,
          "end": 468,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 457,
            "end": 461,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 461,
            "end": 468,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 463,
              "end": 468,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 463,
                "end": 466
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 469,
        "end": 474,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 471,
          "end": 474
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 475,
        "end": 500,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 481,
            "end": 498,
            "argument": {
              "type": "Identifier",
              "start": 488,
              "end": 497,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 502,
      "end": 526,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 525,
          "id": {
            "type": "Identifier",
            "start": 506,
            "end": 514,
            "decorators": [],
            "name": "fResult1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 517,
            "end": 525,
            "callee": {
              "type": "Identifier",
              "start": 517,
              "end": 518,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 519,
                "end": 524,
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 527,
      "end": 551,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 531,
          "end": 550,
          "id": {
            "type": "Identifier",
            "start": 531,
            "end": 539,
            "decorators": [],
            "name": "fResult2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 542,
            "end": 550,
            "callee": {
              "type": "Identifier",
              "start": 542,
              "end": 543,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 544,
                "end": 549,
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 552,
      "end": 583,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 556,
          "end": 582,
          "id": {
            "type": "Identifier",
            "start": 556,
            "end": 564,
            "decorators": [],
            "name": "fResult3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 567,
            "end": 582,
            "callee": {
              "type": "Identifier",
              "start": 567,
              "end": 568,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 569,
                "end": 581,
                "decorators": [],
                "name": "helloOrWorld",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 585,
      "end": 613,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 595,
        "decorators": [],
        "name": "g",
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
          "start": 596,
          "end": 605,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 597,
            "end": 605,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 599,
              "end": 605
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 606,
        "end": 612,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 608,
          "end": 612,
          "typeName": {
            "type": "Identifier",
            "start": 608,
            "end": 612,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 614,
      "end": 648,
      "id": {
        "type": "Identifier",
        "start": 623,
        "end": 624,
        "decorators": [],
        "name": "g",
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
          "start": 625,
          "end": 635,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 626,
            "end": 635,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 628,
              "end": 635,
              "literal": {
                "type": "Literal",
                "start": 628,
                "end": 635,
                "value": "hello",
                "raw": "\"hello\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 636,
        "end": 647,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 638,
          "end": 647,
          "typeName": {
            "type": "Identifier",
            "start": 638,
            "end": 647,
            "decorators": [],
            "name": "JustHello",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 649,
      "end": 696,
      "id": {
        "type": "Identifier",
        "start": 658,
        "end": 659,
        "decorators": [],
        "name": "g",
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
          "start": 660,
          "end": 680,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 661,
            "end": 680,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 663,
              "end": 680,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 663,
                  "end": 670,
                  "literal": {
                    "type": "Literal",
                    "start": 663,
                    "end": 670,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 673,
                  "end": 680,
                  "literal": {
                    "type": "Literal",
                    "start": 673,
                    "end": 680,
                    "value": "world",
                    "raw": "\"world\""
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 681,
        "end": 695,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 683,
          "end": 695,
          "typeName": {
            "type": "Identifier",
            "start": 683,
            "end": 695,
            "decorators": [],
            "name": "HelloOrWorld",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 697,
      "end": 731,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 707,
        "decorators": [],
        "name": "g",
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
          "start": 708,
          "end": 718,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 709,
            "end": 718,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 711,
              "end": 718,
              "literal": {
                "type": "Literal",
                "start": 711,
                "end": 718,
                "value": "world",
                "raw": "\"world\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 719,
        "end": 730,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 721,
          "end": 730,
          "typeName": {
            "type": "Identifier",
            "start": 721,
            "end": 730,
            "decorators": [],
            "name": "JustWorld",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 732,
      "end": 789,
      "id": {
        "type": "Identifier",
        "start": 741,
        "end": 742,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 743,
          "end": 757,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 746,
            "end": 750,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 750,
            "end": 757,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 752,
              "end": 757,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 752,
                "end": 755
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 758,
        "end": 763,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 760,
          "end": 763
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 764,
        "end": 789,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 770,
            "end": 787,
            "argument": {
              "type": "Identifier",
              "start": 777,
              "end": 786,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 791,
      "end": 815,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 795,
          "end": 814,
          "id": {
            "type": "Identifier",
            "start": 795,
            "end": 803,
            "decorators": [],
            "name": "gResult1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 806,
            "end": 814,
            "callee": {
              "type": "Identifier",
              "start": 806,
              "end": 807,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 808,
                "end": 813,
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 816,
      "end": 840,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 820,
          "end": 839,
          "id": {
            "type": "Identifier",
            "start": 820,
            "end": 828,
            "decorators": [],
            "name": "gResult2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 831,
            "end": 839,
            "callee": {
              "type": "Identifier",
              "start": 831,
              "end": 832,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 833,
                "end": 838,
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 841,
      "end": 872,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 845,
          "end": 871,
          "id": {
            "type": "Identifier",
            "start": 845,
            "end": 853,
            "decorators": [],
            "name": "gResult3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 856,
            "end": 871,
            "callee": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 858,
                "end": 870,
                "decorators": [],
                "name": "helloOrWorld",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
