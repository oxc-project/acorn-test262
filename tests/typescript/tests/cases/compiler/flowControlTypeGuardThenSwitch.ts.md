__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "initializer": null,
            "computed": false,
            "start": 23,
            "end": 24
          }
        ],
        "start": 10,
        "end": 27
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 43
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 60
                },
                "typeArguments": null,
                "start": 56,
                "end": 60
              },
              "start": 54,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 61
          }
        ],
        "start": 44,
        "end": 63
      },
      "declare": false,
      "start": 29,
      "end": 63
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 76
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 89
          },
          "typeArguments": null,
          "start": 85,
          "end": 89
        }
      ],
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 100
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 106
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 108
                  },
                  "start": 102,
                  "end": 108
                },
                "typeArguments": null,
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
            },
            "accessibility": null,
            "static": false,
            "start": 96,
            "end": 109
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "yar",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              },
              "start": 117,
              "end": 122
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 123
          }
        ],
        "start": 90,
        "end": 125
      },
      "declare": false,
      "start": 65,
      "end": 125
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 138
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 151
          },
          "typeArguments": null,
          "start": 147,
          "end": 151
        }
      ],
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 168
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "start": 164,
                  "end": 170
                },
                "typeArguments": null,
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 158,
            "end": 171
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "gar",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              },
              "start": 179,
              "end": 184
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 185
          }
        ],
        "start": 152,
        "end": 187
      },
      "declare": false,
      "start": 127,
      "end": 187
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 198
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "typeArguments": null,
            "start": 201,
            "end": 202
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "typeArguments": null,
            "start": 205,
            "end": 206
          }
        ],
        "start": 201,
        "end": 206
      },
      "declare": false,
      "start": 189,
      "end": 207
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBoth",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 223
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 227,
                "end": 231
              },
              "typeArguments": null,
              "start": 227,
              "end": 231
            },
            "start": 225,
            "end": 231
          },
          "start": 224,
          "end": 231
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Both",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 243
              },
              "typeArguments": null,
              "start": 239,
              "end": 243
            },
            "start": 239,
            "end": 243
          },
          "start": 234,
          "end": 243
        },
        "start": 232,
        "end": 243
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 257,
              "end": 261
            },
            "start": 250,
            "end": 262
          }
        ],
        "start": 244,
        "end": 264
      },
      "expression": false,
      "start": 208,
      "end": 264
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
            "name": "foo",
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
                  "start": 275,
                  "end": 279
                },
                "typeArguments": null,
                "start": 275,
                "end": 279
              },
              "start": 273,
              "end": 279
            },
            "start": 270,
            "end": 279
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 291
          },
          "definite": false,
          "start": 270,
          "end": 291
        }
      ],
      "declare": false,
      "start": 266,
      "end": 292
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isBoth",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 303
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 307
          }
        ],
        "optional": false,
        "start": 297,
        "end": 308
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 327
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 332
              },
              "optional": false,
              "computed": false,
              "start": 324,
              "end": 332
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 353
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 354,
                    "end": 355
                  },
                  "optional": false,
                  "computed": false,
                  "start": 349,
                  "end": 355
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myA",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 380,
                                "end": 381
                              },
                              "typeArguments": null,
                              "start": 380,
                              "end": 381
                            },
                            "start": 378,
                            "end": 381
                          },
                          "start": 375,
                          "end": 381
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 387
                        },
                        "definite": false,
                        "start": 375,
                        "end": 387
                      }
                    ],
                    "declare": false,
                    "start": 369,
                    "end": 388
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 427,
                    "end": 433
                  }
                ],
                "start": 344,
                "end": 433
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 451
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 447,
                  "end": 453
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myB",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 478,
                                "end": 479
                              },
                              "typeArguments": null,
                              "start": 478,
                              "end": 479
                            },
                            "start": 476,
                            "end": 479
                          },
                          "start": 473,
                          "end": 479
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 482,
                          "end": 485
                        },
                        "definite": false,
                        "start": 473,
                        "end": 485
                      }
                    ],
                    "declare": false,
                    "start": 467,
                    "end": 486
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 499,
                    "end": 505
                  }
                ],
                "start": 442,
                "end": 505
              }
            ],
            "start": 316,
            "end": 511
          }
        ],
        "start": 310,
        "end": 513
      },
      "alternate": null,
      "start": 293,
      "end": 513
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 513
}
```
