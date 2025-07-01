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
        "name": "TestObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 29
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 42
          }
        ],
        "start": 15,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 99
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TestObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 109
          },
          "typeArguments": null,
          "start": 102,
          "end": 109
        },
        "indexType": {
          "type": "TSNeverKeyword",
          "start": 110,
          "end": 115
        },
        "start": 102,
        "end": 116
      },
      "declare": false,
      "start": 87,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 132
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 135,
        "end": 137
      },
      "declare": false,
      "start": 119,
      "end": 138
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "EmptyObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 203
          },
          "typeArguments": null,
          "start": 195,
          "end": 203
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptyObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 218
            },
            "typeArguments": null,
            "start": 210,
            "end": 218
          },
          "start": 204,
          "end": 218
        },
        "start": 195,
        "end": 219
      },
      "declare": false,
      "start": 180,
      "end": 220
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 249
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
              "start": 250,
              "end": 251
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 250,
            "end": 251
          }
        ],
        "start": 249,
        "end": 252
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 258,
                "end": 259
              },
              "typeArguments": null,
              "start": 258,
              "end": 259
            },
            "start": 256,
            "end": 259
          },
          "start": 253,
          "end": 259
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
              "start": 262,
              "end": 263
            },
            "typeArguments": null,
            "start": 262,
            "end": 263
          },
          "indexType": {
            "type": "TSNeverKeyword",
            "start": 264,
            "end": 269
          },
          "start": 262,
          "end": 270
        },
        "start": 260,
        "end": 270
      },
      "body": null,
      "expression": false,
      "start": 222,
      "end": 271
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 305
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "genericFn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 318
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 322
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ctest",
                      "raw": "\"ctest\"",
                      "start": 324,
                      "end": 331
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 321,
                    "end": 331
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 334
                    },
                    "value": {
                      "type": "Literal",
                      "value": "dtest",
                      "raw": "\"dtest\"",
                      "start": 336,
                      "end": 343
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 333,
                    "end": 343
                  }
                ],
                "start": 319,
                "end": 345
              }
            ],
            "optional": false,
            "start": 308,
            "end": 346
          },
          "definite": false,
          "start": 298,
          "end": 346
        }
      ],
      "declare": false,
      "start": 292,
      "end": 347
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 376
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
              "start": 377,
              "end": 378
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ind",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 395,
                          "end": 401
                        },
                        "start": 393,
                        "end": 401
                      },
                      "start": 390,
                      "end": 401
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 404,
                      "end": 410
                    },
                    "start": 402,
                    "end": 410
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 389,
                  "end": 410
                }
              ],
              "start": 387,
              "end": 412
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 412
          }
        ],
        "start": 376,
        "end": 413
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 422,
                "end": 423
              },
              "typeArguments": null,
              "start": 422,
              "end": 423
            },
            "start": 420,
            "end": 423
          },
          "start": 417,
          "end": 423
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
              "start": 427,
              "end": 428
            },
            "typeArguments": null,
            "start": 427,
            "end": 428
          },
          "indexType": {
            "type": "TSNeverKeyword",
            "start": 429,
            "end": 434
          },
          "start": 427,
          "end": 435
        },
        "start": 425,
        "end": 435
      },
      "body": null,
      "expression": false,
      "start": 349,
      "end": 436
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 470
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "genericFn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 483
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
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 487
                    },
                    "value": {
                      "type": "Literal",
                      "value": "etest",
                      "raw": "\"etest\"",
                      "start": 489,
                      "end": 496
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 486,
                    "end": 496
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 499
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ftest",
                      "raw": "\"ftest\"",
                      "start": 501,
                      "end": 508
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 498,
                    "end": 508
                  }
                ],
                "start": 484,
                "end": 510
              }
            ],
            "optional": false,
            "start": 473,
            "end": 511
          },
          "definite": false,
          "start": 463,
          "end": 511
        }
      ],
      "declare": false,
      "start": 457,
      "end": 512
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 541
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
              "start": 545,
              "end": 546
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 559
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
                    "start": 569,
                    "end": 570
                  },
                  "typeArguments": null,
                  "start": 569,
                  "end": 570
                },
                "start": 563,
                "end": 570
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
                    "start": 573,
                    "end": 574
                  },
                  "typeArguments": null,
                  "start": 573,
                  "end": 574
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 576
                  },
                  "typeArguments": null,
                  "start": 575,
                  "end": 576
                },
                "start": 573,
                "end": 577
              },
              "optional": false,
              "readonly": null,
              "start": 555,
              "end": 579
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 545,
            "end": 579
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
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
                  "start": 599,
                  "end": 600
                },
                "typeArguments": null,
                "start": 599,
                "end": 600
              },
              "start": 593,
              "end": 600
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 583,
            "end": 600
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
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
                  "start": 620,
                  "end": 621
                },
                "typeArguments": null,
                "start": 620,
                "end": 621
              },
              "start": 614,
              "end": 621
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 604,
            "end": 621
          }
        ],
        "start": 541,
        "end": 623
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 629,
                "end": 630
              },
              "typeArguments": null,
              "start": 629,
              "end": 630
            },
            "start": 627,
            "end": 630
          },
          "start": 624,
          "end": 630
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 636
              },
              "typeArguments": null,
              "start": 635,
              "end": 636
            },
            "start": 633,
            "end": 636
          },
          "start": 632,
          "end": 636
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 642
              },
              "typeArguments": null,
              "start": 641,
              "end": 642
            },
            "start": 639,
            "end": 642
          },
          "start": 638,
          "end": 642
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
              "start": 645,
              "end": 646
            },
            "typeArguments": null,
            "start": 645,
            "end": 646
          },
          "indexType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 648
                },
                "typeArguments": null,
                "start": 647,
                "end": 648
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 651,
                  "end": 652
                },
                "typeArguments": null,
                "start": 651,
                "end": 652
              }
            ],
            "start": 647,
            "end": 652
          },
          "start": 645,
          "end": 653
        },
        "start": 643,
        "end": 653
      },
      "body": null,
      "expression": false,
      "start": 514,
      "end": 654
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": null,
            "start": 681,
            "end": 688
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "genericFn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 701
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
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 705
                    },
                    "value": {
                      "type": "Literal",
                      "value": "gtest",
                      "raw": "\"gtest\"",
                      "start": 707,
                      "end": 714
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 704,
                    "end": 714
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 717
                    },
                    "value": {
                      "type": "Literal",
                      "value": "htest",
                      "raw": "\"htest\"",
                      "start": 719,
                      "end": 726
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 716,
                    "end": 726
                  }
                ],
                "start": 702,
                "end": 728
              },
              {
                "type": "Literal",
                "value": "g",
                "raw": "\"g\"",
                "start": 730,
                "end": 733
              },
              {
                "type": "Literal",
                "value": "h",
                "raw": "\"h\"",
                "start": 735,
                "end": 738
              }
            ],
            "optional": false,
            "start": 691,
            "end": 739
          },
          "definite": false,
          "start": 681,
          "end": 739
        }
      ],
      "declare": false,
      "start": 675,
      "end": 740
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
            "name": "obj",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 798
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 800,
                        "end": 806
                      },
                      "start": 798,
                      "end": 806
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 797,
                    "end": 807
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 808,
                      "end": 809
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 811,
                        "end": 817
                      },
                      "start": 809,
                      "end": 817
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 808,
                    "end": 817
                  }
                ],
                "start": 796,
                "end": 818
              },
              "start": 794,
              "end": 818
            },
            "start": 791,
            "end": 818
          },
          "init": null,
          "definite": false,
          "start": 791,
          "end": 818
        }
      ],
      "declare": true,
      "start": 777,
      "end": 818
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
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 838,
                "end": 843
              },
              "start": 836,
              "end": 843
            },
            "start": 833,
            "end": 843
          },
          "init": null,
          "definite": false,
          "start": 833,
          "end": 843
        }
      ],
      "declare": true,
      "start": 819,
      "end": 843
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 858
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 864
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 868
            },
            "optional": false,
            "computed": true,
            "start": 861,
            "end": 869
          },
          "definite": false,
          "start": 851,
          "end": 869
        }
      ],
      "declare": false,
      "start": 845,
      "end": 869
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiredPropNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 955,
        "end": 972
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
              "start": 973,
              "end": 974
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 973,
            "end": 974
          }
        ],
        "start": 972,
        "end": 975
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 984
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
                "start": 994,
                "end": 995
              },
              "typeArguments": null,
              "start": 994,
              "end": 995
            },
            "start": 988,
            "end": 995
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 1000,
              "end": 1009
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1019
                },
                "typeArguments": null,
                "start": 1018,
                "end": 1019
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1020,
                  "end": 1021
                },
                "typeArguments": null,
                "start": 1020,
                "end": 1021
              },
              "start": 1018,
              "end": 1022
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 1025,
              "end": 1030
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1034
              },
              "typeArguments": null,
              "start": 1033,
              "end": 1034
            },
            "start": 1000,
            "end": 1034
          },
          "optional": "-",
          "readonly": null,
          "start": 978,
          "end": 1036
        },
        "indexType": {
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
              "start": 1043,
              "end": 1044
            },
            "typeArguments": null,
            "start": 1043,
            "end": 1044
          },
          "start": 1037,
          "end": 1044
        },
        "start": 978,
        "end": 1045
      },
      "declare": false,
      "start": 950,
      "end": 1046
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalPropNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1070
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
              "start": 1071,
              "end": 1072
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1071,
            "end": 1072
          }
        ],
        "start": 1070,
        "end": 1073
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1082
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
                "start": 1092,
                "end": 1093
              },
              "typeArguments": null,
              "start": 1092,
              "end": 1093
            },
            "start": 1086,
            "end": 1093
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 1098,
              "end": 1107
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1116,
                  "end": 1117
                },
                "typeArguments": null,
                "start": 1116,
                "end": 1117
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1118,
                  "end": 1119
                },
                "typeArguments": null,
                "start": 1118,
                "end": 1119
              },
              "start": 1116,
              "end": 1120
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1124
              },
              "typeArguments": null,
              "start": 1123,
              "end": 1124
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1127,
              "end": 1132
            },
            "start": 1098,
            "end": 1132
          },
          "optional": "-",
          "readonly": null,
          "start": 1076,
          "end": 1134
        },
        "indexType": {
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
              "start": 1141,
              "end": 1142
            },
            "typeArguments": null,
            "start": 1141,
            "end": 1142
          },
          "start": 1135,
          "end": 1142
        },
        "start": 1076,
        "end": 1143
      },
      "declare": false,
      "start": 1048,
      "end": 1144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiredProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1164
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
              "start": 1165,
              "end": 1166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1165,
            "end": 1166
          }
        ],
        "start": 1164,
        "end": 1167
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1174
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequiredPropNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 1178,
            "end": 1195
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
                  "start": 1196,
                  "end": 1197
                },
                "typeArguments": null,
                "start": 1196,
                "end": 1197
              }
            ],
            "start": 1195,
            "end": 1198
          },
          "start": 1178,
          "end": 1198
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
              "start": 1201,
              "end": 1202
            },
            "typeArguments": null,
            "start": 1201,
            "end": 1202
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1204
            },
            "typeArguments": null,
            "start": 1203,
            "end": 1204
          },
          "start": 1201,
          "end": 1205
        },
        "optional": false,
        "readonly": null,
        "start": 1170,
        "end": 1207
      },
      "declare": false,
      "start": 1146,
      "end": 1208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1227
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
              "start": 1228,
              "end": 1229
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1228,
            "end": 1229
          }
        ],
        "start": 1227,
        "end": 1230
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1236,
          "end": 1237
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OptionalPropNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 1241,
            "end": 1258
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
                  "start": 1259,
                  "end": 1260
                },
                "typeArguments": null,
                "start": 1259,
                "end": 1260
              }
            ],
            "start": 1258,
            "end": 1261
          },
          "start": 1241,
          "end": 1261
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
              "start": 1265,
              "end": 1266
            },
            "typeArguments": null,
            "start": 1265,
            "end": 1266
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1268
            },
            "typeArguments": null,
            "start": 1267,
            "end": 1268
          },
          "start": 1265,
          "end": 1269
        },
        "optional": true,
        "readonly": null,
        "start": 1233,
        "end": 1271
      },
      "declare": false,
      "start": 1209,
      "end": 1272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Match",
        "optional": false,
        "typeAnnotation": null,
        "start": 1279,
        "end": 1284
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1288
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1285,
            "end": 1288
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Act",
              "optional": false,
              "typeAnnotation": null,
              "start": 1290,
              "end": 1293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1290,
            "end": 1293
          }
        ],
        "start": 1284,
        "end": 1294
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1298,
                "end": 1301
              },
              "typeArguments": null,
              "start": 1298,
              "end": 1301
            }
          ],
          "start": 1297,
          "end": 1302
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Act",
                "optional": false,
                "typeAnnotation": null,
                "start": 1312,
                "end": 1315
              },
              "typeArguments": null,
              "start": 1312,
              "end": 1315
            }
          ],
          "start": 1311,
          "end": 1316
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Act",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1326
                },
                "typeArguments": null,
                "start": 1323,
                "end": 1326
              }
            ],
            "start": 1322,
            "end": 1327
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1337,
                  "end": 1340
                },
                "typeArguments": null,
                "start": 1337,
                "end": 1340
              }
            ],
            "start": 1336,
            "end": 1341
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Match",
              "raw": "\"Match\"",
              "start": 1344,
              "end": 1351
            },
            "start": 1344,
            "end": 1351
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Did not match 2",
              "raw": "\"Did not match 2\"",
              "start": 1354,
              "end": 1371
            },
            "start": 1354,
            "end": 1371
          },
          "start": 1322,
          "end": 1371
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Did not match 1",
            "raw": "\"Did not match 1\"",
            "start": 1377,
            "end": 1394
          },
          "start": 1377,
          "end": 1394
        },
        "start": 1297,
        "end": 1394
      },
      "declare": false,
      "start": 1274,
      "end": 1395
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1402,
        "end": 1412
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1413,
            "end": 1416
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Act",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1421
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1418,
            "end": 1421
          }
        ],
        "start": 1412,
        "end": 1422
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Match",
            "optional": false,
            "typeAnnotation": null,
            "start": 1425,
            "end": 1430
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1431,
                  "end": 1434
                },
                "typeArguments": null,
                "start": 1431,
                "end": 1434
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Act",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1436,
                  "end": 1439
                },
                "typeArguments": null,
                "start": 1436,
                "end": 1439
              }
            ],
            "start": 1430,
            "end": 1440
          },
          "start": 1425,
          "end": 1440
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Match",
            "raw": "\"Match\"",
            "start": 1449,
            "end": 1456
          },
          "start": 1449,
          "end": 1456
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 1462,
            "end": 1464
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1473,
              "end": 1476
            },
            "typeArguments": null,
            "start": 1473,
            "end": 1476
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null,
              "start": 1479,
              "end": 1484
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1485,
                    "end": 1493
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1497
                        },
                        "typeArguments": null,
                        "start": 1494,
                        "end": 1497
                      }
                    ],
                    "start": 1493,
                    "end": 1498
                  },
                  "start": 1485,
                  "end": 1498
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1500,
                    "end": 1508
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Act",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1509,
                          "end": 1512
                        },
                        "typeArguments": null,
                        "start": 1509,
                        "end": 1512
                      }
                    ],
                    "start": 1508,
                    "end": 1513
                  },
                  "start": 1500,
                  "end": 1513
                }
              ],
              "start": 1484,
              "end": 1514
            },
            "start": 1479,
            "end": 1514
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Match",
              "raw": "\"Match\"",
              "start": 1517,
              "end": 1524
            },
            "start": 1517,
            "end": 1524
          },
          "start": 1462,
          "end": 1524
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Did not match",
            "raw": "\"Did not match\"",
            "start": 1530,
            "end": 1545
          },
          "start": 1530,
          "end": 1545
        },
        "start": 1425,
        "end": 1545
      },
      "declare": false,
      "start": 1397,
      "end": 1546
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1553,
        "end": 1555
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1560,
              "end": 1561
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1563,
                "end": 1569
              },
              "start": 1561,
              "end": 1569
            },
            "accessibility": null,
            "static": false,
            "start": 1560,
            "end": 1570
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1571,
              "end": 1572
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1574,
                "end": 1580
              },
              "start": 1572,
              "end": 1580
            },
            "accessibility": null,
            "static": false,
            "start": 1571,
            "end": 1581
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1583
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1586,
                "end": 1593
              },
              "start": 1584,
              "end": 1593
            },
            "accessibility": null,
            "static": false,
            "start": 1582,
            "end": 1593
          }
        ],
        "start": 1558,
        "end": 1595
      },
      "declare": false,
      "start": 1548,
      "end": 1596
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1602,
        "end": 1604
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1609,
              "end": 1610
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1612,
                "end": 1618
              },
              "start": 1610,
              "end": 1618
            },
            "accessibility": null,
            "static": false,
            "start": 1609,
            "end": 1619
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1620,
              "end": 1621
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1624,
                "end": 1631
              },
              "start": 1622,
              "end": 1631
            },
            "accessibility": null,
            "static": false,
            "start": 1620,
            "end": 1631
          }
        ],
        "start": 1607,
        "end": 1633
      },
      "declare": false,
      "start": 1597,
      "end": 1634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1640,
        "end": 1642
      },
      "typeParameters": null,
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1648
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1651,
                "end": 1658
              },
              "start": 1649,
              "end": 1658
            },
            "accessibility": null,
            "static": false,
            "start": 1647,
            "end": 1658
          }
        ],
        "start": 1645,
        "end": 1660
      },
      "declare": false,
      "start": 1635,
      "end": 1661
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1667,
        "end": 1669
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 1672,
        "end": 1674
      },
      "declare": false,
      "start": 1662,
      "end": 1675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P3Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 1682,
        "end": 1689
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 1692,
          "end": 1709
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1712
              },
              "typeArguments": null,
              "start": 1710,
              "end": 1712
            }
          ],
          "start": 1709,
          "end": 1713
        },
        "start": 1692,
        "end": 1713
      },
      "declare": false,
      "start": 1677,
      "end": 1714
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 1740,
        "end": 1747
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 1750,
          "end": 1767
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1768,
                "end": 1770
              },
              "typeArguments": null,
              "start": 1768,
              "end": 1770
            }
          ],
          "start": 1767,
          "end": 1771
        },
        "start": 1750,
        "end": 1771
      },
      "declare": false,
      "start": 1735,
      "end": 1772
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 1792,
        "end": 1799
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 1802,
          "end": 1819
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1820,
                "end": 1822
              },
              "typeArguments": null,
              "start": 1820,
              "end": 1822
            }
          ],
          "start": 1819,
          "end": 1823
        },
        "start": 1802,
        "end": 1823
      },
      "declare": false,
      "start": 1787,
      "end": 1824
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P0Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 1846,
        "end": 1853
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 1856,
          "end": 1873
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1874,
                "end": 1876
              },
              "typeArguments": null,
              "start": 1874,
              "end": 1876
            }
          ],
          "start": 1873,
          "end": 1877
        },
        "start": 1856,
        "end": 1877
      },
      "declare": false,
      "start": 1841,
      "end": 1878
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
            "name": "p3NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1922,
                  "end": 1932
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 1933,
                            "end": 1936
                          },
                          "start": 1933,
                          "end": 1936
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 1939,
                            "end": 1942
                          },
                          "start": 1939,
                          "end": 1942
                        }
                      ],
                      "start": 1933,
                      "end": 1942
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P3Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1944,
                        "end": 1951
                      },
                      "typeArguments": null,
                      "start": 1944,
                      "end": 1951
                    }
                  ],
                  "start": 1932,
                  "end": 1952
                },
                "start": 1922,
                "end": 1952
              },
              "start": 1920,
              "end": 1952
            },
            "start": 1910,
            "end": 1952
          },
          "init": null,
          "definite": false,
          "start": 1910,
          "end": 1952
        }
      ],
      "declare": true,
      "start": 1896,
      "end": 1953
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
            "name": "p2NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1980,
                  "end": 1990
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1991,
                        "end": 1994
                      },
                      "start": 1991,
                      "end": 1994
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P2Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1996,
                        "end": 2003
                      },
                      "typeArguments": null,
                      "start": 1996,
                      "end": 2003
                    }
                  ],
                  "start": 1990,
                  "end": 2004
                },
                "start": 1980,
                "end": 2004
              },
              "start": 1978,
              "end": 2004
            },
            "start": 1968,
            "end": 2004
          },
          "init": null,
          "definite": false,
          "start": 1968,
          "end": 2004
        }
      ],
      "declare": true,
      "start": 1954,
      "end": 2005
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
            "name": "p1NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2032,
                  "end": 2042
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 2043,
                      "end": 2048
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2050,
                        "end": 2057
                      },
                      "typeArguments": null,
                      "start": 2050,
                      "end": 2057
                    }
                  ],
                  "start": 2042,
                  "end": 2058
                },
                "start": 2032,
                "end": 2058
              },
              "start": 2030,
              "end": 2058
            },
            "start": 2020,
            "end": 2058
          },
          "init": null,
          "definite": false,
          "start": 2020,
          "end": 2058
        }
      ],
      "declare": true,
      "start": 2006,
      "end": 2059
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
            "name": "p0NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2086,
                  "end": 2096
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 2097,
                      "end": 2102
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2104,
                        "end": 2111
                      },
                      "typeArguments": null,
                      "start": 2104,
                      "end": 2111
                    }
                  ],
                  "start": 2096,
                  "end": 2112
                },
                "start": 2086,
                "end": 2112
              },
              "start": 2084,
              "end": 2112
            },
            "start": 2074,
            "end": 2112
          },
          "init": null,
          "definite": false,
          "start": 2074,
          "end": 2112
        }
      ],
      "declare": true,
      "start": 2060,
      "end": 2113
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P3Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 2120,
        "end": 2127
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2130,
          "end": 2143
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2144,
                "end": 2146
              },
              "typeArguments": null,
              "start": 2144,
              "end": 2146
            }
          ],
          "start": 2143,
          "end": 2147
        },
        "start": 2130,
        "end": 2147
      },
      "declare": false,
      "start": 2115,
      "end": 2148
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 2189,
        "end": 2196
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2199,
          "end": 2212
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2213,
                "end": 2215
              },
              "typeArguments": null,
              "start": 2213,
              "end": 2215
            }
          ],
          "start": 2212,
          "end": 2216
        },
        "start": 2199,
        "end": 2216
      },
      "declare": false,
      "start": 2184,
      "end": 2217
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2255
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2258,
          "end": 2271
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2272,
                "end": 2274
              },
              "typeArguments": null,
              "start": 2272,
              "end": 2274
            }
          ],
          "start": 2271,
          "end": 2275
        },
        "start": 2258,
        "end": 2275
      },
      "declare": false,
      "start": 2243,
      "end": 2276
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P0Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 2295,
        "end": 2302
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2305,
          "end": 2318
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 2319,
                "end": 2321
              },
              "typeArguments": null,
              "start": 2319,
              "end": 2321
            }
          ],
          "start": 2318,
          "end": 2322
        },
        "start": 2305,
        "end": 2322
      },
      "declare": false,
      "start": 2290,
      "end": 2323
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
            "name": "p3Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2360,
                  "end": 2370
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2373,
                            "end": 2374
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2376,
                              "end": 2382
                            },
                            "start": 2374,
                            "end": 2382
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2373,
                          "end": 2383
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2384,
                            "end": 2385
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2387,
                              "end": 2393
                            },
                            "start": 2385,
                            "end": 2393
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2384,
                          "end": 2393
                        }
                      ],
                      "start": 2371,
                      "end": 2395
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P3Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2397,
                        "end": 2404
                      },
                      "typeArguments": null,
                      "start": 2397,
                      "end": 2404
                    }
                  ],
                  "start": 2370,
                  "end": 2405
                },
                "start": 2360,
                "end": 2405
              },
              "start": 2358,
              "end": 2405
            },
            "start": 2352,
            "end": 2405
          },
          "init": null,
          "definite": false,
          "start": 2352,
          "end": 2405
        }
      ],
      "declare": true,
      "start": 2338,
      "end": 2406
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
            "name": "p2Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2429,
                  "end": 2439
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2442,
                            "end": 2443
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2445,
                              "end": 2451
                            },
                            "start": 2443,
                            "end": 2451
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2442,
                          "end": 2451
                        }
                      ],
                      "start": 2440,
                      "end": 2453
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P2Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2455,
                        "end": 2462
                      },
                      "typeArguments": null,
                      "start": 2455,
                      "end": 2462
                    }
                  ],
                  "start": 2439,
                  "end": 2463
                },
                "start": 2429,
                "end": 2463
              },
              "start": 2427,
              "end": 2463
            },
            "start": 2421,
            "end": 2463
          },
          "init": null,
          "definite": false,
          "start": 2421,
          "end": 2463
        }
      ],
      "declare": true,
      "start": 2407,
      "end": 2464
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
            "name": "p1Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2487,
                  "end": 2497
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2498,
                      "end": 2500
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2502,
                        "end": 2509
                      },
                      "typeArguments": null,
                      "start": 2502,
                      "end": 2509
                    }
                  ],
                  "start": 2497,
                  "end": 2510
                },
                "start": 2487,
                "end": 2510
              },
              "start": 2485,
              "end": 2510
            },
            "start": 2479,
            "end": 2510
          },
          "init": null,
          "definite": false,
          "start": 2479,
          "end": 2510
        }
      ],
      "declare": true,
      "start": 2465,
      "end": 2511
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
            "name": "p0Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2534,
                  "end": 2544
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2545,
                      "end": 2547
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2549,
                        "end": 2556
                      },
                      "typeArguments": null,
                      "start": 2549,
                      "end": 2556
                    }
                  ],
                  "start": 2544,
                  "end": 2557
                },
                "start": 2534,
                "end": 2557
              },
              "start": 2532,
              "end": 2557
            },
            "start": 2526,
            "end": 2557
          },
          "init": null,
          "definite": false,
          "start": 2526,
          "end": 2557
        }
      ],
      "declare": true,
      "start": 2512,
      "end": 2558
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2565,
        "end": 2567
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2572,
              "end": 2573
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2576,
                "end": 2582
              },
              "start": 2574,
              "end": 2582
            },
            "accessibility": null,
            "static": false,
            "start": 2572,
            "end": 2583
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2584,
              "end": 2585
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2588,
                "end": 2594
              },
              "start": 2586,
              "end": 2594
            },
            "accessibility": null,
            "static": false,
            "start": 2584,
            "end": 2595
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2596,
              "end": 2597
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2599,
                "end": 2606
              },
              "start": 2597,
              "end": 2606
            },
            "accessibility": null,
            "static": false,
            "start": 2596,
            "end": 2606
          }
        ],
        "start": 2570,
        "end": 2608
      },
      "declare": false,
      "start": 2560,
      "end": 2609
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2615,
        "end": 2617
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2622,
              "end": 2623
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2626,
                "end": 2632
              },
              "start": 2624,
              "end": 2632
            },
            "accessibility": null,
            "static": false,
            "start": 2622,
            "end": 2633
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2634,
              "end": 2635
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2637,
                "end": 2644
              },
              "start": 2635,
              "end": 2644
            },
            "accessibility": null,
            "static": false,
            "start": 2634,
            "end": 2644
          }
        ],
        "start": 2620,
        "end": 2646
      },
      "declare": false,
      "start": 2610,
      "end": 2647
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2653,
        "end": 2655
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2660,
              "end": 2661
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2663,
                "end": 2670
              },
              "start": 2661,
              "end": 2670
            },
            "accessibility": null,
            "static": false,
            "start": 2660,
            "end": 2670
          }
        ],
        "start": 2658,
        "end": 2672
      },
      "declare": false,
      "start": 2648,
      "end": 2673
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2679,
        "end": 2681
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 2684,
        "end": 2686
      },
      "declare": false,
      "start": 2674,
      "end": 2687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O3Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 2694,
        "end": 2701
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 2704,
          "end": 2721
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2722,
                "end": 2724
              },
              "typeArguments": null,
              "start": 2722,
              "end": 2724
            }
          ],
          "start": 2721,
          "end": 2725
        },
        "start": 2704,
        "end": 2725
      },
      "declare": false,
      "start": 2689,
      "end": 2726
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O2Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 2752,
        "end": 2759
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 2762,
          "end": 2779
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2780,
                "end": 2782
              },
              "typeArguments": null,
              "start": 2780,
              "end": 2782
            }
          ],
          "start": 2779,
          "end": 2783
        },
        "start": 2762,
        "end": 2783
      },
      "declare": false,
      "start": 2747,
      "end": 2784
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O1Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 2804,
        "end": 2811
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 2814,
          "end": 2831
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2832,
                "end": 2834
              },
              "typeArguments": null,
              "start": 2832,
              "end": 2834
            }
          ],
          "start": 2831,
          "end": 2835
        },
        "start": 2814,
        "end": 2835
      },
      "declare": false,
      "start": 2799,
      "end": 2836
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O0Names",
        "optional": false,
        "typeAnnotation": null,
        "start": 2858,
        "end": 2865
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null,
          "start": 2868,
          "end": 2885
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O0",
                "optional": false,
                "typeAnnotation": null,
                "start": 2886,
                "end": 2888
              },
              "typeArguments": null,
              "start": 2886,
              "end": 2888
            }
          ],
          "start": 2885,
          "end": 2889
        },
        "start": 2868,
        "end": 2889
      },
      "declare": false,
      "start": 2853,
      "end": 2890
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
            "name": "o3NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2934,
                  "end": 2944
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2945,
                            "end": 2948
                          },
                          "start": 2945,
                          "end": 2948
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 2951,
                            "end": 2954
                          },
                          "start": 2951,
                          "end": 2954
                        }
                      ],
                      "start": 2945,
                      "end": 2954
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O3Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2956,
                        "end": 2963
                      },
                      "typeArguments": null,
                      "start": 2956,
                      "end": 2963
                    }
                  ],
                  "start": 2944,
                  "end": 2964
                },
                "start": 2934,
                "end": 2964
              },
              "start": 2932,
              "end": 2964
            },
            "start": 2922,
            "end": 2964
          },
          "init": null,
          "definite": false,
          "start": 2922,
          "end": 2964
        }
      ],
      "declare": true,
      "start": 2908,
      "end": 2965
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
            "name": "o2NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2992,
                  "end": 3002
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 3003,
                        "end": 3006
                      },
                      "start": 3003,
                      "end": 3006
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O2Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3008,
                        "end": 3015
                      },
                      "typeArguments": null,
                      "start": 3008,
                      "end": 3015
                    }
                  ],
                  "start": 3002,
                  "end": 3016
                },
                "start": 2992,
                "end": 3016
              },
              "start": 2990,
              "end": 3016
            },
            "start": 2980,
            "end": 3016
          },
          "init": null,
          "definite": false,
          "start": 2980,
          "end": 3016
        }
      ],
      "declare": true,
      "start": 2966,
      "end": 3017
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
            "name": "o1NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3044,
                  "end": 3054
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 3055,
                      "end": 3060
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O1Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3062,
                        "end": 3069
                      },
                      "typeArguments": null,
                      "start": 3062,
                      "end": 3069
                    }
                  ],
                  "start": 3054,
                  "end": 3070
                },
                "start": 3044,
                "end": 3070
              },
              "start": 3042,
              "end": 3070
            },
            "start": 3032,
            "end": 3070
          },
          "init": null,
          "definite": false,
          "start": 3032,
          "end": 3070
        }
      ],
      "declare": true,
      "start": 3018,
      "end": 3071
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
            "name": "o0NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3098,
                  "end": 3108
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 3109,
                      "end": 3114
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O0Names",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3116,
                        "end": 3123
                      },
                      "typeArguments": null,
                      "start": 3116,
                      "end": 3123
                    }
                  ],
                  "start": 3108,
                  "end": 3124
                },
                "start": 3098,
                "end": 3124
              },
              "start": 3096,
              "end": 3124
            },
            "start": 3086,
            "end": 3124
          },
          "init": null,
          "definite": false,
          "start": 3086,
          "end": 3124
        }
      ],
      "declare": true,
      "start": 3072,
      "end": 3125
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O3Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 3132,
        "end": 3139
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3142,
          "end": 3155
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O3",
                "optional": false,
                "typeAnnotation": null,
                "start": 3156,
                "end": 3158
              },
              "typeArguments": null,
              "start": 3156,
              "end": 3158
            }
          ],
          "start": 3155,
          "end": 3159
        },
        "start": 3142,
        "end": 3159
      },
      "declare": false,
      "start": 3127,
      "end": 3160
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O2Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 3227,
        "end": 3234
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3237,
          "end": 3250
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3251,
                "end": 3253
              },
              "typeArguments": null,
              "start": 3251,
              "end": 3253
            }
          ],
          "start": 3250,
          "end": 3254
        },
        "start": 3237,
        "end": 3254
      },
      "declare": false,
      "start": 3222,
      "end": 3255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O1Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 3299,
        "end": 3306
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3309,
          "end": 3322
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3323,
                "end": 3325
              },
              "typeArguments": null,
              "start": 3323,
              "end": 3325
            }
          ],
          "start": 3322,
          "end": 3326
        },
        "start": 3309,
        "end": 3326
      },
      "declare": false,
      "start": 3294,
      "end": 3327
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O0Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 3346,
        "end": 3353
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3356,
          "end": 3369
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O0",
                "optional": false,
                "typeAnnotation": null,
                "start": 3370,
                "end": 3372
              },
              "typeArguments": null,
              "start": 3370,
              "end": 3372
            }
          ],
          "start": 3369,
          "end": 3373
        },
        "start": 3356,
        "end": 3373
      },
      "declare": false,
      "start": 3341,
      "end": 3374
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
            "name": "o3Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3411,
                  "end": 3421
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3424,
                            "end": 3425
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3428,
                              "end": 3434
                            },
                            "start": 3426,
                            "end": 3434
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3424,
                          "end": 3435
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3436,
                            "end": 3437
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3440,
                              "end": 3446
                            },
                            "start": 3438,
                            "end": 3446
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3436,
                          "end": 3446
                        }
                      ],
                      "start": 3422,
                      "end": 3448
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O3Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3450,
                        "end": 3457
                      },
                      "typeArguments": null,
                      "start": 3450,
                      "end": 3457
                    }
                  ],
                  "start": 3421,
                  "end": 3458
                },
                "start": 3411,
                "end": 3458
              },
              "start": 3409,
              "end": 3458
            },
            "start": 3403,
            "end": 3458
          },
          "init": null,
          "definite": false,
          "start": 3403,
          "end": 3458
        }
      ],
      "declare": true,
      "start": 3389,
      "end": 3459
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
            "name": "o2Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3482,
                  "end": 3492
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3495,
                            "end": 3496
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3499,
                              "end": 3505
                            },
                            "start": 3497,
                            "end": 3505
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3495,
                          "end": 3505
                        }
                      ],
                      "start": 3493,
                      "end": 3507
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O2Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3509,
                        "end": 3516
                      },
                      "typeArguments": null,
                      "start": 3509,
                      "end": 3516
                    }
                  ],
                  "start": 3492,
                  "end": 3517
                },
                "start": 3482,
                "end": 3517
              },
              "start": 3480,
              "end": 3517
            },
            "start": 3474,
            "end": 3517
          },
          "init": null,
          "definite": false,
          "start": 3474,
          "end": 3517
        }
      ],
      "declare": true,
      "start": 3460,
      "end": 3518
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
            "name": "o1Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3541,
                  "end": 3551
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 3552,
                      "end": 3554
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O1Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3556,
                        "end": 3563
                      },
                      "typeArguments": null,
                      "start": 3556,
                      "end": 3563
                    }
                  ],
                  "start": 3551,
                  "end": 3564
                },
                "start": 3541,
                "end": 3564
              },
              "start": 3539,
              "end": 3564
            },
            "start": 3533,
            "end": 3564
          },
          "init": null,
          "definite": false,
          "start": 3533,
          "end": 3564
        }
      ],
      "declare": true,
      "start": 3519,
      "end": 3565
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
            "name": "o0Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3588,
                  "end": 3598
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 3599,
                      "end": 3601
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O0Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3603,
                        "end": 3610
                      },
                      "typeArguments": null,
                      "start": 3603,
                      "end": 3610
                    }
                  ],
                  "start": 3598,
                  "end": 3611
                },
                "start": 3588,
                "end": 3611
              },
              "start": 3586,
              "end": 3611
            },
            "start": 3580,
            "end": 3611
          },
          "init": null,
          "definite": false,
          "start": 3580,
          "end": 3611
        }
      ],
      "declare": true,
      "start": 3566,
      "end": 3612
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 3641,
        "end": 3648
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
              "start": 3649,
              "end": 3650
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3659,
                "end": 3665
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 3666,
                      "end": 3669
                    },
                    "start": 3666,
                    "end": 3669
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3671,
                    "end": 3677
                  }
                ],
                "start": 3665,
                "end": 3678
              },
              "start": 3659,
              "end": 3678
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3649,
            "end": 3678
          }
        ],
        "start": 3648,
        "end": 3679
      },
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
            "start": 3682,
            "end": 3683
          },
          "typeArguments": null,
          "start": 3682,
          "end": 3683
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 3684,
            "end": 3687
          },
          "start": 3684,
          "end": 3687
        },
        "start": 3682,
        "end": 3688
      },
      "declare": false,
      "start": 3636,
      "end": 3689
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3696,
        "end": 3700
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3703,
          "end": 3710
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3713,
                        "end": 3714
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 3716,
                            "end": 3719
                          },
                          "start": 3716,
                          "end": 3719
                        },
                        "start": 3714,
                        "end": 3719
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3713,
                      "end": 3719
                    }
                  ],
                  "start": 3711,
                  "end": 3721
                },
                {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3726,
                        "end": 3727
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 3729,
                            "end": 3732
                          },
                          "start": 3729,
                          "end": 3732
                        },
                        "start": 3727,
                        "end": 3732
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3726,
                      "end": 3732
                    }
                  ],
                  "start": 3724,
                  "end": 3734
                }
              ],
              "start": 3711,
              "end": 3734
            }
          ],
          "start": 3710,
          "end": 3735
        },
        "start": 3703,
        "end": 3735
      },
      "declare": false,
      "start": 3691,
      "end": 3736
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3756,
        "end": 3760
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3763,
          "end": 3770
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3773,
                    "end": 3774
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 3776,
                        "end": 3779
                      },
                      "start": 3776,
                      "end": 3779
                    },
                    "start": 3774,
                    "end": 3779
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3773,
                  "end": 3779
                }
              ],
              "start": 3771,
              "end": 3781
            }
          ],
          "start": 3770,
          "end": 3782
        },
        "start": 3763,
        "end": 3782
      },
      "declare": false,
      "start": 3751,
      "end": 3783
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3797,
        "end": 3801
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3804,
          "end": 3811
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 3812,
              "end": 3817
            }
          ],
          "start": 3811,
          "end": 3818
        },
        "start": 3804,
        "end": 3818
      },
      "declare": false,
      "start": 3792,
      "end": 3819
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3830
}
```
