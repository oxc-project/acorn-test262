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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 267,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 265,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 37,
              "decorators": [],
              "name": "select",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 265,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 103,
                          "decorators": [],
                          "name": "result",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 106,
                          "end": 130,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 116,
                              "end": 129,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 116,
                                "end": 122,
                                "decorators": [],
                                "name": "values",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 123,
                                "end": 129,
                                "decorators": [],
                                "name": "length",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 115,
                            "decorators": [],
                            "name": "Array",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ForStatement",
                    "start": 142,
                    "end": 234,
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
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 196,
                                "end": 202,
                                "decorators": [],
                                "name": "result",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 203,
                                "end": 204,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 208,
                              "end": 223,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 213,
                                  "end": 222,
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 213,
                                    "end": 219,
                                    "decorators": [],
                                    "name": "values",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 220,
                                    "end": 221,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 208,
                                "end": 212,
                                "decorators": [],
                                "name": "func",
                                "optional": false
                              },
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 147,
                      "end": 156,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 151,
                          "end": 156,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 155,
                            "end": 156,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 158,
                      "end": 175,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 162,
                        "end": 175,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 168,
                          "decorators": [],
                          "name": "values",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 177,
                      "end": 180,
                      "argument": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
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
                      "decorators": [],
                      "name": "result",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 44,
                  "end": 55,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 57,
                  "end": 74,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 63,
                      "end": 74,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 64,
                          "end": 68,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
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
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
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
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
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
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 37,
                "end": 43,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 38,
                    "end": 39,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 41,
                    "end": 42,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Linq",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
