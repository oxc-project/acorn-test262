__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 229,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 21,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 91,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 35,
              "end": 91,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 39,
                  "end": 43,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 42,
                      "end": 43,
                      "typeName": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "name": "U",
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
                        "id": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 66,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 63,
                            "end": 66,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 65,
                              "end": 66,
                              "typeName": {
                                "type": "Identifier",
                                "start": 65,
                                "end": 66,
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
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 76,
                    "end": 85,
                    "argument": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 35,
                "end": 38,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 36,
                    "end": 37,
                    "name": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "name": "U",
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
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 227,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 227,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 227,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 113,
                    "end": 191,
                    "id": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 126,
                      "name": "temp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 134,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 131,
                          "end": 134,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 133,
                            "end": 134,
                            "typeName": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 134,
                              "name": "U",
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
                              "id": {
                                "type": "Identifier",
                                "start": 154,
                                "end": 158,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 155,
                                  "end": 158,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 157,
                                    "end": 158,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 157,
                                      "end": 158,
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
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 172,
                          "end": 181,
                          "argument": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 180,
                            "name": "y",
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
                      "start": 126,
                      "end": 129,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 127,
                          "end": 128,
                          "name": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 128,
                            "name": "U",
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
                    "type": "ReturnStatement",
                    "start": 200,
                    "end": 221,
                    "argument": {
                      "type": "CallExpression",
                      "start": 207,
                      "end": 220,
                      "callee": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 211,
                        "name": "temp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "TSTypeAssertion",
                          "start": 212,
                          "end": 219,
                          "expression": {
                            "type": "Literal",
                            "start": 215,
                            "end": 219,
                            "value": null,
                            "raw": "null"
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 213,
                            "end": 214,
                            "typeName": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 239,
            "end": 254,
            "callee": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 256,
      "end": 275,
      "expression": {
        "type": "AssignmentExpression",
        "start": 256,
        "end": 274,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 256,
          "end": 262,
          "object": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 258,
            "end": 262,
            "name": "data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 265,
          "end": 274,
          "callee": {
            "type": "MemberExpression",
            "start": 265,
            "end": 268,
            "object": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 269,
              "end": 273,
              "value": null,
              "raw": "null"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 293,
      "expression": {
        "type": "AssignmentExpression",
        "start": 276,
        "end": 292,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 276,
          "end": 282,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 278,
            "end": 282,
            "name": "data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 285,
          "end": 292,
          "callee": {
            "type": "MemberExpression",
            "start": 285,
            "end": 290,
            "object": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 287,
              "end": 290,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
