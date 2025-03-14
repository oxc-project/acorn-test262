subtypingWithCallSignatures.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 528,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 27,
            "end": 85,
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
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
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 90,
            "end": 126,
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 111,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
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
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 162,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 161,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 139,
                  "end": 161,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 144,
                      "end": 160,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 159,
                        "end": 160,
                        "raw": "1",
                        "value": 1
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
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
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 143,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 199,
            "end": 230,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 203,
                "end": 229,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 205,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 208,
                  "end": 229,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 213,
                      "end": 228,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 226,
                        "end": 228,
                        "raw": "''",
                        "value": ""
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
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
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 213,
                        "end": 216,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 214,
                            "end": 215,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 214,
                              "end": 215,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 212,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSDeclareFunction",
            "start": 268,
            "end": 337,
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 285,
              "end": 289,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
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
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 342,
            "end": 378,
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 359,
              "end": 363,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
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
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 383,
            "end": 426,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 387,
                "end": 425,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 389,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 392,
                  "end": 425,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 397,
                      "end": 424,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 423,
                        "end": 424,
                        "raw": "1",
                        "value": 1
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
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
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 396,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 463,
            "end": 494,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 467,
                "end": 493,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 469,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 472,
                  "end": 493,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 477,
                      "end": 492,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 490,
                        "end": 492,
                        "raw": "''",
                        "value": ""
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
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
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 477,
                        "end": 480,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 478,
                            "end": 479,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 478,
                              "end": 479,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 476,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 20,
        "decorators": [],
        "name": "CallSignature",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
