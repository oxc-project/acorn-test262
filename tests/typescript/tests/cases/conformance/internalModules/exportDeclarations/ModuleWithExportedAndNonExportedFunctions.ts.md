__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 37
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    },
                    "start": 39,
                    "end": 47
                  },
                  "start": 38,
                  "end": 47
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 66,
                      "end": 70
                    },
                    "start": 59,
                    "end": 71
                  }
                ],
                "start": 49,
                "end": 77
              },
              "expression": false,
              "start": 26,
              "end": 77
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 77
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fng",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 102
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
                      "start": 103,
                      "end": 104
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 103,
                    "end": 104
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 106,
                    "end": 107
                  }
                ],
                "start": 102,
                "end": 108
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
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
                        "start": 112,
                        "end": 113
                      },
                      "typeArguments": null,
                      "start": 112,
                      "end": 113
                    },
                    "start": 110,
                    "end": 113
                  },
                  "start": 109,
                  "end": 113
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
                    "start": 116,
                    "end": 117
                  },
                  "typeArguments": null,
                  "start": 116,
                  "end": 117
                },
                "start": 114,
                "end": 117
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
                      "start": 135,
                      "end": 139
                    },
                    "start": 128,
                    "end": 140
                  }
                ],
                "start": 118,
                "end": 146
              },
              "expression": false,
              "start": 90,
              "end": 146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 83,
            "end": 146
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 164
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 168,
                    "end": 174
                  },
                  "start": 166,
                  "end": 174
                },
                "start": 165,
                "end": 174
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 193,
                    "end": 198
                  },
                  "start": 186,
                  "end": 199
                }
              ],
              "start": 176,
              "end": 205
            },
            "expression": false,
            "start": 152,
            "end": 205
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fng2",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 224
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
                    "start": 225,
                    "end": 226
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 225,
                  "end": 226
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 228,
                  "end": 229
                }
              ],
              "start": 224,
              "end": 230
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
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
                      "start": 234,
                      "end": 235
                    },
                    "typeArguments": null,
                    "start": 234,
                    "end": 235
                  },
                  "start": 232,
                  "end": 235
                },
                "start": 231,
                "end": 235
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
                  "start": 238,
                  "end": 239
                },
                "typeArguments": null,
                "start": 238,
                "end": 239
              },
              "start": 236,
              "end": 239
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
                    "start": 257,
                    "end": 261
                  },
                  "start": 250,
                  "end": 262
                }
              ],
              "start": 240,
              "end": 268
            },
            "expression": false,
            "start": 211,
            "end": 268
          }
        ],
        "start": 12,
        "end": 270
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 270
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
            "name": "fn",
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 347,
                        "end": 353
                      },
                      "start": 345,
                      "end": 353
                    },
                    "start": 344,
                    "end": 353
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 358,
                    "end": 365
                  },
                  "start": 355,
                  "end": 365
                },
                "start": 343,
                "end": 365
              },
              "start": 341,
              "end": 365
            },
            "start": 339,
            "end": 365
          },
          "init": null,
          "definite": false,
          "start": 339,
          "end": 365
        }
      ],
      "declare": false,
      "start": 335,
      "end": 366
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
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 373
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 377
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 380
            },
            "optional": false,
            "computed": false,
            "start": 376,
            "end": 380
          },
          "definite": false,
          "start": 371,
          "end": 380
        }
      ],
      "declare": false,
      "start": 367,
      "end": 381
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
            "name": "fng",
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
                        "start": 393,
                        "end": 394
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 393,
                      "end": 394
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 397
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 396,
                      "end": 397
                    }
                  ],
                  "start": 392,
                  "end": 398
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
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
                          "start": 402,
                          "end": 403
                        },
                        "typeArguments": null,
                        "start": 402,
                        "end": 403
                      },
                      "start": 400,
                      "end": 403
                    },
                    "start": 399,
                    "end": 403
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
                      "start": 408,
                      "end": 409
                    },
                    "typeArguments": null,
                    "start": 408,
                    "end": 409
                  },
                  "start": 405,
                  "end": 409
                },
                "start": 392,
                "end": 409
              },
              "start": 390,
              "end": 409
            },
            "start": 387,
            "end": 409
          },
          "init": null,
          "definite": false,
          "start": 387,
          "end": 409
        }
      ],
      "declare": false,
      "start": 383,
      "end": 410
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
            "name": "fng",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 418
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 422
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fng",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 426
            },
            "optional": false,
            "computed": false,
            "start": 421,
            "end": 426
          },
          "definite": false,
          "start": 415,
          "end": 426
        }
      ],
      "declare": false,
      "start": 411,
      "end": 427
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 513
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 517
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 521
            },
            "optional": false,
            "computed": false,
            "start": 516,
            "end": 521
          },
          "definite": false,
          "start": 510,
          "end": 521
        }
      ],
      "declare": false,
      "start": 506,
      "end": 522
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
            "name": "fng2",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 531
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 535
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fng2",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 540
            },
            "optional": false,
            "computed": false,
            "start": 534,
            "end": 540
          },
          "definite": false,
          "start": 527,
          "end": 540
        }
      ],
      "declare": false,
      "start": 523,
      "end": 541
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 541
}
```
