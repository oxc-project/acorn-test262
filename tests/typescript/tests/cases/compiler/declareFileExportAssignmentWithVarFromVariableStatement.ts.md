__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 46
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
                        "start": 58,
                        "end": 61
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 66
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 75,
                        "end": 79
                      },
                      "start": 73,
                      "end": 79
                    },
                    "start": 57,
                    "end": 80
                  }
                ],
                "start": 47,
                "end": 86
              },
              "declare": false,
              "start": 23,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 16,
            "end": 86
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectExport",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 121
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
                      "start": 132,
                      "end": 135
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
                                  "start": 143,
                                  "end": 156
                                },
                                "typeArguments": null,
                                "start": 143,
                                "end": 156
                              },
                              "start": 141,
                              "end": 156
                            },
                            "start": 138,
                            "end": 156
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
                              "start": 161,
                              "end": 174
                            },
                            "typeArguments": null,
                            "start": 161,
                            "end": 174
                          },
                          "start": 158,
                          "end": 174
                        },
                        "start": 137,
                        "end": 174
                      },
                      "start": 135,
                      "end": 174
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 132,
                    "end": 175
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
                      "start": 184,
                      "end": 190
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
                                "start": 199,
                                "end": 205
                              },
                              "start": 197,
                              "end": 205
                            },
                            "start": 193,
                            "end": 205
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 210,
                            "end": 214
                          },
                          "start": 207,
                          "end": 214
                        },
                        "start": 192,
                        "end": 214
                      },
                      "start": 190,
                      "end": 214
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 184,
                    "end": 215
                  }
                ],
                "start": 122,
                "end": 221
              },
              "declare": false,
              "start": 98,
              "end": 221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 91,
            "end": 221
          }
        ],
        "start": 10,
        "end": 224
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 224
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 234,
            "end": 236
          },
          "definite": false,
          "start": 230,
          "end": 236
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
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
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 252,
                            "end": 254
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 255,
                            "end": 268
                          },
                          "start": 252,
                          "end": 268
                        },
                        "typeArguments": null,
                        "start": 252,
                        "end": 268
                      },
                      "start": 250,
                      "end": 268
                    },
                    "start": 248,
                    "end": 269
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
                      "start": 274,
                      "end": 279
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 281,
                            "end": 283
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 284,
                            "end": 297
                          },
                          "start": 281,
                          "end": 297
                        },
                        "typeArguments": null,
                        "start": 281,
                        "end": 297
                      },
                      "start": 279,
                      "end": 297
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 274,
                    "end": 298
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 308
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
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 312,
                            "end": 314
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 315,
                            "end": 328
                          },
                          "start": 312,
                          "end": 328
                        },
                        "typeArguments": null,
                        "start": 312,
                        "end": 328
                      },
                      "start": 310,
                      "end": 328
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 303,
                    "end": 329
                  }
                ],
                "start": 242,
                "end": 331
              },
              "start": 240,
              "end": 331
            },
            "start": 238,
            "end": 331
          },
          "init": null,
          "definite": false,
          "start": 238,
          "end": 331
        }
      ],
      "declare": false,
      "start": 226,
      "end": 332
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 345
      },
      "start": 334,
      "end": 346
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 346
}
```
