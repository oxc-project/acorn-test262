__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Models",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Person",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 46
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 57,
                        "end": 68
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 75,
                                "end": 81
                              },
                              "start": 73,
                              "end": 81
                            },
                            "start": 69,
                            "end": 81
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 83,
                          "end": 86
                        },
                        "expression": false,
                        "start": 68,
                        "end": 86
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 57,
                      "end": 86
                    }
                  ],
                  "start": 47,
                  "end": 89
                },
                "abstract": false,
                "declare": false,
                "start": 34,
                "end": 89
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 27,
              "end": 89
            }
          ],
          "start": 24,
          "end": 91
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 92
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 57
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "requireEmitSemicolon_0",
          "raw": "\"requireEmitSemicolon_0\"",
          "start": 68,
          "end": 92
        },
        "start": 60,
        "end": 93
      },
      "importKind": "value",
      "start": 49,
      "end": 94
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Database",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 199
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 218
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "findPerson",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 233,
                        "end": 243
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 248,
                                "end": 254
                              },
                              "start": 246,
                              "end": 254
                            },
                            "start": 244,
                            "end": 254
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 257,
                                  "end": 258
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Models",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 259,
                                  "end": 265
                                },
                                "start": 257,
                                "end": 265
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Person",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 266,
                                "end": 272
                              },
                              "start": 257,
                              "end": 272
                            },
                            "typeArguments": null,
                            "start": 257,
                            "end": 272
                          },
                          "start": 255,
                          "end": 272
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 295,
                                      "end": 296
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Models",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 297,
                                      "end": 303
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 295,
                                    "end": 303
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Person",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 304,
                                    "end": 310
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 295,
                                  "end": 310
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "Rock",
                                    "raw": "\"Rock\"",
                                    "start": 311,
                                    "end": 317
                                  }
                                ],
                                "start": 291,
                                "end": 318
                              },
                              "start": 284,
                              "end": 319
                            }
                          ],
                          "start": 273,
                          "end": 326
                        },
                        "expression": false,
                        "start": 243,
                        "end": 326
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 226,
                      "end": 326
                    }
                  ],
                  "start": 219,
                  "end": 329
                },
                "abstract": false,
                "declare": false,
                "start": 210,
                "end": 329
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 203,
              "end": 329
            }
          ],
          "start": 200,
          "end": 331
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 181,
        "end": 331
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 174,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 49,
  "end": 332
}
```
