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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 138
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 142,
                            "end": 148
                          },
                          "start": 140,
                          "end": 148
                        },
                        "start": 139,
                        "end": 148
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      },
                      "start": 149,
                      "end": 157
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 133,
                    "end": 158
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 196
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 202,
                                "end": 208
                              },
                              "start": 200,
                              "end": 208
                            },
                            "start": 199,
                            "end": 208
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 213,
                            "end": 219
                          },
                          "start": 210,
                          "end": 219
                        },
                        "start": 198,
                        "end": 219
                      },
                      "start": 196,
                      "end": 219
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 191,
                    "end": 220
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 259
                    },
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 267,
                                    "end": 273
                                  },
                                  "start": 265,
                                  "end": 273
                                },
                                "start": 264,
                                "end": 273
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 276,
                                "end": 282
                              },
                              "start": 274,
                              "end": 282
                            },
                            "start": 263,
                            "end": 282
                          }
                        ],
                        "start": 261,
                        "end": 284
                      },
                      "start": 259,
                      "end": 284
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 254,
                    "end": 285
                  }
                ],
                "start": 127,
                "end": 312
              },
              "start": 125,
              "end": 312
            },
            "start": 124,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 312
        }
      ],
      "declare": false,
      "start": 120,
      "end": 312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 328
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 334
          },
          "optional": false,
          "computed": false,
          "start": 327,
          "end": 334
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 344
          },
          "optional": false,
          "computed": false,
          "start": 337,
          "end": 344
        },
        "start": 327,
        "end": 344
      },
      "directive": null,
      "start": 327,
      "end": 345
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 353
          },
          "optional": false,
          "computed": false,
          "start": 346,
          "end": 353
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 357
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 363
          },
          "optional": false,
          "computed": false,
          "start": 356,
          "end": 363
        },
        "start": 346,
        "end": 363
      },
      "directive": null,
      "start": 346,
      "end": 364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 366
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 367,
            "end": 372
          },
          "optional": false,
          "computed": false,
          "start": 365,
          "end": 372
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 382
          },
          "optional": false,
          "computed": false,
          "start": 375,
          "end": 382
        },
        "start": 365,
        "end": 382
      },
      "directive": null,
      "start": 365,
      "end": 383
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 385
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 391
          },
          "optional": false,
          "computed": false,
          "start": 384,
          "end": 391
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 395
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 401
          },
          "optional": false,
          "computed": false,
          "start": 394,
          "end": 401
        },
        "start": 384,
        "end": 401
      },
      "directive": null,
      "start": 384,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 404
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 410
          },
          "optional": false,
          "computed": false,
          "start": 403,
          "end": 410
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 414
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 420
          },
          "optional": false,
          "computed": false,
          "start": 413,
          "end": 420
        },
        "start": 403,
        "end": 420
      },
      "directive": null,
      "start": 403,
      "end": 421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 423
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 422,
          "end": 429
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 433
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 439
          },
          "optional": false,
          "computed": false,
          "start": 432,
          "end": 439
        },
        "start": 422,
        "end": 439
      },
      "directive": null,
      "start": 422,
      "end": 440
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 460
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 464,
                            "end": 470
                          },
                          "start": 462,
                          "end": 470
                        },
                        "start": 461,
                        "end": 470
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 473,
                        "end": 479
                      },
                      "start": 471,
                      "end": 479
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 455,
                    "end": 480
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 490
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 494,
                            "end": 500
                          },
                          "start": 492,
                          "end": 500
                        },
                        "start": 491,
                        "end": 500
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 503,
                        "end": 509
                      },
                      "start": 501,
                      "end": 509
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 485,
                    "end": 510
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 520
                    },
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 536,
                                    "end": 542
                                  },
                                  "start": 534,
                                  "end": 542
                                },
                                "start": 533,
                                "end": 542
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 545,
                                "end": 551
                              },
                              "start": 543,
                              "end": 551
                            },
                            "start": 532,
                            "end": 552
                          },
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
                                    "start": 565,
                                    "end": 571
                                  },
                                  "start": 563,
                                  "end": 571
                                },
                                "start": 562,
                                "end": 571
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 574,
                                "end": 580
                              },
                              "start": 572,
                              "end": 580
                            },
                            "start": 561,
                            "end": 581
                          }
                        ],
                        "start": 522,
                        "end": 587
                      },
                      "start": 520,
                      "end": 587
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 515,
                    "end": 588
                  }
                ],
                "start": 449,
                "end": 590
              },
              "start": 447,
              "end": 590
            },
            "start": 446,
            "end": 590
          },
          "init": null,
          "definite": false,
          "start": 446,
          "end": 590
        }
      ],
      "declare": false,
      "start": 442,
      "end": 591
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 607
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 613
          },
          "optional": false,
          "computed": false,
          "start": 606,
          "end": 613
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 617
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func5",
            "optional": false,
            "typeAnnotation": null,
            "start": 618,
            "end": 623
          },
          "optional": false,
          "computed": false,
          "start": 616,
          "end": 623
        },
        "start": 606,
        "end": 623
      },
      "directive": null,
      "start": 606,
      "end": 624
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 626
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func5",
            "optional": false,
            "typeAnnotation": null,
            "start": 627,
            "end": 632
          },
          "optional": false,
          "computed": false,
          "start": 625,
          "end": 632
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 636
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 637,
            "end": 642
          },
          "optional": false,
          "computed": false,
          "start": 635,
          "end": 642
        },
        "start": 625,
        "end": 642
      },
      "directive": null,
      "start": 625,
      "end": 643
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 684
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 685,
                            "end": 686
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 685,
                          "end": 686
                        }
                      ],
                      "start": 684,
                      "end": 687
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 691,
                              "end": 692
                            },
                            "typeArguments": null,
                            "start": 691,
                            "end": 692
                          },
                          "start": 689,
                          "end": 692
                        },
                        "start": 688,
                        "end": 692
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 695,
                        "end": 701
                      },
                      "start": 693,
                      "end": 701
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 679,
                    "end": 702
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 740
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 743,
                                "end": 744
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 743,
                              "end": 744
                            }
                          ],
                          "start": 742,
                          "end": 745
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 749,
                                  "end": 750
                                },
                                "typeArguments": null,
                                "start": 749,
                                "end": 750
                              },
                              "start": 747,
                              "end": 750
                            },
                            "start": 746,
                            "end": 750
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 755,
                            "end": 761
                          },
                          "start": 752,
                          "end": 761
                        },
                        "start": 742,
                        "end": 761
                      },
                      "start": 740,
                      "end": 761
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 735,
                    "end": 762
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 796,
                      "end": 801
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 806,
                                    "end": 807
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 806,
                                  "end": 807
                                }
                              ],
                              "start": 805,
                              "end": 808
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 812,
                                      "end": 813
                                    },
                                    "typeArguments": null,
                                    "start": 812,
                                    "end": 813
                                  },
                                  "start": 810,
                                  "end": 813
                                },
                                "start": 809,
                                "end": 813
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 816,
                                "end": 822
                              },
                              "start": 814,
                              "end": 822
                            },
                            "start": 805,
                            "end": 822
                          }
                        ],
                        "start": 803,
                        "end": 824
                      },
                      "start": 801,
                      "end": 824
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 796,
                    "end": 825
                  }
                ],
                "start": 673,
                "end": 852
              },
              "start": 671,
              "end": 852
            },
            "start": 669,
            "end": 852
          },
          "init": null,
          "definite": false,
          "start": 669,
          "end": 852
        }
      ],
      "declare": false,
      "start": 665,
      "end": 852
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 869
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 870,
            "end": 875
          },
          "optional": false,
          "computed": false,
          "start": 867,
          "end": 875
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 878,
            "end": 880
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 886
          },
          "optional": false,
          "computed": false,
          "start": 878,
          "end": 886
        },
        "start": 867,
        "end": 886
      },
      "directive": null,
      "start": 867,
      "end": 887
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 888,
            "end": 890
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 891,
            "end": 896
          },
          "optional": false,
          "computed": false,
          "start": 888,
          "end": 896
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 901
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 907
          },
          "optional": false,
          "computed": false,
          "start": 899,
          "end": 907
        },
        "start": 888,
        "end": 907
      },
      "directive": null,
      "start": 888,
      "end": 908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 909,
            "end": 911
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 917
          },
          "optional": false,
          "computed": false,
          "start": 909,
          "end": 917
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 920,
            "end": 922
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 928
          },
          "optional": false,
          "computed": false,
          "start": 920,
          "end": 928
        },
        "start": 909,
        "end": 928
      },
      "directive": null,
      "start": 909,
      "end": 929
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 932
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 933,
            "end": 938
          },
          "optional": false,
          "computed": false,
          "start": 930,
          "end": 938
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 943
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 944,
            "end": 949
          },
          "optional": false,
          "computed": false,
          "start": 941,
          "end": 949
        },
        "start": 930,
        "end": 949
      },
      "directive": null,
      "start": 930,
      "end": 950
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 953
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 954,
            "end": 959
          },
          "optional": false,
          "computed": false,
          "start": 951,
          "end": 959
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 964
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 970
          },
          "optional": false,
          "computed": false,
          "start": 962,
          "end": 970
        },
        "start": 951,
        "end": 970
      },
      "directive": null,
      "start": 951,
      "end": 971
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 972,
            "end": 974
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 975,
            "end": 980
          },
          "optional": false,
          "computed": false,
          "start": 972,
          "end": 980
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 985
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 986,
            "end": 991
          },
          "optional": false,
          "computed": false,
          "start": 983,
          "end": 991
        },
        "start": 972,
        "end": 991
      },
      "directive": null,
      "start": 972,
      "end": 992
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1013
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1014,
                            "end": 1015
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1014,
                          "end": 1015
                        }
                      ],
                      "start": 1013,
                      "end": 1016
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1020,
                              "end": 1021
                            },
                            "typeArguments": null,
                            "start": 1020,
                            "end": 1021
                          },
                          "start": 1018,
                          "end": 1021
                        },
                        "start": 1017,
                        "end": 1021
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1024,
                        "end": 1030
                      },
                      "start": 1022,
                      "end": 1030
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1008,
                    "end": 1031
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1036,
                      "end": 1041
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1042,
                            "end": 1043
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1042,
                          "end": 1043
                        }
                      ],
                      "start": 1041,
                      "end": 1044
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1048,
                              "end": 1049
                            },
                            "typeArguments": null,
                            "start": 1048,
                            "end": 1049
                          },
                          "start": 1046,
                          "end": 1049
                        },
                        "start": 1045,
                        "end": 1049
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1052,
                        "end": 1058
                      },
                      "start": 1050,
                      "end": 1058
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1036,
                    "end": 1059
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1064,
                      "end": 1069
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1082,
                                    "end": 1083
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1082,
                                  "end": 1083
                                }
                              ],
                              "start": 1081,
                              "end": 1084
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1088,
                                      "end": 1089
                                    },
                                    "typeArguments": null,
                                    "start": 1088,
                                    "end": 1089
                                  },
                                  "start": 1086,
                                  "end": 1089
                                },
                                "start": 1085,
                                "end": 1089
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1092,
                                "end": 1098
                              },
                              "start": 1090,
                              "end": 1098
                            },
                            "start": 1081,
                            "end": 1099
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1109,
                                    "end": 1110
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1109,
                                  "end": 1110
                                }
                              ],
                              "start": 1108,
                              "end": 1111
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1115,
                                      "end": 1116
                                    },
                                    "typeArguments": null,
                                    "start": 1115,
                                    "end": 1116
                                  },
                                  "start": 1113,
                                  "end": 1116
                                },
                                "start": 1112,
                                "end": 1116
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1119,
                                "end": 1125
                              },
                              "start": 1117,
                              "end": 1125
                            },
                            "start": 1108,
                            "end": 1126
                          }
                        ],
                        "start": 1071,
                        "end": 1132
                      },
                      "start": 1069,
                      "end": 1132
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1064,
                    "end": 1133
                  }
                ],
                "start": 1002,
                "end": 1135
              },
              "start": 1000,
              "end": 1135
            },
            "start": 998,
            "end": 1135
          },
          "init": null,
          "definite": false,
          "start": 998,
          "end": 1135
        }
      ],
      "declare": false,
      "start": 994,
      "end": 1136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1159
          },
          "optional": false,
          "computed": false,
          "start": 1151,
          "end": 1159
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1162,
            "end": 1164
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1170
          },
          "optional": false,
          "computed": false,
          "start": 1162,
          "end": 1170
        },
        "start": 1151,
        "end": 1170
      },
      "directive": null,
      "start": 1151,
      "end": 1171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1172,
            "end": 1174
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1175,
            "end": 1180
          },
          "optional": false,
          "computed": false,
          "start": 1172,
          "end": 1180
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1185
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1191
          },
          "optional": false,
          "computed": false,
          "start": 1183,
          "end": 1191
        },
        "start": 1172,
        "end": 1191
      },
      "directive": null,
      "start": 1172,
      "end": 1192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 120,
  "end": 1192
}
```
