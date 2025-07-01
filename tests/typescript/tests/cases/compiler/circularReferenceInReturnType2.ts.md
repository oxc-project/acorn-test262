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
        "name": "ObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 22
          }
        ],
        "start": 15,
        "end": 23
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 36,
                  "end": 44
                },
                "start": 36,
                "end": 44
              },
              "start": 34,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__source",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "source",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Source",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 73
                        },
                        "typeArguments": null,
                        "start": 67,
                        "end": 73
                      },
                      "start": 65,
                      "end": 73
                    },
                    "start": 59,
                    "end": 73
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 78,
                    "end": 82
                  },
                  "start": 75,
                  "end": 82
                },
                "start": 58,
                "end": 82
              },
              "start": 56,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 48,
            "end": 83
          }
        ],
        "start": 26,
        "end": 85
      },
      "declare": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Field",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 98
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 105
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 105
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 110
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 107,
            "end": 125
          }
        ],
        "start": 98,
        "end": 126
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
              "name": "__key",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 149
                        },
                        "typeArguments": null,
                        "start": 146,
                        "end": 149
                      },
                      "start": 144,
                      "end": 149
                    },
                    "start": 141,
                    "end": 149
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 154,
                    "end": 158
                  },
                  "start": 151,
                  "end": 158
                },
                "start": 140,
                "end": 158
              },
              "start": 138,
              "end": 158
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 159
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__source",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "source",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Source",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 187
                        },
                        "typeArguments": null,
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "start": 173,
                    "end": 187
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 192,
                    "end": 196
                  },
                  "start": 189,
                  "end": 196
                },
                "start": 172,
                "end": 196
              },
              "start": 170,
              "end": 196
            },
            "accessibility": null,
            "static": false,
            "start": 162,
            "end": 197
          }
        ],
        "start": 129,
        "end": 199
      },
      "declare": false,
      "start": 88,
      "end": 200
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
            "name": "object",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Source",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 231
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 225,
                      "end": 231
                    }
                  ],
                  "start": 224,
                  "end": 232
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Fields",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 248
                          },
                          "constraint": {
                            "type": "TSMappedType",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 264,
                              "end": 267
                            },
                            "constraint": {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Fields",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 277,
                                  "end": 283
                                },
                                "typeArguments": null,
                                "start": 277,
                                "end": 283
                              },
                              "start": 271,
                              "end": 283
                            },
                            "nameType": null,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Field",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 286,
                                "end": 291
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Source",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 292,
                                      "end": 298
                                    },
                                    "typeArguments": null,
                                    "start": 292,
                                    "end": 298
                                  },
                                  {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Key",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 300,
                                          "end": 303
                                        },
                                        "typeArguments": null,
                                        "start": 300,
                                        "end": 303
                                      },
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 306,
                                        "end": 312
                                      }
                                    ],
                                    "start": 300,
                                    "end": 312
                                  }
                                ],
                                "start": 291,
                                "end": 313
                              },
                              "start": 286,
                              "end": 313
                            },
                            "optional": false,
                            "readonly": null,
                            "start": 257,
                            "end": 318
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 242,
                          "end": 318
                        }
                      ],
                      "start": 238,
                      "end": 320
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "config",
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 333,
                                  "end": 337
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 339,
                                    "end": 345
                                  },
                                  "start": 337,
                                  "end": 345
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 333,
                                "end": 346
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fields",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 349,
                                  "end": 355
                                },
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
                                          "name": "Fields",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 357,
                                          "end": 363
                                        },
                                        "typeArguments": null,
                                        "start": 357,
                                        "end": 363
                                      },
                                      {
                                        "type": "TSFunctionType",
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Fields",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 373,
                                              "end": 379
                                            },
                                            "typeArguments": null,
                                            "start": 373,
                                            "end": 379
                                          },
                                          "start": 370,
                                          "end": 379
                                        },
                                        "start": 367,
                                        "end": 379
                                      }
                                    ],
                                    "start": 357,
                                    "end": 380
                                  },
                                  "start": 355,
                                  "end": 380
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 349,
                                "end": 381
                              }
                            ],
                            "start": 329,
                            "end": 383
                          },
                          "start": 327,
                          "end": 383
                        },
                        "start": 321,
                        "end": 383
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjectType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 398
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Source",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 399,
                                "end": 405
                              },
                              "typeArguments": null,
                              "start": 399,
                              "end": 405
                            }
                          ],
                          "start": 398,
                          "end": 406
                        },
                        "start": 388,
                        "end": 406
                      },
                      "start": 385,
                      "end": 406
                    },
                    "start": 238,
                    "end": 406
                  },
                  "start": 235,
                  "end": 406
                },
                "start": 224,
                "end": 406
              },
              "start": 222,
              "end": 406
            },
            "start": 216,
            "end": 406
          },
          "init": null,
          "definite": false,
          "start": 216,
          "end": 406
        }
      ],
      "declare": true,
      "start": 202,
      "end": 407
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferValueFromObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 438
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 443
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectType",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 462
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 463,
                    "end": 466
                  }
                ],
                "start": 462,
                "end": 467
              },
              "start": 452,
              "end": 467
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 467
          }
        ],
        "start": 438,
        "end": 468
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 477
          },
          "typeArguments": null,
          "start": 473,
          "end": 477
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectType",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 496
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
                    "name": "Source",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 509
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 503,
                  "end": 509
                },
                "start": 497,
                "end": 509
              }
            ],
            "start": 496,
            "end": 510
          },
          "start": 486,
          "end": 510
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Source",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 519
          },
          "typeArguments": null,
          "start": 513,
          "end": 519
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 522,
          "end": 527
        },
        "start": 473,
        "end": 527
      },
      "declare": false,
      "start": 409,
      "end": 528
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldResolver",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 548
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 555
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 549,
            "end": 555
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 562
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectType",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 581
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 582,
                    "end": 585
                  }
                ],
                "start": 581,
                "end": 586
              },
              "start": 571,
              "end": 586
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 557,
            "end": 586
          }
        ],
        "start": 548,
        "end": 587
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Source",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 608
                },
                "typeArguments": null,
                "start": 602,
                "end": 608
              },
              "start": 600,
              "end": 608
            },
            "start": 594,
            "end": 608
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferValueFromObjectType",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 638
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 644
                  },
                  "typeArguments": null,
                  "start": 639,
                  "end": 644
                }
              ],
              "start": 638,
              "end": 645
            },
            "start": 614,
            "end": 645
          },
          "start": 611,
          "end": 645
        },
        "start": 590,
        "end": 645
      },
      "declare": false,
      "start": 530,
      "end": 646
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldFuncArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 653,
        "end": 666
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 673
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 667,
            "end": 673
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 679
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectType",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 698
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 699,
                    "end": 702
                  }
                ],
                "start": 698,
                "end": 703
              },
              "start": 688,
              "end": 703
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 675,
            "end": 703
          }
        ],
        "start": 666,
        "end": 704
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
              "start": 711,
              "end": 715
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 717,
                  "end": 721
                },
                "typeArguments": null,
                "start": 717,
                "end": 721
              },
              "start": 715,
              "end": 721
            },
            "accessibility": null,
            "static": false,
            "start": 711,
            "end": 722
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolve",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 732
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldResolver",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 734,
                  "end": 747
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Source",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 754
                      },
                      "typeArguments": null,
                      "start": 748,
                      "end": 754
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 756,
                        "end": 760
                      },
                      "typeArguments": null,
                      "start": 756,
                      "end": 760
                    }
                  ],
                  "start": 747,
                  "end": 761
                },
                "start": 734,
                "end": 761
              },
              "start": 732,
              "end": 761
            },
            "accessibility": null,
            "static": false,
            "start": 725,
            "end": 762
          }
        ],
        "start": 707,
        "end": 764
      },
      "declare": false,
      "start": 648,
      "end": 765
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
            "name": "field",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Source",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 795
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 789,
                      "end": 795
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 797,
                        "end": 801
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjectType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 810,
                          "end": 820
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 821,
                              "end": 824
                            }
                          ],
                          "start": 820,
                          "end": 825
                        },
                        "start": 810,
                        "end": 825
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 797,
                      "end": 825
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 830
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 839,
                        "end": 845
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 827,
                      "end": 845
                    }
                  ],
                  "start": 788,
                  "end": 846
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FieldFuncArgs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 870
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Source",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 871,
                                "end": 877
                              },
                              "typeArguments": null,
                              "start": 871,
                              "end": 877
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 879,
                                "end": 883
                              },
                              "typeArguments": null,
                              "start": 879,
                              "end": 883
                            }
                          ],
                          "start": 870,
                          "end": 884
                        },
                        "start": 857,
                        "end": 884
                      },
                      "start": 855,
                      "end": 884
                    },
                    "start": 850,
                    "end": 884
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 890,
                      "end": 895
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Source",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 896,
                            "end": 902
                          },
                          "typeArguments": null,
                          "start": 896,
                          "end": 902
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 904,
                            "end": 907
                          },
                          "typeArguments": null,
                          "start": 904,
                          "end": 907
                        }
                      ],
                      "start": 895,
                      "end": 908
                    },
                    "start": 890,
                    "end": 908
                  },
                  "start": 887,
                  "end": 908
                },
                "start": 788,
                "end": 908
              },
              "start": 786,
              "end": 908
            },
            "start": 781,
            "end": 908
          },
          "init": null,
          "definite": false,
          "start": 781,
          "end": 908
        }
      ],
      "declare": true,
      "start": 767,
      "end": 909
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null,
        "start": 916,
        "end": 925
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 933
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 935,
                "end": 941
              },
              "start": 933,
              "end": 941
            },
            "accessibility": null,
            "static": false,
            "start": 930,
            "end": 941
          }
        ],
        "start": 928,
        "end": 943
      },
      "declare": false,
      "start": 911,
      "end": 944
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1000,
            "end": 1001
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1010
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1011,
                      "end": 1020
                    },
                    "typeArguments": null,
                    "start": 1011,
                    "end": 1020
                  }
                ],
                "start": 1010,
                "end": 1021
              },
              "arguments": [],
              "optional": false,
              "start": 1004,
              "end": 1023
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
                      "start": 1028,
                      "end": 1032
                    },
                    "value": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 1034,
                      "end": 1037
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1028,
                    "end": 1037
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1041,
                      "end": 1047
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
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
                              "start": 1062,
                              "end": 1063
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "field",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1065,
                                "end": 1070
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
                                        "name": "type",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1079,
                                        "end": 1083
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1085,
                                        "end": 1086
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1079,
                                      "end": 1086
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1094,
                                        "end": 1101
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
                                                      "start": 1133,
                                                      "end": 1136
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "value": 100,
                                                      "raw": "100",
                                                      "start": 1138,
                                                      "end": 1141
                                                    },
                                                    "method": false,
                                                    "shorthand": false,
                                                    "computed": false,
                                                    "optional": false,
                                                    "start": 1133,
                                                    "end": 1141
                                                  }
                                                ],
                                                "start": 1121,
                                                "end": 1152
                                              },
                                              "start": 1114,
                                              "end": 1153
                                            }
                                          ],
                                          "start": 1104,
                                          "end": 1161
                                        },
                                        "expression": false,
                                        "start": 1101,
                                        "end": 1161
                                      },
                                      "method": true,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1094,
                                      "end": 1161
                                    }
                                  ],
                                  "start": 1071,
                                  "end": 1168
                                }
                              ],
                              "optional": false,
                              "start": 1065,
                              "end": 1169
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1062,
                            "end": 1169
                          }
                        ],
                        "start": 1056,
                        "end": 1174
                      },
                      "id": null,
                      "generator": false,
                      "start": 1049,
                      "end": 1175
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1041,
                    "end": 1175
                  }
                ],
                "start": 1024,
                "end": 1178
              }
            ],
            "optional": false,
            "start": 1004,
            "end": 1179
          },
          "definite": false,
          "start": 1000,
          "end": 1179
        }
      ],
      "declare": false,
      "start": 994,
      "end": 1180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1180
}
```
