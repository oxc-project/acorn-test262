__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 100,
  "end": 798,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 100,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 118,
        "name": "Function",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 138,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 129,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 143,
            "end": 163,
            "parameters": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 153,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 162,
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 162,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 167,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 179,
        "end": 285,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 185,
            "end": 194,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 193,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 189,
                "end": 193
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 199,
            "end": 228,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 204,
              "name": "apply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 205,
                "end": 211,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 206,
                  "end": 211,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 208,
                    "end": 211
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 213,
                "end": 220,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 220,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 217,
                    "end": 220
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 227,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 223,
                "end": 227
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 233,
            "end": 283,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 237,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 238,
                "end": 253,
                "name": "thisArg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 245,
                  "end": 253,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 247,
                    "end": 253
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 255,
                "end": 276,
                "argument": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 266,
                  "name": "argArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 266,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 268,
                    "end": 276,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 268,
                      "end": 274
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 282,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 295,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 295,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "name": "I",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 330,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 330,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 305,
                "end": 330,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 306,
                    "end": 312,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 307,
                      "end": 312,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 309,
                        "end": 312
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 314,
                    "end": 321,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 318,
                        "end": 321
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 323,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 326,
                    "end": 330
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 333,
            "end": 340,
            "object": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 335,
              "end": 340,
              "name": "apply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 342,
      "end": 409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 346,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 346,
            "end": 399,
            "name": "r1b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 399,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 351,
                "end": 399,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 352,
                    "end": 367,
                    "name": "thisArg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 359,
                      "end": 367,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 361,
                        "end": 367
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 369,
                    "end": 390,
                    "argument": {
                      "type": "Identifier",
                      "start": 372,
                      "end": 380,
                      "name": "argArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 380,
                      "end": 390,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 382,
                        "end": 390,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 382,
                          "end": 388
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 392,
                  "end": 399,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 395,
                    "end": 399
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 402,
            "end": 408,
            "object": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 404,
              "end": 408,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 431,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 417,
            "name": "r1c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 420,
            "end": 431,
            "object": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 422,
              "end": 431,
              "name": "arguments",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 440,
            "name": "r1d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 443,
            "end": 449,
            "object": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 445,
              "end": 449,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 451,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 455,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 458,
            "name": "r1e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 461,
            "end": 468,
            "object": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 463,
              "end": 467,
              "value": "hm",
              "raw": "'hm'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 604,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 604,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 498,
                "end": 604,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 504,
                    "end": 513,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 506,
                      "end": 512,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 508,
                        "end": 512
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 518,
                    "end": 547,
                    "key": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 523,
                      "name": "apply",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 524,
                        "end": 530,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 525,
                          "end": 530,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 527,
                            "end": 530
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 532,
                        "end": 539,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 534,
                          "end": 539,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 536,
                            "end": 539
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 540,
                      "end": 546,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 542,
                        "end": 546
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 552,
                    "end": 602,
                    "key": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 556,
                      "name": "call",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 557,
                        "end": 572,
                        "name": "thisArg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 564,
                          "end": 572,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 566,
                            "end": 572
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 574,
                        "end": 595,
                        "argument": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 585,
                          "name": "argArray",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 585,
                          "end": 595,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 587,
                            "end": 595,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 587,
                              "end": 593
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 596,
                      "end": 601,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 598,
                        "end": 601
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 639,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 612,
              "end": 639,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 614,
                "end": 639,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 615,
                    "end": 621,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 616,
                      "end": 621,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 618,
                        "end": 621
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 623,
                    "end": 630,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 625,
                      "end": 630,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 627,
                        "end": 630
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 632,
                  "end": 639,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 635,
                    "end": 639
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 642,
            "end": 649,
            "object": {
              "type": "Identifier",
              "start": 642,
              "end": 643,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 644,
              "end": 649,
              "name": "apply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 651,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 717,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 708,
            "name": "r2b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 658,
              "end": 708,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 660,
                "end": 708,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 661,
                    "end": 676,
                    "name": "thisArg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 668,
                      "end": 676,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 670,
                        "end": 676
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 678,
                    "end": 699,
                    "argument": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 689,
                      "name": "argArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 689,
                      "end": 699,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 691,
                        "end": 699,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 691,
                          "end": 697
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 701,
                  "end": 708,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 704,
                    "end": 708
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 711,
            "end": 717,
            "object": {
              "type": "Identifier",
              "start": 711,
              "end": 712,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 713,
              "end": 717,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 719,
      "end": 741,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 723,
          "end": 740,
          "id": {
            "type": "Identifier",
            "start": 723,
            "end": 726,
            "name": "r2c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 729,
            "end": 740,
            "object": {
              "type": "Identifier",
              "start": 729,
              "end": 730,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 731,
              "end": 740,
              "name": "arguments",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 742,
      "end": 759,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 758,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 749,
            "name": "r2d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 752,
            "end": 758,
            "object": {
              "type": "Identifier",
              "start": 752,
              "end": 753,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 754,
              "end": 758,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 760,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 764,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 764,
            "end": 767,
            "name": "r2e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 770,
            "end": 777,
            "object": {
              "type": "Identifier",
              "start": 770,
              "end": 771,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 772,
              "end": 776,
              "value": "hm",
              "raw": "'hm'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
