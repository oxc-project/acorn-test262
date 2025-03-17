__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 363,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 362,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "express",
        "raw": "\"express\""
      },
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
              "name": "express",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 55,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 71,
              "name": "express",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 96,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 75,
                  "end": 96,
                  "left": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 82,
                    "name": "express",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 96,
                    "name": "ExpressServer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 103,
            "end": 359,
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 117,
              "name": "express",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 118,
              "end": 359,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 129,
                  "end": 296,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 136,
                    "end": 296,
                    "id": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 159,
                      "name": "ExpressServer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 160,
                      "end": 296,
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "start": 175,
                          "end": 211,
                          "key": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 181,
                            "name": "enable",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 182,
                              "end": 194,
                              "name": "name",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 186,
                                "end": 194,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 188,
                                  "end": 194
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 195,
                            "end": 210,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 197,
                              "end": 210,
                              "typeName": {
                                "type": "Identifier",
                                "start": 197,
                                "end": 210,
                                "name": "ExpressServer",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 225,
                          "end": 285,
                          "key": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 229,
                            "name": "post",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 230,
                              "end": 242,
                              "name": "path",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 234,
                                "end": 242,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 236,
                                  "end": 242,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 236,
                                    "end": 242,
                                    "name": "RegExp",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 244,
                              "end": 276,
                              "name": "handler",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 251,
                                "end": 276,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 253,
                                  "end": 276,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 254,
                                      "end": 267,
                                      "name": "req",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 257,
                                        "end": 267,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 259,
                                          "end": 267,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 259,
                                            "end": 267,
                                            "name": "Function",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
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
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                          "accessibility": null,
                          "readonly": false,
                          "static": false
                        }
                      ]
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 306,
                  "end": 352,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 313,
                    "end": 352,
                    "id": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 339,
                      "name": "ExpressServerRequest",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 340,
                      "end": 352,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
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
