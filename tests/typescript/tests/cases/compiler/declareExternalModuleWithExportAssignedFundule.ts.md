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
      "end": 362,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 362,
        "body": [
          {
            "type": "TSExportAssignment",
            "start": 32,
            "end": 49,
            "expression": {
              "type": "Identifier",
              "start": 41,
              "end": 48,
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 55,
            "end": 97,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 71,
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 96,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 75,
                  "end": 96,
                  "left": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 82,
                    "decorators": [],
                    "name": "express",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 96,
                    "decorators": [],
                    "name": "ExpressServer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 103,
            "end": 359,
            "body": {
              "type": "TSModuleBlock",
              "start": 118,
              "end": 359,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 129,
                  "end": 296,
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 136,
                    "end": 296,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 160,
                      "end": 296,
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "start": 175,
                          "end": 211,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 181,
                            "decorators": [],
                            "name": "enable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 182,
                              "end": 194,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 186,
                                "end": 194,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 188,
                                  "end": 194
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 195,
                            "end": 210,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 197,
                              "end": 210,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 197,
                                "end": 210,
                                "decorators": [],
                                "name": "ExpressServer",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "static": false,
                          "typeParameters": null
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 225,
                          "end": 285,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 229,
                            "decorators": [],
                            "name": "post",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 230,
                              "end": 242,
                              "decorators": [],
                              "name": "path",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 234,
                                "end": 242,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 236,
                                  "end": 242,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 236,
                                    "end": 242,
                                    "decorators": [],
                                    "name": "RegExp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 244,
                              "end": 276,
                              "decorators": [],
                              "name": "handler",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 251,
                                "end": 276,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 253,
                                  "end": 276,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 254,
                                      "end": 267,
                                      "decorators": [],
                                      "name": "req",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 257,
                                        "end": 267,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 259,
                                          "end": 267,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 259,
                                            "end": 267,
                                            "decorators": [],
                                            "name": "Function",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 269,
                                    "end": 276,
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 272,
                                      "end": 276
                                    }
                                  },
                                  "typeParameters": null
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 278,
                            "end": 284,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 280,
                              "end": 284
                            }
                          },
                          "static": false,
                          "typeParameters": null
                        }
                      ]
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 159,
                      "decorators": [],
                      "name": "ExpressServer",
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
                  "start": 306,
                  "end": 352,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 313,
                    "end": 352,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 340,
                      "end": 352,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 339,
                      "decorators": [],
                      "name": "ExpressServerRequest",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
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
              "start": 110,
              "end": 117,
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "module"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "\"express\"",
        "value": "express"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
