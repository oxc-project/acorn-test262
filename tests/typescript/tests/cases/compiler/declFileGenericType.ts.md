__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
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
                        "start": 40,
                        "end": 41
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 40,
                      "end": 41
                    }
                  ],
                  "start": 39,
                  "end": 42
                },
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 42,
                  "end": 45
                },
                "abstract": false,
                "declare": false,
                "start": 32,
                "end": 45
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 45
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 65,
                  "end": 68
                },
                "abstract": false,
                "declare": false,
                "start": 57,
                "end": 68
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 50,
              "end": 68
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 95
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
                        "start": 96,
                        "end": 97
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 96,
                      "end": 97
                    }
                  ],
                  "start": 95,
                  "end": 98
                },
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
                          "start": 102,
                          "end": 103
                        },
                        "typeArguments": null,
                        "start": 102,
                        "end": 103
                      },
                      "start": 100,
                      "end": 103
                    },
                    "start": 99,
                    "end": 103
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 108,
                            "end": 109
                          },
                          "typeArguments": null,
                          "start": 108,
                          "end": 109
                        }
                      ],
                      "start": 107,
                      "end": 110
                    },
                    "start": 106,
                    "end": 110
                  },
                  "start": 104,
                  "end": 110
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 120,
                        "end": 124
                      },
                      "start": 113,
                      "end": 125
                    }
                  ],
                  "start": 111,
                  "end": 127
                },
                "expression": false,
                "start": 85,
                "end": 127
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 78,
              "end": 127
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 150
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
                        "start": 151,
                        "end": 152
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 151,
                      "end": 152
                    }
                  ],
                  "start": 150,
                  "end": 153
                },
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
                          "start": 157,
                          "end": 158
                        },
                        "typeArguments": null,
                        "start": 157,
                        "end": 158
                      },
                      "start": 155,
                      "end": 158
                    },
                    "start": 154,
                    "end": 158
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 162
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "start": 161,
                      "end": 164
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 165,
                              "end": 166
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 167,
                              "end": 168
                            },
                            "start": 165,
                            "end": 168
                          },
                          "typeArguments": null,
                          "start": 165,
                          "end": 168
                        }
                      ],
                      "start": 164,
                      "end": 169
                    },
                    "start": 161,
                    "end": 169
                  },
                  "start": 159,
                  "end": 169
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 179,
                        "end": 183
                      },
                      "start": 172,
                      "end": 184
                    }
                  ],
                  "start": 170,
                  "end": 186
                },
                "expression": false,
                "start": 139,
                "end": 186
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 132,
              "end": 186
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 209
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
                        "start": 210,
                        "end": 211
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 210,
                      "end": 211
                    }
                  ],
                  "start": 209,
                  "end": 212
                },
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
                          "start": 216,
                          "end": 217
                        },
                        "typeArguments": null,
                        "start": 216,
                        "end": 217
                      },
                      "start": 214,
                      "end": 217
                    },
                    "start": 213,
                    "end": 217
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 220,
                          "end": 221
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 223
                        },
                        "start": 220,
                        "end": 223
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 224,
                                "end": 225
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 226,
                                "end": 227
                              },
                              "start": 224,
                              "end": 227
                            },
                            "typeArguments": null,
                            "start": 224,
                            "end": 227
                          }
                        ],
                        "start": 223,
                        "end": 228
                      },
                      "start": 220,
                      "end": 228
                    },
                    "start": 220,
                    "end": 230
                  },
                  "start": 218,
                  "end": 230
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 240,
                        "end": 244
                      },
                      "start": 233,
                      "end": 245
                    }
                  ],
                  "start": 231,
                  "end": 247
                },
                "expression": false,
                "start": 198,
                "end": 247
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 191,
              "end": 247
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 270
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
                        "start": 271,
                        "end": 272
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 281,
                          "end": 282
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 283,
                                "end": 284
                              },
                              "typeArguments": null,
                              "start": 283,
                              "end": 284
                            }
                          ],
                          "start": 282,
                          "end": 285
                        },
                        "start": 281,
                        "end": 285
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 271,
                      "end": 285
                    }
                  ],
                  "start": 270,
                  "end": 286
                },
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
                          "start": 290,
                          "end": 291
                        },
                        "typeArguments": null,
                        "start": 290,
                        "end": 291
                      },
                      "start": 288,
                      "end": 291
                    },
                    "start": 287,
                    "end": 291
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 299
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 300,
                              "end": 301
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 303
                            },
                            "start": 300,
                            "end": 303
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 304,
                                    "end": 305
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 306,
                                    "end": 307
                                  },
                                  "start": 304,
                                  "end": 307
                                },
                                "typeArguments": null,
                                "start": 304,
                                "end": 307
                              }
                            ],
                            "start": 303,
                            "end": 308
                          },
                          "start": 300,
                          "end": 308
                        }
                      ],
                      "start": 299,
                      "end": 309
                    },
                    "start": 294,
                    "end": 309
                  },
                  "start": 292,
                  "end": 309
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 319,
                        "end": 323
                      },
                      "start": 312,
                      "end": 324
                    }
                  ],
                  "start": 310,
                  "end": 326
                },
                "expression": false,
                "start": 259,
                "end": 326
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 252,
              "end": 326
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 350
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
                        "start": 351,
                        "end": 352
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 351,
                      "end": 352
                    }
                  ],
                  "start": 350,
                  "end": 353
                },
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
                      "start": 357,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 357,
                    "end": 358
                  },
                  "start": 355,
                  "end": 358
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 368,
                        "end": 372
                      },
                      "start": 361,
                      "end": 373
                    }
                  ],
                  "start": 359,
                  "end": 375
                },
                "expression": false,
                "start": 339,
                "end": 375
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 332,
              "end": 375
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 399
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
                        "start": 400,
                        "end": 401
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 411
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 412,
                                "end": 413
                              },
                              "typeArguments": null,
                              "start": 412,
                              "end": 413
                            }
                          ],
                          "start": 411,
                          "end": 414
                        },
                        "start": 410,
                        "end": 414
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 400,
                      "end": 414
                    }
                  ],
                  "start": 399,
                  "end": 415
                },
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
                          "start": 419,
                          "end": 420
                        },
                        "typeArguments": null,
                        "start": 419,
                        "end": 420
                      },
                      "start": 417,
                      "end": 420
                    },
                    "start": 416,
                    "end": 420
                  }
                ],
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
                      "start": 423,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 423,
                    "end": 424
                  },
                  "start": 421,
                  "end": 424
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 434,
                        "end": 438
                      },
                      "start": 427,
                      "end": 439
                    }
                  ],
                  "start": 425,
                  "end": 441
                },
                "expression": false,
                "start": 388,
                "end": 441
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 381,
              "end": 441
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 461
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
                        "start": 462,
                        "end": 463
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 462,
                      "end": 463
                    }
                  ],
                  "start": 461,
                  "end": 464
                },
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 475,
                        "end": 486
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "TSParameterProperty",
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
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
                                    "start": 499,
                                    "end": 500
                                  },
                                  "typeArguments": null,
                                  "start": 499,
                                  "end": 500
                                },
                                "start": 497,
                                "end": 500
                              },
                              "start": 494,
                              "end": 500
                            },
                            "readonly": false,
                            "static": false,
                            "start": 487,
                            "end": 500
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 502,
                          "end": 505
                        },
                        "expression": false,
                        "start": 486,
                        "end": 505
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 475,
                      "end": 505
                    }
                  ],
                  "start": 464,
                  "end": 512
                },
                "abstract": false,
                "declare": false,
                "start": 454,
                "end": 512
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 447,
              "end": 512
            }
          ],
          "start": 19,
          "end": 514
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 514
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 514
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 530,
                      "end": 531
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 533
                    },
                    "start": 530,
                    "end": 533
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 534,
                            "end": 535
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 536,
                            "end": 537
                          },
                          "start": 534,
                          "end": 537
                        },
                        "typeArguments": null,
                        "start": 534,
                        "end": 537
                      }
                    ],
                    "start": 533,
                    "end": 538
                  },
                  "start": 530,
                  "end": 538
                },
                "start": 528,
                "end": 538
              },
              "start": 527,
              "end": 538
            },
            "init": null,
            "definite": false,
            "start": 527,
            "end": 538
          }
        ],
        "declare": false,
        "start": 523,
        "end": 539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 516,
      "end": 539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 553
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 557
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 559
              },
              "optional": false,
              "computed": false,
              "start": 556,
              "end": 559
            },
            "definite": false,
            "start": 552,
            "end": 559
          }
        ],
        "declare": false,
        "start": 548,
        "end": 560
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 541,
      "end": 560
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 572,
              "end": 573
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 577
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              },
              "optional": false,
              "computed": false,
              "start": 576,
              "end": 580
            },
            "definite": false,
            "start": 572,
            "end": 580
          }
        ],
        "declare": false,
        "start": 568,
        "end": 581
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 561,
      "end": 581
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 594
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 598
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F3",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 601
              },
              "optional": false,
              "computed": false,
              "start": 597,
              "end": 601
            },
            "definite": false,
            "start": 593,
            "end": 601
          }
        ],
        "declare": false,
        "start": 589,
        "end": 602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 582,
      "end": 602
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 615
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 619
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F4",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 622
              },
              "optional": false,
              "computed": false,
              "start": 618,
              "end": 622
            },
            "definite": false,
            "start": 614,
            "end": 622
          }
        ],
        "declare": false,
        "start": 610,
        "end": 623
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 603,
      "end": 623
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 637
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 645,
                    "end": 646
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 648
                  },
                  "optional": false,
                  "computed": false,
                  "start": 645,
                  "end": 648
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 650
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 651,
                          "end": 652
                        },
                        "start": 649,
                        "end": 652
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 653,
                                "end": 654
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 655,
                                "end": 656
                              },
                              "start": 653,
                              "end": 656
                            },
                            "typeArguments": null,
                            "start": 653,
                            "end": 656
                          }
                        ],
                        "start": 652,
                        "end": 657
                      },
                      "start": 649,
                      "end": 657
                    }
                  ],
                  "start": 648,
                  "end": 658
                },
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 663,
                        "end": 664
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 666
                      },
                      "optional": false,
                      "computed": false,
                      "start": 663,
                      "end": 666
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 667,
                              "end": 668
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 669,
                              "end": 670
                            },
                            "start": 667,
                            "end": 670
                          },
                          "typeArguments": null,
                          "start": 667,
                          "end": 670
                        }
                      ],
                      "start": 666,
                      "end": 671
                    },
                    "arguments": [],
                    "start": 659,
                    "end": 673
                  }
                ],
                "start": 641,
                "end": 674
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 679
              },
              "optional": false,
              "computed": false,
              "start": 640,
              "end": 679
            },
            "definite": false,
            "start": 636,
            "end": 679
          }
        ],
        "declare": false,
        "start": 632,
        "end": 680
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 625,
      "end": 680
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 698,
          "end": 699
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
                "start": 700,
                "end": 701
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 710,
                    "end": 711
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 712,
                    "end": 713
                  },
                  "start": 710,
                  "end": 713
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 714,
                          "end": 715
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 717
                        },
                        "start": 714,
                        "end": 717
                      },
                      "typeArguments": null,
                      "start": 714,
                      "end": 717
                    }
                  ],
                  "start": 713,
                  "end": 718
                },
                "start": 710,
                "end": 718
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 700,
              "end": 718
            }
          ],
          "start": 699,
          "end": 719
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 722,
          "end": 725
        },
        "expression": false,
        "start": 689,
        "end": 725
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 682,
      "end": 725
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 739
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 742,
                  "end": 743
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 744,
                  "end": 746
                },
                "optional": false,
                "computed": false,
                "start": 742,
                "end": 746
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 747,
                        "end": 748
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 750
                      },
                      "start": 747,
                      "end": 750
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 752
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 753,
                              "end": 754
                            },
                            "start": 751,
                            "end": 754
                          },
                          "typeArguments": null,
                          "start": 751,
                          "end": 754
                        }
                      ],
                      "start": 750,
                      "end": 755
                    },
                    "start": 747,
                    "end": 755
                  }
                ],
                "start": 746,
                "end": 756
              },
              "arguments": [],
              "optional": false,
              "start": 742,
              "end": 758
            },
            "definite": false,
            "start": 738,
            "end": 758
          }
        ],
        "declare": false,
        "start": 734,
        "end": 759
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 727,
      "end": 759
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 774,
          "end": 775
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 785
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "optional": false,
          "computed": false,
          "start": 784,
          "end": 787
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 789
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 791
                },
                "start": 788,
                "end": 791
              },
              "typeArguments": null,
              "start": 788,
              "end": 791
            }
          ],
          "start": 787,
          "end": 792
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 792,
          "end": 795
        },
        "abstract": false,
        "declare": false,
        "start": 768,
        "end": 795
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 761,
      "end": 795
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 815
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 825
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 827
              },
              "optional": false,
              "computed": false,
              "start": 824,
              "end": 827
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 828,
                      "end": 829
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 830,
                      "end": 831
                    },
                    "start": 828,
                    "end": 831
                  },
                  "typeArguments": null,
                  "start": 828,
                  "end": 831
                }
              ],
              "start": 827,
              "end": 832
            },
            "start": 824,
            "end": 832
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 833,
          "end": 836
        },
        "declare": false,
        "start": 804,
        "end": 836
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 797,
      "end": 836
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 850
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 853,
                "end": 854
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F6",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 857
              },
              "optional": false,
              "computed": false,
              "start": 853,
              "end": 857
            },
            "definite": false,
            "start": 849,
            "end": 857
          }
        ],
        "declare": false,
        "start": 845,
        "end": 858
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 838,
      "end": 858
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 858
}
```
