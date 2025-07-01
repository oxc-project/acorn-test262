__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 31
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 46
          }
        ],
        "start": 15,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloOrWorld",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 72
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 85
          },
          "typeArguments": null,
          "start": 81,
          "end": 85
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 96,
                "end": 103
              },
              "start": 94,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 104
          }
        ],
        "start": 86,
        "end": 106
      },
      "declare": false,
      "start": 50,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustHello",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 127
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 140
          },
          "typeArguments": null,
          "start": 136,
          "end": 140
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 151,
                "end": 158
              },
              "start": 149,
              "end": 158
            },
            "accessibility": null,
            "static": false,
            "start": 147,
            "end": 159
          }
        ],
        "start": 141,
        "end": 161
      },
      "declare": false,
      "start": 108,
      "end": 161
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustWorld",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 182
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 195
          },
          "typeArguments": null,
          "start": 191,
          "end": 195
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 204
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 206,
                "end": 213
              },
              "start": 204,
              "end": 213
            },
            "accessibility": null,
            "static": false,
            "start": 202,
            "end": 214
          }
        ],
        "start": 196,
        "end": 216
      },
      "declare": false,
      "start": 163,
      "end": 216
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 229,
                  "end": 236
                },
                "start": 229,
                "end": 236
              },
              "start": 227,
              "end": 236
            },
            "start": 222,
            "end": 236
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 236
        }
      ],
      "declare": false,
      "start": 218,
      "end": 237
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "world",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 249,
                  "end": 256
                },
                "start": 249,
                "end": 256
              },
              "start": 247,
              "end": 256
            },
            "start": 242,
            "end": 256
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 256
        }
      ],
      "declare": false,
      "start": 238,
      "end": 257
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "helloOrWorld",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 276,
                      "end": 283
                    },
                    "start": 276,
                    "end": 283
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 286,
                      "end": 293
                    },
                    "start": 286,
                    "end": 293
                  }
                ],
                "start": 276,
                "end": 293
              },
              "start": 274,
              "end": 293
            },
            "start": 262,
            "end": 293
          },
          "init": null,
          "definite": false,
          "start": 262,
          "end": 293
        }
      ],
      "declare": false,
      "start": 258,
      "end": 294
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 306
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 310,
                "end": 317
              },
              "start": 310,
              "end": 317
            },
            "start": 308,
            "end": 317
          },
          "start": 307,
          "end": 317
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JustHello",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 329
          },
          "typeArguments": null,
          "start": 320,
          "end": 329
        },
        "start": 318,
        "end": 329
      },
      "body": null,
      "expression": false,
      "start": 296,
      "end": 330
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 341
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 345,
                    "end": 352
                  },
                  "start": 345,
                  "end": 352
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "world",
                    "raw": "\"world\"",
                    "start": 355,
                    "end": 362
                  },
                  "start": 355,
                  "end": 362
                }
              ],
              "start": 345,
              "end": 362
            },
            "start": 343,
            "end": 362
          },
          "start": 342,
          "end": 362
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "HelloOrWorld",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 377
          },
          "typeArguments": null,
          "start": 365,
          "end": 377
        },
        "start": 363,
        "end": 377
      },
      "body": null,
      "expression": false,
      "start": 331,
      "end": 378
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 393,
                "end": 400
              },
              "start": 393,
              "end": 400
            },
            "start": 391,
            "end": 400
          },
          "start": 390,
          "end": 400
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JustWorld",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 412
          },
          "typeArguments": null,
          "start": 403,
          "end": 412
        },
        "start": 401,
        "end": 412
      },
      "body": null,
      "expression": false,
      "start": 379,
      "end": 413
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 424
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 428,
              "end": 434
            },
            "start": 426,
            "end": 434
          },
          "start": 425,
          "end": 434
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 441
          },
          "typeArguments": null,
          "start": 437,
          "end": 441
        },
        "start": 435,
        "end": 441
      },
      "body": null,
      "expression": false,
      "start": 414,
      "end": 442
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 453
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 461
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 463,
                "end": 466
              },
              "start": 463,
              "end": 468
            },
            "start": 461,
            "end": 468
          },
          "value": null,
          "start": 454,
          "end": 468
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 471,
          "end": 474
        },
        "start": 469,
        "end": 474
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 497
            },
            "start": 481,
            "end": 498
          }
        ],
        "start": 475,
        "end": 500
      },
      "expression": false,
      "start": 443,
      "end": 500
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fResult1",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 514
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 518
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 524
              }
            ],
            "optional": false,
            "start": 517,
            "end": 525
          },
          "definite": false,
          "start": 506,
          "end": 525
        }
      ],
      "declare": false,
      "start": 502,
      "end": 526
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fResult2",
            "optional": false,
            "typeAnnotation": null,
            "start": 531,
            "end": 539
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 543
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 549
              }
            ],
            "optional": false,
            "start": 542,
            "end": 550
          },
          "definite": false,
          "start": 531,
          "end": 550
        }
      ],
      "declare": false,
      "start": 527,
      "end": 551
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fResult3",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 564
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 568
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "helloOrWorld",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 581
              }
            ],
            "optional": false,
            "start": 567,
            "end": 582
          },
          "definite": false,
          "start": 556,
          "end": 582
        }
      ],
      "declare": false,
      "start": 552,
      "end": 583
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 595
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 599,
              "end": 605
            },
            "start": 597,
            "end": 605
          },
          "start": 596,
          "end": 605
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 612
          },
          "typeArguments": null,
          "start": 608,
          "end": 612
        },
        "start": 606,
        "end": 612
      },
      "body": null,
      "expression": false,
      "start": 585,
      "end": 613
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 623,
        "end": 624
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 628,
                "end": 635
              },
              "start": 628,
              "end": 635
            },
            "start": 626,
            "end": 635
          },
          "start": 625,
          "end": 635
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JustHello",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 647
          },
          "typeArguments": null,
          "start": 638,
          "end": 647
        },
        "start": 636,
        "end": 647
      },
      "body": null,
      "expression": false,
      "start": 614,
      "end": 648
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 659
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 663,
                    "end": 670
                  },
                  "start": 663,
                  "end": 670
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "world",
                    "raw": "\"world\"",
                    "start": 673,
                    "end": 680
                  },
                  "start": 673,
                  "end": 680
                }
              ],
              "start": 663,
              "end": 680
            },
            "start": 661,
            "end": 680
          },
          "start": 660,
          "end": 680
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "HelloOrWorld",
            "optional": false,
            "typeAnnotation": null,
            "start": 683,
            "end": 695
          },
          "typeArguments": null,
          "start": 683,
          "end": 695
        },
        "start": 681,
        "end": 695
      },
      "body": null,
      "expression": false,
      "start": 649,
      "end": 696
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 707
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 711,
                "end": 718
              },
              "start": 711,
              "end": 718
            },
            "start": 709,
            "end": 718
          },
          "start": 708,
          "end": 718
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JustWorld",
            "optional": false,
            "typeAnnotation": null,
            "start": 721,
            "end": 730
          },
          "typeArguments": null,
          "start": 721,
          "end": 730
        },
        "start": 719,
        "end": 730
      },
      "body": null,
      "expression": false,
      "start": 697,
      "end": 731
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 742
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 750
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 752,
                "end": 755
              },
              "start": 752,
              "end": 757
            },
            "start": 750,
            "end": 757
          },
          "value": null,
          "start": 743,
          "end": 757
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 760,
          "end": 763
        },
        "start": 758,
        "end": 763
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 786
            },
            "start": 770,
            "end": 787
          }
        ],
        "start": 764,
        "end": 789
      },
      "expression": false,
      "start": 732,
      "end": 789
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gResult1",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 803
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 807
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 813
              }
            ],
            "optional": false,
            "start": 806,
            "end": 814
          },
          "definite": false,
          "start": 795,
          "end": 814
        }
      ],
      "declare": false,
      "start": 791,
      "end": 815
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gResult2",
            "optional": false,
            "typeAnnotation": null,
            "start": 820,
            "end": 828
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 832
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 838
              }
            ],
            "optional": false,
            "start": 831,
            "end": 839
          },
          "definite": false,
          "start": 820,
          "end": 839
        }
      ],
      "declare": false,
      "start": 816,
      "end": 840
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gResult3",
            "optional": false,
            "typeAnnotation": null,
            "start": 845,
            "end": 853
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "helloOrWorld",
                "optional": false,
                "typeAnnotation": null,
                "start": 858,
                "end": 870
              }
            ],
            "optional": false,
            "start": 856,
            "end": 871
          },
          "definite": false,
          "start": 845,
          "end": 871
        }
      ],
      "declare": false,
      "start": 841,
      "end": 872
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 872
}
```
