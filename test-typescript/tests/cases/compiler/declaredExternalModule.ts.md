declaredExternalModule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 477,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 476,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 476,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 97,
            "body": {
              "type": "TSInterfaceBody",
              "start": 56,
              "end": 97,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 67,
                  "end": 90,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 68,
                      "end": 71,
                      "decorators": [],
                      "name": "res",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 73,
                      "end": 76,
                      "decorators": [],
                      "name": "req",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 82,
                      "decorators": [],
                      "name": "next",
                      "optional": false
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
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 55,
              "decorators": [],
              "name": "connectModule",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 103,
            "end": 229,
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
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 141,
                    "decorators": [],
                    "name": "use",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 143,
                      "end": 180,
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
                                "optional": false
                              }
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
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 191,
                  "end": 222,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 197,
                    "decorators": [],
                    "name": "listen",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 221,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 199,
                      "end": 221,
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
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 126,
              "decorators": [],
              "name": "connectExport",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 235,
            "end": 474,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 239,
                "end": 473,
                "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 286,
                          "end": 307,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 286,
                            "end": 291,
                            "decorators": [],
                            "name": "test1",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 331,
                          "end": 354,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 331,
                            "end": 336,
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
                                "optional": false
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
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "'connect'",
        "value": "connect"
      }
    }
  ],
  "sourceType": "script"
}
```
