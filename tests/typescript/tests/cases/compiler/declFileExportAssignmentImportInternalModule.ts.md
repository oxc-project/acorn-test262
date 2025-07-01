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
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 32
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "connectModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 73
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
                                "name": "res",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 89,
                                "end": 92
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 94,
                                "end": 97
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 99,
                                "end": 103
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 106,
                                "end": 110
                              },
                              "start": 104,
                              "end": 110
                            },
                            "start": 88,
                            "end": 111
                          }
                        ],
                        "start": 74,
                        "end": 121
                      },
                      "declare": false,
                      "start": 50,
                      "end": 121
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 43,
                    "end": 121
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "connectExport",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 160
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
                              "name": "use",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 178
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mod",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "connectModule",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 186,
                                          "end": 199
                                        },
                                        "typeArguments": null,
                                        "start": 186,
                                        "end": 199
                                      },
                                      "start": 184,
                                      "end": 199
                                    },
                                    "start": 181,
                                    "end": 199
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "connectExport",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 204,
                                      "end": 217
                                    },
                                    "typeArguments": null,
                                    "start": 204,
                                    "end": 217
                                  },
                                  "start": 201,
                                  "end": 217
                                },
                                "start": 180,
                                "end": 217
                              },
                              "start": 178,
                              "end": 217
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 175,
                            "end": 218
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "listen",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 231,
                              "end": 237
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "port",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 246,
                                        "end": 252
                                      },
                                      "start": 244,
                                      "end": 252
                                    },
                                    "start": 240,
                                    "end": 252
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 257,
                                    "end": 261
                                  },
                                  "start": 254,
                                  "end": 261
                                },
                                "start": 239,
                                "end": 261
                              },
                              "start": 237,
                              "end": 261
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 231,
                            "end": 262
                          }
                        ],
                        "start": 161,
                        "end": 272
                      },
                      "declare": false,
                      "start": 137,
                      "end": 272
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 130,
                    "end": 272
                  }
                ],
                "start": 33,
                "end": 279
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 23,
              "end": 279
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 279
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "server",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 318,
                                    "end": 320
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectExport",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 321,
                                    "end": 334
                                  },
                                  "start": 318,
                                  "end": 334
                                },
                                "typeArguments": null,
                                "start": 318,
                                "end": 334
                              },
                              "start": 316,
                              "end": 334
                            },
                            "start": 314,
                            "end": 335
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 344,
                              "end": 349
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
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 351,
                                    "end": 353
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 354,
                                    "end": 367
                                  },
                                  "start": 351,
                                  "end": 367
                                },
                                "typeArguments": null,
                                "start": 351,
                                "end": 367
                              },
                              "start": 349,
                              "end": 367
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 344,
                            "end": 368
                          },
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 377,
                              "end": 382
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 386,
                                    "end": 388
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 389,
                                    "end": 402
                                  },
                                  "start": 386,
                                  "end": 402
                                },
                                "typeArguments": null,
                                "start": 386,
                                "end": 402
                              },
                              "start": 384,
                              "end": 402
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 377,
                            "end": 403
                          }
                        ],
                        "start": 304,
                        "end": 409
                      },
                      "start": 302,
                      "end": 409
                    },
                    "start": 296,
                    "end": 409
                  },
                  "init": null,
                  "definite": false,
                  "start": 296,
                  "end": 409
                }
              ],
              "declare": false,
              "start": 292,
              "end": 410
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 285,
            "end": 410
          }
        ],
        "start": 10,
        "end": 412
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 412
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 422
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 427
      },
      "importKind": "value",
      "start": 414,
      "end": 427
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 438
      },
      "start": 428,
      "end": 439
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 439
}
```
