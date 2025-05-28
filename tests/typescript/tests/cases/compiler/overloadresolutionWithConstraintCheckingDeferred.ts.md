__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 686,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 17,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 15,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 18,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 38,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 34,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 36,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 74,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 72,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 126,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 95,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "A",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 124,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 114,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 124,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 115,
                  "end": 119,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 118,
                      "end": 119,
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 124,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 128,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 148,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 149,
          "end": 170,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 170,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 154,
              "end": 170,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 155,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 159,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 159,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "decorators": [],
                        "name": "D",
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
                "start": 161,
                "end": 170,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 164,
                  "end": 170
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 171,
        "end": 179,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 173,
          "end": 179
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 181,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 201,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 202,
          "end": 220,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 205,
            "end": 220,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 207,
              "end": 220,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 212,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 209,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 212,
                        "decorators": [],
                        "name": "C",
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
                "start": 214,
                "end": 220,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 217,
                  "end": 220
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 221,
        "end": 229,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 223,
          "end": 229
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 231,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 251,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 252,
          "end": 270,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 270,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 257,
              "end": 270,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 258,
                  "end": 262,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 259,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 261,
                      "end": 262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 262,
                        "decorators": [],
                        "name": "B",
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
                "start": 264,
                "end": 270,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 267,
                  "end": 270
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 271,
        "end": 279,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 273,
          "end": 279
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 322,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 321,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 300,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 300,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 294,
                "end": 300
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 321,
            "callee": {
              "type": "Identifier",
              "start": 303,
              "end": 306,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 307,
                "end": 320,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "NewExpression",
                  "start": 312,
                  "end": 320,
                  "callee": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 317,
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "id": null,
                "generator": false
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
      "start": 386,
      "end": 437,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 405,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 405,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 399,
                "end": 405
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 408,
            "end": 436,
            "callee": {
              "type": "Identifier",
              "start": 408,
              "end": 411,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 412,
                "end": 435,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 412,
                    "end": 413,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "NewExpression",
                  "start": 417,
                  "end": 435,
                  "callee": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 422,
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 422,
                    "end": 432,
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "start": 423,
                        "end": 431,
                        "exprName": {
                          "type": "Identifier",
                          "start": 430,
                          "end": 431,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "id": null,
                "generator": false
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
      "start": 501,
      "end": 686,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 685,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 520,
            "decorators": [],
            "name": "result3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 520,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 514,
                "end": 520
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 523,
            "end": 685,
            "callee": {
              "type": "Identifier",
              "start": 523,
              "end": 526,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 527,
                "end": 684,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 532,
                  "end": 684,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 554,
                      "end": 573,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 558,
                          "end": 572,
                          "id": {
                            "type": "Identifier",
                            "start": 558,
                            "end": 572,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 559,
                              "end": 572,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 561,
                                "end": 572,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 561,
                                  "end": 562,
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 562,
                                  "end": 572,
                                  "params": [
                                    {
                                      "type": "TSTypeQuery",
                                      "start": 563,
                                      "end": 571,
                                      "exprName": {
                                        "type": "Identifier",
                                        "start": 570,
                                        "end": 571,
                                        "decorators": [],
                                        "name": "x",
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
                      "declare": false
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 673,
                      "end": 682,
                      "argument": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 681,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
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
