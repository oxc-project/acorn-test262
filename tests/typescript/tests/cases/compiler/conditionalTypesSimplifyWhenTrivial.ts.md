__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1669,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 98,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 97,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 12,
              "end": 20,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 13,
                  "end": 19,
                  "name": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 19,
                    "decorators": [],
                    "name": "Params",
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
                "start": 26,
                "end": 76,
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 34,
                    "end": 76,
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 38,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 38,
                      "end": 76,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 39,
                          "end": 45,
                          "typeName": {
                            "type": "Identifier",
                            "start": 39,
                            "end": 45,
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 47,
                          "end": 75,
                          "typeName": {
                            "type": "Identifier",
                            "start": 47,
                            "end": 54,
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 54,
                            "end": 75,
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "start": 55,
                                "end": 67,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 61,
                                  "end": 67,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 61,
                                    "end": 67,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 69,
                                "end": 74
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 87,
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
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
          "start": 116,
          "end": 136,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 126,
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 126,
                "end": 136,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 127,
                    "end": 128,
                    "typeName": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 130,
                    "end": 135
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 170,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 144,
            "end": 157,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 156,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 152,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 151,
                      "end": 152,
                      "typeName": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 162,
            "end": 168,
            "expression": {
              "type": "AssignmentExpression",
              "start": 162,
              "end": 167,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "y",
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
      "type": "VariableDeclaration",
      "start": 172,
      "end": 277,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 181,
            "decorators": [],
            "name": "fn3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 184,
            "end": 276,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 184,
              "end": 192,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 185,
                  "end": 191,
                  "name": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 191,
                    "decorators": [],
                    "name": "Params",
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
                "start": 198,
                "end": 255,
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 204,
                  "end": 255,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 255,
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 210,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 210,
                      "end": 255,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 211,
                          "end": 217,
                          "typeName": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 217,
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 219,
                          "end": 254,
                          "typeName": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 226,
                            "decorators": [],
                            "name": "Extract",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 226,
                            "end": 254,
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "start": 227,
                                "end": 239,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 233,
                                  "end": 239,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 233,
                                    "end": 239,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "start": 241,
                                "end": 253,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 247,
                                  "end": 253,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 247,
                                    "end": 253,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 266,
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "Identifier",
              "start": 270,
              "end": 276,
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 279,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 291,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 291,
        "end": 294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 292,
            "end": 293,
            "name": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
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
          "start": 295,
          "end": 311,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 311,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 311,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 305,
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 305,
                "end": 311,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 306,
                    "end": 307,
                    "typeName": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 307,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 309,
                    "end": 310,
                    "typeName": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 310,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 313,
        "end": 345,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 319,
            "end": 332,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 323,
                "end": 331,
                "id": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 327,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 324,
                    "end": 327,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 326,
                      "end": 327,
                      "typeName": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 337,
            "end": 343,
            "expression": {
              "type": "AssignmentExpression",
              "start": 337,
              "end": 342,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "decorators": [],
                "name": "y",
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
      "type": "VariableDeclaration",
      "start": 347,
      "end": 392,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 391,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 362,
                "end": 391,
                "typeName": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 369,
                  "decorators": [],
                  "name": "Extract",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 369,
                  "end": 391,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 370,
                      "end": 385,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 370,
                          "end": 376
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 379,
                          "end": 385
                        }
                      ]
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 387,
                      "end": 390
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
      "start": 439,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 462,
        "decorators": [],
        "name": "ExtractWithDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 479,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
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
            "start": 466,
            "end": 467,
            "name": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "decorators": [],
              "name": "U",
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
            "start": 469,
            "end": 478,
            "name": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 473,
              "end": 478
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 482,
        "end": 501,
        "checkType": {
          "type": "TSTypeReference",
          "start": 482,
          "end": 483,
          "typeName": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 492,
          "end": 493,
          "typeName": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 496,
          "end": 497,
          "typeName": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 500,
          "end": 501,
          "typeName": {
            "type": "Identifier",
            "start": 500,
            "end": 501,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 504,
      "end": 567,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 527,
        "decorators": [],
        "name": "ExcludeWithDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 527,
        "end": 544,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 528,
            "end": 529,
            "name": {
              "type": "Identifier",
              "start": 528,
              "end": 529,
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
            "start": 531,
            "end": 532,
            "name": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
              "decorators": [],
              "name": "U",
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
            "start": 534,
            "end": 543,
            "name": {
              "type": "Identifier",
              "start": 534,
              "end": 535,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 538,
              "end": 543
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 547,
        "end": 566,
        "checkType": {
          "type": "TSTypeReference",
          "start": 547,
          "end": 548,
          "typeName": {
            "type": "Identifier",
            "start": 547,
            "end": 548,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 557,
          "end": 558,
          "typeName": {
            "type": "Identifier",
            "start": 557,
            "end": 558,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 561,
          "end": 562,
          "typeName": {
            "type": "Identifier",
            "start": 561,
            "end": 562,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 565,
          "end": 566,
          "typeName": {
            "type": "Identifier",
            "start": 565,
            "end": 566,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 569,
      "end": 678,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 677,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "decorators": [],
            "name": "fn5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 581,
            "end": 677,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 581,
              "end": 589,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 582,
                  "end": 588,
                  "name": {
                    "type": "Identifier",
                    "start": 582,
                    "end": 588,
                    "decorators": [],
                    "name": "Params",
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
                "start": 595,
                "end": 656,
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 601,
                  "end": 656,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 603,
                    "end": 656,
                    "typeName": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 607,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 607,
                      "end": 656,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 608,
                          "end": 614,
                          "typeName": {
                            "type": "Identifier",
                            "start": 608,
                            "end": 614,
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 616,
                          "end": 655,
                          "typeName": {
                            "type": "Identifier",
                            "start": 616,
                            "end": 634,
                            "decorators": [],
                            "name": "ExcludeWithDefault",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 634,
                            "end": 655,
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "start": 635,
                                "end": 647,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 641,
                                  "end": 647,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 641,
                                    "end": 647,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 649,
                                "end": 654
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 659,
              "end": 667,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 661,
                "end": 667,
                "typeName": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 667,
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "Identifier",
              "start": 671,
              "end": 677,
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 680,
      "end": 761,
      "id": {
        "type": "Identifier",
        "start": 689,
        "end": 692,
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 692,
        "end": 695,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 693,
            "end": 694,
            "name": {
              "type": "Identifier",
              "start": 693,
              "end": 694,
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
          "start": 696,
          "end": 727,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 697,
            "end": 727,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 699,
              "end": 727,
              "typeName": {
                "type": "Identifier",
                "start": 699,
                "end": 717,
                "decorators": [],
                "name": "ExcludeWithDefault",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 717,
                "end": 727,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 718,
                    "end": 719,
                    "typeName": {
                      "type": "Identifier",
                      "start": 718,
                      "end": 719,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 721,
                    "end": 726
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 729,
        "end": 761,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 735,
            "end": 748,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 739,
                "end": 747,
                "id": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 743,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 740,
                    "end": 743,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 742,
                      "end": 743,
                      "typeName": {
                        "type": "Identifier",
                        "start": 742,
                        "end": 743,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 747,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 753,
            "end": 759,
            "expression": {
              "type": "AssignmentExpression",
              "start": 753,
              "end": 758,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "decorators": [],
                "name": "y",
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
      "type": "VariableDeclaration",
      "start": 763,
      "end": 879,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 769,
          "end": 878,
          "id": {
            "type": "Identifier",
            "start": 769,
            "end": 772,
            "decorators": [],
            "name": "fn7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 775,
            "end": 878,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 775,
              "end": 783,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 776,
                  "end": 782,
                  "name": {
                    "type": "Identifier",
                    "start": 776,
                    "end": 782,
                    "decorators": [],
                    "name": "Params",
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
                "start": 789,
                "end": 857,
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 795,
                  "end": 857,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 797,
                    "end": 857,
                    "typeName": {
                      "type": "Identifier",
                      "start": 797,
                      "end": 801,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 801,
                      "end": 857,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 802,
                          "end": 808,
                          "typeName": {
                            "type": "Identifier",
                            "start": 802,
                            "end": 808,
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 810,
                          "end": 856,
                          "typeName": {
                            "type": "Identifier",
                            "start": 810,
                            "end": 828,
                            "decorators": [],
                            "name": "ExtractWithDefault",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 828,
                            "end": 856,
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "start": 829,
                                "end": 841,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 835,
                                  "end": 841,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 835,
                                    "end": 841,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "start": 843,
                                "end": 855,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 849,
                                  "end": 855,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 849,
                                    "end": 855,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 860,
              "end": 868,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 862,
                "end": 868,
                "typeName": {
                  "type": "Identifier",
                  "start": 862,
                  "end": 868,
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "Identifier",
              "start": 872,
              "end": 878,
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 881,
      "end": 958,
      "id": {
        "type": "Identifier",
        "start": 890,
        "end": 893,
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 893,
        "end": 896,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 894,
            "end": 895,
            "name": {
              "type": "Identifier",
              "start": 894,
              "end": 895,
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
          "start": 897,
          "end": 924,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 898,
            "end": 924,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 900,
              "end": 924,
              "typeName": {
                "type": "Identifier",
                "start": 900,
                "end": 918,
                "decorators": [],
                "name": "ExtractWithDefault",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 918,
                "end": 924,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 919,
                    "end": 920,
                    "typeName": {
                      "type": "Identifier",
                      "start": 919,
                      "end": 920,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 922,
                    "end": 923,
                    "typeName": {
                      "type": "Identifier",
                      "start": 922,
                      "end": 923,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 926,
        "end": 958,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 932,
            "end": 945,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 936,
                "end": 944,
                "id": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 940,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 937,
                    "end": 940,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 939,
                      "end": 940,
                      "typeName": {
                        "type": "Identifier",
                        "start": 939,
                        "end": 940,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 943,
                  "end": 944,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 950,
            "end": 956,
            "expression": {
              "type": "AssignmentExpression",
              "start": 950,
              "end": 955,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 950,
                "end": 951,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 954,
                "end": 955,
                "decorators": [],
                "name": "y",
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
      "start": 960,
      "end": 1062,
      "id": {
        "type": "Identifier",
        "start": 965,
        "end": 985,
        "decorators": [],
        "name": "TemplatedConditional",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 985,
        "end": 1018,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 986,
            "end": 992,
            "name": {
              "type": "Identifier",
              "start": 986,
              "end": 992,
              "decorators": [],
              "name": "TCheck",
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
            "start": 994,
            "end": 1002,
            "name": {
              "type": "Identifier",
              "start": 994,
              "end": 1002,
              "decorators": [],
              "name": "TExtends",
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
            "start": 1004,
            "end": 1009,
            "name": {
              "type": "Identifier",
              "start": 1004,
              "end": 1009,
              "decorators": [],
              "name": "TTrue",
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
            "start": 1011,
            "end": 1017,
            "name": {
              "type": "Identifier",
              "start": 1011,
              "end": 1017,
              "decorators": [],
              "name": "TFalse",
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
        "start": 1021,
        "end": 1061,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1021,
          "end": 1027,
          "typeName": {
            "type": "Identifier",
            "start": 1021,
            "end": 1027,
            "decorators": [],
            "name": "TCheck",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1036,
          "end": 1044,
          "typeName": {
            "type": "Identifier",
            "start": 1036,
            "end": 1044,
            "decorators": [],
            "name": "TExtends",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1047,
          "end": 1052,
          "typeName": {
            "type": "Identifier",
            "start": 1047,
            "end": 1052,
            "decorators": [],
            "name": "TTrue",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1055,
          "end": 1061,
          "typeName": {
            "type": "Identifier",
            "start": 1055,
            "end": 1061,
            "decorators": [],
            "name": "TFalse",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1064,
      "end": 1196,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1070,
          "end": 1195,
          "id": {
            "type": "Identifier",
            "start": 1070,
            "end": 1073,
            "decorators": [],
            "name": "fn9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1076,
            "end": 1195,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1076,
              "end": 1084,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1077,
                  "end": 1083,
                  "name": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1083,
                    "decorators": [],
                    "name": "Params",
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
                "start": 1090,
                "end": 1174,
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1096,
                  "end": 1174,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1098,
                    "end": 1174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1098,
                      "end": 1102,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1102,
                      "end": 1174,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1103,
                          "end": 1109,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1103,
                            "end": 1109,
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1111,
                          "end": 1173,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1111,
                            "end": 1131,
                            "decorators": [],
                            "name": "TemplatedConditional",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1131,
                            "end": 1173,
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "start": 1132,
                                "end": 1144,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1138,
                                  "end": 1144,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1138,
                                    "end": 1144,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1146,
                                "end": 1151
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1153,
                                "end": 1158
                              },
                              {
                                "type": "TSTypeOperator",
                                "start": 1160,
                                "end": 1172,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1166,
                                  "end": 1172,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1166,
                                    "end": 1172,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1177,
              "end": 1185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1179,
                "end": 1185,
                "typeName": {
                  "type": "Identifier",
                  "start": 1179,
                  "end": 1185,
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "Identifier",
              "start": 1189,
              "end": 1195,
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1198,
      "end": 1292,
      "id": {
        "type": "Identifier",
        "start": 1207,
        "end": 1211,
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1211,
        "end": 1214,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1212,
            "end": 1213,
            "name": {
              "type": "Identifier",
              "start": 1212,
              "end": 1213,
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
          "start": 1215,
          "end": 1258,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1216,
            "end": 1258,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1218,
              "end": 1258,
              "typeName": {
                "type": "Identifier",
                "start": 1218,
                "end": 1238,
                "decorators": [],
                "name": "TemplatedConditional",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1238,
                "end": 1258,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1239,
                    "end": 1240,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1239,
                      "end": 1240,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1242,
                    "end": 1247
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1249,
                    "end": 1254
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1256,
                    "end": 1257,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1256,
                      "end": 1257,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1260,
        "end": 1292,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1266,
            "end": 1279,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1270,
                "end": 1278,
                "id": {
                  "type": "Identifier",
                  "start": 1270,
                  "end": 1274,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1271,
                    "end": 1274,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1273,
                      "end": 1274,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1273,
                        "end": 1274,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1278,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1284,
            "end": 1290,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1284,
              "end": 1289,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1284,
                "end": 1285,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1288,
                "end": 1289,
                "decorators": [],
                "name": "y",
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
      "type": "VariableDeclaration",
      "start": 1294,
      "end": 1434,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1300,
          "end": 1433,
          "id": {
            "type": "Identifier",
            "start": 1300,
            "end": 1304,
            "decorators": [],
            "name": "fn11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1307,
            "end": 1433,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1307,
              "end": 1315,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1308,
                  "end": 1314,
                  "name": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1314,
                    "decorators": [],
                    "name": "Params",
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
                "start": 1321,
                "end": 1412,
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1327,
                  "end": 1412,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1329,
                    "end": 1412,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1329,
                      "end": 1333,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1333,
                      "end": 1412,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1334,
                          "end": 1340,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1334,
                            "end": 1340,
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1342,
                          "end": 1411,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1342,
                            "end": 1362,
                            "decorators": [],
                            "name": "TemplatedConditional",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1362,
                            "end": 1411,
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "start": 1363,
                                "end": 1375,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1369,
                                  "end": 1375,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1369,
                                    "end": 1375,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "start": 1377,
                                "end": 1389,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1383,
                                  "end": 1389,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1383,
                                    "end": 1389,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "start": 1391,
                                "end": 1403,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1397,
                                  "end": 1403,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1397,
                                    "end": 1403,
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1405,
                                "end": 1410
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1415,
              "end": 1423,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1417,
                "end": 1423,
                "typeName": {
                  "type": "Identifier",
                  "start": 1417,
                  "end": 1423,
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "Identifier",
              "start": 1427,
              "end": 1433,
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1436,
      "end": 1526,
      "id": {
        "type": "Identifier",
        "start": 1445,
        "end": 1449,
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1449,
        "end": 1452,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1450,
            "end": 1451,
            "name": {
              "type": "Identifier",
              "start": 1450,
              "end": 1451,
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
          "start": 1453,
          "end": 1492,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1454,
            "end": 1492,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1456,
              "end": 1492,
              "typeName": {
                "type": "Identifier",
                "start": 1456,
                "end": 1476,
                "decorators": [],
                "name": "TemplatedConditional",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1476,
                "end": 1492,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1477,
                    "end": 1478,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1477,
                      "end": 1478,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1480,
                    "end": 1481,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1480,
                      "end": 1481,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1483,
                    "end": 1484,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1483,
                      "end": 1484,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1486,
                    "end": 1491
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1494,
        "end": 1526,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1500,
            "end": 1513,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1504,
                "end": 1512,
                "id": {
                  "type": "Identifier",
                  "start": 1504,
                  "end": 1508,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1505,
                    "end": 1508,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1507,
                      "end": 1508,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1507,
                        "end": 1508,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1511,
                  "end": 1512,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1518,
            "end": 1524,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1518,
              "end": 1523,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1518,
                "end": 1519,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1522,
                "end": 1523,
                "decorators": [],
                "name": "y",
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
      "type": "VariableDeclaration",
      "start": 1528,
      "end": 1547,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1540,
          "end": 1546,
          "id": {
            "type": "Identifier",
            "start": 1540,
            "end": 1546,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1541,
              "end": 1546,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1543,
                "end": 1546
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
      "start": 1548,
      "end": 1565,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1554,
          "end": 1564,
          "id": {
            "type": "Identifier",
            "start": 1554,
            "end": 1557,
            "decorators": [],
            "name": "zee",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 1560,
            "end": 1564,
            "expression": {
              "type": "TSNonNullExpression",
              "start": 1560,
              "end": 1563,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 1560,
                "end": 1562,
                "expression": {
                  "type": "Identifier",
                  "start": 1560,
                  "end": 1561,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
