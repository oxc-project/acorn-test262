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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "Collection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 27,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 48,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 53,
            "end": 75,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 61,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "name": "T",
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
              {
                "type": "Identifier",
                "start": 63,
                "end": 67,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 66,
                    "end": 67,
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 80,
            "end": 108,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "name": "remove",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 91,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 91,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 90,
                    "end": 91,
                    "typeName": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 91,
                      "name": "T",
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
              {
                "type": "Identifier",
                "start": 93,
                "end": 97,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 94,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 96,
                    "end": 97,
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 133,
        "name": "Combinators",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 134,
        "end": 298,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 140,
            "end": 217,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 143,
              "end": 149,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 144,
                  "end": 145,
                  "name": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
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
                  "start": 147,
                  "end": 148,
                  "name": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "start": 150,
                "end": 169,
                "name": "c",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 169,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 153,
                    "end": 169,
                    "typeName": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 163,
                      "name": "Collection",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 163,
                      "end": 169,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 164,
                          "end": 165,
                          "typeName": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 165,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 167,
                          "end": 168,
                          "typeName": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 168,
                            "name": "U",
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
              {
                "type": "Identifier",
                "start": 171,
                "end": 193,
                "name": "f",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 174,
                    "end": 193,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 175,
                        "end": 179,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 176,
                          "end": 179,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 178,
                            "end": 179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 179,
                              "name": "T",
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
                      {
                        "type": "Identifier",
                        "start": 181,
                        "end": 185,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 182,
                          "end": 185,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 184,
                            "end": 185,
                            "typeName": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 185,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 216,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 206,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 222,
            "end": 296,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 225,
              "end": 234,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 226,
                  "end": 227,
                  "name": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
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
                  "start": 229,
                  "end": 230,
                  "name": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "name": "U",
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
                  "start": 232,
                  "end": 233,
                  "name": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "start": 235,
                "end": 254,
                "name": "c",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 236,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 254,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 248,
                      "name": "Collection",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 248,
                      "end": 254,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 249,
                          "end": 250,
                          "typeName": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 250,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 252,
                          "end": 253,
                          "typeName": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 253,
                            "name": "U",
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
              {
                "type": "Identifier",
                "start": 256,
                "end": 276,
                "name": "f",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 257,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 259,
                    "end": 276,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 260,
                        "end": 264,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 261,
                          "end": 264,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 263,
                            "end": 264,
                            "typeName": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 264,
                              "name": "T",
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
                      {
                        "type": "Identifier",
                        "start": 266,
                        "end": 270,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 267,
                          "end": 270,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 269,
                            "end": 270,
                            "typeName": {
                              "type": "Identifier",
                              "start": 269,
                              "end": 270,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 276,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 295,
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 289,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 289,
                  "end": 295,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 291,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 293,
                      "end": 294,
                      "typeName": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 294,
                        "name": "V",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 318,
            "name": "_",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 307,
                "end": 318,
                "typeName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 318,
                  "name": "Combinators",
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
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 354,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 354,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 338,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 356,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 363,
            "name": "rf1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 366,
            "end": 414,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 367,
                "end": 376,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 368,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 370,
                    "end": 376
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 378,
                "end": 387,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 379,
                  "end": 387,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 381,
                    "end": 387
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 401,
                      "end": 410,
                      "object": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 402,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 410,
                        "name": "toFixed",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 423,
            "name": "r5a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 426,
            "end": 491,
            "callee": {
              "type": "MemberExpression",
              "start": 426,
              "end": 431,
              "object": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 428,
                "end": 431,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 454,
                "end": 456,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 458,
                "end": 490,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 459,
                    "end": 460,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 477,
                          "end": 486,
                          "object": {
                            "type": "Identifier",
                            "start": 477,
                            "end": 478,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 486,
                            "name": "toFixed",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 452,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 500,
            "name": "r5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 503,
            "end": 539,
            "callee": {
              "type": "MemberExpression",
              "start": 503,
              "end": 508,
              "object": {
                "type": "Identifier",
                "start": 503,
                "end": 504,
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 505,
                "end": 508,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 531,
                "end": 533,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 535,
                "end": 538,
                "name": "rf1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 529,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
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
