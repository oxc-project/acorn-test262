__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
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
          }
        ],
        "start": 20,
        "end": 26
      },
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
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 48
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 56
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 60,
                      "end": 61
                    },
                    "typeArguments": null,
                    "start": 60,
                    "end": 61
                  },
                  "start": 58,
                  "end": 61
                },
                "start": 57,
                "end": 61
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 67
                    },
                    "typeArguments": null,
                    "start": 66,
                    "end": 67
                  },
                  "start": 64,
                  "end": 67
                },
                "start": 63,
                "end": 67
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              },
              "start": 68,
              "end": 74
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 53,
            "end": 75
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 86
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 90,
                      "end": 91
                    },
                    "typeArguments": null,
                    "start": 90,
                    "end": 91
                  },
                  "start": 88,
                  "end": 91
                },
                "start": 87,
                "end": 91
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 97
                  },
                  "start": 94,
                  "end": 97
                },
                "start": 93,
                "end": 97
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 100,
                "end": 107
              },
              "start": 98,
              "end": 107
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 80,
            "end": 108
          }
        ],
        "start": 27,
        "end": 110
      },
      "declare": false,
      "start": 0,
      "end": 110
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Combinators",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 133
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 143
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 144,
                    "end": 145
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 144,
                  "end": 145
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 148
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 147,
                  "end": 148
                }
              ],
              "start": 143,
              "end": 149
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 163
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
                            "start": 164,
                            "end": 165
                          },
                          "typeArguments": null,
                          "start": 164,
                          "end": 165
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 167,
                            "end": 168
                          },
                          "typeArguments": null,
                          "start": 167,
                          "end": 168
                        }
                      ],
                      "start": 163,
                      "end": 169
                    },
                    "start": 153,
                    "end": 169
                  },
                  "start": 151,
                  "end": 169
                },
                "start": 150,
                "end": 169
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
                              "start": 178,
                              "end": 179
                            },
                            "typeArguments": null,
                            "start": 178,
                            "end": 179
                          },
                          "start": 176,
                          "end": 179
                        },
                        "start": 175,
                        "end": 179
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 185
                            },
                            "typeArguments": null,
                            "start": 184,
                            "end": 185
                          },
                          "start": 182,
                          "end": 185
                        },
                        "start": 181,
                        "end": 185
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 190,
                        "end": 193
                      },
                      "start": 187,
                      "end": 193
                    },
                    "start": 174,
                    "end": 193
                  },
                  "start": 172,
                  "end": 193
                },
                "start": 171,
                "end": 193
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 206
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 206,
                  "end": 216
                },
                "start": 196,
                "end": 216
              },
              "start": 194,
              "end": 216
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 140,
            "end": 217
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 225
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 226,
                    "end": 227
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 226,
                  "end": 227
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 229,
                  "end": 230
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 233
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 232,
                  "end": 233
                }
              ],
              "start": 225,
              "end": 234
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 248
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
                            "start": 249,
                            "end": 250
                          },
                          "typeArguments": null,
                          "start": 249,
                          "end": 250
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 252,
                            "end": 253
                          },
                          "typeArguments": null,
                          "start": 252,
                          "end": 253
                        }
                      ],
                      "start": 248,
                      "end": 254
                    },
                    "start": 238,
                    "end": 254
                  },
                  "start": 236,
                  "end": 254
                },
                "start": 235,
                "end": 254
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
                              "start": 263,
                              "end": 264
                            },
                            "typeArguments": null,
                            "start": 263,
                            "end": 264
                          },
                          "start": 261,
                          "end": 264
                        },
                        "start": 260,
                        "end": 264
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 269,
                              "end": 270
                            },
                            "typeArguments": null,
                            "start": 269,
                            "end": 270
                          },
                          "start": 267,
                          "end": 270
                        },
                        "start": 266,
                        "end": 270
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 275,
                          "end": 276
                        },
                        "typeArguments": null,
                        "start": 275,
                        "end": 276
                      },
                      "start": 272,
                      "end": 276
                    },
                    "start": 259,
                    "end": 276
                  },
                  "start": 257,
                  "end": 276
                },
                "start": 256,
                "end": 276
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 289
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
                        "start": 290,
                        "end": 291
                      },
                      "typeArguments": null,
                      "start": 290,
                      "end": 291
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 294
                      },
                      "typeArguments": null,
                      "start": 293,
                      "end": 294
                    }
                  ],
                  "start": 289,
                  "end": 295
                },
                "start": 279,
                "end": 295
              },
              "start": 277,
              "end": 295
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 222,
            "end": 296
          }
        ],
        "start": 134,
        "end": 298
      },
      "declare": false,
      "start": 112,
      "end": 298
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
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Combinators",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 318
                },
                "typeArguments": null,
                "start": 307,
                "end": 318
              },
              "start": 305,
              "end": 318
            },
            "start": 304,
            "end": 318
          },
          "init": null,
          "definite": false,
          "start": 304,
          "end": 318
        }
      ],
      "declare": false,
      "start": 300,
      "end": 319
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 338
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 338,
                  "end": 354
                },
                "start": 328,
                "end": 354
              },
              "start": 326,
              "end": 354
            },
            "start": 324,
            "end": 354
          },
          "init": null,
          "definite": false,
          "start": 324,
          "end": 354
        }
      ],
      "declare": false,
      "start": 320,
      "end": 355
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
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 363
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "type": "TSNumberKeyword",
                    "start": 370,
                    "end": 376
                  },
                  "start": 368,
                  "end": 376
                },
                "start": 367,
                "end": 376
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 381,
                    "end": 387
                  },
                  "start": 379,
                  "end": 387
                },
                "start": 378,
                "end": 387
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 402
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 403,
                        "end": 410
                      },
                      "optional": false,
                      "computed": false,
                      "start": 401,
                      "end": 410
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 401,
                    "end": 412
                  },
                  "start": 394,
                  "end": 412
                }
              ],
              "start": 392,
              "end": 414
            },
            "id": null,
            "generator": false,
            "start": 366,
            "end": 414
          },
          "definite": false,
          "start": 360,
          "end": 414
        }
      ],
      "declare": false,
      "start": 356,
      "end": 415
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
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 423
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 431
              },
              "optional": false,
              "computed": false,
              "start": 426,
              "end": 431
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 452
                  },
                  "typeArguments": null,
                  "start": 448,
                  "end": 452
                }
              ],
              "start": 431,
              "end": 453
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 456
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 459,
                    "end": 460
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 463
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 478
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 479,
                            "end": 486
                          },
                          "optional": false,
                          "computed": false,
                          "start": 477,
                          "end": 486
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 477,
                        "end": 488
                      },
                      "start": 470,
                      "end": 488
                    }
                  ],
                  "start": 468,
                  "end": 490
                },
                "id": null,
                "generator": false,
                "start": 458,
                "end": 490
              }
            ],
            "optional": false,
            "start": 426,
            "end": 491
          },
          "definite": false,
          "start": 420,
          "end": 491
        }
      ],
      "declare": false,
      "start": 416,
      "end": 492
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
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 500
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 504
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 508
              },
              "optional": false,
              "computed": false,
              "start": 503,
              "end": 508
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 529
                  },
                  "typeArguments": null,
                  "start": 525,
                  "end": 529
                }
              ],
              "start": 508,
              "end": 530
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 533
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "rf1",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 538
              }
            ],
            "optional": false,
            "start": 503,
            "end": 539
          },
          "definite": false,
          "start": 497,
          "end": 539
        }
      ],
      "declare": false,
      "start": 493,
      "end": 540
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 540
}
```
