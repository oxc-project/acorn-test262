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
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 224,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 86,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 86,
              "body": {
                "type": "TSInterfaceBody",
                "start": 47,
                "end": 86,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 57,
                    "end": 80,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 61,
                        "decorators": [],
                        "name": "res",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 66,
                        "decorators": [],
                        "name": "req",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "next",
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
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 46,
                "decorators": [],
                "name": "connectModule",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 91,
            "end": 221,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 98,
              "end": 221,
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
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 135,
                      "decorators": [],
                      "name": "use",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 137,
                        "end": 174,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 138,
                            "end": 156,
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "connectModule",
                                  "optional": false
                                }
                              }
                            }
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
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 184,
                    "end": 215,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 190,
                      "decorators": [],
                      "name": "listen",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 214,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 192,
                        "end": 214,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 193,
                            "end": 205,
                            "decorators": [],
                            "name": "port",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 197,
                              "end": 205,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 199,
                                "end": 205
                              }
                            }
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
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 108,
                "end": 121,
                "decorators": [],
                "name": "connectExport",
                "optional": false
              }
            },
            "exportKind": "type",
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
        "end": 9,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 226,
      "end": 368,
      "body": {
        "type": "TSModuleBlock",
        "start": 235,
        "end": 368,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 241,
            "end": 366,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 248,
              "end": 366,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 252,
                  "end": 365,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 365,
                    "decorators": [],
                    "name": "server",
                    "optional": false,
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
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 277,
                                    "end": 290,
                                    "decorators": [],
                                    "name": "connectExport",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 300,
                            "end": 324,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 305,
                              "decorators": [],
                              "name": "test1",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
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
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 310,
                                    "end": 323,
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "TSMethodSignature",
                            "start": 333,
                            "end": 359,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 333,
                              "end": 338,
                              "decorators": [],
                              "name": "test2",
                              "optional": false
                            },
                            "kind": "method",
                            "optional": false,
                            "params": [],
                            "readonly": false,
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
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 345,
                                    "end": 358,
                                    "decorators": [],
                                    "name": "connectModule",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 233,
        "end": 234,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 369,
      "end": 384,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 379,
        "decorators": [],
        "name": "M22",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 382,
        "end": 383,
        "decorators": [],
        "name": "M",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 386,
      "end": 397,
      "expression": {
        "type": "Identifier",
        "start": 395,
        "end": 396,
        "decorators": [],
        "name": "M",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
