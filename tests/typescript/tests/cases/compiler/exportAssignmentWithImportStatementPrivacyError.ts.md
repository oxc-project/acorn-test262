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
        "name": "m2",
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
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 46
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
                        "start": 58,
                        "end": 61
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 66
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 75,
                        "end": 79
                      },
                      "start": 73,
                      "end": 79
                    },
                    "start": 57,
                    "end": 80
                  }
                ],
                "start": 47,
                "end": 86
              },
              "declare": false,
              "start": 23,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 16,
            "end": 86
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
                "start": 108,
                "end": 121
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
                      "start": 132,
                      "end": 135
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
                                  "start": 143,
                                  "end": 156
                                },
                                "typeArguments": null,
                                "start": 143,
                                "end": 156
                              },
                              "start": 141,
                              "end": 156
                            },
                            "start": 138,
                            "end": 156
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
                              "start": 161,
                              "end": 174
                            },
                            "typeArguments": null,
                            "start": 161,
                            "end": 174
                          },
                          "start": 158,
                          "end": 174
                        },
                        "start": 137,
                        "end": 174
                      },
                      "start": 135,
                      "end": 174
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 132,
                    "end": 175
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
                      "start": 184,
                      "end": 190
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
                                "start": 199,
                                "end": 205
                              },
                              "start": 197,
                              "end": 205
                            },
                            "start": 193,
                            "end": 205
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 210,
                            "end": 214
                          },
                          "start": 207,
                          "end": 214
                        },
                        "start": 192,
                        "end": 214
                      },
                      "start": 190,
                      "end": 214
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 184,
                    "end": 215
                  }
                ],
                "start": 122,
                "end": 221
              },
              "declare": false,
              "start": 98,
              "end": 221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 91,
            "end": 221
          }
        ],
        "start": 10,
        "end": 224
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 224
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 234
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                                    "start": 274,
                                    "end": 276
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectExport",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 277,
                                    "end": 290
                                  },
                                  "start": 274,
                                  "end": 290
                                },
                                "typeArguments": null,
                                "start": 274,
                                "end": 290
                              },
                              "start": 272,
                              "end": 290
                            },
                            "start": 270,
                            "end": 291
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
                              "start": 300,
                              "end": 305
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
                                    "start": 307,
                                    "end": 309
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 310,
                                    "end": 323
                                  },
                                  "start": 307,
                                  "end": 323
                                },
                                "typeArguments": null,
                                "start": 307,
                                "end": 323
                              },
                              "start": 305,
                              "end": 323
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 300,
                            "end": 324
                          },
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 333,
                              "end": 338
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
                                    "start": 342,
                                    "end": 344
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 345,
                                    "end": 358
                                  },
                                  "start": 342,
                                  "end": 358
                                },
                                "typeArguments": null,
                                "start": 342,
                                "end": 358
                              },
                              "start": 340,
                              "end": 358
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 333,
                            "end": 359
                          }
                        ],
                        "start": 260,
                        "end": 365
                      },
                      "start": 258,
                      "end": 365
                    },
                    "start": 252,
                    "end": 365
                  },
                  "init": null,
                  "definite": false,
                  "start": 252,
                  "end": 365
                }
              ],
              "declare": false,
              "start": 248,
              "end": 366
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 241,
            "end": 366
          }
        ],
        "start": 235,
        "end": 368
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 226,
      "end": 368
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M22",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 379
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 383
      },
      "importKind": "value",
      "start": 369,
      "end": 384
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 396
      },
      "start": 386,
      "end": 397
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 397
}
```
