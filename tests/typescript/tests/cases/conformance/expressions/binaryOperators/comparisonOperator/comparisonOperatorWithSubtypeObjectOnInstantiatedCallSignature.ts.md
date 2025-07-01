__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 17,
            "end": 34
          }
        ],
        "start": 11,
        "end": 36
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 51
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 64
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 71,
            "end": 88
          }
        ],
        "start": 65,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 38,
      "end": 90
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 104
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
                            "start": 105,
                            "end": 106
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 105,
                          "end": 106
                        }
                      ],
                      "start": 104,
                      "end": 107
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
                              "start": 111,
                              "end": 112
                            },
                            "typeArguments": null,
                            "start": 111,
                            "end": 112
                          },
                          "start": 109,
                          "end": 112
                        },
                        "start": 108,
                        "end": 112
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
                          "start": 115,
                          "end": 116
                        },
                        "typeArguments": null,
                        "start": 115,
                        "end": 116
                      },
                      "start": 113,
                      "end": 116
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 102,
                    "end": 116
                  }
                ],
                "start": 100,
                "end": 118
              },
              "start": 98,
              "end": 118
            },
            "start": 96,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 96,
          "end": 118
        }
      ],
      "declare": false,
      "start": 92,
      "end": 119
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 132
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
                            "type": "TSStringKeyword",
                            "start": 136,
                            "end": 142
                          },
                          "start": 134,
                          "end": 142
                        },
                        "start": 133,
                        "end": 142
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 145,
                        "end": 151
                      },
                      "start": 143,
                      "end": 151
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 130,
                    "end": 151
                  }
                ],
                "start": 128,
                "end": 153
              },
              "start": 126,
              "end": 153
            },
            "start": 124,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 153
        }
      ],
      "declare": false,
      "start": 120,
      "end": 154
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 168
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
                            "start": 169,
                            "end": 170
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 169,
                          "end": 170
                        }
                      ],
                      "start": 168,
                      "end": 171
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
                              "start": 175,
                              "end": 176
                            },
                            "typeArguments": null,
                            "start": 175,
                            "end": 176
                          },
                          "start": 173,
                          "end": 176
                        },
                        "start": 172,
                        "end": 176
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
                          "start": 179,
                          "end": 180
                        },
                        "typeArguments": null,
                        "start": 179,
                        "end": 180
                      },
                      "start": 177,
                      "end": 180
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 166,
                    "end": 180
                  }
                ],
                "start": 164,
                "end": 182
              },
              "start": 162,
              "end": 182
            },
            "start": 160,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 160,
          "end": 182
        }
      ],
      "declare": false,
      "start": 156,
      "end": 183
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 196
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
                            "type": "TSStringKeyword",
                            "start": 200,
                            "end": 206
                          },
                          "start": 198,
                          "end": 206
                        },
                        "start": 197,
                        "end": 206
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 211,
                            "end": 217
                          },
                          "start": 209,
                          "end": 217
                        },
                        "start": 208,
                        "end": 217
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 220,
                        "end": 226
                      },
                      "start": 218,
                      "end": 226
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 194,
                    "end": 226
                  }
                ],
                "start": 192,
                "end": 228
              },
              "start": 190,
              "end": 228
            },
            "start": 188,
            "end": 228
          },
          "init": null,
          "definite": false,
          "start": 188,
          "end": 228
        }
      ],
      "declare": false,
      "start": 184,
      "end": 229
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 243
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
                            "start": 244,
                            "end": 245
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 244,
                          "end": 245
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 247,
                            "end": 248
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 247,
                          "end": 248
                        }
                      ],
                      "start": 243,
                      "end": 249
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
                              "start": 253,
                              "end": 254
                            },
                            "typeArguments": null,
                            "start": 253,
                            "end": 254
                          },
                          "start": 251,
                          "end": 254
                        },
                        "start": 250,
                        "end": 254
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
                              "start": 259,
                              "end": 260
                            },
                            "typeArguments": null,
                            "start": 259,
                            "end": 260
                          },
                          "start": 257,
                          "end": 260
                        },
                        "start": 256,
                        "end": 260
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 241,
                    "end": 264
                  }
                ],
                "start": 239,
                "end": 266
              },
              "start": 237,
              "end": 266
            },
            "start": 235,
            "end": 266
          },
          "init": null,
          "definite": false,
          "start": 235,
          "end": 266
        }
      ],
      "declare": false,
      "start": 231,
      "end": 267
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 280
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
                            "type": "TSStringKeyword",
                            "start": 284,
                            "end": 290
                          },
                          "start": 282,
                          "end": 290
                        },
                        "start": 281,
                        "end": 290
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 295,
                            "end": 301
                          },
                          "start": 293,
                          "end": 301
                        },
                        "start": 292,
                        "end": 301
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
                      },
                      "start": 302,
                      "end": 310
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 278,
                    "end": 310
                  }
                ],
                "start": 276,
                "end": 312
              },
              "start": 274,
              "end": 312
            },
            "start": 272,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 312
        }
      ],
      "declare": false,
      "start": 268,
      "end": 313
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 327
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
                            "start": 328,
                            "end": 329
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 328,
                          "end": 329
                        }
                      ],
                      "start": 327,
                      "end": 330
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": true,
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
                              "start": 335,
                              "end": 336
                            },
                            "typeArguments": null,
                            "start": 335,
                            "end": 336
                          },
                          "start": 333,
                          "end": 336
                        },
                        "start": 331,
                        "end": 336
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
                          "start": 339,
                          "end": 340
                        },
                        "typeArguments": null,
                        "start": 339,
                        "end": 340
                      },
                      "start": 337,
                      "end": 340
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 325,
                    "end": 340
                  }
                ],
                "start": 323,
                "end": 342
              },
              "start": 321,
              "end": 342
            },
            "start": 319,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 319,
          "end": 342
        }
      ],
      "declare": false,
      "start": 315,
      "end": 343
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 356
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
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 361,
                            "end": 367
                          },
                          "start": 359,
                          "end": 367
                        },
                        "start": 357,
                        "end": 367
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 370,
                        "end": 376
                      },
                      "start": 368,
                      "end": 376
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 354,
                    "end": 376
                  }
                ],
                "start": 352,
                "end": 378
              },
              "start": 350,
              "end": 378
            },
            "start": 348,
            "end": 378
          },
          "init": null,
          "definite": false,
          "start": 348,
          "end": 378
        }
      ],
      "declare": false,
      "start": 344,
      "end": 379
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 393
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
                            "start": 394,
                            "end": 395
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 394,
                          "end": 395
                        }
                      ],
                      "start": 393,
                      "end": 396
                    },
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 400,
                          "end": 401
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 403,
                                "end": 404
                              },
                              "typeArguments": null,
                              "start": 403,
                              "end": 404
                            },
                            "start": 403,
                            "end": 406
                          },
                          "start": 401,
                          "end": 406
                        },
                        "value": null,
                        "start": 397,
                        "end": 406
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
                          "start": 409,
                          "end": 410
                        },
                        "typeArguments": null,
                        "start": 409,
                        "end": 410
                      },
                      "start": 407,
                      "end": 410
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 391,
                    "end": 410
                  }
                ],
                "start": 389,
                "end": 412
              },
              "start": 387,
              "end": 412
            },
            "start": 385,
            "end": 412
          },
          "init": null,
          "definite": false,
          "start": 385,
          "end": 412
        }
      ],
      "declare": false,
      "start": 381,
      "end": 413
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 424,
                      "end": 426
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 430,
                          "end": 431
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 433,
                              "end": 439
                            },
                            "start": 433,
                            "end": 441
                          },
                          "start": 431,
                          "end": 441
                        },
                        "value": null,
                        "start": 427,
                        "end": 441
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 444,
                        "end": 450
                      },
                      "start": 442,
                      "end": 450
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 424,
                    "end": 450
                  }
                ],
                "start": 422,
                "end": 452
              },
              "start": 420,
              "end": 452
            },
            "start": 418,
            "end": 452
          },
          "init": null,
          "definite": false,
          "start": 418,
          "end": 452
        }
      ],
      "declare": false,
      "start": 414,
      "end": 453
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 467
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
                            "start": 468,
                            "end": 469
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 468,
                          "end": 469
                        }
                      ],
                      "start": 467,
                      "end": 470
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
                              "start": 474,
                              "end": 475
                            },
                            "typeArguments": null,
                            "start": 474,
                            "end": 475
                          },
                          "start": 472,
                          "end": 475
                        },
                        "start": 471,
                        "end": 475
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 480,
                              "end": 481
                            },
                            "typeArguments": null,
                            "start": 480,
                            "end": 481
                          },
                          "start": 478,
                          "end": 481
                        },
                        "start": 477,
                        "end": 481
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
                          "start": 484,
                          "end": 485
                        },
                        "typeArguments": null,
                        "start": 484,
                        "end": 485
                      },
                      "start": 482,
                      "end": 485
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 465,
                    "end": 485
                  }
                ],
                "start": 463,
                "end": 487
              },
              "start": 461,
              "end": 487
            },
            "start": 459,
            "end": 487
          },
          "init": null,
          "definite": false,
          "start": 459,
          "end": 487
        }
      ],
      "declare": false,
      "start": 455,
      "end": 488
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
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 499,
                      "end": 501
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
                            "type": "TSStringKeyword",
                            "start": 505,
                            "end": 511
                          },
                          "start": 503,
                          "end": 511
                        },
                        "start": 502,
                        "end": 511
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 516,
                            "end": 522
                          },
                          "start": 514,
                          "end": 522
                        },
                        "start": 513,
                        "end": 522
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 525,
                        "end": 527
                      },
                      "start": 523,
                      "end": 527
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 499,
                    "end": 527
                  }
                ],
                "start": 497,
                "end": 529
              },
              "start": 495,
              "end": 529
            },
            "start": 493,
            "end": 529
          },
          "init": null,
          "definite": false,
          "start": 493,
          "end": 529
        }
      ],
      "declare": false,
      "start": 489,
      "end": 530
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
            "name": "b7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 591,
                      "end": 593
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
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 597,
                              "end": 601
                            },
                            "typeArguments": null,
                            "start": 597,
                            "end": 601
                          },
                          "start": 595,
                          "end": 601
                        },
                        "start": 594,
                        "end": 601
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
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 606,
                              "end": 613
                            },
                            "typeArguments": null,
                            "start": 606,
                            "end": 613
                          },
                          "start": 604,
                          "end": 613
                        },
                        "start": 603,
                        "end": 613
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 616,
                          "end": 620
                        },
                        "typeArguments": null,
                        "start": 616,
                        "end": 620
                      },
                      "start": 614,
                      "end": 620
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 591,
                    "end": 620
                  }
                ],
                "start": 589,
                "end": 622
              },
              "start": 587,
              "end": 622
            },
            "start": 585,
            "end": 622
          },
          "init": null,
          "definite": false,
          "start": 585,
          "end": 622
        }
      ],
      "declare": false,
      "start": 581,
      "end": 623
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
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 643,
            "end": 647
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 652
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 657
            },
            "start": 650,
            "end": 657
          },
          "definite": false,
          "start": 643,
          "end": 657
        }
      ],
      "declare": false,
      "start": 639,
      "end": 658
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
            "name": "r1a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 667
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 672
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 677
            },
            "start": 670,
            "end": 677
          },
          "definite": false,
          "start": 663,
          "end": 677
        }
      ],
      "declare": false,
      "start": 659,
      "end": 678
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
            "name": "r1a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 683,
            "end": 687
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 690,
              "end": 692
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 697
            },
            "start": 690,
            "end": 697
          },
          "definite": false,
          "start": 683,
          "end": 697
        }
      ],
      "declare": false,
      "start": 679,
      "end": 698
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
            "name": "r1a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 707
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 712
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 717
            },
            "start": 710,
            "end": 717
          },
          "definite": false,
          "start": 703,
          "end": 717
        }
      ],
      "declare": false,
      "start": 699,
      "end": 718
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
            "name": "r1a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 723,
            "end": 727
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 732
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 737
            },
            "start": 730,
            "end": 737
          },
          "definite": false,
          "start": 723,
          "end": 737
        }
      ],
      "declare": false,
      "start": 719,
      "end": 738
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
            "name": "r1a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 743,
            "end": 747
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 752
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 757
            },
            "start": 750,
            "end": 757
          },
          "definite": false,
          "start": 743,
          "end": 757
        }
      ],
      "declare": false,
      "start": 739,
      "end": 758
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
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 790
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 795
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 800
            },
            "start": 793,
            "end": 800
          },
          "definite": false,
          "start": 786,
          "end": 800
        }
      ],
      "declare": false,
      "start": 782,
      "end": 801
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
            "name": "r1b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 810
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 815
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 820
            },
            "start": 813,
            "end": 820
          },
          "definite": false,
          "start": 806,
          "end": 820
        }
      ],
      "declare": false,
      "start": 802,
      "end": 821
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
            "name": "r1b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 826,
            "end": 830
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 835
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 840
            },
            "start": 833,
            "end": 840
          },
          "definite": false,
          "start": 826,
          "end": 840
        }
      ],
      "declare": false,
      "start": 822,
      "end": 841
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
            "name": "r1b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 846,
            "end": 850
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 855
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 860
            },
            "start": 853,
            "end": 860
          },
          "definite": false,
          "start": 846,
          "end": 860
        }
      ],
      "declare": false,
      "start": 842,
      "end": 861
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
            "name": "r1b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 870
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 875
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 880
            },
            "start": 873,
            "end": 880
          },
          "definite": false,
          "start": 866,
          "end": 880
        }
      ],
      "declare": false,
      "start": 862,
      "end": 881
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
            "name": "r1b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 890
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 893,
              "end": 895
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 900
            },
            "start": 893,
            "end": 900
          },
          "definite": false,
          "start": 886,
          "end": 900
        }
      ],
      "declare": false,
      "start": 882,
      "end": 901
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
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 947
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 952
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 957
            },
            "start": 950,
            "end": 957
          },
          "definite": false,
          "start": 943,
          "end": 957
        }
      ],
      "declare": false,
      "start": 939,
      "end": 958
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
            "name": "r2a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 967
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 972
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 975,
              "end": 977
            },
            "start": 970,
            "end": 977
          },
          "definite": false,
          "start": 963,
          "end": 977
        }
      ],
      "declare": false,
      "start": 959,
      "end": 978
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
            "name": "r2a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 987
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 990,
              "end": 992
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 997
            },
            "start": 990,
            "end": 997
          },
          "definite": false,
          "start": 983,
          "end": 997
        }
      ],
      "declare": false,
      "start": 979,
      "end": 998
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
            "name": "r2a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1007
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1012
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1017
            },
            "start": 1010,
            "end": 1017
          },
          "definite": false,
          "start": 1003,
          "end": 1017
        }
      ],
      "declare": false,
      "start": 999,
      "end": 1018
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
            "name": "r2a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1023,
            "end": 1027
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1032
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1037
            },
            "start": 1030,
            "end": 1037
          },
          "definite": false,
          "start": 1023,
          "end": 1037
        }
      ],
      "declare": false,
      "start": 1019,
      "end": 1038
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
            "name": "r2a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1043,
            "end": 1047
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1052
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1057
            },
            "start": 1050,
            "end": 1057
          },
          "definite": false,
          "start": 1043,
          "end": 1057
        }
      ],
      "declare": false,
      "start": 1039,
      "end": 1058
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
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1086,
            "end": 1090
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1093,
              "end": 1095
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1098,
              "end": 1100
            },
            "start": 1093,
            "end": 1100
          },
          "definite": false,
          "start": 1086,
          "end": 1100
        }
      ],
      "declare": false,
      "start": 1082,
      "end": 1101
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
            "name": "r2b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1110
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1113,
              "end": 1115
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1118,
              "end": 1120
            },
            "start": 1113,
            "end": 1120
          },
          "definite": false,
          "start": 1106,
          "end": 1120
        }
      ],
      "declare": false,
      "start": 1102,
      "end": 1121
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
            "name": "r2b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1126,
            "end": 1130
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1133,
              "end": 1135
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1140
            },
            "start": 1133,
            "end": 1140
          },
          "definite": false,
          "start": 1126,
          "end": 1140
        }
      ],
      "declare": false,
      "start": 1122,
      "end": 1141
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
            "name": "r2b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1146,
            "end": 1150
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1153,
              "end": 1155
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1160
            },
            "start": 1153,
            "end": 1160
          },
          "definite": false,
          "start": 1146,
          "end": 1160
        }
      ],
      "declare": false,
      "start": 1142,
      "end": 1161
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
            "name": "r2b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1170
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1173,
              "end": 1175
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1180
            },
            "start": 1173,
            "end": 1180
          },
          "definite": false,
          "start": 1166,
          "end": 1180
        }
      ],
      "declare": false,
      "start": 1162,
      "end": 1181
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
            "name": "r2b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1190
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1193,
              "end": 1195
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1200
            },
            "start": 1193,
            "end": 1200
          },
          "definite": false,
          "start": 1186,
          "end": 1200
        }
      ],
      "declare": false,
      "start": 1182,
      "end": 1201
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
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1244,
            "end": 1248
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1251,
              "end": 1253
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1259
            },
            "start": 1251,
            "end": 1259
          },
          "definite": false,
          "start": 1244,
          "end": 1259
        }
      ],
      "declare": false,
      "start": 1240,
      "end": 1260
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
            "name": "r3a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1265,
            "end": 1269
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1274
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1280
            },
            "start": 1272,
            "end": 1280
          },
          "definite": false,
          "start": 1265,
          "end": 1280
        }
      ],
      "declare": false,
      "start": 1261,
      "end": 1281
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
            "name": "r3a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1286,
            "end": 1290
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1295
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1299,
              "end": 1301
            },
            "start": 1293,
            "end": 1301
          },
          "definite": false,
          "start": 1286,
          "end": 1301
        }
      ],
      "declare": false,
      "start": 1282,
      "end": 1302
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
            "name": "r3a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1307,
            "end": 1311
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1314,
              "end": 1316
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1322
            },
            "start": 1314,
            "end": 1322
          },
          "definite": false,
          "start": 1307,
          "end": 1322
        }
      ],
      "declare": false,
      "start": 1303,
      "end": 1323
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
            "name": "r3a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1328,
            "end": 1332
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1335,
              "end": 1337
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1343
            },
            "start": 1335,
            "end": 1343
          },
          "definite": false,
          "start": 1328,
          "end": 1343
        }
      ],
      "declare": false,
      "start": 1324,
      "end": 1344
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
            "name": "r3a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1349,
            "end": 1353
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1358
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1364
            },
            "start": 1356,
            "end": 1364
          },
          "definite": false,
          "start": 1349,
          "end": 1364
        }
      ],
      "declare": false,
      "start": 1345,
      "end": 1365
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
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1394,
            "end": 1398
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1401,
              "end": 1403
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1407,
              "end": 1409
            },
            "start": 1401,
            "end": 1409
          },
          "definite": false,
          "start": 1394,
          "end": 1409
        }
      ],
      "declare": false,
      "start": 1390,
      "end": 1410
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
            "name": "r3b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1415,
            "end": 1419
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1422,
              "end": 1424
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1428,
              "end": 1430
            },
            "start": 1422,
            "end": 1430
          },
          "definite": false,
          "start": 1415,
          "end": 1430
        }
      ],
      "declare": false,
      "start": 1411,
      "end": 1431
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
            "name": "r3b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1436,
            "end": 1440
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1445
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1451
            },
            "start": 1443,
            "end": 1451
          },
          "definite": false,
          "start": 1436,
          "end": 1451
        }
      ],
      "declare": false,
      "start": 1432,
      "end": 1452
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
            "name": "r3b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1457,
            "end": 1461
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1466
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1472
            },
            "start": 1464,
            "end": 1472
          },
          "definite": false,
          "start": 1457,
          "end": 1472
        }
      ],
      "declare": false,
      "start": 1453,
      "end": 1473
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
            "name": "r3b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1478,
            "end": 1482
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1485,
              "end": 1487
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1493
            },
            "start": 1485,
            "end": 1493
          },
          "definite": false,
          "start": 1478,
          "end": 1493
        }
      ],
      "declare": false,
      "start": 1474,
      "end": 1494
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
            "name": "r3b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1499,
            "end": 1503
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1506,
              "end": 1508
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1512,
              "end": 1514
            },
            "start": 1506,
            "end": 1514
          },
          "definite": false,
          "start": 1499,
          "end": 1514
        }
      ],
      "declare": false,
      "start": 1495,
      "end": 1515
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
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1559,
            "end": 1563
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1566,
              "end": 1568
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1572,
              "end": 1574
            },
            "start": 1566,
            "end": 1574
          },
          "definite": false,
          "start": 1559,
          "end": 1574
        }
      ],
      "declare": false,
      "start": 1555,
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
            "name": "r4a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1580,
            "end": 1584
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1587,
              "end": 1589
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1593,
              "end": 1595
            },
            "start": 1587,
            "end": 1595
          },
          "definite": false,
          "start": 1580,
          "end": 1595
        }
      ],
      "declare": false,
      "start": 1576,
      "end": 1596
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
            "name": "r4a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1601,
            "end": 1605
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1608,
              "end": 1610
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1616
            },
            "start": 1608,
            "end": 1616
          },
          "definite": false,
          "start": 1601,
          "end": 1616
        }
      ],
      "declare": false,
      "start": 1597,
      "end": 1617
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
            "name": "r4a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1622,
            "end": 1626
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1631
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1635,
              "end": 1637
            },
            "start": 1629,
            "end": 1637
          },
          "definite": false,
          "start": 1622,
          "end": 1637
        }
      ],
      "declare": false,
      "start": 1618,
      "end": 1638
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
            "name": "r4a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1643,
            "end": 1647
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1650,
              "end": 1652
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1656,
              "end": 1658
            },
            "start": 1650,
            "end": 1658
          },
          "definite": false,
          "start": 1643,
          "end": 1658
        }
      ],
      "declare": false,
      "start": 1639,
      "end": 1659
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
            "name": "r4a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1664,
            "end": 1668
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1671,
              "end": 1673
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1679
            },
            "start": 1671,
            "end": 1679
          },
          "definite": false,
          "start": 1664,
          "end": 1679
        }
      ],
      "declare": false,
      "start": 1660,
      "end": 1680
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
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1709,
            "end": 1713
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1716,
              "end": 1718
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1722,
              "end": 1724
            },
            "start": 1716,
            "end": 1724
          },
          "definite": false,
          "start": 1709,
          "end": 1724
        }
      ],
      "declare": false,
      "start": 1705,
      "end": 1725
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
            "name": "r4b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1730,
            "end": 1734
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1737,
              "end": 1739
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1743,
              "end": 1745
            },
            "start": 1737,
            "end": 1745
          },
          "definite": false,
          "start": 1730,
          "end": 1745
        }
      ],
      "declare": false,
      "start": 1726,
      "end": 1746
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
            "name": "r4b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1751,
            "end": 1755
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1758,
              "end": 1760
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1764,
              "end": 1766
            },
            "start": 1758,
            "end": 1766
          },
          "definite": false,
          "start": 1751,
          "end": 1766
        }
      ],
      "declare": false,
      "start": 1747,
      "end": 1767
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
            "name": "r4b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1772,
            "end": 1776
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1779,
              "end": 1781
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1785,
              "end": 1787
            },
            "start": 1779,
            "end": 1787
          },
          "definite": false,
          "start": 1772,
          "end": 1787
        }
      ],
      "declare": false,
      "start": 1768,
      "end": 1788
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
            "name": "r4b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1793,
            "end": 1797
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1800,
              "end": 1802
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1806,
              "end": 1808
            },
            "start": 1800,
            "end": 1808
          },
          "definite": false,
          "start": 1793,
          "end": 1808
        }
      ],
      "declare": false,
      "start": 1789,
      "end": 1809
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
            "name": "r4b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1814,
            "end": 1818
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1821,
              "end": 1823
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1827,
              "end": 1829
            },
            "start": 1821,
            "end": 1829
          },
          "definite": false,
          "start": 1814,
          "end": 1829
        }
      ],
      "declare": false,
      "start": 1810,
      "end": 1830
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
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1874,
            "end": 1878
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1881,
              "end": 1883
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1887,
              "end": 1889
            },
            "start": 1881,
            "end": 1889
          },
          "definite": false,
          "start": 1874,
          "end": 1889
        }
      ],
      "declare": false,
      "start": 1870,
      "end": 1890
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
            "name": "r5a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1895,
            "end": 1899
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1902,
              "end": 1904
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1908,
              "end": 1910
            },
            "start": 1902,
            "end": 1910
          },
          "definite": false,
          "start": 1895,
          "end": 1910
        }
      ],
      "declare": false,
      "start": 1891,
      "end": 1911
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
            "name": "r5a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1916,
            "end": 1920
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1923,
              "end": 1925
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1929,
              "end": 1931
            },
            "start": 1923,
            "end": 1931
          },
          "definite": false,
          "start": 1916,
          "end": 1931
        }
      ],
      "declare": false,
      "start": 1912,
      "end": 1932
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
            "name": "r5a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1937,
            "end": 1941
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1944,
              "end": 1946
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1950,
              "end": 1952
            },
            "start": 1944,
            "end": 1952
          },
          "definite": false,
          "start": 1937,
          "end": 1952
        }
      ],
      "declare": false,
      "start": 1933,
      "end": 1953
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
            "name": "r5a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1958,
            "end": 1962
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1965,
              "end": 1967
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1971,
              "end": 1973
            },
            "start": 1965,
            "end": 1973
          },
          "definite": false,
          "start": 1958,
          "end": 1973
        }
      ],
      "declare": false,
      "start": 1954,
      "end": 1974
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
            "name": "r5a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1979,
            "end": 1983
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1986,
              "end": 1988
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1992,
              "end": 1994
            },
            "start": 1986,
            "end": 1994
          },
          "definite": false,
          "start": 1979,
          "end": 1994
        }
      ],
      "declare": false,
      "start": 1975,
      "end": 1995
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
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2024,
            "end": 2028
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2033
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2037,
              "end": 2039
            },
            "start": 2031,
            "end": 2039
          },
          "definite": false,
          "start": 2024,
          "end": 2039
        }
      ],
      "declare": false,
      "start": 2020,
      "end": 2040
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
            "name": "r5b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2045,
            "end": 2049
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2054
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2058,
              "end": 2060
            },
            "start": 2052,
            "end": 2060
          },
          "definite": false,
          "start": 2045,
          "end": 2060
        }
      ],
      "declare": false,
      "start": 2041,
      "end": 2061
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
            "name": "r5b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2066,
            "end": 2070
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2073,
              "end": 2075
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2079,
              "end": 2081
            },
            "start": 2073,
            "end": 2081
          },
          "definite": false,
          "start": 2066,
          "end": 2081
        }
      ],
      "declare": false,
      "start": 2062,
      "end": 2082
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
            "name": "r5b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2087,
            "end": 2091
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2094,
              "end": 2096
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2100,
              "end": 2102
            },
            "start": 2094,
            "end": 2102
          },
          "definite": false,
          "start": 2087,
          "end": 2102
        }
      ],
      "declare": false,
      "start": 2083,
      "end": 2103
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
            "name": "r5b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2108,
            "end": 2112
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2117
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2121,
              "end": 2123
            },
            "start": 2115,
            "end": 2123
          },
          "definite": false,
          "start": 2108,
          "end": 2123
        }
      ],
      "declare": false,
      "start": 2104,
      "end": 2124
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
            "name": "r5b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2129,
            "end": 2133
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2136,
              "end": 2138
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2142,
              "end": 2144
            },
            "start": 2136,
            "end": 2144
          },
          "definite": false,
          "start": 2129,
          "end": 2144
        }
      ],
      "declare": false,
      "start": 2125,
      "end": 2145
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
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2189,
            "end": 2193
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2196,
              "end": 2198
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2202,
              "end": 2204
            },
            "start": 2196,
            "end": 2204
          },
          "definite": false,
          "start": 2189,
          "end": 2204
        }
      ],
      "declare": false,
      "start": 2185,
      "end": 2205
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
            "name": "r6a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2210,
            "end": 2214
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2217,
              "end": 2219
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2223,
              "end": 2225
            },
            "start": 2217,
            "end": 2225
          },
          "definite": false,
          "start": 2210,
          "end": 2225
        }
      ],
      "declare": false,
      "start": 2206,
      "end": 2226
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
            "name": "r6a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2231,
            "end": 2235
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2238,
              "end": 2240
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2244,
              "end": 2246
            },
            "start": 2238,
            "end": 2246
          },
          "definite": false,
          "start": 2231,
          "end": 2246
        }
      ],
      "declare": false,
      "start": 2227,
      "end": 2247
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
            "name": "r6a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2252,
            "end": 2256
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2259,
              "end": 2261
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2265,
              "end": 2267
            },
            "start": 2259,
            "end": 2267
          },
          "definite": false,
          "start": 2252,
          "end": 2267
        }
      ],
      "declare": false,
      "start": 2248,
      "end": 2268
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
            "name": "r6a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2273,
            "end": 2277
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2280,
              "end": 2282
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2286,
              "end": 2288
            },
            "start": 2280,
            "end": 2288
          },
          "definite": false,
          "start": 2273,
          "end": 2288
        }
      ],
      "declare": false,
      "start": 2269,
      "end": 2289
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
            "name": "r6a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2294,
            "end": 2298
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2301,
              "end": 2303
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2307,
              "end": 2309
            },
            "start": 2301,
            "end": 2309
          },
          "definite": false,
          "start": 2294,
          "end": 2309
        }
      ],
      "declare": false,
      "start": 2290,
      "end": 2310
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
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2339,
            "end": 2343
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2346,
              "end": 2348
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2352,
              "end": 2354
            },
            "start": 2346,
            "end": 2354
          },
          "definite": false,
          "start": 2339,
          "end": 2354
        }
      ],
      "declare": false,
      "start": 2335,
      "end": 2355
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
            "name": "r6b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2360,
            "end": 2364
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2367,
              "end": 2369
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2373,
              "end": 2375
            },
            "start": 2367,
            "end": 2375
          },
          "definite": false,
          "start": 2360,
          "end": 2375
        }
      ],
      "declare": false,
      "start": 2356,
      "end": 2376
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
            "name": "r6b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2381,
            "end": 2385
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2388,
              "end": 2390
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2394,
              "end": 2396
            },
            "start": 2388,
            "end": 2396
          },
          "definite": false,
          "start": 2381,
          "end": 2396
        }
      ],
      "declare": false,
      "start": 2377,
      "end": 2397
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
            "name": "r6b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2402,
            "end": 2406
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2409,
              "end": 2411
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2415,
              "end": 2417
            },
            "start": 2409,
            "end": 2417
          },
          "definite": false,
          "start": 2402,
          "end": 2417
        }
      ],
      "declare": false,
      "start": 2398,
      "end": 2418
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
            "name": "r6b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2423,
            "end": 2427
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2430,
              "end": 2432
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2436,
              "end": 2438
            },
            "start": 2430,
            "end": 2438
          },
          "definite": false,
          "start": 2423,
          "end": 2438
        }
      ],
      "declare": false,
      "start": 2419,
      "end": 2439
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
            "name": "r6b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2444,
            "end": 2448
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2451,
              "end": 2453
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2457,
              "end": 2459
            },
            "start": 2451,
            "end": 2459
          },
          "definite": false,
          "start": 2444,
          "end": 2459
        }
      ],
      "declare": false,
      "start": 2440,
      "end": 2460
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
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2505,
            "end": 2509
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2512,
              "end": 2514
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2519,
              "end": 2521
            },
            "start": 2512,
            "end": 2521
          },
          "definite": false,
          "start": 2505,
          "end": 2521
        }
      ],
      "declare": false,
      "start": 2501,
      "end": 2522
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
            "name": "r7a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2527,
            "end": 2531
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2534,
              "end": 2536
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2541,
              "end": 2543
            },
            "start": 2534,
            "end": 2543
          },
          "definite": false,
          "start": 2527,
          "end": 2543
        }
      ],
      "declare": false,
      "start": 2523,
      "end": 2544
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
            "name": "r7a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2549,
            "end": 2553
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2556,
              "end": 2558
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2563,
              "end": 2565
            },
            "start": 2556,
            "end": 2565
          },
          "definite": false,
          "start": 2549,
          "end": 2565
        }
      ],
      "declare": false,
      "start": 2545,
      "end": 2566
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
            "name": "r7a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2571,
            "end": 2575
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2578,
              "end": 2580
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2585,
              "end": 2587
            },
            "start": 2578,
            "end": 2587
          },
          "definite": false,
          "start": 2571,
          "end": 2587
        }
      ],
      "declare": false,
      "start": 2567,
      "end": 2588
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
            "name": "r7a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2593,
            "end": 2597
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2600,
              "end": 2602
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2607,
              "end": 2609
            },
            "start": 2600,
            "end": 2609
          },
          "definite": false,
          "start": 2593,
          "end": 2609
        }
      ],
      "declare": false,
      "start": 2589,
      "end": 2610
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
            "name": "r7a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2615,
            "end": 2619
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2622,
              "end": 2624
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2629,
              "end": 2631
            },
            "start": 2622,
            "end": 2631
          },
          "definite": false,
          "start": 2615,
          "end": 2631
        }
      ],
      "declare": false,
      "start": 2611,
      "end": 2632
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
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2662,
            "end": 2666
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2669,
              "end": 2671
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2676,
              "end": 2678
            },
            "start": 2669,
            "end": 2678
          },
          "definite": false,
          "start": 2662,
          "end": 2678
        }
      ],
      "declare": false,
      "start": 2658,
      "end": 2679
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
            "name": "r7b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2684,
            "end": 2688
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2691,
              "end": 2693
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2698,
              "end": 2700
            },
            "start": 2691,
            "end": 2700
          },
          "definite": false,
          "start": 2684,
          "end": 2700
        }
      ],
      "declare": false,
      "start": 2680,
      "end": 2701
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
            "name": "r7b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2706,
            "end": 2710
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2713,
              "end": 2715
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2720,
              "end": 2722
            },
            "start": 2713,
            "end": 2722
          },
          "definite": false,
          "start": 2706,
          "end": 2722
        }
      ],
      "declare": false,
      "start": 2702,
      "end": 2723
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
            "name": "r7b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2728,
            "end": 2732
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2735,
              "end": 2737
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2742,
              "end": 2744
            },
            "start": 2735,
            "end": 2744
          },
          "definite": false,
          "start": 2728,
          "end": 2744
        }
      ],
      "declare": false,
      "start": 2724,
      "end": 2745
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
            "name": "r7b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2750,
            "end": 2754
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2757,
              "end": 2759
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2764,
              "end": 2766
            },
            "start": 2757,
            "end": 2766
          },
          "definite": false,
          "start": 2750,
          "end": 2766
        }
      ],
      "declare": false,
      "start": 2746,
      "end": 2767
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
            "name": "r7b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2772,
            "end": 2776
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2779,
              "end": 2781
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2786,
              "end": 2788
            },
            "start": 2779,
            "end": 2788
          },
          "definite": false,
          "start": 2772,
          "end": 2788
        }
      ],
      "declare": false,
      "start": 2768,
      "end": 2789
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
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2835,
            "end": 2839
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2842,
              "end": 2844
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2849,
              "end": 2851
            },
            "start": 2842,
            "end": 2851
          },
          "definite": false,
          "start": 2835,
          "end": 2851
        }
      ],
      "declare": false,
      "start": 2831,
      "end": 2852
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
            "name": "r8a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2857,
            "end": 2861
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2864,
              "end": 2866
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2871,
              "end": 2873
            },
            "start": 2864,
            "end": 2873
          },
          "definite": false,
          "start": 2857,
          "end": 2873
        }
      ],
      "declare": false,
      "start": 2853,
      "end": 2874
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
            "name": "r8a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2879,
            "end": 2883
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2886,
              "end": 2888
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2893,
              "end": 2895
            },
            "start": 2886,
            "end": 2895
          },
          "definite": false,
          "start": 2879,
          "end": 2895
        }
      ],
      "declare": false,
      "start": 2875,
      "end": 2896
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
            "name": "r8a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2901,
            "end": 2905
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2908,
              "end": 2910
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2915,
              "end": 2917
            },
            "start": 2908,
            "end": 2917
          },
          "definite": false,
          "start": 2901,
          "end": 2917
        }
      ],
      "declare": false,
      "start": 2897,
      "end": 2918
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
            "name": "r8a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2923,
            "end": 2927
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2930,
              "end": 2932
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2937,
              "end": 2939
            },
            "start": 2930,
            "end": 2939
          },
          "definite": false,
          "start": 2923,
          "end": 2939
        }
      ],
      "declare": false,
      "start": 2919,
      "end": 2940
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
            "name": "r8a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2945,
            "end": 2949
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2952,
              "end": 2954
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2959,
              "end": 2961
            },
            "start": 2952,
            "end": 2961
          },
          "definite": false,
          "start": 2945,
          "end": 2961
        }
      ],
      "declare": false,
      "start": 2941,
      "end": 2962
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
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2992,
            "end": 2996
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2999,
              "end": 3001
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3006,
              "end": 3008
            },
            "start": 2999,
            "end": 3008
          },
          "definite": false,
          "start": 2992,
          "end": 3008
        }
      ],
      "declare": false,
      "start": 2988,
      "end": 3009
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
            "name": "r8b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3014,
            "end": 3018
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3021,
              "end": 3023
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3028,
              "end": 3030
            },
            "start": 3021,
            "end": 3030
          },
          "definite": false,
          "start": 3014,
          "end": 3030
        }
      ],
      "declare": false,
      "start": 3010,
      "end": 3031
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
            "name": "r8b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3036,
            "end": 3040
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3043,
              "end": 3045
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3050,
              "end": 3052
            },
            "start": 3043,
            "end": 3052
          },
          "definite": false,
          "start": 3036,
          "end": 3052
        }
      ],
      "declare": false,
      "start": 3032,
      "end": 3053
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
            "name": "r8b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3058,
            "end": 3062
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3065,
              "end": 3067
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3072,
              "end": 3074
            },
            "start": 3065,
            "end": 3074
          },
          "definite": false,
          "start": 3058,
          "end": 3074
        }
      ],
      "declare": false,
      "start": 3054,
      "end": 3075
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
            "name": "r8b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3080,
            "end": 3084
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3087,
              "end": 3089
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3094,
              "end": 3096
            },
            "start": 3087,
            "end": 3096
          },
          "definite": false,
          "start": 3080,
          "end": 3096
        }
      ],
      "declare": false,
      "start": 3076,
      "end": 3097
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
            "name": "r8b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3102,
            "end": 3106
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3109,
              "end": 3111
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3116,
              "end": 3118
            },
            "start": 3109,
            "end": 3118
          },
          "definite": false,
          "start": 3102,
          "end": 3118
        }
      ],
      "declare": false,
      "start": 3098,
      "end": 3119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3143
}
```
