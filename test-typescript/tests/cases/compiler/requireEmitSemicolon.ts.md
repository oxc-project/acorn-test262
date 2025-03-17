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
          "name": "Models",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 43,
                  "name": "Person",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 44,
                  "end": 86,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 54,
                      "end": 83,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 65,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "constructor",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 65,
                        "end": 83,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 66,
                            "end": 78,
                            "name": "name",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 78,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 72,
                                "end": 78
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 80,
                          "end": 83,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
        "name": "P",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "Database",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 215,
                  "name": "DB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 216,
                  "end": 326,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 223,
                      "end": 323,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 240,
                        "name": "findPerson",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 240,
                        "end": 323,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 241,
                            "end": 251,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 243,
                              "end": 251,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 245,
                                "end": 251
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                                      "name": "P",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 294,
                                      "end": 300,
                                      "name": "Models",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 301,
                                    "end": 307,
                                    "name": "Person",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 308,
                                    "end": 314,
                                    "value": "Rock",
                                    "raw": "\"Rock\""
                                  }
                                ],
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
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
                                  "name": "P",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 256,
                                  "end": 262,
                                  "name": "Models",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 263,
                                "end": 269,
                                "name": "Person",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "public"
                    }
                  ]
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
