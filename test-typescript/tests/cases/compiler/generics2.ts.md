__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 608,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 26,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 63,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 63,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 51,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 47,
          "end": 48,
          "expression": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 64,
      "end": 100,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 100,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 97,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 91,
                "end": 97
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 84,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 101,
      "end": 152,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 152,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 140,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 139,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 145,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 149,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 128,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 127,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 127,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "U",
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
      "start": 155,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 232,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 163,
                "end": 232,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 169,
                    "end": 186,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 170,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 172,
                        "end": 186,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 174,
                            "end": 184,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 175,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 175,
                              "end": 183,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 177,
                                "end": 183
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 191,
                    "end": 230,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 192,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 194,
                        "end": 229,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 196,
                            "end": 206,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 197,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 197,
                              "end": 205,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 199,
                                "end": 205
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 207,
                            "end": 217,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 207,
                              "end": 208,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 208,
                              "end": 216,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 210,
                                "end": 216
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 218,
                            "end": 227,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 219,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 219,
                              "end": 227,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 221,
                                "end": 227
                              }
                            }
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
      "start": 242,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 269,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 269,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 269,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 251,
                  "end": 269,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 252,
                      "end": 265,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 254,
                          "end": 263,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 255,
                            "end": 263,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 257,
                              "end": 263
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 267,
                      "end": 268,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 267,
                        "end": 268,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 302,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 317,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 310,
                "end": 317,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 311,
                  "end": 317,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 312,
                      "end": 313,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 313,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 315,
                      "end": 316,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 316,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 370,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 391,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 391,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 378,
                "end": 391,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 379,
                  "end": 391,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 380,
                      "end": 387,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 381,
                        "end": 387,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 382,
                            "end": 383,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 382,
                              "end": 383,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 385,
                            "end": 386,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 385,
                              "end": 386,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 381,
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 389,
                      "end": 390,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 379,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 407,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 426,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 426,
            "decorators": [],
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 413,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 415,
                "end": 426,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 416,
                  "end": 426,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 417,
                      "end": 420
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 422,
                      "end": 425
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 482,
      "end": 497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 496,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 496,
            "decorators": [],
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 488,
              "end": 496,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 490,
                "end": 496,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 491,
                  "end": 496,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 492,
                      "end": 495
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 549,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 558,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 558,
            "decorators": [],
            "name": "v7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 555,
              "end": 558,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 557,
                "end": 558,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
                }
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
  "sourceType": "script",
  "hashbang": null
}
```
