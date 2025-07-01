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
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 27
          }
        ],
        "start": 12,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ItemMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 45
          }
        ],
        "start": 43,
        "end": 46
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
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
              "start": 63,
              "end": 64
            },
            "typeArguments": null,
            "start": 63,
            "end": 64
          },
          "start": 57,
          "end": 64
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Item",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 71
          },
          "typeArguments": null,
          "start": 67,
          "end": 71
        },
        "optional": false,
        "readonly": null,
        "start": 49,
        "end": 73
      },
      "declare": false,
      "start": 31,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 98,
                  "end": 101
                },
                "start": 92,
                "end": 101
              },
              "start": 90,
              "end": 101
            },
            "start": 88,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 101
        }
      ],
      "declare": true,
      "start": 76,
      "end": 102
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "constraint": {
                  "type": "TSAnyKeyword",
                  "start": 127,
                  "end": 130
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 137
                  },
                  "typeArguments": null,
                  "start": 133,
                  "end": 137
                },
                "optional": false,
                "readonly": null,
                "start": 119,
                "end": 139
              },
              "start": 117,
              "end": 139
            },
            "start": 115,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 139
        }
      ],
      "declare": true,
      "start": 103,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 165,
                  "end": 171
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 178
                  },
                  "typeArguments": null,
                  "start": 174,
                  "end": 178
                },
                "optional": false,
                "readonly": null,
                "start": 157,
                "end": 180
              },
              "start": 155,
              "end": 180
            },
            "start": 153,
            "end": 180
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 180
        }
      ],
      "declare": true,
      "start": 141,
      "end": 181
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 202
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 212,
                    "end": 215
                  },
                  "start": 206,
                  "end": 215
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 222
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 222
                },
                "optional": false,
                "readonly": null,
                "start": 198,
                "end": 224
              },
              "start": 196,
              "end": 224
            },
            "start": 194,
            "end": 224
          },
          "init": null,
          "definite": false,
          "start": 194,
          "end": 224
        }
      ],
      "declare": true,
      "start": 182,
      "end": 225
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ItemMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 249
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 250,
                      "end": 253
                    }
                  ],
                  "start": 249,
                  "end": 254
                },
                "start": 242,
                "end": 254
              },
              "start": 240,
              "end": 254
            },
            "start": 238,
            "end": 254
          },
          "init": null,
          "definite": false,
          "start": 238,
          "end": 254
        }
      ],
      "declare": true,
      "start": 226,
      "end": 255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 288
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 300
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 302,
                "end": 308
              },
              "start": 300,
              "end": 308
            },
            "accessibility": null,
            "static": false,
            "start": 295,
            "end": 309
          }
        ],
        "start": 291,
        "end": 311
      },
      "declare": false,
      "start": 279,
      "end": 311
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrictDataMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 331
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
              "start": 332,
              "end": 333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 333
          }
        ],
        "start": 331,
        "end": 334
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 343
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
              "start": 353,
              "end": 354
            },
            "typeArguments": null,
            "start": 353,
            "end": 354
          },
          "start": 347,
          "end": 354
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Data",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 361
          },
          "typeArguments": null,
          "start": 357,
          "end": 361
        },
        "optional": false,
        "readonly": null,
        "start": 337,
        "end": 363
      },
      "declare": false,
      "start": 313,
      "end": 363
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrictDataMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 393
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 394,
                      "end": 397
                    }
                  ],
                  "start": 393,
                  "end": 398
                },
                "start": 380,
                "end": 398
              },
              "start": 378,
              "end": 398
            },
            "start": 377,
            "end": 398
          },
          "init": null,
          "definite": false,
          "start": 377,
          "end": 398
        }
      ],
      "declare": true,
      "start": 365,
      "end": 399
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 411
            },
            "init": null,
            "definite": false,
            "start": 409,
            "end": 411
          }
        ],
        "declare": false,
        "start": 405,
        "end": 411
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 416
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 430
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 434
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 437
                  },
                  "optional": false,
                  "computed": true,
                  "start": 433,
                  "end": 438
                },
                "definite": false,
                "start": 426,
                "end": 438
              }
            ],
            "declare": false,
            "start": 422,
            "end": 439
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 454
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "notAValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 464
                  },
                  "optional": false,
                  "computed": false,
                  "start": 450,
                  "end": 464
                },
                "definite": false,
                "start": 446,
                "end": 464
              }
            ],
            "declare": false,
            "start": 442,
            "end": 465
          }
        ],
        "start": 418,
        "end": 477
      },
      "start": 400,
      "end": 477
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Arrayish",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 668
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 677,
                "end": 684
              },
              "start": 677,
              "end": 686
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 667,
            "end": 686
          }
        ],
        "start": 666,
        "end": 687
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 694
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
              "start": 704,
              "end": 705
            },
            "typeArguments": null,
            "start": 704,
            "end": 705
          },
          "start": 698,
          "end": 705
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
              "start": 708,
              "end": 709
            },
            "typeArguments": null,
            "start": 708,
            "end": 709
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 711
            },
            "typeArguments": null,
            "start": 710,
            "end": 711
          },
          "start": 708,
          "end": 712
        },
        "optional": false,
        "readonly": null,
        "start": 690,
        "end": 714
      },
      "declare": false,
      "start": 653,
      "end": 715
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Objectish",
        "optional": false,
        "typeAnnotation": null,
        "start": 721,
        "end": 730
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
              "start": 731,
              "end": 732
            },
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 741,
              "end": 748
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 731,
            "end": 748
          }
        ],
        "start": 730,
        "end": 749
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 755,
          "end": 756
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
              "start": 766,
              "end": 767
            },
            "typeArguments": null,
            "start": 766,
            "end": 767
          },
          "start": 760,
          "end": 767
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
              "start": 770,
              "end": 771
            },
            "typeArguments": null,
            "start": 770,
            "end": 771
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "typeArguments": null,
            "start": 772,
            "end": 773
          },
          "start": 770,
          "end": 774
        },
        "optional": false,
        "readonly": null,
        "start": 752,
        "end": 776
      },
      "declare": false,
      "start": 716,
      "end": 777
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndirectArrayish",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1365
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1366,
              "end": 1367
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1376,
                "end": 1383
              },
              "start": 1376,
              "end": 1385
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1366,
            "end": 1385
          }
        ],
        "start": 1365,
        "end": 1386
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Objectish",
          "optional": false,
          "typeAnnotation": null,
          "start": 1389,
          "end": 1398
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1399,
                "end": 1400
              },
              "typeArguments": null,
              "start": 1399,
              "end": 1400
            }
          ],
          "start": 1398,
          "end": 1401
        },
        "start": 1389,
        "end": 1401
      },
      "declare": false,
      "start": 1344,
      "end": 1402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1413,
        "end": 1416
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arrayish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Arrayish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1427,
                "end": 1435
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1436,
                    "end": 1439
                  }
                ],
                "start": 1435,
                "end": 1440
              },
              "start": 1427,
              "end": 1440
            },
            "start": 1425,
            "end": 1440
          },
          "start": 1417,
          "end": 1440
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objectish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Objectish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1453,
                "end": 1462
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1463,
                    "end": 1466
                  }
                ],
                "start": 1462,
                "end": 1467
              },
              "start": 1453,
              "end": 1467
            },
            "start": 1451,
            "end": 1467
          },
          "start": 1442,
          "end": 1467
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "indirectArrayish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndirectArrayish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1503
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1504,
                    "end": 1507
                  }
                ],
                "start": 1503,
                "end": 1508
              },
              "start": 1487,
              "end": 1508
            },
            "start": 1485,
            "end": 1508
          },
          "start": 1469,
          "end": 1508
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1525,
                        "end": 1528
                      },
                      "start": 1525,
                      "end": 1530
                    },
                    "start": 1523,
                    "end": 1530
                  },
                  "start": 1520,
                  "end": 1530
                },
                "init": null,
                "definite": false,
                "start": 1520,
                "end": 1530
              }
            ],
            "declare": false,
            "start": 1516,
            "end": 1531
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1539
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1542,
                "end": 1550
              },
              "start": 1536,
              "end": 1550
            },
            "directive": null,
            "start": 1536,
            "end": 1551
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1556,
                "end": 1559
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "objectish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1571
              },
              "start": 1556,
              "end": 1571
            },
            "directive": null,
            "start": 1556,
            "end": 1572
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1577,
                "end": 1580
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "indirectArrayish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1583,
                "end": 1599
              },
              "start": 1577,
              "end": 1599
            },
            "directive": null,
            "start": 1577,
            "end": 1600
          }
        ],
        "start": 1510,
        "end": 1602
      },
      "expression": false,
      "start": 1404,
      "end": 1602
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringifyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1621,
        "end": 1635
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
              "start": 1636,
              "end": 1637
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1655,
                  "end": 1658
                },
                "start": 1655,
                "end": 1660
              },
              "start": 1646,
              "end": 1660
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1636,
            "end": 1660
          }
        ],
        "start": 1635,
        "end": 1661
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
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
                "start": 1667,
                "end": 1668
              },
              "typeArguments": null,
              "start": 1667,
              "end": 1668
            },
            "start": 1665,
            "end": 1668
          },
          "start": 1662,
          "end": 1668
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1684,
            "end": 1685
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
                "start": 1695,
                "end": 1696
              },
              "typeArguments": null,
              "start": 1695,
              "end": 1696
            },
            "start": 1689,
            "end": 1696
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 1699,
            "end": 1705
          },
          "optional": false,
          "readonly": "-",
          "start": 1671,
          "end": 1707
        },
        "start": 1669,
        "end": 1707
      },
      "body": null,
      "expression": false,
      "start": 1604,
      "end": 1708
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1718,
                  "end": 1721
                },
                "start": 1718,
                "end": 1723
              },
              "start": 1716,
              "end": 1723
            },
            "start": 1713,
            "end": 1723
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringifyArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1726,
              "end": 1740
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "UnaryExpression",
                  "operator": "void",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1746,
                    "end": 1747
                  },
                  "prefix": true,
                  "start": 1741,
                  "end": 1747
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1751,
                  "end": 1754
                },
                "start": 1741,
                "end": 1754
              }
            ],
            "optional": false,
            "start": 1726,
            "end": 1755
          },
          "definite": false,
          "start": 1713,
          "end": 1755
        }
      ],
      "declare": false,
      "start": 1709,
      "end": 1756
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringifyPair",
        "optional": false,
        "typeAnnotation": null,
        "start": 1775,
        "end": 1788
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
              "start": 1789,
              "end": 1790
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 1808,
                "end": 1818
              },
              "start": 1799,
              "end": 1818
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1789,
            "end": 1818
          }
        ],
        "start": 1788,
        "end": 1819
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
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
                "start": 1825,
                "end": 1826
              },
              "typeArguments": null,
              "start": 1825,
              "end": 1826
            },
            "start": 1823,
            "end": 1826
          },
          "start": 1820,
          "end": 1826
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1843
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
                "start": 1853,
                "end": 1854
              },
              "typeArguments": null,
              "start": 1853,
              "end": 1854
            },
            "start": 1847,
            "end": 1854
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 1857,
            "end": 1863
          },
          "optional": false,
          "readonly": "-",
          "start": 1829,
          "end": 1865
        },
        "start": 1827,
        "end": 1865
      },
      "body": null,
      "expression": false,
      "start": 1758,
      "end": 1866
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 1876,
                "end": 1886
              },
              "start": 1874,
              "end": 1886
            },
            "start": 1871,
            "end": 1886
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringifyPair",
              "optional": false,
              "typeAnnotation": null,
              "start": 1889,
              "end": 1902
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "UnaryExpression",
                  "operator": "void",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1908,
                    "end": 1909
                  },
                  "prefix": true,
                  "start": 1903,
                  "end": 1909
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1913,
                  "end": 1916
                },
                "start": 1903,
                "end": 1916
              }
            ],
            "optional": false,
            "start": 1889,
            "end": 1917
          },
          "definite": false,
          "start": 1871,
          "end": 1917
        }
      ],
      "declare": false,
      "start": 1867,
      "end": 1918
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Evolvable",
        "optional": false,
        "typeAnnotation": null,
        "start": 1947,
        "end": 1956
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1957,
              "end": 1958
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Evolver",
                "optional": false,
                "typeAnnotation": null,
                "start": 1967,
                "end": 1974
              },
              "typeArguments": null,
              "start": 1967,
              "end": 1974
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1957,
            "end": 1974
          }
        ],
        "start": 1956,
        "end": 1975
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1983,
          "end": 1984
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1994,
              "end": 1995
            },
            "typeArguments": null,
            "start": 1994,
            "end": 1995
          },
          "start": 1988,
          "end": 1995
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1998,
          "end": 2003
        },
        "optional": false,
        "readonly": null,
        "start": 1978,
        "end": 2006
      },
      "declare": false,
      "start": 1942,
      "end": 2007
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Evolver",
        "optional": false,
        "typeAnnotation": null,
        "start": 2013,
        "end": 2020
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
              "start": 2021,
              "end": 2022
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Evolvable",
                "optional": false,
                "typeAnnotation": null,
                "start": 2031,
                "end": 2040
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 2041,
                    "end": 2044
                  }
                ],
                "start": 2040,
                "end": 2045
              },
              "start": 2031,
              "end": 2045
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 2048,
              "end": 2051
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2021,
            "end": 2051
          }
        ],
        "start": 2020,
        "end": 2052
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 2060,
          "end": 2063
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 2073,
              "end": 2080
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
                    "start": 2081,
                    "end": 2082
                  },
                  "typeArguments": null,
                  "start": 2081,
                  "end": 2082
                }
              ],
              "start": 2080,
              "end": 2083
            },
            "start": 2073,
            "end": 2083
          },
          "start": 2067,
          "end": 2083
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 2086,
          "end": 2091
        },
        "optional": false,
        "readonly": null,
        "start": 2055,
        "end": 2094
      },
      "declare": false,
      "start": 2008,
      "end": 2095
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2095
}
```
