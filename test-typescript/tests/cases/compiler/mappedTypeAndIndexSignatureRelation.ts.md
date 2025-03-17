__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 805,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Same",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 18,
          "end": 30,
          "name": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 18,
          "end": 19,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 60,
              "end": 87,
              "typeName": {
                "type": "Identifier",
                "start": 60,
                "end": 66,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 118,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          "name": "T1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "Same",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "IdentifierT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 214,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          "name": "IdentifierT",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "IdentifierT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 292,
              "end": 324,
              "typeName": {
                "type": "Identifier",
                "start": 292,
                "end": 298,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 346,
          "end": 358,
          "name": {
            "type": "Identifier",
            "start": 346,
            "end": 347,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                      "name": "IdentifierT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
        "optional": null,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 346,
          "end": 347,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "Merge2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 420,
          "end": 432,
          "name": {
            "type": "Identifier",
            "start": 420,
            "end": 421,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 420,
          "end": 421,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "Bar2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "IdentifierT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 473,
              "end": 505,
              "typeName": {
                "type": "Identifier",
                "start": 473,
                "end": 479,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 527,
          "end": 539,
          "name": {
            "type": "Identifier",
            "start": 527,
            "end": 528,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Merge2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "IdentifierT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                    "name": "k",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
        "optional": null,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 527,
          "end": 528,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "Identity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "Merge3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "name": "Identity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 638,
                "end": 650,
                "name": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 639,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 638,
                "end": 639,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
        "name": "Bar3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "IdentifierT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 692,
              "end": 724,
              "typeName": {
                "type": "Identifier",
                "start": 692,
                "end": 698,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "PropertyKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 746,
          "end": 758,
          "name": {
            "type": "Identifier",
            "start": 746,
            "end": 747,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Merge3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "IdentifierT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                    "name": "k",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
        "optional": null,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 746,
          "end": 747,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
