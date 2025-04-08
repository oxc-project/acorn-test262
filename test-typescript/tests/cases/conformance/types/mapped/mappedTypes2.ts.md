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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 23,
        "name": "verifyLibTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 75,
                  "name": "x1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 65,
                      "end": 75,
                      "typeName": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 72,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 72,
                        "end": 75,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 73,
                            "end": 74,
                            "typeName": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 74,
                              "name": "T",
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
            "start": 81,
            "end": 115,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 85,
                "end": 114,
                "id": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 114,
                  "name": "x1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 89,
                      "end": 114,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 92,
                        "end": 104,
                        "name": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 93,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 97,
                          "end": 104,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 103,
                            "end": 104,
                            "typeName": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 104,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 108,
                        "end": 112,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 108,
                          "end": 109,
                          "typeName": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 109,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 110,
                          "end": 111,
                          "typeName": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 111,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": true,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 97,
                        "end": 104,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 104,
                          "typeName": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "start": 120,
            "end": 140,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 124,
                "end": 139,
                "id": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 139,
                  "name": "x2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 139,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 136,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 136,
                        "end": 139,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 137,
                            "end": 138,
                            "typeName": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 138,
                              "name": "T",
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
            "start": 145,
            "end": 187,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 149,
                "end": 186,
                "id": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 186,
                  "name": "x2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 153,
                      "end": 186,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 165,
                        "end": 177,
                        "name": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 170,
                          "end": 177,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 176,
                            "end": 177,
                            "typeName": {
                              "type": "Identifier",
                              "start": 176,
                              "end": 177,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 180,
                        "end": 184,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 180,
                          "end": 181,
                          "typeName": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 182,
                          "end": 183,
                          "typeName": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": true,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 170,
                        "end": 177,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 176,
                          "end": 177,
                          "typeName": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "start": 192,
            "end": 211,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 196,
                "end": 210,
                "id": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 210,
                  "name": "x3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 210,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 200,
                      "end": 210,
                      "typeName": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 204,
                        "name": "Pick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 204,
                        "end": 210,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 205,
                            "end": 206,
                            "typeName": {
                              "type": "Identifier",
                              "start": 205,
                              "end": 206,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 208,
                            "end": 209,
                            "typeName": {
                              "type": "Identifier",
                              "start": 208,
                              "end": 209,
                              "name": "K",
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
            "start": 216,
            "end": 243,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 220,
                "end": 242,
                "id": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 242,
                  "name": "x3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 224,
                      "end": 242,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 227,
                        "end": 233,
                        "name": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 228,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 232,
                          "end": 233,
                          "typeName": {
                            "type": "Identifier",
                            "start": 232,
                            "end": 233,
                            "name": "K",
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
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 236,
                        "end": 240,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 236,
                          "end": 237,
                          "typeName": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 237,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 238,
                          "end": 239,
                          "typeName": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 239,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 232,
                        "end": 233,
                        "typeName": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 233,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 228,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "start": 248,
            "end": 269,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 268,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 268,
                  "name": "x4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 254,
                    "end": 268,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 256,
                      "end": 268,
                      "typeName": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 262,
                        "name": "Record",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 262,
                        "end": 268,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 263,
                            "end": 264,
                            "typeName": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 264,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 266,
                            "end": 267,
                            "typeName": {
                              "type": "Identifier",
                              "start": 266,
                              "end": 267,
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 297,
                  "name": "x4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 280,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 282,
                      "end": 297,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 285,
                        "end": 291,
                        "name": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 286,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 290,
                          "end": 291,
                          "typeName": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 291,
                            "name": "K",
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
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 294,
                        "end": 295,
                        "typeName": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 290,
                        "end": 291,
                        "typeName": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 286,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
            "start": 27,
            "end": 44,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 37,
              "end": 44,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 302,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 312,
        "name": "Proxy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
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
          }
        ]
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
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 332,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 338,
            "end": 358,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 341,
              "name": "set",
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
                "start": 342,
                "end": 350,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 347,
                  "end": 350,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 349,
                    "end": 350,
                    "typeName": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 350,
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
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 362,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 374,
        "name": "Proxify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 380,
        "end": 416,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 387,
          "end": 399,
          "name": {
            "type": "Identifier",
            "start": 387,
            "end": 388,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 392,
            "end": 399,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 398,
              "end": 399,
              "typeName": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 402,
          "end": 413,
          "typeName": {
            "type": "Identifier",
            "start": 402,
            "end": 407,
            "name": "Proxy",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 407,
            "end": 413,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 408,
                "end": 412,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 408,
                  "end": 409,
                  "typeName": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 410,
                  "end": 411,
                  "typeName": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 392,
          "end": 399,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 398,
            "end": 399,
            "typeName": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 418,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 435,
        "name": "DeepReadonly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 441,
        "end": 493,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 457,
          "end": 469,
          "name": {
            "type": "Identifier",
            "start": 457,
            "end": 458,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 462,
            "end": 469,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 468,
              "end": 469,
              "typeName": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 472,
          "end": 490,
          "typeName": {
            "type": "Identifier",
            "start": 472,
            "end": 484,
            "name": "DeepReadonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 484,
            "end": 490,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 485,
                "end": 489,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 485,
                  "end": 486,
                  "typeName": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 486,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 487,
                  "end": 488,
                  "typeName": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 488,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 462,
          "end": 469,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 468,
            "end": 469,
            "typeName": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 457,
          "end": 458,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 496,
      "end": 556,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 519,
        "name": "assign",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 523,
          "end": 529,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 526,
            "end": 529,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 528,
              "end": 529,
              "typeName": {
                "type": "Identifier",
                "start": 528,
                "end": 529,
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
          "start": 531,
          "end": 548,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 536,
            "end": 548,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 538,
              "end": 548,
              "typeName": {
                "type": "Identifier",
                "start": 538,
                "end": 545,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 545,
                "end": 548,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 546,
                    "end": 547,
                    "typeName": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 547,
                      "name": "T",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 519,
        "end": 522,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 520,
            "end": 521,
            "name": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 549,
        "end": 555,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 551,
          "end": 555
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 557,
      "end": 605,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 580,
        "name": "freeze",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 584,
          "end": 590,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 587,
            "end": 590,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 589,
              "end": 590,
              "typeName": {
                "type": "Identifier",
                "start": 589,
                "end": 590,
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 580,
        "end": 583,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 581,
            "end": 582,
            "name": {
              "type": "Identifier",
              "start": 581,
              "end": 582,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 591,
        "end": 604,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 593,
          "end": 604,
          "typeName": {
            "type": "Identifier",
            "start": 593,
            "end": 601,
            "name": "Readonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 601,
            "end": 604,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 602,
                "end": 603,
                "typeName": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 603,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 606,
      "end": 684,
      "id": {
        "type": "Identifier",
        "start": 623,
        "end": 627,
        "name": "pick",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 650,
          "end": 656,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 653,
            "end": 656,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 655,
              "end": 656,
              "typeName": {
                "type": "Identifier",
                "start": 655,
                "end": 656,
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
          "type": "RestElement",
          "start": 658,
          "end": 670,
          "argument": {
            "type": "Identifier",
            "start": 661,
            "end": 665,
            "name": "keys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 668,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 627,
        "end": 649,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 628,
            "end": 629,
            "name": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
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
            "start": 631,
            "end": 648,
            "name": {
              "type": "Identifier",
              "start": 631,
              "end": 632,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 641,
              "end": 648,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 647,
                "end": 648,
                "typeName": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 648,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 671,
        "end": 683,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 673,
          "end": 683,
          "typeName": {
            "type": "Identifier",
            "start": 673,
            "end": 677,
            "name": "Pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 677,
            "end": 683,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 678,
                "end": 679,
                "typeName": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 681,
                "end": 682,
                "typeName": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 682,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 685,
      "end": 785,
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 711,
        "name": "mapObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 736,
          "end": 753,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 739,
            "end": 753,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 741,
              "end": 753,
              "typeName": {
                "type": "Identifier",
                "start": 741,
                "end": 747,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 747,
                "end": 753,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 748,
                    "end": 749,
                    "typeName": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 749,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 751,
                    "end": 752,
                    "typeName": {
                      "type": "Identifier",
                      "start": 751,
                      "end": 752,
                      "name": "T",
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
          "start": 755,
          "end": 769,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 756,
            "end": 769,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 758,
              "end": 769,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 759,
                  "end": 763,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 760,
                    "end": 763,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 762,
                      "end": 763,
                      "typeName": {
                        "type": "Identifier",
                        "start": 762,
                        "end": 763,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 768,
                    "end": 769,
                    "name": "U",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 711,
        "end": 735,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 712,
            "end": 728,
            "name": {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 722,
              "end": 728
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 730,
            "end": 731,
            "name": {
              "type": "Identifier",
              "start": 730,
              "end": 731,
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
            "start": 733,
            "end": 734,
            "name": {
              "type": "Identifier",
              "start": 733,
              "end": 734,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 770,
        "end": 784,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 772,
          "end": 784,
          "typeName": {
            "type": "Identifier",
            "start": 772,
            "end": 778,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 778,
            "end": 784,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 779,
                "end": 780,
                "typeName": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 780,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 782,
                "end": 783,
                "typeName": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 783,
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 786,
      "end": 834,
      "id": {
        "type": "Identifier",
        "start": 803,
        "end": 810,
        "name": "proxify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 814,
          "end": 820,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 817,
            "end": 820,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 819,
              "end": 820,
              "typeName": {
                "type": "Identifier",
                "start": 819,
                "end": 820,
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 810,
        "end": 813,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 811,
            "end": 812,
            "name": {
              "type": "Identifier",
              "start": 811,
              "end": 812,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 821,
        "end": 833,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 823,
          "end": 833,
          "typeName": {
            "type": "Identifier",
            "start": 823,
            "end": 830,
            "name": "Proxify",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 830,
            "end": 833,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 831,
                "end": 832,
                "typeName": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 836,
      "end": 885,
      "id": {
        "type": "Identifier",
        "start": 846,
        "end": 851,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 852,
        "end": 885,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 858,
            "end": 868,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 859,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 859,
              "end": 867,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 861,
                "end": 867
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 873,
            "end": 883,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 873,
              "end": 874,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 874,
              "end": 882,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 876,
                "end": 882
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
      "start": 887,
      "end": 984,
      "id": {
        "type": "Identifier",
        "start": 897,
        "end": 902,
        "name": "Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 903,
        "end": 984,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 909,
            "end": 922,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 909,
              "end": 913,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 913,
              "end": 921,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 915,
                "end": 921
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 927,
            "end": 941,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 927,
              "end": 932,
              "name": "width",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 932,
              "end": 940,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 934,
                "end": 940
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 946,
            "end": 961,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 946,
              "end": 952,
              "name": "height",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 952,
              "end": 960,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 954,
                "end": 960
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 966,
            "end": 982,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 966,
              "end": 974,
              "name": "location",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 974,
              "end": 981,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 976,
                "end": 981,
                "typeName": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 981,
                  "name": "Point",
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
      "type": "TSInterfaceDeclaration",
      "start": 986,
      "end": 1094,
      "id": {
        "type": "Identifier",
        "start": 996,
        "end": 1008,
        "name": "PartialShape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1009,
        "end": 1094,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1015,
            "end": 1029,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1015,
              "end": 1019,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1020,
              "end": 1028,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1022,
                "end": 1028
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1034,
            "end": 1049,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1034,
              "end": 1039,
              "name": "width",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1040,
              "end": 1048,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1042,
                "end": 1048
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1054,
            "end": 1070,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1054,
              "end": 1060,
              "name": "height",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1061,
              "end": 1069,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1063,
                "end": 1069
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1075,
            "end": 1092,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1075,
              "end": 1083,
              "name": "location",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1084,
              "end": 1091,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1086,
                "end": 1091,
                "typeName": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1091,
                  "name": "Point",
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
      "type": "TSInterfaceDeclaration",
      "start": 1096,
      "end": 1237,
      "id": {
        "type": "Identifier",
        "start": 1106,
        "end": 1119,
        "name": "ReadonlyShape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1120,
        "end": 1237,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1126,
            "end": 1148,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1135,
              "end": 1139,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1139,
              "end": 1147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1141,
                "end": 1147
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1153,
            "end": 1176,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1162,
              "end": 1167,
              "name": "width",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1167,
              "end": 1175,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1169,
                "end": 1175
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1181,
            "end": 1205,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1190,
              "end": 1196,
              "name": "height",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1196,
              "end": 1204,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1198,
                "end": 1204
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1210,
            "end": 1235,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1219,
              "end": 1227,
              "name": "location",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1227,
              "end": 1234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1229,
                "end": 1234,
                "typeName": {
                  "type": "Identifier",
                  "start": 1229,
                  "end": 1234,
                  "name": "Point",
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
      "type": "FunctionDeclaration",
      "start": 1239,
      "end": 1355,
      "id": {
        "type": "Identifier",
        "start": 1248,
        "end": 1250,
        "name": "f0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1251,
          "end": 1260,
          "name": "s1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1253,
            "end": 1260,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1255,
              "end": 1260,
              "typeName": {
                "type": "Identifier",
                "start": 1255,
                "end": 1260,
                "name": "Shape",
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
          "start": 1262,
          "end": 1271,
          "name": "s2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1264,
            "end": 1271,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1266,
              "end": 1271,
              "typeName": {
                "type": "Identifier",
                "start": 1266,
                "end": 1271,
                "name": "Shape",
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
      "body": {
        "type": "BlockStatement",
        "start": 1273,
        "end": 1355,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1279,
            "end": 1310,
            "expression": {
              "type": "CallExpression",
              "start": 1279,
              "end": 1309,
              "callee": {
                "type": "Identifier",
                "start": 1279,
                "end": 1285,
                "name": "assign",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1288,
                  "name": "s1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1292,
                        "end": 1296,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1298,
                        "end": 1306,
                        "value": "circle",
                        "raw": "\"circle\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1315,
            "end": 1353,
            "expression": {
              "type": "CallExpression",
              "start": 1315,
              "end": 1352,
              "callee": {
                "type": "Identifier",
                "start": 1315,
                "end": 1321,
                "name": "assign",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1322,
                  "end": 1324,
                  "name": "s2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1328,
                        "end": 1333,
                        "name": "width",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1335,
                        "end": 1337,
                        "value": 10,
                        "raw": "10"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1339,
                      "end": 1349,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1339,
                        "end": 1345,
                        "name": "height",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1347,
                        "end": 1349,
                        "value": 20,
                        "raw": "20"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1357,
      "end": 1482,
      "id": {
        "type": "Identifier",
        "start": 1366,
        "end": 1368,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1369,
          "end": 1381,
          "name": "shape",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1374,
            "end": 1381,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1376,
              "end": 1381,
              "typeName": {
                "type": "Identifier",
                "start": 1376,
                "end": 1381,
                "name": "Shape",
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
                "id": {
                  "type": "Identifier",
                  "start": 1393,
                  "end": 1414,
                  "name": "frozen",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1399,
                    "end": 1414,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1401,
                      "end": 1414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1401,
                        "end": 1414,
                        "name": "ReadonlyShape",
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
            "start": 1420,
            "end": 1448,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1424,
                "end": 1447,
                "id": {
                  "type": "Identifier",
                  "start": 1424,
                  "end": 1447,
                  "name": "frozen",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1430,
                    "end": 1447,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1432,
                      "end": 1447,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1432,
                        "end": 1440,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1440,
                        "end": 1447,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1441,
                            "end": 1446,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1441,
                              "end": 1446,
                              "name": "Shape",
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
            "start": 1453,
            "end": 1480,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1457,
                "end": 1479,
                "id": {
                  "type": "Identifier",
                  "start": 1457,
                  "end": 1463,
                  "name": "frozen",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1466,
                  "end": 1479,
                  "callee": {
                    "type": "Identifier",
                    "start": 1466,
                    "end": 1472,
                    "name": "freeze",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1473,
                      "end": 1478,
                      "name": "shape",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1484,
      "end": 1615,
      "id": {
        "type": "Identifier",
        "start": 1493,
        "end": 1495,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1496,
          "end": 1508,
          "name": "shape",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1501,
            "end": 1508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1503,
              "end": 1508,
              "typeName": {
                "type": "Identifier",
                "start": 1503,
                "end": 1508,
                "name": "Shape",
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
                "id": {
                  "type": "Identifier",
                  "start": 1520,
                  "end": 1541,
                  "name": "partial",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1527,
                    "end": 1541,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1529,
                      "end": 1541,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1529,
                        "end": 1541,
                        "name": "PartialShape",
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
            "start": 1547,
            "end": 1575,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1551,
                "end": 1574,
                "id": {
                  "type": "Identifier",
                  "start": 1551,
                  "end": 1574,
                  "name": "partial",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1558,
                    "end": 1574,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1560,
                      "end": 1574,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1560,
                        "end": 1567,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1567,
                        "end": 1574,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1568,
                            "end": 1573,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1568,
                              "end": 1573,
                              "name": "Shape",
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
            "start": 1580,
            "end": 1613,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1584,
                "end": 1612,
                "id": {
                  "type": "Identifier",
                  "start": 1584,
                  "end": 1607,
                  "name": "partial",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1591,
                    "end": 1607,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1593,
                      "end": 1607,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1593,
                        "end": 1600,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1600,
                        "end": 1607,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1601,
                            "end": 1606,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1601,
                              "end": 1606,
                              "name": "Shape",
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
                "init": {
                  "type": "ObjectExpression",
                  "start": 1610,
                  "end": 1612,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1617,
      "end": 1731,
      "id": {
        "type": "Identifier",
        "start": 1626,
        "end": 1628,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1629,
          "end": 1641,
          "name": "shape",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1634,
            "end": 1641,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1636,
              "end": 1641,
              "typeName": {
                "type": "Identifier",
                "start": 1636,
                "end": 1641,
                "name": "Shape",
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
                "id": {
                  "type": "Identifier",
                  "start": 1655,
                  "end": 1656,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1659,
                  "end": 1690,
                  "callee": {
                    "type": "Identifier",
                    "start": 1659,
                    "end": 1663,
                    "name": "pick",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1664,
                      "end": 1669,
                      "name": "shape",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 1671,
                      "end": 1677,
                      "value": "name",
                      "raw": "\"name\""
                    },
                    {
                      "type": "Literal",
                      "start": 1679,
                      "end": 1689,
                      "value": "location",
                      "raw": "\"location\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1733,
      "end": 1907,
      "id": {
        "type": "Identifier",
        "start": 1742,
        "end": 1744,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1759,
                  "end": 1762,
                  "name": "rec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1767,
                        "end": 1770,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1772,
                        "end": 1779,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1781,
                      "end": 1793,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1781,
                        "end": 1784,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1786,
                        "end": 1793,
                        "value": "world",
                        "raw": "\"world\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1795,
                      "end": 1805,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1795,
                        "end": 1798,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1800,
                        "end": 1805,
                        "value": "bye",
                        "raw": "\"bye\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1819,
                  "end": 1826,
                  "name": "lengths",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1829,
                  "end": 1858,
                  "callee": {
                    "type": "Identifier",
                    "start": 1829,
                    "end": 1838,
                    "name": "mapObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1839,
                      "end": 1842,
                      "name": "rec",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1844,
                      "end": 1857,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1844,
                          "end": 1845,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "MemberExpression",
                        "start": 1849,
                        "end": 1857,
                        "object": {
                          "type": "Identifier",
                          "start": 1849,
                          "end": 1850,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1851,
                          "end": 1857,
                          "name": "length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1909,
      "end": 2018,
      "id": {
        "type": "Identifier",
        "start": 1918,
        "end": 1920,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1921,
          "end": 1933,
          "name": "shape",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1926,
            "end": 1933,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1928,
              "end": 1933,
              "typeName": {
                "type": "Identifier",
                "start": 1928,
                "end": 1933,
                "name": "Shape",
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
                "id": {
                  "type": "Identifier",
                  "start": 1947,
                  "end": 1948,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1951,
                  "end": 1965,
                  "callee": {
                    "type": "Identifier",
                    "start": 1951,
                    "end": 1958,
                    "name": "proxify",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1959,
                      "end": 1964,
                      "name": "shape",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1975,
                  "end": 1979,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1982,
                  "end": 1994,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1982,
                    "end": 1992,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1982,
                      "end": 1988,
                      "object": {
                        "type": "Identifier",
                        "start": 1982,
                        "end": 1983,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1984,
                        "end": 1988,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1989,
                      "end": 1992,
                      "name": "get",
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
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2000,
            "end": 2016,
            "expression": {
              "type": "CallExpression",
              "start": 2000,
              "end": 2015,
              "callee": {
                "type": "MemberExpression",
                "start": 2000,
                "end": 2011,
                "object": {
                  "type": "MemberExpression",
                  "start": 2000,
                  "end": 2007,
                  "object": {
                    "type": "Identifier",
                    "start": 2000,
                    "end": 2001,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2002,
                    "end": 2007,
                    "name": "width",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2008,
                  "end": 2011,
                  "name": "set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2012,
                  "end": 2014,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2020,
      "end": 2195,
      "id": {
        "type": "Identifier",
        "start": 2029,
        "end": 2031,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2032,
          "end": 2058,
          "name": "shape",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2037,
            "end": 2058,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2039,
              "end": 2058,
              "typeName": {
                "type": "Identifier",
                "start": 2039,
                "end": 2051,
                "name": "DeepReadonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2051,
                "end": 2058,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2052,
                    "end": 2057,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2052,
                      "end": 2057,
                      "name": "Shape",
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
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 2070,
                  "end": 2074,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2077,
                  "end": 2087,
                  "object": {
                    "type": "Identifier",
                    "start": 2077,
                    "end": 2082,
                    "name": "shape",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2083,
                    "end": 2087,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2108,
                  "end": 2116,
                  "name": "location",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2119,
                  "end": 2133,
                  "object": {
                    "type": "Identifier",
                    "start": 2119,
                    "end": 2124,
                    "name": "shape",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2125,
                    "end": 2133,
                    "name": "location",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2167,
                  "end": 2168,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2171,
                  "end": 2181,
                  "object": {
                    "type": "Identifier",
                    "start": 2171,
                    "end": 2179,
                    "name": "location",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2180,
                    "end": 2181,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
