__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "A",
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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 275,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 217,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 217,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 42,
                  "end": 211,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 43,
                    "end": 211,
                    "id": null,
                    "generator": false,
                    "async": false,
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
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "C",
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
                    "params": [],
                    "returnType": null,
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
                              "generator": false,
                              "async": false,
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
                                      "decorators": [],
                                      "name": "D",
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
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 89,
                                "end": 191,
                                "body": [
                                  {
                                    "type": "ClassDeclaration",
                                    "start": 107,
                                    "end": 137,
                                    "decorators": [],
                                    "id": {
                                      "type": "Identifier",
                                      "start": 113,
                                      "end": 114,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
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
                                            "decorators": [],
                                            "name": "E",
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
                                    "superClass": null,
                                    "superTypeArguments": null,
                                    "implements": [],
                                    "body": {
                                      "type": "ClassBody",
                                      "start": 118,
                                      "end": 137,
                                      "body": []
                                    },
                                    "abstract": false,
                                    "declare": false
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
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
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
                                      },
                                      "arguments": []
                                    }
                                  }
                                ]
                              },
                              "expression": false
                            },
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
                                    "decorators": [],
                                    "name": "Date",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            },
                            "arguments": [],
                            "optional": false
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
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 222,
            "end": 238,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 226,
                "end": 237,
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 230,
                  "end": 237,
                  "callee": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
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
              },
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 296,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 284,
            "end": 295,
            "callee": {
              "type": "Identifier",
              "start": 284,
              "end": 287,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
