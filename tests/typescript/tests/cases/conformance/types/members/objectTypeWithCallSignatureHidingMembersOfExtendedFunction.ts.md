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
        "name": "Function",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 118
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              },
              "start": 129,
              "end": 137
            },
            "accessibility": null,
            "static": false,
            "start": 125,
            "end": 138
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  },
                  "start": 145,
                  "end": 153
                },
                "start": 144,
                "end": 153
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 162
                },
                "typeArguments": null,
                "start": 156,
                "end": 162
              },
              "start": 154,
              "end": 162
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 143,
            "end": 163
          }
        ],
        "start": 119,
        "end": 165
      },
      "declare": false,
      "start": 100,
      "end": 165
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 178
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 189,
                "end": 193
              },
              "start": 187,
              "end": 193
            },
            "start": 185,
            "end": 194
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 204
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 208,
                    "end": 211
                  },
                  "start": 206,
                  "end": 211
                },
                "start": 205,
                "end": 211
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 217,
                    "end": 220
                  },
                  "start": 215,
                  "end": 220
                },
                "start": 213,
                "end": 220
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 223,
                "end": 227
              },
              "start": 221,
              "end": 227
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 199,
            "end": 228
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 237
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thisArg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 247,
                    "end": 253
                  },
                  "start": 245,
                  "end": 253
                },
                "start": 238,
                "end": 253
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "argArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 266
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 268,
                      "end": 274
                    },
                    "start": 268,
                    "end": 276
                  },
                  "start": 266,
                  "end": 276
                },
                "value": null,
                "start": 255,
                "end": 276
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              },
              "start": 277,
              "end": 282
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 233,
            "end": 283
          }
        ],
        "start": 179,
        "end": 285
      },
      "declare": false,
      "start": 167,
      "end": 285
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 295
                },
                "typeArguments": null,
                "start": 294,
                "end": 295
              },
              "start": 292,
              "end": 295
            },
            "start": 291,
            "end": 295
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 295
        }
      ],
      "declare": false,
      "start": 287,
      "end": 296
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
            "name": "r1",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 309,
                        "end": 312
                      },
                      "start": 307,
                      "end": 312
                    },
                    "start": 306,
                    "end": 312
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 318,
                        "end": 321
                      },
                      "start": 316,
                      "end": 321
                    },
                    "start": 314,
                    "end": 321
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 326,
                    "end": 330
                  },
                  "start": 323,
                  "end": 330
                },
                "start": 305,
                "end": 330
              },
              "start": 303,
              "end": 330
            },
            "start": 301,
            "end": 330
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 334
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 340
            },
            "optional": false,
            "computed": false,
            "start": 333,
            "end": 340
          },
          "definite": false,
          "start": 301,
          "end": 340
        }
      ],
      "declare": false,
      "start": 297,
      "end": 341
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
            "name": "r1b",
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
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 361,
                        "end": 367
                      },
                      "start": 359,
                      "end": 367
                    },
                    "start": 352,
                    "end": 367
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 372,
                      "end": 380
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 382,
                          "end": 388
                        },
                        "start": 382,
                        "end": 390
                      },
                      "start": 380,
                      "end": 390
                    },
                    "value": null,
                    "start": 369,
                    "end": 390
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 395,
                    "end": 399
                  },
                  "start": 392,
                  "end": 399
                },
                "start": 351,
                "end": 399
              },
              "start": 349,
              "end": 399
            },
            "start": 346,
            "end": 399
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 408
            },
            "optional": false,
            "computed": false,
            "start": 402,
            "end": 408
          },
          "definite": false,
          "start": 346,
          "end": 408
        }
      ],
      "declare": false,
      "start": 342,
      "end": 409
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
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 417
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 431
            },
            "optional": false,
            "computed": false,
            "start": 420,
            "end": 431
          },
          "definite": false,
          "start": 414,
          "end": 431
        }
      ],
      "declare": false,
      "start": 410,
      "end": 432
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
            "name": "r1d",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 440
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 449
            },
            "optional": false,
            "computed": false,
            "start": 443,
            "end": 449
          },
          "definite": false,
          "start": 437,
          "end": 449
        }
      ],
      "declare": false,
      "start": 433,
      "end": 450
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
            "name": "r1e",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 458
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 462
            },
            "property": {
              "type": "Literal",
              "value": "hm",
              "raw": "'hm'",
              "start": 463,
              "end": 467
            },
            "optional": false,
            "computed": true,
            "start": 461,
            "end": 468
          },
          "definite": false,
          "start": 455,
          "end": 468
        }
      ],
      "declare": false,
      "start": 451,
      "end": 469
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 508,
                        "end": 512
                      },
                      "start": 506,
                      "end": 512
                    },
                    "start": 504,
                    "end": 513
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "apply",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 523
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 527,
                            "end": 530
                          },
                          "start": 525,
                          "end": 530
                        },
                        "start": 524,
                        "end": 530
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 536,
                            "end": 539
                          },
                          "start": 534,
                          "end": 539
                        },
                        "start": 532,
                        "end": 539
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 542,
                        "end": 546
                      },
                      "start": 540,
                      "end": 546
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 518,
                    "end": 547
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "call",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 556
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thisArg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 566,
                            "end": 572
                          },
                          "start": 564,
                          "end": 572
                        },
                        "start": 557,
                        "end": 572
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 577,
                          "end": 585
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 587,
                              "end": 593
                            },
                            "start": 587,
                            "end": 595
                          },
                          "start": 585,
                          "end": 595
                        },
                        "value": null,
                        "start": 574,
                        "end": 595
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 598,
                        "end": 601
                      },
                      "start": 596,
                      "end": 601
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 552,
                    "end": 602
                  }
                ],
                "start": 498,
                "end": 604
              },
              "start": 496,
              "end": 604
            },
            "start": 495,
            "end": 604
          },
          "init": null,
          "definite": false,
          "start": 495,
          "end": 604
        }
      ],
      "declare": false,
      "start": 491,
      "end": 604
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
            "name": "r2",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 618,
                        "end": 621
                      },
                      "start": 616,
                      "end": 621
                    },
                    "start": 615,
                    "end": 621
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 627,
                        "end": 630
                      },
                      "start": 625,
                      "end": 630
                    },
                    "start": 623,
                    "end": 630
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 635,
                    "end": 639
                  },
                  "start": 632,
                  "end": 639
                },
                "start": 614,
                "end": 639
              },
              "start": 612,
              "end": 639
            },
            "start": 610,
            "end": 639
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 643
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 644,
              "end": 649
            },
            "optional": false,
            "computed": false,
            "start": 642,
            "end": 649
          },
          "definite": false,
          "start": 610,
          "end": 649
        }
      ],
      "declare": false,
      "start": 606,
      "end": 650
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
            "name": "r2b",
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
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 670,
                        "end": 676
                      },
                      "start": 668,
                      "end": 676
                    },
                    "start": 661,
                    "end": 676
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 689
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 691,
                          "end": 697
                        },
                        "start": 691,
                        "end": 699
                      },
                      "start": 689,
                      "end": 699
                    },
                    "value": null,
                    "start": 678,
                    "end": 699
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 704,
                    "end": 708
                  },
                  "start": 701,
                  "end": 708
                },
                "start": 660,
                "end": 708
              },
              "start": 658,
              "end": 708
            },
            "start": 655,
            "end": 708
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 712
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 717
            },
            "optional": false,
            "computed": false,
            "start": 711,
            "end": 717
          },
          "definite": false,
          "start": 655,
          "end": 717
        }
      ],
      "declare": false,
      "start": 651,
      "end": 718
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
            "name": "r2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 723,
            "end": 726
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 730
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 740
            },
            "optional": false,
            "computed": false,
            "start": 729,
            "end": 740
          },
          "definite": false,
          "start": 723,
          "end": 740
        }
      ],
      "declare": false,
      "start": 719,
      "end": 741
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
            "name": "r2d",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 749
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 753
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 758
            },
            "optional": false,
            "computed": false,
            "start": 752,
            "end": 758
          },
          "definite": false,
          "start": 746,
          "end": 758
        }
      ],
      "declare": false,
      "start": 742,
      "end": 759
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
            "name": "r2e",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 767
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 771
            },
            "property": {
              "type": "Literal",
              "value": "hm",
              "raw": "'hm'",
              "start": 772,
              "end": 776
            },
            "optional": false,
            "computed": true,
            "start": 770,
            "end": 777
          },
          "definite": false,
          "start": 764,
          "end": 777
        }
      ],
      "declare": false,
      "start": 760,
      "end": 778
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 100,
  "end": 798
}
```
