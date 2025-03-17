__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 472,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 471,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 18,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 34,
              "name": "IState",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 35,
              "end": 42,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 47,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "name": "IToken",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 64,
              "end": 99,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 74,
                  "end": 93,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 84,
                    "name": "startIndex",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 86,
                      "end": 92
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 104,
            "end": 185,
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "name": "ILineTokens",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 126,
              "end": 185,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 136,
                  "end": 153,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 142,
                    "name": "tokens",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 144,
                      "end": 152,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 144,
                        "end": 150,
                        "typeName": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 150,
                          "name": "IToken",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 162,
                  "end": 179,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 170,
                    "name": "endState",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 170,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 178,
                        "name": "IState",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 190,
            "end": 293,
            "id": {
              "type": "Identifier",
              "start": 200,
              "end": 205,
              "name": "IMode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 206,
              "end": 293,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 216,
                  "end": 287,
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 224,
                    "name": "tokenize",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 225,
                      "end": 236,
                      "name": "line",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 229,
                        "end": 236,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 230,
                          "end": 236
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 238,
                      "end": 250,
                      "name": "state",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 243,
                        "end": 250,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 244,
                          "end": 250,
                          "typeName": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 250,
                            "name": "IState",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 252,
                      "end": 273,
                      "name": "includeStates",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 265,
                        "end": 273,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 266,
                          "end": 273
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 274,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 275,
                      "end": 286,
                      "typeName": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 286,
                        "name": "ILineTokens",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 298,
            "end": 465,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 305,
              "end": 465,
              "id": {
                "type": "Identifier",
                "start": 311,
                "end": 314,
                "name": "Bug",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 332,
                "end": 465,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 342,
                    "end": 459,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 357,
                      "name": "tokenize",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 357,
                      "end": 459,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 358,
                          "end": 369,
                          "name": "line",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 362,
                            "end": 369,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 363,
                              "end": 369
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 371,
                          "end": 386,
                          "name": "tokens",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 377,
                            "end": 386,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 378,
                              "end": 386,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 378,
                                "end": 384,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 378,
                                  "end": 384,
                                  "name": "IToken",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 388,
                          "end": 409,
                          "name": "includeStates",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 401,
                            "end": 409,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 402,
                              "end": 409
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 423,
                        "end": 459,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 437,
                            "end": 449,
                            "argument": {
                              "type": "Literal",
                              "start": 444,
                              "end": 448,
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 410,
                        "end": 422,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 411,
                          "end": 422,
                          "typeName": {
                            "type": "Identifier",
                            "start": 411,
                            "end": 422,
                            "name": "ILineTokens",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 326,
                  "end": 331,
                  "expression": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 331,
                    "name": "IMode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
