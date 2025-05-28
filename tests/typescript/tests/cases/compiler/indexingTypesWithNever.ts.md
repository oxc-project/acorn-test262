__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3830,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "TestObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 15,
        "end": 44,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 42,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
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
      "start": 87,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 99,
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 102,
        "end": 116,
        "objectType": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 109,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 109,
            "decorators": [],
            "name": "TestObj",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSNeverKeyword",
          "start": 110,
          "end": 115
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 119,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 132,
        "decorators": [],
        "name": "EmptyObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 135,
        "end": 137,
        "members": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 180,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 192,
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 195,
        "end": 219,
        "objectType": {
          "type": "TSTypeReference",
          "start": 195,
          "end": 203,
          "typeName": {
            "type": "Identifier",
            "start": 195,
            "end": 203,
            "decorators": [],
            "name": "EmptyObj",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 204,
          "end": 218,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 210,
            "end": 218,
            "typeName": {
              "type": "Identifier",
              "start": 210,
              "end": 218,
              "decorators": [],
              "name": "EmptyObj",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 222,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 249,
        "decorators": [],
        "name": "genericFn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 249,
        "end": 252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 251,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
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
      "params": [
        {
          "type": "Identifier",
          "start": 253,
          "end": 259,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 259,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 258,
              "end": 259,
              "typeName": {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 260,
        "end": 270,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 262,
          "end": 270,
          "objectType": {
            "type": "TSTypeReference",
            "start": 262,
            "end": 263,
            "typeName": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSNeverKeyword",
            "start": 264,
            "end": 269
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 347,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 305,
            "decorators": [],
            "name": "result3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 308,
            "end": 346,
            "callee": {
              "type": "Identifier",
              "start": 308,
              "end": 318,
              "decorators": [],
              "name": "genericFn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 319,
                "end": 345,
                "properties": [
                  {
                    "type": "Property",
                    "start": 321,
                    "end": 331,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 322,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 324,
                      "end": 331,
                      "value": "ctest",
                      "raw": "\"ctest\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 333,
                    "end": 343,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 334,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 336,
                      "end": 343,
                      "value": "dtest",
                      "raw": "\"dtest\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 349,
      "end": 436,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 376,
        "decorators": [],
        "name": "genericFn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 376,
        "end": 413,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 377,
            "end": 412,
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 387,
              "end": 412,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 389,
                  "end": 410,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 390,
                      "end": 401,
                      "decorators": [],
                      "name": "ind",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 393,
                        "end": 401,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 395,
                          "end": 401
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 402,
                    "end": 410,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 404,
                      "end": 410
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 417,
          "end": 423,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 423,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 422,
              "end": 423,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 425,
        "end": 435,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 427,
          "end": 435,
          "objectType": {
            "type": "TSTypeReference",
            "start": 427,
            "end": 428,
            "typeName": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSNeverKeyword",
            "start": 429,
            "end": 434
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 512,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 511,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 470,
            "decorators": [],
            "name": "result4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 473,
            "end": 511,
            "callee": {
              "type": "Identifier",
              "start": 473,
              "end": 483,
              "decorators": [],
              "name": "genericFn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 484,
                "end": 510,
                "properties": [
                  {
                    "type": "Property",
                    "start": 486,
                    "end": 496,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 487,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 489,
                      "end": 496,
                      "value": "etest",
                      "raw": "\"etest\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 498,
                    "end": 508,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 499,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 501,
                      "end": 508,
                      "value": "ftest",
                      "raw": "\"ftest\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 514,
      "end": 654,
      "id": {
        "type": "Identifier",
        "start": 531,
        "end": 541,
        "decorators": [],
        "name": "genericFn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 541,
        "end": 623,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 545,
            "end": 579,
            "name": {
              "type": "Identifier",
              "start": 545,
              "end": 546,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 555,
              "end": 579,
              "key": {
                "type": "Identifier",
                "start": 558,
                "end": 559,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 563,
                "end": 570,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 569,
                  "end": 570,
                  "typeName": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 570,
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
                "start": 573,
                "end": 577,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 573,
                  "end": 574,
                  "typeName": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 575,
                  "end": 576,
                  "typeName": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 576,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 583,
            "end": 600,
            "name": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 593,
              "end": 600,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 599,
                "end": 600,
                "typeName": {
                  "type": "Identifier",
                  "start": 599,
                  "end": 600,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 604,
            "end": 621,
            "name": {
              "type": "Identifier",
              "start": 604,
              "end": 605,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 614,
              "end": 621,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 620,
                "end": 621,
                "typeName": {
                  "type": "Identifier",
                  "start": 620,
                  "end": 621,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 624,
          "end": 630,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 627,
            "end": 630,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 629,
              "end": 630,
              "typeName": {
                "type": "Identifier",
                "start": 629,
                "end": 630,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 632,
          "end": 636,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 633,
            "end": 636,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 635,
              "end": 636,
              "typeName": {
                "type": "Identifier",
                "start": 635,
                "end": 636,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 638,
          "end": 642,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 639,
            "end": 642,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 641,
              "end": 642,
              "typeName": {
                "type": "Identifier",
                "start": 641,
                "end": 642,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 643,
        "end": 653,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 645,
          "end": 653,
          "objectType": {
            "type": "TSTypeReference",
            "start": 645,
            "end": 646,
            "typeName": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSIntersectionType",
            "start": 647,
            "end": 652,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 647,
                "end": 648,
                "typeName": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 648,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 651,
                "end": 652,
                "typeName": {
                  "type": "Identifier",
                  "start": 651,
                  "end": 652,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 675,
      "end": 740,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 681,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 681,
            "end": 688,
            "decorators": [],
            "name": "result5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 691,
            "end": 739,
            "callee": {
              "type": "Identifier",
              "start": 691,
              "end": 701,
              "decorators": [],
              "name": "genericFn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 702,
                "end": 728,
                "properties": [
                  {
                    "type": "Property",
                    "start": 704,
                    "end": 714,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 704,
                      "end": 705,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 707,
                      "end": 714,
                      "value": "gtest",
                      "raw": "\"gtest\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 716,
                    "end": 726,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 716,
                      "end": 717,
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 719,
                      "end": 726,
                      "value": "htest",
                      "raw": "\"htest\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 730,
                "end": 733,
                "value": "g",
                "raw": "\"g\""
              },
              {
                "type": "Literal",
                "start": 735,
                "end": 738,
                "value": "h",
                "raw": "\"h\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 777,
      "end": 818,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 791,
          "end": 818,
          "id": {
            "type": "Identifier",
            "start": 791,
            "end": 818,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 794,
              "end": 818,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 796,
                "end": 818,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 797,
                    "end": 807,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 797,
                      "end": 798,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 798,
                      "end": 806,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 800,
                        "end": 806
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 808,
                    "end": 817,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 808,
                      "end": 809,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 809,
                      "end": 817,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 811,
                        "end": 817
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 819,
      "end": 843,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 833,
          "end": 843,
          "id": {
            "type": "Identifier",
            "start": 833,
            "end": 843,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 836,
              "end": 843,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 838,
                "end": 843
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 845,
      "end": 869,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 851,
          "end": 869,
          "id": {
            "type": "Identifier",
            "start": 851,
            "end": 858,
            "decorators": [],
            "name": "result6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 861,
            "end": 869,
            "object": {
              "type": "Identifier",
              "start": 861,
              "end": 864,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 865,
              "end": 868,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 950,
      "end": 1046,
      "id": {
        "type": "Identifier",
        "start": 955,
        "end": 972,
        "decorators": [],
        "name": "RequiredPropNames",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 972,
        "end": 975,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 973,
            "end": 974,
            "name": {
              "type": "Identifier",
              "start": 973,
              "end": 974,
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
        "type": "TSIndexedAccessType",
        "start": 978,
        "end": 1045,
        "objectType": {
          "type": "TSMappedType",
          "start": 978,
          "end": 1036,
          "key": {
            "type": "Identifier",
            "start": 983,
            "end": 984,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 988,
            "end": 995,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 994,
              "end": 995,
              "typeName": {
                "type": "Identifier",
                "start": 994,
                "end": 995,
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
            "type": "TSConditionalType",
            "start": 1000,
            "end": 1034,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 1000,
              "end": 1009
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 1018,
              "end": 1022,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1018,
                "end": 1019,
                "typeName": {
                  "type": "Identifier",
                  "start": 1018,
                  "end": 1019,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1020,
                "end": 1021,
                "typeName": {
                  "type": "Identifier",
                  "start": 1020,
                  "end": 1021,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 1025,
              "end": 1030
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 1033,
              "end": 1034,
              "typeName": {
                "type": "Identifier",
                "start": 1033,
                "end": 1034,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "optional": "-",
          "readonly": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 1037,
          "end": 1044,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1043,
            "end": 1044,
            "typeName": {
              "type": "Identifier",
              "start": 1043,
              "end": 1044,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1048,
      "end": 1144,
      "id": {
        "type": "Identifier",
        "start": 1053,
        "end": 1070,
        "decorators": [],
        "name": "OptionalPropNames",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1070,
        "end": 1073,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1071,
            "end": 1072,
            "name": {
              "type": "Identifier",
              "start": 1071,
              "end": 1072,
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
        "type": "TSIndexedAccessType",
        "start": 1076,
        "end": 1143,
        "objectType": {
          "type": "TSMappedType",
          "start": 1076,
          "end": 1134,
          "key": {
            "type": "Identifier",
            "start": 1081,
            "end": 1082,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1086,
            "end": 1093,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1092,
              "end": 1093,
              "typeName": {
                "type": "Identifier",
                "start": 1092,
                "end": 1093,
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
            "type": "TSConditionalType",
            "start": 1098,
            "end": 1132,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 1098,
              "end": 1107
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 1116,
              "end": 1120,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1116,
                "end": 1117,
                "typeName": {
                  "type": "Identifier",
                  "start": 1116,
                  "end": 1117,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1118,
                "end": 1119,
                "typeName": {
                  "type": "Identifier",
                  "start": 1118,
                  "end": 1119,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 1123,
              "end": 1124,
              "typeName": {
                "type": "Identifier",
                "start": 1123,
                "end": 1124,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1127,
              "end": 1132
            }
          },
          "optional": "-",
          "readonly": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 1135,
          "end": 1142,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1141,
            "end": 1142,
            "typeName": {
              "type": "Identifier",
              "start": 1141,
              "end": 1142,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1146,
      "end": 1208,
      "id": {
        "type": "Identifier",
        "start": 1151,
        "end": 1164,
        "decorators": [],
        "name": "RequiredProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1164,
        "end": 1167,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1165,
            "end": 1166,
            "name": {
              "type": "Identifier",
              "start": 1165,
              "end": 1166,
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
        "start": 1170,
        "end": 1207,
        "key": {
          "type": "Identifier",
          "start": 1173,
          "end": 1174,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 1178,
          "end": 1198,
          "typeName": {
            "type": "Identifier",
            "start": 1178,
            "end": 1195,
            "decorators": [],
            "name": "RequiredPropNames",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1195,
            "end": 1198,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1196,
                "end": 1197,
                "typeName": {
                  "type": "Identifier",
                  "start": 1196,
                  "end": 1197,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1201,
          "end": 1205,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1201,
            "end": 1202,
            "typeName": {
              "type": "Identifier",
              "start": 1201,
              "end": 1202,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1203,
            "end": 1204,
            "typeName": {
              "type": "Identifier",
              "start": 1203,
              "end": 1204,
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
      "start": 1209,
      "end": 1272,
      "id": {
        "type": "Identifier",
        "start": 1214,
        "end": 1227,
        "decorators": [],
        "name": "OptionalProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1227,
        "end": 1230,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1228,
            "end": 1229,
            "name": {
              "type": "Identifier",
              "start": 1228,
              "end": 1229,
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
        "start": 1233,
        "end": 1271,
        "key": {
          "type": "Identifier",
          "start": 1236,
          "end": 1237,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 1241,
          "end": 1261,
          "typeName": {
            "type": "Identifier",
            "start": 1241,
            "end": 1258,
            "decorators": [],
            "name": "OptionalPropNames",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1258,
            "end": 1261,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1259,
                "end": 1260,
                "typeName": {
                  "type": "Identifier",
                  "start": 1259,
                  "end": 1260,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1265,
          "end": 1269,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1265,
            "end": 1266,
            "typeName": {
              "type": "Identifier",
              "start": 1265,
              "end": 1266,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1267,
            "end": 1268,
            "typeName": {
              "type": "Identifier",
              "start": 1267,
              "end": 1268,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": true,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1274,
      "end": 1395,
      "id": {
        "type": "Identifier",
        "start": 1279,
        "end": 1284,
        "decorators": [],
        "name": "Match",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1284,
        "end": 1294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1285,
            "end": 1288,
            "name": {
              "type": "Identifier",
              "start": 1285,
              "end": 1288,
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1290,
            "end": 1293,
            "name": {
              "type": "Identifier",
              "start": 1290,
              "end": 1293,
              "decorators": [],
              "name": "Act",
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
        "type": "TSConditionalType",
        "start": 1297,
        "end": 1394,
        "checkType": {
          "type": "TSTupleType",
          "start": 1297,
          "end": 1302,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 1298,
              "end": 1301,
              "typeName": {
                "type": "Identifier",
                "start": 1298,
                "end": 1301,
                "decorators": [],
                "name": "Exp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 1311,
          "end": 1316,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 1312,
              "end": 1315,
              "typeName": {
                "type": "Identifier",
                "start": 1312,
                "end": 1315,
                "decorators": [],
                "name": "Act",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 1322,
          "end": 1371,
          "checkType": {
            "type": "TSTupleType",
            "start": 1322,
            "end": 1327,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 1323,
                "end": 1326,
                "typeName": {
                  "type": "Identifier",
                  "start": 1323,
                  "end": 1326,
                  "decorators": [],
                  "name": "Act",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 1336,
            "end": 1341,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 1337,
                "end": 1340,
                "typeName": {
                  "type": "Identifier",
                  "start": 1337,
                  "end": 1340,
                  "decorators": [],
                  "name": "Exp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 1344,
            "end": 1351,
            "literal": {
              "type": "Literal",
              "start": 1344,
              "end": 1351,
              "value": "Match",
              "raw": "\"Match\""
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 1354,
            "end": 1371,
            "literal": {
              "type": "Literal",
              "start": 1354,
              "end": 1371,
              "value": "Did not match 2",
              "raw": "\"Did not match 2\""
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1377,
          "end": 1394,
          "literal": {
            "type": "Literal",
            "start": 1377,
            "end": 1394,
            "value": "Did not match 1",
            "raw": "\"Did not match 1\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1397,
      "end": 1546,
      "id": {
        "type": "Identifier",
        "start": 1402,
        "end": 1412,
        "decorators": [],
        "name": "ExpectType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1412,
        "end": 1422,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1413,
            "end": 1416,
            "name": {
              "type": "Identifier",
              "start": 1413,
              "end": 1416,
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1418,
            "end": 1421,
            "name": {
              "type": "Identifier",
              "start": 1418,
              "end": 1421,
              "decorators": [],
              "name": "Act",
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
        "type": "TSConditionalType",
        "start": 1425,
        "end": 1545,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1425,
          "end": 1440,
          "typeName": {
            "type": "Identifier",
            "start": 1425,
            "end": 1430,
            "decorators": [],
            "name": "Match",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1430,
            "end": 1440,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1431,
                "end": 1434,
                "typeName": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1434,
                  "decorators": [],
                  "name": "Exp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1436,
                "end": 1439,
                "typeName": {
                  "type": "Identifier",
                  "start": 1436,
                  "end": 1439,
                  "decorators": [],
                  "name": "Act",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 1449,
          "end": 1456,
          "literal": {
            "type": "Literal",
            "start": 1449,
            "end": 1456,
            "value": "Match",
            "raw": "\"Match\""
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 1462,
          "end": 1524,
          "checkType": {
            "type": "TSTypeLiteral",
            "start": 1462,
            "end": 1464,
            "members": []
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1473,
            "end": 1476,
            "typeName": {
              "type": "Identifier",
              "start": 1473,
              "end": 1476,
              "decorators": [],
              "name": "Exp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1479,
            "end": 1514,
            "typeName": {
              "type": "Identifier",
              "start": 1479,
              "end": 1484,
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1484,
              "end": 1514,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1485,
                  "end": 1498,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1485,
                    "end": 1493,
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1493,
                    "end": 1498,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1494,
                        "end": 1497,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1494,
                          "end": 1497,
                          "decorators": [],
                          "name": "Exp",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1500,
                  "end": 1513,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1500,
                    "end": 1508,
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1508,
                    "end": 1513,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1509,
                        "end": 1512,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1509,
                          "end": 1512,
                          "decorators": [],
                          "name": "Act",
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
          "falseType": {
            "type": "TSLiteralType",
            "start": 1517,
            "end": 1524,
            "literal": {
              "type": "Literal",
              "start": 1517,
              "end": 1524,
              "value": "Match",
              "raw": "\"Match\""
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1530,
          "end": 1545,
          "literal": {
            "type": "Literal",
            "start": 1530,
            "end": 1545,
            "value": "Did not match",
            "raw": "\"Did not match\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1548,
      "end": 1596,
      "id": {
        "type": "Identifier",
        "start": 1553,
        "end": 1555,
        "decorators": [],
        "name": "P3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1558,
        "end": 1595,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1560,
            "end": 1570,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1560,
              "end": 1561,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1561,
              "end": 1569,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1563,
                "end": 1569
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1571,
            "end": 1581,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1571,
              "end": 1572,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1572,
              "end": 1580,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1574,
                "end": 1580
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1582,
            "end": 1593,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1582,
              "end": 1583,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1584,
              "end": 1593,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1586,
                "end": 1593
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
      "start": 1597,
      "end": 1634,
      "id": {
        "type": "Identifier",
        "start": 1602,
        "end": 1604,
        "decorators": [],
        "name": "P2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1607,
        "end": 1633,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1609,
            "end": 1619,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1609,
              "end": 1610,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1610,
              "end": 1618,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1612,
                "end": 1618
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1620,
            "end": 1631,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1620,
              "end": 1621,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1622,
              "end": 1631,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1624,
                "end": 1631
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
      "start": 1635,
      "end": 1661,
      "id": {
        "type": "Identifier",
        "start": 1640,
        "end": 1642,
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1645,
        "end": 1660,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1647,
            "end": 1658,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1647,
              "end": 1648,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1649,
              "end": 1658,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1651,
                "end": 1658
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
      "start": 1662,
      "end": 1675,
      "id": {
        "type": "Identifier",
        "start": 1667,
        "end": 1669,
        "decorators": [],
        "name": "P0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1672,
        "end": 1674,
        "members": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1677,
      "end": 1714,
      "id": {
        "type": "Identifier",
        "start": 1682,
        "end": 1689,
        "decorators": [],
        "name": "P3Names",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1692,
        "end": 1713,
        "typeName": {
          "type": "Identifier",
          "start": 1692,
          "end": 1709,
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1709,
          "end": 1713,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1710,
              "end": 1712,
              "typeName": {
                "type": "Identifier",
                "start": 1710,
                "end": 1712,
                "decorators": [],
                "name": "P3",
                "optional": false,
                "typeAnnotation": null
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
      "start": 1735,
      "end": 1772,
      "id": {
        "type": "Identifier",
        "start": 1740,
        "end": 1747,
        "decorators": [],
        "name": "P2Names",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1750,
        "end": 1771,
        "typeName": {
          "type": "Identifier",
          "start": 1750,
          "end": 1767,
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1767,
          "end": 1771,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1768,
              "end": 1770,
              "typeName": {
                "type": "Identifier",
                "start": 1768,
                "end": 1770,
                "decorators": [],
                "name": "P2",
                "optional": false,
                "typeAnnotation": null
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
      "start": 1787,
      "end": 1824,
      "id": {
        "type": "Identifier",
        "start": 1792,
        "end": 1799,
        "decorators": [],
        "name": "P1Names",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1802,
        "end": 1823,
        "typeName": {
          "type": "Identifier",
          "start": 1802,
          "end": 1819,
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1819,
          "end": 1823,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1820,
              "end": 1822,
              "typeName": {
                "type": "Identifier",
                "start": 1820,
                "end": 1822,
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null
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
      "start": 1841,
      "end": 1878,
      "id": {
        "type": "Identifier",
        "start": 1846,
        "end": 1853,
        "decorators": [],
        "name": "P0Names",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1856,
        "end": 1877,
        "typeName": {
          "type": "Identifier",
          "start": 1856,
          "end": 1873,
          "decorators": [],
          "name": "RequiredPropNames",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1873,
          "end": 1877,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1874,
              "end": 1876,
              "typeName": {
                "type": "Identifier",
                "start": 1874,
                "end": 1876,
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1896,
      "end": 1953,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1910,
          "end": 1952,
          "id": {
            "type": "Identifier",
            "start": 1910,
            "end": 1952,
            "decorators": [],
            "name": "p3NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1920,
              "end": 1952,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1922,
                "end": 1952,
                "typeName": {
                  "type": "Identifier",
                  "start": 1922,
                  "end": 1932,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1932,
                  "end": 1952,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 1933,
                      "end": 1942,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1933,
                          "end": 1936,
                          "literal": {
                            "type": "Literal",
                            "start": 1933,
                            "end": 1936,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1939,
                          "end": 1942,
                          "literal": {
                            "type": "Literal",
                            "start": 1939,
                            "end": 1942,
                            "value": "b",
                            "raw": "\"b\""
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1944,
                      "end": 1951,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1944,
                        "end": 1951,
                        "decorators": [],
                        "name": "P3Names",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1954,
      "end": 2005,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1968,
          "end": 2004,
          "id": {
            "type": "Identifier",
            "start": 1968,
            "end": 2004,
            "decorators": [],
            "name": "p2NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1978,
              "end": 2004,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1980,
                "end": 2004,
                "typeName": {
                  "type": "Identifier",
                  "start": 1980,
                  "end": 1990,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1990,
                  "end": 2004,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 1991,
                      "end": 1994,
                      "literal": {
                        "type": "Literal",
                        "start": 1991,
                        "end": 1994,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1996,
                      "end": 2003,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1996,
                        "end": 2003,
                        "decorators": [],
                        "name": "P2Names",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2006,
      "end": 2059,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2020,
          "end": 2058,
          "id": {
            "type": "Identifier",
            "start": 2020,
            "end": 2058,
            "decorators": [],
            "name": "p1NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2030,
              "end": 2058,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2032,
                "end": 2058,
                "typeName": {
                  "type": "Identifier",
                  "start": 2032,
                  "end": 2042,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2042,
                  "end": 2058,
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 2043,
                      "end": 2048
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2050,
                      "end": 2057,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2050,
                        "end": 2057,
                        "decorators": [],
                        "name": "P1Names",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2060,
      "end": 2113,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2074,
          "end": 2112,
          "id": {
            "type": "Identifier",
            "start": 2074,
            "end": 2112,
            "decorators": [],
            "name": "p0NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2084,
              "end": 2112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2086,
                "end": 2112,
                "typeName": {
                  "type": "Identifier",
                  "start": 2086,
                  "end": 2096,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2096,
                  "end": 2112,
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 2097,
                      "end": 2102
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2104,
                      "end": 2111,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2104,
                        "end": 2111,
                        "decorators": [],
                        "name": "P0Names",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2115,
      "end": 2148,
      "id": {
        "type": "Identifier",
        "start": 2120,
        "end": 2127,
        "decorators": [],
        "name": "P3Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2130,
        "end": 2147,
        "typeName": {
          "type": "Identifier",
          "start": 2130,
          "end": 2143,
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2143,
          "end": 2147,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2144,
              "end": 2146,
              "typeName": {
                "type": "Identifier",
                "start": 2144,
                "end": 2146,
                "decorators": [],
                "name": "P3",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2184,
      "end": 2217,
      "id": {
        "type": "Identifier",
        "start": 2189,
        "end": 2196,
        "decorators": [],
        "name": "P2Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2199,
        "end": 2216,
        "typeName": {
          "type": "Identifier",
          "start": 2199,
          "end": 2212,
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2212,
          "end": 2216,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2213,
              "end": 2215,
              "typeName": {
                "type": "Identifier",
                "start": 2213,
                "end": 2215,
                "decorators": [],
                "name": "P2",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2243,
      "end": 2276,
      "id": {
        "type": "Identifier",
        "start": 2248,
        "end": 2255,
        "decorators": [],
        "name": "P1Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2258,
        "end": 2275,
        "typeName": {
          "type": "Identifier",
          "start": 2258,
          "end": 2271,
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2271,
          "end": 2275,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2272,
              "end": 2274,
              "typeName": {
                "type": "Identifier",
                "start": 2272,
                "end": 2274,
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2290,
      "end": 2323,
      "id": {
        "type": "Identifier",
        "start": 2295,
        "end": 2302,
        "decorators": [],
        "name": "P0Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2305,
        "end": 2322,
        "typeName": {
          "type": "Identifier",
          "start": 2305,
          "end": 2318,
          "decorators": [],
          "name": "RequiredProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2318,
          "end": 2322,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2319,
              "end": 2321,
              "typeName": {
                "type": "Identifier",
                "start": 2319,
                "end": 2321,
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2338,
      "end": 2406,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2352,
          "end": 2405,
          "id": {
            "type": "Identifier",
            "start": 2352,
            "end": 2405,
            "decorators": [],
            "name": "p3Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2358,
              "end": 2405,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2360,
                "end": 2405,
                "typeName": {
                  "type": "Identifier",
                  "start": 2360,
                  "end": 2370,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2370,
                  "end": 2405,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 2371,
                      "end": 2395,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2373,
                          "end": 2383,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2373,
                            "end": 2374,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2374,
                            "end": 2382,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2376,
                              "end": 2382
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 2384,
                          "end": 2393,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2384,
                            "end": 2385,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2385,
                            "end": 2393,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2387,
                              "end": 2393
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2397,
                      "end": 2404,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2397,
                        "end": 2404,
                        "decorators": [],
                        "name": "P3Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2407,
      "end": 2464,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2421,
          "end": 2463,
          "id": {
            "type": "Identifier",
            "start": 2421,
            "end": 2463,
            "decorators": [],
            "name": "p2Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2427,
              "end": 2463,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2429,
                "end": 2463,
                "typeName": {
                  "type": "Identifier",
                  "start": 2429,
                  "end": 2439,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2439,
                  "end": 2463,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 2440,
                      "end": 2453,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2442,
                          "end": 2451,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2442,
                            "end": 2443,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2443,
                            "end": 2451,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2445,
                              "end": 2451
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2455,
                      "end": 2462,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2455,
                        "end": 2462,
                        "decorators": [],
                        "name": "P2Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2465,
      "end": 2511,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2479,
          "end": 2510,
          "id": {
            "type": "Identifier",
            "start": 2479,
            "end": 2510,
            "decorators": [],
            "name": "p1Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2485,
              "end": 2510,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2487,
                "end": 2510,
                "typeName": {
                  "type": "Identifier",
                  "start": 2487,
                  "end": 2497,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2497,
                  "end": 2510,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 2498,
                      "end": 2500,
                      "members": []
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2502,
                      "end": 2509,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2502,
                        "end": 2509,
                        "decorators": [],
                        "name": "P1Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2512,
      "end": 2558,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2526,
          "end": 2557,
          "id": {
            "type": "Identifier",
            "start": 2526,
            "end": 2557,
            "decorators": [],
            "name": "p0Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2532,
              "end": 2557,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2534,
                "end": 2557,
                "typeName": {
                  "type": "Identifier",
                  "start": 2534,
                  "end": 2544,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2544,
                  "end": 2557,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 2545,
                      "end": 2547,
                      "members": []
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2549,
                      "end": 2556,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2549,
                        "end": 2556,
                        "decorators": [],
                        "name": "P0Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2560,
      "end": 2609,
      "id": {
        "type": "Identifier",
        "start": 2565,
        "end": 2567,
        "decorators": [],
        "name": "O3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2570,
        "end": 2608,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2572,
            "end": 2583,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2572,
              "end": 2573,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2574,
              "end": 2582,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2576,
                "end": 2582
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2584,
            "end": 2595,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2584,
              "end": 2585,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2586,
              "end": 2594,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2588,
                "end": 2594
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2596,
            "end": 2606,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2596,
              "end": 2597,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2597,
              "end": 2606,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2599,
                "end": 2606
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
      "start": 2610,
      "end": 2647,
      "id": {
        "type": "Identifier",
        "start": 2615,
        "end": 2617,
        "decorators": [],
        "name": "O2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2620,
        "end": 2646,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2622,
            "end": 2633,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2622,
              "end": 2623,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2624,
              "end": 2632,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2626,
                "end": 2632
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2634,
            "end": 2644,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2634,
              "end": 2635,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2635,
              "end": 2644,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2637,
                "end": 2644
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
      "start": 2648,
      "end": 2673,
      "id": {
        "type": "Identifier",
        "start": 2653,
        "end": 2655,
        "decorators": [],
        "name": "O1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2658,
        "end": 2672,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2660,
            "end": 2670,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2660,
              "end": 2661,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2661,
              "end": 2670,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2663,
                "end": 2670
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
      "start": 2674,
      "end": 2687,
      "id": {
        "type": "Identifier",
        "start": 2679,
        "end": 2681,
        "decorators": [],
        "name": "O0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2684,
        "end": 2686,
        "members": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2689,
      "end": 2726,
      "id": {
        "type": "Identifier",
        "start": 2694,
        "end": 2701,
        "decorators": [],
        "name": "O3Names",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2704,
        "end": 2725,
        "typeName": {
          "type": "Identifier",
          "start": 2704,
          "end": 2721,
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2721,
          "end": 2725,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2722,
              "end": 2724,
              "typeName": {
                "type": "Identifier",
                "start": 2722,
                "end": 2724,
                "decorators": [],
                "name": "O3",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2747,
      "end": 2784,
      "id": {
        "type": "Identifier",
        "start": 2752,
        "end": 2759,
        "decorators": [],
        "name": "O2Names",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2762,
        "end": 2783,
        "typeName": {
          "type": "Identifier",
          "start": 2762,
          "end": 2779,
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2779,
          "end": 2783,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2780,
              "end": 2782,
              "typeName": {
                "type": "Identifier",
                "start": 2780,
                "end": 2782,
                "decorators": [],
                "name": "O2",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2799,
      "end": 2836,
      "id": {
        "type": "Identifier",
        "start": 2804,
        "end": 2811,
        "decorators": [],
        "name": "O1Names",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2814,
        "end": 2835,
        "typeName": {
          "type": "Identifier",
          "start": 2814,
          "end": 2831,
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2831,
          "end": 2835,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2832,
              "end": 2834,
              "typeName": {
                "type": "Identifier",
                "start": 2832,
                "end": 2834,
                "decorators": [],
                "name": "O1",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2853,
      "end": 2890,
      "id": {
        "type": "Identifier",
        "start": 2858,
        "end": 2865,
        "decorators": [],
        "name": "O0Names",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2868,
        "end": 2889,
        "typeName": {
          "type": "Identifier",
          "start": 2868,
          "end": 2885,
          "decorators": [],
          "name": "OptionalPropNames",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2885,
          "end": 2889,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2886,
              "end": 2888,
              "typeName": {
                "type": "Identifier",
                "start": 2886,
                "end": 2888,
                "decorators": [],
                "name": "O0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2908,
      "end": 2965,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2922,
          "end": 2964,
          "id": {
            "type": "Identifier",
            "start": 2922,
            "end": 2964,
            "decorators": [],
            "name": "o3NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2932,
              "end": 2964,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2934,
                "end": 2964,
                "typeName": {
                  "type": "Identifier",
                  "start": 2934,
                  "end": 2944,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2944,
                  "end": 2964,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 2945,
                      "end": 2954,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 2945,
                          "end": 2948,
                          "literal": {
                            "type": "Literal",
                            "start": 2945,
                            "end": 2948,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2951,
                          "end": 2954,
                          "literal": {
                            "type": "Literal",
                            "start": 2951,
                            "end": 2954,
                            "value": "b",
                            "raw": "\"b\""
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2956,
                      "end": 2963,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2956,
                        "end": 2963,
                        "decorators": [],
                        "name": "O3Names",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2966,
      "end": 3017,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2980,
          "end": 3016,
          "id": {
            "type": "Identifier",
            "start": 2980,
            "end": 3016,
            "decorators": [],
            "name": "o2NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2990,
              "end": 3016,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2992,
                "end": 3016,
                "typeName": {
                  "type": "Identifier",
                  "start": 2992,
                  "end": 3002,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3002,
                  "end": 3016,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 3003,
                      "end": 3006,
                      "literal": {
                        "type": "Literal",
                        "start": 3003,
                        "end": 3006,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3008,
                      "end": 3015,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3008,
                        "end": 3015,
                        "decorators": [],
                        "name": "O2Names",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3018,
      "end": 3071,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3032,
          "end": 3070,
          "id": {
            "type": "Identifier",
            "start": 3032,
            "end": 3070,
            "decorators": [],
            "name": "o1NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3042,
              "end": 3070,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3044,
                "end": 3070,
                "typeName": {
                  "type": "Identifier",
                  "start": 3044,
                  "end": 3054,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3054,
                  "end": 3070,
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 3055,
                      "end": 3060
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3062,
                      "end": 3069,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3062,
                        "end": 3069,
                        "decorators": [],
                        "name": "O1Names",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3072,
      "end": 3125,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3086,
          "end": 3124,
          "id": {
            "type": "Identifier",
            "start": 3086,
            "end": 3124,
            "decorators": [],
            "name": "o0NameTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3096,
              "end": 3124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3098,
                "end": 3124,
                "typeName": {
                  "type": "Identifier",
                  "start": 3098,
                  "end": 3108,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3108,
                  "end": 3124,
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 3109,
                      "end": 3114
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3116,
                      "end": 3123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3116,
                        "end": 3123,
                        "decorators": [],
                        "name": "O0Names",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3127,
      "end": 3160,
      "id": {
        "type": "Identifier",
        "start": 3132,
        "end": 3139,
        "decorators": [],
        "name": "O3Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3142,
        "end": 3159,
        "typeName": {
          "type": "Identifier",
          "start": 3142,
          "end": 3155,
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3155,
          "end": 3159,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3156,
              "end": 3158,
              "typeName": {
                "type": "Identifier",
                "start": 3156,
                "end": 3158,
                "decorators": [],
                "name": "O3",
                "optional": false,
                "typeAnnotation": null
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
      "start": 3222,
      "end": 3255,
      "id": {
        "type": "Identifier",
        "start": 3227,
        "end": 3234,
        "decorators": [],
        "name": "O2Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3237,
        "end": 3254,
        "typeName": {
          "type": "Identifier",
          "start": 3237,
          "end": 3250,
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3250,
          "end": 3254,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3251,
              "end": 3253,
              "typeName": {
                "type": "Identifier",
                "start": 3251,
                "end": 3253,
                "decorators": [],
                "name": "O2",
                "optional": false,
                "typeAnnotation": null
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
      "start": 3294,
      "end": 3327,
      "id": {
        "type": "Identifier",
        "start": 3299,
        "end": 3306,
        "decorators": [],
        "name": "O1Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3309,
        "end": 3326,
        "typeName": {
          "type": "Identifier",
          "start": 3309,
          "end": 3322,
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3322,
          "end": 3326,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3323,
              "end": 3325,
              "typeName": {
                "type": "Identifier",
                "start": 3323,
                "end": 3325,
                "decorators": [],
                "name": "O1",
                "optional": false,
                "typeAnnotation": null
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
      "start": 3341,
      "end": 3374,
      "id": {
        "type": "Identifier",
        "start": 3346,
        "end": 3353,
        "decorators": [],
        "name": "O0Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3356,
        "end": 3373,
        "typeName": {
          "type": "Identifier",
          "start": 3356,
          "end": 3369,
          "decorators": [],
          "name": "OptionalProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3369,
          "end": 3373,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3370,
              "end": 3372,
              "typeName": {
                "type": "Identifier",
                "start": 3370,
                "end": 3372,
                "decorators": [],
                "name": "O0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3389,
      "end": 3459,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3403,
          "end": 3458,
          "id": {
            "type": "Identifier",
            "start": 3403,
            "end": 3458,
            "decorators": [],
            "name": "o3Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3409,
              "end": 3458,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3411,
                "end": 3458,
                "typeName": {
                  "type": "Identifier",
                  "start": 3411,
                  "end": 3421,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3421,
                  "end": 3458,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3422,
                      "end": 3448,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3424,
                          "end": 3435,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3424,
                            "end": 3425,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3426,
                            "end": 3434,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3428,
                              "end": 3434
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3436,
                          "end": 3446,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3436,
                            "end": 3437,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3438,
                            "end": 3446,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3440,
                              "end": 3446
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3450,
                      "end": 3457,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3450,
                        "end": 3457,
                        "decorators": [],
                        "name": "O3Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3460,
      "end": 3518,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3474,
          "end": 3517,
          "id": {
            "type": "Identifier",
            "start": 3474,
            "end": 3517,
            "decorators": [],
            "name": "o2Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3480,
              "end": 3517,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3482,
                "end": 3517,
                "typeName": {
                  "type": "Identifier",
                  "start": 3482,
                  "end": 3492,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3492,
                  "end": 3517,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3493,
                      "end": 3507,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3495,
                          "end": 3505,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3495,
                            "end": 3496,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3497,
                            "end": 3505,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3499,
                              "end": 3505
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3509,
                      "end": 3516,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3509,
                        "end": 3516,
                        "decorators": [],
                        "name": "O2Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3519,
      "end": 3565,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3533,
          "end": 3564,
          "id": {
            "type": "Identifier",
            "start": 3533,
            "end": 3564,
            "decorators": [],
            "name": "o1Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3539,
              "end": 3564,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3541,
                "end": 3564,
                "typeName": {
                  "type": "Identifier",
                  "start": 3541,
                  "end": 3551,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3551,
                  "end": 3564,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3552,
                      "end": 3554,
                      "members": []
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3556,
                      "end": 3563,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3556,
                        "end": 3563,
                        "decorators": [],
                        "name": "O1Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3566,
      "end": 3612,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3580,
          "end": 3611,
          "id": {
            "type": "Identifier",
            "start": 3580,
            "end": 3611,
            "decorators": [],
            "name": "o0Test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3586,
              "end": 3611,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3588,
                "end": 3611,
                "typeName": {
                  "type": "Identifier",
                  "start": 3588,
                  "end": 3598,
                  "decorators": [],
                  "name": "ExpectType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3598,
                  "end": 3611,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3599,
                      "end": 3601,
                      "members": []
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3603,
                      "end": 3610,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3603,
                        "end": 3610,
                        "decorators": [],
                        "name": "O0Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3636,
      "end": 3689,
      "id": {
        "type": "Identifier",
        "start": 3641,
        "end": 3648,
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3648,
        "end": 3679,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3649,
            "end": 3678,
            "name": {
              "type": "Identifier",
              "start": 3649,
              "end": 3650,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3659,
              "end": 3678,
              "typeName": {
                "type": "Identifier",
                "start": 3659,
                "end": 3665,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3665,
                "end": 3678,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 3666,
                    "end": 3669,
                    "literal": {
                      "type": "Literal",
                      "start": 3666,
                      "end": 3669,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3671,
                    "end": 3677
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
        "type": "TSIndexedAccessType",
        "start": 3682,
        "end": 3688,
        "objectType": {
          "type": "TSTypeReference",
          "start": 3682,
          "end": 3683,
          "typeName": {
            "type": "Identifier",
            "start": 3682,
            "end": 3683,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 3684,
          "end": 3687,
          "literal": {
            "type": "Literal",
            "start": 3684,
            "end": 3687,
            "value": "a",
            "raw": "'a'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3691,
      "end": 3736,
      "id": {
        "type": "Identifier",
        "start": 3696,
        "end": 3700,
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3703,
        "end": 3735,
        "typeName": {
          "type": "Identifier",
          "start": 3703,
          "end": 3710,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3710,
          "end": 3735,
          "params": [
            {
              "type": "TSUnionType",
              "start": 3711,
              "end": 3734,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 3711,
                  "end": 3721,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3713,
                      "end": 3719,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3713,
                        "end": 3714,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3714,
                        "end": 3719,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 3716,
                          "end": 3719,
                          "literal": {
                            "type": "Literal",
                            "start": 3716,
                            "end": 3719,
                            "value": "x",
                            "raw": "\"x\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 3724,
                  "end": 3734,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3726,
                      "end": 3732,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3726,
                        "end": 3727,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3727,
                        "end": 3732,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 3729,
                          "end": 3732,
                          "literal": {
                            "type": "Literal",
                            "start": 3729,
                            "end": 3732,
                            "value": "y",
                            "raw": "\"y\""
                          }
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3751,
      "end": 3783,
      "id": {
        "type": "Identifier",
        "start": 3756,
        "end": 3760,
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3763,
        "end": 3782,
        "typeName": {
          "type": "Identifier",
          "start": 3763,
          "end": 3770,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3770,
          "end": 3782,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3771,
              "end": 3781,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3773,
                  "end": 3779,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3773,
                    "end": 3774,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3774,
                    "end": 3779,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3776,
                      "end": 3779,
                      "literal": {
                        "type": "Literal",
                        "start": 3776,
                        "end": 3779,
                        "value": "x",
                        "raw": "\"x\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 3792,
      "end": 3819,
      "id": {
        "type": "Identifier",
        "start": 3797,
        "end": 3801,
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3804,
        "end": 3818,
        "typeName": {
          "type": "Identifier",
          "start": 3804,
          "end": 3811,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3811,
          "end": 3818,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 3812,
              "end": 3817
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
