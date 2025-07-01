__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Linq",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 37
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 39
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 38,
                    "end": 39
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 42
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 41,
                    "end": 42
                  }
                ],
                "start": 37,
                "end": 43
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 53
                        },
                        "typeArguments": null,
                        "start": 52,
                        "end": 53
                      },
                      "start": 52,
                      "end": 55
                    },
                    "start": 50,
                    "end": 55
                  },
                  "start": 44,
                  "end": 55
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
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
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 67,
                                "end": 68
                              },
                              "typeArguments": null,
                              "start": 67,
                              "end": 68
                            },
                            "start": 65,
                            "end": 68
                          },
                          "start": 64,
                          "end": 68
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 73,
                            "end": 74
                          },
                          "typeArguments": null,
                          "start": 73,
                          "end": 74
                        },
                        "start": 70,
                        "end": 74
                      },
                      "start": 63,
                      "end": 74
                    },
                    "start": 61,
                    "end": 74
                  },
                  "start": 57,
                  "end": 74
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 77,
                    "end": 80
                  },
                  "start": 77,
                  "end": 82
                },
                "start": 75,
                "end": 82
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 103
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 110,
                            "end": 115
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "values",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 116,
                                "end": 122
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 123,
                                "end": 129
                              },
                              "optional": false,
                              "computed": false,
                              "start": 116,
                              "end": 129
                            }
                          ],
                          "start": 106,
                          "end": 130
                        },
                        "definite": false,
                        "start": 97,
                        "end": 130
                      }
                    ],
                    "declare": false,
                    "start": 93,
                    "end": 131
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 152
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 155,
                            "end": 156
                          },
                          "definite": false,
                          "start": 151,
                          "end": 156
                        }
                      ],
                      "declare": false,
                      "start": 147,
                      "end": 156
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 159
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 168
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 175
                        },
                        "optional": false,
                        "computed": false,
                        "start": 162,
                        "end": 175
                      },
                      "start": 158,
                      "end": 175
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 178
                      },
                      "start": 177,
                      "end": 180
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 196,
                                "end": 202
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 203,
                                "end": 204
                              },
                              "optional": false,
                              "computed": true,
                              "start": 196,
                              "end": 205
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "func",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 208,
                                "end": 212
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "values",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 213,
                                    "end": 219
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 220,
                                    "end": 221
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 213,
                                  "end": 222
                                }
                              ],
                              "optional": false,
                              "start": 208,
                              "end": 223
                            },
                            "start": 196,
                            "end": 223
                          },
                          "directive": null,
                          "start": 196,
                          "end": 224
                        }
                      ],
                      "start": 182,
                      "end": 234
                    },
                    "start": 142,
                    "end": 234
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 258
                    },
                    "start": 245,
                    "end": 259
                  }
                ],
                "start": 83,
                "end": 265
              },
              "expression": false,
              "start": 37,
              "end": 265
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 17,
            "end": 265
          }
        ],
        "start": 11,
        "end": 267
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 267
}
```
