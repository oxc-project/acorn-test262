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
        "start": 10,
        "end": 12
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
                "start": 36,
                "end": 38
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
                        "start": 66,
                        "end": 79
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
                                "start": 95,
                                "end": 98
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 100,
                                "end": 103
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 105,
                                "end": 109
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 112,
                                "end": 116
                              },
                              "start": 110,
                              "end": 116
                            },
                            "start": 94,
                            "end": 117
                          }
                        ],
                        "start": 80,
                        "end": 127
                      },
                      "declare": false,
                      "start": 56,
                      "end": 127
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 49,
                    "end": 127
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
                        "start": 153,
                        "end": 166
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
                              "start": 181,
                              "end": 184
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
                                          "start": 192,
                                          "end": 205
                                        },
                                        "typeArguments": null,
                                        "start": 192,
                                        "end": 205
                                      },
                                      "start": 190,
                                      "end": 205
                                    },
                                    "start": 187,
                                    "end": 205
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
                                      "start": 210,
                                      "end": 223
                                    },
                                    "typeArguments": null,
                                    "start": 210,
                                    "end": 223
                                  },
                                  "start": 207,
                                  "end": 223
                                },
                                "start": 186,
                                "end": 223
                              },
                              "start": 184,
                              "end": 223
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 181,
                            "end": 224
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
                              "start": 237,
                              "end": 243
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
                                        "start": 252,
                                        "end": 258
                                      },
                                      "start": 250,
                                      "end": 258
                                    },
                                    "start": 246,
                                    "end": 258
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 263,
                                    "end": 267
                                  },
                                  "start": 260,
                                  "end": 267
                                },
                                "start": 245,
                                "end": 267
                              },
                              "start": 243,
                              "end": 267
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 237,
                            "end": 268
                          }
                        ],
                        "start": 167,
                        "end": 278
                      },
                      "declare": false,
                      "start": 143,
                      "end": 278
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 136,
                    "end": 278
                  }
                ],
                "start": 39,
                "end": 285
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 26,
              "end": 285
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 285
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
                                    "start": 324,
                                    "end": 326
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectExport",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 327,
                                    "end": 340
                                  },
                                  "start": 324,
                                  "end": 340
                                },
                                "typeArguments": null,
                                "start": 324,
                                "end": 340
                              },
                              "start": 322,
                              "end": 340
                            },
                            "start": 320,
                            "end": 341
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
                              "start": 350,
                              "end": 355
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
                                    "start": 357,
                                    "end": 359
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 360,
                                    "end": 373
                                  },
                                  "start": 357,
                                  "end": 373
                                },
                                "typeArguments": null,
                                "start": 357,
                                "end": 373
                              },
                              "start": 355,
                              "end": 373
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 350,
                            "end": 374
                          },
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 383,
                              "end": 388
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
                                    "start": 392,
                                    "end": 394
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 395,
                                    "end": 408
                                  },
                                  "start": 392,
                                  "end": 408
                                },
                                "typeArguments": null,
                                "start": 392,
                                "end": 408
                              },
                              "start": 390,
                              "end": 408
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 383,
                            "end": 409
                          }
                        ],
                        "start": 310,
                        "end": 415
                      },
                      "start": 308,
                      "end": 415
                    },
                    "start": 302,
                    "end": 415
                  },
                  "init": null,
                  "definite": false,
                  "start": 302,
                  "end": 415
                }
              ],
              "declare": false,
              "start": 298,
              "end": 416
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 291,
            "end": 416
          }
        ],
        "start": 13,
        "end": 418
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 418
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 428
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 433
      },
      "importKind": "value",
      "start": 420,
      "end": 433
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 444
      },
      "start": 434,
      "end": 445
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 445
}
```
