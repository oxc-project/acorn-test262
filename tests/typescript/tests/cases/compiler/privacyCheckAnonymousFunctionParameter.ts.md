__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 70
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 70,
        "end": 73
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 74,
        "end": 77
      },
      "declare": false,
      "start": 52,
      "end": 77
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 94
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromDoWhile",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 128
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 130
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 129,
                    "end": 130
                  }
                ],
                "start": 128,
                "end": 131
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doWhile",
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
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Iterator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 148,
                                "end": 156
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 157,
                                      "end": 158
                                    },
                                    "typeArguments": null,
                                    "start": 157,
                                    "end": 158
                                  }
                                ],
                                "start": 156,
                                "end": 159
                              },
                              "start": 148,
                              "end": 159
                            },
                            "start": 146,
                            "end": 159
                          },
                          "start": 142,
                          "end": 159
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 164,
                          "end": 171
                        },
                        "start": 161,
                        "end": 171
                      },
                      "start": 141,
                      "end": 171
                    },
                    "start": 139,
                    "end": 171
                  },
                  "start": 132,
                  "end": 171
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 182
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 183,
                          "end": 184
                        },
                        "typeArguments": null,
                        "start": 183,
                        "end": 184
                      }
                    ],
                    "start": 182,
                    "end": 185
                  },
                  "start": 174,
                  "end": 185
                },
                "start": 172,
                "end": 185
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 203,
                      "end": 207
                    },
                    "start": 196,
                    "end": 208
                  }
                ],
                "start": 186,
                "end": 214
              },
              "expression": false,
              "start": 108,
              "end": 214
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 101,
            "end": 214
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fromOrderBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 240
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromDoWhile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 271
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 272,
                            "end": 276
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 301,
                                "end": 305
                              },
                              "start": 294,
                              "end": 306
                            }
                          ],
                          "start": 280,
                          "end": 316
                        },
                        "id": null,
                        "generator": false,
                        "start": 272,
                        "end": 316
                      }
                    ],
                    "optional": false,
                    "start": 260,
                    "end": 317
                  },
                  "start": 253,
                  "end": 318
                }
              ],
              "start": 243,
              "end": 324
            },
            "expression": false,
            "start": 220,
            "end": 324
          }
        ],
        "start": 95,
        "end": 326
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 79,
      "end": 326
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 326
}
```
