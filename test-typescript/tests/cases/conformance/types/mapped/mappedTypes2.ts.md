__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2195,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 300,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 300,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 57,
            "end": 76,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 75,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 75,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 65,
                      "end": 75,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 72,
                        "end": 75,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 73,
                            "end": 74,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 74,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 72,
                        "decorators": [],
                        "name": "Partial",
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
            "start": 81,
            "end": 115,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 85,
                "end": 114,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 114,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 89,
                      "end": 114,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 97,
                        "end": 104,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 104,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "nameType": null,
                      "optional": true,
                      "readonly": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 108,
                        "end": 112,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 110,
                          "end": 111,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 111,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 108,
                          "end": 109,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 109,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
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
            "start": 120,
            "end": 140,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 124,
                "end": 139,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 139,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 139,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 136,
                        "end": 139,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 137,
                            "end": 138,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 138,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 136,
                        "decorators": [],
                        "name": "Readonly",
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
            "start": 145,
            "end": 187,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 149,
                "end": 186,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 186,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 153,
                      "end": 186,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 170,
                        "end": 177,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 176,
                          "end": 177,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "nameType": null,
                      "optional": null,
                      "readonly": true,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 180,
                        "end": 184,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 182,
                          "end": 183,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 180,
                          "end": 181,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
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
            "start": 192,
            "end": 211,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 196,
                "end": 210,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 210,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 210,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 200,
                      "end": 210,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 204,
                        "end": 210,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 205,
                            "end": 206,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 205,
                              "end": 206,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 208,
                            "end": 209,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 208,
                              "end": 209,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 204,
                        "decorators": [],
                        "name": "Pick",
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
            "start": 216,
            "end": 243,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 220,
                "end": 242,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 242,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 224,
                      "end": 242,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 232,
                        "end": 233,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 233,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 228,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "nameType": null,
                      "optional": null,
                      "readonly": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 236,
                        "end": 240,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 238,
                          "end": 239,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 239,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 236,
                          "end": 237,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 237,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
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
            "start": 248,
            "end": 269,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 268,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 268,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 254,
                    "end": 268,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 256,
                      "end": 268,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 262,
                        "end": 268,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 263,
                            "end": 264,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 264,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 266,
                            "end": 267,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 266,
                              "end": 267,
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
                        "start": 256,
                        "end": 262,
                        "decorators": [],
                        "name": "Record",
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
            "start": 274,
            "end": 298,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 278,
                "end": 297,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 297,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 280,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 282,
                      "end": 297,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 290,
                        "end": 291,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 286,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "nameType": null,
                      "optional": null,
                      "readonly": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 294,
                        "end": 295,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 23,
        "decorators": [],
        "name": "verifyLibTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 48,
        "params": [
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 44,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 37,
              "end": 44,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "type": "TSTypeAliasDeclaration",
      "start": 302,
      "end": 360,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 312,
        "decorators": [],
        "name": "Proxy",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 318,
        "end": 360,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 324,
            "end": 333,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 332,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 338,
            "end": 358,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 341,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 342,
                "end": 350,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 347,
                  "end": 350,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 349,
                    "end": 350,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 350,
                      "decorators": [],
                      "name": "T",
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
              "start": 351,
              "end": 357,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 353,
                "end": 357
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 312,
        "end": 315,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 313,
            "end": 314,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
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
      "type": "TSTypeAliasDeclaration",
      "start": 362,
      "end": 416,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 374,
        "decorators": [],
        "name": "Proxify",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 380,
        "end": 416,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 392,
          "end": 399,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 398,
            "end": 399,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 402,
          "end": 413,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 407,
            "end": 413,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 408,
                "end": 412,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 410,
                  "end": 411,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 408,
                  "end": 409,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 402,
            "end": 407,
            "decorators": [],
            "name": "Proxy",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 374,
        "end": 377,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 375,
            "end": 376,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
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
      "type": "TSTypeAliasDeclaration",
      "start": 418,
      "end": 494,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 435,
        "decorators": [],
        "name": "DeepReadonly",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 441,
        "end": 493,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 462,
          "end": 469,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 468,
            "end": 469,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 457,
          "end": 458,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 472,
          "end": 490,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 484,
            "end": 490,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 485,
                "end": 489,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 487,
                  "end": 488,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 488,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 485,
                  "end": 486,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 486,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 472,
            "end": 484,
            "decorators": [],
            "name": "DeepReadonly",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 435,
        "end": 438,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 436,
            "end": 437,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
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
      "type": "TSDeclareFunction",
      "start": 496,
      "end": 556,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 519,
        "decorators": [],
        "name": "assign",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 523,
          "end": 529,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 526,
            "end": 529,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 528,
              "end": 529,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 528,
                "end": 529,
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
          "start": 531,
          "end": 548,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 536,
            "end": 548,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 538,
              "end": 548,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 545,
                "end": 548,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 546,
                    "end": 547,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 547,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 538,
                "end": 545,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 549,
        "end": 555,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 551,
          "end": 555
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 519,
        "end": 522,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 520,
            "end": 521,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
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
      "type": "TSDeclareFunction",
      "start": 557,
      "end": 605,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 580,
        "decorators": [],
        "name": "freeze",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 584,
          "end": 590,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 587,
            "end": 590,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 589,
              "end": 590,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 589,
                "end": 590,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 591,
        "end": 604,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 593,
          "end": 604,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 601,
            "end": 604,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 602,
                "end": 603,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 603,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 593,
            "end": 601,
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 580,
        "end": 583,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 581,
            "end": 582,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 581,
              "end": 582,
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
      "type": "TSDeclareFunction",
      "start": 606,
      "end": 684,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 623,
        "end": 627,
        "decorators": [],
        "name": "pick",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 650,
          "end": 656,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 653,
            "end": 656,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 655,
              "end": 656,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 655,
                "end": 656,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 658,
          "end": 670,
          "argument": {
            "type": "Identifier",
            "start": 661,
            "end": 665,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 665,
            "end": 670,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 667,
              "end": 670,
              "elementType": {
                "type": "TSTypeReference",
                "start": 667,
                "end": 668,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 668,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 671,
        "end": 683,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 673,
          "end": 683,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 677,
            "end": 683,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 678,
                "end": 679,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 681,
                "end": 682,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 682,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 673,
            "end": 677,
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 627,
        "end": 649,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 628,
            "end": 629,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 631,
            "end": 648,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 641,
              "end": 648,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 647,
                "end": 648,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 648,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 631,
              "end": 632,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 685,
      "end": 785,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 711,
        "decorators": [],
        "name": "mapObject",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 736,
          "end": 753,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 739,
            "end": 753,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 741,
              "end": 753,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 747,
                "end": 753,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 748,
                    "end": 749,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 749,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 751,
                    "end": 752,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 751,
                      "end": 752,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 741,
                "end": 747,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 755,
          "end": 769,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 756,
            "end": 769,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 758,
              "end": 769,
              "params": [
                {
                  "type": "Identifier",
                  "start": 759,
                  "end": 763,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 760,
                    "end": 763,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 762,
                      "end": 763,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 762,
                        "end": 763,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 765,
                "end": 769,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 768,
                  "end": 769,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 768,
                    "end": 769,
                    "decorators": [],
                    "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 770,
        "end": 784,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 772,
          "end": 784,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 778,
            "end": 784,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 779,
                "end": 780,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 780,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 782,
                "end": 783,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 783,
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
            "start": 772,
            "end": 778,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 711,
        "end": 735,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 712,
            "end": 728,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 722,
              "end": 728
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 730,
            "end": 731,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 730,
              "end": 731,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 733,
            "end": 734,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 733,
              "end": 734,
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
      "type": "TSDeclareFunction",
      "start": 786,
      "end": 834,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 803,
        "end": 810,
        "decorators": [],
        "name": "proxify",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 814,
          "end": 820,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 817,
            "end": 820,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 819,
              "end": 820,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 819,
                "end": 820,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 821,
        "end": 833,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 823,
          "end": 833,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 830,
            "end": 833,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 831,
                "end": 832,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 823,
            "end": 830,
            "decorators": [],
            "name": "Proxify",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 810,
        "end": 813,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 811,
            "end": 812,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 811,
              "end": 812,
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
      "type": "TSInterfaceDeclaration",
      "start": 836,
      "end": 885,
      "body": {
        "type": "TSInterfaceBody",
        "start": 852,
        "end": 885,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 858,
            "end": 868,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 859,
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
              "start": 859,
              "end": 867,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 861,
                "end": 867
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 873,
            "end": 883,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 873,
              "end": 874,
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
              "start": 874,
              "end": 882,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 876,
                "end": 882
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 846,
        "end": 851,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 887,
      "end": 984,
      "body": {
        "type": "TSInterfaceBody",
        "start": 903,
        "end": 984,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 909,
            "end": 922,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 909,
              "end": 913,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 913,
              "end": 921,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 915,
                "end": 921
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 927,
            "end": 941,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 927,
              "end": 932,
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 932,
              "end": 940,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 934,
                "end": 940
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 946,
            "end": 961,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 946,
              "end": 952,
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 952,
              "end": 960,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 954,
                "end": 960
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 966,
            "end": 982,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 966,
              "end": 974,
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 974,
              "end": 981,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 976,
                "end": 981,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 981,
                  "decorators": [],
                  "name": "Point",
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
        "start": 897,
        "end": 902,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 986,
      "end": 1094,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1009,
        "end": 1094,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1015,
            "end": 1029,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1015,
              "end": 1019,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1020,
              "end": 1028,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1022,
                "end": 1028
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1034,
            "end": 1049,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1034,
              "end": 1039,
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1040,
              "end": 1048,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1042,
                "end": 1048
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1054,
            "end": 1070,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1054,
              "end": 1060,
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1061,
              "end": 1069,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1063,
                "end": 1069
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1075,
            "end": 1092,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1075,
              "end": 1083,
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1084,
              "end": 1091,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1086,
                "end": 1091,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1091,
                  "decorators": [],
                  "name": "Point",
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
        "start": 996,
        "end": 1008,
        "decorators": [],
        "name": "PartialShape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1096,
      "end": 1237,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1120,
        "end": 1237,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1126,
            "end": 1148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1135,
              "end": 1139,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1139,
              "end": 1147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1141,
                "end": 1147
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1153,
            "end": 1176,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1162,
              "end": 1167,
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1167,
              "end": 1175,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1169,
                "end": 1175
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1181,
            "end": 1205,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1190,
              "end": 1196,
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1196,
              "end": 1204,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1198,
                "end": 1204
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1210,
            "end": 1235,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1219,
              "end": 1227,
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1227,
              "end": 1234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1229,
                "end": 1234,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1229,
                  "end": 1234,
                  "decorators": [],
                  "name": "Point",
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
        "start": 1106,
        "end": 1119,
        "decorators": [],
        "name": "ReadonlyShape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1239,
      "end": 1355,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1273,
        "end": 1355,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1279,
            "end": 1310,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1279,
              "end": 1309,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1288,
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ObjectExpression",
                  "start": 1290,
                  "end": 1308,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1292,
                      "end": 1306,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1292,
                        "end": 1296,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1298,
                        "end": 1306,
                        "raw": "\"circle\"",
                        "value": "circle"
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1279,
                "end": 1285,
                "decorators": [],
                "name": "assign",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1315,
            "end": 1353,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1315,
              "end": 1352,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1322,
                  "end": 1324,
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ObjectExpression",
                  "start": 1326,
                  "end": 1351,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1328,
                      "end": 1337,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1328,
                        "end": 1333,
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1335,
                        "end": 1337,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1339,
                      "end": 1349,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1339,
                        "end": 1345,
                        "decorators": [],
                        "name": "height",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1347,
                        "end": 1349,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1315,
                "end": 1321,
                "decorators": [],
                "name": "assign",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1248,
        "end": 1250,
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1251,
          "end": 1260,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1253,
            "end": 1260,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1255,
              "end": 1260,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1255,
                "end": 1260,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1262,
          "end": 1271,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1264,
            "end": 1271,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1266,
              "end": 1271,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1266,
                "end": 1271,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1357,
      "end": 1482,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1383,
        "end": 1482,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1389,
            "end": 1415,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1393,
                "end": 1414,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1393,
                  "end": 1414,
                  "decorators": [],
                  "name": "frozen",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1399,
                    "end": 1414,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1401,
                      "end": 1414,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1401,
                        "end": 1414,
                        "decorators": [],
                        "name": "ReadonlyShape",
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
            "start": 1420,
            "end": 1448,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1424,
                "end": 1447,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1424,
                  "end": 1447,
                  "decorators": [],
                  "name": "frozen",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1430,
                    "end": 1447,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1432,
                      "end": 1447,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1440,
                        "end": 1447,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1441,
                            "end": 1446,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1441,
                              "end": 1446,
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1432,
                        "end": 1440,
                        "decorators": [],
                        "name": "Readonly",
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
            "start": 1453,
            "end": 1480,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1457,
                "end": 1479,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1457,
                  "end": 1463,
                  "decorators": [],
                  "name": "frozen",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1466,
                  "end": 1479,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1473,
                      "end": 1478,
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1466,
                    "end": 1472,
                    "decorators": [],
                    "name": "freeze",
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
        "start": 1366,
        "end": 1368,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1369,
          "end": 1381,
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1374,
            "end": 1381,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1376,
              "end": 1381,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1376,
                "end": 1381,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1484,
      "end": 1615,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1510,
        "end": 1615,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1516,
            "end": 1542,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1520,
                "end": 1541,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1520,
                  "end": 1541,
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1527,
                    "end": 1541,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1529,
                      "end": 1541,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1529,
                        "end": 1541,
                        "decorators": [],
                        "name": "PartialShape",
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
            "start": 1547,
            "end": 1575,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1551,
                "end": 1574,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1551,
                  "end": 1574,
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1558,
                    "end": 1574,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1560,
                      "end": 1574,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1567,
                        "end": 1574,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1568,
                            "end": 1573,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1568,
                              "end": 1573,
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1560,
                        "end": 1567,
                        "decorators": [],
                        "name": "Partial",
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
            "start": 1580,
            "end": 1613,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1584,
                "end": 1612,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1584,
                  "end": 1607,
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1591,
                    "end": 1607,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1593,
                      "end": 1607,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1600,
                        "end": 1607,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1601,
                            "end": 1606,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1601,
                              "end": 1606,
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1593,
                        "end": 1600,
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1610,
                  "end": 1612,
                  "properties": []
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
        "start": 1493,
        "end": 1495,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1496,
          "end": 1508,
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1501,
            "end": 1508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1503,
              "end": 1508,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1503,
                "end": 1508,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1617,
      "end": 1731,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1643,
        "end": 1731,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1649,
            "end": 1691,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1655,
                "end": 1690,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1655,
                  "end": 1656,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1659,
                  "end": 1690,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1664,
                      "end": 1669,
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Literal",
                      "start": 1671,
                      "end": 1677,
                      "raw": "\"name\"",
                      "value": "name"
                    },
                    {
                      "type": "Literal",
                      "start": 1679,
                      "end": 1689,
                      "raw": "\"location\"",
                      "value": "location"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1659,
                    "end": 1663,
                    "decorators": [],
                    "name": "pick",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1626,
        "end": 1628,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1629,
          "end": 1641,
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1634,
            "end": 1641,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1636,
              "end": 1641,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1636,
                "end": 1641,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1733,
      "end": 1907,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1747,
        "end": 1907,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1753,
            "end": 1808,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1759,
                "end": 1807,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1759,
                  "end": 1762,
                  "decorators": [],
                  "name": "rec",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1765,
                  "end": 1807,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1767,
                      "end": 1779,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1767,
                        "end": 1770,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1772,
                        "end": 1779,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1781,
                      "end": 1793,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1781,
                        "end": 1784,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1786,
                        "end": 1793,
                        "raw": "\"world\"",
                        "value": "world"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1795,
                      "end": 1805,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1795,
                        "end": 1798,
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1800,
                        "end": 1805,
                        "raw": "\"bye\"",
                        "value": "bye"
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1813,
            "end": 1859,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1819,
                "end": 1858,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1819,
                  "end": 1826,
                  "decorators": [],
                  "name": "lengths",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1829,
                  "end": 1858,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1839,
                      "end": 1842,
                      "decorators": [],
                      "name": "rec",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1844,
                      "end": 1857,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 1849,
                        "end": 1857,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1849,
                          "end": 1850,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1851,
                          "end": 1857,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1844,
                          "end": 1845,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1829,
                    "end": 1838,
                    "decorators": [],
                    "name": "mapObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1742,
        "end": 1744,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1909,
      "end": 2018,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1935,
        "end": 2018,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1941,
            "end": 1966,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1947,
                "end": 1965,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1947,
                  "end": 1948,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1951,
                  "end": 1965,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1959,
                      "end": 1964,
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1951,
                    "end": 1958,
                    "decorators": [],
                    "name": "proxify",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1971,
            "end": 1995,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1975,
                "end": 1994,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1975,
                  "end": 1979,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1982,
                  "end": 1994,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1982,
                    "end": 1992,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1982,
                      "end": 1988,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1982,
                        "end": 1983,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1984,
                        "end": 1988,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1989,
                      "end": 1992,
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2000,
            "end": 2016,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2000,
              "end": 2015,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2012,
                  "end": 2014,
                  "raw": "42",
                  "value": 42
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2000,
                "end": 2011,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 2000,
                  "end": 2007,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2000,
                    "end": 2001,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2002,
                    "end": 2007,
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2008,
                  "end": 2011,
                  "decorators": [],
                  "name": "set",
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1918,
        "end": 1920,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1921,
          "end": 1933,
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1926,
            "end": 1933,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1928,
              "end": 1933,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1928,
                "end": 1933,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2020,
      "end": 2195,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2060,
        "end": 2195,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2066,
            "end": 2088,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2070,
                "end": 2087,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2070,
                  "end": 2074,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2077,
                  "end": 2087,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2077,
                    "end": 2082,
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2083,
                    "end": 2087,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2104,
            "end": 2134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2108,
                "end": 2133,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2108,
                  "end": 2116,
                  "decorators": [],
                  "name": "location",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2119,
                  "end": 2133,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2119,
                    "end": 2124,
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2125,
                    "end": 2133,
                    "decorators": [],
                    "name": "location",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2163,
            "end": 2182,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2167,
                "end": 2181,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2167,
                  "end": 2168,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2171,
                  "end": 2181,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2171,
                    "end": 2179,
                    "decorators": [],
                    "name": "location",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2180,
                    "end": 2181,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2029,
        "end": 2031,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2032,
          "end": 2058,
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2037,
            "end": 2058,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2039,
              "end": 2058,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2051,
                "end": 2058,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2052,
                    "end": 2057,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2052,
                      "end": 2057,
                      "decorators": [],
                      "name": "Shape",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2039,
                "end": 2051,
                "decorators": [],
                "name": "DeepReadonly",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
