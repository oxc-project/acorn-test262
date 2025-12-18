__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "intrinsic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 17
                },
                "typeArguments": null,
                "start": 8,
                "end": 17
              },
              "start": 6,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
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
            "name": "e2",
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
                      "name": "intrinsic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 29,
                      "end": 38
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "intrinsic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 40,
                          "end": 49
                        },
                        "typeArguments": null,
                        "start": 40,
                        "end": 49
                      },
                      "start": 38,
                      "end": 49
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 29,
                    "end": 49
                  }
                ],
                "start": 27,
                "end": 51
              },
              "start": 25,
              "end": 51
            },
            "start": 23,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 23,
          "end": 51
        }
      ],
      "declare": false,
      "start": 19,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TE1",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 61
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "intrinsic",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 74
        },
        "typeArguments": null,
        "start": 65,
        "end": 74
      },
      "declare": false,
      "start": 53,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TE2",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 85
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "intrinsic",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 95
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 95
          }
        ],
        "start": 85,
        "end": 96
      },
      "typeAnnotation": {
        "type": "TSIntrinsicKeyword",
        "start": 99,
        "end": 108
      },
      "declare": false,
      "start": 77,
      "end": 109
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TE3",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 118
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
              "start": 119,
              "end": 120
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "intrinsic",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 138
              },
              "typeArguments": null,
              "start": 129,
              "end": 138
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 138
          }
        ],
        "start": 118,
        "end": 139
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "typeArguments": null,
        "start": 142,
        "end": 143
      },
      "declare": false,
      "start": 110,
      "end": 144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TE4",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 153
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "intrinsic",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 163
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "intrinsic",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 181
              },
              "typeArguments": null,
              "start": 172,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 181
          }
        ],
        "start": 153,
        "end": 182
      },
      "typeAnnotation": {
        "type": "TSIntrinsicKeyword",
        "start": 185,
        "end": 194
      },
      "declare": false,
      "start": 145,
      "end": 195
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TE5",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 204
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "intrinsic",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 214
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "intrinsic",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 232
              },
              "typeArguments": null,
              "start": 223,
              "end": 232
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 205,
            "end": 232
          }
        ],
        "start": 204,
        "end": 233
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "intrinsic",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 246
        },
        "typeArguments": null,
        "start": 237,
        "end": 246
      },
      "declare": false,
      "start": 196,
      "end": 248
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 261
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "intrinsic",
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
                          "name": "intrinsic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 294
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "intrinsic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 295,
                          "end": 304
                        },
                        "start": 285,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 285,
                      "end": 304
                    },
                    "start": 283,
                    "end": 304
                  },
                  "start": 274,
                  "end": 304
                },
                "init": null,
                "definite": false,
                "start": 274,
                "end": 304
              }
            ],
            "declare": false,
            "start": 270,
            "end": 305
          }
        ],
        "start": 264,
        "end": 307
      },
      "expression": false,
      "start": 250,
      "end": 307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 320
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "intrinsic",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 332,
              "end": 338
            },
            "start": 330,
            "end": 338
          },
          "start": 321,
          "end": 338
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "intrinsic",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 362
            },
            "start": 346,
            "end": 363
          }
        ],
        "start": 340,
        "end": 365
      },
      "expression": false,
      "start": 309,
      "end": 365
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 378
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
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "intrinsic",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 401
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 404,
              "end": 410
            },
            "declare": false,
            "start": 387,
            "end": 411
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
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "intrinsic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 433
                      },
                      "typeArguments": null,
                      "start": 424,
                      "end": 433
                    },
                    "start": 422,
                    "end": 433
                  },
                  "start": 420,
                  "end": 433
                },
                "init": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 436,
                  "end": 440
                },
                "definite": false,
                "start": 420,
                "end": 440
              }
            ],
            "declare": false,
            "start": 416,
            "end": 441
          }
        ],
        "start": 381,
        "end": 443
      },
      "expression": false,
      "start": 367,
      "end": 443
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 443
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 4,
    "end": 6,
    "range": [
      4,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 19,
    "end": 22,
    "range": [
      19,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 23,
    "end": 25,
    "range": [
      23,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 29,
    "end": 38,
    "range": [
      29,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 40,
    "end": 49,
    "range": [
      40,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "TE1",
    "start": 58,
    "end": 61,
    "range": [
      58,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 65,
    "end": 74,
    "range": [
      65,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81,
    "range": [
      77,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "TE2",
    "start": 82,
    "end": 85,
    "range": [
      82,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 99,
    "end": 108,
    "range": [
      99,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "TE3",
    "start": 115,
    "end": 118,
    "range": [
      115,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128,
    "range": [
      121,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 129,
    "end": 138,
    "range": [
      129,
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
    "value": "=",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "TE4",
    "start": 150,
    "end": 153,
    "range": [
      150,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 154,
    "end": 163,
    "range": [
      154,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 164,
    "end": 171,
    "range": [
      164,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 172,
    "end": 181,
    "range": [
      172,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 185,
    "end": 194,
    "range": [
      185,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 196,
    "end": 200,
    "range": [
      196,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "TE5",
    "start": 201,
    "end": 204,
    "range": [
      201,
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
    "value": "intrinsic",
    "start": 205,
    "end": 214,
    "range": [
      205,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 215,
    "end": 222,
    "range": [
      215,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 223,
    "end": 232,
    "range": [
      223,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 237,
    "end": 246,
    "range": [
      237,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 250,
    "end": 258,
    "range": [
      250,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 259,
    "end": 261,
    "range": [
      259,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 270,
    "end": 273,
    "range": [
      270,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 274,
    "end": 283,
    "range": [
      274,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 285,
    "end": 294,
    "range": [
      285,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 295,
    "end": 304,
    "range": [
      295,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317,
    "range": [
      309,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 318,
    "end": 320,
    "range": [
      318,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 321,
    "end": 330,
    "range": [
      321,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 332,
    "end": 338,
    "range": [
      332,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 346,
    "end": 352,
    "range": [
      346,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 353,
    "end": 362,
    "range": [
      353,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 367,
    "end": 375,
    "range": [
      367,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 376,
    "end": 378,
    "range": [
      376,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 387,
    "end": 391,
    "range": [
      387,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 392,
    "end": 401,
    "range": [
      392,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 404,
    "end": 410,
    "range": [
      404,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 416,
    "end": 419,
    "range": [
      416,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 424,
    "end": 433,
    "range": [
      424,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 436,
    "end": 440,
    "range": [
      436,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  }
]
```
