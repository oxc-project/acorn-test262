__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 731,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 29,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 29,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 26,
              "end": 29,
              "elementType": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 27,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 30,
        "end": 33,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 32,
          "end": 33,
          "typeName": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 59,
            "name": "neverArray",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 59,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 52,
                "end": 59,
                "elementType": {
                  "type": "TSNeverKeyword",
                  "start": 52,
                  "end": 57
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 62,
            "end": 64,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 73,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 76,
            "end": 82,
            "callee": {
              "type": "Identifier",
              "start": 76,
              "end": 78,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 79,
                "end": 81,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 100,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 103,
            "end": 117,
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 105,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 106,
                "end": 116,
                "name": "neverArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 152,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 167,
        "name": "Comparator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 167,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 169,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
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
        "type": "TSFunctionType",
        "start": 173,
        "end": 195,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 174,
            "end": 178,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 180,
            "end": 184,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 183,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 186,
          "end": 195,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 189,
            "end": 195
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 198,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 218,
        "name": "LinkedList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 218,
        "end": 221,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 220,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 222,
        "end": 275,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 228,
            "end": 254,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 238,
              "name": "comparator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 253,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 253,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 250,
                  "name": "Comparator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 250,
                  "end": 253,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 251,
                      "end": 252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 252,
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
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 259,
            "end": 273,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 264,
              "name": "nodes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 266,
                "end": 273,
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "name": "Node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 270,
                  "end": 273,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 271,
                      "end": 272,
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
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
      "start": 277,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 286,
        "name": "Node",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 286,
        "end": 289,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 287,
            "end": 288,
            "name": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
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
        "type": "TSUnionType",
        "start": 292,
        "end": 326,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 292,
            "end": 319,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 294,
                "end": 303,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 299,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 299,
                  "end": 302,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 301,
                    "end": 302,
                    "typeName": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 302,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 304,
                "end": 317,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 308,
                  "name": "next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 308,
                  "end": 317,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 310,
                    "end": 317,
                    "typeName": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 314,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 314,
                      "end": 317,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 315,
                          "end": 316,
                          "typeName": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 316,
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
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSNullKeyword",
            "start": 322,
            "end": 326
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 328,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 359,
        "name": "compareNumbers",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 360,
          "end": 369,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 361,
            "end": 369,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 363,
              "end": 369
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 371,
          "end": 380,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 380,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 374,
              "end": 380
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 381,
        "end": 389,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 383,
          "end": 389
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 391,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 414,
        "name": "mkList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 418,
          "end": 428,
          "name": "items",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 423,
            "end": 428,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 425,
              "end": 428,
              "elementType": {
                "type": "TSTypeReference",
                "start": 425,
                "end": 426,
                "typeName": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 426,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 430,
          "end": 455,
          "name": "comparator",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 440,
            "end": 455,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 442,
              "end": 455,
              "typeName": {
                "type": "Identifier",
                "start": 442,
                "end": 452,
                "name": "Comparator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 452,
                "end": 455,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 453,
                    "end": 454,
                    "typeName": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 414,
        "end": 417,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 415,
            "end": 416,
            "name": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 456,
        "end": 471,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 458,
          "end": 471,
          "typeName": {
            "type": "Identifier",
            "start": 458,
            "end": 468,
            "name": "LinkedList",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 468,
            "end": 471,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 469,
                "end": 470,
                "typeName": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 470,
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 474,
      "end": 534,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 533,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 504,
            "name": "list",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 484,
              "end": 504,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 486,
                "end": 504,
                "typeName": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 496,
                  "name": "LinkedList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 496,
                  "end": 504,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 497,
                      "end": 503
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 507,
            "end": 533,
            "callee": {
              "type": "Identifier",
              "start": 507,
              "end": 513,
              "name": "mkList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 514,
                "end": 516,
                "elements": []
              },
              {
                "type": "Identifier",
                "start": 518,
                "end": 532,
                "name": "compareNumbers",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 558,
      "end": 638,
      "id": {
        "type": "Identifier",
        "start": 575,
        "end": 577,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 581,
          "end": 589,
          "name": "as1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 584,
            "end": 589,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 586,
              "end": 589,
              "elementType": {
                "type": "TSTypeReference",
                "start": 586,
                "end": 587,
                "typeName": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 587,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 591,
          "end": 599,
          "name": "as2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 594,
            "end": 599,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 596,
              "end": 599,
              "elementType": {
                "type": "TSTypeReference",
                "start": 596,
                "end": 597,
                "typeName": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 597,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 601,
          "end": 630,
          "name": "cmp",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 604,
            "end": 630,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 606,
              "end": 630,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 607,
                  "end": 612,
                  "name": "a1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 609,
                    "end": 612,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 611,
                      "end": 612,
                      "typeName": {
                        "type": "Identifier",
                        "start": 611,
                        "end": 612,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 614,
                  "end": 619,
                  "name": "a2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 616,
                    "end": 619,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 618,
                      "end": 619,
                      "typeName": {
                        "type": "Identifier",
                        "start": 618,
                        "end": 619,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 621,
                "end": 630,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 624,
                  "end": 630
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 577,
        "end": 580,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 578,
            "end": 579,
            "name": {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "name": "a",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 631,
        "end": 637,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 633,
          "end": 637
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 639,
      "end": 684,
      "expression": {
        "type": "CallExpression",
        "start": 639,
        "end": 683,
        "callee": {
          "type": "Identifier",
          "start": 639,
          "end": 641,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 642,
            "end": 657,
            "callee": {
              "type": "MemberExpression",
              "start": 642,
              "end": 652,
              "object": {
                "type": "Identifier",
                "start": 642,
                "end": 647,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 648,
                "end": 652,
                "name": "from",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 653,
                "end": 656,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 654,
                    "end": 655,
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "ArrayExpression",
            "start": 659,
            "end": 661,
            "elements": []
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 663,
            "end": 682,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 664,
                "end": 666,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 668,
                "end": 670,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 675,
              "end": 682,
              "left": {
                "type": "Identifier",
                "start": 675,
                "end": 677,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "-",
              "right": {
                "type": "Identifier",
                "start": 680,
                "end": 682,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 685,
      "end": 730,
      "expression": {
        "type": "CallExpression",
        "start": 685,
        "end": 729,
        "callee": {
          "type": "Identifier",
          "start": 685,
          "end": 687,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 688,
            "end": 702,
            "callee": {
              "type": "MemberExpression",
              "start": 688,
              "end": 698,
              "object": {
                "type": "Identifier",
                "start": 688,
                "end": 693,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 694,
                "end": 698,
                "name": "from",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 699,
                "end": 701,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "ArrayExpression",
            "start": 704,
            "end": 707,
            "elements": [
              {
                "type": "Literal",
                "start": 705,
                "end": 706,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 709,
            "end": 728,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 710,
                "end": 712,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 714,
                "end": 716,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 721,
              "end": 728,
              "left": {
                "type": "Identifier",
                "start": 721,
                "end": 723,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "-",
              "right": {
                "type": "Identifier",
                "start": 726,
                "end": 728,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
