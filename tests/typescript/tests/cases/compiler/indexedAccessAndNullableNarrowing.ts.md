__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1227,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 41,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 28,
                "end": 41,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 29,
                    "end": 35
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 37,
                    "end": 40
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
            "start": 43,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 53,
              "end": 60,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
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
          "start": 62,
          "end": 81,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 81,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 65,
              "end": 81,
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 65,
                  "end": 69,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 66,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 67,
                    "end": 68,
                    "typeName": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 72,
                  "end": 81
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 212,
        "body": [
          {
            "type": "IfStatement",
            "start": 89,
            "end": 117,
            "test": {
              "type": "BinaryExpression",
              "start": 93,
              "end": 108,
              "left": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 99,
                "end": 108,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 110,
              "end": 117,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 124,
            "expression": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 152,
            "end": 180,
            "test": {
              "type": "BinaryExpression",
              "start": 156,
              "end": 171,
              "left": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 162,
                "end": 171,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 173,
              "end": 180,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 187,
            "expression": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 225,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 225,
        "end": 275,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 226,
            "end": 255,
            "name": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 255,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 242,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 242,
                "end": 255,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 251,
                    "end": 254
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
            "start": 257,
            "end": 274,
            "name": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 267,
              "end": 274,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 274,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
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
          "start": 276,
          "end": 290,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 277,
            "end": 290,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 279,
              "end": 290,
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 279,
                  "end": 283,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 279,
                    "end": 280,
                    "typeName": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 280,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 281,
                    "end": 282,
                    "typeName": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 286,
                  "end": 290
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 292,
        "end": 421,
        "body": [
          {
            "type": "IfStatement",
            "start": 298,
            "end": 321,
            "test": {
              "type": "BinaryExpression",
              "start": 302,
              "end": 312,
              "left": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 308,
                "end": 312,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 314,
              "end": 321,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 326,
            "end": 328,
            "expression": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 361,
            "end": 384,
            "test": {
              "type": "BinaryExpression",
              "start": 365,
              "end": 375,
              "left": {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 371,
                "end": 375,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 377,
              "end": 384,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 389,
            "end": 391,
            "expression": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 423,
      "end": 550,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 434,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 434,
        "end": 456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 435,
            "end": 436,
            "name": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 438,
            "end": 455,
            "name": {
              "type": "Identifier",
              "start": 438,
              "end": 439,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 448,
              "end": 455,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 454,
                "end": 455,
                "typeName": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 455,
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
          "start": 457,
          "end": 464,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 458,
            "end": 464,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 460,
              "end": 464,
              "objectType": {
                "type": "TSTypeReference",
                "start": 460,
                "end": 461,
                "typeName": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 461,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 462,
                "end": 463,
                "typeName": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 466,
          "end": 488,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 468,
            "end": 488,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 470,
              "end": 488,
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 470,
                  "end": 483,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 470,
                    "end": 480,
                    "typeName": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 477,
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 477,
                      "end": 480,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 478,
                          "end": 479,
                          "typeName": {
                            "type": "Identifier",
                            "start": 478,
                            "end": 479,
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
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 481,
                    "end": 482,
                    "typeName": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 482,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 486,
                  "end": 488,
                  "members": []
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 490,
          "end": 521,
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 492,
            "end": 521,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 494,
              "end": 521,
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 494,
                  "end": 507,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 494,
                    "end": 504,
                    "typeName": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 501,
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 501,
                      "end": 504,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 502,
                          "end": 503,
                          "typeName": {
                            "type": "Identifier",
                            "start": 502,
                            "end": 503,
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
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 505,
                    "end": 506,
                    "typeName": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 506,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 511,
                  "end": 520,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 511,
                      "end": 513,
                      "members": []
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 516,
                      "end": 520
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 523,
        "end": 550,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 529,
            "end": 536,
            "expression": {
              "type": "AssignmentExpression",
              "start": 529,
              "end": 535,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 533,
                "end": 535,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 541,
            "end": 548,
            "expression": {
              "type": "AssignmentExpression",
              "start": 541,
              "end": 547,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 545,
                "end": 547,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 609,
      "end": 646,
      "id": {
        "type": "Identifier",
        "start": 614,
        "end": 623,
        "decorators": [],
        "name": "AnyObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 626,
        "end": 645,
        "typeName": {
          "type": "Identifier",
          "start": 626,
          "end": 632,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 632,
          "end": 645,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 633,
              "end": 639
            },
            {
              "type": "TSAnyKeyword",
              "start": 641,
              "end": 644
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 647,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 652,
        "end": 657,
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 660,
        "end": 669,
        "typeName": {
          "type": "Identifier",
          "start": 660,
          "end": 669,
          "decorators": [],
          "name": "AnyObject",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 672,
      "end": 783,
      "id": {
        "type": "Identifier",
        "start": 689,
        "end": 703,
        "decorators": [],
        "name": "hasOwnProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 703,
        "end": 724,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 704,
            "end": 723,
            "name": {
              "type": "Identifier",
              "start": 704,
              "end": 705,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 714,
              "end": 723,
              "typeName": {
                "type": "Identifier",
                "start": 714,
                "end": 723,
                "decorators": [],
                "name": "AnyObject",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "start": 730,
          "end": 739,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 736,
            "end": 739,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 738,
              "end": 739,
              "typeName": {
                "type": "Identifier",
                "start": 738,
                "end": 739,
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
          "start": 745,
          "end": 762,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 749,
            "end": 762,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 751,
              "end": 762,
              "typeName": {
                "type": "Identifier",
                "start": 751,
                "end": 762,
                "decorators": [],
                "name": "PropertyKey",
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
        "start": 765,
        "end": 782,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 767,
          "end": 782,
          "parameterName": {
            "type": "Identifier",
            "start": 767,
            "end": 771,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 775,
            "end": 782,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 775,
              "end": 782,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 781,
                "end": 782,
                "typeName": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 782,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 785,
      "end": 875,
      "id": {
        "type": "Identifier",
        "start": 795,
        "end": 800,
        "decorators": [],
        "name": "Store",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 800,
        "end": 811,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 801,
            "end": 810,
            "name": {
              "type": "Identifier",
              "start": 801,
              "end": 802,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 805,
              "end": 810,
              "typeName": {
                "type": "Identifier",
                "start": 805,
                "end": 810,
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 812,
        "end": 875,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 818,
            "end": 873,
            "key": {
              "type": "Identifier",
              "start": 818,
              "end": 826,
              "decorators": [],
              "name": "setState",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 826,
              "end": 845,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 827,
                  "end": 844,
                  "name": {
                    "type": "Identifier",
                    "start": 827,
                    "end": 828,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 837,
                    "end": 844,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 843,
                      "end": 844,
                      "typeName": {
                        "type": "Identifier",
                        "start": 843,
                        "end": 844,
                        "decorators": [],
                        "name": "S",
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
                "start": 846,
                "end": 852,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 849,
                  "end": 852,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 851,
                    "end": 852,
                    "typeName": {
                      "type": "Identifier",
                      "start": 851,
                      "end": 852,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 854,
                "end": 865,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 859,
                  "end": 865,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 861,
                    "end": 865,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 861,
                      "end": 862,
                      "typeName": {
                        "type": "Identifier",
                        "start": 861,
                        "end": 862,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 863,
                      "end": 864,
                      "typeName": {
                        "type": "Identifier",
                        "start": 863,
                        "end": 864,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 866,
              "end": 872,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 868,
                "end": 872
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 877,
      "end": 1227,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 884,
        "end": 1227,
        "id": {
          "type": "Identifier",
          "start": 893,
          "end": 906,
          "decorators": [],
          "name": "syncStoreProp",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 906,
          "end": 979,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 912,
              "end": 927,
              "name": {
                "type": "Identifier",
                "start": 912,
                "end": 913,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 922,
                "end": 927,
                "typeName": {
                  "type": "Identifier",
                  "start": 922,
                  "end": 927,
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 933,
              "end": 953,
              "name": {
                "type": "Identifier",
                "start": 933,
                "end": 934,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 943,
                "end": 953,
                "typeName": {
                  "type": "Identifier",
                  "start": 943,
                  "end": 950,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 950,
                  "end": 953,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 951,
                      "end": 952,
                      "typeName": {
                        "type": "Identifier",
                        "start": 951,
                        "end": 952,
                        "decorators": [],
                        "name": "S",
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
              "start": 959,
              "end": 976,
              "name": {
                "type": "Identifier",
                "start": 959,
                "end": 960,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 969,
                "end": 976,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 975,
                  "end": 976,
                  "typeName": {
                    "type": "Identifier",
                    "start": 975,
                    "end": 976,
                    "decorators": [],
                    "name": "S",
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
            "start": 980,
            "end": 995,
            "decorators": [],
            "name": "store",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 985,
              "end": 995,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 987,
                "end": 995,
                "typeName": {
                  "type": "Identifier",
                  "start": 987,
                  "end": 992,
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 992,
                  "end": 995,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 993,
                      "end": 994,
                      "typeName": {
                        "type": "Identifier",
                        "start": 993,
                        "end": 994,
                        "decorators": [],
                        "name": "S",
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
          {
            "type": "Identifier",
            "start": 997,
            "end": 1005,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1005,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1004,
                "end": 1005,
                "typeName": {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1005,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 1007,
            "end": 1013,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1010,
              "end": 1013,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1012,
                "end": 1013,
                "typeName": {
                  "type": "Identifier",
                  "start": 1012,
                  "end": 1013,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 1015,
          "end": 1227,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 1021,
              "end": 1087,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1027,
                  "end": 1086,
                  "id": {
                    "type": "Identifier",
                    "start": 1027,
                    "end": 1032,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 1035,
                    "end": 1086,
                    "test": {
                      "type": "CallExpression",
                      "start": 1035,
                      "end": 1061,
                      "callee": {
                        "type": "Identifier",
                        "start": 1035,
                        "end": 1049,
                        "decorators": [],
                        "name": "hasOwnProperty",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1050,
                          "end": 1055,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 1057,
                          "end": 1060,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "MemberExpression",
                      "start": 1064,
                      "end": 1074,
                      "object": {
                        "type": "Identifier",
                        "start": 1064,
                        "end": 1069,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1070,
                        "end": 1073,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    },
                    "alternate": {
                      "type": "Identifier",
                      "start": 1077,
                      "end": 1086,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 1092,
              "end": 1124,
              "test": {
                "type": "BinaryExpression",
                "start": 1096,
                "end": 1115,
                "left": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1101,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 1106,
                  "end": 1115,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "start": 1117,
                "end": 1124,
                "argument": null
              },
              "alternate": null
            },
            {
              "type": "ExpressionStatement",
              "start": 1129,
              "end": 1156,
              "expression": {
                "type": "CallExpression",
                "start": 1129,
                "end": 1155,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1129,
                  "end": 1143,
                  "object": {
                    "type": "Identifier",
                    "start": 1129,
                    "end": 1134,
                    "decorators": [],
                    "name": "store",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1135,
                    "end": 1143,
                    "decorators": [],
                    "name": "setState",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1144,
                    "end": 1147,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1149,
                    "end": 1154,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "IfStatement",
              "start": 1161,
              "end": 1193,
              "test": {
                "type": "BinaryExpression",
                "start": 1165,
                "end": 1184,
                "left": {
                  "type": "Identifier",
                  "start": 1165,
                  "end": 1170,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 1175,
                  "end": 1184,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "start": 1186,
                "end": 1193,
                "argument": null
              },
              "alternate": null
            },
            {
              "type": "ExpressionStatement",
              "start": 1198,
              "end": 1225,
              "expression": {
                "type": "CallExpression",
                "start": 1198,
                "end": 1224,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1198,
                  "end": 1212,
                  "object": {
                    "type": "Identifier",
                    "start": 1198,
                    "end": 1203,
                    "decorators": [],
                    "name": "store",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1204,
                    "end": 1212,
                    "decorators": [],
                    "name": "setState",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1216,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1218,
                    "end": 1223,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
