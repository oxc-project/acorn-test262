__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 1571,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 76,
        "end": 93,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 90,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 83,
                "end": 90
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
      "start": 96,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 105,
        "end": 121,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 119,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 112,
                "end": 118
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
      "start": 124,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 133,
        "end": 149,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 147,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 146,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
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
      "start": 152,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 167,
        "name": "Animations",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 170,
        "end": 358,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 174,
            "end": 356,
            "parameters": [
              {
                "type": "Identifier",
                "start": 175,
                "end": 186,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 178,
                  "end": 186,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 180,
                    "end": 186
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 355,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 189,
                "end": 355,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 189,
                    "end": 206,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 191,
                        "end": 204,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 196,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 196,
                          "end": 204,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 198,
                            "end": 204
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUnionType",
                    "start": 215,
                    "end": 351,
                    "types": [
                      {
                        "type": "TSIntersectionType",
                        "start": 218,
                        "end": 256,
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 218,
                            "end": 252,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 220,
                                "end": 230,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 220,
                                  "end": 224,
                                  "name": "kind",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 224,
                                  "end": 229,
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "start": 226,
                                    "end": 229,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 226,
                                      "end": 229,
                                      "value": "a",
                                      "raw": "\"a\""
                                    }
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSMethodSignature",
                                "start": 231,
                                "end": 250,
                                "key": {
                                  "type": "Identifier",
                                  "start": 231,
                                  "end": 235,
                                  "name": "func",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": true,
                                "kind": "method",
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 238,
                                  "end": 250,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 240,
                                    "end": 250,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 240,
                                      "end": 247,
                                      "name": "Partial",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 247,
                                      "end": 250,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 248,
                                          "end": 249,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 248,
                                            "end": 249,
                                            "name": "A",
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
                                "readonly": false,
                                "static": false
                              }
                            ]
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 255,
                            "end": 256,
                            "typeName": {
                              "type": "Identifier",
                              "start": 255,
                              "end": 256,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 265,
                        "end": 303,
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 265,
                            "end": 299,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 267,
                                "end": 277,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 267,
                                  "end": 271,
                                  "name": "kind",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 271,
                                  "end": 276,
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "start": 273,
                                    "end": 276,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 273,
                                      "end": 276,
                                      "value": "b",
                                      "raw": "\"b\""
                                    }
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSMethodSignature",
                                "start": 278,
                                "end": 297,
                                "key": {
                                  "type": "Identifier",
                                  "start": 278,
                                  "end": 282,
                                  "name": "func",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": true,
                                "kind": "method",
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 285,
                                  "end": 297,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 287,
                                    "end": 297,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 287,
                                      "end": 294,
                                      "name": "Partial",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 294,
                                      "end": 297,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 295,
                                          "end": 296,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 295,
                                            "end": 296,
                                            "name": "B",
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
                                "readonly": false,
                                "static": false
                              }
                            ]
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 302,
                            "end": 303,
                            "typeName": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 303,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 312,
                        "end": 350,
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 312,
                            "end": 346,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 314,
                                "end": 324,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 314,
                                  "end": 318,
                                  "name": "kind",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 318,
                                  "end": 323,
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "start": 320,
                                    "end": 323,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 320,
                                      "end": 323,
                                      "value": "c",
                                      "raw": "\"c\""
                                    }
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSMethodSignature",
                                "start": 325,
                                "end": 344,
                                "key": {
                                  "type": "Identifier",
                                  "start": 325,
                                  "end": 329,
                                  "name": "func",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": true,
                                "kind": "method",
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 332,
                                  "end": 344,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 334,
                                    "end": 344,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 334,
                                      "end": 341,
                                      "name": "Partial",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 341,
                                      "end": 344,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 342,
                                          "end": 343,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 342,
                                            "end": 343,
                                            "name": "C",
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
                                "readonly": false,
                                "static": false
                              }
                            ]
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 349,
                            "end": 350,
                            "typeName": {
                              "type": "Identifier",
                              "start": 349,
                              "end": 350,
                              "name": "C",
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
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 361,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 376,
        "name": "StyleParam",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 376,
        "end": 398,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 377,
            "end": 397,
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 397,
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 397,
                "name": "Animations",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 401,
        "end": 424,
        "typeName": {
          "type": "Identifier",
          "start": 401,
          "end": 407,
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 407,
          "end": 424,
          "params": [
            {
              "type": "TSTypeOperator",
              "start": 408,
              "end": 415,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 414,
                "end": 415,
                "typeName": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 415,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 417,
              "end": 423
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 427,
      "end": 549,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 449,
        "name": "AnimatedViewProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 449,
        "end": 471,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 450,
            "end": 470,
            "name": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 460,
              "end": 470,
              "typeName": {
                "type": "Identifier",
                "start": 460,
                "end": 470,
                "name": "Animations",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 474,
        "end": 548,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 478,
            "end": 529,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 478,
              "end": 483,
              "name": "style",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 528,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 485,
                "end": 528,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 486,
                    "end": 517,
                    "name": "animationsValues",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 502,
                      "end": 517,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 504,
                        "end": 517,
                        "typeName": {
                          "type": "Identifier",
                          "start": 504,
                          "end": 514,
                          "name": "StyleParam",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 514,
                          "end": 517,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 515,
                              "end": 516,
                              "typeName": {
                                "type": "Identifier",
                                "start": 515,
                                "end": 516,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 519,
                  "end": 528,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 522,
                    "end": 528
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 532,
            "end": 546,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 532,
              "end": 542,
              "name": "animations",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 542,
              "end": 545,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 544,
                "end": 545,
                "typeName": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 545,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 551,
      "end": 651,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 650,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 566,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 569,
            "end": 650,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 592,
                "end": 640,
                "properties": [
                  {
                    "type": "Property",
                    "start": 596,
                    "end": 606,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 606,
                      "name": "animations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 606,
                      "name": "animations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 610,
                    "end": 615,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 610,
                      "end": 615,
                      "name": "style",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 610,
                      "end": 615,
                      "name": "style",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 618,
                  "end": 640,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 620,
                    "end": 640,
                    "typeName": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 637,
                      "name": "AnimatedViewProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 637,
                      "end": 640,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 638,
                          "end": 639,
                          "typeName": {
                            "type": "Identifier",
                            "start": 638,
                            "end": 639,
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
              }
            ],
            "body": {
              "type": "JSXFragment",
              "start": 645,
              "end": 650,
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 645,
                "end": 647
              },
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 647,
                "end": 650
              },
              "children": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 569,
              "end": 591,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 570,
                  "end": 590,
                  "name": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 571,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 580,
                    "end": 590,
                    "typeName": {
                      "type": "Identifier",
                      "start": 580,
                      "end": 590,
                      "name": "Animations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 653,
      "end": 796,
      "expression": {
        "type": "JSXElement",
        "start": 653,
        "end": 795,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 653,
          "end": 795,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 666,
              "end": 751,
              "name": {
                "type": "JSXIdentifier",
                "start": 666,
                "end": 676,
                "name": "animations"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 677,
                "end": 751,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 678,
                  "end": 750,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 684,
                      "end": 745,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 684,
                        "end": 688,
                        "name": "test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 690,
                        "end": 745,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 698,
                            "end": 707,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 698,
                              "end": 702,
                              "name": "kind",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 704,
                              "end": 707,
                              "value": "a",
                              "raw": "\"a\""
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 715,
                            "end": 723,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 715,
                              "end": 720,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 722,
                              "end": 723,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 731,
                            "end": 738,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 731,
                              "end": 732,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 734,
                              "end": 738,
                              "value": true,
                              "raw": "true"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            },
            {
              "type": "JSXAttribute",
              "start": 754,
              "end": 792,
              "name": {
                "type": "JSXIdentifier",
                "start": 754,
                "end": 759,
                "name": "style"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 760,
                "end": 792,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 761,
                  "end": 791,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 762,
                      "end": 766,
                      "name": "anim",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 771,
                    "end": 791,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 777,
                        "end": 787,
                        "argument": {
                          "type": "Literal",
                          "start": 784,
                          "end": 786,
                          "value": "",
                          "raw": "\"\""
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 654,
            "end": 663,
            "name": "Component"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 1011,
      "expression": {
        "type": "JSXElement",
        "start": 797,
        "end": 1010,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 797,
          "end": 1010,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 810,
              "end": 966,
              "name": {
                "type": "JSXIdentifier",
                "start": 810,
                "end": 820,
                "name": "animations"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 821,
                "end": 966,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 822,
                  "end": 965,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 828,
                      "end": 960,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 828,
                        "end": 832,
                        "name": "test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 834,
                        "end": 960,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 842,
                            "end": 851,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 842,
                              "end": 846,
                              "name": "kind",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 848,
                              "end": 851,
                              "value": "a",
                              "raw": "\"a\""
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 859,
                            "end": 867,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 859,
                              "end": 864,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 866,
                              "end": 867,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 875,
                            "end": 882,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 875,
                              "end": 876,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 878,
                              "end": 882,
                              "value": true,
                              "raw": "true"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 890,
                            "end": 953,
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 890,
                              "end": 894,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 894,
                              "end": 953,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 897,
                                "end": 953,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 907,
                                    "end": 945,
                                    "argument": {
                                      "type": "ObjectExpression",
                                      "start": 914,
                                      "end": 944,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 926,
                                          "end": 933,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 926,
                                            "end": 927,
                                            "name": "a",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 929,
                                            "end": 933,
                                            "value": true,
                                            "raw": "true"
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            },
            {
              "type": "JSXAttribute",
              "start": 969,
              "end": 1007,
              "name": {
                "type": "JSXIdentifier",
                "start": 969,
                "end": 974,
                "name": "style"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 975,
                "end": 1007,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 976,
                  "end": 1006,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 977,
                      "end": 981,
                      "name": "anim",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 986,
                    "end": 1006,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 992,
                        "end": 1002,
                        "argument": {
                          "type": "Literal",
                          "start": 999,
                          "end": 1001,
                          "value": "",
                          "raw": "\"\""
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 798,
            "end": 807,
            "name": "Component"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1012,
      "end": 1231,
      "expression": {
        "type": "JSXElement",
        "start": 1012,
        "end": 1230,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1012,
          "end": 1230,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1025,
              "end": 1186,
              "name": {
                "type": "JSXIdentifier",
                "start": 1025,
                "end": 1035,
                "name": "animations"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 1036,
                "end": 1186,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1037,
                  "end": 1185,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1043,
                      "end": 1180,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1043,
                        "end": 1047,
                        "name": "test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1049,
                        "end": 1180,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1057,
                            "end": 1066,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1057,
                              "end": 1061,
                              "name": "kind",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1063,
                              "end": 1066,
                              "value": "a",
                              "raw": "\"a\""
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1074,
                            "end": 1082,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1074,
                              "end": 1079,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1081,
                              "end": 1082,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1090,
                            "end": 1097,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1090,
                              "end": 1091,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1093,
                              "end": 1097,
                              "value": true,
                              "raw": "true"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1105,
                            "end": 1173,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1105,
                              "end": 1109,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 1111,
                              "end": 1173,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 1117,
                                "end": 1173,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1127,
                                    "end": 1165,
                                    "argument": {
                                      "type": "ObjectExpression",
                                      "start": 1134,
                                      "end": 1164,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 1146,
                                          "end": 1153,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1146,
                                            "end": 1147,
                                            "name": "a",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 1149,
                                            "end": 1153,
                                            "value": true,
                                            "raw": "true"
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            },
            {
              "type": "JSXAttribute",
              "start": 1189,
              "end": 1227,
              "name": {
                "type": "JSXIdentifier",
                "start": 1189,
                "end": 1194,
                "name": "style"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 1195,
                "end": 1227,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 1196,
                  "end": 1226,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1197,
                      "end": 1201,
                      "name": "anim",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1206,
                    "end": 1226,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1212,
                        "end": 1222,
                        "argument": {
                          "type": "Literal",
                          "start": 1219,
                          "end": 1221,
                          "value": "",
                          "raw": "\"\""
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1013,
            "end": 1022,
            "name": "Component"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1255,
      "end": 1323,
      "id": {
        "type": "Identifier",
        "start": 1265,
        "end": 1270,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1270,
        "end": 1273,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1271,
            "end": 1272,
            "name": {
              "type": "Identifier",
              "start": 1271,
              "end": 1272,
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
        "start": 1274,
        "end": 1323,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1278,
            "end": 1298,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1278,
              "end": 1279,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1279,
              "end": 1297,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1281,
                "end": 1297,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1282,
                    "end": 1291,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1283,
                      "end": 1291,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1285,
                        "end": 1291
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1293,
                  "end": 1297,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1296,
                    "end": 1297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1296,
                      "end": 1297,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1301,
            "end": 1321,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1301,
              "end": 1302,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1302,
              "end": 1320,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1304,
                "end": 1320,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1305,
                    "end": 1311,
                    "name": "arg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1308,
                      "end": 1311,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1310,
                        "end": 1311,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1311,
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
                  "start": 1313,
                  "end": 1320,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1316,
                    "end": 1320
                  }
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
      "type": "FunctionDeclaration",
      "start": 1325,
      "end": 1379,
      "id": {
        "type": "Identifier",
        "start": 1334,
        "end": 1337,
        "name": "Foo",
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
          "start": 1341,
          "end": 1356,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1346,
            "end": 1356,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1348,
              "end": 1356,
              "typeName": {
                "type": "Identifier",
                "start": 1348,
                "end": 1353,
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1353,
                "end": 1356,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1354,
                    "end": 1355,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1354,
                      "end": 1355,
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
      "body": {
        "type": "BlockStatement",
        "start": 1358,
        "end": 1379,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1362,
            "end": 1377,
            "argument": {
              "type": "JSXElement",
              "start": 1369,
              "end": 1376,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 1369,
                "end": 1376,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 1370,
                  "end": 1373,
                  "name": "div"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1337,
        "end": 1340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1338,
            "end": 1339,
            "name": {
              "type": "Identifier",
              "start": 1338,
              "end": 1339,
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
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1381,
      "end": 1439,
      "expression": {
        "type": "JSXElement",
        "start": 1381,
        "end": 1438,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1381,
          "end": 1438,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1388,
              "end": 1400,
              "name": {
                "type": "JSXIdentifier",
                "start": 1388,
                "end": 1389,
                "name": "a"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 1390,
                "end": 1400,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 1391,
                  "end": 1399,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 1397,
                    "end": 1399,
                    "value": 10,
                    "raw": "10"
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            },
            {
              "type": "JSXAttribute",
              "start": 1403,
              "end": 1435,
              "name": {
                "type": "JSXIdentifier",
                "start": 1403,
                "end": 1404,
                "name": "b"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 1405,
                "end": 1435,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 1406,
                  "end": 1434,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1407,
                      "end": 1410,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1415,
                    "end": 1434,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1417,
                        "end": 1432,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1417,
                          "end": 1431,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1417,
                            "end": 1429,
                            "object": {
                              "type": "Identifier",
                              "start": 1417,
                              "end": 1420,
                              "name": "arg",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1421,
                              "end": 1429,
                              "name": "toString",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1382,
            "end": 1385,
            "name": "Foo"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1441,
      "end": 1500,
      "expression": {
        "type": "JSXElement",
        "start": 1441,
        "end": 1499,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1441,
          "end": 1499,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1448,
              "end": 1461,
              "name": {
                "type": "JSXIdentifier",
                "start": 1448,
                "end": 1449,
                "name": "a"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 1450,
                "end": 1461,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 1451,
                  "end": 1460,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1452,
                      "end": 1453,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 1458,
                    "end": 1460,
                    "value": 10,
                    "raw": "10"
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            },
            {
              "type": "JSXAttribute",
              "start": 1464,
              "end": 1496,
              "name": {
                "type": "JSXIdentifier",
                "start": 1464,
                "end": 1465,
                "name": "b"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 1466,
                "end": 1496,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 1467,
                  "end": 1495,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1468,
                      "end": 1471,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1476,
                    "end": 1495,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1478,
                        "end": 1493,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1478,
                          "end": 1492,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1478,
                            "end": 1490,
                            "object": {
                              "type": "Identifier",
                              "start": 1478,
                              "end": 1481,
                              "name": "arg",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1482,
                              "end": 1490,
                              "name": "toString",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1442,
            "end": 1445,
            "name": "Foo"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1502,
      "end": 1570,
      "expression": {
        "type": "JSXElement",
        "start": 1502,
        "end": 1569,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1502,
          "end": 1569,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 1507,
              "end": 1566,
              "argument": {
                "type": "ObjectExpression",
                "start": 1511,
                "end": 1565,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1515,
                    "end": 1527,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1515,
                      "end": 1516,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1518,
                      "end": 1527,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1519,
                          "end": 1520,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 1525,
                        "end": 1527,
                        "value": 10,
                        "raw": "10"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1531,
                    "end": 1562,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1531,
                      "end": 1532,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1534,
                      "end": 1562,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1535,
                          "end": 1538,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1543,
                        "end": 1562,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1545,
                            "end": 1560,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1545,
                              "end": 1559,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1545,
                                "end": 1557,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1545,
                                  "end": 1548,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1549,
                                  "end": 1557,
                                  "name": "toString",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1503,
            "end": 1506,
            "name": "Foo"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
