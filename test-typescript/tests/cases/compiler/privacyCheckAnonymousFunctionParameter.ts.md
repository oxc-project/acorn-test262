__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 323,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 79,
      "end": 323,
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 323,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 98,
            "end": 211,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 105,
              "end": 211,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 211,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 193,
                    "end": 205,
                    "argument": {
                      "type": "Literal",
                      "start": 200,
                      "end": 204,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 114,
                "end": 125,
                "decorators": [],
                "name": "fromDoWhile",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 168,
                  "decorators": [],
                  "name": "doWhile",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 138,
                      "end": 168,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 139,
                          "end": 156,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 143,
                            "end": 156,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 145,
                              "end": 156,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 153,
                                "end": 156,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 154,
                                    "end": 155,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 154,
                                      "end": 155,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 153,
                                "decorators": [],
                                "name": "Iterator",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 158,
                        "end": 168,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 161,
                          "end": 168
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 169,
                "end": 182,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 171,
                  "end": 182,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 179,
                    "end": 182,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 180,
                        "end": 181,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 181,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 179,
                    "decorators": [],
                    "name": "Iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 125,
                "end": 128,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 126,
                    "end": 127,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 217,
            "end": 321,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 240,
              "end": 321,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 250,
                  "end": 315,
                  "argument": {
                    "type": "CallExpression",
                    "start": 257,
                    "end": 314,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 269,
                        "end": 313,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 277,
                          "end": 313,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 291,
                              "end": 303,
                              "argument": {
                                "type": "Literal",
                                "start": 298,
                                "end": 302,
                                "raw": "true",
                                "value": true,
                                "regex": null,
                                "bigint": null
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 269,
                            "end": 273,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 268,
                      "decorators": [],
                      "name": "fromDoWhile",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 226,
              "end": 237,
              "decorators": [],
              "name": "fromOrderBy",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
