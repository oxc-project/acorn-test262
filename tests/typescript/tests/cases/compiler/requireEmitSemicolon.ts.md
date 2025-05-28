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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 88,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 20,
          "decorators": [],
          "name": "Models",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 88,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 24,
              "end": 86,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 31,
                "end": 86,
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
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 44,
                  "end": 86,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 54,
                      "end": 83,
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
                      "value": {
                        "type": "FunctionExpression",
                        "start": 65,
                        "end": 83,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
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
                        "body": {
                          "type": "BlockStatement",
                          "start": 80,
                          "end": 83,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 60,
        "end": 93,
        "expression": {
          "type": "Literal",
          "start": 68,
          "end": 92,
          "value": "requireEmitSemicolon_0",
          "raw": "\"requireEmitSemicolon_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 174,
      "end": 328,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 181,
        "end": 328,
        "id": {
          "type": "Identifier",
          "start": 188,
          "end": 196,
          "decorators": [],
          "name": "Database",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 197,
          "end": 328,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 200,
              "end": 326,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 207,
                "end": 326,
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
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 216,
                  "end": 326,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 223,
                      "end": 323,
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
                      "value": {
                        "type": "FunctionExpression",
                        "start": 240,
                        "end": 323,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
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
                            },
                            "typeArguments": null
                          }
                        },
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
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 292,
                                  "end": 307,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 292,
                                    "end": 300,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 292,
                                      "end": 293,
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 294,
                                      "end": 300,
                                      "decorators": [],
                                      "name": "Models",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 301,
                                    "end": 307,
                                    "decorators": [],
                                    "name": "Person",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 308,
                                    "end": 314,
                                    "value": "Rock",
                                    "raw": "\"Rock\""
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public"
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
