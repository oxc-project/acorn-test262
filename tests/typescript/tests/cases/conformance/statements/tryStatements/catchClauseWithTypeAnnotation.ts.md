__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "any1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 12,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unknown1",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 30
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 33,
        "end": 40
      },
      "declare": false,
      "start": 17,
      "end": 41
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSBooleanKeyword",
              "start": 58,
              "end": 65
            },
            "start": 56,
            "end": 65
          },
          "start": 55,
          "end": 65
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 143,
              "end": 146
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 157,
                "end": 160
              },
              "start": 147,
              "end": 160
            },
            "finalizer": null,
            "start": 139,
            "end": 160
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 185,
              "end": 188
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 199,
                    "end": 202
                  },
                  "start": 197,
                  "end": 202
                },
                "start": 196,
                "end": 202
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 204,
                "end": 207
              },
              "start": 189,
              "end": 207
            },
            "finalizer": null,
            "start": 181,
            "end": 207
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 232,
              "end": 235
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "any1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 250
                    },
                    "typeArguments": null,
                    "start": 246,
                    "end": 250
                  },
                  "start": 244,
                  "end": 250
                },
                "start": 243,
                "end": 250
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 252,
                "end": 255
              },
              "start": 236,
              "end": 255
            },
            "finalizer": null,
            "start": 228,
            "end": 255
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 280,
              "end": 283
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 294,
                    "end": 301
                  },
                  "start": 292,
                  "end": 301
                },
                "start": 291,
                "end": 301
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 303,
                "end": 306
              },
              "start": 284,
              "end": 306
            },
            "finalizer": null,
            "start": 276,
            "end": 306
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 331,
              "end": 334
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "unknown1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 353
                    },
                    "typeArguments": null,
                    "start": 345,
                    "end": 353
                  },
                  "start": 343,
                  "end": 353
                },
                "start": 342,
                "end": 353
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 355,
                "end": 358
              },
              "start": 335,
              "end": 358
            },
            "finalizer": null,
            "start": 327,
            "end": 358
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 383,
              "end": 386
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 395
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 400
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 404
                      },
                      "optional": false,
                      "computed": false,
                      "start": 399,
                      "end": 404
                    },
                    "directive": null,
                    "start": 399,
                    "end": 405
                  }
                ],
                "start": 397,
                "end": 407
              },
              "start": 387,
              "end": 407
            },
            "finalizer": null,
            "start": 379,
            "end": 407
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 432,
              "end": 435
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 446,
                    "end": 449
                  },
                  "start": 444,
                  "end": 449
                },
                "start": 443,
                "end": 449
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 454
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 458
                      },
                      "optional": false,
                      "computed": false,
                      "start": 453,
                      "end": 458
                    },
                    "directive": null,
                    "start": 453,
                    "end": 459
                  }
                ],
                "start": 451,
                "end": 461
              },
              "start": 436,
              "end": 461
            },
            "finalizer": null,
            "start": 428,
            "end": 461
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 486,
              "end": 489
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "any1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 504
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 504
                  },
                  "start": 498,
                  "end": 504
                },
                "start": 497,
                "end": 504
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 509
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 513
                      },
                      "optional": false,
                      "computed": false,
                      "start": 508,
                      "end": 513
                    },
                    "directive": null,
                    "start": 508,
                    "end": 514
                  }
                ],
                "start": 506,
                "end": 516
              },
              "start": 490,
              "end": 516
            },
            "finalizer": null,
            "start": 482,
            "end": 516
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 541,
              "end": 544
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 555,
                    "end": 562
                  },
                  "start": 553,
                  "end": 562
                },
                "start": 552,
                "end": 562
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 566,
                          "end": 573
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 577
                        },
                        "optional": false,
                        "computed": false,
                        "start": 566,
                        "end": 577
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 579
                        }
                      ],
                      "optional": false,
                      "start": 566,
                      "end": 580
                    },
                    "directive": null,
                    "start": 566,
                    "end": 581
                  }
                ],
                "start": 564,
                "end": 583
              },
              "start": 545,
              "end": 583
            },
            "finalizer": null,
            "start": 537,
            "end": 583
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 608,
              "end": 611
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "unknown1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 630
                    },
                    "typeArguments": null,
                    "start": 622,
                    "end": 630
                  },
                  "start": 620,
                  "end": 630
                },
                "start": 619,
                "end": 630
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 634,
                          "end": 641
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 642,
                          "end": 645
                        },
                        "optional": false,
                        "computed": false,
                        "start": 634,
                        "end": 645
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 646,
                          "end": 647
                        }
                      ],
                      "optional": false,
                      "start": 634,
                      "end": 648
                    },
                    "directive": null,
                    "start": 634,
                    "end": 649
                  }
                ],
                "start": 632,
                "end": 651
              },
              "start": 612,
              "end": 651
            },
            "finalizer": null,
            "start": 604,
            "end": 651
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 676,
              "end": 679
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 690,
                    "end": 697
                  },
                  "start": 688,
                  "end": 697
                },
                "start": 687,
                "end": 697
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 701,
                        "end": 702
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 703,
                        "end": 706
                      },
                      "optional": false,
                      "computed": false,
                      "start": 701,
                      "end": 706
                    },
                    "directive": null,
                    "start": 701,
                    "end": 707
                  }
                ],
                "start": 699,
                "end": 709
              },
              "start": 680,
              "end": 709
            },
            "finalizer": null,
            "start": 672,
            "end": 709
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 739,
              "end": 742
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "unknown1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 753,
                      "end": 761
                    },
                    "typeArguments": null,
                    "start": 753,
                    "end": 761
                  },
                  "start": 751,
                  "end": 761
                },
                "start": 750,
                "end": 761
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 765,
                        "end": 766
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 767,
                        "end": 770
                      },
                      "optional": false,
                      "computed": false,
                      "start": 765,
                      "end": 770
                    },
                    "directive": null,
                    "start": 765,
                    "end": 771
                  }
                ],
                "start": 763,
                "end": 773
              },
              "start": 743,
              "end": 773
            },
            "finalizer": null,
            "start": 735,
            "end": 773
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 803,
              "end": 806
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 822
                    },
                    "typeArguments": null,
                    "start": 817,
                    "end": 822
                  },
                  "start": 815,
                  "end": 822
                },
                "start": 814,
                "end": 822
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 824,
                "end": 827
              },
              "start": 807,
              "end": 827
            },
            "finalizer": null,
            "start": 799,
            "end": 827
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 857,
              "end": 860
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 871,
                    "end": 877
                  },
                  "start": 869,
                  "end": 877
                },
                "start": 868,
                "end": 877
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 879,
                "end": 882
              },
              "start": 861,
              "end": 882
            },
            "finalizer": null,
            "start": 853,
            "end": 882
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 915,
                        "end": 922
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 923,
                        "end": 926
                      },
                      "optional": false,
                      "computed": false,
                      "start": 915,
                      "end": 926
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 915,
                    "end": 928
                  },
                  "directive": null,
                  "start": 915,
                  "end": 929
                }
              ],
              "start": 913,
              "end": 931
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 964,
                    "end": 970
                  },
                  "start": 962,
                  "end": 970
                },
                "start": 961,
                "end": 970
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1012,
                          "end": 1019
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1020,
                          "end": 1023
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1012,
                        "end": 1023
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1024,
                              "end": 1025
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1026,
                              "end": 1037
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1024,
                            "end": 1037
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1024,
                          "end": 1039
                        }
                      ],
                      "optional": false,
                      "start": 1012,
                      "end": 1040
                    },
                    "directive": null,
                    "start": 1012,
                    "end": 1041
                  }
                ],
                "start": 972,
                "end": 1047
              },
              "start": 954,
              "end": 1047
            },
            "finalizer": null,
            "start": 909,
            "end": 1047
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1138,
              "end": 1141
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1150
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
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
                              "type": "TSStringKeyword",
                              "start": 1161,
                              "end": 1167
                            },
                            "start": 1159,
                            "end": 1167
                          },
                          "start": 1158,
                          "end": 1167
                        },
                        "init": null,
                        "definite": false,
                        "start": 1158,
                        "end": 1167
                      }
                    ],
                    "declare": false,
                    "start": 1154,
                    "end": 1168
                  }
                ],
                "start": 1152,
                "end": 1170
              },
              "start": 1142,
              "end": 1170
            },
            "finalizer": null,
            "start": 1134,
            "end": 1170
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1179,
              "end": 1182
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1190,
                "end": 1191
              },
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1202,
                              "end": 1208
                            },
                            "start": 1200,
                            "end": 1208
                          },
                          "start": 1199,
                          "end": 1208
                        },
                        "init": null,
                        "definite": false,
                        "start": 1199,
                        "end": 1208
                      }
                    ],
                    "declare": false,
                    "start": 1195,
                    "end": 1209
                  }
                ],
                "start": 1193,
                "end": 1211
              },
              "start": 1183,
              "end": 1211
            },
            "finalizer": null,
            "start": 1175,
            "end": 1211
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1220,
              "end": 1223
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1232
              },
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 1243,
                              "end": 1250
                            },
                            "start": 1241,
                            "end": 1250
                          },
                          "start": 1240,
                          "end": 1250
                        },
                        "init": null,
                        "definite": false,
                        "start": 1240,
                        "end": 1250
                      }
                    ],
                    "declare": false,
                    "start": 1236,
                    "end": 1251
                  }
                ],
                "start": 1234,
                "end": 1253
              },
              "start": 1224,
              "end": 1253
            },
            "finalizer": null,
            "start": 1216,
            "end": 1253
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1263,
              "end": 1266
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1276,
                      "end": 1277
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1276,
                      "end": 1277
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1276,
                    "end": 1277
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1279
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1281,
                "end": 1284
              },
              "start": 1267,
              "end": 1284
            },
            "finalizer": null,
            "start": 1259,
            "end": 1284
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1309,
              "end": 1312
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1322,
                      "end": 1323
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1322,
                      "end": 1323
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1322,
                    "end": 1323
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1327,
                    "end": 1330
                  },
                  "start": 1325,
                  "end": 1330
                },
                "start": 1320,
                "end": 1330
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1334,
                        "end": 1335
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1336,
                        "end": 1339
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1334,
                      "end": 1339
                    },
                    "directive": null,
                    "start": 1334,
                    "end": 1340
                  }
                ],
                "start": 1332,
                "end": 1342
              },
              "start": 1313,
              "end": 1342
            },
            "finalizer": null,
            "start": 1305,
            "end": 1342
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1367,
              "end": 1370
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1380,
                      "end": 1381
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1380,
                      "end": 1381
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1380,
                    "end": 1381
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "any1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1385,
                      "end": 1389
                    },
                    "typeArguments": null,
                    "start": 1385,
                    "end": 1389
                  },
                  "start": 1383,
                  "end": 1389
                },
                "start": 1378,
                "end": 1389
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1393,
                        "end": 1394
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1395,
                        "end": 1398
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1393,
                      "end": 1398
                    },
                    "directive": null,
                    "start": 1393,
                    "end": 1399
                  }
                ],
                "start": 1391,
                "end": 1400
              },
              "start": 1371,
              "end": 1400
            },
            "finalizer": null,
            "start": 1363,
            "end": 1400
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1425,
              "end": 1428
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1438,
                      "end": 1439
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1438,
                      "end": 1439
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1438,
                    "end": 1439
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1443,
                    "end": 1450
                  },
                  "start": 1441,
                  "end": 1450
                },
                "start": 1436,
                "end": 1450
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1454,
                          "end": 1461
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1462,
                          "end": 1465
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1454,
                        "end": 1465
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1466,
                          "end": 1467
                        }
                      ],
                      "optional": false,
                      "start": 1454,
                      "end": 1468
                    },
                    "directive": null,
                    "start": 1454,
                    "end": 1469
                  }
                ],
                "start": 1452,
                "end": 1471
              },
              "start": 1429,
              "end": 1471
            },
            "finalizer": null,
            "start": 1421,
            "end": 1471
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1508,
              "end": 1511
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1521,
                      "end": 1522
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1521,
                      "end": 1522
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1521,
                    "end": 1522
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unknown1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1526,
                      "end": 1534
                    },
                    "typeArguments": null,
                    "start": 1526,
                    "end": 1534
                  },
                  "start": 1524,
                  "end": 1534
                },
                "start": 1519,
                "end": 1534
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1538,
                          "end": 1545
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1546,
                          "end": 1549
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1538,
                        "end": 1549
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1550,
                          "end": 1551
                        }
                      ],
                      "optional": false,
                      "start": 1538,
                      "end": 1552
                    },
                    "directive": null,
                    "start": 1538,
                    "end": 1553
                  }
                ],
                "start": 1536,
                "end": 1555
              },
              "start": 1512,
              "end": 1555
            },
            "finalizer": null,
            "start": 1504,
            "end": 1555
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1592,
              "end": 1595
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1605,
                      "end": 1606
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1605,
                      "end": 1606
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1605,
                    "end": 1606
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 1610,
                    "end": 1616
                  },
                  "start": 1608,
                  "end": 1616
                },
                "start": 1603,
                "end": 1616
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1618,
                "end": 1621
              },
              "start": 1596,
              "end": 1621
            },
            "finalizer": null,
            "start": 1588,
            "end": 1621
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1651,
              "end": 1654
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1664,
                      "end": 1665
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1664,
                      "end": 1665
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1664,
                    "end": 1665
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1669,
                      "end": 1674
                    },
                    "typeArguments": null,
                    "start": 1669,
                    "end": 1674
                  },
                  "start": 1667,
                  "end": 1674
                },
                "start": 1662,
                "end": 1674
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1676,
                "end": 1679
              },
              "start": 1655,
              "end": 1679
            },
            "finalizer": null,
            "start": 1647,
            "end": 1679
          }
        ],
        "start": 67,
        "end": 1702
      },
      "expression": false,
      "start": 43,
      "end": 1702
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1702
}
```
