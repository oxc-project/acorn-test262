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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 47,
          "end": 48,
          "expression": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
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
      "type": "TSInterfaceDeclaration",
      "start": 64,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 84,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 97,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 91,
                "end": 97
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
      "type": "TSInterfaceDeclaration",
      "start": 101,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 128,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 127,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 127,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "name": "B",
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "start": 145,
            "end": 150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "U",
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
      "start": 153,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 168,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "name": "G",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 166,
                      "end": 167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 217,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "name": "G",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 203,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 203,
                            "end": 211,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 205,
                              "end": 211
                            }
                          },
                          "accessibility": null,
                          "static": false
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 265,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 258,
                "end": 265,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "name": "G",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 263,
                      "end": 264,
                      "typeName": {
                        "type": "Identifier",
                        "start": 263,
                        "end": 264,
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 339,
            "name": "v4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 339,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 339,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "name": "G",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 327,
                  "end": 339,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 335,
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
                        "name": "G",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 333,
                            "end": 334,
                            "typeName": {
                              "type": "Identifier",
                              "start": 333,
                              "end": 334,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 374,
            "name": "v5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 374,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 374,
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "name": "G",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 444,
            "name": "v6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 436,
              "end": 444,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 438,
                "end": 444,
                "typeName": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "name": "G",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 506,
            "name": "v7",
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
                  "name": "G",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
