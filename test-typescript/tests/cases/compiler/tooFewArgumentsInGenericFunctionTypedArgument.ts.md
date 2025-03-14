__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 482,
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "decorators": [],
              "name": "length",
              "optional": false
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "decorators": [],
              "name": "add",
              "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "U",
                      "optional": false
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 80,
            "end": 108,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "decorators": [],
              "name": "remove",
              "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 91,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "U",
                      "optional": false
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
            "static": false
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
        "optional": false
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
      "type": "TSInterfaceDeclaration",
      "start": 111,
      "end": 295,
      "body": {
        "type": "TSInterfaceBody",
        "start": 133,
        "end": 295,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 139,
            "end": 212,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 170,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 155,
                    "end": 170,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 165,
                      "end": 170,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 166,
                          "end": 167,
                          "typeName": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 168,
                          "end": 169,
                          "typeName": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 169,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 165,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 172,
                "end": 192,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 173,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 175,
                    "end": 192,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 176,
                        "end": 180,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 177,
                          "end": 180,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 179,
                            "end": 180,
                            "typeName": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 180,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 182,
                        "end": 186,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 183,
                          "end": 186,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 185,
                            "end": 186,
                            "typeName": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 186,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 191,
                        "end": 192,
                        "typeName": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 192,
                          "decorators": [],
                          "name": "V",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 211,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 205,
                  "end": 211,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 206,
                      "end": 207,
                      "typeName": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 207,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 210,
                      "typeName": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 210,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 205,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 142,
              "end": 151,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 143,
                  "end": 144,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 146,
                  "end": 147,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 149,
                  "end": 150,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 217,
            "end": 293,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 245,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 228,
                  "end": 245,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 230,
                    "end": 245,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 240,
                      "end": 245,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 241,
                          "end": 242,
                          "typeName": {
                            "type": "Identifier",
                            "start": 241,
                            "end": 242,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 243,
                          "end": 244,
                          "typeName": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 244,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 240,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 247,
                "end": 269,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 248,
                  "end": 269,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 250,
                    "end": 269,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 251,
                        "end": 255,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 255,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 254,
                            "end": 255,
                            "typeName": {
                              "type": "Identifier",
                              "start": 254,
                              "end": 255,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 257,
                        "end": 261,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 258,
                          "end": 261,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 260,
                            "end": 261,
                            "typeName": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 261,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 263,
                      "end": 269,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 266,
                        "end": 269
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 270,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 272,
                "end": 292,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 282,
                  "end": 292,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 283,
                      "end": 286
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 288,
                      "end": 291
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 282,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 220,
              "end": 226,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 221,
                  "end": 222,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 224,
                  "end": 225,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 225,
                    "decorators": [],
                    "name": "U",
                    "optional": false
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
        "start": 121,
        "end": 132,
        "decorators": [],
        "name": "Combinators",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 330,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 330,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 330,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 314,
                  "end": 330,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 315,
                      "end": 321
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 323,
                      "end": 329
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 314,
                  "decorators": [],
                  "name": "Collection",
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
      "start": 332,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 350,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 350,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 350,
                  "decorators": [],
                  "name": "Combinators",
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
      "start": 352,
      "end": 403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 402,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 359,
            "decorators": [],
            "name": "r1a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 362,
            "end": 402,
            "arguments": [
              {
                "type": "Identifier",
                "start": 368,
                "end": 370,
                "decorators": [],
                "name": "c2",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 372,
                "end": 401,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 379,
                  "end": 401,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 381,
                      "end": 399,
                      "argument": {
                        "type": "CallExpression",
                        "start": 388,
                        "end": 399,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 388,
                          "end": 397,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 389,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 390,
                            "end": 397,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false
                          }
                        },
                        "optional": false
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
                    "start": 373,
                    "end": 374,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 362,
              "end": 367,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "decorators": [],
                "name": "_",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 367,
                "decorators": [],
                "name": "map",
                "optional": false
              }
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
      "start": 405,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 452,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 412,
            "decorators": [],
            "name": "rf1",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 415,
            "end": 452,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 430,
              "end": 452,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 432,
                  "end": 450,
                  "argument": {
                    "type": "CallExpression",
                    "start": 439,
                    "end": 450,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 439,
                      "end": 448,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 440,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 448,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false
                      }
                    },
                    "optional": false
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
                "start": 416,
                "end": 425,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 417,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 419,
                    "end": 425
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 454,
      "end": 479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 458,
          "end": 478,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 461,
            "decorators": [],
            "name": "r1b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 464,
            "end": 478,
            "arguments": [
              {
                "type": "Identifier",
                "start": 470,
                "end": 472,
                "decorators": [],
                "name": "c2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "rf1",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 464,
              "end": 469,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "_",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 466,
                "end": 469,
                "decorators": [],
                "name": "map",
                "optional": false
              }
            },
            "optional": false
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
