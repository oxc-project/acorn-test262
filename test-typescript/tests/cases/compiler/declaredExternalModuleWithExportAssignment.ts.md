__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 361,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 361,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 31,
            "end": 94,
            "body": {
              "type": "TSInterfaceBody",
              "start": 55,
              "end": 94,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 65,
                  "end": 88,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 66,
                      "end": 69,
                      "decorators": [],
                      "name": "res",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 71,
                      "end": 74,
                      "decorators": [],
                      "name": "req",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 76,
                      "end": 80,
                      "decorators": [],
                      "name": "next",
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 83,
                      "end": 87
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 54,
              "decorators": [],
              "name": "connectModule",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 100,
            "end": 223,
            "body": {
              "type": "TSInterfaceBody",
              "start": 124,
              "end": 223,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 134,
                  "end": 177,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 137,
                    "decorators": [],
                    "name": "use",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 137,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 139,
                      "end": 176,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 140,
                          "end": 158,
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 143,
                            "end": 158,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 145,
                              "end": 158,
                              "typeName": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 158,
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
                        "start": 160,
                        "end": 176,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 163,
                          "end": 176,
                          "typeName": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 176,
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
                  "start": 186,
                  "end": 217,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 192,
                    "decorators": [],
                    "name": "listen",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 216,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 194,
                      "end": 216,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 195,
                          "end": 207,
                          "decorators": [],
                          "name": "port",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 199,
                            "end": 207,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 201,
                              "end": 207
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 209,
                        "end": 216,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 212,
                          "end": 216
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
              "start": 110,
              "end": 123,
              "decorators": [],
              "name": "connectExport",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 229,
            "end": 338,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 233,
                "end": 337,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 337,
                  "decorators": [],
                  "name": "server",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 239,
                    "end": 337,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 241,
                      "end": 337,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 251,
                          "end": 269,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 253,
                            "end": 268,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 255,
                              "end": 268,
                              "typeName": {
                                "type": "Identifier",
                                "start": 255,
                                "end": 268,
                                "decorators": [],
                                "name": "connectExport",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 278,
                          "end": 299,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 283,
                            "decorators": [],
                            "name": "test1",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 283,
                            "end": 298,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 285,
                              "end": 298,
                              "typeName": {
                                "type": "Identifier",
                                "start": 285,
                                "end": 298,
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 308,
                          "end": 331,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 313,
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
                            "start": 315,
                            "end": 330,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 317,
                              "end": 330,
                              "typeName": {
                                "type": "Identifier",
                                "start": 317,
                                "end": 330,
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
          },
          {
            "type": "TSExportAssignment",
            "start": 343,
            "end": 359,
            "expression": {
              "type": "Identifier",
              "start": 352,
              "end": 358,
              "decorators": [],
              "name": "server",
              "optional": false
            }
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
  "sourceType": "script",
  "hashbang": null
}
```
