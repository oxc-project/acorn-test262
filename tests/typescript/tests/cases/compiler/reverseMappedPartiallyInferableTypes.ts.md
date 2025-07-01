__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 38
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
                "start": 39,
                "end": 40
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 39,
              "end": 40
            }
          ],
          "start": 38,
          "end": 41
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 48,
                "end": 51
              },
              "start": 46,
              "end": 51
            }
          ],
          "start": 44,
          "end": 53
        },
        "declare": false,
        "start": 29,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropType",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 74
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
                "start": 75,
                "end": 76
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 75,
              "end": 76
            }
          ],
          "start": 74,
          "end": 77
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 84
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
                  "start": 85,
                  "end": 86
                },
                "typeArguments": null,
                "start": 85,
                "end": 86
              }
            ],
            "start": 84,
            "end": 87
          },
          "start": 80,
          "end": 87
        },
        "declare": false,
        "start": 61,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropDefaultValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 117
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
                "start": 118,
                "end": 119
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 118,
              "end": 119
            }
          ],
          "start": 117,
          "end": 120
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "typeArguments": null,
          "start": 123,
          "end": 124
        },
        "declare": false,
        "start": 96,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 89,
      "end": 125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropValidatorFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 161
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
                "start": 162,
                "end": 163
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 162,
              "end": 163
            }
          ],
          "start": 161,
          "end": 164
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
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
                    "start": 175,
                    "end": 176
                  },
                  "typeArguments": null,
                  "start": 175,
                  "end": 176
                },
                "start": 173,
                "end": 176
              },
              "start": 168,
              "end": 176
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 181,
              "end": 188
            },
            "start": 178,
            "end": 188
          },
          "start": 167,
          "end": 188
        },
        "declare": false,
        "start": 135,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 128,
      "end": 189
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropValidator",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 215
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
                "start": 216,
                "end": 217
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 216,
              "end": 217
            }
          ],
          "start": 215,
          "end": 218
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 232
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
                  "start": 233,
                  "end": 234
                },
                "typeArguments": null,
                "start": 233,
                "end": 234
              }
            ],
            "start": 232,
            "end": 235
          },
          "start": 221,
          "end": 235
        },
        "declare": false,
        "start": 197,
        "end": 236
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 190,
      "end": 236
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 262
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
                "start": 263,
                "end": 264
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 263,
              "end": 264
            }
          ],
          "start": 262,
          "end": 265
        },
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 278
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 288
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
                          "start": 289,
                          "end": 290
                        },
                        "typeArguments": null,
                        "start": 289,
                        "end": 290
                      }
                    ],
                    "start": 288,
                    "end": 291
                  },
                  "start": 280,
                  "end": 291
                },
                "start": 278,
                "end": 291
              },
              "accessibility": null,
              "static": false,
              "start": 274,
              "end": 292
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 303
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropDefaultValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 322
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
                          "start": 323,
                          "end": 324
                        },
                        "typeArguments": null,
                        "start": 323,
                        "end": 324
                      }
                    ],
                    "start": 322,
                    "end": 325
                  },
                  "start": 306,
                  "end": 325
                },
                "start": 304,
                "end": 325
              },
              "accessibility": null,
              "static": false,
              "start": 298,
              "end": 326
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 339
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 342,
                  "end": 349
                },
                "start": 340,
                "end": 349
              },
              "accessibility": null,
              "static": false,
              "start": 331,
              "end": 350
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 364
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropValidatorFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 388
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
                          "start": 389,
                          "end": 390
                        },
                        "typeArguments": null,
                        "start": 389,
                        "end": 390
                      }
                    ],
                    "start": 388,
                    "end": 391
                  },
                  "start": 367,
                  "end": 391
                },
                "start": 365,
                "end": 391
              },
              "accessibility": null,
              "static": false,
              "start": 355,
              "end": 392
            }
          ],
          "start": 268,
          "end": 394
        },
        "declare": false,
        "start": 246,
        "end": 394
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 239,
      "end": 394
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecordPropsDefinition",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 429
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
                "start": 430,
                "end": 431
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 430,
              "end": 431
            }
          ],
          "start": 429,
          "end": 432
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 443
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
                "start": 453,
                "end": 454
              },
              "typeArguments": null,
              "start": 453,
              "end": 454
            },
            "start": 447,
            "end": 454
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropValidator",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 470
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
                      "start": 471,
                      "end": 472
                    },
                    "typeArguments": null,
                    "start": 471,
                    "end": 472
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  },
                  "start": 471,
                  "end": 475
                }
              ],
              "start": 470,
              "end": 476
            },
            "start": 457,
            "end": 476
          },
          "optional": false,
          "readonly": null,
          "start": 435,
          "end": 478
        },
        "declare": false,
        "start": 403,
        "end": 478
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 396,
      "end": 478
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropsDefinition",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 506
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
                "start": 507,
                "end": 508
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 507,
              "end": 508
            }
          ],
          "start": 506,
          "end": 509
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RecordPropsDefinition",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 533
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
                  "start": 534,
                  "end": 535
                },
                "typeArguments": null,
                "start": 534,
                "end": 535
              }
            ],
            "start": 533,
            "end": 536
          },
          "start": 512,
          "end": 536
        },
        "declare": false,
        "start": 486,
        "end": 537
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 479,
      "end": 537
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extend",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 563
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
              "start": 564,
              "end": 565
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 564,
            "end": 565
          }
        ],
        "start": 563,
        "end": 566
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 574
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 574
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 569,
              "end": 574
            }
          ],
          "optional": false,
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 585
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropsDefinition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 602
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
                              "start": 603,
                              "end": 604
                            },
                            "typeArguments": null,
                            "start": 603,
                            "end": 604
                          }
                        ],
                        "start": 602,
                        "end": 605
                      },
                      "start": 587,
                      "end": 605
                    },
                    "start": 585,
                    "end": 605
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 580,
                  "end": 605
                }
              ],
              "start": 578,
              "end": 607
            },
            "start": 576,
            "end": 607
          },
          "start": 567,
          "end": 607
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropsDefinition",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 626
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
                  "start": 627,
                  "end": 628
                },
                "typeArguments": null,
                "start": 627,
                "end": 628
              }
            ],
            "start": 626,
            "end": 629
          },
          "start": 611,
          "end": 629
        },
        "start": 608,
        "end": 629
      },
      "body": null,
      "expression": false,
      "start": 540,
      "end": 630
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 648
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
              "name": "valid",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 660
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 662,
                "end": 669
              },
              "start": 660,
              "end": 669
            },
            "accessibility": null,
            "static": false,
            "start": 655,
            "end": 670
          }
        ],
        "start": 649,
        "end": 672
      },
      "declare": false,
      "start": 632,
      "end": 672
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 680,
            "end": 681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 690
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
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 697,
                      "end": 702
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
                            "name": "notResolved",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 714,
                            "end": 725
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
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 741,
                                  "end": 745
                                },
                                "value": {
                                  "type": "TSAsExpression",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 747,
                                    "end": 753
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PropType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 757,
                                      "end": 765
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "MyType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 766,
                                            "end": 772
                                          },
                                          "typeArguments": null,
                                          "start": 766,
                                          "end": 772
                                        }
                                      ],
                                      "start": 765,
                                      "end": 773
                                    },
                                    "start": 757,
                                    "end": 773
                                  },
                                  "start": 747,
                                  "end": 773
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 741,
                                "end": 773
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "validator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 787,
                                  "end": 796
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 798,
                                      "end": 799
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 828,
                                            "end": 829
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "valid",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 830,
                                            "end": 835
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 828,
                                          "end": 835
                                        },
                                        "start": 821,
                                        "end": 836
                                      }
                                    ],
                                    "start": 803,
                                    "end": 850
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 798,
                                  "end": 850
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 787,
                                "end": 850
                              }
                            ],
                            "start": 727,
                            "end": 860
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 714,
                          "end": 860
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "explicit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 870,
                            "end": 878
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
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 894,
                                  "end": 898
                                },
                                "value": {
                                  "type": "TSAsExpression",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 900,
                                    "end": 906
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PropType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 910,
                                      "end": 918
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "MyType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 919,
                                            "end": 925
                                          },
                                          "typeArguments": null,
                                          "start": 919,
                                          "end": 925
                                        }
                                      ],
                                      "start": 918,
                                      "end": 926
                                    },
                                    "start": 910,
                                    "end": 926
                                  },
                                  "start": 900,
                                  "end": 926
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 894,
                                "end": 926
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "validator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 940,
                                  "end": 949
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": false,
                                  "async": false,
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
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "MyType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 955,
                                            "end": 961
                                          },
                                          "typeArguments": null,
                                          "start": 955,
                                          "end": 961
                                        },
                                        "start": 953,
                                        "end": 961
                                      },
                                      "start": 952,
                                      "end": 961
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 991,
                                            "end": 992
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "valid",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 993,
                                            "end": 998
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 991,
                                          "end": 998
                                        },
                                        "start": 984,
                                        "end": 999
                                      }
                                    ],
                                    "start": 966,
                                    "end": 1013
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 951,
                                  "end": 1013
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 940,
                                "end": 1013
                              }
                            ],
                            "start": 880,
                            "end": 1023
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 870,
                          "end": 1023
                        }
                      ],
                      "start": 704,
                      "end": 1029
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 697,
                    "end": 1029
                  }
                ],
                "start": 691,
                "end": 1031
              }
            ],
            "optional": false,
            "start": 684,
            "end": 1032
          },
          "definite": false,
          "start": 680,
          "end": 1032
        }
      ],
      "declare": false,
      "start": 674,
      "end": 1032
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 1034,
          "end": 1035
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicit",
          "optional": false,
          "typeAnnotation": null,
          "start": 1036,
          "end": 1044
        },
        "optional": false,
        "computed": false,
        "start": 1034,
        "end": 1044
      },
      "directive": null,
      "start": 1034,
      "end": 1044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1046
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "notResolved",
          "optional": false,
          "typeAnnotation": null,
          "start": 1047,
          "end": 1058
        },
        "optional": false,
        "computed": false,
        "start": 1045,
        "end": 1058
      },
      "directive": null,
      "start": 1045,
      "end": 1058
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1059,
            "end": 1060
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null,
            "start": 1061,
            "end": 1069
          },
          "optional": false,
          "computed": false,
          "start": 1059,
          "end": 1069
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": null,
          "start": 1070,
          "end": 1078
        },
        "optional": false,
        "computed": false,
        "start": 1059,
        "end": 1078
      },
      "directive": null,
      "start": 1059,
      "end": 1078
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1079,
            "end": 1080
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "notResolved",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1092
          },
          "optional": false,
          "computed": false,
          "start": 1079,
          "end": 1092
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": null,
          "start": 1093,
          "end": 1101
        },
        "optional": false,
        "computed": false,
        "start": 1079,
        "end": 1101
      },
      "directive": null,
      "start": 1079,
      "end": 1101
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 1139,
        "end": 1142
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
              "start": 1143,
              "end": 1144
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1143,
            "end": 1144
          }
        ],
        "start": 1142,
        "end": 1145
      },
      "typeAnnotation": {
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
              "name": "contents",
              "optional": false,
              "typeAnnotation": null,
              "start": 1154,
              "end": 1162
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
                  "start": 1165,
                  "end": 1166
                },
                "typeArguments": null,
                "start": 1165,
                "end": 1166
              },
              "start": 1163,
              "end": 1166
            },
            "accessibility": null,
            "static": false,
            "start": 1154,
            "end": 1167
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "contains",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1180
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "content",
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
                      "start": 1191,
                      "end": 1192
                    },
                    "typeArguments": null,
                    "start": 1191,
                    "end": 1192
                  },
                  "start": 1189,
                  "end": 1192
                },
                "start": 1182,
                "end": 1192
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1195,
                "end": 1202
              },
              "start": 1193,
              "end": 1202
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1172,
            "end": 1203
          }
        ],
        "start": 1148,
        "end": 1205
      },
      "declare": false,
      "start": 1134,
      "end": 1206
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 1213,
        "end": 1219
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
              "start": 1220,
              "end": 1221
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1220,
            "end": 1221
          }
        ],
        "start": 1219,
        "end": 1222
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1232,
          "end": 1233
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
              "start": 1243,
              "end": 1244
            },
            "typeArguments": null,
            "start": 1243,
            "end": 1244
          },
          "start": 1237,
          "end": 1244
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 1247,
            "end": 1250
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
                    "start": 1251,
                    "end": 1252
                  },
                  "typeArguments": null,
                  "start": 1251,
                  "end": 1252
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1254
                  },
                  "typeArguments": null,
                  "start": 1253,
                  "end": 1254
                },
                "start": 1251,
                "end": 1255
              }
            ],
            "start": 1250,
            "end": 1256
          },
          "start": 1247,
          "end": 1256
        },
        "optional": false,
        "readonly": null,
        "start": 1225,
        "end": 1259
      },
      "declare": false,
      "start": 1208,
      "end": 1259
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 1278,
        "end": 1280
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
              "start": 1281,
              "end": 1282
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1281,
            "end": 1282
          }
        ],
        "start": 1280,
        "end": 1283
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 1289,
                "end": 1295
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
                      "start": 1296,
                      "end": 1297
                    },
                    "typeArguments": null,
                    "start": 1296,
                    "end": 1297
                  }
                ],
                "start": 1295,
                "end": 1298
              },
              "start": 1289,
              "end": 1298
            },
            "start": 1287,
            "end": 1298
          },
          "start": 1284,
          "end": 1298
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 1301,
            "end": 1307
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
                  "start": 1308,
                  "end": 1309
                },
                "typeArguments": null,
                "start": 1308,
                "end": 1309
              }
            ],
            "start": 1307,
            "end": 1310
          },
          "start": 1301,
          "end": 1310
        },
        "start": 1299,
        "end": 1310
      },
      "body": null,
      "expression": false,
      "start": 1261,
      "end": 1311
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1359,
            "end": 1363
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1366,
              "end": 1368
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
                      "start": 1375,
                      "end": 1378
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
                            "name": "contents",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1390,
                            "end": 1398
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 1400,
                            "end": 1402
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1390,
                          "end": 1402
                        }
                      ],
                      "start": 1380,
                      "end": 1408
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1375,
                    "end": 1408
                  }
                ],
                "start": 1369,
                "end": 1410
              }
            ],
            "optional": false,
            "start": 1366,
            "end": 1411
          },
          "definite": false,
          "start": 1359,
          "end": 1411
        }
      ],
      "declare": false,
      "start": 1353,
      "end": 1412
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1461,
            "end": 1465
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1470
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
                      "start": 1477,
                      "end": 1480
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
                            "name": "contents",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1492,
                            "end": 1500
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 1502,
                            "end": 1504
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1492,
                          "end": 1504
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "contains",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1514,
                            "end": 1522
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1523,
                                "end": 1524
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "k",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1547,
                                        "end": 1548
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1549,
                                        "end": 1555
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1547,
                                      "end": 1555
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1558,
                                      "end": 1559
                                    },
                                    "start": 1547,
                                    "end": 1559
                                  },
                                  "start": 1540,
                                  "end": 1560
                                }
                              ],
                              "start": 1526,
                              "end": 1570
                            },
                            "expression": false,
                            "start": 1522,
                            "end": 1570
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1514,
                          "end": 1570
                        }
                      ],
                      "start": 1482,
                      "end": 1576
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1477,
                    "end": 1576
                  }
                ],
                "start": 1471,
                "end": 1578
              }
            ],
            "optional": false,
            "start": 1468,
            "end": 1579
          },
          "definite": false,
          "start": 1461,
          "end": 1579
        }
      ],
      "declare": false,
      "start": 1455,
      "end": 1580
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1631
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1634,
              "end": 1636
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
                      "start": 1643,
                      "end": 1646
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
                            "name": "contains",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1658,
                            "end": 1666
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1667,
                                "end": 1668
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "k",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1691,
                                        "end": 1692
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1693,
                                        "end": 1699
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1691,
                                      "end": 1699
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1702,
                                      "end": 1703
                                    },
                                    "start": 1691,
                                    "end": 1703
                                  },
                                  "start": 1684,
                                  "end": 1704
                                }
                              ],
                              "start": 1670,
                              "end": 1714
                            },
                            "expression": false,
                            "start": 1666,
                            "end": 1714
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1658,
                          "end": 1714
                        }
                      ],
                      "start": 1648,
                      "end": 1720
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1643,
                    "end": 1720
                  }
                ],
                "start": 1637,
                "end": 1722
              }
            ],
            "optional": false,
            "start": 1634,
            "end": 1723
          },
          "definite": false,
          "start": 1627,
          "end": 1723
        }
      ],
      "declare": false,
      "start": 1621,
      "end": 1724
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1754,
        "end": 1761
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
              "start": 1762,
              "end": 1763
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1762,
            "end": 1763
          }
        ],
        "start": 1761,
        "end": 1764
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1774,
          "end": 1775
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
              "start": 1785,
              "end": 1786
            },
            "typeArguments": null,
            "start": 1785,
            "end": 1786
          },
          "start": 1779,
          "end": 1786
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
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
                  "start": 1790,
                  "end": 1791
                },
                "typeArguments": null,
                "start": 1790,
                "end": 1791
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1792,
                  "end": 1793
                },
                "typeArguments": null,
                "start": 1792,
                "end": 1793
              },
              "start": 1790,
              "end": 1794
            },
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
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
                        "start": 1802,
                        "end": 1803
                      },
                      "typeArguments": null,
                      "start": 1802,
                      "end": 1803
                    },
                    "start": 1800,
                    "end": 1803
                  },
                  "start": 1797,
                  "end": 1803
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1808,
                  "end": 1815
                },
                "start": 1805,
                "end": 1815
              },
              "start": 1796,
              "end": 1815
            }
          ],
          "start": 1789,
          "end": 1816
        },
        "optional": false,
        "readonly": null,
        "start": 1767,
        "end": 1819
      },
      "declare": false,
      "start": 1749,
      "end": 1820
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferMapped1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1851
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
              "start": 1852,
              "end": 1853
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1852,
            "end": 1853
          }
        ],
        "start": 1851,
        "end": 1854
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1860,
                "end": 1867
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
                      "start": 1868,
                      "end": 1869
                    },
                    "typeArguments": null,
                    "start": 1868,
                    "end": 1869
                  }
                ],
                "start": 1867,
                "end": 1870
              },
              "start": 1860,
              "end": 1870
            },
            "start": 1858,
            "end": 1870
          },
          "start": 1855,
          "end": 1870
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1873,
          "end": 1877
        },
        "start": 1871,
        "end": 1877
      },
      "body": null,
      "expression": false,
      "start": 1822,
      "end": 1878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferMapped1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1880,
          "end": 1892
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1899,
                  "end": 1902
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1905,
                      "end": 1906
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1908,
                          "end": 1911
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1915,
                            "end": 1918
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1919,
                            "end": 1922
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1915,
                          "end": 1922
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 1925,
                          "end": 1926
                        },
                        "start": 1915,
                        "end": 1926
                      },
                      "id": null,
                      "generator": false,
                      "start": 1908,
                      "end": 1926
                    }
                  ],
                  "start": 1904,
                  "end": 1927
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1899,
                "end": 1927
              }
            ],
            "start": 1893,
            "end": 1929
          }
        ],
        "optional": false,
        "start": 1880,
        "end": 1930
      },
      "directive": null,
      "start": 1880,
      "end": 1931
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1938,
        "end": 1945
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
              "start": 1946,
              "end": 1947
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1946,
            "end": 1947
          }
        ],
        "start": 1945,
        "end": 1948
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1958,
          "end": 1959
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
              "start": 1969,
              "end": 1970
            },
            "typeArguments": null,
            "start": 1969,
            "end": 1970
          },
          "start": 1963,
          "end": 1970
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
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
                  "start": 1974,
                  "end": 1975
                },
                "typeArguments": null,
                "start": 1974,
                "end": 1975
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1976,
                  "end": 1977
                },
                "typeArguments": null,
                "start": 1976,
                "end": 1977
              },
              "start": 1974,
              "end": 1978
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSUnknownKeyword",
                "start": 1980,
                "end": 1987
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1996,
                  "end": 1997
                },
                "typeArguments": null,
                "start": 1996,
                "end": 1997
              },
              "trueType": {
                "type": "TSUnknownKeyword",
                "start": 2000,
                "end": 2007
              },
              "falseType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
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
                          "start": 2016,
                          "end": 2017
                        },
                        "typeArguments": null,
                        "start": 2016,
                        "end": 2017
                      },
                      "start": 2014,
                      "end": 2017
                    },
                    "start": 2011,
                    "end": 2017
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2022,
                    "end": 2029
                  },
                  "start": 2019,
                  "end": 2029
                },
                "start": 2010,
                "end": 2029
              },
              "start": 1980,
              "end": 2029
            }
          ],
          "start": 1973,
          "end": 2030
        },
        "optional": false,
        "readonly": null,
        "start": 1951,
        "end": 2033
      },
      "declare": false,
      "start": 1933,
      "end": 2034
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferMapped2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2053,
        "end": 2065
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
              "start": 2066,
              "end": 2067
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2066,
            "end": 2067
          }
        ],
        "start": 2065,
        "end": 2068
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2074,
                "end": 2081
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
                      "start": 2082,
                      "end": 2083
                    },
                    "typeArguments": null,
                    "start": 2082,
                    "end": 2083
                  }
                ],
                "start": 2081,
                "end": 2084
              },
              "start": 2074,
              "end": 2084
            },
            "start": 2072,
            "end": 2084
          },
          "start": 2069,
          "end": 2084
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2087,
          "end": 2091
        },
        "start": 2085,
        "end": 2091
      },
      "body": null,
      "expression": false,
      "start": 2036,
      "end": 2092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferMapped2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2094,
          "end": 2106
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2113,
                  "end": 2116
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 2119,
                      "end": 2120
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2122,
                          "end": 2125
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2129,
                            "end": 2132
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2133,
                            "end": 2136
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2129,
                          "end": 2136
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 2139,
                          "end": 2140
                        },
                        "start": 2129,
                        "end": 2140
                      },
                      "id": null,
                      "generator": false,
                      "start": 2122,
                      "end": 2140
                    }
                  ],
                  "start": 2118,
                  "end": 2141
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2113,
                "end": 2141
              }
            ],
            "start": 2107,
            "end": 2143
          }
        ],
        "optional": false,
        "start": 2094,
        "end": 2144
      },
      "directive": null,
      "start": 2094,
      "end": 2145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 2152,
        "end": 2166
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
              "start": 2167,
              "end": 2168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2167,
            "end": 2168
          }
        ],
        "start": 2166,
        "end": 2169
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 2188,
          "end": 2189
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
              "start": 2199,
              "end": 2200
            },
            "typeArguments": null,
            "start": 2199,
            "end": 2200
          },
          "start": 2193,
          "end": 2200
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
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
                    "start": 2213,
                    "end": 2214
                  },
                  "typeArguments": null,
                  "start": 2213,
                  "end": 2214
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2215,
                    "end": 2216
                  },
                  "typeArguments": null,
                  "start": 2215,
                  "end": 2216
                },
                "start": 2213,
                "end": 2217
              },
              {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
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
                          "start": 2225,
                          "end": 2226
                        },
                        "typeArguments": null,
                        "start": 2225,
                        "end": 2226
                      },
                      "start": 2223,
                      "end": 2226
                    },
                    "start": 2220,
                    "end": 2226
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2231,
                    "end": 2238
                  },
                  "start": 2228,
                  "end": 2238
                },
                "start": 2219,
                "end": 2238
              }
            ],
            "start": 2212,
            "end": 2239
          },
          "start": 2203,
          "end": 2239
        },
        "optional": false,
        "readonly": true,
        "start": 2172,
        "end": 2242
      },
      "declare": false,
      "start": 2147,
      "end": 2243
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferMappedReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 2262,
        "end": 2281
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
              "start": 2282,
              "end": 2283
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2282,
            "end": 2283
          }
        ],
        "start": 2281,
        "end": 2284
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MappedReadonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2290,
                "end": 2304
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
                      "start": 2305,
                      "end": 2306
                    },
                    "typeArguments": null,
                    "start": 2305,
                    "end": 2306
                  }
                ],
                "start": 2304,
                "end": 2307
              },
              "start": 2290,
              "end": 2307
            },
            "start": 2288,
            "end": 2307
          },
          "start": 2285,
          "end": 2307
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2310,
          "end": 2314
        },
        "start": 2308,
        "end": 2314
      },
      "body": null,
      "expression": false,
      "start": 2245,
      "end": 2315
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferMappedReadonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 2317,
          "end": 2336
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2343,
                  "end": 2346
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 2349,
                      "end": 2350
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2352,
                          "end": 2355
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2359,
                            "end": 2362
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2363,
                            "end": 2366
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2359,
                          "end": 2366
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 2369,
                          "end": 2370
                        },
                        "start": 2359,
                        "end": 2370
                      },
                      "id": null,
                      "generator": false,
                      "start": 2352,
                      "end": 2370
                    }
                  ],
                  "start": 2348,
                  "end": 2371
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2343,
                "end": 2371
              }
            ],
            "start": 2337,
            "end": 2373
          }
        ],
        "optional": false,
        "start": 2317,
        "end": 2374
      },
      "directive": null,
      "start": 2317,
      "end": 2375
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 2375
}
```
