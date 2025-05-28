__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 528,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 20,
        "decorators": [],
        "name": "CallSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 528,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 27,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "decorators": [],
              "name": "foo1",
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
                "start": 49,
                "end": 72,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 53,
                    "end": 72,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 54,
                        "end": 63,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 55,
                          "end": 63,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 57,
                            "end": 63
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 68,
                        "end": 72
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 75,
                "end": 84,
                "exprName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 84,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 90,
            "end": 126,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 111,
              "decorators": [],
              "name": "foo1",
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
                "start": 112,
                "end": 119,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 116,
                    "end": 119
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 125,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 122,
                "end": 125
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 162,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 161,
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 139,
                  "end": 161,
                  "callee": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 143,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 144,
                      "end": 160,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 145,
                          "end": 154,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 146,
                            "end": 154,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 148,
                              "end": 154
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 159,
                        "end": 160,
                        "value": 1,
                        "raw": "1"
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
            "start": 199,
            "end": 230,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 203,
                "end": 229,
                "id": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 205,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 208,
                  "end": 229,
                  "callee": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 212,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 213,
                      "end": 228,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 213,
                        "end": 216,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 214,
                            "end": 215,
                            "name": {
                              "type": "Identifier",
                              "start": 214,
                              "end": 215,
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
                          "start": 217,
                          "end": 221,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 218,
                            "end": 221,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 220,
                              "end": 221,
                              "typeName": {
                                "type": "Identifier",
                                "start": 220,
                                "end": 221,
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
                        "type": "Literal",
                        "start": 226,
                        "end": 228,
                        "value": "",
                        "raw": "''"
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
            "type": "TSDeclareFunction",
            "start": 268,
            "end": 337,
            "id": {
              "type": "Identifier",
              "start": 285,
              "end": 289,
              "decorators": [],
              "name": "foo2",
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
                "start": 290,
                "end": 324,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 292,
                  "end": 324,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 294,
                    "end": 324,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 295,
                        "end": 304,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 296,
                          "end": 304,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 298,
                            "end": 304
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 306,
                        "end": 315,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 307,
                          "end": 315,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 309,
                            "end": 315
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 317,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 320,
                        "end": 324
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 327,
                "end": 336,
                "exprName": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 336,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 342,
            "end": 378,
            "id": {
              "type": "Identifier",
              "start": 359,
              "end": 363,
              "decorators": [],
              "name": "foo2",
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
                "start": 364,
                "end": 371,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 366,
                  "end": 371,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 368,
                    "end": 371
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 377,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 374,
                "end": 377
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 383,
            "end": 426,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 387,
                "end": 425,
                "id": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 389,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 392,
                  "end": 425,
                  "callee": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 396,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 397,
                      "end": 424,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 398,
                          "end": 407,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 399,
                            "end": 407,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 401,
                              "end": 407
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 409,
                          "end": 418,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 410,
                            "end": 418,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 412,
                              "end": 418
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 423,
                        "end": 424,
                        "value": 1,
                        "raw": "1"
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
            "start": 463,
            "end": 494,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 467,
                "end": 493,
                "id": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 469,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 472,
                  "end": 493,
                  "callee": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 476,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 477,
                      "end": 492,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 477,
                        "end": 480,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 478,
                            "end": 479,
                            "name": {
                              "type": "Identifier",
                              "start": 478,
                              "end": 479,
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
                          "start": 481,
                          "end": 485,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 482,
                            "end": 485,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 484,
                              "end": 485,
                              "typeName": {
                                "type": "Identifier",
                                "start": 484,
                                "end": 485,
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
                        "type": "Literal",
                        "start": 490,
                        "end": 492,
                        "value": "",
                        "raw": "''"
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
