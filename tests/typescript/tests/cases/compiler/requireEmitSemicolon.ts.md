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
          "start": 14,
          "end": 20
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
                  "start": 37,
                  "end": 43
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
                        "start": 54,
                        "end": 65
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
                                "start": 72,
                                "end": 78
                              },
                              "start": 70,
                              "end": 78
                            },
                            "start": 66,
                            "end": 78
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 80,
                          "end": 83
                        },
                        "expression": false,
                        "start": 65,
                        "end": 83
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 54,
                      "end": 83
                    }
                  ],
                  "start": 44,
                  "end": 86
                },
                "abstract": false,
                "declare": false,
                "start": 31,
                "end": 86
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 24,
              "end": 86
            }
          ],
          "start": 21,
          "end": 88
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
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
          "start": 188,
          "end": 196
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
                  "start": 213,
                  "end": 215
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
                        "start": 230,
                        "end": 240
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
                                "start": 245,
                                "end": 251
                              },
                              "start": 243,
                              "end": 251
                            },
                            "start": 241,
                            "end": 251
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
                                  "start": 254,
                                  "end": 255
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Models",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 256,
                                  "end": 262
                                },
                                "start": 254,
                                "end": 262
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Person",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 263,
                                "end": 269
                              },
                              "start": 254,
                              "end": 269
                            },
                            "typeArguments": null,
                            "start": 254,
                            "end": 269
                          },
                          "start": 252,
                          "end": 269
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
                                      "start": 292,
                                      "end": 293
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Models",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 294,
                                      "end": 300
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 292,
                                    "end": 300
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Person",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 301,
                                    "end": 307
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 292,
                                  "end": 307
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "Rock",
                                    "raw": "\"Rock\"",
                                    "start": 308,
                                    "end": 314
                                  }
                                ],
                                "start": 288,
                                "end": 315
                              },
                              "start": 281,
                              "end": 316
                            }
                          ],
                          "start": 270,
                          "end": 323
                        },
                        "expression": false,
                        "start": 240,
                        "end": 323
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 223,
                      "end": 323
                    }
                  ],
                  "start": 216,
                  "end": 326
                },
                "abstract": false,
                "declare": false,
                "start": 207,
                "end": 326
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 200,
              "end": 326
            }
          ],
          "start": 197,
          "end": 328
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 181,
        "end": 328
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 174,
      "end": 328
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 49,
  "end": 329
}
```
