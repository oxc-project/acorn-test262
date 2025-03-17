__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 439,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 412,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 279,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 279,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 33,
                "end": 279,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 43,
                    "end": 121,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 50,
                      "end": 121,
                      "id": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 73,
                        "name": "connectModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 74,
                        "end": 121,
                        "body": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 88,
                            "end": 111,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 89,
                                "end": 92,
                                "name": "res",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 94,
                                "end": 97,
                                "name": "req",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 99,
                                "end": 103,
                                "name": "next",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 104,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 106,
                                "end": 110
                              }
                            }
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 130,
                    "end": 272,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 137,
                      "end": 272,
                      "id": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 160,
                        "name": "connectExport",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 161,
                        "end": 272,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 175,
                            "end": 218,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 178,
                              "name": "use",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 178,
                              "end": 217,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 180,
                                "end": 217,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 181,
                                    "end": 199,
                                    "name": "mod",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 184,
                                      "end": 199,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 186,
                                        "end": 199,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 186,
                                          "end": 199,
                                          "name": "connectModule",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 201,
                                  "end": 217,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 204,
                                    "end": 217,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 204,
                                      "end": 217,
                                      "name": "connectExport",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 231,
                            "end": 262,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 231,
                              "end": 237,
                              "name": "listen",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 237,
                              "end": 261,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 239,
                                "end": 261,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 240,
                                    "end": 252,
                                    "name": "port",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 244,
                                      "end": 252,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 246,
                                        "end": 252
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 254,
                                  "end": 261,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 257,
                                    "end": 261
                                  }
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 285,
            "end": 410,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 292,
              "end": 410,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 296,
                  "end": 409,
                  "id": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 409,
                    "name": "server",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 302,
                      "end": 409,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 304,
                        "end": 409,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 314,
                            "end": 335,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 316,
                              "end": 334,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 318,
                                "end": 334,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 318,
                                  "end": 334,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 318,
                                    "end": 320,
                                    "name": "m2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 321,
                                    "end": 334,
                                    "name": "connectExport",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 344,
                            "end": 368,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 344,
                              "end": 349,
                              "name": "test1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 349,
                              "end": 367,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 351,
                                "end": 367,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 351,
                                  "end": 367,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 351,
                                    "end": 353,
                                    "name": "m2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 354,
                                    "end": 367,
                                    "name": "connectModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSMethodSignature",
                            "start": 377,
                            "end": 403,
                            "key": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 382,
                              "name": "test2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 384,
                              "end": 402,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 386,
                                "end": 402,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 386,
                                  "end": 402,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 386,
                                    "end": 388,
                                    "name": "m2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 389,
                                    "end": 402,
                                    "name": "connectModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 414,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 422,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 425,
        "end": 427,
        "name": "m3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 428,
      "end": 439,
      "expression": {
        "type": "Identifier",
        "start": 437,
        "end": 438,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
