__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 540,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 27,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 53,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 61,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 63,
                "end": 67,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 66,
                    "end": 67,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 74,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 80,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 91,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 91,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 90,
                    "end": 91,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 91,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 93,
                "end": 97,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 94,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 96,
                    "end": 97,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 107,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 100,
                "end": 107
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 298,
      "body": {
        "type": "TSInterfaceBody",
        "start": 134,
        "end": 298,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 140,
            "end": 217,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 150,
                "end": 169,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 169,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 153,
                    "end": 169,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 163,
                      "end": 169,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 164,
                          "end": 165,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 165,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 167,
                          "end": 168,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 168,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 163,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 171,
                "end": 193,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 174,
                    "end": 193,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 175,
                        "end": 179,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 176,
                          "end": 179,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 178,
                            "end": 179,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 179,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 181,
                        "end": 185,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 182,
                          "end": 185,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 184,
                            "end": 185,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 185,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 187,
                      "end": 193,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 190,
                        "end": 193
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 216,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 206,
                  "end": 216,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 207,
                      "end": 210
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 212,
                      "end": 215
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 206,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 143,
              "end": 149,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 144,
                  "end": 145,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 147,
                  "end": 148,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
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
            "type": "TSMethodSignature",
            "start": 222,
            "end": 296,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 235,
                "end": 254,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 236,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 254,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 248,
                      "end": 254,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 249,
                          "end": 250,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 250,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 252,
                          "end": 253,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 253,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 248,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 256,
                "end": 276,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 257,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 259,
                    "end": 276,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 260,
                        "end": 264,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 261,
                          "end": 264,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 263,
                            "end": 264,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 264,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 266,
                        "end": 270,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 267,
                          "end": 270,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 269,
                            "end": 270,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 269,
                              "end": 270,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 272,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 275,
                        "end": 276,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 276,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 295,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 289,
                  "end": 295,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 291,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 293,
                      "end": 294,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 294,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 289,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 225,
              "end": 234,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 226,
                  "end": 227,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 229,
                  "end": 230,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 232,
                  "end": 233,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 133,
        "decorators": [],
        "name": "Combinators",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 318,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 307,
                "end": 318,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 318,
                  "decorators": [],
                  "name": "Combinators",
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
      "start": 320,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 354,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 354,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 338,
                  "end": 354,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 347,
                      "end": 353
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 338,
                  "decorators": [],
                  "name": "Collection",
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
      "start": 356,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 414,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 363,
            "decorators": [],
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 366,
            "end": 414,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 392,
              "end": 414,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 394,
                  "end": 412,
                  "argument": {
                    "type": "CallExpression",
                    "start": 401,
                    "end": 412,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 401,
                      "end": 410,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 402,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 410,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 367,
                "end": 376,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 368,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 370,
                    "end": 376
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 378,
                "end": 387,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 379,
                  "end": 387,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 381,
                    "end": 387
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 491,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 423,
            "decorators": [],
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 426,
            "end": 491,
            "arguments": [
              {
                "type": "Identifier",
                "start": 454,
                "end": 456,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 458,
                "end": 490,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 468,
                  "end": 490,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 470,
                      "end": 488,
                      "argument": {
                        "type": "CallExpression",
                        "start": 477,
                        "end": 488,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 477,
                          "end": 486,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 477,
                            "end": 478,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 486,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 459,
                    "end": 460,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 426,
              "end": 431,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 428,
                "end": 431,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 431,
              "end": 453,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 432,
                  "end": 438
                },
                {
                  "type": "TSStringKeyword",
                  "start": 440,
                  "end": 446
                },
                {
                  "type": "TSTypeReference",
                  "start": 448,
                  "end": 452,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 452,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 493,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 539,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 500,
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 503,
            "end": 539,
            "arguments": [
              {
                "type": "Identifier",
                "start": 531,
                "end": 533,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 535,
                "end": 538,
                "decorators": [],
                "name": "rf1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 503,
              "end": 508,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 503,
                "end": 504,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 505,
                "end": 508,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 508,
              "end": 530,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 509,
                  "end": 515
                },
                {
                  "type": "TSStringKeyword",
                  "start": 517,
                  "end": 523
                },
                {
                  "type": "TSTypeReference",
                  "start": 525,
                  "end": 529,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 529,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
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
