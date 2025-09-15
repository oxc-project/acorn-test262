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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IState",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 37
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 38,
              "end": 45
            },
            "declare": false,
            "start": 21,
            "end": 45
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
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
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 87
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 89,
                      "end": 95
                    },
                    "start": 87,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 96
                }
              ],
              "start": 67,
              "end": 102
            },
            "declare": false,
            "start": 50,
            "end": 102
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILineTokens",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 128
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
                    "name": "tokens",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 145
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IToken",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 153
                        },
                        "typeArguments": null,
                        "start": 147,
                        "end": 153
                      },
                      "start": 147,
                      "end": 155
                    },
                    "start": 145,
                    "end": 155
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 139,
                  "end": 156
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 173
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 181
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 181
                    },
                    "start": 173,
                    "end": 181
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 165,
                  "end": 182
                }
              ],
              "start": 129,
              "end": 188
            },
            "declare": false,
            "start": 107,
            "end": 188
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IMode",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 208
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
                    "name": "tokenize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 227
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 233,
                          "end": 239
                        },
                        "start": 232,
                        "end": 239
                      },
                      "start": 228,
                      "end": 239
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 247,
                            "end": 253
                          },
                          "typeArguments": null,
                          "start": 247,
                          "end": 253
                        },
                        "start": 246,
                        "end": 253
                      },
                      "start": 241,
                      "end": 253
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "includeStates",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 269,
                          "end": 276
                        },
                        "start": 268,
                        "end": 276
                      },
                      "start": 255,
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
                        "name": "ILineTokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 289
                      },
                      "typeArguments": null,
                      "start": 278,
                      "end": 289
                    },
                    "start": 277,
                    "end": 289
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 219,
                  "end": 290
                }
              ],
              "start": 209,
              "end": 296
            },
            "declare": false,
            "start": 193,
            "end": 296
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 317
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IMode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 334
                  },
                  "typeArguments": null,
                  "start": 329,
                  "end": 334
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokenize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 360
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 366,
                              "end": 372
                            },
                            "start": 365,
                            "end": 372
                          },
                          "start": 361,
                          "end": 372
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tokens",
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
                                  "name": "IToken",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 381,
                                  "end": 387
                                },
                                "typeArguments": null,
                                "start": 381,
                                "end": 387
                              },
                              "start": 381,
                              "end": 389
                            },
                            "start": 380,
                            "end": 389
                          },
                          "start": 374,
                          "end": 389
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "includeStates",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 405,
                              "end": 412
                            },
                            "start": 404,
                            "end": 412
                          },
                          "start": 391,
                          "end": 412
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ILineTokens",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 414,
                            "end": 425
                          },
                          "typeArguments": null,
                          "start": 414,
                          "end": 425
                        },
                        "start": 413,
                        "end": 425
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
                              "start": 447,
                              "end": 451
                            },
                            "start": 440,
                            "end": 452
                          }
                        ],
                        "start": 426,
                        "end": 462
                      },
                      "expression": false,
                      "start": 360,
                      "end": 462
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 345,
                    "end": 462
                  }
                ],
                "start": 335,
                "end": 468
              },
              "abstract": false,
              "declare": false,
              "start": 308,
              "end": 468
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 301,
            "end": 468
          }
        ],
        "start": 15,
        "end": 474
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 474
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 474
}
```
