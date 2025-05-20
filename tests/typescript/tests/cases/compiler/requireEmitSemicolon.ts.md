__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 88,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 88,
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 88,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 24,
              "end": 86,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 31,
                "end": 86,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 44,
                  "end": 86,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 54,
                      "end": 83,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 65,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "constructor",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 65,
                        "end": 83,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 80,
                          "end": 83,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 66,
                            "end": 78,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 78,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 72,
                                "end": 78
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 43,
                  "decorators": [],
                  "name": "Person",
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
          "start": 14,
          "end": 20,
          "decorators": [],
          "name": "Models",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 49,
  "end": 329,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 49,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 60,
        "end": 93,
        "expression": {
          "type": "Literal",
          "start": 68,
          "end": 92,
          "raw": "\"requireEmitSemicolon_0\"",
          "value": "requireEmitSemicolon_0"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 174,
      "end": 328,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 181,
        "end": 328,
        "body": {
          "type": "TSModuleBlock",
          "start": 197,
          "end": 328,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 200,
              "end": 326,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 207,
                "end": 326,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 216,
                  "end": 326,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 223,
                      "end": 323,
                      "accessibility": "public",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 240,
                        "decorators": [],
                        "name": "findPerson",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 240,
                        "end": 323,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 270,
                          "end": 323,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 281,
                              "end": 316,
                              "argument": {
                                "type": "NewExpression",
                                "start": 288,
                                "end": 315,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 308,
                                    "end": 314,
                                    "raw": "\"Rock\"",
                                    "value": "Rock"
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 292,
                                  "end": 307,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 292,
                                    "end": 300,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 292,
                                      "end": 293,
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 294,
                                      "end": 300,
                                      "decorators": [],
                                      "name": "Models",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 301,
                                    "end": 307,
                                    "decorators": [],
                                    "name": "Person",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 241,
                            "end": 251,
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 243,
                              "end": 251,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 245,
                                "end": 251
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 269,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 254,
                            "end": 269,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 254,
                              "end": 269,
                              "left": {
                                "type": "TSQualifiedName",
                                "start": 254,
                                "end": 262,
                                "left": {
                                  "type": "Identifier",
                                  "start": 254,
                                  "end": 255,
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 256,
                                  "end": 262,
                                  "decorators": [],
                                  "name": "Models",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 263,
                                "end": 269,
                                "decorators": [],
                                "name": "Person",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 215,
                  "decorators": [],
                  "name": "DB",
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
          "start": 188,
          "end": 196,
          "decorators": [],
          "name": "Database",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
