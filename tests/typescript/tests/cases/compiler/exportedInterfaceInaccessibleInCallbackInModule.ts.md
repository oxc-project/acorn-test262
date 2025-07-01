__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ProgressCallback",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 33
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "progress",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 47,
                      "end": 50
                    },
                    "start": 46,
                    "end": 50
                  },
                  "start": 38,
                  "end": 50
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 52,
                  "end": 55
                },
                "start": 51,
                "end": 55
              },
              "start": 37,
              "end": 56
            }
          ],
          "start": 34,
          "end": 58
        },
        "declare": false,
        "start": 7,
        "end": 58
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 58
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 113
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 114,
              "end": 115
            }
          ],
          "start": 113,
          "end": 116
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 133
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "init",
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
                            "name": "complete",
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
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "V",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 157,
                                          "end": 158
                                        },
                                        "typeArguments": null,
                                        "start": 157,
                                        "end": 158
                                      },
                                      "start": 156,
                                      "end": 158
                                    },
                                    "start": 151,
                                    "end": 158
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 161,
                                    "end": 165
                                  },
                                  "start": 159,
                                  "end": 165
                                },
                                "start": 150,
                                "end": 165
                              },
                              "start": 148,
                              "end": 165
                            },
                            "start": 140,
                            "end": 165
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
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
                                    "name": "err",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 178,
                                        "end": 181
                                      },
                                      "start": 177,
                                      "end": 181
                                    },
                                    "start": 174,
                                    "end": 181
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 184,
                                    "end": 188
                                  },
                                  "start": 182,
                                  "end": 188
                                },
                                "start": 173,
                                "end": 188
                              },
                              "start": 172,
                              "end": 188
                            },
                            "start": 167,
                            "end": 188
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "progress",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ProgressCallback",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 199,
                                  "end": 215
                                },
                                "typeArguments": null,
                                "start": 199,
                                "end": 215
                              },
                              "start": 198,
                              "end": 215
                            },
                            "start": 190,
                            "end": 215
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 218,
                            "end": 222
                          },
                          "start": 216,
                          "end": 222
                        },
                        "start": 139,
                        "end": 222
                      },
                      "start": 138,
                      "end": 222
                    },
                    "start": 134,
                    "end": 222
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oncancel",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 235,
                        "end": 238
                      },
                      "start": 233,
                      "end": 238
                    },
                    "start": 224,
                    "end": 238
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 133,
                "end": 240
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 122,
              "end": 240
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 313
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 315
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 314,
                      "end": 315
                    }
                  ],
                  "start": 313,
                  "end": 316
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "success",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 334,
                                  "end": 335
                                },
                                "typeArguments": null,
                                "start": 334,
                                "end": 335
                              },
                              "start": 333,
                              "end": 335
                            },
                            "start": 328,
                            "end": 335
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPromise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 346
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 347,
                                    "end": 348
                                  },
                                  "typeArguments": null,
                                  "start": 347,
                                  "end": 348
                                }
                              ],
                              "start": 346,
                              "end": 349
                            },
                            "start": 338,
                            "end": 349
                          },
                          "start": 336,
                          "end": 349
                        },
                        "start": 327,
                        "end": 349
                      },
                      "start": 325,
                      "end": 349
                    },
                    "start": 317,
                    "end": 349
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 364,
                                "end": 367
                              },
                              "start": 363,
                              "end": 367
                            },
                            "start": 360,
                            "end": 367
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPromise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 370,
                              "end": 378
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 379,
                                    "end": 380
                                  },
                                  "typeArguments": null,
                                  "start": 379,
                                  "end": 380
                                }
                              ],
                              "start": 378,
                              "end": 381
                            },
                            "start": 370,
                            "end": 381
                          },
                          "start": 368,
                          "end": 381
                        },
                        "start": 359,
                        "end": 381
                      },
                      "start": 357,
                      "end": 381
                    },
                    "start": 351,
                    "end": 381
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "progress",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ProgressCallback",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 409
                        },
                        "typeArguments": null,
                        "start": 393,
                        "end": 409
                      },
                      "start": 392,
                      "end": 409
                    },
                    "start": 383,
                    "end": 409
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 420
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 421,
                            "end": 422
                          },
                          "typeArguments": null,
                          "start": 421,
                          "end": 422
                        }
                      ],
                      "start": 420,
                      "end": 423
                    },
                    "start": 412,
                    "end": 423
                  },
                  "start": 410,
                  "end": 423
                },
                "body": null,
                "expression": false,
                "start": 313,
                "end": 424
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 302,
              "end": 424
            }
          ],
          "start": 117,
          "end": 426
        },
        "abstract": false,
        "declare": true,
        "start": 91,
        "end": 426
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 84,
      "end": 426
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 426
}
```
