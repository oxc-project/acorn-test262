__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 471,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 471,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 471,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 18,
            "end": 42,
            "body": {
              "type": "TSInterfaceBody",
              "start": 35,
              "end": 42,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 34,
              "decorators": [],
              "name": "IState",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 47,
            "end": 99,
            "body": {
              "type": "TSInterfaceBody",
              "start": 64,
              "end": 99,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 74,
                  "end": 93,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 84,
                    "decorators": [],
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 86,
                      "end": 92
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "decorators": [],
              "name": "IToken",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 104,
            "end": 185,
            "body": {
              "type": "TSInterfaceBody",
              "start": 126,
              "end": 185,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 136,
                  "end": 153,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 142,
                    "decorators": [],
                    "name": "tokens",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 150,
                          "decorators": [],
                          "name": "IToken",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 162,
                  "end": 179,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 170,
                    "decorators": [],
                    "name": "endState",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 170,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 178,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 178,
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "decorators": [],
              "name": "ILineTokens",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 190,
            "end": 293,
            "body": {
              "type": "TSInterfaceBody",
              "start": 206,
              "end": 293,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 216,
                  "end": 287,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 224,
                    "decorators": [],
                    "name": "tokenize",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 225,
                      "end": 236,
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 229,
                        "end": 236,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 230,
                          "end": 236
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 238,
                      "end": 250,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 243,
                        "end": 250,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 244,
                          "end": 250,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 250,
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 252,
                      "end": 273,
                      "decorators": [],
                      "name": "includeStates",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 265,
                        "end": 273,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 266,
                          "end": 273
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 274,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 275,
                      "end": 286,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 286,
                        "decorators": [],
                        "name": "ILineTokens",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 200,
              "end": 205,
              "decorators": [],
              "name": "IMode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 298,
            "end": 465,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 305,
              "end": 465,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 332,
                "end": 465,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 342,
                    "end": 459,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 357,
                      "decorators": [],
                      "name": "tokenize",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 357,
                      "end": 459,
                      "async": false,
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
                              "raw": "null",
                              "value": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 358,
                          "end": 369,
                          "decorators": [],
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 362,
                            "end": 369,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 363,
                              "end": 369
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 371,
                          "end": 386,
                          "decorators": [],
                          "name": "tokens",
                          "optional": false,
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
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 378,
                                  "end": 384,
                                  "decorators": [],
                                  "name": "IToken",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 388,
                          "end": 409,
                          "decorators": [],
                          "name": "includeStates",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 401,
                            "end": 409,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 402,
                              "end": 409
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 410,
                        "end": 422,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 411,
                          "end": 422,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 411,
                            "end": 422,
                            "decorators": [],
                            "name": "ILineTokens",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 311,
                "end": 314,
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 326,
                  "end": 331,
                  "expression": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 331,
                    "decorators": [],
                    "name": "IMode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
