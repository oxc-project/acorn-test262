__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "name": "nominalTypeHack",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 37,
                    "end": 43
                  },
                  "start": 30,
                  "end": 43
                },
                "start": 28,
                "end": 43
              },
              "start": 13,
              "end": 43
            },
            "init": null,
            "definite": false,
            "start": 13,
            "end": 43
          }
        ],
        "declare": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsOptional",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 68
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
                "start": 69,
                "end": 70
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 69,
              "end": 70
            }
          ],
          "start": 68,
          "end": 71
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSUndefinedKeyword",
                "start": 74,
                "end": 83
              },
              {
                "type": "TSNullKeyword",
                "start": 86,
                "end": 90
              }
            ],
            "start": 74,
            "end": 90
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "typeArguments": null,
            "start": 99,
            "end": 100
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 103,
              "end": 107
            },
            "start": 103,
            "end": 107
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 110,
              "end": 119
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 129
              },
              "typeArguments": null,
              "start": 128,
              "end": 129
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 132,
                "end": 136
              },
              "start": 132,
              "end": 136
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSNullKeyword",
                "start": 139,
                "end": 143
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "typeArguments": null,
                "start": 152,
                "end": 153
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 156,
                  "end": 160
                },
                "start": 156,
                "end": 160
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 163,
                  "end": 168
                },
                "start": 163,
                "end": 168
              },
              "start": 139,
              "end": 168
            },
            "start": 110,
            "end": 168
          },
          "start": 74,
          "end": 168
        },
        "declare": false,
        "start": 53,
        "end": 169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 46,
      "end": 169
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 195
        },
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
                "start": 196,
                "end": 197
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 196,
              "end": 197
            }
          ],
          "start": 195,
          "end": 198
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 216
                },
                "typeArguments": null,
                "start": 215,
                "end": 216
              },
              "start": 209,
              "end": 216
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 228
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
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 230
                        },
                        "typeArguments": null,
                        "start": 229,
                        "end": 230
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "typeArguments": null,
                        "start": 231,
                        "end": 232
                      },
                      "start": 229,
                      "end": 233
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 235,
                      "end": 244
                    }
                  ],
                  "start": 228,
                  "end": 245
                },
                "start": 221,
                "end": 245
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 263
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 270,
                          "end": 271
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 270,
                        "end": 271
                      },
                      "start": 264,
                      "end": 271
                    }
                  ],
                  "start": 263,
                  "end": 272
                },
                "start": 254,
                "end": 272
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsOptional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 285
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
                          "start": 286,
                          "end": 287
                        },
                        "typeArguments": null,
                        "start": 286,
                        "end": 287
                      }
                    ],
                    "start": 285,
                    "end": 288
                  },
                  "start": 275,
                  "end": 288
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 297,
                    "end": 301
                  },
                  "start": 297,
                  "end": 301
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 304,
                  "end": 309
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 313
                  },
                  "typeArguments": null,
                  "start": 312,
                  "end": 313
                },
                "start": 275,
                "end": 313
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 316,
                "end": 321
              },
              "start": 221,
              "end": 321
            },
            "optional": "-",
            "readonly": null,
            "start": 201,
            "end": 323
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "typeArguments": null,
              "start": 330,
              "end": 331
            },
            "start": 324,
            "end": 331
          },
          "start": 201,
          "end": 332
        },
        "declare": false,
        "start": 178,
        "end": 333
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 171,
      "end": 333
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 358
        },
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
                "start": 359,
                "end": 360
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 359,
              "end": 360
            }
          ],
          "start": 358,
          "end": 361
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 371
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 379
                  },
                  "typeArguments": null,
                  "start": 378,
                  "end": 379
                },
                "start": 372,
                "end": 379
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequiredKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 393
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 394,
                        "end": 395
                      },
                      "typeArguments": null,
                      "start": 394,
                      "end": 395
                    }
                  ],
                  "start": 393,
                  "end": 396
                },
                "start": 381,
                "end": 396
              }
            ],
            "start": 371,
            "end": 397
          },
          "start": 364,
          "end": 397
        },
        "declare": false,
        "start": 341,
        "end": 398
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 334,
      "end": 398
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferPropsInner",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 426
        },
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
                "start": 427,
                "end": 428
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 427,
              "end": 428
            }
          ],
          "start": 426,
          "end": 429
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 436
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 447
              },
              "typeArguments": null,
              "start": 446,
              "end": 447
            },
            "start": 440,
            "end": 447
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferType",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 461
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
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 463
                    },
                    "typeArguments": null,
                    "start": 462,
                    "end": 463
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 465
                    },
                    "typeArguments": null,
                    "start": 464,
                    "end": 465
                  },
                  "start": 462,
                  "end": 466
                }
              ],
              "start": 461,
              "end": 467
            },
            "start": 452,
            "end": 467
          },
          "optional": "-",
          "readonly": null,
          "start": 432,
          "end": 470
        },
        "declare": false,
        "start": 406,
        "end": 471
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 399,
      "end": 471
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validator",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 499
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
                "start": 500,
                "end": 501
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 500,
              "end": 501
            }
          ],
          "start": 499,
          "end": 502
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 517,
                      "end": 523
                    },
                    "start": 515,
                    "end": 523
                  },
                  "start": 510,
                  "end": 523
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 535,
                      "end": 541
                    },
                    "start": 533,
                    "end": 541
                  },
                  "start": 525,
                  "end": 541
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "componentName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 558,
                      "end": 564
                    },
                    "start": 556,
                    "end": 564
                  },
                  "start": 543,
                  "end": 564
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "location",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 576,
                      "end": 582
                    },
                    "start": 574,
                    "end": 582
                  },
                  "start": 566,
                  "end": 582
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propFullName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 598,
                      "end": 604
                    },
                    "start": 596,
                    "end": 604
                  },
                  "start": 584,
                  "end": 604
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 607,
                        "end": 612
                      },
                      "typeArguments": null,
                      "start": 607,
                      "end": 612
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 615,
                      "end": 619
                    }
                  ],
                  "start": 607,
                  "end": 619
                },
                "start": 605,
                "end": 619
              },
              "start": 509,
              "end": 620
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nominalTypeHack",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 641
              },
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
                    "start": 645,
                    "end": 646
                  },
                  "typeArguments": null,
                  "start": 645,
                  "end": 646
                },
                "start": 643,
                "end": 646
              },
              "accessibility": null,
              "static": false,
              "start": 625,
              "end": 647
            }
          ],
          "start": 503,
          "end": 649
        },
        "declare": false,
        "start": 480,
        "end": 649
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 473,
      "end": 649
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Requireable",
          "optional": false,
          "typeAnnotation": null,
          "start": 668,
          "end": 679
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
                "start": 680,
                "end": 681
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 680,
              "end": 681
            }
          ],
          "start": 679,
          "end": 682
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 700
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
                    "start": 701,
                    "end": 702
                  },
                  "typeArguments": null,
                  "start": 701,
                  "end": 702
                }
              ],
              "start": 700,
              "end": 703
            },
            "start": 691,
            "end": 703
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
                "name": "isRequired",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 720
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Validator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 731
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NonNullable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 732,
                          "end": 743
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
                                "start": 744,
                                "end": 745
                              },
                              "typeArguments": null,
                              "start": 744,
                              "end": 745
                            }
                          ],
                          "start": 743,
                          "end": 746
                        },
                        "start": 732,
                        "end": 746
                      }
                    ],
                    "start": 731,
                    "end": 747
                  },
                  "start": 722,
                  "end": 747
                },
                "start": 720,
                "end": 747
              },
              "accessibility": null,
              "static": false,
              "start": 710,
              "end": 748
            }
          ],
          "start": 704,
          "end": 750
        },
        "declare": false,
        "start": 658,
        "end": 750
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 651,
      "end": 750
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValidationMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 764,
          "end": 777
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
                "start": 778,
                "end": 779
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 778,
              "end": 779
            }
          ],
          "start": 777,
          "end": 780
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
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
                "start": 797,
                "end": 798
              },
              "typeArguments": null,
              "start": 797,
              "end": 798
            },
            "start": 791,
            "end": 798
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 811
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
                      "start": 812,
                      "end": 813
                    },
                    "typeArguments": null,
                    "start": 812,
                    "end": 813
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 814,
                      "end": 815
                    },
                    "typeArguments": null,
                    "start": 814,
                    "end": 815
                  },
                  "start": 812,
                  "end": 816
                }
              ],
              "start": 811,
              "end": 817
            },
            "start": 802,
            "end": 817
          },
          "optional": true,
          "readonly": null,
          "start": 783,
          "end": 819
        },
        "declare": false,
        "start": 759,
        "end": 820
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 752,
      "end": 820
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferType",
          "optional": false,
          "typeAnnotation": null,
          "start": 834,
          "end": 843
        },
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
                "start": 844,
                "end": 845
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 844,
              "end": 845
            }
          ],
          "start": 843,
          "end": 846
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 850
            },
            "typeArguments": null,
            "start": 849,
            "end": 850
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 868
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 875,
                      "end": 876
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 875,
                    "end": 876
                  },
                  "start": 869,
                  "end": 876
                }
              ],
              "start": 868,
              "end": 877
            },
            "start": 859,
            "end": 877
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 880,
              "end": 881
            },
            "typeArguments": null,
            "start": 880,
            "end": 881
          },
          "falseType": {
            "type": "TSAnyKeyword",
            "start": 884,
            "end": 887
          },
          "start": 849,
          "end": 887
        },
        "declare": false,
        "start": 829,
        "end": 888
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 822,
      "end": 888
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 901,
          "end": 911
        },
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
                "start": 912,
                "end": 913
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 912,
              "end": 913
            }
          ],
          "start": 911,
          "end": 914
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InferPropsInner",
                "optional": false,
                "typeAnnotation": null,
                "start": 923,
                "end": 938
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 943
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 944,
                            "end": 945
                          },
                          "typeArguments": null,
                          "start": 944,
                          "end": 945
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RequiredKeys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 947,
                            "end": 959
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 960,
                                  "end": 961
                                },
                                "typeArguments": null,
                                "start": 960,
                                "end": 961
                              }
                            ],
                            "start": 959,
                            "end": 962
                          },
                          "start": 947,
                          "end": 962
                        }
                      ],
                      "start": 943,
                      "end": 963
                    },
                    "start": 939,
                    "end": 963
                  }
                ],
                "start": 938,
                "end": 964
              },
              "start": 923,
              "end": 964
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 971,
                "end": 978
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InferPropsInner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 979,
                      "end": 994
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 995,
                            "end": 999
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1000,
                                  "end": 1001
                                },
                                "typeArguments": null,
                                "start": 1000,
                                "end": 1001
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OptionalKeys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1003,
                                  "end": 1015
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1016,
                                        "end": 1017
                                      },
                                      "typeArguments": null,
                                      "start": 1016,
                                      "end": 1017
                                    }
                                  ],
                                  "start": 1015,
                                  "end": 1018
                                },
                                "start": 1003,
                                "end": 1018
                              }
                            ],
                            "start": 999,
                            "end": 1019
                          },
                          "start": 995,
                          "end": 1019
                        }
                      ],
                      "start": 994,
                      "end": 1020
                    },
                    "start": 979,
                    "end": 1020
                  }
                ],
                "start": 978,
                "end": 1021
              },
              "start": 971,
              "end": 1021
            }
          ],
          "start": 921,
          "end": 1021
        },
        "declare": false,
        "start": 896,
        "end": 1022
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 889,
      "end": 1022
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
              "name": "any",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1042,
                    "end": 1053
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1054,
                        "end": 1057
                      }
                    ],
                    "start": 1053,
                    "end": 1058
                  },
                  "start": 1042,
                  "end": 1058
                },
                "start": 1040,
                "end": 1058
              },
              "start": 1037,
              "end": 1058
            },
            "init": null,
            "definite": false,
            "start": 1037,
            "end": 1058
          }
        ],
        "declare": false,
        "start": 1031,
        "end": 1059
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1024,
      "end": 1059
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
              "name": "array",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1080,
                    "end": 1091
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1092,
                          "end": 1095
                        },
                        "start": 1092,
                        "end": 1097
                      }
                    ],
                    "start": 1091,
                    "end": 1098
                  },
                  "start": 1080,
                  "end": 1098
                },
                "start": 1078,
                "end": 1098
              },
              "start": 1073,
              "end": 1098
            },
            "init": null,
            "definite": false,
            "start": 1073,
            "end": 1098
          }
        ],
        "declare": false,
        "start": 1067,
        "end": 1099
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1060,
      "end": 1099
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
              "name": "bool",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1130
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 1131,
                        "end": 1138
                      }
                    ],
                    "start": 1130,
                    "end": 1139
                  },
                  "start": 1119,
                  "end": 1139
                },
                "start": 1117,
                "end": 1139
              },
              "start": 1113,
              "end": 1139
            },
            "init": null,
            "definite": false,
            "start": 1113,
            "end": 1139
          }
        ],
        "declare": false,
        "start": 1107,
        "end": 1140
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1100,
      "end": 1140
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
              "name": "string",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1173
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1174,
                        "end": 1180
                      }
                    ],
                    "start": 1173,
                    "end": 1181
                  },
                  "start": 1162,
                  "end": 1181
                },
                "start": 1160,
                "end": 1181
              },
              "start": 1154,
              "end": 1181
            },
            "init": null,
            "definite": false,
            "start": 1154,
            "end": 1181
          }
        ],
        "declare": false,
        "start": 1148,
        "end": 1182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1141,
      "end": 1182
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
              "name": "number",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1204,
                    "end": 1215
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1216,
                        "end": 1222
                      }
                    ],
                    "start": 1215,
                    "end": 1223
                  },
                  "start": 1204,
                  "end": 1223
                },
                "start": 1202,
                "end": 1223
              },
              "start": 1196,
              "end": 1223
            },
            "init": null,
            "definite": false,
            "start": 1196,
            "end": 1223
          }
        ],
        "declare": false,
        "start": 1190,
        "end": 1224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1183,
      "end": 1224
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 1241,
          "end": 1246
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
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1247,
                "end": 1248
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1257,
                  "end": 1270
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1271,
                      "end": 1274
                    }
                  ],
                  "start": 1270,
                  "end": 1275
                },
                "start": 1257,
                "end": 1275
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1247,
              "end": 1275
            }
          ],
          "start": 1246,
          "end": 1276
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1283,
                  "end": 1284
                },
                "typeArguments": null,
                "start": 1283,
                "end": 1284
              },
              "start": 1281,
              "end": 1284
            },
            "start": 1277,
            "end": 1284
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Requireable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1287,
              "end": 1298
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InferProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1309
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
                          "start": 1310,
                          "end": 1311
                        },
                        "typeArguments": null,
                        "start": 1310,
                        "end": 1311
                      }
                    ],
                    "start": 1309,
                    "end": 1312
                  },
                  "start": 1299,
                  "end": 1312
                }
              ],
              "start": 1298,
              "end": 1313
            },
            "start": 1287,
            "end": 1313
          },
          "start": 1285,
          "end": 1313
        },
        "body": null,
        "expression": false,
        "start": 1232,
        "end": 1314
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1225,
      "end": 1314
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "oneOfType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1331,
          "end": 1340
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
                "start": 1341,
                "end": 1342
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1351,
                  "end": 1360
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1361,
                      "end": 1364
                    }
                  ],
                  "start": 1360,
                  "end": 1365
                },
                "start": 1351,
                "end": 1365
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1341,
              "end": 1365
            }
          ],
          "start": 1340,
          "end": 1366
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1374,
                    "end": 1375
                  },
                  "typeArguments": null,
                  "start": 1374,
                  "end": 1375
                },
                "start": 1374,
                "end": 1377
              },
              "start": 1372,
              "end": 1377
            },
            "start": 1367,
            "end": 1377
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Requireable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1391
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NonNullable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1392,
                    "end": 1403
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InferType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1404,
                          "end": 1413
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
                                "start": 1414,
                                "end": 1415
                              },
                              "typeArguments": null,
                              "start": 1414,
                              "end": 1415
                            }
                          ],
                          "start": 1413,
                          "end": 1416
                        },
                        "start": 1404,
                        "end": 1416
                      }
                    ],
                    "start": 1403,
                    "end": 1417
                  },
                  "start": 1392,
                  "end": 1417
                }
              ],
              "start": 1391,
              "end": 1418
            },
            "start": 1380,
            "end": 1418
          },
          "start": 1378,
          "end": 1418
        },
        "body": null,
        "expression": false,
        "start": 1322,
        "end": 1419
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1315,
      "end": 1419
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1421
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 21
          },
          "start": 7,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "prop-types",
        "raw": "\"prop-types\"",
        "start": 27,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "any",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 69,
                "end": 72
              },
              "start": 67,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 73
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 85,
                  "end": 91
                },
                "start": 85,
                "end": 93
              },
              "start": 83,
              "end": 93
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 94
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bool",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 105,
                "end": 112
              },
              "start": 103,
              "end": 112
            },
            "accessibility": null,
            "static": false,
            "start": 99,
            "end": 113
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 123
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 138
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 140,
                        "end": 146
                      },
                      "start": 138,
                      "end": 146
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 135,
                    "end": 147
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 159
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 162,
                        "end": 169
                      },
                      "start": 160,
                      "end": 169
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 156,
                    "end": 170
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 182
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 185,
                        "end": 188
                      },
                      "start": 183,
                      "end": 188
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 179,
                    "end": 188
                  }
                ],
                "start": 125,
                "end": 194
              },
              "start": 123,
              "end": 194
            },
            "accessibility": null,
            "static": false,
            "start": 118,
            "end": 195
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneOfType",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 209
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 211,
                    "end": 217
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 220,
                    "end": 227
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 240,
                          "end": 243
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 246,
                            "end": 252
                          },
                          "start": 244,
                          "end": 252
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 240,
                        "end": 253
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
                          "start": 262,
                          "end": 265
                        },
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
                        "accessibility": null,
                        "static": false,
                        "start": 262,
                        "end": 274
                      }
                    ],
                    "start": 230,
                    "end": 280
                  }
                ],
                "start": 211,
                "end": 280
              },
              "start": 209,
              "end": 280
            },
            "accessibility": null,
            "static": false,
            "start": 200,
            "end": 281
          }
        ],
        "start": 57,
        "end": 283
      },
      "declare": false,
      "start": 41,
      "end": 283
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropTypesMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 302
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 314
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "ValidationMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 328
          },
          "start": 305,
          "end": 328
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 334
              },
              "typeArguments": null,
              "start": 329,
              "end": 334
            }
          ],
          "start": 328,
          "end": 335
        },
        "start": 305,
        "end": 335
      },
      "declare": false,
      "start": 285,
      "end": 336
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
            "name": "innerProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 354
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 366
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 368,
                      "end": 377
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 378,
                      "end": 384
                    },
                    "optional": false,
                    "computed": false,
                    "start": 368,
                    "end": 384
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 395
                  },
                  "optional": false,
                  "computed": false,
                  "start": 368,
                  "end": 395
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 363,
                "end": 395
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
                  "start": 401,
                  "end": 404
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 415
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 420
                  },
                  "optional": false,
                  "computed": false,
                  "start": 406,
                  "end": 420
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 401,
                "end": 420
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 429
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 440
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 444
                  },
                  "optional": false,
                  "computed": false,
                  "start": 431,
                  "end": 444
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 426,
                "end": 444
              }
            ],
            "start": 357,
            "end": 446
          },
          "definite": false,
          "start": 344,
          "end": 446
        }
      ],
      "declare": false,
      "start": 338,
      "end": 447
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
            "name": "arrayOfTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 467
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 480
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 481,
                  "end": 487
                },
                "optional": false,
                "computed": false,
                "start": 471,
                "end": 487
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 498
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 503
                },
                "optional": false,
                "computed": false,
                "start": 489,
                "end": 503
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 514
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 515,
                    "end": 520
                  },
                  "optional": false,
                  "computed": false,
                  "start": 505,
                  "end": 520
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 527,
                          "end": 530
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PropTypes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 532,
                            "end": 541
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 542,
                            "end": 548
                          },
                          "optional": false,
                          "computed": false,
                          "start": 532,
                          "end": 548
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 527,
                        "end": 548
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
                          "start": 554,
                          "end": 557
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PropTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 559,
                              "end": 568
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "number",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 569,
                              "end": 575
                            },
                            "optional": false,
                            "computed": false,
                            "start": 559,
                            "end": 575
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isRequired",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 576,
                            "end": 586
                          },
                          "optional": false,
                          "computed": false,
                          "start": 559,
                          "end": 586
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 554,
                        "end": 586
                      }
                    ],
                    "start": 521,
                    "end": 588
                  }
                ],
                "optional": false,
                "start": 505,
                "end": 589
              }
            ],
            "start": 470,
            "end": 590
          },
          "definite": false,
          "start": 455,
          "end": 590
        }
      ],
      "declare": false,
      "start": 449,
      "end": 591
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
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropTypesMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 625,
                  "end": 637
                },
                "typeArguments": null,
                "start": 625,
                "end": 637
              },
              "start": 623,
              "end": 637
            },
            "start": 614,
            "end": 637
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
                  "name": "any",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 649
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 651,
                    "end": 660
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 664
                  },
                  "optional": false,
                  "computed": false,
                  "start": 651,
                  "end": 664
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 646,
                "end": 664
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 670,
                  "end": 675
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 677,
                      "end": 686
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 687,
                      "end": 692
                    },
                    "optional": false,
                    "computed": false,
                    "start": 677,
                    "end": 692
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 703
                  },
                  "optional": false,
                  "computed": false,
                  "start": 677,
                  "end": 703
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 670,
                "end": 703
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 713
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 724
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bool",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 729
                    },
                    "optional": false,
                    "computed": false,
                    "start": 715,
                    "end": 729
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 740
                  },
                  "optional": false,
                  "computed": false,
                  "start": 715,
                  "end": 740
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 709,
                "end": 740
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 751
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 753,
                        "end": 762
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "shape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 768
                      },
                      "optional": false,
                      "computed": false,
                      "start": 753,
                      "end": 768
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "innerProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 769,
                        "end": 779
                      }
                    ],
                    "optional": false,
                    "start": 753,
                    "end": 780
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 781,
                    "end": 791
                  },
                  "optional": false,
                  "computed": false,
                  "start": 753,
                  "end": 791
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 746,
                "end": 791
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOfType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 797,
                  "end": 806
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 808,
                        "end": 817
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "oneOfType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 818,
                        "end": 827
                      },
                      "optional": false,
                      "computed": false,
                      "start": 808,
                      "end": 827
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arrayOfTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 828,
                        "end": 840
                      }
                    ],
                    "optional": false,
                    "start": 808,
                    "end": 841
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 852
                  },
                  "optional": false,
                  "computed": false,
                  "start": 808,
                  "end": 852
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 797,
                "end": 852
              }
            ],
            "start": 640,
            "end": 855
          },
          "definite": false,
          "start": 614,
          "end": 855
        }
      ],
      "declare": false,
      "start": 608,
      "end": 856
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
            "name": "propTypesWithoutAnnotation",
            "optional": false,
            "typeAnnotation": null,
            "start": 879,
            "end": 905
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
                  "name": "any",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 914,
                  "end": 917
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 919,
                    "end": 928
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 929,
                    "end": 932
                  },
                  "optional": false,
                  "computed": false,
                  "start": 919,
                  "end": 932
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 914,
                "end": 932
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 938,
                  "end": 943
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 945,
                      "end": 954
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 955,
                      "end": 960
                    },
                    "optional": false,
                    "computed": false,
                    "start": 945,
                    "end": 960
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 961,
                    "end": 971
                  },
                  "optional": false,
                  "computed": false,
                  "start": 945,
                  "end": 971
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 938,
                "end": 971
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 981
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 983,
                      "end": 992
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bool",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 993,
                      "end": 997
                    },
                    "optional": false,
                    "computed": false,
                    "start": 983,
                    "end": 997
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 998,
                    "end": 1008
                  },
                  "optional": false,
                  "computed": false,
                  "start": 983,
                  "end": 1008
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 977,
                "end": 1008
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1019
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1021,
                        "end": 1030
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "shape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1036
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1021,
                      "end": 1036
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "innerProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1037,
                        "end": 1047
                      }
                    ],
                    "optional": false,
                    "start": 1021,
                    "end": 1048
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1049,
                    "end": 1059
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1021,
                  "end": 1059
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1014,
                "end": 1059
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOfType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1065,
                  "end": 1074
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1076,
                        "end": 1085
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "oneOfType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1086,
                        "end": 1095
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1076,
                      "end": 1095
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arrayOfTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1096,
                        "end": 1108
                      }
                    ],
                    "optional": false,
                    "start": 1076,
                    "end": 1109
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1110,
                    "end": 1120
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1076,
                  "end": 1120
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1065,
                "end": 1120
              }
            ],
            "start": 908,
            "end": 1123
          },
          "definite": false,
          "start": 879,
          "end": 1123
        }
      ],
      "declare": false,
      "start": 873,
      "end": 1124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractedProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1131,
        "end": 1145
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1157
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 1158,
            "end": 1168
          },
          "start": 1148,
          "end": 1168
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "propTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 1176,
                "end": 1185
              },
              "typeArguments": null,
              "start": 1169,
              "end": 1185
            }
          ],
          "start": 1168,
          "end": 1186
        },
        "start": 1148,
        "end": 1186
      },
      "declare": false,
      "start": 1126,
      "end": 1187
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractedPropsWithoutAnnotation",
        "optional": false,
        "typeAnnotation": null,
        "start": 1194,
        "end": 1225
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1237
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 1238,
            "end": 1248
          },
          "start": 1228,
          "end": 1248
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "propTypesWithoutAnnotation",
                "optional": false,
                "typeAnnotation": null,
                "start": 1256,
                "end": 1282
              },
              "typeArguments": null,
              "start": 1249,
              "end": 1282
            }
          ],
          "start": 1248,
          "end": 1283
        },
        "start": 1228,
        "end": 1283
      },
      "declare": false,
      "start": 1189,
      "end": 1284
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractPropsMatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1308
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExtractedProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 1311,
            "end": 1325
          },
          "typeArguments": null,
          "start": 1311,
          "end": 1325
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExtractedPropsWithoutAnnotation",
            "optional": false,
            "typeAnnotation": null,
            "start": 1334,
            "end": 1365
          },
          "typeArguments": null,
          "start": 1334,
          "end": 1365
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1368,
            "end": 1372
          },
          "start": 1368,
          "end": 1372
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1375,
            "end": 1380
          },
          "start": 1375,
          "end": 1380
        },
        "start": 1311,
        "end": 1380
      },
      "declare": false,
      "start": 1286,
      "end": 1381
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1391,
                  "end": 1395
                },
                "start": 1391,
                "end": 1395
              },
              "start": 1389,
              "end": 1395
            },
            "start": 1388,
            "end": 1395
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1399,
                "end": 1403
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1407,
                "end": 1410
              },
              "start": 1399,
              "end": 1410
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtractPropsMatch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1414,
                "end": 1431
              },
              "typeArguments": null,
              "start": 1414,
              "end": 1431
            },
            "start": 1399,
            "end": 1431
          },
          "definite": false,
          "start": 1388,
          "end": 1432
        }
      ],
      "declare": false,
      "start": 1382,
      "end": 1433
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1433
}
```
