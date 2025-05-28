__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 476,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 476,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "connect",
        "raw": "'connect'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 476,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 55,
              "decorators": [],
              "name": "connectModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 56,
              "end": 97,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 67,
                  "end": 90,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 68,
                      "end": 71,
                      "decorators": [],
                      "name": "res",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 73,
                      "end": 76,
                      "decorators": [],
                      "name": "req",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 82,
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 85,
                      "end": 89
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 103,
            "end": 229,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 126,
              "decorators": [],
              "name": "connectExport",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 127,
              "end": 229,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 138,
                  "end": 181,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 141,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 143,
                      "end": 180,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 144,
                          "end": 162,
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 147,
                            "end": 162,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 149,
                              "end": 162,
                              "typeName": {
                                "type": "Identifier",
                                "start": 149,
                                "end": 162,
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
                        "start": 164,
                        "end": 180,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 167,
                          "end": 180,
                          "typeName": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 180,
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
                  "start": 191,
                  "end": 222,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 197,
                    "decorators": [],
                    "name": "listen",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 221,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 199,
                      "end": 221,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 200,
                          "end": 212,
                          "decorators": [],
                          "name": "port",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 204,
                            "end": 212,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 206,
                              "end": 212
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 214,
                        "end": 221,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 217,
                          "end": 221
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
          {
            "type": "VariableDeclaration",
            "start": 235,
            "end": 474,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 239,
                "end": 473,
                "id": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 473,
                  "decorators": [],
                  "name": "server",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 245,
                    "end": 473,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 247,
                      "end": 473,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 258,
                          "end": 276,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 260,
                            "end": 275,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 262,
                              "end": 275,
                              "typeName": {
                                "type": "Identifier",
                                "start": 262,
                                "end": 275,
                                "decorators": [],
                                "name": "connectExport",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 286,
                          "end": 307,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 286,
                            "end": 291,
                            "decorators": [],
                            "name": "test1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 291,
                            "end": 306,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 293,
                              "end": 306,
                              "typeName": {
                                "type": "Identifier",
                                "start": 293,
                                "end": 306,
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 331,
                          "end": 354,
                          "key": {
                            "type": "Identifier",
                            "start": 331,
                            "end": 336,
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
                            "start": 338,
                            "end": 353,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 340,
                              "end": 353,
                              "typeName": {
                                "type": "Identifier",
                                "start": 340,
                                "end": 353,
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "typeAnnotation": null
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
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
