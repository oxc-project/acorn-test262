__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 738,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 134,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 41,
        "decorators": [],
        "name": "StringContains",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 80,
        "end": 133,
        "indexType": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 132,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "start": 81,
          "end": 129,
          "types": [
            {
              "type": "TSMappedType",
              "start": 81,
              "end": 101,
              "constraint": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 90,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 93,
                "end": 99,
                "literal": {
                  "type": "Literal",
                  "start": 93,
                  "end": 99,
                  "raw": "'true'",
                  "value": "true"
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 104,
              "end": 129,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 106,
                  "end": 128,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 107,
                      "end": 118,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 110,
                        "end": 118,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 112,
                          "end": 118
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 121,
                      "end": 128,
                      "literal": {
                        "type": "Literal",
                        "start": 121,
                        "end": 128,
                        "raw": "'false'",
                        "value": "false"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 77,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 58,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 76,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 221,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 153,
        "decorators": [],
        "name": "ObjectHasKey",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 177,
        "end": 220,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 191,
          "end": 220,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 192,
              "end": 216,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 199,
                "end": 216,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 200,
                    "end": 207,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 206,
                      "end": 207,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 207,
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 199,
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 218,
              "end": 219,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 177,
          "end": 191,
          "decorators": [],
          "name": "StringContains",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 174,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 155,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 157,
            "end": 173,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 167,
              "end": 173
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 223,
      "end": 256,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 235,
        "end": 255,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 247,
          "end": 255,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 248,
              "end": 249,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 251,
              "end": 254,
              "literal": {
                "type": "Literal",
                "start": 251,
                "end": 254,
                "raw": "'0'",
                "value": "0"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 235,
          "end": 247,
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 229,
        "end": 232,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 230,
            "end": 231,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 258,
      "end": 303,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 267,
        "end": 302,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 279,
          "end": 302,
          "params": [
            {
              "type": "TSTupleType",
              "start": 280,
              "end": 296,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 281,
                  "end": 287
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 289,
                  "end": 295
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 298,
              "end": 301,
              "literal": {
                "type": "Literal",
                "start": 298,
                "end": 301,
                "raw": "'1'",
                "value": "1"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 267,
          "end": 279,
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 315,
      "end": 360,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 321,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 324,
        "end": 359,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 336,
          "end": 359,
          "params": [
            {
              "type": "TSTupleType",
              "start": 337,
              "end": 353,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 338,
                  "end": 344
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 346,
                  "end": 352
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 355,
              "end": 358,
              "literal": {
                "type": "Literal",
                "start": 355,
                "end": 358,
                "raw": "'2'",
                "value": "2"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 324,
          "end": 336,
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 373,
      "end": 394,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 379,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 382,
        "end": 393,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 383,
          "end": 393,
          "params": [
            {
              "type": "TSTupleType",
              "start": 384,
              "end": 392,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 385,
                  "end": 391
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 382,
          "end": 383,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 437,
      "end": 488,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 443,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 449,
        "end": 487,
        "indexType": {
          "type": "TSTypeReference",
          "start": 466,
          "end": 486,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 478,
            "end": 486,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 479,
                "end": 480,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 480,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSLiteralType",
                "start": 482,
                "end": 485,
                "literal": {
                  "type": "Literal",
                  "start": 482,
                  "end": 485,
                  "raw": "'1'",
                  "value": "1"
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 466,
            "end": 478,
            "decorators": [],
            "name": "ObjectHasKey",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 449,
          "end": 465,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 451,
              "end": 463,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 451,
                "end": 455,
                "decorators": [],
                "name": "true",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 455,
                "end": 463,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 457,
                  "end": 463,
                  "literal": {
                    "type": "Literal",
                    "start": 457,
                    "end": 463,
                    "raw": "'true'",
                    "value": "true"
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 443,
        "end": 446,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 444,
            "end": 445,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 490,
      "end": 582,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 504,
        "decorators": [],
        "name": "Juxtapose",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 510,
        "end": 581,
        "indexType": {
          "type": "TSTypeReference",
          "start": 560,
          "end": 580,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 572,
            "end": 580,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 573,
                "end": 574,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 574,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSLiteralType",
                "start": 576,
                "end": 579,
                "literal": {
                  "type": "Literal",
                  "start": 576,
                  "end": 579,
                  "raw": "'1'",
                  "value": "1"
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 560,
            "end": 572,
            "decorators": [],
            "name": "ObjectHasKey",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "start": 511,
          "end": 558,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 511,
              "end": 532,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 513,
                  "end": 530,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 517,
                    "decorators": [],
                    "name": "true",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 530,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 519,
                      "end": 530,
                      "literal": {
                        "type": "Literal",
                        "start": 519,
                        "end": 530,
                        "raw": "'otherwise'",
                        "value": "otherwise"
                      }
                    }
                  }
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 535,
              "end": 558,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 537,
                  "end": 556,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 538,
                      "end": 547,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 539,
                        "end": 547,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 541,
                          "end": 547
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 548,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 550,
                      "end": 556,
                      "literal": {
                        "type": "Literal",
                        "start": 550,
                        "end": 556,
                        "raw": "'true'",
                        "value": "true"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 504,
        "end": 507,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 505,
            "end": 506,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 505,
              "end": 506,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 617,
      "end": 668,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 631,
        "decorators": [],
        "name": "DeepError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 637,
        "end": 667,
        "indexType": {
          "type": "TSTypeReference",
          "start": 654,
          "end": 666,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 663,
            "end": 666,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 664,
                "end": 665,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 665,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 654,
            "end": 663,
            "decorators": [],
            "name": "Juxtapose",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 637,
          "end": 653,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 639,
              "end": 651,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 639,
                "end": 643,
                "decorators": [],
                "name": "true",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 643,
                "end": 651,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 645,
                  "end": 651,
                  "literal": {
                    "type": "Literal",
                    "start": 645,
                    "end": 651,
                    "raw": "'true'",
                    "value": "true"
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 631,
        "end": 634,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 633,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 670,
      "end": 738,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 681,
        "decorators": [],
        "name": "DeepOK",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 687,
        "end": 737,
        "indexType": {
          "type": "TSTypeReference",
          "start": 724,
          "end": 736,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 733,
            "end": 736,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 734,
                "end": 735,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 724,
            "end": 733,
            "decorators": [],
            "name": "Juxtapose",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 687,
          "end": 723,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 689,
              "end": 702,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 689,
                "end": 693,
                "decorators": [],
                "name": "true",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 693,
                "end": 701,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 695,
                  "end": 701,
                  "literal": {
                    "type": "Literal",
                    "start": 695,
                    "end": 701,
                    "raw": "'true'",
                    "value": "true"
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 703,
              "end": 721,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 703,
                "end": 712,
                "decorators": [],
                "name": "otherwise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 712,
                "end": 721,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 714,
                  "end": 721,
                  "literal": {
                    "type": "Literal",
                    "start": 714,
                    "end": 721,
                    "raw": "'false'",
                    "value": "false"
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 681,
        "end": 684,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 682,
            "end": 683,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
