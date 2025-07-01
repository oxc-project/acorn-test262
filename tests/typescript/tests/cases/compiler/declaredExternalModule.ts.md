__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "connect",
        "raw": "'connect'",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "connectModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 55
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
                      "start": 68,
                      "end": 71
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "req",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 76
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 82
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 85,
                      "end": 89
                    },
                    "start": 83,
                    "end": 89
                  },
                  "start": 67,
                  "end": 90
                }
              ],
              "start": 56,
              "end": 97
            },
            "declare": false,
            "start": 32,
            "end": 97
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "connectExport",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 126
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
                    "start": 138,
                    "end": 141
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
                                "start": 149,
                                "end": 162
                              },
                              "typeArguments": null,
                              "start": 149,
                              "end": 162
                            },
                            "start": 147,
                            "end": 162
                          },
                          "start": 144,
                          "end": 162
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
                            "start": 167,
                            "end": 180
                          },
                          "typeArguments": null,
                          "start": 167,
                          "end": 180
                        },
                        "start": 164,
                        "end": 180
                      },
                      "start": 143,
                      "end": 180
                    },
                    "start": 141,
                    "end": 180
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 138,
                  "end": 181
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
                    "start": 191,
                    "end": 197
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
                              "start": 206,
                              "end": 212
                            },
                            "start": 204,
                            "end": 212
                          },
                          "start": 200,
                          "end": 212
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 217,
                          "end": 221
                        },
                        "start": 214,
                        "end": 221
                      },
                      "start": 199,
                      "end": 221
                    },
                    "start": 197,
                    "end": 221
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 191,
                  "end": 222
                }
              ],
              "start": 127,
              "end": 229
            },
            "declare": false,
            "start": 103,
            "end": 229
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectExport",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 262,
                                "end": 275
                              },
                              "typeArguments": null,
                              "start": 262,
                              "end": 275
                            },
                            "start": 260,
                            "end": 275
                          },
                          "start": 258,
                          "end": 276
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
                            "start": 286,
                            "end": 291
                          },
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
                                "start": 293,
                                "end": 306
                              },
                              "typeArguments": null,
                              "start": 293,
                              "end": 306
                            },
                            "start": 291,
                            "end": 306
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 286,
                          "end": 307
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 331,
                            "end": 336
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 340,
                                "end": 353
                              },
                              "typeArguments": null,
                              "start": 340,
                              "end": 353
                            },
                            "start": 338,
                            "end": 353
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 331,
                          "end": 354
                        }
                      ],
                      "start": 247,
                      "end": 473
                    },
                    "start": 245,
                    "end": 473
                  },
                  "start": 239,
                  "end": 473
                },
                "init": null,
                "definite": false,
                "start": 239,
                "end": 473
              }
            ],
            "declare": false,
            "start": 235,
            "end": 474
          }
        ],
        "start": 25,
        "end": 476
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 476
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 476
}
```
