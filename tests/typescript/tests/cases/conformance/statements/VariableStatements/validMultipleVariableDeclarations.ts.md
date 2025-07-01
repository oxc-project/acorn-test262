__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
            },
            "start": 33,
            "end": 42
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 42
        }
      ],
      "declare": false,
      "start": 29,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 52,
            "end": 53
          },
          "definite": false,
          "start": 48,
          "end": 53
        }
      ],
      "declare": false,
      "start": 44,
      "end": 54
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 59,
        "end": 63
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "init": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 79,
                  "end": 80
                },
                "definite": false,
                "start": 75,
                "end": 80
              }
            ],
            "declare": false,
            "start": 71,
            "end": 81
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 99,
                    "end": 100
                  },
                  "definite": false,
                  "start": 95,
                  "end": 100
                }
              ],
              "declare": false,
              "start": 91,
              "end": 100
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 105,
              "end": 108
            },
            "start": 86,
            "end": 108
          }
        ],
        "start": 65,
        "end": 110
      },
      "alternate": null,
      "start": 55,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 120,
              "end": 126
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 136
            },
            "start": 119,
            "end": 136
          },
          "definite": false,
          "start": 115,
          "end": 136
        }
      ],
      "declare": false,
      "start": 111,
      "end": 137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "declSpace",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 222
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "init": {
                  "type": "Literal",
                  "value": "this is a string",
                  "raw": "'this is a string'",
                  "start": 239,
                  "end": 257
                },
                "definite": false,
                "start": 235,
                "end": 257
              }
            ],
            "declare": false,
            "start": 231,
            "end": 258
          }
        ],
        "start": 225,
        "end": 260
      },
      "expression": false,
      "start": 204,
      "end": 260
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 277
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
              "start": 280,
              "end": 281
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 283,
                "end": 289
              },
              "start": 281,
              "end": 289
            },
            "accessibility": null,
            "static": false,
            "start": 280,
            "end": 290
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
              "start": 291,
              "end": 292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 294,
                "end": 300
              },
              "start": 292,
              "end": 300
            },
            "accessibility": null,
            "static": false,
            "start": 291,
            "end": 301
          }
        ],
        "start": 278,
        "end": 303
      },
      "declare": false,
      "start": 262,
      "end": 303
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 317
                },
                "typeArguments": null,
                "start": 312,
                "end": 317
              },
              "start": 310,
              "end": 317
            },
            "start": 309,
            "end": 317
          },
          "init": null,
          "definite": false,
          "start": 309,
          "end": 317
        }
      ],
      "declare": false,
      "start": 305,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 324
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 330
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 332,
                  "end": 333
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 329,
                "end": 333
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 336
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 338,
                  "end": 339
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 335,
                "end": 339
              }
            ],
            "start": 327,
            "end": 341
          },
          "definite": false,
          "start": 323,
          "end": 341
        }
      ],
      "declare": false,
      "start": 319,
      "end": 342
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 355
                },
                "typeArguments": null,
                "start": 350,
                "end": 355
              },
              "start": 348,
              "end": 355
            },
            "start": 347,
            "end": 355
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 361
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 363,
                  "end": 364
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 360,
                "end": 364
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 378
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 366,
                "end": 378
              }
            ],
            "start": 358,
            "end": 380
          },
          "definite": false,
          "start": 347,
          "end": 380
        }
      ],
      "declare": false,
      "start": 343,
      "end": 381
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 387
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 395,
                  "end": 396
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 392,
                "end": 396
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 399
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 402,
                    "end": 408
                  },
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 418
                  },
                  "start": 401,
                  "end": 418
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 398,
                "end": 418
              }
            ],
            "start": 390,
            "end": 420
          },
          "definite": false,
          "start": 386,
          "end": 420
        }
      ],
      "declare": false,
      "start": 382,
      "end": 421
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                      "start": 431,
                      "end": 432
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 434,
                        "end": 440
                      },
                      "start": 432,
                      "end": 440
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 431,
                    "end": 441
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
                      "start": 442,
                      "end": 443
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 445,
                        "end": 451
                      },
                      "start": 443,
                      "end": 451
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 442,
                    "end": 452
                  }
                ],
                "start": 429,
                "end": 454
              },
              "start": 427,
              "end": 454
            },
            "start": 426,
            "end": 454
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 460
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 462,
                  "end": 463
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 459,
                "end": 463
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 466
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 468,
                  "end": 469
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 465,
                "end": 469
              }
            ],
            "start": 457,
            "end": 471
          },
          "definite": false,
          "start": 426,
          "end": 471
        }
      ],
      "declare": false,
      "start": 422,
      "end": 472
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 478
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
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
                    "start": 484,
                    "end": 485
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 487,
                      "end": 493
                    },
                    "start": 485,
                    "end": 493
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 484,
                  "end": 494
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
                    "start": 495,
                    "end": 496
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 498,
                      "end": 504
                    },
                    "start": 496,
                    "end": 504
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 495,
                  "end": 505
                }
              ],
              "start": 482,
              "end": 507
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 511
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 513,
                    "end": 514
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 510,
                  "end": 514
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 528
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 516,
                  "end": 528
                }
              ],
              "start": 508,
              "end": 530
            },
            "start": 481,
            "end": 530
          },
          "definite": false,
          "start": 477,
          "end": 530
        }
      ],
      "declare": false,
      "start": 473,
      "end": 531
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 547
                },
                "typeArguments": null,
                "start": 539,
                "end": 547
              },
              "start": 537,
              "end": 547
            },
            "start": 536,
            "end": 547
          },
          "init": null,
          "definite": false,
          "start": 536,
          "end": 547
        }
      ],
      "declare": false,
      "start": 532,
      "end": 548
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 556
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 572,
                    "end": 578
                  },
                  "start": 570,
                  "end": 578
                },
                "start": 569,
                "end": 578
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 589,
                    "end": 591
                  },
                  "start": 582,
                  "end": 592
                }
              ],
              "start": 580,
              "end": 594
            },
            "expression": false,
            "start": 559,
            "end": 594
          },
          "definite": false,
          "start": 554,
          "end": 594
        }
      ],
      "declare": false,
      "start": 550,
      "end": 594
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 601
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 608,
                    "end": 614
                  },
                  "start": 606,
                  "end": 614
                },
                "start": 605,
                "end": 614
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 619,
              "end": 620
            },
            "id": null,
            "generator": false,
            "start": 604,
            "end": 620
          },
          "definite": false,
          "start": 599,
          "end": 620
        }
      ],
      "declare": false,
      "start": 595,
      "end": 621
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 634,
                        "end": 640
                      },
                      "start": 632,
                      "end": 640
                    },
                    "start": 631,
                    "end": 640
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 645,
                    "end": 651
                  },
                  "start": 642,
                  "end": 651
                },
                "start": 630,
                "end": 651
              },
              "start": 628,
              "end": 651
            },
            "start": 626,
            "end": 651
          },
          "init": null,
          "definite": false,
          "start": 626,
          "end": 651
        }
      ],
      "declare": false,
      "start": 622,
      "end": 652
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 667,
                            "end": 673
                          },
                          "start": 665,
                          "end": 673
                        },
                        "start": 664,
                        "end": 673
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 676,
                        "end": 682
                      },
                      "start": 674,
                      "end": 682
                    },
                    "start": 663,
                    "end": 682
                  }
                ],
                "start": 661,
                "end": 684
              },
              "start": 659,
              "end": 684
            },
            "start": 657,
            "end": 684
          },
          "init": null,
          "definite": false,
          "start": 657,
          "end": 684
        }
      ],
      "declare": false,
      "start": 653,
      "end": 685
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 692
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 700,
                      "end": 706
                    },
                    "start": 698,
                    "end": 706
                  },
                  "start": 697,
                  "end": 706
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 711,
                  "end": 717
                },
                "start": 708,
                "end": 717
              },
              "start": 696,
              "end": 717
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 719,
              "end": 723
            },
            "start": 695,
            "end": 723
          },
          "definite": false,
          "start": 690,
          "end": 723
        }
      ],
      "declare": false,
      "start": 686,
      "end": 724
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 742
                },
                "typeArguments": null,
                "start": 733,
                "end": 742
              },
              "start": 731,
              "end": 742
            },
            "start": 729,
            "end": 742
          },
          "init": null,
          "definite": false,
          "start": 729,
          "end": 742
        }
      ],
      "declare": false,
      "start": 725,
      "end": 743
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 752,
                  "end": 758
                },
                "start": 752,
                "end": 760
              },
              "start": 750,
              "end": 760
            },
            "start": 749,
            "end": 760
          },
          "init": null,
          "definite": false,
          "start": 749,
          "end": 760
        }
      ],
      "declare": false,
      "start": 745,
      "end": 761
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 768
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 772,
                "end": 775
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 777,
                "end": 780
              }
            ],
            "start": 771,
            "end": 781
          },
          "definite": false,
          "start": 767,
          "end": 781
        }
      ],
      "declare": false,
      "start": 763,
      "end": 781
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 791,
                "end": 797
              },
              "start": 791,
              "end": 799
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 800,
              "end": 802
            },
            "start": 790,
            "end": 802
          },
          "definite": false,
          "start": 786,
          "end": 802
        }
      ],
      "declare": false,
      "start": 782,
      "end": 803
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 811,
                  "end": 817
                },
                "start": 811,
                "end": 819
              },
              "start": 809,
              "end": 819
            },
            "start": 808,
            "end": 819
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 822,
            "end": 824
          },
          "definite": false,
          "start": 808,
          "end": 824
        }
      ],
      "declare": false,
      "start": 804,
      "end": 825
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 831
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 843
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 844,
                  "end": 850
                }
              ],
              "start": 843,
              "end": 851
            },
            "arguments": [],
            "start": 834,
            "end": 853
          },
          "definite": false,
          "start": 830,
          "end": 853
        }
      ],
      "declare": false,
      "start": 826,
      "end": 854
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 869,
                  "end": 870
                },
                "typeArguments": null,
                "start": 862,
                "end": 870
              },
              "start": 860,
              "end": 870
            },
            "start": 859,
            "end": 870
          },
          "init": null,
          "definite": false,
          "start": 859,
          "end": 870
        }
      ],
      "declare": false,
      "start": 855,
      "end": 871
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 871
}
```
