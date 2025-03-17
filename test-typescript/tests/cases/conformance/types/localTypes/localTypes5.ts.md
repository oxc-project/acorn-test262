__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 275,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 217,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 217,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 42,
                  "end": 211,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 43,
                    "end": 211,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 52,
                      "end": 211,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 66,
                          "end": 201,
                          "argument": {
                            "type": "CallExpression",
                            "start": 73,
                            "end": 200,
                            "callee": {
                              "type": "FunctionExpression",
                              "start": 74,
                              "end": 191,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 89,
                                "end": 191,
                                "body": [
                                  {
                                    "type": "ClassDeclaration",
                                    "start": 107,
                                    "end": 137,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 113,
                                      "end": 114,
                                      "name": "Y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "superClass": null,
                                    "body": {
                                      "type": "ClassBody",
                                      "start": 118,
                                      "end": 137,
                                      "body": []
                                    },
                                    "decorators": [],
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 114,
                                      "end": 117,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 115,
                                          "end": 116,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 115,
                                            "end": 116,
                                            "name": "E",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": null,
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false
                                        }
                                      ]
                                    },
                                    "implements": [],
                                    "abstract": false,
                                    "declare": false,
                                    "superTypeArguments": null
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 154,
                                    "end": 177,
                                    "argument": {
                                      "type": "NewExpression",
                                      "start": 161,
                                      "end": 176,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 165,
                                        "end": 166,
                                        "name": "Y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 166,
                                        "end": 174,
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 167,
                                            "end": 173
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 83,
                                "end": 86,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 84,
                                    "end": 85,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 84,
                                      "end": 85,
                                      "name": "D",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false
                                  }
                                ]
                              },
                              "returnType": null
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 192,
                              "end": 198,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 193,
                                  "end": 197,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 193,
                                    "end": 197,
                                    "name": "Date",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 43,
                      "end": 49,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 44,
                          "end": 45,
                          "name": {
                            "type": "Identifier",
                            "start": 44,
                            "end": 45,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 47,
                          "end": 48,
                          "name": {
                            "type": "Identifier",
                            "start": 47,
                            "end": 48,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
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
          {
            "type": "VariableDeclaration",
            "start": 222,
            "end": 238,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 226,
                "end": 237,
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 230,
                  "end": 237,
                  "callee": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 243,
            "end": 273,
            "argument": {
              "type": "CallExpression",
              "start": 250,
              "end": 272,
              "callee": {
                "type": "MemberExpression",
                "start": 250,
                "end": 253,
                "object": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 253,
                "end": 270,
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
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 284,
            "end": 295,
            "callee": {
              "type": "Identifier",
              "start": 284,
              "end": 287,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 287,
              "end": 293,
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 288,
                  "end": 292
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
