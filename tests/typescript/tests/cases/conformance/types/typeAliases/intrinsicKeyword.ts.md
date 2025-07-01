__ESTREE_TEST__:PASS:
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
