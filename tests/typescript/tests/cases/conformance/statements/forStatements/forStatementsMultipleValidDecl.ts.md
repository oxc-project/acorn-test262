__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "start": 38,
              "end": 47
            },
            "init": null,
            "definite": false,
            "start": 38,
            "end": 47
          }
        ],
        "declare": false,
        "start": 34,
        "end": 47
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 52,
        "end": 55
      },
      "start": 29,
      "end": 55
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
              "start": 65,
              "end": 66
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 69,
              "end": 70
            },
            "definite": false,
            "start": 65,
            "end": 70
          }
        ],
        "declare": false,
        "start": 61,
        "end": 70
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 75,
        "end": 78
      },
      "start": 56,
      "end": 78
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
              "start": 89,
              "end": 90
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 110
              },
              "start": 93,
              "end": 110
            },
            "definite": false,
            "start": 89,
            "end": 110
          }
        ],
        "declare": false,
        "start": 85,
        "end": 110
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 115,
        "end": 118
      },
      "start": 80,
      "end": 118
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "declSpace",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 202
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
                    "start": 220,
                    "end": 221
                  },
                  "init": {
                    "type": "Literal",
                    "value": "this is a string",
                    "raw": "'this is a string'",
                    "start": 224,
                    "end": 242
                  },
                  "definite": false,
                  "start": 220,
                  "end": 242
                }
              ],
              "declare": false,
              "start": 216,
              "end": 242
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 247,
              "end": 250
            },
            "start": 211,
            "end": 250
          }
        ],
        "start": 205,
        "end": 252
      },
      "expression": false,
      "start": 184,
      "end": 252
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 268
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
              "start": 271,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 274,
                "end": 280
              },
              "start": 272,
              "end": 280
            },
            "accessibility": null,
            "static": false,
            "start": 271,
            "end": 281
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
              "start": 282,
              "end": 283
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 285,
                "end": 291
              },
              "start": 283,
              "end": 291
            },
            "accessibility": null,
            "static": false,
            "start": 282,
            "end": 292
          }
        ],
        "start": 269,
        "end": 294
      },
      "declare": false,
      "start": 253,
      "end": 294
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
                    "start": 308,
                    "end": 313
                  },
                  "typeArguments": null,
                  "start": 308,
                  "end": 313
                },
                "start": 306,
                "end": 313
              },
              "start": 305,
              "end": 313
            },
            "init": null,
            "definite": false,
            "start": 305,
            "end": 313
          }
        ],
        "declare": false,
        "start": 301,
        "end": 313
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 318,
        "end": 321
      },
      "start": 296,
      "end": 321
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 332
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
                    "start": 337,
                    "end": 338
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 340,
                    "end": 341
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 337,
                  "end": 341
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
                    "start": 343,
                    "end": 344
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 346,
                    "end": 347
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 343,
                  "end": 347
                }
              ],
              "start": 335,
              "end": 349
            },
            "definite": false,
            "start": 331,
            "end": 349
          }
        ],
        "declare": false,
        "start": 327,
        "end": 349
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 354,
        "end": 357
      },
      "start": 322,
      "end": 357
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
                    "start": 370,
                    "end": 375
                  },
                  "typeArguments": null,
                  "start": 370,
                  "end": 375
                },
                "start": 368,
                "end": 375
              },
              "start": 367,
              "end": 375
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
                    "start": 380,
                    "end": 381
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 383,
                    "end": 384
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 380,
                  "end": 384
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
                    "start": 386,
                    "end": 387
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 389,
                    "end": 398
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 386,
                  "end": 398
                }
              ],
              "start": 378,
              "end": 400
            },
            "definite": false,
            "start": 367,
            "end": 400
          }
        ],
        "declare": false,
        "start": 363,
        "end": 400
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 405,
        "end": 408
      },
      "start": 358,
      "end": 408
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 419
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
                    "start": 424,
                    "end": 425
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 427,
                    "end": 428
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 424,
                  "end": 428
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
                    "start": 430,
                    "end": 431
                  },
                  "value": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    },
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 450
                    },
                    "start": 433,
                    "end": 450
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 430,
                  "end": 450
                }
              ],
              "start": 422,
              "end": 452
            },
            "definite": false,
            "start": 418,
            "end": 452
          }
        ],
        "declare": false,
        "start": 414,
        "end": 452
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 457,
        "end": 460
      },
      "start": 409,
      "end": 460
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
                        "start": 475,
                        "end": 476
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 478,
                          "end": 484
                        },
                        "start": 476,
                        "end": 484
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 475,
                      "end": 485
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
                        "start": 486,
                        "end": 487
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 489,
                          "end": 495
                        },
                        "start": 487,
                        "end": 495
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 486,
                      "end": 496
                    }
                  ],
                  "start": 473,
                  "end": 498
                },
                "start": 471,
                "end": 498
              },
              "start": 470,
              "end": 498
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
                    "start": 503,
                    "end": 504
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 506,
                    "end": 507
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 503,
                  "end": 507
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
                    "start": 509,
                    "end": 510
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 512,
                    "end": 513
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 509,
                  "end": 513
                }
              ],
              "start": 501,
              "end": 515
            },
            "definite": false,
            "start": 470,
            "end": 515
          }
        ],
        "declare": false,
        "start": 466,
        "end": 515
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 520,
        "end": 523
      },
      "start": 461,
      "end": 523
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 534
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
                      "start": 540,
                      "end": 541
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 543,
                        "end": 549
                      },
                      "start": 541,
                      "end": 549
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 540,
                    "end": 550
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
                      "start": 551,
                      "end": 552
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      },
                      "start": 552,
                      "end": 560
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 551,
                    "end": 561
                  }
                ],
                "start": 538,
                "end": 563
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
                      "start": 566,
                      "end": 567
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 569,
                      "end": 570
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 566,
                    "end": 570
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
                      "start": 572,
                      "end": 573
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 575,
                      "end": 584
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 572,
                    "end": 584
                  }
                ],
                "start": 564,
                "end": 586
              },
              "start": 537,
              "end": 586
            },
            "definite": false,
            "start": 533,
            "end": 586
          }
        ],
        "declare": false,
        "start": 529,
        "end": 586
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 591,
        "end": 594
      },
      "start": 524,
      "end": 594
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
                    "start": 614,
                    "end": 615
                  },
                  "typeArguments": null,
                  "start": 607,
                  "end": 615
                },
                "start": 605,
                "end": 615
              },
              "start": 604,
              "end": 615
            },
            "init": null,
            "definite": false,
            "start": 604,
            "end": 615
          }
        ],
        "declare": false,
        "start": 600,
        "end": 615
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 620,
        "end": 623
      },
      "start": 595,
      "end": 623
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
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 636
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
                      "start": 652,
                      "end": 658
                    },
                    "start": 650,
                    "end": 658
                  },
                  "start": 649,
                  "end": 658
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
                      "start": 669,
                      "end": 671
                    },
                    "start": 662,
                    "end": 672
                  }
                ],
                "start": 660,
                "end": 674
              },
              "expression": false,
              "start": 639,
              "end": 674
            },
            "definite": false,
            "start": 634,
            "end": 674
          }
        ],
        "declare": false,
        "start": 630,
        "end": 674
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 679,
        "end": 682
      },
      "start": 625,
      "end": 682
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
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 694
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
                      "start": 701,
                      "end": 707
                    },
                    "start": 699,
                    "end": 707
                  },
                  "start": 698,
                  "end": 707
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 712,
                "end": 713
              },
              "id": null,
              "generator": false,
              "start": 697,
              "end": 713
            },
            "definite": false,
            "start": 692,
            "end": 713
          }
        ],
        "declare": false,
        "start": 688,
        "end": 713
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 718,
        "end": 721
      },
      "start": 683,
      "end": 721
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
                          "start": 739,
                          "end": 745
                        },
                        "start": 737,
                        "end": 745
                      },
                      "start": 736,
                      "end": 745
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 750,
                      "end": 756
                    },
                    "start": 747,
                    "end": 756
                  },
                  "start": 735,
                  "end": 756
                },
                "start": 733,
                "end": 756
              },
              "start": 731,
              "end": 756
            },
            "init": null,
            "definite": false,
            "start": 731,
            "end": 756
          }
        ],
        "declare": false,
        "start": 727,
        "end": 756
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 761,
        "end": 764
      },
      "start": 722,
      "end": 764
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
                              "start": 784,
                              "end": 790
                            },
                            "start": 782,
                            "end": 790
                          },
                          "start": 781,
                          "end": 790
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 793,
                          "end": 799
                        },
                        "start": 791,
                        "end": 799
                      },
                      "start": 780,
                      "end": 799
                    }
                  ],
                  "start": 778,
                  "end": 801
                },
                "start": 776,
                "end": 801
              },
              "start": 774,
              "end": 801
            },
            "init": null,
            "definite": false,
            "start": 774,
            "end": 801
          }
        ],
        "declare": false,
        "start": 770,
        "end": 801
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 806,
        "end": 809
      },
      "start": 765,
      "end": 809
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
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 821
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
                        "start": 829,
                        "end": 835
                      },
                      "start": 827,
                      "end": 835
                    },
                    "start": 826,
                    "end": 835
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 840,
                    "end": 846
                  },
                  "start": 837,
                  "end": 846
                },
                "start": 825,
                "end": 846
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 848,
                "end": 852
              },
              "start": 824,
              "end": 852
            },
            "definite": false,
            "start": 819,
            "end": 852
          }
        ],
        "declare": false,
        "start": 815,
        "end": 852
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 857,
        "end": 860
      },
      "start": 810,
      "end": 860
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
                    "start": 881,
                    "end": 883
                  },
                  "typeArguments": null,
                  "start": 874,
                  "end": 883
                },
                "start": 872,
                "end": 883
              },
              "start": 870,
              "end": 883
            },
            "init": null,
            "definite": false,
            "start": 870,
            "end": 883
          }
        ],
        "declare": false,
        "start": 866,
        "end": 883
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 888,
        "end": 891
      },
      "start": 861,
      "end": 891
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
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 905,
                    "end": 911
                  },
                  "start": 905,
                  "end": 913
                },
                "start": 903,
                "end": 913
              },
              "start": 902,
              "end": 913
            },
            "init": null,
            "definite": false,
            "start": 902,
            "end": 913
          }
        ],
        "declare": false,
        "start": 898,
        "end": 913
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 918,
        "end": 921
      },
      "start": 893,
      "end": 921
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 931,
              "end": 932
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 936,
                  "end": 939
                },
                {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 941,
                  "end": 944
                }
              ],
              "start": 935,
              "end": 945
            },
            "definite": false,
            "start": 931,
            "end": 945
          }
        ],
        "declare": false,
        "start": 927,
        "end": 945
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 950,
        "end": 953
      },
      "start": 922,
      "end": 953
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 964
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 968,
                  "end": 974
                },
                "start": 968,
                "end": 976
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 977,
                "end": 979
              },
              "start": 967,
              "end": 979
            },
            "definite": false,
            "start": 963,
            "end": 979
          }
        ],
        "declare": false,
        "start": 959,
        "end": 979
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 984,
        "end": 987
      },
      "start": 954,
      "end": 987
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
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  },
                  "start": 1000,
                  "end": 1008
                },
                "start": 998,
                "end": 1008
              },
              "start": 997,
              "end": 1008
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1011,
              "end": 1013
            },
            "definite": false,
            "start": 997,
            "end": 1013
          }
        ],
        "declare": false,
        "start": 993,
        "end": 1013
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1018,
        "end": 1021
      },
      "start": 988,
      "end": 1021
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1032
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1039,
                "end": 1044
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1045,
                    "end": 1051
                  }
                ],
                "start": 1044,
                "end": 1052
              },
              "arguments": [],
              "start": 1035,
              "end": 1054
            },
            "definite": false,
            "start": 1031,
            "end": 1054
          }
        ],
        "declare": false,
        "start": 1027,
        "end": 1054
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1059,
        "end": 1062
      },
      "start": 1022,
      "end": 1062
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
                    "start": 1082,
                    "end": 1083
                  },
                  "typeArguments": null,
                  "start": 1075,
                  "end": 1083
                },
                "start": 1073,
                "end": 1083
              },
              "start": 1072,
              "end": 1083
            },
            "init": null,
            "definite": false,
            "start": 1072,
            "end": 1083
          }
        ],
        "declare": false,
        "start": 1068,
        "end": 1083
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1088,
        "end": 1091
      },
      "start": 1063,
      "end": 1091
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 1091
}
```
