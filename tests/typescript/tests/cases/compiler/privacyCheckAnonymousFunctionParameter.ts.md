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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
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
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 77,
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
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 79,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 323,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 98,
            "end": 211,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 105,
              "end": 211,
              "id": {
                "type": "Identifier",
                "start": 114,
                "end": 125,
                "decorators": [],
                "name": "fromDoWhile",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 125,
                "end": 128,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 126,
                    "end": 127,
                    "name": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
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
                      "typeParameters": null,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 153,
                                "decorators": [],
                                "name": "Iterator",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 153,
                                "end": 156,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 154,
                                    "end": 155,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 154,
                                      "end": 155,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
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
                      }
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 179,
                    "decorators": [],
                    "name": "Iterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 179,
                    "end": 182,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 180,
                        "end": 181,
                        "typeName": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 181,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 217,
            "end": 321,
            "id": {
              "type": "Identifier",
              "start": 226,
              "end": 237,
              "decorators": [],
              "name": "fromOrderBy",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 268,
                      "decorators": [],
                      "name": "fromDoWhile",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 269,
                        "end": 313,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
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
                                "value": true,
                                "raw": "true"
                              }
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
