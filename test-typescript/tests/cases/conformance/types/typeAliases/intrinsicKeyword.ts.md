__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 443,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 17,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 8,
                "end": 17,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 17,
                  "decorators": [],
                  "name": "intrinsic",
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 51,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 27,
                "end": 51,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 29,
                    "end": 49,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 38,
                      "decorators": [],
                      "name": "intrinsic",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 40,
                        "end": 49,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 49,
                          "decorators": [],
                          "name": "intrinsic",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 53,
      "end": 76,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "TE1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 65,
        "end": 74,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "decorators": [],
          "name": "intrinsic",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 109,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "decorators": [],
        "name": "TE2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntrinsicKeyword",
        "start": 99,
        "end": 108
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 95,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 95,
              "decorators": [],
              "name": "intrinsic",
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
      "start": 110,
      "end": 144,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "decorators": [],
        "name": "TE3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 142,
        "end": 143,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 118,
        "end": 139,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 138,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 129,
              "end": 138,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 129,
                "end": 138,
                "decorators": [],
                "name": "intrinsic",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
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
      "start": 145,
      "end": 195,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 153,
        "decorators": [],
        "name": "TE4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntrinsicKeyword",
        "start": 185,
        "end": 194
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 181,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 172,
              "end": 181,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 172,
                "end": 181,
                "decorators": [],
                "name": "intrinsic",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 163,
              "decorators": [],
              "name": "intrinsic",
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
      "start": 196,
      "end": 248,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 204,
        "decorators": [],
        "name": "TE5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 237,
        "end": 246,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 237,
          "end": 246,
          "decorators": [],
          "name": "intrinsic",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 204,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 205,
            "end": 232,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 223,
              "end": 232,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 223,
                "end": 232,
                "decorators": [],
                "name": "intrinsic",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 214,
              "decorators": [],
              "name": "intrinsic",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 250,
      "end": 307,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 307,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 270,
            "end": 305,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 274,
                "end": 304,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 304,
                  "decorators": [],
                  "name": "intrinsic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 283,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 285,
                      "end": 304,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 285,
                        "end": 304,
                        "left": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 294,
                          "decorators": [],
                          "name": "intrinsic",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 295,
                          "end": 304,
                          "decorators": [],
                          "name": "intrinsic",
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
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 261,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 365,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 340,
        "end": 365,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 346,
            "end": 363,
            "argument": {
              "type": "Identifier",
              "start": 353,
              "end": 362,
              "decorators": [],
              "name": "intrinsic",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 320,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 321,
          "end": 338,
          "decorators": [],
          "name": "intrinsic",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 330,
            "end": 338,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 332,
              "end": 338
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 367,
      "end": 443,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 381,
        "end": 443,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 387,
            "end": 411,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 392,
              "end": 401,
              "decorators": [],
              "name": "intrinsic",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 404,
              "end": 410
            },
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 416,
            "end": 441,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 420,
                "end": 440,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 433,
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 422,
                    "end": 433,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 424,
                      "end": 433,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 433,
                        "decorators": [],
                        "name": "intrinsic",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 436,
                  "end": 440,
                  "raw": "'ok'",
                  "value": "ok",
                  "regex": null,
                  "bigint": null
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
        "start": 376,
        "end": 378,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
