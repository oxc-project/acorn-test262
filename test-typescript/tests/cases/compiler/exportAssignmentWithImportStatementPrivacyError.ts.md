__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 397,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 224,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 86,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 86,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 46,
                "name": "connectModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 47,
                "end": 86,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 57,
                    "end": 80,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 61,
                        "name": "res",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 66,
                        "name": "req",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "name": "next",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 75,
                        "end": 79
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
            "start": 91,
            "end": 221,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 98,
              "end": 221,
              "id": {
                "type": "Identifier",
                "start": 108,
                "end": 121,
                "name": "connectExport",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 122,
                "end": 221,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 132,
                    "end": 175,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 135,
                      "name": "use",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 137,
                        "end": 174,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 138,
                            "end": 156,
                            "name": "mod",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 141,
                              "end": 156,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 143,
                                "end": 156,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 143,
                                  "end": 156,
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
                          "start": 158,
                          "end": 174,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 161,
                            "end": 174,
                            "typeName": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 174,
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
                    "start": 184,
                    "end": 215,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 190,
                      "name": "listen",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 214,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 192,
                        "end": 214,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 193,
                            "end": 205,
                            "name": "port",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 197,
                              "end": 205,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 199,
                                "end": 205
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 214,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 210,
                            "end": 214
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
    {
      "type": "TSModuleDeclaration",
      "start": 226,
      "end": 368,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 234,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 235,
        "end": 368,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 241,
            "end": 366,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 248,
              "end": 366,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 252,
                  "end": 365,
                  "id": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 365,
                    "name": "server",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 258,
                      "end": 365,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 260,
                        "end": 365,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 270,
                            "end": 291,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 272,
                              "end": 290,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 274,
                                "end": 290,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 274,
                                  "end": 290,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 274,
                                    "end": 276,
                                    "name": "m2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 277,
                                    "end": 290,
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
                            "start": 300,
                            "end": 324,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 305,
                              "name": "test1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 305,
                              "end": 323,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 307,
                                "end": 323,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 307,
                                  "end": 323,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 307,
                                    "end": 309,
                                    "name": "m2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 310,
                                    "end": 323,
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
                            "start": 333,
                            "end": 359,
                            "key": {
                              "type": "Identifier",
                              "start": 333,
                              "end": 338,
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
                              "start": 340,
                              "end": 358,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 342,
                                "end": 358,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 342,
                                  "end": 358,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 342,
                                    "end": 344,
                                    "name": "m2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 345,
                                    "end": 358,
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
      "start": 369,
      "end": 384,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 379,
        "name": "M22",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 382,
        "end": 383,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 386,
      "end": 397,
      "expression": {
        "type": "Identifier",
        "start": 395,
        "end": 396,
        "name": "M",
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
