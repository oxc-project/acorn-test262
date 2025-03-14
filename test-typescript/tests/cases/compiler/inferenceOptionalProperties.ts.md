inferenceOptionalProperties.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 768,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 53,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 48,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 28,
              "end": 48,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 30,
                  "end": 46,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 31,
                      "end": 42,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 34,
                        "end": 42,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 36,
                          "end": 42
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 45,
                      "end": 46,
                      "typeName": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 46,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 52,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 51,
          "end": 52,
          "typeName": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 97,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 97,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 71,
                "end": 97,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 73,
                    "end": 84,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 85,
                    "end": 95,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 89,
                        "end": 95
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
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 153,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 115,
                "end": 153,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 117,
                    "end": 128,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 129,
                    "end": 151,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 131,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 133,
                        "end": 151,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 133,
                            "end": 139
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 142,
                            "end": 151
                          }
                        ]
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
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 167,
            "end": 175,
            "arguments": [
              {
                "type": "Identifier",
                "start": 172,
                "end": 174,
                "decorators": [],
                "name": "x1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 167,
              "end": 171,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 185,
            "decorators": [],
            "name": "y2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 188,
            "end": 196,
            "arguments": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 195,
                "decorators": [],
                "name": "x2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 188,
              "end": 192,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 243,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 243,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 215,
                  "end": 243,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 216,
                      "end": 242,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 218,
                          "end": 229,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 218,
                            "end": 219,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 220,
                            "end": 228,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 222,
                              "end": 228
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 230,
                          "end": 240,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 232,
                            "end": 240,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 234,
                              "end": 240
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 215,
                  "decorators": [],
                  "name": "Required",
                  "optional": false
                }
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
      "start": 245,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 277,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 277,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 253,
                "end": 277,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 255,
                    "end": 265,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 256,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 256,
                      "end": 264,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 258,
                        "end": 264
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 266,
                    "end": 275,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 267,
                      "end": 275,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 269,
                        "end": 275
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
      "start": 280,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 336,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 288,
                "end": 336,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 296,
                  "end": 336,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 297,
                      "end": 335,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 299,
                          "end": 310,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 299,
                            "end": 300,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 301,
                            "end": 309,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 303,
                              "end": 309
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 311,
                          "end": 333,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 311,
                            "end": 312,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 313,
                            "end": 333,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 315,
                              "end": 333,
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 315,
                                  "end": 321
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 324,
                                  "end": 333
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 296,
                  "decorators": [],
                  "name": "Required",
                  "optional": false
                }
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
      "start": 338,
      "end": 383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 382,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 382,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 382,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 346,
                "end": 382,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 348,
                    "end": 358,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 349,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 349,
                      "end": 357,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 351,
                        "end": 357
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 359,
                    "end": 380,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 360,
                      "end": 380,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 362,
                        "end": 380,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 362,
                            "end": 368
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 371,
                            "end": 380
                          }
                        ]
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
      "start": 385,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 426,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 426,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 393,
                "end": 426,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 400,
                  "end": 426,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 401,
                      "end": 425,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 403,
                          "end": 413,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 403,
                            "end": 404,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 404,
                            "end": 412,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 406,
                              "end": 412
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 414,
                          "end": 423,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 414,
                            "end": 415,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 415,
                            "end": 423,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 417,
                              "end": 423
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 400,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false
                }
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
      "start": 428,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 462,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 462,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 436,
                "end": 462,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 438,
                    "end": 449,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 439,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 440,
                      "end": 448,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 442,
                        "end": 448
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 450,
                    "end": 460,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 451,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 452,
                      "end": 460,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 454,
                        "end": 460
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
      "start": 465,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 518,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 518,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 471,
              "end": 518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 473,
                "end": 518,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 480,
                  "end": 518,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 481,
                      "end": 517,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 483,
                          "end": 493,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 484,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 484,
                            "end": 492,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 486,
                              "end": 492
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 494,
                          "end": 515,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 494,
                            "end": 495,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 495,
                            "end": 515,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 497,
                              "end": 515,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 497,
                                  "end": 503
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 506,
                                  "end": 515
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 480,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false
                }
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
      "start": 520,
      "end": 567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 566,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 566,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 526,
              "end": 566,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 528,
                "end": 566,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 530,
                    "end": 541,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 531,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 532,
                      "end": 540,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 534,
                        "end": 540
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 542,
                    "end": 564,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 542,
                      "end": 543,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 544,
                      "end": 564,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 546,
                        "end": 564,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 546,
                            "end": 552
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 555,
                            "end": 564
                          }
                        ]
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
      "start": 569,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 620,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 620,
            "decorators": [],
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 575,
              "end": 620,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 577,
                "end": 620,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 585,
                  "end": 620,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 586,
                      "end": 619,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 593,
                        "end": 619,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 594,
                            "end": 618,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 596,
                                "end": 606,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 596,
                                  "end": 597,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 597,
                                  "end": 605,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 599,
                                    "end": 605
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 607,
                                "end": 616,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 607,
                                  "end": 608,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 608,
                                  "end": 616,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 610,
                                    "end": 616
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 593,
                        "decorators": [],
                        "name": "Partial",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 585,
                  "decorators": [],
                  "name": "Required",
                  "optional": false
                }
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
      "start": 622,
      "end": 655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 654,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 654,
            "decorators": [],
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 628,
              "end": 654,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 630,
                "end": 654,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 632,
                    "end": 642,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 632,
                      "end": 633,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 633,
                      "end": 641,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 635,
                        "end": 641
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 643,
                    "end": 652,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 644,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 644,
                      "end": 652,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 646,
                        "end": 652
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
      "start": 657,
      "end": 721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 720,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 720,
            "decorators": [],
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 663,
              "end": 720,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 665,
                "end": 720,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 673,
                  "end": 720,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 674,
                      "end": 719,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 681,
                        "end": 719,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 682,
                            "end": 718,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 684,
                                "end": 694,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 684,
                                  "end": 685,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 685,
                                  "end": 693,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 687,
                                    "end": 693
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 695,
                                "end": 716,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 695,
                                  "end": 696,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 696,
                                  "end": 716,
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "start": 698,
                                    "end": 716,
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 698,
                                        "end": 704
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 707,
                                        "end": 716
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 674,
                        "end": 681,
                        "decorators": [],
                        "name": "Partial",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 673,
                  "decorators": [],
                  "name": "Required",
                  "optional": false
                }
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
      "start": 722,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 766,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 766,
            "decorators": [],
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 728,
              "end": 766,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 730,
                "end": 766,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 732,
                    "end": 742,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 732,
                      "end": 733,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 733,
                      "end": 741,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 735,
                        "end": 741
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 743,
                    "end": 764,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 744,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 744,
                      "end": 764,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 746,
                        "end": 764,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 746,
                            "end": 752
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 755,
                            "end": 764
                          }
                        ]
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
    }
  ],
  "sourceType": "script"
}
```
