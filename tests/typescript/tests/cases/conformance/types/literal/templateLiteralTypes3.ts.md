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
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 75
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
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "typeArguments": null,
          "start": 81,
          "end": 82
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": false,
              "start": 91,
              "end": 95
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": true,
              "start": 102,
              "end": 105
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 102
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 101,
                "end": 102
              },
              "start": 95,
              "end": 102
            }
          ],
          "start": 91,
          "end": 105
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "typeArguments": null,
          "start": 108,
          "end": 109
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 112,
          "end": 117
        },
        "start": 81,
        "end": 117
      },
      "declare": false,
      "start": 66,
      "end": 118
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 128
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 135
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 136,
                "end": 143
              },
              "start": 136,
              "end": 143
            }
          ],
          "start": 135,
          "end": 144
        },
        "start": 131,
        "end": 144
      },
      "declare": false,
      "start": 120,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 154
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 161
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "*hello*",
                "raw": "'*hello*'",
                "start": 162,
                "end": 171
              },
              "start": 162,
              "end": 171
            }
          ],
          "start": 161,
          "end": 172
        },
        "start": 157,
        "end": 172
      },
      "declare": false,
      "start": 146,
      "end": 173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 182
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 189
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "**hello**",
                "raw": "'**hello**'",
                "start": 190,
                "end": 201
              },
              "start": 190,
              "end": 201
            }
          ],
          "start": 189,
          "end": 202
        },
        "start": 185,
        "end": 202
      },
      "declare": false,
      "start": 174,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 212
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 219
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 220,
                  "end": 224
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 230,
                  "end": 233
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 224,
                  "end": 230
                }
              ],
              "start": 220,
              "end": 233
            }
          ],
          "start": 219,
          "end": 234
        },
        "start": 215,
        "end": 234
      },
      "declare": false,
      "start": 204,
      "end": 235
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 244
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 251
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 252,
                  "end": 256
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 262,
                  "end": 265
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 256,
                  "end": 262
                }
              ],
              "start": 252,
              "end": 265
            }
          ],
          "start": 251,
          "end": 266
        },
        "start": 247,
        "end": 266
      },
      "declare": false,
      "start": 236,
      "end": 267
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 276
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 283
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 284,
                  "end": 288
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 294,
                  "end": 297
                }
              ],
              "types": [
                {
                  "type": "TSBigIntKeyword",
                  "start": 288,
                  "end": 294
                }
              ],
              "start": 284,
              "end": 297
            }
          ],
          "start": 283,
          "end": 298
        },
        "start": 279,
        "end": 298
      },
      "declare": false,
      "start": 268,
      "end": 299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T07",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 308
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 315
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 316,
                  "end": 320
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 323,
                  "end": 326
                }
              ],
              "types": [
                {
                  "type": "TSAnyKeyword",
                  "start": 320,
                  "end": 323
                }
              ],
              "start": 316,
              "end": 326
            }
          ],
          "start": 315,
          "end": 327
        },
        "start": 311,
        "end": 327
      },
      "declare": false,
      "start": 300,
      "end": 328
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T08",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 337
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 344
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 345,
                  "end": 350
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 356,
                  "end": 360
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 350,
                  "end": 356
                }
              ],
              "start": 345,
              "end": 360
            }
          ],
          "start": 344,
          "end": 361
        },
        "start": 340,
        "end": 361
      },
      "declare": false,
      "start": 329,
      "end": 362
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T09",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 371
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 374,
          "end": 378
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 379,
                  "end": 384
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 390,
                  "end": 395
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 401,
                  "end": 405
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 384,
                  "end": 390
                },
                {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
                }
              ],
              "start": 379,
              "end": 405
            }
          ],
          "start": 378,
          "end": 406
        },
        "start": 374,
        "end": 406
      },
      "declare": false,
      "start": 363,
      "end": 407
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 416
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 419,
          "end": 423
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 424,
                  "end": 429
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 444,
                  "end": 448
                }
              ],
              "types": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 429,
                        "end": 432
                      },
                      "start": 429,
                      "end": 432
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 435,
                        "end": 438
                      },
                      "start": 435,
                      "end": 438
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 441,
                        "end": 444
                      },
                      "start": 441,
                      "end": 444
                    }
                  ],
                  "start": 429,
                  "end": 444
                }
              ],
              "start": 424,
              "end": 448
            }
          ],
          "start": 423,
          "end": 449
        },
        "start": 419,
        "end": 449
      },
      "declare": false,
      "start": 408,
      "end": 450
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 459
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 466
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 467,
                  "end": 472
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 479,
                  "end": 484
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 491,
                  "end": 495
                }
              ],
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 472,
                  "end": 479
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 484,
                  "end": 491
                }
              ],
              "start": 467,
              "end": 495
            }
          ],
          "start": 466,
          "end": 496
        },
        "start": 462,
        "end": 496
      },
      "declare": false,
      "start": 451,
      "end": 497
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 531,
              "end": 537
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 521,
            "end": 537
          }
        ],
        "start": 520,
        "end": 538
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 544,
                  "end": 548
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 549,
                  "end": 552
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "typeArguments": null,
                  "start": 548,
                  "end": 549
                }
              ],
              "start": 544,
              "end": 552
            },
            "start": 542,
            "end": 552
          },
          "start": 539,
          "end": 552
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 556
          },
          "typeArguments": null,
          "start": 555,
          "end": 556
        },
        "start": 553,
        "end": 556
      },
      "body": null,
      "expression": false,
      "start": 499,
      "end": 557
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 568,
        "end": 570
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 571,
              "end": 572
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 581,
              "end": 587
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 571,
            "end": 587
          }
        ],
        "start": 570,
        "end": 588
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
              "type": "TSStringKeyword",
              "start": 592,
              "end": 598
            },
            "start": 590,
            "end": 598
          },
          "start": 589,
          "end": 598
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 603,
              "end": 609
            },
            "start": 601,
            "end": 609
          },
          "start": 600,
          "end": 609
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 614,
              "end": 621
            },
            "start": 612,
            "end": 621
          },
          "start": 611,
          "end": 621
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 626,
                "end": 627
              },
              "typeArguments": null,
              "start": 626,
              "end": 627
            },
            "start": 624,
            "end": 627
          },
          "start": 623,
          "end": 627
        }
      ],
      "returnType": null,
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 641
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 648
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "'hello'",
                      "start": 649,
                      "end": 656
                    }
                  ],
                  "optional": false,
                  "start": 644,
                  "end": 657
                },
                "definite": false,
                "start": 639,
                "end": 657
              }
            ],
            "declare": false,
            "start": 635,
            "end": 658
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 679
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 682,
                    "end": 686
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "*hello*",
                      "raw": "'*hello*'",
                      "start": 687,
                      "end": 696
                    }
                  ],
                  "optional": false,
                  "start": 682,
                  "end": 697
                },
                "definite": false,
                "start": 677,
                "end": 697
              }
            ],
            "declare": false,
            "start": 673,
            "end": 698
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 709
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 712,
                    "end": 716
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "**hello**",
                      "raw": "'**hello**'",
                      "start": 717,
                      "end": 728
                    }
                  ],
                  "optional": false,
                  "start": 712,
                  "end": 729
                },
                "definite": false,
                "start": 707,
                "end": 729
              }
            ],
            "declare": false,
            "start": 703,
            "end": 730
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 741
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 748
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false,
                            "start": 749,
                            "end": 753
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true,
                            "start": 754,
                            "end": 757
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 753,
                            "end": 754
                          }
                        ],
                        "start": 749,
                        "end": 757
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 761,
                          "end": 766
                        },
                        "typeArguments": null,
                        "start": 761,
                        "end": 766
                      },
                      "start": 749,
                      "end": 766
                    }
                  ],
                  "optional": false,
                  "start": 744,
                  "end": 767
                },
                "definite": false,
                "start": 739,
                "end": 767
              }
            ],
            "declare": false,
            "start": 735,
            "end": 768
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
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 779
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 786
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false,
                            "start": 787,
                            "end": 791
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true,
                            "start": 792,
                            "end": 795
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 791,
                            "end": 792
                          }
                        ],
                        "start": 787,
                        "end": 795
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 804
                        },
                        "typeArguments": null,
                        "start": 799,
                        "end": 804
                      },
                      "start": 787,
                      "end": 804
                    }
                  ],
                  "optional": false,
                  "start": 782,
                  "end": 805
                },
                "definite": false,
                "start": 777,
                "end": 805
              }
            ],
            "declare": false,
            "start": 773,
            "end": 806
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
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 817
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 820,
                    "end": 824
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false,
                            "start": 825,
                            "end": 829
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true,
                            "start": 830,
                            "end": 833
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 829,
                            "end": 830
                          }
                        ],
                        "start": 825,
                        "end": 833
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 837,
                          "end": 842
                        },
                        "typeArguments": null,
                        "start": 837,
                        "end": 842
                      },
                      "start": 825,
                      "end": 842
                    }
                  ],
                  "optional": false,
                  "start": 820,
                  "end": 843
                },
                "definite": false,
                "start": 815,
                "end": 843
              }
            ],
            "declare": false,
            "start": 811,
            "end": 844
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
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 853,
                  "end": 855
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 862
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false,
                            "start": 863,
                            "end": 867
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true,
                            "start": 868,
                            "end": 871
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 867,
                            "end": 868
                          }
                        ],
                        "start": 863,
                        "end": 871
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 875,
                          "end": 880
                        },
                        "typeArguments": null,
                        "start": 875,
                        "end": 880
                      },
                      "start": 863,
                      "end": 880
                    }
                  ],
                  "optional": false,
                  "start": 858,
                  "end": 881
                },
                "definite": false,
                "start": 853,
                "end": 881
              }
            ],
            "declare": false,
            "start": 849,
            "end": 882
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
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 891,
                  "end": 893
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 896,
                    "end": 900
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "**",
                              "cooked": "**"
                            },
                            "tail": false,
                            "start": 901,
                            "end": 906
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "**",
                              "cooked": "**"
                            },
                            "tail": true,
                            "start": 907,
                            "end": 911
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 906,
                            "end": 907
                          }
                        ],
                        "start": 901,
                        "end": 911
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 915,
                          "end": 920
                        },
                        "typeArguments": null,
                        "start": 915,
                        "end": 920
                      },
                      "start": 901,
                      "end": 920
                    }
                  ],
                  "optional": false,
                  "start": 896,
                  "end": 921
                },
                "definite": false,
                "start": 891,
                "end": 921
              }
            ],
            "declare": false,
            "start": 887,
            "end": 922
          }
        ],
        "start": 629,
        "end": 924
      },
      "expression": false,
      "start": 559,
      "end": 924
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parts",
        "optional": false,
        "typeAnnotation": null,
        "start": 1067,
        "end": 1072
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
              "start": 1073,
              "end": 1074
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1073,
            "end": 1074
          }
        ],
        "start": 1072,
        "end": 1075
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1082,
            "end": 1083
          },
          "typeArguments": null,
          "start": 1082,
          "end": 1083
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1092,
            "end": 1094
          },
          "start": 1092,
          "end": 1094
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 1097,
          "end": 1099
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1107
            },
            "typeArguments": null,
            "start": 1106,
            "end": 1107
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 1116,
                "end": 1119
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 1129,
                "end": 1132
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 1142,
                "end": 1144
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Head",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1125,
                    "end": 1129
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1125,
                  "end": 1129
                },
                "start": 1119,
                "end": 1129
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1138,
                    "end": 1142
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1138,
                  "end": 1142
                },
                "start": 1132,
                "end": 1142
              }
            ],
            "start": 1116,
            "end": 1144
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1152
                },
                "typeArguments": null,
                "start": 1148,
                "end": 1152
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1157,
                    "end": 1162
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tail",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1163,
                          "end": 1167
                        },
                        "typeArguments": null,
                        "start": 1163,
                        "end": 1167
                      }
                    ],
                    "start": 1162,
                    "end": 1168
                  },
                  "start": 1157,
                  "end": 1168
                },
                "start": 1154,
                "end": 1168
              }
            ],
            "start": 1147,
            "end": 1169
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1176,
            "end": 1181
          },
          "start": 1106,
          "end": 1181
        },
        "start": 1082,
        "end": 1181
      },
      "declare": false,
      "start": 1062,
      "end": 1182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1200
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true,
                    "start": 1201,
                    "end": 1206
                  }
                ],
                "expressions": [],
                "start": 1201,
                "end": 1206
              },
              "start": 1201,
              "end": 1206
            }
          ],
          "start": 1200,
          "end": 1207
        },
        "start": 1195,
        "end": 1207
      },
      "declare": false,
      "start": 1184,
      "end": 1208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1217
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 1220,
          "end": 1225
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1226,
                  "end": 1230
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 1236,
                  "end": 1239
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1230,
                  "end": 1236
                }
              ],
              "start": 1226,
              "end": 1239
            }
          ],
          "start": 1225,
          "end": 1240
        },
        "start": 1220,
        "end": 1240
      },
      "declare": false,
      "start": 1209,
      "end": 1241
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1247,
        "end": 1250
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 1253,
          "end": 1258
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1259,
                  "end": 1263
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 1269,
                  "end": 1272
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1263,
                  "end": 1269
                }
              ],
              "start": 1259,
              "end": 1272
            }
          ],
          "start": 1258,
          "end": 1273
        },
        "start": 1253,
        "end": 1273
      },
      "declare": false,
      "start": 1242,
      "end": 1274
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 1286,
          "end": 1291
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1292,
                  "end": 1296
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1302,
                  "end": 1306
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1312,
                  "end": 1316
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 1322,
                  "end": 1325
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1296,
                  "end": 1302
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1306,
                  "end": 1312
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 1316,
                  "end": 1322
                }
              ],
              "start": 1292,
              "end": 1325
            }
          ],
          "start": 1291,
          "end": 1326
        },
        "start": 1286,
        "end": 1326
      },
      "declare": false,
      "start": 1275,
      "end": 1327
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1338,
        "end": 1340
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
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 1356,
                          "end": 1359
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": ".",
                            "cooked": "."
                          },
                          "tail": false,
                          "start": 1365,
                          "end": 1369
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": ".",
                            "cooked": "."
                          },
                          "tail": false,
                          "start": 1375,
                          "end": 1379
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 1385,
                          "end": 1387
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1359,
                          "end": 1365
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1369,
                          "end": 1375
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1379,
                          "end": 1385
                        }
                      ],
                      "start": 1356,
                      "end": 1387
                    },
                    "start": 1354,
                    "end": 1387
                  },
                  "start": 1353,
                  "end": 1387
                },
                "init": null,
                "definite": false,
                "start": 1353,
                "end": 1387
              }
            ],
            "declare": false,
            "start": 1349,
            "end": 1388
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1393,
                "end": 1394
              },
              "right": {
                "type": "Literal",
                "value": "1.1.1",
                "raw": "'1.1.1'",
                "start": 1397,
                "end": 1404
              },
              "start": 1393,
              "end": 1404
            },
            "directive": null,
            "start": 1393,
            "end": 1405
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1411
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1414,
                  "end": 1421
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.1.",
                        "cooked": "1.1."
                      },
                      "tail": false,
                      "start": 1425,
                      "end": 1432
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1438,
                      "end": 1440
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1432,
                      "end": 1438
                    }
                  ],
                  "start": 1425,
                  "end": 1440
                },
                "start": 1414,
                "end": 1440
              },
              "start": 1410,
              "end": 1440
            },
            "directive": null,
            "start": 1410,
            "end": 1441
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1446,
                "end": 1447
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1450,
                  "end": 1457
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 1461,
                      "end": 1466
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".1",
                        "cooked": ".1"
                      },
                      "tail": true,
                      "start": 1472,
                      "end": 1476
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1466,
                      "end": 1472
                    }
                  ],
                  "start": 1461,
                  "end": 1476
                },
                "start": 1450,
                "end": 1476
              },
              "start": 1446,
              "end": 1476
            },
            "directive": null,
            "start": 1446,
            "end": 1477
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1482,
                "end": 1483
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1486,
                  "end": 1493
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 1497,
                      "end": 1502
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 1508,
                      "end": 1512
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1518,
                      "end": 1520
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1502,
                      "end": 1508
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1512,
                      "end": 1518
                    }
                  ],
                  "start": 1497,
                  "end": 1520
                },
                "start": 1486,
                "end": 1520
              },
              "start": 1482,
              "end": 1520
            },
            "directive": null,
            "start": 1482,
            "end": 1521
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1526,
                "end": 1527
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1530,
                  "end": 1537
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
                      "start": 1541,
                      "end": 1544
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".1.1",
                        "cooked": ".1.1"
                      },
                      "tail": true,
                      "start": 1550,
                      "end": 1556
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1544,
                      "end": 1550
                    }
                  ],
                  "start": 1541,
                  "end": 1556
                },
                "start": 1530,
                "end": 1556
              },
              "start": 1526,
              "end": 1556
            },
            "directive": null,
            "start": 1526,
            "end": 1557
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1563
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1566,
                  "end": 1573
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
                      "start": 1577,
                      "end": 1580
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".1.",
                        "cooked": ".1."
                      },
                      "tail": false,
                      "start": 1586,
                      "end": 1592
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1598,
                      "end": 1600
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1580,
                      "end": 1586
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1592,
                      "end": 1598
                    }
                  ],
                  "start": 1577,
                  "end": 1600
                },
                "start": 1566,
                "end": 1600
              },
              "start": 1562,
              "end": 1600
            },
            "directive": null,
            "start": 1562,
            "end": 1601
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1606,
                "end": 1607
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1610,
                  "end": 1617
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
                      "start": 1621,
                      "end": 1624
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 1630,
                      "end": 1634
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".1",
                        "cooked": ".1"
                      },
                      "tail": true,
                      "start": 1640,
                      "end": 1644
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1624,
                      "end": 1630
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1634,
                      "end": 1640
                    }
                  ],
                  "start": 1621,
                  "end": 1644
                },
                "start": 1610,
                "end": 1644
              },
              "start": 1606,
              "end": 1644
            },
            "directive": null,
            "start": 1606,
            "end": 1645
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1650,
                "end": 1651
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1654,
                  "end": 1661
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
                      "start": 1665,
                      "end": 1668
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 1674,
                      "end": 1678
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 1684,
                      "end": 1688
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1694,
                      "end": 1696
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1668,
                      "end": 1674
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1678,
                      "end": 1684
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1688,
                      "end": 1694
                    }
                  ],
                  "start": 1665,
                  "end": 1696
                },
                "start": 1654,
                "end": 1696
              },
              "start": 1650,
              "end": 1696
            },
            "directive": null,
            "start": 1650,
            "end": 1697
          }
        ],
        "start": 1343,
        "end": 1699
      },
      "expression": false,
      "start": 1329,
      "end": 1699
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1710,
        "end": 1712
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 1713,
              "end": 1714
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1723,
              "end": 1729
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1713,
            "end": 1729
          }
        ],
        "start": 1712,
        "end": 1730
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
              "type": "TSStringKeyword",
              "start": 1734,
              "end": 1740
            },
            "start": 1732,
            "end": 1740
          },
          "start": 1731,
          "end": 1740
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1745,
              "end": 1751
            },
            "start": 1743,
            "end": 1751
          },
          "start": 1742,
          "end": 1751
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1756,
              "end": 1763
            },
            "start": 1754,
            "end": 1763
          },
          "start": 1753,
          "end": 1763
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 1768,
                "end": 1769
              },
              "typeArguments": null,
              "start": 1768,
              "end": 1769
            },
            "start": 1766,
            "end": 1769
          },
          "start": 1765,
          "end": 1769
        }
      ],
      "returnType": null,
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
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": false,
                          "start": 1784,
                          "end": 1788
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": true,
                          "start": 1794,
                          "end": 1797
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1788,
                          "end": 1794
                        }
                      ],
                      "start": 1784,
                      "end": 1797
                    },
                    "start": 1782,
                    "end": 1797
                  },
                  "start": 1781,
                  "end": 1797
                },
                "init": null,
                "definite": false,
                "start": 1781,
                "end": 1797
              }
            ],
            "declare": false,
            "start": 1777,
            "end": 1798
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1803,
                "end": 1804
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1807,
                "end": 1814
              },
              "start": 1803,
              "end": 1814
            },
            "directive": null,
            "start": 1803,
            "end": 1815
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1830,
                "end": 1831
              },
              "right": {
                "type": "Literal",
                "value": "*hello*",
                "raw": "'*hello*'",
                "start": 1834,
                "end": 1843
              },
              "start": 1830,
              "end": 1843
            },
            "directive": null,
            "start": 1830,
            "end": 1844
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1849,
                "end": 1850
              },
              "right": {
                "type": "Literal",
                "value": "**hello**",
                "raw": "'**hello**'",
                "start": 1853,
                "end": 1864
              },
              "start": 1849,
              "end": 1864
            },
            "directive": null,
            "start": 1849,
            "end": 1865
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1870,
                "end": 1871
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 1874,
                      "end": 1878
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 1879,
                      "end": 1882
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1878,
                      "end": 1879
                    }
                  ],
                  "start": 1874,
                  "end": 1882
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1886,
                    "end": 1891
                  },
                  "typeArguments": null,
                  "start": 1886,
                  "end": 1891
                },
                "start": 1874,
                "end": 1891
              },
              "start": 1870,
              "end": 1891
            },
            "directive": null,
            "start": 1870,
            "end": 1892
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1897,
                "end": 1898
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 1901,
                      "end": 1905
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 1906,
                      "end": 1909
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1905,
                      "end": 1906
                    }
                  ],
                  "start": 1901,
                  "end": 1909
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1913,
                    "end": 1918
                  },
                  "typeArguments": null,
                  "start": 1913,
                  "end": 1918
                },
                "start": 1901,
                "end": 1918
              },
              "start": 1897,
              "end": 1918
            },
            "directive": null,
            "start": 1897,
            "end": 1919
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1925
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 1928,
                      "end": 1932
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 1933,
                      "end": 1936
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1932,
                      "end": 1933
                    }
                  ],
                  "start": 1928,
                  "end": 1936
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1940,
                    "end": 1945
                  },
                  "typeArguments": null,
                  "start": 1940,
                  "end": 1945
                },
                "start": 1928,
                "end": 1945
              },
              "start": 1924,
              "end": 1945
            },
            "directive": null,
            "start": 1924,
            "end": 1946
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1951,
                "end": 1952
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 1955,
                      "end": 1959
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 1960,
                      "end": 1963
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1959,
                      "end": 1960
                    }
                  ],
                  "start": 1955,
                  "end": 1963
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1967,
                    "end": 1972
                  },
                  "typeArguments": null,
                  "start": 1967,
                  "end": 1972
                },
                "start": 1955,
                "end": 1972
              },
              "start": 1951,
              "end": 1972
            },
            "directive": null,
            "start": 1951,
            "end": 1973
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1978,
                "end": 1979
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "**",
                        "cooked": "**"
                      },
                      "tail": false,
                      "start": 1982,
                      "end": 1987
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "**",
                        "cooked": "**"
                      },
                      "tail": true,
                      "start": 1988,
                      "end": 1992
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1987,
                      "end": 1988
                    }
                  ],
                  "start": 1982,
                  "end": 1992
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1996,
                    "end": 2001
                  },
                  "typeArguments": null,
                  "start": 1996,
                  "end": 2001
                },
                "start": 1982,
                "end": 2001
              },
              "start": 1978,
              "end": 2001
            },
            "directive": null,
            "start": 1978,
            "end": 2002
          }
        ],
        "start": 1771,
        "end": 2004
      },
      "expression": false,
      "start": 1701,
      "end": 2004
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2015,
        "end": 2017
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 2018,
              "end": 2019
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2028,
              "end": 2034
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2018,
            "end": 2034
          }
        ],
        "start": 2017,
        "end": 2035
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
              "type": "TSStringKeyword",
              "start": 2039,
              "end": 2045
            },
            "start": 2037,
            "end": 2045
          },
          "start": 2036,
          "end": 2045
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2050,
              "end": 2056
            },
            "start": 2048,
            "end": 2056
          },
          "start": 2047,
          "end": 2056
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2061,
              "end": 2068
            },
            "start": 2059,
            "end": 2068
          },
          "start": 2058,
          "end": 2068
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 2073,
                "end": 2074
              },
              "typeArguments": null,
              "start": 2073,
              "end": 2074
            },
            "start": 2071,
            "end": 2074
          },
          "start": 2070,
          "end": 2074
        }
      ],
      "returnType": null,
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
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": false,
                          "start": 2089,
                          "end": 2093
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": true,
                          "start": 2099,
                          "end": 2102
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2093,
                          "end": 2099
                        }
                      ],
                      "start": 2089,
                      "end": 2102
                    },
                    "start": 2087,
                    "end": 2102
                  },
                  "start": 2086,
                  "end": 2102
                },
                "init": null,
                "definite": false,
                "start": 2086,
                "end": 2102
              }
            ],
            "declare": false,
            "start": 2082,
            "end": 2103
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2108,
                "end": 2109
              },
              "right": {
                "type": "Literal",
                "value": "123",
                "raw": "'123'",
                "start": 2112,
                "end": 2117
              },
              "start": 2108,
              "end": 2117
            },
            "directive": null,
            "start": 2108,
            "end": 2118
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2133,
                "end": 2134
              },
              "right": {
                "type": "Literal",
                "value": "*123*",
                "raw": "'*123*'",
                "start": 2137,
                "end": 2144
              },
              "start": 2133,
              "end": 2144
            },
            "directive": null,
            "start": 2133,
            "end": 2145
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2150,
                "end": 2151
              },
              "right": {
                "type": "Literal",
                "value": "**123**",
                "raw": "'**123**'",
                "start": 2154,
                "end": 2163
              },
              "start": 2150,
              "end": 2163
            },
            "directive": null,
            "start": 2150,
            "end": 2164
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2179,
                "end": 2180
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 2183,
                      "end": 2187
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 2188,
                      "end": 2191
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2187,
                      "end": 2188
                    }
                  ],
                  "start": 2183,
                  "end": 2191
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2195,
                    "end": 2200
                  },
                  "typeArguments": null,
                  "start": 2195,
                  "end": 2200
                },
                "start": 2183,
                "end": 2200
              },
              "start": 2179,
              "end": 2200
            },
            "directive": null,
            "start": 2179,
            "end": 2201
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2217
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 2220,
                      "end": 2224
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 2225,
                      "end": 2228
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2224,
                      "end": 2225
                    }
                  ],
                  "start": 2220,
                  "end": 2228
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2232,
                    "end": 2237
                  },
                  "typeArguments": null,
                  "start": 2232,
                  "end": 2237
                },
                "start": 2220,
                "end": 2237
              },
              "start": 2216,
              "end": 2237
            },
            "directive": null,
            "start": 2216,
            "end": 2238
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2243,
                "end": 2244
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 2247,
                      "end": 2251
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 2252,
                      "end": 2255
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2251,
                      "end": 2252
                    }
                  ],
                  "start": 2247,
                  "end": 2255
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2259,
                    "end": 2264
                  },
                  "typeArguments": null,
                  "start": 2259,
                  "end": 2264
                },
                "start": 2247,
                "end": 2264
              },
              "start": 2243,
              "end": 2264
            },
            "directive": null,
            "start": 2243,
            "end": 2265
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2280,
                "end": 2281
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 2284,
                      "end": 2288
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 2289,
                      "end": 2292
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2288,
                      "end": 2289
                    }
                  ],
                  "start": 2284,
                  "end": 2292
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2296,
                    "end": 2301
                  },
                  "typeArguments": null,
                  "start": 2296,
                  "end": 2301
                },
                "start": 2284,
                "end": 2301
              },
              "start": 2280,
              "end": 2301
            },
            "directive": null,
            "start": 2280,
            "end": 2302
          }
        ],
        "start": 2076,
        "end": 2304
      },
      "expression": false,
      "start": 2006,
      "end": 2304
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 2333,
        "end": 2334
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
              "start": 2335,
              "end": 2336
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2335,
            "end": 2336
          }
        ],
        "start": 2334,
        "end": 2337
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2340,
            "end": 2341
          },
          "typeArguments": null,
          "start": 2340,
          "end": 2341
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2350,
              "end": 2353
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 2360,
              "end": 2364
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2371,
              "end": 2373
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2359,
                  "end": 2360
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2359,
                "end": 2360
              },
              "start": 2353,
              "end": 2360
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2370,
                  "end": 2371
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2370,
                "end": 2371
              },
              "start": 2364,
              "end": 2371
            }
          ],
          "start": 2350,
          "end": 2373
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2376,
                "end": 2377
              },
              "typeArguments": null,
              "start": 2376,
              "end": 2377
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2380,
                "end": 2381
              },
              "typeArguments": null,
              "start": 2380,
              "end": 2381
            }
          ],
          "start": 2376,
          "end": 2381
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2384,
          "end": 2389
        },
        "start": 2340,
        "end": 2389
      },
      "declare": false,
      "start": 2328,
      "end": 2389
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 2395,
        "end": 2396
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 2399,
          "end": 2400
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "test.1024",
                      "cooked": "test.1024"
                    },
                    "tail": true,
                    "start": 2401,
                    "end": 2412
                  }
                ],
                "expressions": [],
                "start": 2401,
                "end": 2412
              },
              "start": 2401,
              "end": 2412
            }
          ],
          "start": 2400,
          "end": 2413
        },
        "start": 2399,
        "end": 2413
      },
      "declare": false,
      "start": 2390,
      "end": 2414
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2440,
        "end": 2441
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 2444,
          "end": 2445
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false,
                  "start": 2446,
                  "end": 2454
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2460,
                  "end": 2462
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2454,
                  "end": 2460
                }
              ],
              "start": 2446,
              "end": 2462
            }
          ],
          "start": 2445,
          "end": 2463
        },
        "start": 2444,
        "end": 2463
      },
      "declare": false,
      "start": 2435,
      "end": 2464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 2496,
        "end": 2497
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
              "start": 2498,
              "end": 2499
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2498,
            "end": 2499
          }
        ],
        "start": 2497,
        "end": 2500
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2503,
            "end": 2504
          },
          "typeArguments": null,
          "start": 2503,
          "end": 2504
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2513,
              "end": 2516
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 2523,
              "end": 2527
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2533,
              "end": 2535
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2522,
                  "end": 2523
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2522,
                "end": 2523
              },
              "start": 2516,
              "end": 2523
            },
            {
              "type": "TSNumberKeyword",
              "start": 2527,
              "end": 2533
            }
          ],
          "start": 2513,
          "end": 2535
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2538,
            "end": 2539
          },
          "typeArguments": null,
          "start": 2538,
          "end": 2539
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2542,
          "end": 2547
        },
        "start": 2503,
        "end": 2547
      },
      "declare": false,
      "start": 2491,
      "end": 2547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 2553,
        "end": 2554
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 2557,
          "end": 2558
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "test.1024",
                      "cooked": "test.1024"
                    },
                    "tail": true,
                    "start": 2559,
                    "end": 2570
                  }
                ],
                "expressions": [],
                "start": 2559,
                "end": 2570
              },
              "start": 2559,
              "end": 2570
            }
          ],
          "start": 2558,
          "end": 2571
        },
        "start": 2557,
        "end": 2571
      },
      "declare": false,
      "start": 2548,
      "end": 2572
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 2589,
        "end": 2590
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 2593,
          "end": 2594
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false,
                  "start": 2595,
                  "end": 2603
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2609,
                  "end": 2611
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2603,
                  "end": 2609
                }
              ],
              "start": 2595,
              "end": 2611
            }
          ],
          "start": 2594,
          "end": 2612
        },
        "start": 2593,
        "end": 2612
      },
      "declare": false,
      "start": 2584,
      "end": 2613
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 2631,
        "end": 2632
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
              "start": 2633,
              "end": 2634
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2633,
            "end": 2634
          }
        ],
        "start": 2632,
        "end": 2635
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2638,
            "end": 2639
          },
          "typeArguments": null,
          "start": 2638,
          "end": 2639
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2648,
              "end": 2651
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 2658,
              "end": 2662
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2669,
              "end": 2671
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2657,
                  "end": 2658
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2657,
                "end": 2658
              },
              "start": 2651,
              "end": 2658
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2668,
                  "end": 2669
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2668,
                "end": 2669
              },
              "start": 2662,
              "end": 2669
            }
          ],
          "start": 2648,
          "end": 2671
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2674,
                "end": 2675
              },
              "typeArguments": null,
              "start": 2674,
              "end": 2675
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2678,
                "end": 2679
              },
              "typeArguments": null,
              "start": 2678,
              "end": 2679
            }
          ],
          "start": 2674,
          "end": 2679
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2682,
          "end": 2687
        },
        "start": 2638,
        "end": 2687
      },
      "declare": false,
      "start": 2626,
      "end": 2687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 2693,
        "end": 2694
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2697,
          "end": 2698
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "test.hoge",
                      "cooked": "test.hoge"
                    },
                    "tail": true,
                    "start": 2699,
                    "end": 2710
                  }
                ],
                "expressions": [],
                "start": 2699,
                "end": 2710
              },
              "start": 2699,
              "end": 2710
            }
          ],
          "start": 2698,
          "end": 2711
        },
        "start": 2697,
        "end": 2711
      },
      "declare": false,
      "start": 2688,
      "end": 2712
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 2738,
        "end": 2739
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2742,
          "end": 2743
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false,
                  "start": 2744,
                  "end": 2752
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2758,
                  "end": 2760
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2752,
                  "end": 2758
                }
              ],
              "start": 2744,
              "end": 2760
            }
          ],
          "start": 2743,
          "end": 2761
        },
        "start": 2742,
        "end": 2761
      },
      "declare": false,
      "start": 2733,
      "end": 2762
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null,
        "start": 2816,
        "end": 2817
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
              "start": 2818,
              "end": 2819
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2818,
            "end": 2819
          }
        ],
        "start": 2817,
        "end": 2820
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2823,
            "end": 2824
          },
          "typeArguments": null,
          "start": 2823,
          "end": 2824
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2833,
              "end": 2836
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 2843,
              "end": 2847
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2853,
              "end": 2855
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2842,
                  "end": 2843
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2842,
                "end": 2843
              },
              "start": 2836,
              "end": 2843
            },
            {
              "type": "TSStringKeyword",
              "start": 2847,
              "end": 2853
            }
          ],
          "start": 2833,
          "end": 2855
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2858,
            "end": 2859
          },
          "typeArguments": null,
          "start": 2858,
          "end": 2859
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2862,
          "end": 2867
        },
        "start": 2823,
        "end": 2867
      },
      "declare": false,
      "start": 2811,
      "end": 2867
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 2873,
        "end": 2874
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null,
          "start": 2877,
          "end": 2878
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "test.hoge",
                      "cooked": "test.hoge"
                    },
                    "tail": true,
                    "start": 2879,
                    "end": 2890
                  }
                ],
                "expressions": [],
                "start": 2879,
                "end": 2890
              },
              "start": 2879,
              "end": 2890
            }
          ],
          "start": 2878,
          "end": 2891
        },
        "start": 2877,
        "end": 2891
      },
      "declare": false,
      "start": 2868,
      "end": 2892
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null,
        "start": 2909,
        "end": 2910
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null,
          "start": 2913,
          "end": 2914
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false,
                  "start": 2915,
                  "end": 2923
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2929,
                  "end": 2931
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2923,
                  "end": 2929
                }
              ],
              "start": 2915,
              "end": 2931
            }
          ],
          "start": 2914,
          "end": 2932
        },
        "start": 2913,
        "end": 2932
      },
      "declare": false,
      "start": 2904,
      "end": 2933
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Templated",
        "optional": false,
        "typeAnnotation": null,
        "start": 2974,
        "end": 2983
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
            "start": 2986,
            "end": 2989
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 2995,
            "end": 2999
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 3005,
            "end": 3007
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2989,
            "end": 2995
          },
          {
            "type": "TSStringKeyword",
            "start": 2999,
            "end": 3005
          }
        ],
        "start": 2986,
        "end": 3007
      },
      "declare": false,
      "start": 2969,
      "end": 3008
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3024,
                "end": 3030
              },
              "start": 3022,
              "end": 3030
            },
            "start": 3016,
            "end": 3030
          },
          "init": {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 3033,
            "end": 3038
          },
          "definite": false,
          "start": 3016,
          "end": 3038
        }
      ],
      "declare": false,
      "start": 3010,
      "end": 3039
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "templated1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Templated",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3058,
                  "end": 3067
                },
                "typeArguments": null,
                "start": 3058,
                "end": 3067
              },
              "start": 3056,
              "end": 3067
            },
            "start": 3046,
            "end": 3067
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3070,
                  "end": 3073
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " abc",
                    "cooked": " abc"
                  },
                  "tail": true,
                  "start": 3079,
                  "end": 3085
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3073,
                  "end": 3079
                }
              ],
              "start": 3070,
              "end": 3085
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 3089,
                "end": 3094
              },
              "typeArguments": null,
              "start": 3089,
              "end": 3094
            },
            "start": 3070,
            "end": 3094
          },
          "definite": false,
          "start": 3046,
          "end": 3094
        }
      ],
      "declare": false,
      "start": 3040,
      "end": 3095
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3180,
            "end": 3186
          },
          "init": {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 3189,
            "end": 3194
          },
          "definite": false,
          "start": 3180,
          "end": 3194
        }
      ],
      "declare": false,
      "start": 3174,
      "end": 3195
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "templated2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Templated",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3214,
                  "end": 3223
                },
                "typeArguments": null,
                "start": 3214,
                "end": 3223
              },
              "start": 3212,
              "end": 3223
            },
            "start": 3202,
            "end": 3223
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3226,
                  "end": 3229
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " abc",
                    "cooked": " abc"
                  },
                  "tail": true,
                  "start": 3235,
                  "end": 3241
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3229,
                  "end": 3235
                }
              ],
              "start": 3226,
              "end": 3241
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 3245,
                "end": 3250
              },
              "typeArguments": null,
              "start": 3245,
              "end": 3250
            },
            "start": 3226,
            "end": 3250
          },
          "definite": false,
          "start": 3202,
          "end": 3250
        }
      ],
      "declare": false,
      "start": 3196,
      "end": 3251
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prefixes",
        "optional": false,
        "typeAnnotation": null,
        "start": 3280,
        "end": 3288
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 3291,
              "end": 3296
            },
            "start": 3291,
            "end": 3296
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 3299,
              "end": 3304
            },
            "start": 3299,
            "end": 3304
          }
        ],
        "start": 3291,
        "end": 3304
      },
      "declare": false,
      "start": 3275,
      "end": 3305
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllPrefixData",
        "optional": false,
        "typeAnnotation": null,
        "start": 3312,
        "end": 3325
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo:baz",
              "raw": "\"foo:baz\"",
              "start": 3328,
              "end": 3337
            },
            "start": 3328,
            "end": 3337
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar:baz",
              "raw": "\"bar:baz\"",
              "start": 3340,
              "end": 3349
            },
            "start": 3340,
            "end": 3349
          }
        ],
        "start": 3328,
        "end": 3349
      },
      "declare": false,
      "start": 3307,
      "end": 3350
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrefixData",
        "optional": false,
        "typeAnnotation": null,
        "start": 3357,
        "end": 3367
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3368,
              "end": 3369
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prefixes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3378,
                "end": 3386
              },
              "typeArguments": null,
              "start": 3378,
              "end": 3386
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3368,
            "end": 3386
          }
        ],
        "start": 3367,
        "end": 3387
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
            "start": 3390,
            "end": 3393
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": ":baz",
              "cooked": ":baz"
            },
            "tail": true,
            "start": 3394,
            "end": 3400
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3393,
              "end": 3394
            },
            "typeArguments": null,
            "start": 3393,
            "end": 3394
          }
        ],
        "start": 3390,
        "end": 3400
      },
      "declare": false,
      "start": 3352,
      "end": 3401
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "typeAnnotation": null,
        "start": 3413,
        "end": 3418
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3419,
              "end": 3420
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prefixes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3429,
                "end": 3437
              },
              "typeArguments": null,
              "start": 3429,
              "end": 3437
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3419,
            "end": 3437
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 3439,
              "end": 3440
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllPrefixData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3449,
                "end": 3462
              },
              "typeArguments": null,
              "start": 3449,
              "end": 3462
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrefixData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3465,
                "end": 3475
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3476,
                      "end": 3477
                    },
                    "typeArguments": null,
                    "start": 3476,
                    "end": 3477
                  }
                ],
                "start": 3475,
                "end": 3478
              },
              "start": 3465,
              "end": 3478
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3439,
            "end": 3478
          }
        ],
        "start": 3418,
        "end": 3479
      },
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
              "name": "blah",
              "optional": false,
              "typeAnnotation": null,
              "start": 3486,
              "end": 3490
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3492,
                "end": 3498
              },
              "start": 3490,
              "end": 3498
            },
            "accessibility": null,
            "static": false,
            "start": 3486,
            "end": 3499
          }
        ],
        "start": 3480,
        "end": 3501
      },
      "declare": false,
      "start": 3403,
      "end": 3501
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 3530,
        "end": 3536
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3541,
              "end": 3542
            },
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3546,
                      "end": 3547
                    },
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3551,
                              "end": 3552
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3554,
                                "end": 3560
                              },
                              "start": 3552,
                              "end": 3560
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3551,
                            "end": 3560
                          }
                        ],
                        "start": 3549,
                        "end": 3562
                      },
                      "start": 3547,
                      "end": 3562
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3546,
                    "end": 3562
                  }
                ],
                "start": 3544,
                "end": 3564
              },
              "start": 3542,
              "end": 3564
            },
            "accessibility": null,
            "static": false,
            "start": 3541,
            "end": 3564
          }
        ],
        "start": 3539,
        "end": 3566
      },
      "declare": false,
      "start": 3525,
      "end": 3567
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "chain",
        "optional": false,
        "typeAnnotation": null,
        "start": 3586,
        "end": 3591
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 3592,
              "end": 3593
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3608,
                  "end": 3614
                },
                "typeArguments": null,
                "start": 3608,
                "end": 3614
              },
              "start": 3602,
              "end": 3614
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3592,
            "end": 3614
          }
        ],
        "start": 3591,
        "end": 3615
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3623,
                    "end": 3624
                  },
                  "typeArguments": null,
                  "start": 3623,
                  "end": 3624
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 3627,
                      "end": 3630
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 3631,
                      "end": 3635
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 3636,
                      "end": 3638
                    }
                  ],
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3630,
                        "end": 3631
                      },
                      "typeArguments": null,
                      "start": 3630,
                      "end": 3631
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3635,
                        "end": 3636
                      },
                      "typeArguments": null,
                      "start": 3635,
                      "end": 3636
                    }
                  ],
                  "start": 3627,
                  "end": 3638
                }
              ],
              "start": 3623,
              "end": 3638
            },
            "start": 3621,
            "end": 3638
          },
          "start": 3616,
          "end": 3638
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3641,
          "end": 3645
        },
        "start": 3639,
        "end": 3645
      },
      "body": null,
      "expression": false,
      "start": 3569,
      "end": 3646
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "chain",
          "optional": false,
          "typeAnnotation": null,
          "start": 3648,
          "end": 3653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 3654,
            "end": 3657
          }
        ],
        "optional": false,
        "start": 3648,
        "end": 3658
      },
      "directive": null,
      "start": 3648,
      "end": 3659
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3692,
        "end": 3695
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
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 3699,
                  "end": 3706
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3712,
                  "end": 3714
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3706,
                  "end": 3712
                }
              ],
              "start": 3699,
              "end": 3714
            },
            "start": 3697,
            "end": 3714
          },
          "start": 3696,
          "end": 3714
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 3719,
                  "end": 3722
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true,
                  "start": 3728,
                  "end": 3734
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3722,
                  "end": 3728
                }
              ],
              "start": 3719,
              "end": 3734
            },
            "start": 3717,
            "end": 3734
          },
          "start": 3716,
          "end": 3734
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "baz-",
                    "cooked": "baz-"
                  },
                  "tail": false,
                  "start": 3739,
                  "end": 3746
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3752,
                  "end": 3754
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3746,
                  "end": 3752
                }
              ],
              "start": 3739,
              "end": 3754
            },
            "start": 3737,
            "end": 3754
          },
          "start": 3736,
          "end": 3754
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3766,
                "end": 3767
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3772,
                "end": 3773
              },
              "start": 3766,
              "end": 3773
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3785,
                    "end": 3786
                  },
                  "directive": null,
                  "start": 3785,
                  "end": 3787
                }
              ],
              "start": 3775,
              "end": 3813
            },
            "alternate": null,
            "start": 3762,
            "end": 3813
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3822,
                "end": 3823
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 3828,
                "end": 3829
              },
              "start": 3822,
              "end": 3829
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3831,
              "end": 3848
            },
            "alternate": null,
            "start": 3818,
            "end": 3848
          }
        ],
        "start": 3756,
        "end": 3850
      },
      "expression": false,
      "start": 3683,
      "end": 3850
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3861,
        "end": 3864
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 3865,
              "end": 3866
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3875,
              "end": 3881
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3865,
            "end": 3881
          }
        ],
        "start": 3864,
        "end": 3882
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
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 3886,
                  "end": 3893
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3894,
                  "end": 3896
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3893,
                    "end": 3894
                  },
                  "typeArguments": null,
                  "start": 3893,
                  "end": 3894
                }
              ],
              "start": 3886,
              "end": 3896
            },
            "start": 3884,
            "end": 3896
          },
          "start": 3883,
          "end": 3896
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 3901,
                  "end": 3904
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true,
                  "start": 3905,
                  "end": 3911
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3904,
                    "end": 3905
                  },
                  "typeArguments": null,
                  "start": 3904,
                  "end": 3905
                }
              ],
              "start": 3901,
              "end": 3911
            },
            "start": 3899,
            "end": 3911
          },
          "start": 3898,
          "end": 3911
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "baz-",
                    "cooked": "baz-"
                  },
                  "tail": false,
                  "start": 3916,
                  "end": 3923
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3924,
                  "end": 3926
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3923,
                    "end": 3924
                  },
                  "typeArguments": null,
                  "start": 3923,
                  "end": 3924
                }
              ],
              "start": 3916,
              "end": 3926
            },
            "start": 3914,
            "end": 3926
          },
          "start": 3913,
          "end": 3926
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3938,
                "end": 3939
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3944,
                "end": 3945
              },
              "start": 3938,
              "end": 3945
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3957,
                    "end": 3958
                  },
                  "directive": null,
                  "start": 3957,
                  "end": 3959
                }
              ],
              "start": 3947,
              "end": 3980
            },
            "alternate": null,
            "start": 3934,
            "end": 3980
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3989,
                "end": 3990
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 3995,
                "end": 3996
              },
              "start": 3989,
              "end": 3996
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3998,
              "end": 4015
            },
            "alternate": null,
            "start": 3985,
            "end": 4015
          }
        ],
        "start": 3928,
        "end": 4017
      },
      "expression": false,
      "start": 3852,
      "end": 4017
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4028,
        "end": 4031
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
              "type": "TSStringKeyword",
              "start": 4035,
              "end": 4041
            },
            "start": 4033,
            "end": 4041
          },
          "start": 4032,
          "end": 4041
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "foo-",
                        "cooked": "foo-"
                      },
                      "tail": false,
                      "start": 4046,
                      "end": 4053
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 4059,
                      "end": 4061
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4053,
                      "end": 4059
                    }
                  ],
                  "start": 4046,
                  "end": 4061
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 4064,
                    "end": 4069
                  },
                  "start": 4064,
                  "end": 4069
                }
              ],
              "start": 4046,
              "end": 4069
            },
            "start": 4044,
            "end": 4069
          },
          "start": 4043,
          "end": 4069
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4081,
                "end": 4082
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4087,
                "end": 4088
              },
              "start": 4081,
              "end": 4088
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4100,
                    "end": 4101
                  },
                  "directive": null,
                  "start": 4100,
                  "end": 4102
                }
              ],
              "start": 4090,
              "end": 4136
            },
            "alternate": null,
            "start": 4077,
            "end": 4136
          }
        ],
        "start": 4071,
        "end": 4138
      },
      "expression": false,
      "start": 4019,
      "end": 4138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff4",
        "optional": false,
        "typeAnnotation": null,
        "start": 4149,
        "end": 4152
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
              "type": "TSStringKeyword",
              "start": 4156,
              "end": 4162
            },
            "start": 4154,
            "end": 4162
          },
          "start": 4153,
          "end": 4162
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 4167,
                  "end": 4174
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4180,
                  "end": 4182
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4174,
                  "end": 4180
                }
              ],
              "start": 4167,
              "end": 4182
            },
            "start": 4165,
            "end": 4182
          },
          "start": 4164,
          "end": 4182
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4194,
                "end": 4195
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo-test",
                "raw": "'foo-test'",
                "start": 4200,
                "end": 4210
              },
              "start": 4194,
              "end": 4210
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4222,
                    "end": 4223
                  },
                  "directive": null,
                  "start": 4222,
                  "end": 4224
                }
              ],
              "start": 4212,
              "end": 4245
            },
            "alternate": null,
            "start": 4190,
            "end": 4245
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4254,
                "end": 4255
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo-test",
                "raw": "'foo-test'",
                "start": 4260,
                "end": 4270
              },
              "start": 4254,
              "end": 4270
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4282,
                    "end": 4283
                  },
                  "directive": null,
                  "start": 4282,
                  "end": 4284
                }
              ],
              "start": 4272,
              "end": 4305
            },
            "alternate": null,
            "start": 4250,
            "end": 4305
          }
        ],
        "start": 4184,
        "end": 4307
      },
      "expression": false,
      "start": 4140,
      "end": 4307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 4336,
        "end": 4342
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4353,
                  "end": 4357
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 4359,
                        "end": 4362
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_REQUEST",
                          "cooked": "_REQUEST"
                        },
                        "tail": true,
                        "start": 4368,
                        "end": 4378
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4362,
                        "end": 4368
                      }
                    ],
                    "start": 4359,
                    "end": 4378
                  },
                  "start": 4357,
                  "end": 4378
                },
                "accessibility": null,
                "static": false,
                "start": 4353,
                "end": 4378
              }
            ],
            "start": 4351,
            "end": 4380
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4389,
                  "end": 4393
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 4395,
                        "end": 4398
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_SUCCESS",
                          "cooked": "_SUCCESS"
                        },
                        "tail": true,
                        "start": 4404,
                        "end": 4414
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4398,
                        "end": 4404
                      }
                    ],
                    "start": 4395,
                    "end": 4414
                  },
                  "start": 4393,
                  "end": 4414
                },
                "accessibility": null,
                "static": false,
                "start": 4389,
                "end": 4415
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "response",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4416,
                  "end": 4424
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4426,
                    "end": 4432
                  },
                  "start": 4424,
                  "end": 4432
                },
                "accessibility": null,
                "static": false,
                "start": 4416,
                "end": 4432
              }
            ],
            "start": 4387,
            "end": 4434
          }
        ],
        "start": 4349,
        "end": 4434
      },
      "declare": false,
      "start": 4331,
      "end": 4435
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reducer",
        "optional": false,
        "typeAnnotation": null,
        "start": 4446,
        "end": 4453
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 4462,
                "end": 4468
              },
              "typeArguments": null,
              "start": 4462,
              "end": 4468
            },
            "start": 4460,
            "end": 4468
          },
          "start": 4454,
          "end": 4468
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4480,
                  "end": 4486
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4487,
                  "end": 4491
                },
                "optional": false,
                "computed": false,
                "start": 4480,
                "end": 4491
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "FOO_SUCCESS",
                "raw": "'FOO_SUCCESS'",
                "start": 4496,
                "end": 4509
              },
              "start": 4480,
              "end": 4509
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4521,
                      "end": 4527
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4528,
                      "end": 4532
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4521,
                    "end": 4532
                  },
                  "directive": null,
                  "start": 4521,
                  "end": 4533
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4542,
                      "end": 4548
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4549,
                      "end": 4557
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4542,
                    "end": 4557
                  },
                  "directive": null,
                  "start": 4542,
                  "end": 4558
                }
              ],
              "start": 4511,
              "end": 4564
            },
            "alternate": null,
            "start": 4476,
            "end": 4564
          }
        ],
        "start": 4470,
        "end": 4566
      },
      "expression": false,
      "start": 4437,
      "end": 4566
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DotString",
        "optional": false,
        "typeAnnotation": null,
        "start": 4595,
        "end": 4604
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
            "start": 4607,
            "end": 4610
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": ".",
              "cooked": "."
            },
            "tail": false,
            "start": 4616,
            "end": 4620
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": ".",
              "cooked": "."
            },
            "tail": false,
            "start": 4626,
            "end": 4630
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 4636,
            "end": 4638
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 4610,
            "end": 4616
          },
          {
            "type": "TSStringKeyword",
            "start": 4620,
            "end": 4626
          },
          {
            "type": "TSStringKeyword",
            "start": 4630,
            "end": 4636
          }
        ],
        "start": 4607,
        "end": 4638
      },
      "declare": false,
      "start": 4590,
      "end": 4639
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noSpread",
        "optional": false,
        "typeAnnotation": null,
        "start": 4658,
        "end": 4666
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 4667,
              "end": 4668
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DotString",
                "optional": false,
                "typeAnnotation": null,
                "start": 4677,
                "end": 4686
              },
              "typeArguments": null,
              "start": 4677,
              "end": 4686
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4667,
            "end": 4686
          }
        ],
        "start": 4666,
        "end": 4687
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4694,
                  "end": 4695
                },
                "typeArguments": null,
                "start": 4694,
                "end": 4695
              },
              "start": 4694,
              "end": 4697
            },
            "start": 4692,
            "end": 4697
          },
          "start": 4688,
          "end": 4697
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4700,
            "end": 4701
          },
          "typeArguments": null,
          "start": 4700,
          "end": 4701
        },
        "start": 4698,
        "end": 4701
      },
      "body": null,
      "expression": false,
      "start": 4641,
      "end": 4702
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "spread",
        "optional": false,
        "typeAnnotation": null,
        "start": 4720,
        "end": 4726
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 4727,
              "end": 4728
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DotString",
                "optional": false,
                "typeAnnotation": null,
                "start": 4737,
                "end": 4746
              },
              "typeArguments": null,
              "start": 4737,
              "end": 4746
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4727,
            "end": 4746
          }
        ],
        "start": 4726,
        "end": 4747
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4751,
            "end": 4755
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4757,
                  "end": 4758
                },
                "typeArguments": null,
                "start": 4757,
                "end": 4758
              },
              "start": 4757,
              "end": 4760
            },
            "start": 4755,
            "end": 4760
          },
          "value": null,
          "start": 4748,
          "end": 4760
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4763,
            "end": 4764
          },
          "typeArguments": null,
          "start": 4763,
          "end": 4764
        },
        "start": 4761,
        "end": 4764
      },
      "body": null,
      "expression": false,
      "start": 4703,
      "end": 4765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noSpread",
          "optional": false,
          "typeAnnotation": null,
          "start": 4767,
          "end": 4775
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false,
                    "start": 4777,
                    "end": 4782
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".3",
                      "cooked": ".3"
                    },
                    "tail": true,
                    "start": 4785,
                    "end": 4789
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": "2",
                    "raw": "'2'",
                    "start": 4782,
                    "end": 4785
                  }
                ],
                "start": 4777,
                "end": 4789
              },
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false,
                    "start": 4791,
                    "end": 4796
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".4",
                      "cooked": ".4"
                    },
                    "tail": true,
                    "start": 4799,
                    "end": 4803
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": "2",
                    "raw": "'2'",
                    "start": 4796,
                    "end": 4799
                  }
                ],
                "start": 4791,
                "end": 4803
              }
            ],
            "start": 4776,
            "end": 4804
          }
        ],
        "optional": false,
        "start": 4767,
        "end": 4805
      },
      "directive": null,
      "start": 4767,
      "end": 4806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noSpread",
          "optional": false,
          "typeAnnotation": null,
          "start": 4807,
          "end": 4815
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false,
                    "start": 4817,
                    "end": 4822
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".3",
                      "cooked": ".3"
                    },
                    "tail": true,
                    "start": 4835,
                    "end": 4839
                  }
                ],
                "expressions": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 4822,
                      "end": 4825
                    },
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4829,
                      "end": 4835
                    },
                    "start": 4822,
                    "end": 4835
                  }
                ],
                "start": 4817,
                "end": 4839
              },
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false,
                    "start": 4841,
                    "end": 4846
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".4",
                      "cooked": ".4"
                    },
                    "tail": true,
                    "start": 4859,
                    "end": 4863
                  }
                ],
                "expressions": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 4846,
                      "end": 4849
                    },
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4853,
                      "end": 4859
                    },
                    "start": 4846,
                    "end": 4859
                  }
                ],
                "start": 4841,
                "end": 4863
              }
            ],
            "start": 4816,
            "end": 4864
          }
        ],
        "optional": false,
        "start": 4807,
        "end": 4865
      },
      "directive": null,
      "start": 4807,
      "end": 4866
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null,
          "start": 4868,
          "end": 4874
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false,
                "start": 4875,
                "end": 4880
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ".3",
                  "cooked": ".3"
                },
                "tail": true,
                "start": 4883,
                "end": 4887
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": "2",
                "raw": "'2'",
                "start": 4880,
                "end": 4883
              }
            ],
            "start": 4875,
            "end": 4887
          },
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false,
                "start": 4889,
                "end": 4894
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ".4",
                  "cooked": ".4"
                },
                "tail": true,
                "start": 4897,
                "end": 4901
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": "2",
                "raw": "'2'",
                "start": 4894,
                "end": 4897
              }
            ],
            "start": 4889,
            "end": 4901
          }
        ],
        "optional": false,
        "start": 4868,
        "end": 4902
      },
      "directive": null,
      "start": 4868,
      "end": 4903
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null,
          "start": 4904,
          "end": 4910
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false,
                "start": 4911,
                "end": 4916
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ".3",
                  "cooked": ".3"
                },
                "tail": true,
                "start": 4929,
                "end": 4933
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "'2'",
                  "start": 4916,
                  "end": 4919
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4923,
                  "end": 4929
                },
                "start": 4916,
                "end": 4929
              }
            ],
            "start": 4911,
            "end": 4933
          },
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false,
                "start": 4935,
                "end": 4940
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ".4",
                  "cooked": ".4"
                },
                "tail": true,
                "start": 4953,
                "end": 4957
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "'2'",
                  "start": 4940,
                  "end": 4943
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4947,
                  "end": 4953
                },
                "start": 4940,
                "end": 4953
              }
            ],
            "start": 4935,
            "end": 4957
          }
        ],
        "optional": false,
        "start": 4904,
        "end": 4958
      },
      "directive": null,
      "start": 4904,
      "end": 4959
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4970,
        "end": 4973
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 4974,
              "end": 4975
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4984,
              "end": 4990
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4974,
            "end": 4990
          }
        ],
        "start": 4973,
        "end": 4991
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 4995,
                "end": 4996
              },
              "typeArguments": null,
              "start": 4995,
              "end": 4996
            },
            "start": 4993,
            "end": 4996
          },
          "start": 4992,
          "end": 4996
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 5001,
                "end": 5010
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5011,
                      "end": 5012
                    },
                    "typeArguments": null,
                    "start": 5011,
                    "end": 5012
                  }
                ],
                "start": 5010,
                "end": 5013
              },
              "start": 5001,
              "end": 5013
            },
            "start": 4999,
            "end": 5013
          },
          "start": 4998,
          "end": 5013
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 5019,
                "end": 5028
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "1.",
                          "cooked": "1."
                        },
                        "tail": false,
                        "start": 5029,
                        "end": 5034
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": ".3",
                          "cooked": ".3"
                        },
                        "tail": true,
                        "start": 5035,
                        "end": 5039
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5034,
                          "end": 5035
                        },
                        "typeArguments": null,
                        "start": 5034,
                        "end": 5035
                      }
                    ],
                    "start": 5029,
                    "end": 5039
                  }
                ],
                "start": 5028,
                "end": 5040
              },
              "start": 5019,
              "end": 5040
            },
            "start": 5017,
            "end": 5040
          },
          "start": 5015,
          "end": 5040
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 5046,
                "end": 5055
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "1.",
                          "cooked": "1."
                        },
                        "tail": false,
                        "start": 5056,
                        "end": 5061
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": ".4",
                          "cooked": ".4"
                        },
                        "tail": true,
                        "start": 5062,
                        "end": 5066
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5061,
                          "end": 5062
                        },
                        "typeArguments": null,
                        "start": 5061,
                        "end": 5062
                      }
                    ],
                    "start": 5056,
                    "end": 5066
                  }
                ],
                "start": 5055,
                "end": 5067
              },
              "start": 5046,
              "end": 5067
            },
            "start": 5044,
            "end": 5067
          },
          "start": 5042,
          "end": 5067
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null,
                "start": 5075,
                "end": 5081
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 5082,
                      "end": 5087
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".3",
                        "cooked": ".3"
                      },
                      "tail": true,
                      "start": 5088,
                      "end": 5092
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5087,
                      "end": 5088
                    }
                  ],
                  "start": 5082,
                  "end": 5092
                },
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 5094,
                      "end": 5099
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".4",
                        "cooked": ".4"
                      },
                      "tail": true,
                      "start": 5100,
                      "end": 5104
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5099,
                      "end": 5100
                    }
                  ],
                  "start": 5094,
                  "end": 5104
                }
              ],
              "optional": false,
              "start": 5075,
              "end": 5105
            },
            "directive": null,
            "start": 5075,
            "end": 5106
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null,
                "start": 5111,
                "end": 5117
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 5118,
                      "end": 5123
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".3",
                        "cooked": ".3"
                      },
                      "tail": true,
                      "start": 5124,
                      "end": 5128
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5123,
                      "end": 5124
                    }
                  ],
                  "start": 5118,
                  "end": 5128
                },
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 5130,
                      "end": 5135
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".4",
                        "cooked": ".4"
                      },
                      "tail": true,
                      "start": 5136,
                      "end": 5140
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5135,
                      "end": 5136
                    }
                  ],
                  "start": 5130,
                  "end": 5140
                }
              ],
              "optional": false,
              "start": 5111,
              "end": 5141
            },
            "directive": null,
            "start": 5111,
            "end": 5142
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null,
                "start": 5147,
                "end": 5153
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5154,
                  "end": 5156
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5158,
                  "end": 5160
                }
              ],
              "optional": false,
              "start": 5147,
              "end": 5161
            },
            "directive": null,
            "start": 5147,
            "end": 5162
          }
        ],
        "start": 5069,
        "end": 5164
      },
      "expression": false,
      "start": 4961,
      "end": 5164
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boom",
        "optional": false,
        "typeAnnotation": null,
        "start": 5193,
        "end": 5197
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 5200,
              "end": 5205
            },
            "start": 5200,
            "end": 5205
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "def",
              "raw": "'def'",
              "start": 5208,
              "end": 5213
            },
            "start": 5208,
            "end": 5213
          },
          {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": false,
                "start": 5216,
                "end": 5220
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 5226,
                "end": 5228
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 5220,
                "end": 5226
              }
            ],
            "start": 5216,
            "end": 5228
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 5231,
              "end": 5240
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 5241,
                  "end": 5247
                }
              ],
              "start": 5240,
              "end": 5248
            },
            "start": 5231,
            "end": 5248
          }
        ],
        "start": 5200,
        "end": 5248
      },
      "declare": false,
      "start": 5188,
      "end": 5249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 5282,
        "end": 5283
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 5284,
              "end": 5285
            },
            "constraint": {
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
                    "start": 5295,
                    "end": 5297
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5299,
                      "end": 5305
                    },
                    "start": 5297,
                    "end": 5305
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5295,
                  "end": 5305
                }
              ],
              "start": 5294,
              "end": 5306
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5284,
            "end": 5306
          }
        ],
        "start": 5283,
        "end": 5307
      },
      "params": [],
      "returnType": null,
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
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
                                  "start": 5329,
                                  "end": 5330
                                },
                                "typeArguments": null,
                                "start": 5329,
                                "end": 5330
                              },
                              "start": 5323,
                              "end": 5330
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 5333,
                              "end": 5339
                            }
                          ],
                          "start": 5323,
                          "end": 5339
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "-",
                                "cooked": "-"
                              },
                              "tail": false,
                              "start": 5342,
                              "end": 5346
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 5362,
                              "end": 5364
                            }
                          ],
                          "types": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
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
                                      "start": 5352,
                                      "end": 5353
                                    },
                                    "typeArguments": null,
                                    "start": 5352,
                                    "end": 5353
                                  },
                                  "start": 5346,
                                  "end": 5353
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 5356,
                                  "end": 5362
                                }
                              ],
                              "start": 5346,
                              "end": 5362
                            }
                          ],
                          "start": 5342,
                          "end": 5364
                        }
                      ],
                      "start": 5323,
                      "end": 5364
                    },
                    "start": 5321,
                    "end": 5364
                  },
                  "start": 5320,
                  "end": 5364
                },
                "init": null,
                "definite": false,
                "start": 5320,
                "end": 5364
              }
            ],
            "declare": false,
            "start": 5316,
            "end": 5365
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5370,
                "end": 5371
              },
              "right": {
                "type": "Literal",
                "value": "id",
                "raw": "\"id\"",
                "start": 5374,
                "end": 5378
              },
              "start": 5370,
              "end": 5378
            },
            "directive": null,
            "start": 5370,
            "end": 5379
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5384,
                "end": 5385
              },
              "right": {
                "type": "Literal",
                "value": "-id",
                "raw": "\"-id\"",
                "start": 5388,
                "end": 5393
              },
              "start": 5384,
              "end": 5393
            },
            "directive": null,
            "start": 5384,
            "end": 5394
          }
        ],
        "start": 5310,
        "end": 5396
      },
      "expression": false,
      "start": 5273,
      "end": 5396
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 66,
  "end": 5396
}
```
