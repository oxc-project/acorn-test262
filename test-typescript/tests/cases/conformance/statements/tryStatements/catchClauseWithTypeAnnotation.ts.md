__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1703,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "any1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 12,
        "end": 15
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 30,
        "name": "unknown1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 33,
        "end": 40
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 1702,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "name": "fn",
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
          "start": 55,
          "end": 65,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 65,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 58,
              "end": 65
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 1702,
        "body": [
          {
            "type": "TryStatement",
            "start": 139,
            "end": 160,
            "block": {
              "type": "BlockStatement",
              "start": 143,
              "end": 146,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 147,
              "end": 160,
              "param": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 160,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 181,
            "end": 207,
            "block": {
              "type": "BlockStatement",
              "start": 185,
              "end": 188,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 189,
              "end": 207,
              "param": {
                "type": "Identifier",
                "start": 196,
                "end": 202,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 197,
                  "end": 202,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 199,
                    "end": 202
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 204,
                "end": 207,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 228,
            "end": 255,
            "block": {
              "type": "BlockStatement",
              "start": 232,
              "end": 235,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 236,
              "end": 255,
              "param": {
                "type": "Identifier",
                "start": 243,
                "end": 250,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 244,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 246,
                    "end": 250,
                    "typeName": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 250,
                      "name": "any1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 252,
                "end": 255,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 276,
            "end": 306,
            "block": {
              "type": "BlockStatement",
              "start": 280,
              "end": 283,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 284,
              "end": 306,
              "param": {
                "type": "Identifier",
                "start": 291,
                "end": 301,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 292,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 294,
                    "end": 301
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 303,
                "end": 306,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 327,
            "end": 358,
            "block": {
              "type": "BlockStatement",
              "start": 331,
              "end": 334,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 335,
              "end": 358,
              "param": {
                "type": "Identifier",
                "start": 342,
                "end": 353,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 343,
                  "end": 353,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 345,
                    "end": 353,
                    "typeName": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 353,
                      "name": "unknown1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 355,
                "end": 358,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 379,
            "end": 407,
            "block": {
              "type": "BlockStatement",
              "start": 383,
              "end": 386,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 387,
              "end": 407,
              "param": {
                "type": "Identifier",
                "start": 394,
                "end": 395,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 397,
                "end": 407,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 399,
                    "end": 405,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 399,
                      "end": 404,
                      "object": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 400,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 404,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 428,
            "end": 461,
            "block": {
              "type": "BlockStatement",
              "start": 432,
              "end": 435,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 436,
              "end": 461,
              "param": {
                "type": "Identifier",
                "start": 443,
                "end": 449,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 444,
                  "end": 449,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 446,
                    "end": 449
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 451,
                "end": 461,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 453,
                    "end": 459,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 453,
                      "end": 458,
                      "object": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 454,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 458,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 482,
            "end": 516,
            "block": {
              "type": "BlockStatement",
              "start": 486,
              "end": 489,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 490,
              "end": 516,
              "param": {
                "type": "Identifier",
                "start": 497,
                "end": 504,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 498,
                  "end": 504,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 500,
                    "end": 504,
                    "typeName": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 504,
                      "name": "any1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 506,
                "end": 516,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 508,
                    "end": 514,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 508,
                      "end": 513,
                      "object": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 509,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 510,
                        "end": 513,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 537,
            "end": 583,
            "block": {
              "type": "BlockStatement",
              "start": 541,
              "end": 544,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 545,
              "end": 583,
              "param": {
                "type": "Identifier",
                "start": 552,
                "end": 562,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 553,
                  "end": 562,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 555,
                    "end": 562
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 564,
                "end": 583,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 566,
                    "end": 581,
                    "expression": {
                      "type": "CallExpression",
                      "start": 566,
                      "end": 580,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 566,
                        "end": 577,
                        "object": {
                          "type": "Identifier",
                          "start": 566,
                          "end": 573,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 574,
                          "end": 577,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 578,
                          "end": 579,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 604,
            "end": 651,
            "block": {
              "type": "BlockStatement",
              "start": 608,
              "end": 611,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 612,
              "end": 651,
              "param": {
                "type": "Identifier",
                "start": 619,
                "end": 630,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 620,
                  "end": 630,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 622,
                    "end": 630,
                    "typeName": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 630,
                      "name": "unknown1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 632,
                "end": 651,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 634,
                    "end": 649,
                    "expression": {
                      "type": "CallExpression",
                      "start": 634,
                      "end": 648,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 634,
                        "end": 645,
                        "object": {
                          "type": "Identifier",
                          "start": 634,
                          "end": 641,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 642,
                          "end": 645,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 646,
                          "end": 647,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 672,
            "end": 709,
            "block": {
              "type": "BlockStatement",
              "start": 676,
              "end": 679,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 680,
              "end": 709,
              "param": {
                "type": "Identifier",
                "start": 687,
                "end": 697,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 688,
                  "end": 697,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 690,
                    "end": 697
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 699,
                "end": 709,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 701,
                    "end": 707,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 701,
                      "end": 706,
                      "object": {
                        "type": "Identifier",
                        "start": 701,
                        "end": 702,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 703,
                        "end": 706,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 735,
            "end": 773,
            "block": {
              "type": "BlockStatement",
              "start": 739,
              "end": 742,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 743,
              "end": 773,
              "param": {
                "type": "Identifier",
                "start": 750,
                "end": 761,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 751,
                  "end": 761,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 753,
                    "end": 761,
                    "typeName": {
                      "type": "Identifier",
                      "start": 753,
                      "end": 761,
                      "name": "unknown1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 763,
                "end": 773,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 765,
                    "end": 771,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 765,
                      "end": 770,
                      "object": {
                        "type": "Identifier",
                        "start": 765,
                        "end": 766,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 767,
                        "end": 770,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 799,
            "end": 827,
            "block": {
              "type": "BlockStatement",
              "start": 803,
              "end": 806,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 807,
              "end": 827,
              "param": {
                "type": "Identifier",
                "start": 814,
                "end": 822,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 815,
                  "end": 822,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 817,
                    "end": 822,
                    "typeName": {
                      "type": "Identifier",
                      "start": 817,
                      "end": 822,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 824,
                "end": 827,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 853,
            "end": 882,
            "block": {
              "type": "BlockStatement",
              "start": 857,
              "end": 860,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 861,
              "end": 882,
              "param": {
                "type": "Identifier",
                "start": 868,
                "end": 877,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 869,
                  "end": 877,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 871,
                    "end": 877
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 879,
                "end": 882,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 909,
            "end": 1047,
            "block": {
              "type": "BlockStatement",
              "start": 913,
              "end": 931,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 915,
                  "end": 929,
                  "expression": {
                    "type": "CallExpression",
                    "start": 915,
                    "end": 928,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 915,
                      "end": 926,
                      "object": {
                        "type": "Identifier",
                        "start": 915,
                        "end": 922,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 923,
                        "end": 926,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 954,
              "end": 1047,
              "param": {
                "type": "Identifier",
                "start": 961,
                "end": 970,
                "name": "e",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 962,
                  "end": 970,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 964,
                    "end": 970
                  }
                },
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 972,
                "end": 1047,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1012,
                    "end": 1041,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1012,
                      "end": 1040,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1012,
                        "end": 1023,
                        "object": {
                          "type": "Identifier",
                          "start": 1012,
                          "end": 1019,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1020,
                          "end": 1023,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 1024,
                          "end": 1039,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1024,
                            "end": 1037,
                            "object": {
                              "type": "Identifier",
                              "start": 1024,
                              "end": 1025,
                              "name": "e",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1026,
                              "end": 1037,
                              "name": "toLowerCase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1134,
            "end": 1170,
            "block": {
              "type": "BlockStatement",
              "start": 1138,
              "end": 1141,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1142,
              "end": 1170,
              "param": {
                "type": "Identifier",
                "start": 1149,
                "end": 1150,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 1152,
                "end": 1170,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1154,
                    "end": 1168,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1158,
                        "end": 1167,
                        "id": {
                          "type": "Identifier",
                          "start": 1158,
                          "end": 1167,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1159,
                            "end": 1167,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1161,
                              "end": 1167
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
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1175,
            "end": 1211,
            "block": {
              "type": "BlockStatement",
              "start": 1179,
              "end": 1182,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1183,
              "end": 1211,
              "param": {
                "type": "Identifier",
                "start": 1190,
                "end": 1191,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 1193,
                "end": 1211,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1195,
                    "end": 1209,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1199,
                        "end": 1208,
                        "id": {
                          "type": "Identifier",
                          "start": 1199,
                          "end": 1208,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1200,
                            "end": 1208,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1202,
                              "end": 1208
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1216,
            "end": 1253,
            "block": {
              "type": "BlockStatement",
              "start": 1220,
              "end": 1223,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1224,
              "end": 1253,
              "param": {
                "type": "Identifier",
                "start": 1231,
                "end": 1232,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 1234,
                "end": 1253,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1236,
                    "end": 1251,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1240,
                        "end": 1250,
                        "id": {
                          "type": "Identifier",
                          "start": 1240,
                          "end": 1250,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1241,
                            "end": 1250,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 1243,
                              "end": 1250
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1259,
            "end": 1284,
            "block": {
              "type": "BlockStatement",
              "start": 1263,
              "end": 1266,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1267,
              "end": 1284,
              "param": {
                "type": "ObjectPattern",
                "start": 1274,
                "end": 1279,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1276,
                    "end": 1277,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1276,
                      "end": 1277,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1276,
                      "end": 1277,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 1281,
                "end": 1284,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1305,
            "end": 1342,
            "block": {
              "type": "BlockStatement",
              "start": 1309,
              "end": 1312,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1313,
              "end": 1342,
              "param": {
                "type": "ObjectPattern",
                "start": 1320,
                "end": 1330,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1322,
                    "end": 1323,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1322,
                      "end": 1323,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1322,
                      "end": 1323,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1325,
                  "end": 1330,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1327,
                    "end": 1330
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1332,
                "end": 1342,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1334,
                    "end": 1340,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1334,
                      "end": 1339,
                      "object": {
                        "type": "Identifier",
                        "start": 1334,
                        "end": 1335,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1336,
                        "end": 1339,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1363,
            "end": 1400,
            "block": {
              "type": "BlockStatement",
              "start": 1367,
              "end": 1370,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1371,
              "end": 1400,
              "param": {
                "type": "ObjectPattern",
                "start": 1378,
                "end": 1389,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1380,
                    "end": 1381,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1380,
                      "end": 1381,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1380,
                      "end": 1381,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1383,
                  "end": 1389,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1385,
                    "end": 1389,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1385,
                      "end": 1389,
                      "name": "any1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1391,
                "end": 1400,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1393,
                    "end": 1399,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1393,
                      "end": 1398,
                      "object": {
                        "type": "Identifier",
                        "start": 1393,
                        "end": 1394,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1395,
                        "end": 1398,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1421,
            "end": 1471,
            "block": {
              "type": "BlockStatement",
              "start": 1425,
              "end": 1428,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1429,
              "end": 1471,
              "param": {
                "type": "ObjectPattern",
                "start": 1436,
                "end": 1450,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1438,
                    "end": 1439,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1438,
                      "end": 1439,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1438,
                      "end": 1439,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1441,
                  "end": 1450,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1443,
                    "end": 1450
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1452,
                "end": 1471,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1454,
                    "end": 1469,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1454,
                      "end": 1468,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1454,
                        "end": 1465,
                        "object": {
                          "type": "Identifier",
                          "start": 1454,
                          "end": 1461,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1462,
                          "end": 1465,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1466,
                          "end": 1467,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1504,
            "end": 1555,
            "block": {
              "type": "BlockStatement",
              "start": 1508,
              "end": 1511,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1512,
              "end": 1555,
              "param": {
                "type": "ObjectPattern",
                "start": 1519,
                "end": 1534,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1521,
                    "end": 1522,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1521,
                      "end": 1522,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1521,
                      "end": 1522,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1524,
                  "end": 1534,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1526,
                    "end": 1534,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1526,
                      "end": 1534,
                      "name": "unknown1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1536,
                "end": 1555,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1538,
                    "end": 1553,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1538,
                      "end": 1552,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1538,
                        "end": 1549,
                        "object": {
                          "type": "Identifier",
                          "start": 1538,
                          "end": 1545,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1549,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1550,
                          "end": 1551,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1588,
            "end": 1621,
            "block": {
              "type": "BlockStatement",
              "start": 1592,
              "end": 1595,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1596,
              "end": 1621,
              "param": {
                "type": "ObjectPattern",
                "start": 1603,
                "end": 1616,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1605,
                    "end": 1606,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1605,
                      "end": 1606,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1605,
                      "end": 1606,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1608,
                  "end": 1616,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 1610,
                    "end": 1616
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1618,
                "end": 1621,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 1647,
            "end": 1679,
            "block": {
              "type": "BlockStatement",
              "start": 1651,
              "end": 1654,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1655,
              "end": 1679,
              "param": {
                "type": "ObjectPattern",
                "start": 1662,
                "end": 1674,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1664,
                    "end": 1665,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1664,
                      "end": 1665,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1664,
                      "end": 1665,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1667,
                  "end": 1674,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1669,
                    "end": 1674,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1669,
                      "end": 1674,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1676,
                "end": 1679,
                "body": []
              }
            },
            "finalizer": null
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
