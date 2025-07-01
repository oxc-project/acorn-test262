__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 43
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 44,
                            "end": 45
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 44,
                          "end": 45
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 47,
                            "end": 48
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 47,
                          "end": 48
                        }
                      ],
                      "start": 43,
                      "end": 49
                    },
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
                              "type": "FunctionExpression",
                              "id": null,
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
                                      "name": "D",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 84,
                                      "end": 85
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 84,
                                    "end": 85
                                  }
                                ],
                                "start": 83,
                                "end": 86
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ClassDeclaration",
                                    "decorators": [],
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 113,
                                      "end": 114
                                    },
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "name": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 115,
                                            "end": 116
                                          },
                                          "constraint": null,
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 115,
                                          "end": 116
                                        }
                                      ],
                                      "start": 114,
                                      "end": 117
                                    },
                                    "superClass": null,
                                    "superTypeArguments": null,
                                    "implements": [],
                                    "body": {
                                      "type": "ClassBody",
                                      "body": [],
                                      "start": 118,
                                      "end": 137
                                    },
                                    "abstract": false,
                                    "declare": false,
                                    "start": 107,
                                    "end": 137
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 165,
                                        "end": 166
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 167,
                                            "end": 173
                                          }
                                        ],
                                        "start": 166,
                                        "end": 174
                                      },
                                      "arguments": [],
                                      "start": 161,
                                      "end": 176
                                    },
                                    "start": 154,
                                    "end": 177
                                  }
                                ],
                                "start": 89,
                                "end": 191
                              },
                              "expression": false,
                              "start": 74,
                              "end": 191
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Date",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 193,
                                    "end": 197
                                  },
                                  "typeArguments": null,
                                  "start": 193,
                                  "end": 197
                                }
                              ],
                              "start": 192,
                              "end": 198
                            },
                            "arguments": [],
                            "optional": false,
                            "start": 73,
                            "end": 200
                          },
                          "start": 66,
                          "end": 201
                        }
                      ],
                      "start": 52,
                      "end": 211
                    },
                    "expression": false,
                    "start": 43,
                    "end": 211
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 42,
                  "end": 211
                }
              ],
              "start": 32,
              "end": 217
            },
            "abstract": false,
            "declare": false,
            "start": 24,
            "end": 217
          },
          {
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
                  "start": 226,
                  "end": 227
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 235
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 230,
                  "end": 237
                },
                "definite": false,
                "start": 226,
                "end": 237
              }
            ],
            "declare": false,
            "start": 222,
            "end": 238
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
                },
                "optional": false,
                "computed": false,
                "start": 250,
                "end": 253
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 262,
                    "end": 269
                  }
                ],
                "start": 253,
                "end": 270
              },
              "arguments": [],
              "optional": false,
              "start": 250,
              "end": 272
            },
            "start": 243,
            "end": 273
          }
        ],
        "start": 18,
        "end": 275
      },
      "expression": false,
      "start": 0,
      "end": 275
    },
    {
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
            "start": 280,
            "end": 281
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 287
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 288,
                  "end": 292
                }
              ],
              "start": 287,
              "end": 293
            },
            "arguments": [],
            "optional": false,
            "start": 284,
            "end": 295
          },
          "definite": false,
          "start": 280,
          "end": 295
        }
      ],
      "declare": false,
      "start": 276,
      "end": 296
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 296
}
```
