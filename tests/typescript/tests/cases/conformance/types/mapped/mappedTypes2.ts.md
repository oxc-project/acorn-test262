__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "verifyLibTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 44
                },
                "typeArguments": null,
                "start": 43,
                "end": 44
              },
              "start": 37,
              "end": 44
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 44
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 46,
            "end": 47
          }
        ],
        "start": 23,
        "end": 48
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 65,
                        "end": 72
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 73,
                              "end": 74
                            },
                            "typeArguments": null,
                            "start": 73,
                            "end": 74
                          }
                        ],
                        "start": 72,
                        "end": 75
                      },
                      "start": 65,
                      "end": 75
                    },
                    "start": 63,
                    "end": 75
                  },
                  "start": 61,
                  "end": 75
                },
                "init": null,
                "definite": false,
                "start": 61,
                "end": 75
              }
            ],
            "declare": false,
            "start": 57,
            "end": 76
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 93
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 103,
                            "end": 104
                          },
                          "typeArguments": null,
                          "start": 103,
                          "end": 104
                        },
                        "start": 97,
                        "end": 104
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 108,
                            "end": 109
                          },
                          "typeArguments": null,
                          "start": 108,
                          "end": 109
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 110,
                            "end": 111
                          },
                          "typeArguments": null,
                          "start": 110,
                          "end": 111
                        },
                        "start": 108,
                        "end": 112
                      },
                      "optional": true,
                      "readonly": null,
                      "start": 89,
                      "end": 114
                    },
                    "start": 87,
                    "end": 114
                  },
                  "start": 85,
                  "end": 114
                },
                "init": null,
                "definite": false,
                "start": 85,
                "end": 114
              }
            ],
            "declare": false,
            "start": 81,
            "end": 115
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 136
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 137,
                              "end": 138
                            },
                            "typeArguments": null,
                            "start": 137,
                            "end": 138
                          }
                        ],
                        "start": 136,
                        "end": 139
                      },
                      "start": 128,
                      "end": 139
                    },
                    "start": 126,
                    "end": 139
                  },
                  "start": 124,
                  "end": 139
                },
                "init": null,
                "definite": false,
                "start": 124,
                "end": 139
              }
            ],
            "declare": false,
            "start": 120,
            "end": 140
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 166
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 176,
                            "end": 177
                          },
                          "typeArguments": null,
                          "start": 176,
                          "end": 177
                        },
                        "start": 170,
                        "end": 177
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 181
                          },
                          "typeArguments": null,
                          "start": 180,
                          "end": 181
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 183
                          },
                          "typeArguments": null,
                          "start": 182,
                          "end": 183
                        },
                        "start": 180,
                        "end": 184
                      },
                      "optional": false,
                      "readonly": true,
                      "start": 153,
                      "end": 186
                    },
                    "start": 151,
                    "end": 186
                  },
                  "start": 149,
                  "end": 186
                },
                "init": null,
                "definite": false,
                "start": 149,
                "end": 186
              }
            ],
            "declare": false,
            "start": 145,
            "end": 187
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 204
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 205,
                              "end": 206
                            },
                            "typeArguments": null,
                            "start": 205,
                            "end": 206
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 208,
                              "end": 209
                            },
                            "typeArguments": null,
                            "start": 208,
                            "end": 209
                          }
                        ],
                        "start": 204,
                        "end": 210
                      },
                      "start": 200,
                      "end": 210
                    },
                    "start": 198,
                    "end": 210
                  },
                  "start": 196,
                  "end": 210
                },
                "init": null,
                "definite": false,
                "start": 196,
                "end": 210
              }
            ],
            "declare": false,
            "start": 192,
            "end": 211
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 227,
                        "end": 228
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 233
                        },
                        "typeArguments": null,
                        "start": 232,
                        "end": 233
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 237
                          },
                          "typeArguments": null,
                          "start": 236,
                          "end": 237
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 238,
                            "end": 239
                          },
                          "typeArguments": null,
                          "start": 238,
                          "end": 239
                        },
                        "start": 236,
                        "end": 240
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 224,
                      "end": 242
                    },
                    "start": 222,
                    "end": 242
                  },
                  "start": 220,
                  "end": 242
                },
                "init": null,
                "definite": false,
                "start": 220,
                "end": 242
              }
            ],
            "declare": false,
            "start": 216,
            "end": 243
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 262
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 263,
                              "end": 264
                            },
                            "typeArguments": null,
                            "start": 263,
                            "end": 264
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 266,
                              "end": 267
                            },
                            "typeArguments": null,
                            "start": 266,
                            "end": 267
                          }
                        ],
                        "start": 262,
                        "end": 268
                      },
                      "start": 256,
                      "end": 268
                    },
                    "start": 254,
                    "end": 268
                  },
                  "start": 252,
                  "end": 268
                },
                "init": null,
                "definite": false,
                "start": 252,
                "end": 268
              }
            ],
            "declare": false,
            "start": 248,
            "end": 269
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 286
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 291
                        },
                        "typeArguments": null,
                        "start": 290,
                        "end": 291
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 295
                        },
                        "typeArguments": null,
                        "start": 294,
                        "end": 295
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 282,
                      "end": 297
                    },
                    "start": 280,
                    "end": 297
                  },
                  "start": 278,
                  "end": 297
                },
                "init": null,
                "definite": false,
                "start": 278,
                "end": 297
              }
            ],
            "declare": false,
            "start": 274,
            "end": 298
          }
        ],
        "start": 51,
        "end": 300
      },
      "expression": false,
      "start": 0,
      "end": 300
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Proxy",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 312
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 314
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 314
          }
        ],
        "start": 312,
        "end": 315
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 327
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 332
                },
                "typeArguments": null,
                "start": 331,
                "end": 332
              },
              "start": 329,
              "end": 332
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 324,
            "end": 333
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 341
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 350
                    },
                    "typeArguments": null,
                    "start": 349,
                    "end": 350
                  },
                  "start": 347,
                  "end": 350
                },
                "start": 342,
                "end": 350
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 353,
                "end": 357
              },
              "start": 351,
              "end": 357
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 338,
            "end": 358
          }
        ],
        "start": 318,
        "end": 360
      },
      "declare": false,
      "start": 302,
      "end": 360
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Proxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 374
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 375,
            "end": 376
          }
        ],
        "start": 374,
        "end": 377
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 388
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "typeArguments": null,
            "start": 398,
            "end": 399
          },
          "start": 392,
          "end": 399
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Proxy",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 407
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 408,
                    "end": 409
                  },
                  "typeArguments": null,
                  "start": 408,
                  "end": 409
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 411
                  },
                  "typeArguments": null,
                  "start": 410,
                  "end": 411
                },
                "start": 408,
                "end": 412
              }
            ],
            "start": 407,
            "end": 413
          },
          "start": 402,
          "end": 413
        },
        "optional": false,
        "readonly": null,
        "start": 380,
        "end": 416
      },
      "declare": false,
      "start": 362,
      "end": 416
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 435
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 437
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 436,
            "end": 437
          }
        ],
        "start": 435,
        "end": 438
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 457,
          "end": 458
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 469
            },
            "typeArguments": null,
            "start": 468,
            "end": 469
          },
          "start": 462,
          "end": 469
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepReadonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 472,
            "end": 484
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 486
                  },
                  "typeArguments": null,
                  "start": 485,
                  "end": 486
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 488
                  },
                  "typeArguments": null,
                  "start": 487,
                  "end": 488
                },
                "start": 485,
                "end": 489
              }
            ],
            "start": 484,
            "end": 490
          },
          "start": 472,
          "end": 490
        },
        "optional": false,
        "readonly": true,
        "start": 441,
        "end": 493
      },
      "declare": false,
      "start": 418,
      "end": 494
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assign",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 519
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 521
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 520,
            "end": 521
          }
        ],
        "start": 519,
        "end": 522
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 529
              },
              "typeArguments": null,
              "start": 528,
              "end": 529
            },
            "start": 526,
            "end": 529
          },
          "start": 523,
          "end": 529
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 545
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 546,
                      "end": 547
                    },
                    "typeArguments": null,
                    "start": 546,
                    "end": 547
                  }
                ],
                "start": 545,
                "end": 548
              },
              "start": 538,
              "end": 548
            },
            "start": 536,
            "end": 548
          },
          "start": 531,
          "end": 548
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 551,
          "end": 555
        },
        "start": 549,
        "end": 555
      },
      "body": null,
      "expression": false,
      "start": 496,
      "end": 556
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "freeze",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 580
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 582
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 581,
            "end": 582
          }
        ],
        "start": 580,
        "end": 583
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 590
              },
              "typeArguments": null,
              "start": 589,
              "end": 590
            },
            "start": 587,
            "end": 590
          },
          "start": 584,
          "end": 590
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 601
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 603
                },
                "typeArguments": null,
                "start": 602,
                "end": 603
              }
            ],
            "start": 601,
            "end": 604
          },
          "start": 593,
          "end": 604
        },
        "start": 591,
        "end": 604
      },
      "body": null,
      "expression": false,
      "start": 557,
      "end": 605
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pick",
        "optional": false,
        "typeAnnotation": null,
        "start": 623,
        "end": 627
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 629
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 628,
            "end": 629
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 632
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 648
                },
                "typeArguments": null,
                "start": 647,
                "end": 648
              },
              "start": 641,
              "end": 648
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 631,
            "end": 648
          }
        ],
        "start": 627,
        "end": 649
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 655,
                "end": 656
              },
              "typeArguments": null,
              "start": 655,
              "end": 656
            },
            "start": 653,
            "end": 656
          },
          "start": 650,
          "end": 656
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 665
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 668
                },
                "typeArguments": null,
                "start": 667,
                "end": 668
              },
              "start": 667,
              "end": 670
            },
            "start": 665,
            "end": 670
          },
          "value": null,
          "start": 658,
          "end": 670
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 673,
            "end": 677
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 679
                },
                "typeArguments": null,
                "start": 678,
                "end": 679
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 681,
                  "end": 682
                },
                "typeArguments": null,
                "start": 681,
                "end": 682
              }
            ],
            "start": 677,
            "end": 683
          },
          "start": 673,
          "end": 683
        },
        "start": 671,
        "end": 683
      },
      "body": null,
      "expression": false,
      "start": 606,
      "end": 684
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
        "end": 711
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 713
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 722,
              "end": 728
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 712,
            "end": 728
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 731
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 730,
            "end": 731
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 734
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 733,
            "end": 734
          }
        ],
        "start": 711,
        "end": 735
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 747
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 749
                    },
                    "typeArguments": null,
                    "start": 748,
                    "end": 749
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 751,
                      "end": 752
                    },
                    "typeArguments": null,
                    "start": 751,
                    "end": 752
                  }
                ],
                "start": 747,
                "end": 753
              },
              "start": 741,
              "end": 753
            },
            "start": 739,
            "end": 753
          },
          "start": 736,
          "end": 753
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 762,
                        "end": 763
                      },
                      "typeArguments": null,
                      "start": 762,
                      "end": 763
                    },
                    "start": 760,
                    "end": 763
                  },
                  "start": 759,
                  "end": 763
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 768,
                    "end": 769
                  },
                  "typeArguments": null,
                  "start": 768,
                  "end": 769
                },
                "start": 765,
                "end": 769
              },
              "start": 758,
              "end": 769
            },
            "start": 756,
            "end": 769
          },
          "start": 755,
          "end": 769
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 778
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 779,
                  "end": 780
                },
                "typeArguments": null,
                "start": 779,
                "end": 780
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 783
                },
                "typeArguments": null,
                "start": 782,
                "end": 783
              }
            ],
            "start": 778,
            "end": 784
          },
          "start": 772,
          "end": 784
        },
        "start": 770,
        "end": 784
      },
      "body": null,
      "expression": false,
      "start": 685,
      "end": 785
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "proxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 803,
        "end": 810
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 812
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 811,
            "end": 812
          }
        ],
        "start": 810,
        "end": 813
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 820
              },
              "typeArguments": null,
              "start": 819,
              "end": 820
            },
            "start": 817,
            "end": 820
          },
          "start": 814,
          "end": 820
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Proxify",
            "optional": false,
            "typeAnnotation": null,
            "start": 823,
            "end": 830
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 831,
                  "end": 832
                },
                "typeArguments": null,
                "start": 831,
                "end": 832
              }
            ],
            "start": 830,
            "end": 833
          },
          "start": 823,
          "end": 833
        },
        "start": 821,
        "end": 833
      },
      "body": null,
      "expression": false,
      "start": 786,
      "end": 834
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 851
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 859
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 861,
                "end": 867
              },
              "start": 859,
              "end": 867
            },
            "accessibility": null,
            "static": false,
            "start": 858,
            "end": 868
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 874
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 876,
                "end": 882
              },
              "start": 874,
              "end": 882
            },
            "accessibility": null,
            "static": false,
            "start": 873,
            "end": 883
          }
        ],
        "start": 852,
        "end": 885
      },
      "declare": false,
      "start": 836,
      "end": 885
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 902
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 913
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 915,
                "end": 921
              },
              "start": 913,
              "end": 921
            },
            "accessibility": null,
            "static": false,
            "start": 909,
            "end": 922
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 934,
                "end": 940
              },
              "start": 932,
              "end": 940
            },
            "accessibility": null,
            "static": false,
            "start": 927,
            "end": 941
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 952
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 954,
                "end": 960
              },
              "start": 952,
              "end": 960
            },
            "accessibility": null,
            "static": false,
            "start": 946,
            "end": 961
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 974
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 981
                },
                "typeArguments": null,
                "start": 976,
                "end": 981
              },
              "start": 974,
              "end": 981
            },
            "accessibility": null,
            "static": false,
            "start": 966,
            "end": 982
          }
        ],
        "start": 903,
        "end": 984
      },
      "declare": false,
      "start": 887,
      "end": 984
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PartialShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 996,
        "end": 1008
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1019
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1022,
                "end": 1028
              },
              "start": 1020,
              "end": 1028
            },
            "accessibility": null,
            "static": false,
            "start": 1015,
            "end": 1029
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1039
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1042,
                "end": 1048
              },
              "start": 1040,
              "end": 1048
            },
            "accessibility": null,
            "static": false,
            "start": 1034,
            "end": 1049
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 1054,
              "end": 1060
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1063,
                "end": 1069
              },
              "start": 1061,
              "end": 1069
            },
            "accessibility": null,
            "static": false,
            "start": 1054,
            "end": 1070
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null,
              "start": 1075,
              "end": 1083
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1091
                },
                "typeArguments": null,
                "start": 1086,
                "end": 1091
              },
              "start": 1084,
              "end": 1091
            },
            "accessibility": null,
            "static": false,
            "start": 1075,
            "end": 1092
          }
        ],
        "start": 1009,
        "end": 1094
      },
      "declare": false,
      "start": 986,
      "end": 1094
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadonlyShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1106,
        "end": 1119
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1141,
                "end": 1147
              },
              "start": 1139,
              "end": 1147
            },
            "accessibility": null,
            "static": false,
            "start": 1126,
            "end": 1148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 1162,
              "end": 1167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1169,
                "end": 1175
              },
              "start": 1167,
              "end": 1175
            },
            "accessibility": null,
            "static": false,
            "start": 1153,
            "end": 1176
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 1190,
              "end": 1196
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1198,
                "end": 1204
              },
              "start": 1196,
              "end": 1204
            },
            "accessibility": null,
            "static": false,
            "start": 1181,
            "end": 1205
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null,
              "start": 1219,
              "end": 1227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1229,
                  "end": 1234
                },
                "typeArguments": null,
                "start": 1229,
                "end": 1234
              },
              "start": 1227,
              "end": 1234
            },
            "accessibility": null,
            "static": false,
            "start": 1210,
            "end": 1235
          }
        ],
        "start": 1120,
        "end": 1237
      },
      "declare": false,
      "start": 1096,
      "end": 1237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1248,
        "end": 1250
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1260
              },
              "typeArguments": null,
              "start": 1255,
              "end": 1260
            },
            "start": 1253,
            "end": 1260
          },
          "start": 1251,
          "end": 1260
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1266,
                "end": 1271
              },
              "typeArguments": null,
              "start": 1266,
              "end": 1271
            },
            "start": 1264,
            "end": 1271
          },
          "start": 1262,
          "end": 1271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assign",
                "optional": false,
                "typeAnnotation": null,
                "start": 1279,
                "end": 1285
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1286,
                  "end": 1288
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1292,
                        "end": 1296
                      },
                      "value": {
                        "type": "Literal",
                        "value": "circle",
                        "raw": "\"circle\"",
                        "start": 1298,
                        "end": 1306
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1292,
                      "end": 1306
                    }
                  ],
                  "start": 1290,
                  "end": 1308
                }
              ],
              "optional": false,
              "start": 1279,
              "end": 1309
            },
            "directive": null,
            "start": 1279,
            "end": 1310
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assign",
                "optional": false,
                "typeAnnotation": null,
                "start": 1315,
                "end": 1321
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1322,
                  "end": 1324
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1328,
                        "end": 1333
                      },
                      "value": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1335,
                        "end": 1337
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1328,
                      "end": 1337
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "height",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1339,
                        "end": 1345
                      },
                      "value": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 1347,
                        "end": 1349
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1339,
                      "end": 1349
                    }
                  ],
                  "start": 1326,
                  "end": 1351
                }
              ],
              "optional": false,
              "start": 1315,
              "end": 1352
            },
            "directive": null,
            "start": 1315,
            "end": 1353
          }
        ],
        "start": 1273,
        "end": 1355
      },
      "expression": false,
      "start": 1239,
      "end": 1355
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1366,
        "end": 1368
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1381
              },
              "typeArguments": null,
              "start": 1376,
              "end": 1381
            },
            "start": 1374,
            "end": 1381
          },
          "start": 1369,
          "end": 1381
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "frozen",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyShape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1401,
                        "end": 1414
                      },
                      "typeArguments": null,
                      "start": 1401,
                      "end": 1414
                    },
                    "start": 1399,
                    "end": 1414
                  },
                  "start": 1393,
                  "end": 1414
                },
                "init": null,
                "definite": false,
                "start": 1393,
                "end": 1414
              }
            ],
            "declare": false,
            "start": 1389,
            "end": 1415
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "frozen",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1432,
                        "end": 1440
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1441,
                              "end": 1446
                            },
                            "typeArguments": null,
                            "start": 1441,
                            "end": 1446
                          }
                        ],
                        "start": 1440,
                        "end": 1447
                      },
                      "start": 1432,
                      "end": 1447
                    },
                    "start": 1430,
                    "end": 1447
                  },
                  "start": 1424,
                  "end": 1447
                },
                "init": null,
                "definite": false,
                "start": 1424,
                "end": 1447
              }
            ],
            "declare": false,
            "start": 1420,
            "end": 1448
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "frozen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1463
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "freeze",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1466,
                    "end": 1472
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1473,
                      "end": 1478
                    }
                  ],
                  "optional": false,
                  "start": 1466,
                  "end": 1479
                },
                "definite": false,
                "start": 1457,
                "end": 1479
              }
            ],
            "declare": false,
            "start": 1453,
            "end": 1480
          }
        ],
        "start": 1383,
        "end": 1482
      },
      "expression": false,
      "start": 1357,
      "end": 1482
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1493,
        "end": 1495
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1503,
                "end": 1508
              },
              "typeArguments": null,
              "start": 1503,
              "end": 1508
            },
            "start": 1501,
            "end": 1508
          },
          "start": 1496,
          "end": 1508
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PartialShape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1529,
                        "end": 1541
                      },
                      "typeArguments": null,
                      "start": 1529,
                      "end": 1541
                    },
                    "start": 1527,
                    "end": 1541
                  },
                  "start": 1520,
                  "end": 1541
                },
                "init": null,
                "definite": false,
                "start": 1520,
                "end": 1541
              }
            ],
            "declare": false,
            "start": 1516,
            "end": 1542
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1560,
                        "end": 1567
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1568,
                              "end": 1573
                            },
                            "typeArguments": null,
                            "start": 1568,
                            "end": 1573
                          }
                        ],
                        "start": 1567,
                        "end": 1574
                      },
                      "start": 1560,
                      "end": 1574
                    },
                    "start": 1558,
                    "end": 1574
                  },
                  "start": 1551,
                  "end": 1574
                },
                "init": null,
                "definite": false,
                "start": 1551,
                "end": 1574
              }
            ],
            "declare": false,
            "start": 1547,
            "end": 1575
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1593,
                        "end": 1600
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1601,
                              "end": 1606
                            },
                            "typeArguments": null,
                            "start": 1601,
                            "end": 1606
                          }
                        ],
                        "start": 1600,
                        "end": 1607
                      },
                      "start": 1593,
                      "end": 1607
                    },
                    "start": 1591,
                    "end": 1607
                  },
                  "start": 1584,
                  "end": 1607
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1610,
                  "end": 1612
                },
                "definite": false,
                "start": 1584,
                "end": 1612
              }
            ],
            "declare": false,
            "start": 1580,
            "end": 1613
          }
        ],
        "start": 1510,
        "end": 1615
      },
      "expression": false,
      "start": 1484,
      "end": 1615
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1626,
        "end": 1628
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1641
              },
              "typeArguments": null,
              "start": 1636,
              "end": 1641
            },
            "start": 1634,
            "end": 1641
          },
          "start": 1629,
          "end": 1641
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1655,
                  "end": 1656
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pick",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1659,
                    "end": 1663
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1664,
                      "end": 1669
                    },
                    {
                      "type": "Literal",
                      "value": "name",
                      "raw": "\"name\"",
                      "start": 1671,
                      "end": 1677
                    },
                    {
                      "type": "Literal",
                      "value": "location",
                      "raw": "\"location\"",
                      "start": 1679,
                      "end": 1689
                    }
                  ],
                  "optional": false,
                  "start": 1659,
                  "end": 1690
                },
                "definite": false,
                "start": 1655,
                "end": 1690
              }
            ],
            "declare": false,
            "start": 1649,
            "end": 1691
          }
        ],
        "start": 1643,
        "end": 1731
      },
      "expression": false,
      "start": 1617,
      "end": 1731
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1742,
        "end": 1744
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1759,
                  "end": 1762
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1767,
                        "end": 1770
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 1772,
                        "end": 1779
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1767,
                      "end": 1779
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1781,
                        "end": 1784
                      },
                      "value": {
                        "type": "Literal",
                        "value": "world",
                        "raw": "\"world\"",
                        "start": 1786,
                        "end": 1793
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1781,
                      "end": 1793
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1795,
                        "end": 1798
                      },
                      "value": {
                        "type": "Literal",
                        "value": "bye",
                        "raw": "\"bye\"",
                        "start": 1800,
                        "end": 1805
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1795,
                      "end": 1805
                    }
                  ],
                  "start": 1765,
                  "end": 1807
                },
                "definite": false,
                "start": 1759,
                "end": 1807
              }
            ],
            "declare": false,
            "start": 1753,
            "end": 1808
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lengths",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1819,
                  "end": 1826
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1829,
                    "end": 1838
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1839,
                      "end": 1842
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1844,
                          "end": 1845
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1849,
                          "end": 1850
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1851,
                          "end": 1857
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1849,
                        "end": 1857
                      },
                      "id": null,
                      "generator": false,
                      "start": 1844,
                      "end": 1857
                    }
                  ],
                  "optional": false,
                  "start": 1829,
                  "end": 1858
                },
                "definite": false,
                "start": 1819,
                "end": 1858
              }
            ],
            "declare": false,
            "start": 1813,
            "end": 1859
          }
        ],
        "start": 1747,
        "end": 1907
      },
      "expression": false,
      "start": 1733,
      "end": 1907
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1918,
        "end": 1920
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1928,
                "end": 1933
              },
              "typeArguments": null,
              "start": 1928,
              "end": 1933
            },
            "start": 1926,
            "end": 1933
          },
          "start": 1921,
          "end": 1933
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1948
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "proxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1951,
                    "end": 1958
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1959,
                      "end": 1964
                    }
                  ],
                  "optional": false,
                  "start": 1951,
                  "end": 1965
                },
                "definite": false,
                "start": 1947,
                "end": 1965
              }
            ],
            "declare": false,
            "start": 1941,
            "end": 1966
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1975,
                  "end": 1979
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1982,
                        "end": 1983
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1984,
                        "end": 1988
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1982,
                      "end": 1988
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1989,
                      "end": 1992
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1982,
                    "end": 1992
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1982,
                  "end": 1994
                },
                "definite": false,
                "start": 1975,
                "end": 1994
              }
            ],
            "declare": false,
            "start": 1971,
            "end": 1995
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2000,
                    "end": 2001
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2002,
                    "end": 2007
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2000,
                  "end": 2007
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2008,
                  "end": 2011
                },
                "optional": false,
                "computed": false,
                "start": 2000,
                "end": 2011
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2012,
                  "end": 2014
                }
              ],
              "optional": false,
              "start": 2000,
              "end": 2015
            },
            "directive": null,
            "start": 2000,
            "end": 2016
          }
        ],
        "start": 1935,
        "end": 2018
      },
      "expression": false,
      "start": 1909,
      "end": 2018
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2031
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepReadonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2039,
                "end": 2051
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2052,
                      "end": 2057
                    },
                    "typeArguments": null,
                    "start": 2052,
                    "end": 2057
                  }
                ],
                "start": 2051,
                "end": 2058
              },
              "start": 2039,
              "end": 2058
            },
            "start": 2037,
            "end": 2058
          },
          "start": 2032,
          "end": 2058
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2070,
                  "end": 2074
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2077,
                    "end": 2082
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2083,
                    "end": 2087
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2077,
                  "end": 2087
                },
                "definite": false,
                "start": 2070,
                "end": 2087
              }
            ],
            "declare": false,
            "start": 2066,
            "end": 2088
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "location",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2108,
                  "end": 2116
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2119,
                    "end": 2124
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "location",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2125,
                    "end": 2133
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2119,
                  "end": 2133
                },
                "definite": false,
                "start": 2108,
                "end": 2133
              }
            ],
            "declare": false,
            "start": 2104,
            "end": 2134
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2167,
                  "end": 2168
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "location",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2171,
                    "end": 2179
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2180,
                    "end": 2181
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2171,
                  "end": 2181
                },
                "definite": false,
                "start": 2167,
                "end": 2181
              }
            ],
            "declare": false,
            "start": 2163,
            "end": 2182
          }
        ],
        "start": 2060,
        "end": 2195
      },
      "expression": false,
      "start": 2020,
      "end": 2195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2195
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "verifyLibTypes",
    "start": 9,
    "end": 23,
    "range": [
      9,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 29,
    "end": 36,
    "range": [
      29,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 37,
    "end": 42,
    "range": [
      37,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 61,
    "end": 63,
    "range": [
      61,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 65,
    "end": 72,
    "range": [
      65,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84,
    "range": [
      81,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 85,
    "end": 87,
    "range": [
      85,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 94,
    "end": 96,
    "range": [
      94,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 97,
    "end": 102,
    "range": [
      97,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123,
    "range": [
      120,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 124,
    "end": 126,
    "range": [
      124,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 128,
    "end": 136,
    "range": [
      128,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 145,
    "end": 148,
    "range": [
      145,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 155,
    "end": 163,
    "range": [
      155,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 167,
    "end": 169,
    "range": [
      167,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 170,
    "end": 175,
    "range": [
      170,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 192,
    "end": 195,
    "range": [
      192,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 196,
    "end": 198,
    "range": [
      196,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 200,
    "end": 204,
    "range": [
      200,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 216,
    "end": 219,
    "range": [
      216,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 229,
    "end": 231,
    "range": [
      229,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 252,
    "end": 254,
    "range": [
      252,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 256,
    "end": 262,
    "range": [
      256,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 278,
    "end": 280,
    "range": [
      278,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 287,
    "end": 289,
    "range": [
      287,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 302,
    "end": 306,
    "range": [
      302,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 307,
    "end": 312,
    "range": [
      307,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 324,
    "end": 327,
    "range": [
      324,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 338,
    "end": 341,
    "range": [
      338,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 342,
    "end": 347,
    "range": [
      342,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 353,
    "end": 357,
    "range": [
      353,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 362,
    "end": 366,
    "range": [
      362,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxify",
    "start": 367,
    "end": 374,
    "range": [
      367,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 389,
    "end": 391,
    "range": [
      389,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 392,
    "end": 397,
    "range": [
      392,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 402,
    "end": 407,
    "range": [
      402,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 418,
    "end": 422,
    "range": [
      418,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepReadonly",
    "start": 423,
    "end": 435,
    "range": [
      423,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 447,
    "end": 455,
    "range": [
      447,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 459,
    "end": 461,
    "range": [
      459,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 462,
    "end": 467,
    "range": [
      462,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepReadonly",
    "start": 472,
    "end": 484,
    "range": [
      472,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 496,
    "end": 503,
    "range": [
      496,
      503
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 504,
    "end": 512,
    "range": [
      504,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 513,
    "end": 519,
    "range": [
      513,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 523,
    "end": 526,
    "range": [
      523,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 531,
    "end": 536,
    "range": [
      531,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 538,
    "end": 545,
    "range": [
      538,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 551,
    "end": 555,
    "range": [
      551,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 557,
    "end": 564,
    "range": [
      557,
      564
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 565,
    "end": 573,
    "range": [
      565,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 574,
    "end": 580,
    "range": [
      574,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 584,
    "end": 587,
    "range": [
      584,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 593,
    "end": 601,
    "range": [
      593,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 606,
    "end": 613,
    "range": [
      606,
      613
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 614,
    "end": 622,
    "range": [
      614,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "pick",
    "start": 623,
    "end": 627,
    "range": [
      623,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 633,
    "end": 640,
    "range": [
      633,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 641,
    "end": 646,
    "range": [
      641,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 650,
    "end": 653,
    "range": [
      650,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 658,
    "end": 661,
    "range": [
      658,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 661,
    "end": 665,
    "range": [
      661,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 673,
    "end": 677,
    "range": [
      673,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 685,
    "end": 692,
    "range": [
      685,
      692
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 693,
    "end": 701,
    "range": [
      693,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "mapObject",
    "start": 702,
    "end": 711,
    "range": [
      702,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 714,
    "end": 721,
    "range": [
      714,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 722,
    "end": 728,
    "range": [
      722,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 736,
    "end": 739,
    "range": [
      736,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 741,
    "end": 747,
    "range": [
      741,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 765,
    "end": 767,
    "range": [
      765,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 772,
    "end": 778,
    "range": [
      772,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 786,
    "end": 793,
    "range": [
      786,
      793
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 794,
    "end": 802,
    "range": [
      794,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "proxify",
    "start": 803,
    "end": 810,
    "range": [
      803,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 814,
    "end": 817,
    "range": [
      814,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxify",
    "start": 823,
    "end": 830,
    "range": [
      823,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 836,
    "end": 845,
    "range": [
      836,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 846,
    "end": 851,
    "range": [
      846,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 861,
    "end": 867,
    "range": [
      861,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 876,
    "end": 882,
    "range": [
      876,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 887,
    "end": 896,
    "range": [
      887,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 897,
    "end": 902,
    "range": [
      897,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 909,
    "end": 913,
    "range": [
      909,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 915,
    "end": 921,
    "range": [
      915,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 927,
    "end": 932,
    "range": [
      927,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 934,
    "end": 940,
    "range": [
      934,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 946,
    "end": 952,
    "range": [
      946,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 954,
    "end": 960,
    "range": [
      954,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 966,
    "end": 974,
    "range": [
      966,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 976,
    "end": 981,
    "range": [
      976,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 986,
    "end": 995,
    "range": [
      986,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "PartialShape",
    "start": 996,
    "end": 1008,
    "range": [
      996,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1015,
    "end": 1019,
    "range": [
      1015,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1022,
    "end": 1028,
    "range": [
      1022,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 1034,
    "end": 1039,
    "range": [
      1034,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1042,
    "end": 1048,
    "range": [
      1042,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 1054,
    "end": 1060,
    "range": [
      1054,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1063,
    "end": 1069,
    "range": [
      1063,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 1075,
    "end": 1083,
    "range": [
      1075,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1086,
    "end": 1091,
    "range": [
      1086,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1096,
    "end": 1105,
    "range": [
      1096,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyShape",
    "start": 1106,
    "end": 1119,
    "range": [
      1106,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1126,
    "end": 1134,
    "range": [
      1126,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1135,
    "end": 1139,
    "range": [
      1135,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1141,
    "end": 1147,
    "range": [
      1141,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1153,
    "end": 1161,
    "range": [
      1153,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 1162,
    "end": 1167,
    "range": [
      1162,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1169,
    "end": 1175,
    "range": [
      1169,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1181,
    "end": 1189,
    "range": [
      1181,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 1190,
    "end": 1196,
    "range": [
      1190,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1198,
    "end": 1204,
    "range": [
      1198,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1210,
    "end": 1218,
    "range": [
      1210,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 1219,
    "end": 1227,
    "range": [
      1219,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1229,
    "end": 1234,
    "range": [
      1229,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1239,
    "end": 1247,
    "range": [
      1239,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "f0",
    "start": 1248,
    "end": 1250,
    "range": [
      1248,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1251,
    "end": 1253,
    "range": [
      1251,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1255,
    "end": 1260,
    "range": [
      1255,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1262,
    "end": 1264,
    "range": [
      1262,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1266,
    "end": 1271,
    "range": [
      1266,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1279,
    "end": 1285,
    "range": [
      1279,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1286,
    "end": 1288,
    "range": [
      1286,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1292,
    "end": 1296,
    "range": [
      1292,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 1298,
    "end": 1306,
    "range": [
      1298,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1315,
    "end": 1321,
    "range": [
      1315,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1322,
    "end": 1324,
    "range": [
      1322,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 1328,
    "end": 1333,
    "range": [
      1328,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1335,
    "end": 1337,
    "range": [
      1335,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 1339,
    "end": 1345,
    "range": [
      1339,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1347,
    "end": 1349,
    "range": [
      1347,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1357,
    "end": 1365,
    "range": [
      1357,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1366,
    "end": 1368,
    "range": [
      1366,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1369,
    "end": 1374,
    "range": [
      1369,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1376,
    "end": 1381,
    "range": [
      1376,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1389,
    "end": 1392,
    "range": [
      1389,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "frozen",
    "start": 1393,
    "end": 1399,
    "range": [
      1393,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyShape",
    "start": 1401,
    "end": 1414,
    "range": [
      1401,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1420,
    "end": 1423,
    "range": [
      1420,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "frozen",
    "start": 1424,
    "end": 1430,
    "range": [
      1424,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1432,
    "end": 1440,
    "range": [
      1432,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1441,
    "end": 1446,
    "range": [
      1441,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1453,
    "end": 1456,
    "range": [
      1453,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "frozen",
    "start": 1457,
    "end": 1463,
    "range": [
      1457,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 1466,
    "end": 1472,
    "range": [
      1466,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1473,
    "end": 1478,
    "range": [
      1473,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1484,
    "end": 1492,
    "range": [
      1484,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1493,
    "end": 1495,
    "range": [
      1493,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1496,
    "end": 1501,
    "range": [
      1496,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1503,
    "end": 1508,
    "range": [
      1503,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1516,
    "end": 1519,
    "range": [
      1516,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 1520,
    "end": 1527,
    "range": [
      1520,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "PartialShape",
    "start": 1529,
    "end": 1541,
    "range": [
      1529,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550,
    "range": [
      1547,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 1551,
    "end": 1558,
    "range": [
      1551,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1560,
    "end": 1567,
    "range": [
      1560,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1568,
    "end": 1573,
    "range": [
      1568,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1580,
    "end": 1583,
    "range": [
      1580,
      1583
    ]
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 1584,
    "end": 1591,
    "range": [
      1584,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1593,
    "end": 1600,
    "range": [
      1593,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1601,
    "end": 1606,
    "range": [
      1601,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1617,
    "end": 1625,
    "range": [
      1617,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1626,
    "end": 1628,
    "range": [
      1626,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1629,
    "end": 1634,
    "range": [
      1629,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1636,
    "end": 1641,
    "range": [
      1636,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1649,
    "end": 1654,
    "range": [
      1649,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "pick",
    "start": 1659,
    "end": 1663,
    "range": [
      1659,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1664,
    "end": 1669,
    "range": [
      1664,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1671,
    "end": 1677,
    "range": [
      1671,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "String",
    "value": "\"location\"",
    "start": 1679,
    "end": 1689,
    "range": [
      1679,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1733,
    "end": 1741,
    "range": [
      1733,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1742,
    "end": 1744,
    "range": [
      1742,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1753,
    "end": 1758,
    "range": [
      1753,
      1758
    ]
  },
  {
    "type": "Identifier",
    "value": "rec",
    "start": 1759,
    "end": 1762,
    "range": [
      1759,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1767,
    "end": 1770,
    "range": [
      1767,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1772,
    "end": 1779,
    "range": [
      1772,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1781,
    "end": 1784,
    "range": [
      1781,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 1786,
    "end": 1793,
    "range": [
      1786,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1795,
    "end": 1798,
    "range": [
      1795,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "String",
    "value": "\"bye\"",
    "start": 1800,
    "end": 1805,
    "range": [
      1800,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1813,
    "end": 1818,
    "range": [
      1813,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "lengths",
    "start": 1819,
    "end": 1826,
    "range": [
      1819,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "mapObject",
    "start": 1829,
    "end": 1838,
    "range": [
      1829,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "rec",
    "start": 1839,
    "end": 1842,
    "range": [
      1839,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1846,
    "end": 1848,
    "range": [
      1846,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1851,
    "end": 1857,
    "range": [
      1851,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1909,
    "end": 1917,
    "range": [
      1909,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1918,
    "end": 1920,
    "range": [
      1918,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1921,
    "end": 1926,
    "range": [
      1921,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1928,
    "end": 1933,
    "range": [
      1928,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1941,
    "end": 1946,
    "range": [
      1941,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "proxify",
    "start": 1951,
    "end": 1958,
    "range": [
      1951,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1959,
    "end": 1964,
    "range": [
      1959,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1971,
    "end": 1974,
    "range": [
      1971,
      1974
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1975,
    "end": 1979,
    "range": [
      1975,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1984,
    "end": 1988,
    "range": [
      1984,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1989,
    "end": 1992,
    "range": [
      1989,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 2002,
    "end": 2007,
    "range": [
      2002,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2008,
    "end": 2011,
    "range": [
      2008,
      2011
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2012,
    "end": 2014,
    "range": [
      2012,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2020,
    "end": 2028,
    "range": [
      2020,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 2029,
    "end": 2031,
    "range": [
      2029,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 2032,
    "end": 2037,
    "range": [
      2032,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepReadonly",
    "start": 2039,
    "end": 2051,
    "range": [
      2039,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 2052,
    "end": 2057,
    "range": [
      2052,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2066,
    "end": 2069,
    "range": [
      2066,
      2069
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2070,
    "end": 2074,
    "range": [
      2070,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 2077,
    "end": 2082,
    "range": [
      2077,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2083,
    "end": 2087,
    "range": [
      2083,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2104,
    "end": 2107,
    "range": [
      2104,
      2107
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 2108,
    "end": 2116,
    "range": [
      2108,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 2119,
    "end": 2124,
    "range": [
      2119,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 2125,
    "end": 2133,
    "range": [
      2125,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2163,
    "end": 2166,
    "range": [
      2163,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 2171,
    "end": 2179,
    "range": [
      2171,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  }
]
```
