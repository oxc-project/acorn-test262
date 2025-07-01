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
              "start": 110,
              "end": 117
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
                      "start": 146,
                      "end": 159
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
                            "start": 175,
                            "end": 181
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
                                  "start": 188,
                                  "end": 194
                                },
                                "start": 186,
                                "end": 194
                              },
                              "start": 182,
                              "end": 194
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
                                "start": 197,
                                "end": 210
                              },
                              "typeArguments": null,
                              "start": 197,
                              "end": 210
                            },
                            "start": 195,
                            "end": 210
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 175,
                          "end": 211
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "post",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 229
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
                                    "start": 236,
                                    "end": 242
                                  },
                                  "typeArguments": null,
                                  "start": 236,
                                  "end": 242
                                },
                                "start": 234,
                                "end": 242
                              },
                              "start": 230,
                              "end": 242
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
                                            "start": 259,
                                            "end": 267
                                          },
                                          "typeArguments": null,
                                          "start": 259,
                                          "end": 267
                                        },
                                        "start": 257,
                                        "end": 267
                                      },
                                      "start": 254,
                                      "end": 267
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 272,
                                      "end": 276
                                    },
                                    "start": 269,
                                    "end": 276
                                  },
                                  "start": 253,
                                  "end": 276
                                },
                                "start": 251,
                                "end": 276
                              },
                              "start": 244,
                              "end": 276
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 280,
                              "end": 284
                            },
                            "start": 278,
                            "end": 284
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 225,
                          "end": 285
                        }
                      ],
                      "start": 160,
                      "end": 296
                    },
                    "declare": false,
                    "start": 136,
                    "end": 296
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 129,
                  "end": 296
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
                      "start": 319,
                      "end": 339
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 340,
                      "end": 352
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 313,
                    "end": 352
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 306,
                  "end": 352
                }
              ],
              "start": 118,
              "end": 359
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 103,
            "end": 359
          }
        ],
        "start": 25,
        "end": 362
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 362
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 362
}
```
