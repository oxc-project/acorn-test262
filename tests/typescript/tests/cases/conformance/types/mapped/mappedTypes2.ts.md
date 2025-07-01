__ESTREE_TEST__:PASS:
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
