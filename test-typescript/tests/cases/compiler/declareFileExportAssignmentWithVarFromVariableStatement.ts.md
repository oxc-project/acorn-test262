__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 346,
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
                    },
                    "typeParameters": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 135,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
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
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 143,
                                  "end": 156,
                                  "decorators": [],
                                  "name": "connectModule",
                                  "optional": false,
                                  "typeAnnotation": null
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 174,
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 184,
                    "end": 215,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 190,
                      "decorators": [],
                      "name": "listen",
                      "optional": false,
                      "typeAnnotation": null
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
                        },
                        "typeParameters": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 234,
            "end": 236,
            "raw": "10",
            "value": 10
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 331,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 331,
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 242,
                "end": 331,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 248,
                    "end": 269,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 250,
                      "end": 268,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 252,
                        "end": 268,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 252,
                          "end": 268,
                          "left": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 254,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 268,
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 274,
                    "end": 298,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 274,
                      "end": 279,
                      "decorators": [],
                      "name": "test1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 279,
                      "end": 297,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 281,
                        "end": 297,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 281,
                          "end": 297,
                          "left": {
                            "type": "Identifier",
                            "start": 281,
                            "end": 283,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 284,
                            "end": 297,
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 303,
                    "end": 329,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 308,
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 310,
                      "end": 328,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 312,
                        "end": 328,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 312,
                          "end": 328,
                          "left": {
                            "type": "Identifier",
                            "start": 312,
                            "end": 314,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 328,
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
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
      "start": 334,
      "end": 346,
      "expression": {
        "type": "Identifier",
        "start": 343,
        "end": 345,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
