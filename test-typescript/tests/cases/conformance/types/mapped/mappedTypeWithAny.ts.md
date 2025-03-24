__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2095,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 30,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 12,
        "end": 29,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 43,
        "decorators": [],
        "name": "ItemMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 49,
        "end": 73,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 57,
          "end": 64,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 63,
            "end": 64,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 67,
          "end": 71,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 67,
            "end": 71,
            "decorators": [],
            "name": "Item",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "type": "VariableDeclaration",
      "start": 76,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 101,
            "decorators": [],
            "name": "x0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 92,
                "end": 101,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 98,
                  "end": 101
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 139,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 139,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 119,
                "end": 139,
                "constraint": {
                  "type": "TSAnyKeyword",
                  "start": 127,
                  "end": 130
                },
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": null,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 133,
                  "end": 137,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 137,
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 180,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 180,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 157,
                "end": 180,
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 165,
                  "end": 171
                },
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": null,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 174,
                  "end": 178,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 178,
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 224,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 224,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 198,
                "end": 224,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 206,
                  "end": 215,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 212,
                    "end": 215
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": null,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 218,
                  "end": 222,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 222,
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 254,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 242,
                "end": 254,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 249,
                  "end": 254,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 250,
                      "end": 253
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 249,
                  "decorators": [],
                  "name": "ItemMap",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 279,
      "end": 311,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 288,
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 291,
        "end": 311,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 295,
            "end": 309,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 300,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 308,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 302,
                "end": 308
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 313,
      "end": 363,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 331,
        "decorators": [],
        "name": "StrictDataMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 337,
        "end": 363,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 347,
          "end": 354,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 353,
            "end": 354,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 342,
          "end": 343,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 357,
          "end": 361,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 357,
            "end": 361,
            "decorators": [],
            "name": "Data",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 331,
        "end": 334,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 333,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
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
      "type": "VariableDeclaration",
      "start": 365,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 398,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 398,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 378,
              "end": 398,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 380,
                "end": 398,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 393,
                  "end": 398,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 394,
                      "end": 397
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 393,
                  "decorators": [],
                  "name": "StrictDataMap",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ForInStatement",
      "start": 400,
      "end": 477,
      "body": {
        "type": "BlockStatement",
        "start": 418,
        "end": 477,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 422,
            "end": 439,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 426,
                "end": 438,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 430,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 433,
                  "end": 438,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 437,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 442,
            "end": 465,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 446,
                "end": 464,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 450,
                  "end": 464,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 454,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 464,
                    "decorators": [],
                    "name": "notAValue",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 405,
        "end": 411,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 409,
            "end": 411,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 409,
              "end": 411,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 415,
        "end": 416,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 653,
      "end": 715,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 658,
        "end": 666,
        "decorators": [],
        "name": "Arrayish",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 690,
        "end": 714,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 698,
          "end": 705,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 704,
            "end": 705,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 704,
              "end": 705,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 693,
          "end": 694,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 708,
          "end": 712,
          "indexType": {
            "type": "TSTypeReference",
            "start": 710,
            "end": 711,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 710,
              "end": 711,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 708,
            "end": 709,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 708,
              "end": 709,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 666,
        "end": 687,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 667,
            "end": 686,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 677,
              "end": 686,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 677,
                "end": 684
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 667,
              "end": 668,
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
      "start": 716,
      "end": 777,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 721,
        "end": 730,
        "decorators": [],
        "name": "Objectish",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 752,
        "end": 776,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 760,
          "end": 767,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 766,
            "end": 767,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 766,
              "end": 767,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 755,
          "end": 756,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 770,
          "end": 774,
          "indexType": {
            "type": "TSTypeReference",
            "start": 772,
            "end": 773,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 772,
              "end": 773,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 770,
            "end": 771,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 770,
              "end": 771,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 730,
        "end": 749,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 731,
            "end": 748,
            "const": false,
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 741,
              "end": 748
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 731,
              "end": 732,
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
      "start": 1344,
      "end": 1402,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1349,
        "end": 1365,
        "decorators": [],
        "name": "IndirectArrayish",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1389,
        "end": 1401,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1398,
          "end": 1401,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1399,
              "end": 1400,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1399,
                "end": 1400,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1389,
          "end": 1398,
          "decorators": [],
          "name": "Objectish",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1365,
        "end": 1386,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1366,
            "end": 1385,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1376,
              "end": 1385,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1376,
                "end": 1383
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1366,
              "end": 1367,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1404,
      "end": 1602,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1510,
        "end": 1602,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1516,
            "end": 1531,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1520,
                "end": 1530,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1520,
                  "end": 1530,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1523,
                    "end": 1530,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1525,
                      "end": 1530,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1525,
                        "end": 1528
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1536,
            "end": 1551,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1536,
              "end": 1550,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1536,
                "end": 1539,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1542,
                "end": 1550,
                "decorators": [],
                "name": "arrayish",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1556,
            "end": 1572,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1556,
              "end": 1571,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1556,
                "end": 1559,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1562,
                "end": 1571,
                "decorators": [],
                "name": "objectish",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1577,
            "end": 1600,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1577,
              "end": 1599,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1577,
                "end": 1580,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1583,
                "end": 1599,
                "decorators": [],
                "name": "indirectArrayish",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1413,
        "end": 1416,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1417,
          "end": 1440,
          "decorators": [],
          "name": "arrayish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1425,
            "end": 1440,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1427,
              "end": 1440,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1435,
                "end": 1440,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1436,
                    "end": 1439
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1427,
                "end": 1435,
                "decorators": [],
                "name": "Arrayish",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1442,
          "end": 1467,
          "decorators": [],
          "name": "objectish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1451,
            "end": 1467,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1453,
              "end": 1467,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1462,
                "end": 1467,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1463,
                    "end": 1466
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1453,
                "end": 1462,
                "decorators": [],
                "name": "Objectish",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1469,
          "end": 1508,
          "decorators": [],
          "name": "indirectArrayish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1485,
            "end": 1508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1487,
              "end": 1508,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1503,
                "end": 1508,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1504,
                    "end": 1507
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1487,
                "end": 1503,
                "decorators": [],
                "name": "IndirectArrayish",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1604,
      "end": 1708,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1621,
        "end": 1635,
        "decorators": [],
        "name": "stringifyArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1662,
          "end": 1668,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1665,
            "end": 1668,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1667,
              "end": 1668,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1667,
                "end": 1668,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1669,
        "end": 1707,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1671,
          "end": 1707,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1689,
            "end": 1696,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1695,
              "end": 1696,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1695,
                "end": 1696,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1684,
            "end": 1685,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": "-",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 1699,
            "end": 1705
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1635,
        "end": 1661,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1636,
            "end": 1660,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1646,
              "end": 1660,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1655,
                "end": 1660,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1655,
                  "end": 1658
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1636,
              "end": 1637,
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
      "type": "VariableDeclaration",
      "start": 1709,
      "end": 1756,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1713,
          "end": 1755,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1713,
            "end": 1723,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1716,
              "end": 1723,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1718,
                "end": 1723,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1718,
                  "end": 1721
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 1726,
            "end": 1755,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 1741,
                "end": 1754,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 1741,
                  "end": 1747,
                  "argument": {
                    "type": "Literal",
                    "start": 1746,
                    "end": 1747,
                    "raw": "0",
                    "value": 0
                  },
                  "operator": "void",
                  "prefix": true
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1751,
                  "end": 1754
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1726,
              "end": 1740,
              "decorators": [],
              "name": "stringifyArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1758,
      "end": 1866,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1775,
        "end": 1788,
        "decorators": [],
        "name": "stringifyPair",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1820,
          "end": 1826,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1823,
            "end": 1826,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1825,
              "end": 1826,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1825,
                "end": 1826,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1827,
        "end": 1865,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1829,
          "end": 1865,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1847,
            "end": 1854,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1853,
              "end": 1854,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1853,
                "end": 1854,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1842,
            "end": 1843,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": "-",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 1857,
            "end": 1863
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1788,
        "end": 1819,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1789,
            "end": 1818,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1799,
              "end": 1818,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1808,
                "end": 1818,
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1809,
                    "end": 1812
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1814,
                    "end": 1817
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1789,
              "end": 1790,
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
      "type": "VariableDeclaration",
      "start": 1867,
      "end": 1918,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1871,
          "end": 1917,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1871,
            "end": 1886,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1874,
              "end": 1886,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1876,
                "end": 1886,
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1877,
                    "end": 1880
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1882,
                    "end": 1885
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 1889,
            "end": 1917,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 1903,
                "end": 1916,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 1903,
                  "end": 1909,
                  "argument": {
                    "type": "Literal",
                    "start": 1908,
                    "end": 1909,
                    "raw": "0",
                    "value": 0
                  },
                  "operator": "void",
                  "prefix": true
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1913,
                  "end": 1916
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1889,
              "end": 1902,
              "decorators": [],
              "name": "stringifyPair",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1942,
      "end": 2007,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1947,
        "end": 1956,
        "decorators": [],
        "name": "Evolvable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1978,
        "end": 2006,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1988,
          "end": 1995,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1994,
            "end": 1995,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1994,
              "end": 1995,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1983,
          "end": 1984,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1998,
          "end": 2003
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1956,
        "end": 1975,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1957,
            "end": 1974,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1967,
              "end": 1974,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1967,
                "end": 1974,
                "decorators": [],
                "name": "Evolver",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1957,
              "end": 1958,
              "decorators": [],
              "name": "E",
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
      "start": 2008,
      "end": 2095,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2013,
        "end": 2020,
        "decorators": [],
        "name": "Evolver",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2055,
        "end": 2094,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2067,
          "end": 2083,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2073,
            "end": 2083,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2080,
              "end": 2083,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2081,
                  "end": 2082,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2081,
                    "end": 2082,
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
              "start": 2073,
              "end": 2080,
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 2060,
          "end": 2063,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 2086,
          "end": 2091
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2020,
        "end": 2052,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2021,
            "end": 2051,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2031,
              "end": 2045,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2040,
                "end": 2045,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 2041,
                    "end": 2044
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2031,
                "end": 2040,
                "decorators": [],
                "name": "Evolvable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 2048,
              "end": 2051
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2021,
              "end": 2022,
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
