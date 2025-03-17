__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 75,
  "end": 735,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 75,
      "end": 114,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 114,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 103,
            "end": 112,
            "argument": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 95,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 95,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 95,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 144,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 144,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 123,
                "end": 144,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 125,
                    "end": 142,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 126,
                        "end": 135,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 127,
                          "end": 135,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 129,
                            "end": 135
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 142,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 138,
                        "end": 142,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 142,
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 154,
            "end": 160,
            "arguments": [
              {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 249,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 189,
        "end": 249,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 195,
            "end": 221,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 220,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 220,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 200,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 202,
                      "end": 220,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 204,
                          "end": 218,
                          "accessibility": null,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 205,
                              "end": 214,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 206,
                                "end": 214,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 208,
                                  "end": 214
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 215,
                            "end": 218,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 217,
                              "end": 218,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 218,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 226,
            "end": 242,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 241,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 235,
                  "end": 241,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 239,
                      "end": 240,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 177,
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 181,
          "end": 187,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 187,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 187,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 177,
        "end": 180,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 178,
            "end": 179,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 251,
      "end": 365,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 291,
        "end": 365,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 297,
            "end": 323,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 301,
                "end": 322,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 322,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 322,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 304,
                      "end": 322,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 306,
                          "end": 320,
                          "accessibility": null,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 307,
                              "end": 316,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 308,
                                "end": 316,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 310,
                                  "end": 316
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 317,
                            "end": 320,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 319,
                              "end": 320,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 320,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 328,
            "end": 344,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 332,
                "end": 343,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 334,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 337,
                  "end": 343,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 340,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 349,
            "end": 363,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 353,
                "end": 362,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 354,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 357,
                  "end": 362,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 359,
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 360,
                    "end": 361,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 266,
        "decorators": [],
        "name": "other2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 283,
          "end": 289,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 289,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 288,
              "end": 289,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 266,
        "end": 282,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 267,
            "end": 281,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 277,
              "end": 281,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 277,
                "end": 281,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 367,
      "end": 545,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 545,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 429,
            "end": 455,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 433,
                "end": 454,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 454,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 434,
                    "end": 454,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 436,
                      "end": 454,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 438,
                          "end": 452,
                          "accessibility": null,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 439,
                              "end": 448,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 440,
                                "end": 448,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 442,
                                  "end": 448
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 449,
                            "end": 452,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 451,
                              "end": 452,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 451,
                                "end": 452,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 460,
            "end": 476,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 464,
                "end": 475,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 466,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 469,
                  "end": 475,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 472,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 481,
            "end": 495,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 485,
                "end": 494,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 489,
                  "end": 494,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 491,
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 492,
                    "end": 493,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 382,
        "decorators": [],
        "name": "other3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 415,
          "end": 421,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 418,
            "end": 421,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 420,
              "end": 421,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 420,
                "end": 421,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 382,
        "end": 414,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 383,
            "end": 397,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 393,
              "end": 397,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 393,
                "end": 397,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 399,
            "end": 413,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 409,
              "end": 413,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 409,
                "end": 413,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
