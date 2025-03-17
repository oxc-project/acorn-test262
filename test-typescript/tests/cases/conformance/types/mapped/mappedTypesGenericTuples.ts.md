__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 1601,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "K",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
        "start": 79,
        "end": 100,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 82,
          "end": 94,
          "name": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 87,
            "end": 94,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 94,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
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
          "start": 97,
          "end": 98,
          "typeName": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 87,
          "end": 94,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 93,
            "end": 94,
            "typeName": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
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
          "start": 82,
          "end": 83,
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
      "start": 102,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 108,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 110,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
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
        "start": 114,
        "end": 138,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 117,
          "end": 129,
          "name": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 122,
            "end": 129,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
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
          "start": 132,
          "end": 136,
          "objectType": {
            "type": "TSTypeReference",
            "start": 132,
            "end": 133,
            "typeName": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 134,
            "end": 135,
            "typeName": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
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
          "start": 122,
          "end": 129,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 128,
            "end": 129,
            "typeName": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
          "start": 117,
          "end": 118,
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
      "start": 141,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "name": "KA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 151,
        "end": 179,
        "typeName": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 152,
          "end": 179,
          "params": [
            {
              "type": "TSTupleType",
              "start": 153,
              "end": 178,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 154,
                  "end": 160
                },
                {
                  "type": "TSStringKeyword",
                  "start": 162,
                  "end": 168
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 170,
                  "end": 177
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 201,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 208,
        "name": "KB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 211,
        "end": 251,
        "typeName": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 212,
          "end": 251,
          "params": [
            {
              "type": "TSTupleType",
              "start": 213,
              "end": 250,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                },
                {
                  "type": "TSStringKeyword",
                  "start": 222,
                  "end": 228
                },
                {
                  "type": "TSRestType",
                  "start": 230,
                  "end": 241,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 233,
                    "end": 241,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 233,
                      "end": 239
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 243,
                  "end": 249
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 289,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 296,
        "name": "KC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 299,
        "end": 315,
        "typeName": {
          "type": "Identifier",
          "start": 299,
          "end": 300,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 300,
          "end": 315,
          "params": [
            {
              "type": "TSTupleType",
              "start": 301,
              "end": 314,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 302,
                  "end": 313,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 305,
                    "end": 313,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 305,
                      "end": 311
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 330,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 337,
        "name": "KD",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 340,
        "end": 351,
        "typeName": {
          "type": "Identifier",
          "start": 340,
          "end": 341,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 341,
          "end": 351,
          "params": [
            {
              "type": "TSArrayType",
              "start": 342,
              "end": 350,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 367,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 373,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 376,
        "end": 389,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 378,
            "end": 387,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 387,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 381,
                "end": 387
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 391,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 397,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 400,
        "end": 413,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 402,
            "end": 411,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 411,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 415,
      "end": 438,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 421,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 424,
        "end": 437,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 426,
            "end": 435,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 426,
              "end": 427,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 427,
              "end": 435,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 429,
                "end": 435
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 439,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 445,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 448,
        "end": 461,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 450,
            "end": 459,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 459,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 453,
                "end": 459
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 464,
      "end": 516,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 471,
        "name": "V0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 471,
        "end": 492,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 472,
            "end": 491,
            "name": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 482,
              "end": 491,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 482,
                "end": 489
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
        "type": "TSTupleType",
        "start": 495,
        "end": 516,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 496,
            "end": 497,
            "typeName": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSOptionalType",
            "start": 499,
            "end": 501,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 499,
              "end": 500,
              "typeName": {
                "type": "Identifier",
                "start": 499,
                "end": 500,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 503,
            "end": 507,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 506,
              "end": 507,
              "typeName": {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 509,
            "end": 515,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 512,
              "end": 515,
              "elementType": {
                "type": "TSTypeReference",
                "start": 512,
                "end": 513,
                "typeName": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 513,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 517,
      "end": 571,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 524,
        "name": "V1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 524,
        "end": 545,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 525,
            "end": 544,
            "name": {
              "type": "Identifier",
              "start": 525,
              "end": 526,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 535,
              "end": 544,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 535,
                "end": 542
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
        "type": "TSTupleType",
        "start": 548,
        "end": 571,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 549,
            "end": 550,
            "typeName": {
              "type": "Identifier",
              "start": 549,
              "end": 550,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSRestType",
            "start": 552,
            "end": 556,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 555,
              "end": 556,
              "typeName": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 558,
            "end": 559,
            "typeName": {
              "type": "Identifier",
              "start": 558,
              "end": 559,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSRestType",
            "start": 561,
            "end": 567,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 564,
              "end": 567,
              "elementType": {
                "type": "TSTypeReference",
                "start": 564,
                "end": 565,
                "typeName": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 565,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 569,
            "end": 570,
            "typeName": {
              "type": "Identifier",
              "start": 569,
              "end": 570,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 573,
      "end": 613,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 580,
        "name": "K0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 580,
        "end": 601,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 581,
            "end": 600,
            "name": {
              "type": "Identifier",
              "start": 581,
              "end": 582,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 591,
              "end": 600,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 591,
                "end": 598
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
        "start": 604,
        "end": 612,
        "typeName": {
          "type": "Identifier",
          "start": 604,
          "end": 605,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 605,
          "end": 612,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 606,
              "end": 611,
              "typeName": {
                "type": "Identifier",
                "start": 606,
                "end": 608,
                "name": "V0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 608,
                "end": 611,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 609,
                    "end": 610,
                    "typeName": {
                      "type": "Identifier",
                      "start": 609,
                      "end": 610,
                      "name": "T",
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
      "start": 652,
      "end": 692,
      "id": {
        "type": "Identifier",
        "start": 657,
        "end": 659,
        "name": "K1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 659,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 660,
            "end": 679,
            "name": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 670,
              "end": 679,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 670,
                "end": 677
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
        "start": 683,
        "end": 691,
        "typeName": {
          "type": "Identifier",
          "start": 683,
          "end": 684,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 684,
          "end": 691,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 685,
              "end": 690,
              "typeName": {
                "type": "Identifier",
                "start": 685,
                "end": 687,
                "name": "V1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 687,
                "end": 690,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 688,
                    "end": 689,
                    "typeName": {
                      "type": "Identifier",
                      "start": 688,
                      "end": 689,
                      "name": "T",
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
      "start": 742,
      "end": 782,
      "id": {
        "type": "Identifier",
        "start": 747,
        "end": 749,
        "name": "M0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 749,
        "end": 770,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 750,
            "end": 769,
            "name": {
              "type": "Identifier",
              "start": 750,
              "end": 751,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 760,
              "end": 769,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 760,
                "end": 767
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
        "start": 773,
        "end": 781,
        "typeName": {
          "type": "Identifier",
          "start": 773,
          "end": 774,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 774,
          "end": 781,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 775,
              "end": 780,
              "typeName": {
                "type": "Identifier",
                "start": 775,
                "end": 777,
                "name": "V0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 777,
                "end": 780,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 778,
                    "end": 779,
                    "typeName": {
                      "type": "Identifier",
                      "start": 778,
                      "end": 779,
                      "name": "T",
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
      "start": 812,
      "end": 852,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 819,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 819,
        "end": 840,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 820,
            "end": 839,
            "name": {
              "type": "Identifier",
              "start": 820,
              "end": 821,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 830,
              "end": 839,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 830,
                "end": 837
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
        "start": 843,
        "end": 851,
        "typeName": {
          "type": "Identifier",
          "start": 843,
          "end": 844,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 844,
          "end": 851,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 845,
              "end": 850,
              "typeName": {
                "type": "Identifier",
                "start": 845,
                "end": 847,
                "name": "V1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 847,
                "end": 850,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 848,
                    "end": 849,
                    "typeName": {
                      "type": "Identifier",
                      "start": 848,
                      "end": 849,
                      "name": "T",
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
      "start": 907,
      "end": 962,
      "id": {
        "type": "Identifier",
        "start": 912,
        "end": 916,
        "name": "Keys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 916,
        "end": 937,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 917,
            "end": 936,
            "name": {
              "type": "Identifier",
              "start": 917,
              "end": 918,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 927,
              "end": 936,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 927,
                "end": 934
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
        "type": "TSMappedType",
        "start": 940,
        "end": 961,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 943,
          "end": 955,
          "name": {
            "type": "Identifier",
            "start": 943,
            "end": 944,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 948,
            "end": 955,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 954,
              "end": 955,
              "typeName": {
                "type": "Identifier",
                "start": 954,
                "end": 955,
                "name": "O",
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
          "start": 958,
          "end": 959,
          "typeName": {
            "type": "Identifier",
            "start": 958,
            "end": 959,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 948,
          "end": 955,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 954,
            "end": 955,
            "typeName": {
              "type": "Identifier",
              "start": 954,
              "end": 955,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 943,
          "end": 944,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 964,
      "end": 1005,
      "id": {
        "type": "Identifier",
        "start": 969,
        "end": 974,
        "name": "Keys1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 977,
        "end": 1004,
        "typeName": {
          "type": "Identifier",
          "start": 977,
          "end": 981,
          "name": "Keys",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 981,
          "end": 1004,
          "params": [
            {
              "type": "TSTupleType",
              "start": 982,
              "end": 1003,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 983,
                  "end": 989
                },
                {
                  "type": "TSRestType",
                  "start": 991,
                  "end": 1002,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 994,
                    "end": 1002,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 994,
                      "end": 1000
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1006,
      "end": 1055,
      "id": {
        "type": "Identifier",
        "start": 1011,
        "end": 1016,
        "name": "Keys2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1019,
        "end": 1054,
        "typeName": {
          "type": "Identifier",
          "start": 1019,
          "end": 1023,
          "name": "Keys",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1023,
          "end": 1054,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1024,
              "end": 1053,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 1025,
                  "end": 1031
                },
                {
                  "type": "TSRestType",
                  "start": 1033,
                  "end": 1044,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1036,
                    "end": 1044,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1036,
                      "end": 1042
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1046,
                  "end": 1052
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1079,
      "end": 1158,
      "id": {
        "type": "Identifier",
        "start": 1084,
        "end": 1086,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1089,
        "end": 1157,
        "checkType": {
          "type": "TSTupleType",
          "start": 1089,
          "end": 1104,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 1090,
              "end": 1093,
              "literal": {
                "type": "Literal",
                "start": 1090,
                "end": 1093,
                "value": "a",
                "raw": "'a'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1095,
              "end": 1098,
              "literal": {
                "type": "Literal",
                "start": 1095,
                "end": 1098,
                "value": "b",
                "raw": "'b'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1100,
              "end": 1103,
              "literal": {
                "type": "Literal",
                "start": 1100,
                "end": 1103,
                "value": "c",
                "raw": "'c'"
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 1113,
          "end": 1145,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 1122,
            "end": 1145,
            "elementTypes": [
              {
                "type": "TSInferType",
                "start": 1123,
                "end": 1130,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1129,
                  "end": 1130,
                  "name": {
                    "type": "Identifier",
                    "start": 1129,
                    "end": 1130,
                    "name": "H",
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
              },
              {
                "type": "TSRestType",
                "start": 1132,
                "end": 1144,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1135,
                  "end": 1144,
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 1135,
                    "end": 1142
                  }
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1148,
          "end": 1149,
          "typeName": {
            "type": "Identifier",
            "start": 1148,
            "end": 1149,
            "name": "H",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1152,
          "end": 1157
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1167,
      "end": 1247,
      "id": {
        "type": "Identifier",
        "start": 1172,
        "end": 1174,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1177,
        "end": 1246,
        "checkType": {
          "type": "TSTupleType",
          "start": 1177,
          "end": 1192,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 1178,
              "end": 1181,
              "literal": {
                "type": "Literal",
                "start": 1178,
                "end": 1181,
                "value": "a",
                "raw": "'a'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1183,
              "end": 1186,
              "literal": {
                "type": "Literal",
                "start": 1183,
                "end": 1186,
                "value": "b",
                "raw": "'b'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1188,
              "end": 1191,
              "literal": {
                "type": "Literal",
                "start": 1188,
                "end": 1191,
                "value": "c",
                "raw": "'c'"
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1201,
          "end": 1234,
          "typeName": {
            "type": "Identifier",
            "start": 1201,
            "end": 1209,
            "name": "Readonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1209,
            "end": 1234,
            "params": [
              {
                "type": "TSTupleType",
                "start": 1210,
                "end": 1233,
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "start": 1211,
                    "end": 1218,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 1217,
                      "end": 1218,
                      "name": {
                        "type": "Identifier",
                        "start": 1217,
                        "end": 1218,
                        "name": "H",
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
                  },
                  {
                    "type": "TSRestType",
                    "start": 1220,
                    "end": 1232,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1223,
                      "end": 1232,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1223,
                        "end": 1230
                      }
                    }
                  }
                ]
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1237,
          "end": 1238,
          "typeName": {
            "type": "Identifier",
            "start": 1237,
            "end": 1238,
            "name": "H",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1241,
          "end": 1246
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1256,
      "end": 1335,
      "id": {
        "type": "Identifier",
        "start": 1261,
        "end": 1263,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1266,
        "end": 1334,
        "checkType": {
          "type": "TSTupleType",
          "start": 1266,
          "end": 1281,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 1267,
              "end": 1270,
              "literal": {
                "type": "Literal",
                "start": 1267,
                "end": 1270,
                "value": "a",
                "raw": "'a'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1272,
              "end": 1275,
              "literal": {
                "type": "Literal",
                "start": 1272,
                "end": 1275,
                "value": "b",
                "raw": "'b'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1277,
              "end": 1280,
              "literal": {
                "type": "Literal",
                "start": 1277,
                "end": 1280,
                "value": "c",
                "raw": "'c'"
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 1290,
          "end": 1322,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 1299,
            "end": 1322,
            "elementTypes": [
              {
                "type": "TSRestType",
                "start": 1300,
                "end": 1312,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1303,
                  "end": 1312,
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 1303,
                    "end": 1310
                  }
                }
              },
              {
                "type": "TSInferType",
                "start": 1314,
                "end": 1321,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1320,
                  "end": 1321,
                  "name": {
                    "type": "Identifier",
                    "start": 1320,
                    "end": 1321,
                    "name": "L",
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
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1325,
          "end": 1326,
          "typeName": {
            "type": "Identifier",
            "start": 1325,
            "end": 1326,
            "name": "L",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1329,
          "end": 1334
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1344,
      "end": 1424,
      "id": {
        "type": "Identifier",
        "start": 1349,
        "end": 1351,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1354,
        "end": 1423,
        "checkType": {
          "type": "TSTupleType",
          "start": 1354,
          "end": 1369,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 1355,
              "end": 1358,
              "literal": {
                "type": "Literal",
                "start": 1355,
                "end": 1358,
                "value": "a",
                "raw": "'a'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1360,
              "end": 1363,
              "literal": {
                "type": "Literal",
                "start": 1360,
                "end": 1363,
                "value": "b",
                "raw": "'b'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1365,
              "end": 1368,
              "literal": {
                "type": "Literal",
                "start": 1365,
                "end": 1368,
                "value": "c",
                "raw": "'c'"
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1378,
          "end": 1411,
          "typeName": {
            "type": "Identifier",
            "start": 1378,
            "end": 1386,
            "name": "Readonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1386,
            "end": 1411,
            "params": [
              {
                "type": "TSTupleType",
                "start": 1387,
                "end": 1410,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 1388,
                    "end": 1400,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1391,
                      "end": 1400,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1391,
                        "end": 1398
                      }
                    }
                  },
                  {
                    "type": "TSInferType",
                    "start": 1402,
                    "end": 1409,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 1408,
                      "end": 1409,
                      "name": {
                        "type": "Identifier",
                        "start": 1408,
                        "end": 1409,
                        "name": "L",
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
                  }
                ]
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1414,
          "end": 1415,
          "typeName": {
            "type": "Identifier",
            "start": 1414,
            "end": 1415,
            "name": "L",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1418,
          "end": 1423
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1456,
      "end": 1496,
      "id": {
        "type": "Identifier",
        "start": 1461,
        "end": 1463,
        "name": "R1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1463,
        "end": 1466,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1464,
            "end": 1465,
            "name": {
              "type": "Identifier",
              "start": 1464,
              "end": 1465,
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
        "type": "TSTypeOperator",
        "start": 1469,
        "end": 1495,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 1478,
          "end": 1495,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 1479,
              "end": 1491,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1482,
                "end": 1491,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1482,
                  "end": 1489
                }
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1493,
              "end": 1494,
              "typeName": {
                "type": "Identifier",
                "start": 1493,
                "end": 1494,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1528,
      "end": 1569,
      "id": {
        "type": "Identifier",
        "start": 1533,
        "end": 1535,
        "name": "R2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1535,
        "end": 1538,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1536,
            "end": 1537,
            "name": {
              "type": "Identifier",
              "start": 1536,
              "end": 1537,
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
        "start": 1541,
        "end": 1568,
        "typeName": {
          "type": "Identifier",
          "start": 1541,
          "end": 1549,
          "name": "Readonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1549,
          "end": 1568,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1550,
              "end": 1567,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 1551,
                  "end": 1563,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1554,
                    "end": 1563,
                    "elementType": {
                      "type": "TSUnknownKeyword",
                      "start": 1554,
                      "end": 1561
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1565,
                  "end": 1566,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1565,
                    "end": 1566,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
