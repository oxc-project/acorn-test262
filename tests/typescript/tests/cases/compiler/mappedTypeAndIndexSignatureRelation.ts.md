__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 804,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Same",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 15,
        "end": 39,
        "key": {
          "type": "Identifier",
          "start": 18,
          "end": 19,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 23,
          "end": 30,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 29,
            "end": 30,
            "typeName": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 33,
          "end": 37,
          "objectType": {
            "type": "TSTypeReference",
            "start": 33,
            "end": 34,
            "typeName": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 42,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 49,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 49,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 50,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 60,
              "end": 87,
              "typeName": {
                "type": "Identifier",
                "start": 60,
                "end": 66,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 66,
                "end": 87,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 67,
                    "end": 78,
                    "typeName": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 78,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 91,
        "end": 92,
        "typeName": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 94,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 139,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 118,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 118,
                "end": 139,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 119,
                    "end": 130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 130,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 132,
                    "end": 138
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 143,
        "end": 154,
        "typeName": {
          "type": "Identifier",
          "start": 143,
          "end": 145,
          "decorators": [],
          "name": "T1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 145,
          "end": 154,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 146,
              "end": 153,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 150,
                "decorators": [],
                "name": "Same",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 150,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 152,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 179,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 187,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 187,
        "end": 241,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 240,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 199,
              "decorators": [],
              "name": "IdentifierT",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 214,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 214,
                "end": 240,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 215,
                    "end": 226,
                    "typeName": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 226,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 228,
                    "end": 239,
                    "typeName": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 239,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 248,
        "end": 259,
        "typeName": {
          "type": "Identifier",
          "start": 248,
          "end": 259,
          "decorators": [],
          "name": "IdentifierT",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 263,
      "end": 398,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 271,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 271,
        "end": 328,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 272,
            "end": 324,
            "name": {
              "type": "Identifier",
              "start": 272,
              "end": 283,
              "decorators": [],
              "name": "IdentifierT",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 292,
              "end": 324,
              "typeName": {
                "type": "Identifier",
                "start": 292,
                "end": 298,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 298,
                "end": 324,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 299,
                    "end": 310,
                    "typeName": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 310,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 312,
                    "end": 323,
                    "typeName": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 323,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 326,
            "end": 327,
            "name": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 335,
        "end": 396,
        "key": {
          "type": "Identifier",
          "start": 346,
          "end": 347,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 351,
          "end": 358,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 357,
            "end": 358,
            "typeName": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 362,
          "end": 390,
          "typeName": {
            "type": "Identifier",
            "start": 362,
            "end": 365,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 365,
            "end": 390,
            "params": [
              {
                "type": "TSIntersectionType",
                "start": 366,
                "end": 389,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 366,
                    "end": 377,
                    "typeName": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 377,
                      "decorators": [],
                      "name": "IdentifierT",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 380,
                    "end": 389,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 382,
                        "end": 387,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 383,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 384,
                          "end": 387,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 386,
                            "end": 387,
                            "typeName": {
                              "type": "Identifier",
                              "start": 386,
                              "end": 387,
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 400,
      "end": 442,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 411,
        "decorators": [],
        "name": "Merge2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 411,
        "end": 414,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 412,
            "end": 413,
            "name": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 417,
        "end": 442,
        "key": {
          "type": "Identifier",
          "start": 420,
          "end": 421,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 425,
          "end": 432,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 431,
            "end": 432,
            "typeName": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 436,
          "end": 440,
          "objectType": {
            "type": "TSTypeReference",
            "start": 436,
            "end": 437,
            "typeName": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 438,
            "end": 439,
            "typeName": {
              "type": "Identifier",
              "start": 438,
              "end": 439,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 443,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 448,
        "end": 452,
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 452,
        "end": 509,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 453,
            "end": 505,
            "name": {
              "type": "Identifier",
              "start": 453,
              "end": 464,
              "decorators": [],
              "name": "IdentifierT",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 473,
              "end": 505,
              "typeName": {
                "type": "Identifier",
                "start": 473,
                "end": 479,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 479,
                "end": 505,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 480,
                    "end": 491,
                    "typeName": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 491,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 493,
                    "end": 504,
                    "typeName": {
                      "type": "Identifier",
                      "start": 493,
                      "end": 504,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 507,
            "end": 508,
            "name": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 516,
        "end": 583,
        "key": {
          "type": "Identifier",
          "start": 527,
          "end": 528,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 532,
          "end": 539,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 538,
            "end": 539,
            "typeName": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 542,
          "end": 577,
          "typeName": {
            "type": "Identifier",
            "start": 542,
            "end": 545,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 545,
            "end": 577,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 546,
                "end": 576,
                "typeName": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 552,
                  "decorators": [],
                  "name": "Merge2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 552,
                  "end": 576,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 553,
                      "end": 575,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 553,
                          "end": 564,
                          "typeName": {
                            "type": "Identifier",
                            "start": 553,
                            "end": 564,
                            "decorators": [],
                            "name": "IdentifierT",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 567,
                          "end": 575,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 569,
                              "end": 573,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 569,
                                "end": 570,
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 570,
                                "end": 573,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 572,
                                  "end": 573,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 572,
                                    "end": 573,
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 587,
      "end": 608,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 600,
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 600,
        "end": 603,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 601,
            "end": 602,
            "name": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 606,
        "end": 607,
        "typeName": {
          "type": "Identifier",
          "start": 606,
          "end": 607,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 609,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 614,
        "end": 620,
        "decorators": [],
        "name": "Merge3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 620,
        "end": 623,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 621,
            "end": 622,
            "name": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 626,
        "end": 661,
        "typeName": {
          "type": "Identifier",
          "start": 626,
          "end": 634,
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 634,
          "end": 661,
          "params": [
            {
              "type": "TSMappedType",
              "start": 635,
              "end": 660,
              "key": {
                "type": "Identifier",
                "start": 638,
                "end": 639,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 643,
                "end": 650,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 649,
                  "end": 650,
                  "typeName": {
                    "type": "Identifier",
                    "start": 649,
                    "end": 650,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 654,
                "end": 658,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 654,
                  "end": 655,
                  "typeName": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 655,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 656,
                  "end": 657,
                  "typeName": {
                    "type": "Identifier",
                    "start": 656,
                    "end": 657,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 662,
      "end": 804,
      "id": {
        "type": "Identifier",
        "start": 667,
        "end": 671,
        "decorators": [],
        "name": "Bar3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 671,
        "end": 728,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 672,
            "end": 724,
            "name": {
              "type": "Identifier",
              "start": 672,
              "end": 683,
              "decorators": [],
              "name": "IdentifierT",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 692,
              "end": 724,
              "typeName": {
                "type": "Identifier",
                "start": 692,
                "end": 698,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 698,
                "end": 724,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 699,
                    "end": 710,
                    "typeName": {
                      "type": "Identifier",
                      "start": 699,
                      "end": 710,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 712,
                    "end": 723,
                    "typeName": {
                      "type": "Identifier",
                      "start": 712,
                      "end": 723,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 726,
            "end": 727,
            "name": {
              "type": "Identifier",
              "start": 726,
              "end": 727,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 735,
        "end": 802,
        "key": {
          "type": "Identifier",
          "start": 746,
          "end": 747,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 751,
          "end": 758,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 757,
            "end": 758,
            "typeName": {
              "type": "Identifier",
              "start": 757,
              "end": 758,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 761,
          "end": 796,
          "typeName": {
            "type": "Identifier",
            "start": 761,
            "end": 764,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 764,
            "end": 796,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 765,
                "end": 795,
                "typeName": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 771,
                  "decorators": [],
                  "name": "Merge3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 771,
                  "end": 795,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 772,
                      "end": 794,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 772,
                          "end": 783,
                          "typeName": {
                            "type": "Identifier",
                            "start": 772,
                            "end": 783,
                            "decorators": [],
                            "name": "IdentifierT",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 786,
                          "end": 794,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 788,
                              "end": 792,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 788,
                                "end": 789,
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 789,
                                "end": 792,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 791,
                                  "end": 792,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 791,
                                    "end": 792,
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
