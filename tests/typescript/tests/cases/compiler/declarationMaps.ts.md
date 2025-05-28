__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 338,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "connectModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                        "decorators": [],
                        "name": "res",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 66,
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "connectExport",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
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
                    "start": 184,
                    "end": 215,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 190,
                      "decorators": [],
                      "name": "listen",
                      "optional": false,
                      "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 324,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 323,
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 323,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 234,
                "end": 323,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 240,
                    "end": 261,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 242,
                      "end": 260,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 244,
                        "end": 260,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 244,
                          "end": 260,
                          "left": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 246,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 247,
                            "end": 260,
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
                    "start": 266,
                    "end": 290,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 271,
                      "decorators": [],
                      "name": "test1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 271,
                      "end": 289,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 273,
                        "end": 289,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 273,
                          "end": 289,
                          "left": {
                            "type": "Identifier",
                            "start": 273,
                            "end": 275,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 276,
                            "end": 289,
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
                    "start": 295,
                    "end": 321,
                    "key": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 300,
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
                      "start": 302,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 304,
                        "end": 320,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 304,
                          "end": 320,
                          "left": {
                            "type": "Identifier",
                            "start": 304,
                            "end": 306,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 307,
                            "end": 320,
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
    {
      "type": "TSExportAssignment",
      "start": 326,
      "end": 338,
      "expression": {
        "type": "Identifier",
        "start": 335,
        "end": 337,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
