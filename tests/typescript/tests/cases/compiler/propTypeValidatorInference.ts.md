__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "nominalTypeHack",
    "start": 13,
    "end": 28,
    "range": [
      13,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "IsOptional",
    "start": 58,
    "end": 68,
    "range": [
      58,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 74,
    "end": 83,
    "range": [
      74,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 86,
    "end": 90,
    "range": [
      86,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 103,
    "end": 107,
    "range": [
      103,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 110,
    "end": 119,
    "range": [
      110,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 120,
    "end": 127,
    "range": [
      120,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 132,
    "end": 136,
    "range": [
      132,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 139,
    "end": 143,
    "range": [
      139,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 144,
    "end": 151,
    "range": [
      144,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 156,
    "end": 160,
    "range": [
      156,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 163,
    "end": 168,
    "range": [
      163,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177,
    "range": [
      171,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 178,
    "end": 182,
    "range": [
      178,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "RequiredKeys",
    "start": 183,
    "end": 195,
    "range": [
      183,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 206,
    "end": 208,
    "range": [
      206,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 209,
    "end": 214,
    "range": [
      209,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 221,
    "end": 228,
    "range": [
      221,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 235,
    "end": 244,
    "range": [
      235,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 246,
    "end": 253,
    "range": [
      246,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 254,
    "end": 263,
    "range": [
      254,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 264,
    "end": 269,
    "range": [
      264,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "IsOptional",
    "start": 275,
    "end": 285,
    "range": [
      275,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 289,
    "end": 296,
    "range": [
      289,
      296
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 304,
    "end": 309,
    "range": [
      304,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 316,
    "end": 321,
    "range": [
      316,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 324,
    "end": 329,
    "range": [
      324,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 334,
    "end": 340,
    "range": [
      334,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 341,
    "end": 345,
    "range": [
      341,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionalKeys",
    "start": 346,
    "end": 358,
    "range": [
      346,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 364,
    "end": 371,
    "range": [
      364,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 372,
    "end": 377,
    "range": [
      372,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "RequiredKeys",
    "start": 381,
    "end": 393,
    "range": [
      381,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "export",
    "start": 399,
    "end": 405,
    "range": [
      399,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 406,
    "end": 410,
    "range": [
      406,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "InferPropsInner",
    "start": 411,
    "end": 426,
    "range": [
      411,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 437,
    "end": 439,
    "range": [
      437,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 440,
    "end": 445,
    "range": [
      440,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "InferType",
    "start": 452,
    "end": 461,
    "range": [
      452,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 473,
    "end": 479,
    "range": [
      473,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 480,
    "end": 489,
    "range": [
      480,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 490,
    "end": 499,
    "range": [
      490,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 510,
    "end": 515,
    "range": [
      510,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 517,
    "end": 523,
    "range": [
      517,
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
    "value": "propName",
    "start": 525,
    "end": 533,
    "range": [
      525,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "componentName",
    "start": 543,
    "end": 556,
    "range": [
      543,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 558,
    "end": 564,
    "range": [
      558,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 566,
    "end": 574,
    "range": [
      566,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 576,
    "end": 582,
    "range": [
      576,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "propFullName",
    "start": 584,
    "end": 596,
    "range": [
      584,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 598,
    "end": 604,
    "range": [
      598,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 607,
    "end": 612,
    "range": [
      607,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 615,
    "end": 619,
    "range": [
      615,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "nominalTypeHack",
    "start": 626,
    "end": 641,
    "range": [
      626,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 651,
    "end": 657,
    "range": [
      651,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 658,
    "end": 667,
    "range": [
      658,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "Requireable",
    "start": 668,
    "end": 679,
    "range": [
      668,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 683,
    "end": 690,
    "range": [
      683,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 691,
    "end": 700,
    "range": [
      691,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 710,
    "end": 720,
    "range": [
      710,
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
    "value": "Validator",
    "start": 722,
    "end": 731,
    "range": [
      722,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 732,
    "end": 743,
    "range": [
      732,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 752,
    "end": 758,
    "range": [
      752,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 759,
    "end": 763,
    "range": [
      759,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidationMap",
    "start": 764,
    "end": 777,
    "range": [
      764,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 788,
    "end": 790,
    "range": [
      788,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 791,
    "end": 796,
    "range": [
      791,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 802,
    "end": 811,
    "range": [
      802,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 822,
    "end": 828,
    "range": [
      822,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 829,
    "end": 833,
    "range": [
      829,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "InferType",
    "start": 834,
    "end": 843,
    "range": [
      834,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 851,
    "end": 858,
    "range": [
      851,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 859,
    "end": 868,
    "range": [
      859,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 869,
    "end": 874,
    "range": [
      869,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 884,
    "end": 887,
    "range": [
      884,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 889,
    "end": 895,
    "range": [
      889,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 896,
    "end": 900,
    "range": [
      896,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "InferProps",
    "start": 901,
    "end": 911,
    "range": [
      901,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "InferPropsInner",
    "start": 923,
    "end": 938,
    "range": [
      923,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 939,
    "end": 943,
    "range": [
      939,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Identifier",
    "value": "RequiredKeys",
    "start": 947,
    "end": 959,
    "range": [
      947,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 971,
    "end": 978,
    "range": [
      971,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "InferPropsInner",
    "start": 979,
    "end": 994,
    "range": [
      979,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 995,
    "end": 999,
    "range": [
      995,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionalKeys",
    "start": 1003,
    "end": 1015,
    "range": [
      1003,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1024,
    "end": 1030,
    "range": [
      1024,
      1030
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1031,
    "end": 1036,
    "range": [
      1031,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1037,
    "end": 1040,
    "range": [
      1037,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "Requireable",
    "start": 1042,
    "end": 1053,
    "range": [
      1042,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1054,
    "end": 1057,
    "range": [
      1054,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1060,
    "end": 1066,
    "range": [
      1060,
      1066
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1067,
    "end": 1072,
    "range": [
      1067,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1073,
    "end": 1078,
    "range": [
      1073,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "Requireable",
    "start": 1080,
    "end": 1091,
    "range": [
      1080,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1092,
    "end": 1095,
    "range": [
      1092,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1100,
    "end": 1106,
    "range": [
      1100,
      1106
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1107,
    "end": 1112,
    "range": [
      1107,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1113,
    "end": 1117,
    "range": [
      1113,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "Requireable",
    "start": 1119,
    "end": 1130,
    "range": [
      1119,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1131,
    "end": 1138,
    "range": [
      1131,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1141,
    "end": 1147,
    "range": [
      1141,
      1147
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1148,
    "end": 1153,
    "range": [
      1148,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1154,
    "end": 1160,
    "range": [
      1154,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "Requireable",
    "start": 1162,
    "end": 1173,
    "range": [
      1162,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1174,
    "end": 1180,
    "range": [
      1174,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1183,
    "end": 1189,
    "range": [
      1183,
      1189
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1190,
    "end": 1195,
    "range": [
      1190,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1196,
    "end": 1202,
    "range": [
      1196,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "Requireable",
    "start": 1204,
    "end": 1215,
    "range": [
      1204,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1216,
    "end": 1222,
    "range": [
      1216,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1225,
    "end": 1231,
    "range": [
      1225,
      1231
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1232,
    "end": 1240,
    "range": [
      1232,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1241,
    "end": 1246,
    "range": [
      1241,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1249,
    "end": 1256,
    "range": [
      1249,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidationMap",
    "start": 1257,
    "end": 1270,
    "range": [
      1257,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1271,
    "end": 1274,
    "range": [
      1271,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1277,
    "end": 1281,
    "range": [
      1277,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "Requireable",
    "start": 1287,
    "end": 1298,
    "range": [
      1287,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "InferProps",
    "start": 1299,
    "end": 1309,
    "range": [
      1299,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1315,
    "end": 1321,
    "range": [
      1315,
      1321
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1322,
    "end": 1330,
    "range": [
      1322,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "oneOfType",
    "start": 1331,
    "end": 1340,
    "range": [
      1331,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1343,
    "end": 1350,
    "range": [
      1343,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 1351,
    "end": 1360,
    "range": [
      1351,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1361,
    "end": 1364,
    "range": [
      1361,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 1367,
    "end": 1372,
    "range": [
      1367,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "Requireable",
    "start": 1380,
    "end": 1391,
    "range": [
      1380,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 1392,
    "end": 1403,
    "range": [
      1392,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "InferType",
    "start": 1404,
    "end": 1413,
    "range": [
      1404,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 12,
    "end": 21,
    "range": [
      12,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "String",
    "value": "\"prop-types\"",
    "start": 27,
    "end": 39,
    "range": [
      27,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 41,
    "end": 50,
    "range": [
      41,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 51,
    "end": 56,
    "range": [
      51,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 63,
    "end": 66,
    "range": [
      63,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 69,
    "end": 72,
    "range": [
      69,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 78,
    "end": 83,
    "range": [
      78,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 99,
    "end": 103,
    "range": [
      99,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 105,
    "end": 112,
    "range": [
      105,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 118,
    "end": 123,
    "range": [
      118,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 135,
    "end": 138,
    "range": [
      135,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 156,
    "end": 159,
    "range": [
      156,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 162,
    "end": 169,
    "range": [
      162,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 179,
    "end": 182,
    "range": [
      179,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "any",
    "start": 185,
    "end": 188,
    "range": [
      185,
      188
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
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "oneOfType",
    "start": 200,
    "end": 209,
    "range": [
      200,
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
    "value": "string",
    "start": 211,
    "end": 217,
    "range": [
      211,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 220,
    "end": 227,
    "range": [
      220,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 240,
    "end": 243,
    "range": [
      240,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 267,
    "end": 273,
    "range": [
      267,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 285,
    "end": 289,
    "range": [
      285,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypesMap",
    "start": 290,
    "end": 302,
    "range": [
      290,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 305,
    "end": 314,
    "range": [
      305,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidationMap",
    "start": 315,
    "end": 328,
    "range": [
      315,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 329,
    "end": 334,
    "range": [
      329,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 338,
    "end": 343,
    "range": [
      338,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "innerProps",
    "start": 344,
    "end": 354,
    "range": [
      344,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 363,
    "end": 366,
    "range": [
      363,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 368,
    "end": 377,
    "range": [
      368,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384,
    "range": [
      378,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 385,
    "end": 395,
    "range": [
      385,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 401,
    "end": 404,
    "range": [
      401,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 406,
    "end": 415,
    "range": [
      406,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 416,
    "end": 420,
    "range": [
      416,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 426,
    "end": 429,
    "range": [
      426,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 431,
    "end": 440,
    "range": [
      431,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 441,
    "end": 444,
    "range": [
      441,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 449,
    "end": 454,
    "range": [
      449,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayOfTypes",
    "start": 455,
    "end": 467,
    "range": [
      455,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 471,
    "end": 480,
    "range": [
      471,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 481,
    "end": 487,
    "range": [
      481,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 489,
    "end": 498,
    "range": [
      489,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 499,
    "end": 503,
    "range": [
      499,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 505,
    "end": 514,
    "range": [
      505,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 515,
    "end": 520,
    "range": [
      515,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 527,
    "end": 530,
    "range": [
      527,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 532,
    "end": 541,
    "range": [
      532,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 542,
    "end": 548,
    "range": [
      542,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 554,
    "end": 557,
    "range": [
      554,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 559,
    "end": 568,
    "range": [
      559,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 569,
    "end": 575,
    "range": [
      569,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 576,
    "end": 586,
    "range": [
      576,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 608,
    "end": 613,
    "range": [
      608,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 614,
    "end": 623,
    "range": [
      614,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypesMap",
    "start": 625,
    "end": 637,
    "range": [
      625,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 646,
    "end": 649,
    "range": [
      646,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 651,
    "end": 660,
    "range": [
      651,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 661,
    "end": 664,
    "range": [
      661,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 670,
    "end": 675,
    "range": [
      670,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 677,
    "end": 686,
    "range": [
      677,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 687,
    "end": 692,
    "range": [
      687,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 693,
    "end": 703,
    "range": [
      693,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 709,
    "end": 713,
    "range": [
      709,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 715,
    "end": 724,
    "range": [
      715,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 725,
    "end": 729,
    "range": [
      725,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 730,
    "end": 740,
    "range": [
      730,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 746,
    "end": 751,
    "range": [
      746,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 753,
    "end": 762,
    "range": [
      753,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 763,
    "end": 768,
    "range": [
      763,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "innerProps",
    "start": 769,
    "end": 779,
    "range": [
      769,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 781,
    "end": 791,
    "range": [
      781,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "oneOfType",
    "start": 797,
    "end": 806,
    "range": [
      797,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 808,
    "end": 817,
    "range": [
      808,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "oneOfType",
    "start": 818,
    "end": 827,
    "range": [
      818,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayOfTypes",
    "start": 828,
    "end": 840,
    "range": [
      828,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 842,
    "end": 852,
    "range": [
      842,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 873,
    "end": 878,
    "range": [
      873,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypesWithoutAnnotation",
    "start": 879,
    "end": 905,
    "range": [
      879,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 914,
    "end": 917,
    "range": [
      914,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 919,
    "end": 928,
    "range": [
      919,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 929,
    "end": 932,
    "range": [
      929,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 938,
    "end": 943,
    "range": [
      938,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 945,
    "end": 954,
    "range": [
      945,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 955,
    "end": 960,
    "range": [
      955,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 961,
    "end": 971,
    "range": [
      961,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 977,
    "end": 981,
    "range": [
      977,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 983,
    "end": 992,
    "range": [
      983,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 993,
    "end": 997,
    "range": [
      993,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 998,
    "end": 1008,
    "range": [
      998,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1014,
    "end": 1019,
    "range": [
      1014,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 1021,
    "end": 1030,
    "range": [
      1021,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1031,
    "end": 1036,
    "range": [
      1031,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "innerProps",
    "start": 1037,
    "end": 1047,
    "range": [
      1037,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 1049,
    "end": 1059,
    "range": [
      1049,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "oneOfType",
    "start": 1065,
    "end": 1074,
    "range": [
      1065,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 1076,
    "end": 1085,
    "range": [
      1076,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "oneOfType",
    "start": 1086,
    "end": 1095,
    "range": [
      1086,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayOfTypes",
    "start": 1096,
    "end": 1108,
    "range": [
      1096,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 1110,
    "end": 1120,
    "range": [
      1110,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1126,
    "end": 1130,
    "range": [
      1126,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractedProps",
    "start": 1131,
    "end": 1145,
    "range": [
      1131,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 1148,
    "end": 1157,
    "range": [
      1148,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "InferProps",
    "start": 1158,
    "end": 1168,
    "range": [
      1158,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1169,
    "end": 1175,
    "range": [
      1169,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 1176,
    "end": 1185,
    "range": [
      1176,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 1189,
    "end": 1193,
    "range": [
      1189,
      1193
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractedPropsWithoutAnnotation",
    "start": 1194,
    "end": 1225,
    "range": [
      1194,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 1228,
    "end": 1237,
    "range": [
      1228,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "InferProps",
    "start": 1238,
    "end": 1248,
    "range": [
      1238,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1249,
    "end": 1255,
    "range": [
      1249,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypesWithoutAnnotation",
    "start": 1256,
    "end": 1282,
    "range": [
      1256,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1286,
    "end": 1290,
    "range": [
      1286,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractPropsMatch",
    "start": 1291,
    "end": 1308,
    "range": [
      1291,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractedProps",
    "start": 1311,
    "end": 1325,
    "range": [
      1311,
      1325
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1326,
    "end": 1333,
    "range": [
      1326,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractedPropsWithoutAnnotation",
    "start": 1334,
    "end": 1365,
    "range": [
      1334,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1368,
    "end": 1372,
    "range": [
      1368,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1375,
    "end": 1380,
    "range": [
      1375,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1382,
    "end": 1387,
    "range": [
      1382,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1391,
    "end": 1395,
    "range": [
      1391,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1399,
    "end": 1403,
    "range": [
      1399,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1404,
    "end": 1406,
    "range": [
      1404,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1407,
    "end": 1410,
    "range": [
      1407,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1411,
    "end": 1413,
    "range": [
      1411,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractPropsMatch",
    "start": 1414,
    "end": 1431,
    "range": [
      1414,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  }
]
```
