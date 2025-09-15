__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 48
            },
            "start": 32,
            "end": 49
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 71
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "name": "express",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 82
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpressServer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 96
                  },
                  "start": 75,
                  "end": 96
                },
                "typeArguments": null,
                "start": 75,
                "end": 96
              },
              "start": 73,
              "end": 96
            },
            "body": null,
            "expression": false,
            "start": 55,
            "end": 97
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 120
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
                      "name": "ExpressServer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 162
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "enable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 178,
                            "end": 184
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 191,
                                  "end": 197
                                },
                                "start": 189,
                                "end": 197
                              },
                              "start": 185,
                              "end": 197
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpressServer",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 200,
                                "end": 213
                              },
                              "typeArguments": null,
                              "start": 200,
                              "end": 213
                            },
                            "start": 198,
                            "end": 213
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 178,
                          "end": 214
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "post",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 228,
                            "end": 232
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "path",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RegExp",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 239,
                                    "end": 245
                                  },
                                  "typeArguments": null,
                                  "start": 239,
                                  "end": 245
                                },
                                "start": 237,
                                "end": 245
                              },
                              "start": 233,
                              "end": 245
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handler",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "req",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Function",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 262,
                                            "end": 270
                                          },
                                          "typeArguments": null,
                                          "start": 262,
                                          "end": 270
                                        },
                                        "start": 260,
                                        "end": 270
                                      },
                                      "start": 257,
                                      "end": 270
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 275,
                                      "end": 279
                                    },
                                    "start": 272,
                                    "end": 279
                                  },
                                  "start": 256,
                                  "end": 279
                                },
                                "start": 254,
                                "end": 279
                              },
                              "start": 247,
                              "end": 279
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 283,
                              "end": 287
                            },
                            "start": 281,
                            "end": 287
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 228,
                          "end": 288
                        }
                      ],
                      "start": 163,
                      "end": 299
                    },
                    "declare": false,
                    "start": 139,
                    "end": 299
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 132,
                  "end": 299
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpressServerRequest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 342
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 343,
                      "end": 355
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 316,
                    "end": 355
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 309,
                  "end": 355
                }
              ],
              "start": 121,
              "end": 362
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 103,
            "end": 362
          }
        ],
        "start": 25,
        "end": 365
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 365
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 365
}
```
