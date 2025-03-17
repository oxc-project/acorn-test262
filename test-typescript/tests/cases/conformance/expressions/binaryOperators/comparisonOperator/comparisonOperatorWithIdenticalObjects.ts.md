__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3594,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "A1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 182,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 32,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 59,
            "end": 77,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 76,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 69,
                "end": 76
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 96,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 95,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 92,
                "end": 95
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 118,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 117,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 123,
            "end": 180,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 132,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 180,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 142,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 136,
                      "end": 142
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 180,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 162,
                    "end": 174,
                    "argument": {
                      "type": "Literal",
                      "start": 169,
                      "end": 173,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 143,
                "end": 151,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 145,
                  "end": 151
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 183,
      "end": 365,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 191,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 192,
        "end": 365,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 198,
            "end": 215,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 214,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 208,
                "end": 214
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 220,
            "end": 237,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 260,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 259,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 252,
                "end": 259
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 265,
            "end": 279,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 278,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 275,
                "end": 278
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 284,
            "end": 301,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 300,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 300,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 306,
            "end": 363,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 313,
              "end": 315,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 363,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 316,
                  "end": 325,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 319,
                      "end": 325
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 363,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 345,
                    "end": 357,
                    "argument": {
                      "type": "Literal",
                      "start": 352,
                      "end": 356,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 326,
                "end": 334,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 328,
                  "end": 334
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 367,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 377,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 378,
        "end": 467,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 384,
            "end": 402,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 401,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 395,
                "end": 401
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 407,
            "end": 465,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 415,
              "end": 417,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 417,
              "end": 465,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 418,
                  "end": 427,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 419,
                    "end": 427,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 421,
                      "end": 427
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 437,
                "end": 465,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 447,
                    "end": 459,
                    "argument": {
                      "type": "Literal",
                      "start": 454,
                      "end": 458,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 428,
                "end": 436,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 430,
                  "end": 436
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 468,
      "end": 493,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 476,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 485,
        "end": 489,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 490,
        "end": 493,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 494,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 502,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 511,
        "end": 515,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 516,
        "end": 519,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 521,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 531,
        "end": 533,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 534,
        "end": 559,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 536,
            "end": 557,
            "key": {
              "type": "Identifier",
              "start": 536,
              "end": 537,
              "name": "f",
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
                "start": 538,
                "end": 547,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 539,
                  "end": 547,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 541,
                    "end": 547
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 548,
              "end": 556,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 550,
                "end": 556
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
      "type": "TSInterfaceDeclaration",
      "start": 560,
      "end": 598,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 572,
        "name": "B3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 573,
        "end": 598,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 575,
            "end": 596,
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 576,
              "name": "f",
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
                "start": 577,
                "end": 586,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 578,
                  "end": 586,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 580,
                    "end": 586
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 595,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
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
      "type": "TSInterfaceDeclaration",
      "start": 600,
      "end": 637,
      "id": {
        "type": "Identifier",
        "start": 610,
        "end": 612,
        "name": "A4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 613,
        "end": 637,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 615,
            "end": 635,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 620,
                "end": 629,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 621,
                  "end": 629,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 623,
                    "end": 629
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 630,
              "end": 634,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 632,
                "end": 634,
                "typeName": {
                  "type": "Identifier",
                  "start": 632,
                  "end": 634,
                  "name": "A1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 638,
      "end": 675,
      "id": {
        "type": "Identifier",
        "start": 648,
        "end": 650,
        "name": "B4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 651,
        "end": 675,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 653,
            "end": 673,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 658,
                "end": 667,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 659,
                  "end": 667,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 661,
                    "end": 667
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 668,
              "end": 672,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 670,
                "end": 672,
                "typeName": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 672,
                  "name": "B1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 677,
      "end": 714,
      "id": {
        "type": "Identifier",
        "start": 687,
        "end": 689,
        "name": "A5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 690,
        "end": 714,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 692,
            "end": 712,
            "parameters": [
              {
                "type": "Identifier",
                "start": 693,
                "end": 702,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 694,
                  "end": 702,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 696,
                    "end": 702
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 703,
              "end": 711,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 705,
                "end": 711
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
      "start": 715,
      "end": 752,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 727,
        "name": "B5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 728,
        "end": 752,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 730,
            "end": 750,
            "parameters": [
              {
                "type": "Identifier",
                "start": 731,
                "end": 740,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 732,
                  "end": 740,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 734,
                    "end": 740
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 741,
              "end": 749,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 743,
                "end": 749
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
      "start": 754,
      "end": 791,
      "id": {
        "type": "Identifier",
        "start": 764,
        "end": 766,
        "name": "A6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 767,
        "end": 791,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 769,
            "end": 789,
            "parameters": [
              {
                "type": "Identifier",
                "start": 770,
                "end": 779,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 771,
                  "end": 779,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 773,
                    "end": 779
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 780,
              "end": 788,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 782,
                "end": 788
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
      "start": 792,
      "end": 829,
      "id": {
        "type": "Identifier",
        "start": 802,
        "end": 804,
        "name": "B6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 805,
        "end": 829,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 807,
            "end": 827,
            "parameters": [
              {
                "type": "Identifier",
                "start": 808,
                "end": 817,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 809,
                  "end": 817,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 811,
                    "end": 817
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 818,
              "end": 826,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 820,
                "end": 826
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
      "type": "VariableDeclaration",
      "start": 831,
      "end": 842,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 835,
          "end": 841,
          "id": {
            "type": "Identifier",
            "start": 835,
            "end": 841,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 837,
              "end": 841,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 839,
                "end": 841,
                "typeName": {
                  "type": "Identifier",
                  "start": 839,
                  "end": 841,
                  "name": "A1",
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
      "start": 843,
      "end": 854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 847,
          "end": 853,
          "id": {
            "type": "Identifier",
            "start": 847,
            "end": 853,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 849,
              "end": 853,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 851,
                "end": 853,
                "typeName": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 853,
                  "name": "A2",
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
      "start": 855,
      "end": 866,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 865,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 865,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 861,
              "end": 865,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 863,
                "end": 865,
                "typeName": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 865,
                  "name": "A3",
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
      "start": 867,
      "end": 878,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 871,
          "end": 877,
          "id": {
            "type": "Identifier",
            "start": 871,
            "end": 877,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 873,
              "end": 877,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 875,
                "end": 877,
                "typeName": {
                  "type": "Identifier",
                  "start": 875,
                  "end": 877,
                  "name": "A4",
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
      "start": 879,
      "end": 890,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 883,
          "end": 889,
          "id": {
            "type": "Identifier",
            "start": 883,
            "end": 889,
            "name": "a5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 885,
              "end": 889,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 887,
                "end": 889,
                "typeName": {
                  "type": "Identifier",
                  "start": 887,
                  "end": 889,
                  "name": "A5",
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
      "start": 891,
      "end": 902,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 895,
          "end": 901,
          "id": {
            "type": "Identifier",
            "start": 895,
            "end": 901,
            "name": "a6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 897,
              "end": 901,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 899,
                "end": 901,
                "typeName": {
                  "type": "Identifier",
                  "start": 899,
                  "end": 901,
                  "name": "A6",
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
      "start": 904,
      "end": 915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 908,
          "end": 914,
          "id": {
            "type": "Identifier",
            "start": 908,
            "end": 914,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 910,
              "end": 914,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 912,
                "end": 914,
                "typeName": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 914,
                  "name": "B1",
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
      "start": 916,
      "end": 927,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 920,
          "end": 926,
          "id": {
            "type": "Identifier",
            "start": 920,
            "end": 926,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 922,
              "end": 926,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 924,
                "end": 926,
                "typeName": {
                  "type": "Identifier",
                  "start": 924,
                  "end": 926,
                  "name": "B2",
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
      "start": 928,
      "end": 939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 932,
          "end": 938,
          "id": {
            "type": "Identifier",
            "start": 932,
            "end": 938,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 934,
              "end": 938,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 936,
                "end": 938,
                "typeName": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 938,
                  "name": "B3",
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
      "start": 940,
      "end": 951,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 944,
          "end": 950,
          "id": {
            "type": "Identifier",
            "start": 944,
            "end": 950,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 946,
              "end": 950,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 948,
                "end": 950,
                "typeName": {
                  "type": "Identifier",
                  "start": 948,
                  "end": 950,
                  "name": "B4",
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
      "start": 952,
      "end": 963,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 956,
          "end": 962,
          "id": {
            "type": "Identifier",
            "start": 956,
            "end": 962,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 958,
              "end": 962,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 960,
                "end": 962,
                "typeName": {
                  "type": "Identifier",
                  "start": 960,
                  "end": 962,
                  "name": "B5",
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
      "start": 964,
      "end": 975,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 968,
          "end": 974,
          "id": {
            "type": "Identifier",
            "start": 968,
            "end": 974,
            "name": "b6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 970,
              "end": 974,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 972,
                "end": 974,
                "typeName": {
                  "type": "Identifier",
                  "start": 972,
                  "end": 974,
                  "name": "B6",
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
      "start": 977,
      "end": 993,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 981,
          "end": 992,
          "id": {
            "type": "Identifier",
            "start": 981,
            "end": 992,
            "name": "base1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 986,
              "end": 992,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 988,
                "end": 992,
                "typeName": {
                  "type": "Identifier",
                  "start": 988,
                  "end": 992,
                  "name": "Base",
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
      "start": 994,
      "end": 1010,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 998,
          "end": 1009,
          "id": {
            "type": "Identifier",
            "start": 998,
            "end": 1009,
            "name": "base2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1003,
              "end": 1009,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1005,
                "end": 1009,
                "typeName": {
                  "type": "Identifier",
                  "start": 1005,
                  "end": 1009,
                  "name": "Base",
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
      "start": 1026,
      "end": 1045,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1030,
          "end": 1044,
          "id": {
            "type": "Identifier",
            "start": 1030,
            "end": 1034,
            "name": "r1a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1037,
            "end": 1044,
            "left": {
              "type": "Identifier",
              "start": 1037,
              "end": 1039,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1042,
              "end": 1044,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1046,
      "end": 1071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1050,
          "end": 1070,
          "id": {
            "type": "Identifier",
            "start": 1050,
            "end": 1054,
            "name": "r1a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1057,
            "end": 1070,
            "left": {
              "type": "Identifier",
              "start": 1057,
              "end": 1062,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1065,
              "end": 1070,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1072,
      "end": 1091,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1076,
          "end": 1090,
          "id": {
            "type": "Identifier",
            "start": 1076,
            "end": 1080,
            "name": "r1a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1083,
            "end": 1090,
            "left": {
              "type": "Identifier",
              "start": 1083,
              "end": 1085,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1088,
              "end": 1090,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1092,
      "end": 1111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1096,
          "end": 1110,
          "id": {
            "type": "Identifier",
            "start": 1096,
            "end": 1100,
            "name": "r1a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1103,
            "end": 1110,
            "left": {
              "type": "Identifier",
              "start": 1103,
              "end": 1105,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1108,
              "end": 1110,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1112,
      "end": 1131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1116,
          "end": 1130,
          "id": {
            "type": "Identifier",
            "start": 1116,
            "end": 1120,
            "name": "r1a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1123,
            "end": 1130,
            "left": {
              "type": "Identifier",
              "start": 1123,
              "end": 1125,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1128,
              "end": 1130,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1132,
      "end": 1151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1136,
          "end": 1150,
          "id": {
            "type": "Identifier",
            "start": 1136,
            "end": 1140,
            "name": "r1a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1143,
            "end": 1150,
            "left": {
              "type": "Identifier",
              "start": 1143,
              "end": 1145,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1148,
              "end": 1150,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1152,
      "end": 1171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1156,
          "end": 1170,
          "id": {
            "type": "Identifier",
            "start": 1156,
            "end": 1160,
            "name": "r1a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1163,
            "end": 1170,
            "left": {
              "type": "Identifier",
              "start": 1163,
              "end": 1165,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1168,
              "end": 1170,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1173,
      "end": 1192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1177,
          "end": 1191,
          "id": {
            "type": "Identifier",
            "start": 1177,
            "end": 1181,
            "name": "r1b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1184,
            "end": 1191,
            "left": {
              "type": "Identifier",
              "start": 1184,
              "end": 1186,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1189,
              "end": 1191,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1193,
      "end": 1218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1197,
          "end": 1217,
          "id": {
            "type": "Identifier",
            "start": 1197,
            "end": 1201,
            "name": "r1b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1204,
            "end": 1217,
            "left": {
              "type": "Identifier",
              "start": 1204,
              "end": 1209,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1212,
              "end": 1217,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1219,
      "end": 1238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1223,
          "end": 1237,
          "id": {
            "type": "Identifier",
            "start": 1223,
            "end": 1227,
            "name": "r1b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1230,
            "end": 1237,
            "left": {
              "type": "Identifier",
              "start": 1230,
              "end": 1232,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1235,
              "end": 1237,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1239,
      "end": 1258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1243,
          "end": 1257,
          "id": {
            "type": "Identifier",
            "start": 1243,
            "end": 1247,
            "name": "r1b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1250,
            "end": 1257,
            "left": {
              "type": "Identifier",
              "start": 1250,
              "end": 1252,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1255,
              "end": 1257,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1259,
      "end": 1278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1263,
          "end": 1277,
          "id": {
            "type": "Identifier",
            "start": 1263,
            "end": 1267,
            "name": "r1b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1270,
            "end": 1277,
            "left": {
              "type": "Identifier",
              "start": 1270,
              "end": 1272,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1275,
              "end": 1277,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1279,
      "end": 1298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1283,
          "end": 1297,
          "id": {
            "type": "Identifier",
            "start": 1283,
            "end": 1287,
            "name": "r1b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1290,
            "end": 1297,
            "left": {
              "type": "Identifier",
              "start": 1290,
              "end": 1292,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1295,
              "end": 1297,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1299,
      "end": 1318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1303,
          "end": 1317,
          "id": {
            "type": "Identifier",
            "start": 1303,
            "end": 1307,
            "name": "r1b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1310,
            "end": 1317,
            "left": {
              "type": "Identifier",
              "start": 1310,
              "end": 1312,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1315,
              "end": 1317,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1334,
      "end": 1353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1338,
          "end": 1352,
          "id": {
            "type": "Identifier",
            "start": 1338,
            "end": 1342,
            "name": "r2a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1345,
            "end": 1352,
            "left": {
              "type": "Identifier",
              "start": 1345,
              "end": 1347,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1350,
              "end": 1352,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1354,
      "end": 1379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1358,
          "end": 1378,
          "id": {
            "type": "Identifier",
            "start": 1358,
            "end": 1362,
            "name": "r2a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1365,
            "end": 1378,
            "left": {
              "type": "Identifier",
              "start": 1365,
              "end": 1370,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1373,
              "end": 1378,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1380,
      "end": 1399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1384,
          "end": 1398,
          "id": {
            "type": "Identifier",
            "start": 1384,
            "end": 1388,
            "name": "r2a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1391,
            "end": 1398,
            "left": {
              "type": "Identifier",
              "start": 1391,
              "end": 1393,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1396,
              "end": 1398,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1400,
      "end": 1419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1404,
          "end": 1418,
          "id": {
            "type": "Identifier",
            "start": 1404,
            "end": 1408,
            "name": "r2a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1411,
            "end": 1418,
            "left": {
              "type": "Identifier",
              "start": 1411,
              "end": 1413,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1416,
              "end": 1418,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1420,
      "end": 1439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1424,
          "end": 1438,
          "id": {
            "type": "Identifier",
            "start": 1424,
            "end": 1428,
            "name": "r2a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1431,
            "end": 1438,
            "left": {
              "type": "Identifier",
              "start": 1431,
              "end": 1433,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1436,
              "end": 1438,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1440,
      "end": 1459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1444,
          "end": 1458,
          "id": {
            "type": "Identifier",
            "start": 1444,
            "end": 1448,
            "name": "r2a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1451,
            "end": 1458,
            "left": {
              "type": "Identifier",
              "start": 1451,
              "end": 1453,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1456,
              "end": 1458,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1460,
      "end": 1479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1464,
          "end": 1478,
          "id": {
            "type": "Identifier",
            "start": 1464,
            "end": 1468,
            "name": "r2a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1471,
            "end": 1478,
            "left": {
              "type": "Identifier",
              "start": 1471,
              "end": 1473,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1476,
              "end": 1478,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1481,
      "end": 1500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1485,
          "end": 1499,
          "id": {
            "type": "Identifier",
            "start": 1485,
            "end": 1489,
            "name": "r2b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1492,
            "end": 1499,
            "left": {
              "type": "Identifier",
              "start": 1492,
              "end": 1494,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1497,
              "end": 1499,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1501,
      "end": 1526,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1505,
          "end": 1525,
          "id": {
            "type": "Identifier",
            "start": 1505,
            "end": 1509,
            "name": "r2b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1512,
            "end": 1525,
            "left": {
              "type": "Identifier",
              "start": 1512,
              "end": 1517,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1520,
              "end": 1525,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1527,
      "end": 1546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1531,
          "end": 1545,
          "id": {
            "type": "Identifier",
            "start": 1531,
            "end": 1535,
            "name": "r2b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1538,
            "end": 1545,
            "left": {
              "type": "Identifier",
              "start": 1538,
              "end": 1540,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1543,
              "end": 1545,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1547,
      "end": 1566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1551,
          "end": 1565,
          "id": {
            "type": "Identifier",
            "start": 1551,
            "end": 1555,
            "name": "r2b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1558,
            "end": 1565,
            "left": {
              "type": "Identifier",
              "start": 1558,
              "end": 1560,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1563,
              "end": 1565,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1567,
      "end": 1586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1571,
          "end": 1585,
          "id": {
            "type": "Identifier",
            "start": 1571,
            "end": 1575,
            "name": "r2b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1578,
            "end": 1585,
            "left": {
              "type": "Identifier",
              "start": 1578,
              "end": 1580,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1583,
              "end": 1585,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1587,
      "end": 1606,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1591,
          "end": 1605,
          "id": {
            "type": "Identifier",
            "start": 1591,
            "end": 1595,
            "name": "r2b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1598,
            "end": 1605,
            "left": {
              "type": "Identifier",
              "start": 1598,
              "end": 1600,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1603,
              "end": 1605,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1607,
      "end": 1626,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1611,
          "end": 1625,
          "id": {
            "type": "Identifier",
            "start": 1611,
            "end": 1615,
            "name": "r2b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1618,
            "end": 1625,
            "left": {
              "type": "Identifier",
              "start": 1618,
              "end": 1620,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1623,
              "end": 1625,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1643,
      "end": 1663,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1647,
          "end": 1662,
          "id": {
            "type": "Identifier",
            "start": 1647,
            "end": 1651,
            "name": "r3a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1654,
            "end": 1662,
            "left": {
              "type": "Identifier",
              "start": 1654,
              "end": 1656,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1660,
              "end": 1662,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1664,
      "end": 1690,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1668,
          "end": 1689,
          "id": {
            "type": "Identifier",
            "start": 1668,
            "end": 1672,
            "name": "r3a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1675,
            "end": 1689,
            "left": {
              "type": "Identifier",
              "start": 1675,
              "end": 1680,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1684,
              "end": 1689,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1691,
      "end": 1711,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1695,
          "end": 1710,
          "id": {
            "type": "Identifier",
            "start": 1695,
            "end": 1699,
            "name": "r3a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1702,
            "end": 1710,
            "left": {
              "type": "Identifier",
              "start": 1702,
              "end": 1704,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1708,
              "end": 1710,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1712,
      "end": 1732,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1716,
          "end": 1731,
          "id": {
            "type": "Identifier",
            "start": 1716,
            "end": 1720,
            "name": "r3a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1723,
            "end": 1731,
            "left": {
              "type": "Identifier",
              "start": 1723,
              "end": 1725,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1729,
              "end": 1731,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1733,
      "end": 1753,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1737,
          "end": 1752,
          "id": {
            "type": "Identifier",
            "start": 1737,
            "end": 1741,
            "name": "r3a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1744,
            "end": 1752,
            "left": {
              "type": "Identifier",
              "start": 1744,
              "end": 1746,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1750,
              "end": 1752,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1754,
      "end": 1774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1758,
          "end": 1773,
          "id": {
            "type": "Identifier",
            "start": 1758,
            "end": 1762,
            "name": "r3a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1765,
            "end": 1773,
            "left": {
              "type": "Identifier",
              "start": 1765,
              "end": 1767,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1771,
              "end": 1773,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1775,
      "end": 1795,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1779,
          "end": 1794,
          "id": {
            "type": "Identifier",
            "start": 1779,
            "end": 1783,
            "name": "r3a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1786,
            "end": 1794,
            "left": {
              "type": "Identifier",
              "start": 1786,
              "end": 1788,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1792,
              "end": 1794,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1797,
      "end": 1817,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1801,
          "end": 1816,
          "id": {
            "type": "Identifier",
            "start": 1801,
            "end": 1805,
            "name": "r3b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1808,
            "end": 1816,
            "left": {
              "type": "Identifier",
              "start": 1808,
              "end": 1810,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1814,
              "end": 1816,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1818,
      "end": 1844,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1822,
          "end": 1843,
          "id": {
            "type": "Identifier",
            "start": 1822,
            "end": 1826,
            "name": "r3b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1829,
            "end": 1843,
            "left": {
              "type": "Identifier",
              "start": 1829,
              "end": 1834,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1838,
              "end": 1843,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1845,
      "end": 1865,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1849,
          "end": 1864,
          "id": {
            "type": "Identifier",
            "start": 1849,
            "end": 1853,
            "name": "r3b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1856,
            "end": 1864,
            "left": {
              "type": "Identifier",
              "start": 1856,
              "end": 1858,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1862,
              "end": 1864,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1866,
      "end": 1886,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1870,
          "end": 1885,
          "id": {
            "type": "Identifier",
            "start": 1870,
            "end": 1874,
            "name": "r3b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1877,
            "end": 1885,
            "left": {
              "type": "Identifier",
              "start": 1877,
              "end": 1879,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1883,
              "end": 1885,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1887,
      "end": 1907,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1891,
          "end": 1906,
          "id": {
            "type": "Identifier",
            "start": 1891,
            "end": 1895,
            "name": "r3b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1898,
            "end": 1906,
            "left": {
              "type": "Identifier",
              "start": 1898,
              "end": 1900,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1904,
              "end": 1906,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1908,
      "end": 1928,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1912,
          "end": 1927,
          "id": {
            "type": "Identifier",
            "start": 1912,
            "end": 1916,
            "name": "r3b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1919,
            "end": 1927,
            "left": {
              "type": "Identifier",
              "start": 1919,
              "end": 1921,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1925,
              "end": 1927,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1929,
      "end": 1949,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1933,
          "end": 1948,
          "id": {
            "type": "Identifier",
            "start": 1933,
            "end": 1937,
            "name": "r3b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1940,
            "end": 1948,
            "left": {
              "type": "Identifier",
              "start": 1940,
              "end": 1942,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1946,
              "end": 1948,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1966,
      "end": 1986,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1970,
          "end": 1985,
          "id": {
            "type": "Identifier",
            "start": 1970,
            "end": 1974,
            "name": "r4a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1977,
            "end": 1985,
            "left": {
              "type": "Identifier",
              "start": 1977,
              "end": 1979,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1983,
              "end": 1985,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1987,
      "end": 2013,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1991,
          "end": 2012,
          "id": {
            "type": "Identifier",
            "start": 1991,
            "end": 1995,
            "name": "r4a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1998,
            "end": 2012,
            "left": {
              "type": "Identifier",
              "start": 1998,
              "end": 2003,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2007,
              "end": 2012,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2014,
      "end": 2034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2018,
          "end": 2033,
          "id": {
            "type": "Identifier",
            "start": 2018,
            "end": 2022,
            "name": "r4a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2025,
            "end": 2033,
            "left": {
              "type": "Identifier",
              "start": 2025,
              "end": 2027,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2031,
              "end": 2033,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2035,
      "end": 2055,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2039,
          "end": 2054,
          "id": {
            "type": "Identifier",
            "start": 2039,
            "end": 2043,
            "name": "r4a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2046,
            "end": 2054,
            "left": {
              "type": "Identifier",
              "start": 2046,
              "end": 2048,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2052,
              "end": 2054,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2056,
      "end": 2076,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2060,
          "end": 2075,
          "id": {
            "type": "Identifier",
            "start": 2060,
            "end": 2064,
            "name": "r4a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2067,
            "end": 2075,
            "left": {
              "type": "Identifier",
              "start": 2067,
              "end": 2069,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2073,
              "end": 2075,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2077,
      "end": 2097,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2081,
          "end": 2096,
          "id": {
            "type": "Identifier",
            "start": 2081,
            "end": 2085,
            "name": "r4a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2088,
            "end": 2096,
            "left": {
              "type": "Identifier",
              "start": 2088,
              "end": 2090,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2094,
              "end": 2096,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2098,
      "end": 2118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2102,
          "end": 2117,
          "id": {
            "type": "Identifier",
            "start": 2102,
            "end": 2106,
            "name": "r4a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2109,
            "end": 2117,
            "left": {
              "type": "Identifier",
              "start": 2109,
              "end": 2111,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2115,
              "end": 2117,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2120,
      "end": 2140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2124,
          "end": 2139,
          "id": {
            "type": "Identifier",
            "start": 2124,
            "end": 2128,
            "name": "r4b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2131,
            "end": 2139,
            "left": {
              "type": "Identifier",
              "start": 2131,
              "end": 2133,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2137,
              "end": 2139,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2141,
      "end": 2167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2145,
          "end": 2166,
          "id": {
            "type": "Identifier",
            "start": 2145,
            "end": 2149,
            "name": "r4b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2152,
            "end": 2166,
            "left": {
              "type": "Identifier",
              "start": 2152,
              "end": 2157,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2161,
              "end": 2166,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2168,
      "end": 2188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2172,
          "end": 2187,
          "id": {
            "type": "Identifier",
            "start": 2172,
            "end": 2176,
            "name": "r4b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2179,
            "end": 2187,
            "left": {
              "type": "Identifier",
              "start": 2179,
              "end": 2181,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2185,
              "end": 2187,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2189,
      "end": 2209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2193,
          "end": 2208,
          "id": {
            "type": "Identifier",
            "start": 2193,
            "end": 2197,
            "name": "r4b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2200,
            "end": 2208,
            "left": {
              "type": "Identifier",
              "start": 2200,
              "end": 2202,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2206,
              "end": 2208,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2210,
      "end": 2230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2214,
          "end": 2229,
          "id": {
            "type": "Identifier",
            "start": 2214,
            "end": 2218,
            "name": "r4b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2221,
            "end": 2229,
            "left": {
              "type": "Identifier",
              "start": 2221,
              "end": 2223,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2227,
              "end": 2229,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2231,
      "end": 2251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2235,
          "end": 2250,
          "id": {
            "type": "Identifier",
            "start": 2235,
            "end": 2239,
            "name": "r4b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2242,
            "end": 2250,
            "left": {
              "type": "Identifier",
              "start": 2242,
              "end": 2244,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2248,
              "end": 2250,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2252,
      "end": 2272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2256,
          "end": 2271,
          "id": {
            "type": "Identifier",
            "start": 2256,
            "end": 2260,
            "name": "r4b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2263,
            "end": 2271,
            "left": {
              "type": "Identifier",
              "start": 2263,
              "end": 2265,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2269,
              "end": 2271,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2289,
      "end": 2309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2293,
          "end": 2308,
          "id": {
            "type": "Identifier",
            "start": 2293,
            "end": 2297,
            "name": "r5a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2300,
            "end": 2308,
            "left": {
              "type": "Identifier",
              "start": 2300,
              "end": 2302,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2306,
              "end": 2308,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2310,
      "end": 2336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2314,
          "end": 2335,
          "id": {
            "type": "Identifier",
            "start": 2314,
            "end": 2318,
            "name": "r5a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2321,
            "end": 2335,
            "left": {
              "type": "Identifier",
              "start": 2321,
              "end": 2326,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2330,
              "end": 2335,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2337,
      "end": 2357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2341,
          "end": 2356,
          "id": {
            "type": "Identifier",
            "start": 2341,
            "end": 2345,
            "name": "r5a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2348,
            "end": 2356,
            "left": {
              "type": "Identifier",
              "start": 2348,
              "end": 2350,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2354,
              "end": 2356,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2358,
      "end": 2378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2362,
          "end": 2377,
          "id": {
            "type": "Identifier",
            "start": 2362,
            "end": 2366,
            "name": "r5a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2369,
            "end": 2377,
            "left": {
              "type": "Identifier",
              "start": 2369,
              "end": 2371,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2375,
              "end": 2377,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2379,
      "end": 2399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2383,
          "end": 2398,
          "id": {
            "type": "Identifier",
            "start": 2383,
            "end": 2387,
            "name": "r5a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2390,
            "end": 2398,
            "left": {
              "type": "Identifier",
              "start": 2390,
              "end": 2392,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2396,
              "end": 2398,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2400,
      "end": 2420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2404,
          "end": 2419,
          "id": {
            "type": "Identifier",
            "start": 2404,
            "end": 2408,
            "name": "r5a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2411,
            "end": 2419,
            "left": {
              "type": "Identifier",
              "start": 2411,
              "end": 2413,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2417,
              "end": 2419,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2421,
      "end": 2441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2425,
          "end": 2440,
          "id": {
            "type": "Identifier",
            "start": 2425,
            "end": 2429,
            "name": "r5a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2432,
            "end": 2440,
            "left": {
              "type": "Identifier",
              "start": 2432,
              "end": 2434,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2438,
              "end": 2440,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2443,
      "end": 2463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2447,
          "end": 2462,
          "id": {
            "type": "Identifier",
            "start": 2447,
            "end": 2451,
            "name": "r5b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2454,
            "end": 2462,
            "left": {
              "type": "Identifier",
              "start": 2454,
              "end": 2456,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2460,
              "end": 2462,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2464,
      "end": 2490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2468,
          "end": 2489,
          "id": {
            "type": "Identifier",
            "start": 2468,
            "end": 2472,
            "name": "r5b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2475,
            "end": 2489,
            "left": {
              "type": "Identifier",
              "start": 2475,
              "end": 2480,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2484,
              "end": 2489,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2491,
      "end": 2511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2495,
          "end": 2510,
          "id": {
            "type": "Identifier",
            "start": 2495,
            "end": 2499,
            "name": "r5b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2502,
            "end": 2510,
            "left": {
              "type": "Identifier",
              "start": 2502,
              "end": 2504,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2508,
              "end": 2510,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2512,
      "end": 2532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2516,
          "end": 2531,
          "id": {
            "type": "Identifier",
            "start": 2516,
            "end": 2520,
            "name": "r5b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2523,
            "end": 2531,
            "left": {
              "type": "Identifier",
              "start": 2523,
              "end": 2525,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2529,
              "end": 2531,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2533,
      "end": 2553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2537,
          "end": 2552,
          "id": {
            "type": "Identifier",
            "start": 2537,
            "end": 2541,
            "name": "r5b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2544,
            "end": 2552,
            "left": {
              "type": "Identifier",
              "start": 2544,
              "end": 2546,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2550,
              "end": 2552,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2554,
      "end": 2574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2558,
          "end": 2573,
          "id": {
            "type": "Identifier",
            "start": 2558,
            "end": 2562,
            "name": "r5b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2565,
            "end": 2573,
            "left": {
              "type": "Identifier",
              "start": 2565,
              "end": 2567,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2571,
              "end": 2573,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2575,
      "end": 2595,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2579,
          "end": 2594,
          "id": {
            "type": "Identifier",
            "start": 2579,
            "end": 2583,
            "name": "r5b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2586,
            "end": 2594,
            "left": {
              "type": "Identifier",
              "start": 2586,
              "end": 2588,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2592,
              "end": 2594,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2612,
      "end": 2632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2616,
          "end": 2631,
          "id": {
            "type": "Identifier",
            "start": 2616,
            "end": 2620,
            "name": "r6a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2623,
            "end": 2631,
            "left": {
              "type": "Identifier",
              "start": 2623,
              "end": 2625,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2629,
              "end": 2631,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2633,
      "end": 2659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2637,
          "end": 2658,
          "id": {
            "type": "Identifier",
            "start": 2637,
            "end": 2641,
            "name": "r6a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2644,
            "end": 2658,
            "left": {
              "type": "Identifier",
              "start": 2644,
              "end": 2649,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2653,
              "end": 2658,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2660,
      "end": 2680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2664,
          "end": 2679,
          "id": {
            "type": "Identifier",
            "start": 2664,
            "end": 2668,
            "name": "r6a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2671,
            "end": 2679,
            "left": {
              "type": "Identifier",
              "start": 2671,
              "end": 2673,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2677,
              "end": 2679,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2681,
      "end": 2701,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2685,
          "end": 2700,
          "id": {
            "type": "Identifier",
            "start": 2685,
            "end": 2689,
            "name": "r6a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2692,
            "end": 2700,
            "left": {
              "type": "Identifier",
              "start": 2692,
              "end": 2694,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2698,
              "end": 2700,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2702,
      "end": 2722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2706,
          "end": 2721,
          "id": {
            "type": "Identifier",
            "start": 2706,
            "end": 2710,
            "name": "r6a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2713,
            "end": 2721,
            "left": {
              "type": "Identifier",
              "start": 2713,
              "end": 2715,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2719,
              "end": 2721,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2723,
      "end": 2743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2727,
          "end": 2742,
          "id": {
            "type": "Identifier",
            "start": 2727,
            "end": 2731,
            "name": "r6a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2734,
            "end": 2742,
            "left": {
              "type": "Identifier",
              "start": 2734,
              "end": 2736,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2740,
              "end": 2742,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2744,
      "end": 2764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2748,
          "end": 2763,
          "id": {
            "type": "Identifier",
            "start": 2748,
            "end": 2752,
            "name": "r6a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2755,
            "end": 2763,
            "left": {
              "type": "Identifier",
              "start": 2755,
              "end": 2757,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2761,
              "end": 2763,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2766,
      "end": 2786,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2770,
          "end": 2785,
          "id": {
            "type": "Identifier",
            "start": 2770,
            "end": 2774,
            "name": "r6b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2777,
            "end": 2785,
            "left": {
              "type": "Identifier",
              "start": 2777,
              "end": 2779,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2783,
              "end": 2785,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2787,
      "end": 2813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2791,
          "end": 2812,
          "id": {
            "type": "Identifier",
            "start": 2791,
            "end": 2795,
            "name": "r6b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2798,
            "end": 2812,
            "left": {
              "type": "Identifier",
              "start": 2798,
              "end": 2803,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2807,
              "end": 2812,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2814,
      "end": 2834,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2818,
          "end": 2833,
          "id": {
            "type": "Identifier",
            "start": 2818,
            "end": 2822,
            "name": "r6b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2825,
            "end": 2833,
            "left": {
              "type": "Identifier",
              "start": 2825,
              "end": 2827,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2831,
              "end": 2833,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2835,
      "end": 2855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2839,
          "end": 2854,
          "id": {
            "type": "Identifier",
            "start": 2839,
            "end": 2843,
            "name": "r6b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2846,
            "end": 2854,
            "left": {
              "type": "Identifier",
              "start": 2846,
              "end": 2848,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2852,
              "end": 2854,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2856,
      "end": 2876,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2860,
          "end": 2875,
          "id": {
            "type": "Identifier",
            "start": 2860,
            "end": 2864,
            "name": "r6b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2867,
            "end": 2875,
            "left": {
              "type": "Identifier",
              "start": 2867,
              "end": 2869,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2873,
              "end": 2875,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2877,
      "end": 2897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2881,
          "end": 2896,
          "id": {
            "type": "Identifier",
            "start": 2881,
            "end": 2885,
            "name": "r6b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2888,
            "end": 2896,
            "left": {
              "type": "Identifier",
              "start": 2888,
              "end": 2890,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2894,
              "end": 2896,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2898,
      "end": 2918,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2902,
          "end": 2917,
          "id": {
            "type": "Identifier",
            "start": 2902,
            "end": 2906,
            "name": "r6b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2909,
            "end": 2917,
            "left": {
              "type": "Identifier",
              "start": 2909,
              "end": 2911,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2915,
              "end": 2917,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2936,
      "end": 2957,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2940,
          "end": 2956,
          "id": {
            "type": "Identifier",
            "start": 2940,
            "end": 2944,
            "name": "r7a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2947,
            "end": 2956,
            "left": {
              "type": "Identifier",
              "start": 2947,
              "end": 2949,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2954,
              "end": 2956,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2958,
      "end": 2985,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2962,
          "end": 2984,
          "id": {
            "type": "Identifier",
            "start": 2962,
            "end": 2966,
            "name": "r7a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2969,
            "end": 2984,
            "left": {
              "type": "Identifier",
              "start": 2969,
              "end": 2974,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2979,
              "end": 2984,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2986,
      "end": 3007,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2990,
          "end": 3006,
          "id": {
            "type": "Identifier",
            "start": 2990,
            "end": 2994,
            "name": "r7a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2997,
            "end": 3006,
            "left": {
              "type": "Identifier",
              "start": 2997,
              "end": 2999,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3004,
              "end": 3006,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3008,
      "end": 3029,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3012,
          "end": 3028,
          "id": {
            "type": "Identifier",
            "start": 3012,
            "end": 3016,
            "name": "r7a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3019,
            "end": 3028,
            "left": {
              "type": "Identifier",
              "start": 3019,
              "end": 3021,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3026,
              "end": 3028,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3030,
      "end": 3051,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3034,
          "end": 3050,
          "id": {
            "type": "Identifier",
            "start": 3034,
            "end": 3038,
            "name": "r7a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3041,
            "end": 3050,
            "left": {
              "type": "Identifier",
              "start": 3041,
              "end": 3043,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3048,
              "end": 3050,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3052,
      "end": 3073,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3056,
          "end": 3072,
          "id": {
            "type": "Identifier",
            "start": 3056,
            "end": 3060,
            "name": "r7a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3063,
            "end": 3072,
            "left": {
              "type": "Identifier",
              "start": 3063,
              "end": 3065,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3070,
              "end": 3072,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3074,
      "end": 3095,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3078,
          "end": 3094,
          "id": {
            "type": "Identifier",
            "start": 3078,
            "end": 3082,
            "name": "r7a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3085,
            "end": 3094,
            "left": {
              "type": "Identifier",
              "start": 3085,
              "end": 3087,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3092,
              "end": 3094,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3097,
      "end": 3118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3101,
          "end": 3117,
          "id": {
            "type": "Identifier",
            "start": 3101,
            "end": 3105,
            "name": "r7b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3108,
            "end": 3117,
            "left": {
              "type": "Identifier",
              "start": 3108,
              "end": 3110,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3115,
              "end": 3117,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3119,
      "end": 3146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3123,
          "end": 3145,
          "id": {
            "type": "Identifier",
            "start": 3123,
            "end": 3127,
            "name": "r7b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3130,
            "end": 3145,
            "left": {
              "type": "Identifier",
              "start": 3130,
              "end": 3135,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3140,
              "end": 3145,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3147,
      "end": 3168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3151,
          "end": 3167,
          "id": {
            "type": "Identifier",
            "start": 3151,
            "end": 3155,
            "name": "r7b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3158,
            "end": 3167,
            "left": {
              "type": "Identifier",
              "start": 3158,
              "end": 3160,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3165,
              "end": 3167,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3169,
      "end": 3190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3173,
          "end": 3189,
          "id": {
            "type": "Identifier",
            "start": 3173,
            "end": 3177,
            "name": "r7b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3180,
            "end": 3189,
            "left": {
              "type": "Identifier",
              "start": 3180,
              "end": 3182,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3187,
              "end": 3189,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3191,
      "end": 3212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3195,
          "end": 3211,
          "id": {
            "type": "Identifier",
            "start": 3195,
            "end": 3199,
            "name": "r7b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3202,
            "end": 3211,
            "left": {
              "type": "Identifier",
              "start": 3202,
              "end": 3204,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3209,
              "end": 3211,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3213,
      "end": 3234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3217,
          "end": 3233,
          "id": {
            "type": "Identifier",
            "start": 3217,
            "end": 3221,
            "name": "r7b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3224,
            "end": 3233,
            "left": {
              "type": "Identifier",
              "start": 3224,
              "end": 3226,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3231,
              "end": 3233,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3235,
      "end": 3256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3239,
          "end": 3255,
          "id": {
            "type": "Identifier",
            "start": 3239,
            "end": 3243,
            "name": "r7b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3246,
            "end": 3255,
            "left": {
              "type": "Identifier",
              "start": 3246,
              "end": 3248,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3253,
              "end": 3255,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3274,
      "end": 3295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3278,
          "end": 3294,
          "id": {
            "type": "Identifier",
            "start": 3278,
            "end": 3282,
            "name": "r8a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3285,
            "end": 3294,
            "left": {
              "type": "Identifier",
              "start": 3285,
              "end": 3287,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3292,
              "end": 3294,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3296,
      "end": 3323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3300,
          "end": 3322,
          "id": {
            "type": "Identifier",
            "start": 3300,
            "end": 3304,
            "name": "r8a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3307,
            "end": 3322,
            "left": {
              "type": "Identifier",
              "start": 3307,
              "end": 3312,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3317,
              "end": 3322,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3324,
      "end": 3345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3328,
          "end": 3344,
          "id": {
            "type": "Identifier",
            "start": 3328,
            "end": 3332,
            "name": "r8a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3335,
            "end": 3344,
            "left": {
              "type": "Identifier",
              "start": 3335,
              "end": 3337,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3342,
              "end": 3344,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3346,
      "end": 3367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3350,
          "end": 3366,
          "id": {
            "type": "Identifier",
            "start": 3350,
            "end": 3354,
            "name": "r8a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3357,
            "end": 3366,
            "left": {
              "type": "Identifier",
              "start": 3357,
              "end": 3359,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3364,
              "end": 3366,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3368,
      "end": 3389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3372,
          "end": 3388,
          "id": {
            "type": "Identifier",
            "start": 3372,
            "end": 3376,
            "name": "r8a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3379,
            "end": 3388,
            "left": {
              "type": "Identifier",
              "start": 3379,
              "end": 3381,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3386,
              "end": 3388,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3390,
      "end": 3411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3394,
          "end": 3410,
          "id": {
            "type": "Identifier",
            "start": 3394,
            "end": 3398,
            "name": "r8a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3401,
            "end": 3410,
            "left": {
              "type": "Identifier",
              "start": 3401,
              "end": 3403,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3408,
              "end": 3410,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3412,
      "end": 3433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3416,
          "end": 3432,
          "id": {
            "type": "Identifier",
            "start": 3416,
            "end": 3420,
            "name": "r8a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3423,
            "end": 3432,
            "left": {
              "type": "Identifier",
              "start": 3423,
              "end": 3425,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3430,
              "end": 3432,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3435,
      "end": 3456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3439,
          "end": 3455,
          "id": {
            "type": "Identifier",
            "start": 3439,
            "end": 3443,
            "name": "r8b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3446,
            "end": 3455,
            "left": {
              "type": "Identifier",
              "start": 3446,
              "end": 3448,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3453,
              "end": 3455,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3457,
      "end": 3484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3461,
          "end": 3483,
          "id": {
            "type": "Identifier",
            "start": 3461,
            "end": 3465,
            "name": "r8b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3468,
            "end": 3483,
            "left": {
              "type": "Identifier",
              "start": 3468,
              "end": 3473,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3478,
              "end": 3483,
              "name": "base1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3485,
      "end": 3506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3489,
          "end": 3505,
          "id": {
            "type": "Identifier",
            "start": 3489,
            "end": 3493,
            "name": "r8b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3496,
            "end": 3505,
            "left": {
              "type": "Identifier",
              "start": 3496,
              "end": 3498,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3503,
              "end": 3505,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3507,
      "end": 3528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3511,
          "end": 3527,
          "id": {
            "type": "Identifier",
            "start": 3511,
            "end": 3515,
            "name": "r8b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3518,
            "end": 3527,
            "left": {
              "type": "Identifier",
              "start": 3518,
              "end": 3520,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3525,
              "end": 3527,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3529,
      "end": 3550,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3533,
          "end": 3549,
          "id": {
            "type": "Identifier",
            "start": 3533,
            "end": 3537,
            "name": "r8b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3540,
            "end": 3549,
            "left": {
              "type": "Identifier",
              "start": 3540,
              "end": 3542,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3547,
              "end": 3549,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3551,
      "end": 3572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3555,
          "end": 3571,
          "id": {
            "type": "Identifier",
            "start": 3555,
            "end": 3559,
            "name": "r8b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3562,
            "end": 3571,
            "left": {
              "type": "Identifier",
              "start": 3562,
              "end": 3564,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3569,
              "end": 3571,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3573,
      "end": 3594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3577,
          "end": 3593,
          "id": {
            "type": "Identifier",
            "start": 3577,
            "end": 3581,
            "name": "r8b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3584,
            "end": 3593,
            "left": {
              "type": "Identifier",
              "start": 3584,
              "end": 3586,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3591,
              "end": 3593,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
