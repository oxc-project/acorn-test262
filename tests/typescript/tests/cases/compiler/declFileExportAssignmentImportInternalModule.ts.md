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
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "connectModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
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
                                "decorators": [],
                                "name": "res",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 94,
                                "end": 97,
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 99,
                                "end": 103,
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null
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
                    "exportKind": "type",
                    "attributes": []
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
                        "decorators": [],
                        "name": "connectExport",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
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
                              "decorators": [],
                              "name": "use",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "mod",
                                    "optional": false,
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
                                          "decorators": [],
                                          "name": "connectModule",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
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
                                      "decorators": [],
                                      "name": "connectExport",
                                      "optional": false,
                                      "typeAnnotation": null
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
                              "decorators": [],
                              "name": "listen",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "port",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 244,
                                      "end": 252,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 246,
                                        "end": 252
                                      }
                                    }
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
                    "exportKind": "type",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 285,
            "end": 410,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 292,
              "end": 410,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 296,
                  "end": 409,
                  "id": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 409,
                    "decorators": [],
                    "name": "server",
                    "optional": false,
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
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 321,
                                    "end": 334,
                                    "decorators": [],
                                    "name": "connectExport",
                                    "optional": false,
                                    "typeAnnotation": null
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
                              "decorators": [],
                              "name": "test1",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 354,
                                    "end": 367,
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false,
                                    "typeAnnotation": null
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
                              "decorators": [],
                              "name": "test2",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 389,
                                    "end": 402,
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false,
                                    "typeAnnotation": null
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
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 425,
        "end": 427,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
