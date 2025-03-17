__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 268,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Linq",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 267,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 265,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 37,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 265,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 44,
                  "end": 55,
                  "name": "values",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 52,
                      "end": 55,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 52,
                        "end": 53,
                        "typeName": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 53,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 57,
                  "end": 74,
                  "name": "func",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 63,
                      "end": 74,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 64,
                          "end": 68,
                          "name": "v",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 65,
                            "end": 68,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 67,
                              "end": 68,
                              "typeName": {
                                "type": "Identifier",
                                "start": 67,
                                "end": 68,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 70,
                        "end": 74,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 73,
                          "end": 74,
                          "typeName": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 265,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 93,
                    "end": 131,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 97,
                        "end": 130,
                        "id": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 103,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 106,
                          "end": 130,
                          "callee": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 115,
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 116,
                              "end": 129,
                              "object": {
                                "type": "Identifier",
                                "start": 116,
                                "end": 122,
                                "name": "values",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 123,
                                "end": 129,
                                "name": "length",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ForStatement",
                    "start": 142,
                    "end": 234,
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 147,
                      "end": 156,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 151,
                          "end": 156,
                          "id": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 155,
                            "end": 156,
                            "value": 0,
                            "raw": "0"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 158,
                      "end": 175,
                      "left": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "start": 162,
                        "end": 175,
                        "object": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 168,
                          "name": "values",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "name": "length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 177,
                      "end": 180,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 182,
                      "end": 234,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 196,
                          "end": 224,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 196,
                            "end": 223,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 196,
                              "end": 205,
                              "object": {
                                "type": "Identifier",
                                "start": 196,
                                "end": 202,
                                "name": "result",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 203,
                                "end": 204,
                                "name": "i",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 208,
                              "end": 223,
                              "callee": {
                                "type": "Identifier",
                                "start": 208,
                                "end": 212,
                                "name": "func",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 213,
                                  "end": 222,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 213,
                                    "end": 219,
                                    "name": "values",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 220,
                                    "end": 221,
                                    "name": "i",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 245,
                    "end": 259,
                    "argument": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 258,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 37,
                "end": 43,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 38,
                    "end": 39,
                    "name": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "T",
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
                    "start": 41,
                    "end": 42,
                    "name": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "name": "S",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 77,
                  "end": 82,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 77,
                    "end": 80
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
