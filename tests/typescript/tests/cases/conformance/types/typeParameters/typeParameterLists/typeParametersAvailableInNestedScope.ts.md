__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 229,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 229,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 21,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 35,
              "end": 91,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 91,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 58,
                    "end": 67,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 62,
                        "end": 66,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 66,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 63,
                            "end": 66,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 65,
                              "end": 66,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 65,
                                "end": 66,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 76,
                    "end": 85,
                    "argument": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 39,
                  "end": 43,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 42,
                      "end": 43,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 35,
                "end": 38,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 36,
                    "end": 37,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 227,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 227,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 227,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 113,
                    "end": 191,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 136,
                      "end": 191,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 150,
                          "end": 159,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 154,
                              "end": 158,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 154,
                                "end": 158,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 155,
                                  "end": 158,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 157,
                                    "end": 158,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 157,
                                      "end": 158,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              },
                              "init": null
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 172,
                          "end": 181,
                          "argument": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 180,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 126,
                      "decorators": [],
                      "name": "temp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 134,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 131,
                          "end": 134,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 133,
                            "end": 134,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 134,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 126,
                      "end": 129,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 127,
                          "end": 128,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 128,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 200,
                    "end": 221,
                    "argument": {
                      "type": "CallExpression",
                      "start": 207,
                      "end": 220,
                      "arguments": [
                        {
                          "type": "TSTypeAssertion",
                          "start": 212,
                          "end": 219,
                          "expression": {
                            "type": "Literal",
                            "start": 215,
                            "end": 219,
                            "raw": "null",
                            "value": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 213,
                            "end": 214,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 211,
                        "decorators": [],
                        "name": "temp",
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "type": "VariableDeclaration",
      "start": 231,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 239,
            "end": 254,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 244,
              "end": 252,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 245,
                  "end": 251
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 256,
      "end": 275,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 256,
        "end": 274,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 256,
          "end": 262,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 258,
            "end": 262,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 265,
          "end": 274,
          "arguments": [
            {
              "type": "Literal",
              "start": 269,
              "end": 273,
              "raw": "null",
              "value": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 265,
            "end": 268,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 293,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 276,
        "end": 292,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 276,
          "end": 282,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 278,
            "end": 282,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 285,
          "end": 292,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 285,
            "end": 290,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 287,
              "end": 290,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
