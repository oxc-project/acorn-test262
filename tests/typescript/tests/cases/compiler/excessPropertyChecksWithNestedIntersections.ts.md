__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
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
              "start": 75,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 84
          }
        ],
        "start": 69,
        "end": 86
      },
      "declare": false,
      "start": 57,
      "end": 86
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "typeArguments": null,
                "start": 109,
                "end": 110
              },
              "start": 107,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 106,
            "end": 111
          }
        ],
        "start": 100,
        "end": 113
      },
      "declare": false,
      "start": 88,
      "end": 113
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 143
          }
        ],
        "start": 127,
        "end": 145
      },
      "declare": false,
      "start": 115,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "typeArguments": null,
            "start": 156,
            "end": 157
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 161
            },
            "typeArguments": null,
            "start": 160,
            "end": 161
          }
        ],
        "start": 156,
        "end": 161
      },
      "declare": false,
      "start": 147,
      "end": 162
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 172
                },
                "typeArguments": null,
                "start": 171,
                "end": 172
              },
              "start": 169,
              "end": 172
            },
            "start": 168,
            "end": 172
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "value": {
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
                        "start": 182,
                        "end": 183
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 185,
                        "end": 192
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 182,
                      "end": 192
                    }
                  ],
                  "start": 180,
                  "end": 194
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 177,
                "end": 194
              }
            ],
            "start": 175,
            "end": 196
          },
          "definite": false,
          "start": 168,
          "end": 196
        }
      ],
      "declare": false,
      "start": 164,
      "end": 197
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "typeArguments": null,
                "start": 211,
                "end": 212
              },
              "start": 209,
              "end": 212
            },
            "start": 208,
            "end": 212
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 218
                },
                "value": {
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
                        "start": 222,
                        "end": 223
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 225,
                        "end": 226
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 222,
                      "end": 226
                    }
                  ],
                  "start": 220,
                  "end": 228
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 217,
                "end": 228
              }
            ],
            "start": 215,
            "end": 230
          },
          "definite": false,
          "start": 208,
          "end": 230
        }
      ],
      "declare": false,
      "start": 204,
      "end": 231
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                },
                "typeArguments": null,
                "start": 287,
                "end": 288
              },
              "start": 285,
              "end": 288
            },
            "start": 284,
            "end": 288
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 293,
                  "end": 294
                },
                "value": {
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
                        "start": 298,
                        "end": 299
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 301,
                        "end": 308
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 298,
                      "end": 308
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
                        "start": 310,
                        "end": 311
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 313,
                        "end": 314
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 310,
                      "end": 314
                    }
                  ],
                  "start": 296,
                  "end": 316
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 293,
                "end": 316
              }
            ],
            "start": 291,
            "end": 318
          },
          "definite": false,
          "start": 284,
          "end": 318
        }
      ],
      "declare": false,
      "start": 280,
      "end": 319
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "typeArguments": null,
                "start": 366,
                "end": 367
              },
              "start": 364,
              "end": 367
            },
            "start": 363,
            "end": 367
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 373
                },
                "value": {
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
                        "start": 377,
                        "end": 378
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 380,
                        "end": 387
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 377,
                      "end": 387
                    }
                  ],
                  "start": 375,
                  "end": 389
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 372,
                "end": 389
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 392
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 394,
                  "end": 395
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 391,
                "end": 395
              }
            ],
            "start": 370,
            "end": 397
          },
          "definite": false,
          "start": 363,
          "end": 397
        }
      ],
      "declare": false,
      "start": 359,
      "end": 398
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 413
                },
                "typeArguments": null,
                "start": 412,
                "end": 413
              },
              "start": 410,
              "end": 413
            },
            "start": 409,
            "end": 413
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 419
                },
                "value": {
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
                        "start": 423,
                        "end": 424
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 426,
                        "end": 427
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 423,
                      "end": 427
                    }
                  ],
                  "start": 421,
                  "end": 429
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 418,
                "end": 429
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 432
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 434,
                  "end": 435
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 431,
                "end": 435
              }
            ],
            "start": 416,
            "end": 437
          },
          "definite": false,
          "start": 409,
          "end": 437
        }
      ],
      "declare": false,
      "start": 405,
      "end": 438
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 495
                },
                "typeArguments": null,
                "start": 494,
                "end": 495
              },
              "start": 492,
              "end": 495
            },
            "start": 491,
            "end": 495
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 501
                },
                "value": {
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
                        "start": 505,
                        "end": 506
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 508,
                        "end": 515
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 505,
                      "end": 515
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
                        "start": 517,
                        "end": 518
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 520,
                        "end": 521
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 517,
                      "end": 521
                    }
                  ],
                  "start": 503,
                  "end": 523
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 500,
                "end": 523
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 526
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 528,
                  "end": 529
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 525,
                "end": 529
              }
            ],
            "start": 498,
            "end": 531
          },
          "definite": false,
          "start": 491,
          "end": 531
        }
      ],
      "declare": false,
      "start": 487,
      "end": 532
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 641,
          "end": 647
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 652,
                    "end": 654
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 656,
                      "end": 662
                    },
                    "start": 654,
                    "end": 662
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 652,
                  "end": 663
                }
              ],
              "start": 650,
              "end": 665
            },
            {
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 674
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 676,
                      "end": 682
                    },
                    "start": 674,
                    "end": 682
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 670,
                  "end": 683
                }
              ],
              "start": 668,
              "end": 685
            },
            {
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
                    "name": "photo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 695
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
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
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 699,
                                "end": 701
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 703,
                                  "end": 709
                                },
                                "start": 701,
                                "end": 709
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 699,
                              "end": 710
                            }
                          ],
                          "start": 697,
                          "end": 712
                        },
                        {
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
                                "name": "url",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 717,
                                "end": 720
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 722,
                                  "end": 728
                                },
                                "start": 720,
                                "end": 728
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 717,
                              "end": 729
                            }
                          ],
                          "start": 715,
                          "end": 731
                        }
                      ],
                      "start": 697,
                      "end": 731
                    },
                    "start": 695,
                    "end": 731
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 690,
                  "end": 731
                }
              ],
              "start": 688,
              "end": 733
            }
          ],
          "start": 650,
          "end": 733
        },
        "declare": false,
        "start": 636,
        "end": 733
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 629,
      "end": 733
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 751,
                    "end": 757
                  },
                  "typeArguments": null,
                  "start": 751,
                  "end": 757
                },
                "start": 749,
                "end": 757
              },
              "start": 746,
              "end": 757
            },
            "init": null,
            "definite": false,
            "start": 746,
            "end": 757
          }
        ],
        "declare": false,
        "start": 742,
        "end": 758
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 735,
      "end": 758
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "photo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 787,
                      "end": 790
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "photo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 791,
                      "end": 796
                    },
                    "start": 787,
                    "end": 796
                  },
                  "typeArguments": null,
                  "start": 780,
                  "end": 796
                },
                "start": 778,
                "end": 796
              },
              "start": 773,
              "end": 796
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 807
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 809,
                    "end": 810
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 805,
                  "end": 810
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "url",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 819
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 821,
                    "end": 823
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 816,
                  "end": 823
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 829,
                    "end": 832
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 834,
                    "end": 835
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 829,
                  "end": 835
                }
              ],
              "start": 799,
              "end": 869
            },
            "definite": false,
            "start": 773,
            "end": 869
          }
        ],
        "declare": false,
        "start": 767,
        "end": 870
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 760,
      "end": 870
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "myInstance",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 903
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 903
                },
                "start": 895,
                "end": 903
              },
              "start": 885,
              "end": 903
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 914
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 916,
                    "end": 917
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 912,
                  "end": 917
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 927
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 929,
                    "end": 931
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 923,
                  "end": 931
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "photo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 937,
                    "end": 942
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 954,
                          "end": 956
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 958,
                          "end": 959
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 954,
                        "end": 959
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "url",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 969,
                          "end": 972
                        },
                        "value": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 974,
                          "end": 976
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 969,
                        "end": 976
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xyz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 986,
                          "end": 989
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 991,
                          "end": 992
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 986,
                        "end": 992
                      }
                    ],
                    "start": 944,
                    "end": 1030
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 937,
                  "end": 1030
                }
              ],
              "start": 906,
              "end": 1032
            },
            "definite": false,
            "start": 885,
            "end": 1032
          }
        ],
        "declare": false,
        "start": 879,
        "end": 1033
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 872,
      "end": 1033
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "View",
          "optional": false,
          "typeAnnotation": null,
          "start": 1104,
          "end": 1108
        },
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
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1117,
            "end": 1118
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1128,
                "end": 1129
              },
              "typeArguments": null,
              "start": 1128,
              "end": 1129
            },
            "start": 1122,
            "end": 1129
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1132,
                  "end": 1133
                },
                "typeArguments": null,
                "start": 1132,
                "end": 1133
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1134,
                  "end": 1135
                },
                "typeArguments": null,
                "start": 1134,
                "end": 1135
              },
              "start": 1132,
              "end": 1136
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 1145,
              "end": 1151
            },
            "trueType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 1154,
                  "end": 1161
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "View",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1164,
                    "end": 1168
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1169,
                            "end": 1170
                          },
                          "typeArguments": null,
                          "start": 1169,
                          "end": 1170
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1171,
                            "end": 1172
                          },
                          "typeArguments": null,
                          "start": 1171,
                          "end": 1172
                        },
                        "start": 1169,
                        "end": 1173
                      }
                    ],
                    "start": 1168,
                    "end": 1174
                  },
                  "start": 1164,
                  "end": 1174
                }
              ],
              "start": 1154,
              "end": 1174
            },
            "falseType": {
              "type": "TSBooleanKeyword",
              "start": 1177,
              "end": 1184
            },
            "start": 1132,
            "end": 1184
          },
          "optional": false,
          "readonly": null,
          "start": 1114,
          "end": 1186
        },
        "declare": false,
        "start": 1099,
        "end": 1187
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1092,
      "end": 1187
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeC",
        "optional": false,
        "typeAnnotation": null,
        "start": 1199,
        "end": 1204
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1211,
              "end": 1214
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1216,
                "end": 1222
              },
              "start": 1214,
              "end": 1222
            },
            "accessibility": null,
            "static": false,
            "start": 1211,
            "end": 1223
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1228,
              "end": 1231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1233,
                "end": 1239
              },
              "start": 1231,
              "end": 1239
            },
            "accessibility": null,
            "static": false,
            "start": 1228,
            "end": 1240
          }
        ],
        "start": 1205,
        "end": 1242
      },
      "declare": false,
      "start": 1189,
      "end": 1242
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1254,
        "end": 1259
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1266,
              "end": 1269
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1271,
                "end": 1277
              },
              "start": 1269,
              "end": 1277
            },
            "accessibility": null,
            "static": false,
            "start": 1266,
            "end": 1278
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1283,
              "end": 1286
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1288,
                  "end": 1293
                },
                "typeArguments": null,
                "start": 1288,
                "end": 1293
              },
              "start": 1286,
              "end": 1293
            },
            "accessibility": null,
            "static": false,
            "start": 1283,
            "end": 1293
          }
        ],
        "start": 1260,
        "end": 1295
      },
      "declare": false,
      "start": 1244,
      "end": 1295
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 1307,
        "end": 1312
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1322
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1324,
                "end": 1330
              },
              "start": 1322,
              "end": 1330
            },
            "accessibility": null,
            "static": false,
            "start": 1319,
            "end": 1331
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1336,
              "end": 1339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1341,
                  "end": 1346
                },
                "typeArguments": null,
                "start": 1341,
                "end": 1346
              },
              "start": 1339,
              "end": 1346
            },
            "accessibility": null,
            "static": false,
            "start": 1336,
            "end": 1347
          }
        ],
        "start": 1313,
        "end": 1349
      },
      "declare": false,
      "start": 1297,
      "end": 1349
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "View",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1361,
                  "end": 1365
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1366,
                        "end": 1371
                      },
                      "typeArguments": null,
                      "start": 1366,
                      "end": 1371
                    }
                  ],
                  "start": 1365,
                  "end": 1372
                },
                "start": 1361,
                "end": 1372
              },
              "start": 1359,
              "end": 1372
            },
            "start": 1355,
            "end": 1372
          },
          "init": null,
          "definite": false,
          "start": 1355,
          "end": 1372
        }
      ],
      "declare": false,
      "start": 1351,
      "end": 1373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1379
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1384,
                "end": 1387
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1389,
                "end": 1393
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1384,
              "end": 1393
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1398
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1400,
                "end": 1404
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1395,
              "end": 1404
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "boo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1406,
                "end": 1409
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1411,
                "end": 1415
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1406,
              "end": 1415
            }
          ],
          "start": 1382,
          "end": 1417
        },
        "start": 1375,
        "end": 1417
      },
      "directive": null,
      "start": 1375,
      "end": 1417
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1419,
          "end": 1423
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1428,
                "end": 1431
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1433,
                "end": 1437
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1428,
              "end": 1437
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1442
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1446,
                      "end": 1449
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1451,
                      "end": 1455
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1446,
                    "end": 1455
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1457,
                      "end": 1460
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1462,
                      "end": 1466
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1457,
                    "end": 1466
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "boo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1468,
                      "end": 1471
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1473,
                      "end": 1477
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1468,
                    "end": 1477
                  }
                ],
                "start": 1444,
                "end": 1479
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1439,
              "end": 1479
            }
          ],
          "start": 1426,
          "end": 1481
        },
        "start": 1419,
        "end": 1481
      },
      "directive": null,
      "start": 1419,
      "end": 1481
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1481
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66,
    "range": [
      57,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97,
    "range": [
      88,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 115,
    "end": 124,
    "range": [
      115,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 147,
    "end": 151,
    "range": [
      147,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 185,
    "end": 192,
    "range": [
      185,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 280,
    "end": 283,
    "range": [
      280,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 301,
    "end": 308,
    "range": [
      301,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 359,
    "end": 362,
    "range": [
      359,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 380,
    "end": 387,
    "range": [
      380,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 405,
    "end": 408,
    "range": [
      405,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 487,
    "end": 490,
    "range": [
      487,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 508,
    "end": 515,
    "range": [
      508,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 629,
    "end": 635,
    "range": [
      629,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 636,
    "end": 640,
    "range": [
      636,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 641,
    "end": 647,
    "range": [
      641,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 652,
    "end": 654,
    "range": [
      652,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 656,
    "end": 662,
    "range": [
      656,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 670,
    "end": 674,
    "range": [
      670,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 676,
    "end": 682,
    "range": [
      676,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "photo",
    "start": 690,
    "end": 695,
    "range": [
      690,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 699,
    "end": 701,
    "range": [
      699,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 703,
    "end": 709,
    "range": [
      703,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 717,
    "end": 720,
    "range": [
      717,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 722,
    "end": 728,
    "range": [
      722,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 735,
    "end": 741,
    "range": [
      735,
      741
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 742,
    "end": 745,
    "range": [
      742,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 746,
    "end": 749,
    "range": [
      746,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 751,
    "end": 757,
    "range": [
      751,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 760,
    "end": 766,
    "range": [
      760,
      766
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 767,
    "end": 772,
    "range": [
      767,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "photo",
    "start": 773,
    "end": 778,
    "range": [
      773,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 780,
    "end": 786,
    "range": [
      780,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 787,
    "end": 790,
    "range": [
      787,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "photo",
    "start": 791,
    "end": 796,
    "range": [
      791,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 805,
    "end": 807,
    "range": [
      805,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 816,
    "end": 819,
    "range": [
      816,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 821,
    "end": 823,
    "range": [
      821,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 829,
    "end": 832,
    "range": [
      829,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 872,
    "end": 878,
    "range": [
      872,
      878
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 879,
    "end": 884,
    "range": [
      879,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "myInstance",
    "start": 885,
    "end": 895,
    "range": [
      885,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 897,
    "end": 903,
    "range": [
      897,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 912,
    "end": 914,
    "range": [
      912,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 923,
    "end": 927,
    "range": [
      923,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 929,
    "end": 931,
    "range": [
      929,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "photo",
    "start": 937,
    "end": 942,
    "range": [
      937,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 954,
    "end": 956,
    "range": [
      954,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 969,
    "end": 972,
    "range": [
      969,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 974,
    "end": 976,
    "range": [
      974,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 986,
    "end": 989,
    "range": [
      986,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1092,
    "end": 1098,
    "range": [
      1092,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1099,
    "end": 1103,
    "range": [
      1099,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "View",
    "start": 1104,
    "end": 1108,
    "range": [
      1104,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1119,
    "end": 1121,
    "range": [
      1119,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1122,
    "end": 1127,
    "range": [
      1122,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1137,
    "end": 1144,
    "range": [
      1137,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1145,
    "end": 1151,
    "range": [
      1145,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1154,
    "end": 1161,
    "range": [
      1154,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "View",
    "start": 1164,
    "end": 1168,
    "range": [
      1164,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1177,
    "end": 1184,
    "range": [
      1177,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1189,
    "end": 1198,
    "range": [
      1189,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeC",
    "start": 1199,
    "end": 1204,
    "range": [
      1199,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1211,
    "end": 1214,
    "range": [
      1211,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1216,
    "end": 1222,
    "range": [
      1216,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1228,
    "end": 1231,
    "range": [
      1228,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1233,
    "end": 1239,
    "range": [
      1233,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1244,
    "end": 1253,
    "range": [
      1244,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 1254,
    "end": 1259,
    "range": [
      1254,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1266,
    "end": 1269,
    "range": [
      1266,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1271,
    "end": 1277,
    "range": [
      1271,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1283,
    "end": 1286,
    "range": [
      1283,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeC",
    "start": 1288,
    "end": 1293,
    "range": [
      1288,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1297,
    "end": 1306,
    "range": [
      1297,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 1307,
    "end": 1312,
    "range": [
      1307,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1319,
    "end": 1322,
    "range": [
      1319,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1324,
    "end": 1330,
    "range": [
      1324,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1336,
    "end": 1339,
    "range": [
      1336,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 1341,
    "end": 1346,
    "range": [
      1341,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1351,
    "end": 1354,
    "range": [
      1351,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1355,
    "end": 1359,
    "range": [
      1355,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "View",
    "start": 1361,
    "end": 1365,
    "range": [
      1361,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 1366,
    "end": 1371,
    "range": [
      1366,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1375,
    "end": 1379,
    "range": [
      1375,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1384,
    "end": 1387,
    "range": [
      1384,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1389,
    "end": 1393,
    "range": [
      1389,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1395,
    "end": 1398,
    "range": [
      1395,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1400,
    "end": 1404,
    "range": [
      1400,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 1406,
    "end": 1409,
    "range": [
      1406,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1411,
    "end": 1415,
    "range": [
      1411,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1419,
    "end": 1423,
    "range": [
      1419,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1428,
    "end": 1431,
    "range": [
      1428,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1433,
    "end": 1437,
    "range": [
      1433,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1439,
    "end": 1442,
    "range": [
      1439,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1446,
    "end": 1449,
    "range": [
      1446,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1451,
    "end": 1455,
    "range": [
      1451,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1457,
    "end": 1460,
    "range": [
      1457,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1462,
    "end": 1466,
    "range": [
      1462,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 1468,
    "end": 1471,
    "range": [
      1468,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1473,
    "end": 1477,
    "range": [
      1473,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  }
]
```
