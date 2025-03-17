__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 664,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 27,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
            "start": 11,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "name": "T",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 99,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 97,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 77,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 80,
                  "end": 96,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 81,
                      "end": 87,
                      "typeName": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 87,
                        "name": "Object",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 89,
                      "end": 95,
                      "typeName": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 95,
                        "name": "Object",
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 46,
              "end": 52,
              "typeName": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "name": "Object",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 65,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 65,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "name": "T",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 192,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 150,
                  "end": 192,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 152,
                      "end": 165,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 154,
                          "end": 163,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 155,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 155,
                            "end": 163,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 157,
                              "end": 163
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 167,
                      "end": 191,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 169,
                          "end": 179,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 170,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 170,
                            "end": 178,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 172,
                              "end": 178
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 180,
                          "end": 189,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 181,
                            "end": 189,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 183,
                              "end": 189
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "start": 194,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 244,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 244,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 202,
                  "end": 244,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 204,
                      "end": 217,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 206,
                          "end": 215,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 206,
                            "end": 207,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 207,
                            "end": 215,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 209,
                              "end": 215
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 219,
                      "end": 243,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 221,
                          "end": 231,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 222,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 222,
                            "end": 230,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 224,
                              "end": 230
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 232,
                          "end": 241,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 232,
                            "end": 233,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 233,
                            "end": 241,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 235,
                              "end": 241
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "start": 276,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 315,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 315,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 285,
                  "end": 315,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 286,
                      "end": 299,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 288,
                          "end": 298,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 288,
                            "end": 289,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 289,
                            "end": 297,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 291,
                              "end": 297
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 301,
                      "end": 314,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 303,
                          "end": 312,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 304,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 304,
                            "end": 312,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 306,
                              "end": 312
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "start": 317,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 356,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 356,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 325,
                "end": 356,
                "typeName": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 326,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 326,
                  "end": 356,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 327,
                      "end": 340,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 329,
                          "end": 339,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 329,
                            "end": 330,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 330,
                            "end": 338,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 332,
                              "end": 338
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 342,
                      "end": 355,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 344,
                          "end": 353,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 344,
                            "end": 345,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 345,
                            "end": 353,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 347,
                              "end": 353
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "start": 358,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 362,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 362,
            "end": 397,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 397,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 367,
                  "end": 397,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 368,
                      "end": 381,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 370,
                          "end": 380,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 370,
                            "end": 371,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 371,
                            "end": 379,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 373,
                              "end": 379
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 383,
                      "end": 396,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 385,
                          "end": 394,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 385,
                            "end": 386,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 386,
                            "end": 394,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 388,
                              "end": 394
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "start": 399,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 438,
            "name": "x4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 405,
              "end": 438,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 407,
                "end": 438,
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 408,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 408,
                  "end": 438,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 409,
                      "end": 422,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 411,
                          "end": 421,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 411,
                            "end": 412,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 412,
                            "end": 420,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 414,
                              "end": 420
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 424,
                      "end": 437,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 426,
                          "end": 435,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 426,
                            "end": 427,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 427,
                            "end": 435,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 429,
                              "end": 435
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "start": 440,
      "end": 491,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 490,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 490,
            "name": "x5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 490,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 448,
                "end": 490,
                "typeName": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 449,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 449,
                  "end": 490,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 450,
                      "end": 474,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 452,
                          "end": 462,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 453,
                            "end": 461,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 455,
                              "end": 461
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 463,
                          "end": 472,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 464,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 464,
                            "end": 472,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 466,
                              "end": 472
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 476,
                      "end": 489,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 478,
                          "end": 487,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 478,
                            "end": 479,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 479,
                            "end": 487,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 481,
                              "end": 487
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "start": 492,
      "end": 543,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 542,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 542,
            "name": "x6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 542,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 500,
                "end": 542,
                "typeName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 501,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 501,
                  "end": 542,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 502,
                      "end": 526,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 504,
                          "end": 514,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 504,
                            "end": 505,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 505,
                            "end": 513,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 507,
                              "end": 513
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 515,
                          "end": 524,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 516,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 516,
                            "end": 524,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 518,
                              "end": 524
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 528,
                      "end": 541,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 530,
                          "end": 539,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 530,
                            "end": 531,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 531,
                            "end": 539,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 533,
                              "end": 539
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "type": "TSInterfaceDeclaration",
      "start": 545,
      "end": 576,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 557,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 558,
        "end": 576,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 564,
            "end": 574,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 564,
              "end": 565,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 565,
              "end": 573,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 567,
                "end": 573
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
      "start": 578,
      "end": 624,
      "id": {
        "type": "Identifier",
        "start": 588,
        "end": 590,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 591,
        "end": 624,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 597,
            "end": 607,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 598,
              "end": 606,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 600,
                "end": 606
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 612,
            "end": 622,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 613,
              "end": 621,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 615,
                "end": 621
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
      "start": 626,
      "end": 644,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 643,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 643,
            "name": "x7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 632,
              "end": 643,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 634,
                "end": 643,
                "typeName": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 635,
                  "end": 643,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 636,
                      "end": 638,
                      "typeName": {
                        "type": "Identifier",
                        "start": 636,
                        "end": 638,
                        "name": "I2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 640,
                      "end": 642,
                      "typeName": {
                        "type": "Identifier",
                        "start": 640,
                        "end": 642,
                        "name": "I1",
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
      "start": 645,
      "end": 663,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 649,
          "end": 662,
          "id": {
            "type": "Identifier",
            "start": 649,
            "end": 662,
            "name": "x8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 651,
              "end": 662,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 653,
                "end": 662,
                "typeName": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 654,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 654,
                  "end": 662,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 655,
                      "end": 657,
                      "typeName": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 657,
                        "name": "I2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 659,
                      "end": 661,
                      "typeName": {
                        "type": "Identifier",
                        "start": 659,
                        "end": 661,
                        "name": "I1",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
