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
        "name": "ZodType",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 32,
                      "end": 38
                    },
                    "start": 32,
                    "end": 38
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 41,
                      "end": 48
                    },
                    "start": 41,
                    "end": 48
                  }
                ],
                "start": 32,
                "end": 48
              },
              "start": 30,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 49
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              },
              "start": 58,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 52,
            "end": 64
          }
        ],
        "start": 18,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodString",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 87
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 103
          },
          "typeArguments": null,
          "start": 96,
          "end": 103
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 118,
                  "end": 125
                },
                "start": 118,
                "end": 125
              },
              "start": 116,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 108,
            "end": 126
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 137,
                "end": 143
              },
              "start": 135,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 144
          }
        ],
        "start": 104,
        "end": 146
      },
      "declare": false,
      "start": 68,
      "end": 146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 161
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 170
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 171,
              "end": 177
            },
            {
              "type": "TSAnyKeyword",
              "start": 179,
              "end": 182
            }
          ],
          "start": 170,
          "end": 183
        },
        "start": 164,
        "end": 183
      },
      "declare": false,
      "start": 148,
      "end": 184
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prettify",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 198
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
              "start": 199,
              "end": 200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 199,
            "end": 200
          }
        ],
        "start": 198,
        "end": 201
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
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
                  "start": 218,
                  "end": 219
                },
                "typeArguments": null,
                "start": 218,
                "end": 219
              },
              "start": 212,
              "end": 219
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                },
                "typeArguments": null,
                "start": 222,
                "end": 223
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
                },
                "typeArguments": null,
                "start": 224,
                "end": 225
              },
              "start": 222,
              "end": 226
            },
            "optional": false,
            "readonly": null,
            "start": 204,
            "end": 228
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 231,
            "end": 233
          }
        ],
        "start": 204,
        "end": 233
      },
      "declare": false,
      "start": 185,
      "end": 234
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 255
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 261
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 278
              },
              "typeArguments": null,
              "start": 270,
              "end": 278
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 278
          }
        ],
        "start": 255,
        "end": 279
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prettify",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 290
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Shape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 312,
                      "end": 317
                    },
                    "start": 306,
                    "end": 317
                  },
                  "nameType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 326
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 326
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 328
                        },
                        "typeArguments": null,
                        "start": 327,
                        "end": 328
                      },
                      "start": 321,
                      "end": 329
                    },
                    "extendsType": {
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
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 340,
                            "end": 348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "true",
                                "raw": "\"true\"",
                                "start": 350,
                                "end": 356
                              },
                              "start": 350,
                              "end": 356
                            },
                            "start": 348,
                            "end": 356
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 340,
                          "end": 356
                        }
                      ],
                      "start": 338,
                      "end": 358
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 367,
                        "end": 368
                      },
                      "typeArguments": null,
                      "start": 367,
                      "end": 368
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 377,
                      "end": 382
                    },
                    "start": 321,
                    "end": 382
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 386,
                          "end": 391
                        },
                        "typeArguments": null,
                        "start": 386,
                        "end": 391
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 393
                        },
                        "typeArguments": null,
                        "start": 392,
                        "end": 393
                      },
                      "start": 386,
                      "end": 394
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 395,
                        "end": 403
                      },
                      "start": 395,
                      "end": 403
                    },
                    "start": 386,
                    "end": 404
                  },
                  "optional": true,
                  "readonly": null,
                  "start": 294,
                  "end": 409
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Shape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 435
                      },
                      "typeArguments": null,
                      "start": 430,
                      "end": 435
                    },
                    "start": 424,
                    "end": 435
                  },
                  "nameType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 444
                        },
                        "typeArguments": null,
                        "start": 439,
                        "end": 444
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "typeArguments": null,
                        "start": 445,
                        "end": 446
                      },
                      "start": 439,
                      "end": 447
                    },
                    "extendsType": {
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
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 466
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "true",
                                "raw": "\"true\"",
                                "start": 468,
                                "end": 474
                              },
                              "start": 468,
                              "end": 474
                            },
                            "start": 466,
                            "end": 474
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 458,
                          "end": 474
                        }
                      ],
                      "start": 456,
                      "end": 476
                    },
                    "trueType": {
                      "type": "TSNeverKeyword",
                      "start": 485,
                      "end": 490
                    },
                    "falseType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 500
                      },
                      "typeArguments": null,
                      "start": 499,
                      "end": 500
                    },
                    "start": 439,
                    "end": 500
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 503,
                          "end": 508
                        },
                        "typeArguments": null,
                        "start": 503,
                        "end": 508
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 509,
                          "end": 510
                        },
                        "typeArguments": null,
                        "start": 509,
                        "end": 510
                      },
                      "start": 503,
                      "end": 511
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 512,
                        "end": 520
                      },
                      "start": 512,
                      "end": 520
                    },
                    "start": 503,
                    "end": 521
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 412,
                  "end": 526
                }
              ],
              "start": 294,
              "end": 526
            }
          ],
          "start": 290,
          "end": 528
        },
        "start": 282,
        "end": 528
      },
      "declare": false,
      "start": 235,
      "end": 529
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 540,
        "end": 549
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
              "start": 550,
              "end": 551
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 568
              },
              "typeArguments": null,
              "start": 560,
              "end": 568
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 550,
            "end": 568
          }
        ],
        "start": 549,
        "end": 569
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 585
          },
          "typeArguments": null,
          "start": 578,
          "end": 585
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 600,
                  "end": 607
                },
                "start": 600,
                "end": 607
              },
              "start": 598,
              "end": 607
            },
            "accessibility": null,
            "static": false,
            "start": 590,
            "end": 608
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 617
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferObjectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 634
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
                        "start": 635,
                        "end": 636
                      },
                      "typeArguments": null,
                      "start": 635,
                      "end": 636
                    }
                  ],
                  "start": 634,
                  "end": 637
                },
                "start": 619,
                "end": 637
              },
              "start": 617,
              "end": 637
            },
            "accessibility": null,
            "static": false,
            "start": 611,
            "end": 638
          }
        ],
        "start": 586,
        "end": 640
      },
      "declare": false,
      "start": 530,
      "end": 640
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 663
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
              "start": 664,
              "end": 665
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 681
              },
              "typeArguments": null,
              "start": 674,
              "end": 681
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 664,
            "end": 681
          }
        ],
        "start": 663,
        "end": 682
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 698
          },
          "typeArguments": null,
          "start": 691,
          "end": 698
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 703,
              "end": 711
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "\"true\"",
                  "start": 713,
                  "end": 719
                },
                "start": 713,
                "end": 719
              },
              "start": 711,
              "end": 719
            },
            "accessibility": null,
            "static": false,
            "start": 703,
            "end": 720
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 729
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                        "start": 731,
                        "end": 732
                      },
                      "typeArguments": null,
                      "start": 731,
                      "end": 732
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 733,
                        "end": 741
                      },
                      "start": 733,
                      "end": 741
                    },
                    "start": 731,
                    "end": 742
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 745,
                    "end": 754
                  }
                ],
                "start": 731,
                "end": 754
              },
              "start": 729,
              "end": 754
            },
            "accessibility": null,
            "static": false,
            "start": 723,
            "end": 755
          }
        ],
        "start": 699,
        "end": 757
      },
      "declare": false,
      "start": 642,
      "end": 757
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "object",
        "optional": false,
        "typeAnnotation": null,
        "start": 776,
        "end": 782
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 784
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 801
              },
              "typeArguments": null,
              "start": 793,
              "end": 801
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 783,
            "end": 801
          }
        ],
        "start": 782,
        "end": 802
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
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
                "start": 810,
                "end": 811
              },
              "typeArguments": null,
              "start": 810,
              "end": 811
            },
            "start": 808,
            "end": 811
          },
          "start": 803,
          "end": 811
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 814,
            "end": 823
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
                  "start": 824,
                  "end": 825
                },
                "typeArguments": null,
                "start": 824,
                "end": 825
              }
            ],
            "start": 823,
            "end": 826
          },
          "start": 814,
          "end": 826
        },
        "start": 812,
        "end": 826
      },
      "body": null,
      "expression": false,
      "start": 759,
      "end": 827
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 851
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodString",
            "optional": false,
            "typeAnnotation": null,
            "start": 855,
            "end": 864
          },
          "typeArguments": null,
          "start": 855,
          "end": 864
        },
        "start": 853,
        "end": 864
      },
      "body": null,
      "expression": false,
      "start": 828,
      "end": 865
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "optional",
        "optional": false,
        "typeAnnotation": null,
        "start": 883,
        "end": 891
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 893
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 909
              },
              "typeArguments": null,
              "start": 902,
              "end": 909
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 892,
            "end": 909
          }
        ],
        "start": 891,
        "end": 910
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "schema",
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
                "start": 919,
                "end": 920
              },
              "typeArguments": null,
              "start": 919,
              "end": 920
            },
            "start": 917,
            "end": 920
          },
          "start": 911,
          "end": 920
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 934
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
                  "start": 935,
                  "end": 936
                },
                "typeArguments": null,
                "start": 935,
                "end": 936
              }
            ],
            "start": 934,
            "end": 937
          },
          "start": 923,
          "end": 937
        },
        "start": 921,
        "end": 937
      },
      "body": null,
      "expression": false,
      "start": 866,
      "end": 938
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
            "name": "Category",
            "optional": false,
            "typeAnnotation": null,
            "start": 946,
            "end": 954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 963
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 968,
                      "end": 972
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 974,
                        "end": 980
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 974,
                      "end": 982
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 968,
                    "end": 982
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 990,
                      "end": 996
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "optional",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1012,
                                "end": 1020
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Category",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1021,
                                  "end": 1029
                                }
                              ],
                              "optional": false,
                              "start": 1012,
                              "end": 1030
                            },
                            "start": 1005,
                            "end": 1031
                          }
                        ],
                        "start": 999,
                        "end": 1035
                      },
                      "expression": false,
                      "start": 996,
                      "end": 1035
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 986,
                    "end": 1035
                  }
                ],
                "start": 964,
                "end": 1038
              }
            ],
            "optional": false,
            "start": 957,
            "end": 1039
          },
          "definite": false,
          "start": 946,
          "end": 1039
        }
      ],
      "declare": false,
      "start": 940,
      "end": 1040
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1059
            },
            "init": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Category",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1062,
                            "end": 1070
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "output",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1071,
                            "end": 1077
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1062,
                          "end": 1077
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1078,
                          "end": 1084
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1062,
                        "end": 1084
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1086,
                        "end": 1092
                      },
                      "optional": true,
                      "computed": false,
                      "start": 1062,
                      "end": 1092
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1094,
                      "end": 1100
                    },
                    "optional": true,
                    "computed": false,
                    "start": 1062,
                    "end": 1100
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1102,
                    "end": 1108
                  },
                  "optional": true,
                  "computed": false,
                  "start": 1062,
                  "end": 1108
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1114
                },
                "optional": true,
                "computed": false,
                "start": 1062,
                "end": 1114
              },
              "start": 1062,
              "end": 1114
            },
            "definite": false,
            "start": 1055,
            "end": 1114
          }
        ],
        "declare": false,
        "start": 1049,
        "end": 1115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1042,
      "end": 1115
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1115
}
```
