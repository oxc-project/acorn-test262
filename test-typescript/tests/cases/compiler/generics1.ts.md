__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 556,
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
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
        "optional": false
      }
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "b",
              "optional": false
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "B",
        "optional": false
      }
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "c",
              "optional": false
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "C",
        "optional": false
      }
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "x",
              "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 145,
            "end": 150,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "y",
              "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "U",
                  "optional": false
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
        "optional": false
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "T",
              "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 168,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 162,
                  "end": 168,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 163,
                      "end": 164,
                      "typeName": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 166,
                      "end": 167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "G",
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
      "start": 190,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 217,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 217,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 199,
                  "end": 217,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 200,
                      "end": 213,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 202,
                          "end": 211,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 203,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 203,
                            "end": 211,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 205,
                              "end": 211
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 215,
                      "end": 216,
                      "typeName": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 216,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "decorators": [],
                  "name": "G",
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
      "start": 250,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 265,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 265,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 258,
                "end": 265,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 259,
                  "end": 265,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 260,
                      "end": 261,
                      "typeName": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 263,
                      "end": 264,
                      "typeName": {
                        "type": "Identifier",
                        "start": 263,
                        "end": 264,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "decorators": [],
                  "name": "G",
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
      "start": 318,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 339,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 339,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 339,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 327,
                  "end": 339,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 335,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 329,
                        "end": 335,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 330,
                            "end": 331,
                            "typeName": {
                              "type": "Identifier",
                              "start": 330,
                              "end": 331,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 333,
                            "end": 334,
                            "typeName": {
                              "type": "Identifier",
                              "start": 333,
                              "end": 334,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
                        "decorators": [],
                        "name": "G",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 337,
                      "end": 338,
                      "typeName": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "G",
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
      "start": 355,
      "end": 375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 374,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 374,
            "decorators": [],
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 374,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 374,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 364,
                  "end": 374,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 365,
                      "end": 368
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 370,
                      "end": 373
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "decorators": [],
                  "name": "G",
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
      "start": 430,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 444,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 444,
            "decorators": [],
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 436,
              "end": 444,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 438,
                "end": 444,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 439,
                  "end": 444,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 440,
                      "end": 443
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "decorators": [],
                  "name": "G",
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
      "start": 497,
      "end": 507,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 506,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 506,
            "decorators": [],
            "name": "v7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 503,
              "end": 506,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 505,
                "end": 506,
                "typeName": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 506,
                  "decorators": [],
                  "name": "G",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
