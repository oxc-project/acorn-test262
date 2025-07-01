__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 66,
            "end": 69
          },
          "definite": false,
          "start": 62,
          "end": 69
        }
      ],
      "declare": false,
      "start": 56,
      "end": 69
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 77
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 88
        },
        "typeArguments": null,
        "start": 80,
        "end": 88
      },
      "declare": false,
      "start": 71,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixA",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 98
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "typeArguments": null,
            "start": 101,
            "end": 102
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 109
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 111,
                    "end": 117
                  },
                  "start": 109,
                  "end": 117
                },
                "accessibility": null,
                "static": false,
                "start": 106,
                "end": 117
              }
            ],
            "start": 105,
            "end": 118
          }
        ],
        "start": 101,
        "end": 118
      },
      "declare": false,
      "start": 89,
      "end": 118
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginA1",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 136,
            "end": 139
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 140,
            "end": 142
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "typeArguments": null,
            "start": 139,
            "end": 140
          }
        ],
        "start": 136,
        "end": 142
      },
      "declare": false,
      "start": 120,
      "end": 142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginA2",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 156
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 159,
            "end": 162
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 166,
            "end": 168
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixA",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 166
            },
            "typeArguments": null,
            "start": 162,
            "end": 166
          }
        ],
        "start": 159,
        "end": 168
      },
      "declare": false,
      "start": 143,
      "end": 168
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 176
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 179,
            "end": 182
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 190,
            "end": 192
          }
        ],
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 190
            },
            "typeArguments": null,
            "start": 182,
            "end": 190
          }
        ],
        "start": 179,
        "end": 192
      },
      "declare": false,
      "start": 170,
      "end": 192
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixB",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 202
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
              "start": 205,
              "end": 206
            },
            "typeArguments": null,
            "start": 205,
            "end": 206
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 214
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 216,
                    "end": 222
                  },
                  "start": 214,
                  "end": 222
                },
                "accessibility": null,
                "static": false,
                "start": 211,
                "end": 222
              }
            ],
            "start": 209,
            "end": 224
          }
        ],
        "start": 205,
        "end": 224
      },
      "declare": false,
      "start": 193,
      "end": 224
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginB1",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 239
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 242,
            "end": 245
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 246,
            "end": 248
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 246
            },
            "typeArguments": null,
            "start": 245,
            "end": 246
          }
        ],
        "start": 242,
        "end": 248
      },
      "declare": false,
      "start": 226,
      "end": 248
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginB2",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 262
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 265,
            "end": 268
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 272,
            "end": 274
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixB",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 272
            },
            "typeArguments": null,
            "start": 268,
            "end": 272
          }
        ],
        "start": 265,
        "end": 274
      },
      "declare": false,
      "start": 249,
      "end": 274
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixC",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 285
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 293
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 295,
                    "end": 301
                  },
                  "start": 293,
                  "end": 301
                },
                "accessibility": null,
                "static": false,
                "start": 290,
                "end": 301
              }
            ],
            "start": 288,
            "end": 303
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "typeArguments": null,
            "start": 306,
            "end": 307
          }
        ],
        "start": 288,
        "end": 307
      },
      "declare": false,
      "start": 276,
      "end": 307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginC",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 321
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 324,
            "end": 327
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 331,
            "end": 333
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixC",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 331
            },
            "typeArguments": null,
            "start": 327,
            "end": 331
          }
        ],
        "start": 324,
        "end": 333
      },
      "declare": false,
      "start": 309,
      "end": 333
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixD",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 344
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
              "start": 345,
              "end": 346
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 355,
              "end": 361
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 345,
            "end": 361
          }
        ],
        "start": 344,
        "end": 362
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 369,
            "end": 372
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 391,
            "end": 393
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 373
                },
                "typeArguments": null,
                "start": 372,
                "end": 373
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 378,
                      "end": 381
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 383,
                        "end": 389
                      },
                      "start": 381,
                      "end": 389
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 378,
                    "end": 389
                  }
                ],
                "start": 376,
                "end": 391
              }
            ],
            "start": 372,
            "end": 391
          }
        ],
        "start": 369,
        "end": 393
      },
      "declare": false,
      "start": 335,
      "end": 393
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginD",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 406
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 409,
            "end": 412
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 455,
            "end": 457
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MixD",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 416
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 417,
                            "end": 418
                          },
                          "typeArguments": null,
                          "start": 417,
                          "end": 418
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
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 423,
                                "end": 426
                              },
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
                              "accessibility": null,
                              "static": false,
                              "start": 423,
                              "end": 434
                            }
                          ],
                          "start": 421,
                          "end": 436
                        }
                      ],
                      "start": 417,
                      "end": 436
                    }
                  ],
                  "start": 416,
                  "end": 437
                },
                "start": 412,
                "end": 437
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 442,
                      "end": 445
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 447,
                        "end": 453
                      },
                      "start": 445,
                      "end": 453
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 442,
                    "end": 453
                  }
                ],
                "start": 440,
                "end": 455
              }
            ],
            "start": 412,
            "end": 455
          }
        ],
        "start": 409,
        "end": 457
      },
      "declare": false,
      "start": 394,
      "end": 458
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 466
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 469,
            "end": 472
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 478,
            "end": 480
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 473
                },
                "typeArguments": null,
                "start": 472,
                "end": 473
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 476,
                "end": 478
              }
            ],
            "start": 472,
            "end": 478
          }
        ],
        "start": 469,
        "end": 480
      },
      "declare": false,
      "start": 460,
      "end": 481
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixE",
        "optional": false,
        "typeAnnotation": null,
        "start": 487,
        "end": 491
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
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 495
            },
            "typeArguments": null,
            "start": 494,
            "end": 495
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 498,
            "end": 500
          }
        ],
        "start": 494,
        "end": 500
      },
      "declare": false,
      "start": 482,
      "end": 500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginE",
        "optional": false,
        "typeAnnotation": null,
        "start": 506,
        "end": 513
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 516,
            "end": 519
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 523,
            "end": 525
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixE",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 523
            },
            "typeArguments": null,
            "start": 519,
            "end": 523
          }
        ],
        "start": 516,
        "end": 525
      },
      "declare": false,
      "start": 501,
      "end": 525
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginF",
        "optional": false,
        "typeAnnotation": null,
        "start": 532,
        "end": 539
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 542,
            "end": 545
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "foo",
              "cooked": "foo"
            },
            "tail": false,
            "start": 546,
            "end": 552
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 553,
            "end": 555
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 546
            },
            "typeArguments": null,
            "start": 545,
            "end": 546
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 553
            },
            "typeArguments": null,
            "start": 552,
            "end": 553
          }
        ],
        "start": 542,
        "end": 555
      },
      "declare": false,
      "start": 527,
      "end": 556
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 556
}
```
