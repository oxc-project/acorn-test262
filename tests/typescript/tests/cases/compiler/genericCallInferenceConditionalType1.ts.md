__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 75,
                        "end": 76
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 75,
                      "end": 76
                    }
                  ],
                  "start": 74,
                  "end": 77
                },
                "params": [
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
                                  "start": 85,
                                  "end": 86
                                },
                                "typeArguments": null,
                                "start": 85,
                                "end": 86
                              },
                              "start": 83,
                              "end": 86
                            },
                            "start": 82,
                            "end": 86
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 91,
                            "end": 98
                          },
                          "start": 88,
                          "end": 98
                        },
                        "start": 81,
                        "end": 98
                      },
                      "start": 79,
                      "end": 98
                    },
                    "start": 78,
                    "end": 98
                  }
                ],
                "returnType": {
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
                              "start": 107,
                              "end": 108
                            },
                            "typeArguments": null,
                            "start": 107,
                            "end": 108
                          },
                          "start": 105,
                          "end": 108
                        },
                        "start": 104,
                        "end": 108
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 113,
                        "end": 120
                      },
                      "start": 110,
                      "end": 120
                    },
                    "start": 103,
                    "end": 120
                  },
                  "start": 100,
                  "end": 120
                },
                "start": 74,
                "end": 120
              },
              "start": 72,
              "end": 120
            },
            "start": 71,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 120
        }
      ],
      "declare": true,
      "start": 57,
      "end": 121
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 140,
                        "end": 141
                      },
                      "constraint": {
                        "type": "TSUnknownKeyword",
                        "start": 150,
                        "end": 157
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 140,
                      "end": 157
                    }
                  ],
                  "start": 139,
                  "end": 158
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
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 164,
                              "end": 167
                            },
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
                                  "start": 169,
                                  "end": 170
                                },
                                "typeArguments": null,
                                "start": 169,
                                "end": 170
                              },
                              "start": 167,
                              "end": 170
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 164,
                            "end": 170
                          }
                        ],
                        "start": 162,
                        "end": 172
                      },
                      "start": 160,
                      "end": 172
                    },
                    "start": 159,
                    "end": 172
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 177,
                    "end": 184
                  },
                  "start": 174,
                  "end": 184
                },
                "start": 139,
                "end": 184
              },
              "start": 137,
              "end": 184
            },
            "start": 136,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 136,
          "end": 184
        }
      ],
      "declare": true,
      "start": 122,
      "end": 185
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 200
              }
            ],
            "optional": false,
            "start": 197,
            "end": 201
          },
          "definite": false,
          "start": 193,
          "end": 201
        }
      ],
      "declare": false,
      "start": 187,
      "end": 202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FirstParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 223
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
              "start": 224,
              "end": 225
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 225
          }
        ],
        "start": 223,
        "end": 226
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "typeArguments": null,
          "start": 229,
          "end": 230
        },
        "extendsType": {
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
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 250
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 249,
                    "end": 250
                  },
                  "start": 243,
                  "end": 250
                },
                "start": 241,
                "end": 250
              },
              "start": 240,
              "end": 250
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 255,
              "end": 262
            },
            "start": 252,
            "end": 262
          },
          "start": 239,
          "end": 262
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 266
          },
          "typeArguments": null,
          "start": 265,
          "end": 266
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 269,
          "end": 276
        },
        "start": 229,
        "end": 276
      },
      "declare": false,
      "start": 204,
      "end": 277
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 285
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FirstParameter",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 302
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "typeArguments": null,
                "start": 303,
                "end": 311
              }
            ],
            "start": 302,
            "end": 312
          },
          "start": 288,
          "end": 312
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 313,
            "end": 318
          },
          "start": 313,
          "end": 318
        },
        "start": 288,
        "end": 319
      },
      "declare": false,
      "start": 279,
      "end": 320
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 320
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 88,
    "end": 90,
    "range": [
      88,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 100,
    "end": 102,
    "range": [
      100,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 113,
    "end": 120,
    "range": [
      113,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 122,
    "end": 129,
    "range": [
      122,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 130,
    "end": 135,
    "range": [
      130,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 142,
    "end": 149,
    "range": [
      142,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 150,
    "end": 157,
    "range": [
      150,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 177,
    "end": 184,
    "range": [
      177,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 187,
    "end": 192,
    "range": [
      187,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 204,
    "end": 208,
    "range": [
      204,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "FirstParameter",
    "start": 209,
    "end": 223,
    "range": [
      209,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238,
    "range": [
      231,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 243,
    "end": 248,
    "range": [
      243,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 252,
    "end": 254,
    "range": [
      252,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 255,
    "end": 262,
    "range": [
      255,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 269,
    "end": 276,
    "range": [
      269,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 279,
    "end": 283,
    "range": [
      279,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "FirstParameter",
    "start": 288,
    "end": 302,
    "range": [
      288,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 303,
    "end": 309,
    "range": [
      303,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 313,
    "end": 318,
    "range": [
      313,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  }
]
```
