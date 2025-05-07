__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 461,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 461,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 461,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 461,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 25,
              "end": 377,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 36,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 36,
                "end": 377,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 39,
                  "end": 377,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 50,
                      "end": 92,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 54,
                          "end": 91,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 54,
                            "end": 79,
                            "decorators": [],
                            "name": "outerArray",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 64,
                              "end": 79,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 66,
                                "end": 79,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 71,
                                  "end": 79,
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 72,
                                      "end": 78
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 66,
                                  "end": 71,
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "init": {
                            "type": "ArrayExpression",
                            "start": 82,
                            "end": 91,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 83,
                                "end": 84,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 86,
                                "end": 87,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 89,
                                "end": 90,
                                "raw": "3",
                                "value": 3,
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 101,
                      "end": 143,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 105,
                          "end": 142,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 130,
                            "decorators": [],
                            "name": "innerArray",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 115,
                              "end": 130,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 117,
                                "end": 130,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 122,
                                  "end": 130,
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 123,
                                      "end": 129
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 122,
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "init": {
                            "type": "ArrayExpression",
                            "start": 133,
                            "end": 142,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 134,
                                "end": 135,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 137,
                                "end": 138,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 140,
                                "end": 141,
                                "raw": "3",
                                "value": 3,
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    },
                    {
                      "type": "ForOfStatement",
                      "start": 153,
                      "end": 371,
                      "await": false,
                      "body": {
                        "type": "ForOfStatement",
                        "start": 195,
                        "end": 371,
                        "await": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 225,
                          "end": 371,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 243,
                              "end": 357,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 243,
                                "end": 356,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 258,
                                    "end": 355,
                                    "async": false,
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 282,
                                      "end": 355,
                                      "body": [
                                        {
                                          "type": "VariableDeclaration",
                                          "start": 304,
                                          "end": 337,
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "start": 308,
                                              "end": 336,
                                              "definite": false,
                                              "id": {
                                                "type": "Identifier",
                                                "start": 308,
                                                "end": 309,
                                                "decorators": [],
                                                "name": "x",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "init": {
                                                "type": "BinaryExpression",
                                                "start": 312,
                                                "end": 336,
                                                "operator": "+",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "start": 312,
                                                  "end": 325,
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "start": 312,
                                                    "end": 317,
                                                    "decorators": [],
                                                    "name": "outer",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "start": 320,
                                                    "end": 325,
                                                    "decorators": [],
                                                    "name": "inner",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "start": 328,
                                                  "end": 336,
                                                  "decorators": [],
                                                  "name": "newValue",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            }
                                          ],
                                          "declare": false,
                                          "kind": "let"
                                        }
                                      ]
                                    },
                                    "expression": false,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 259,
                                        "end": 267,
                                        "decorators": [],
                                        "name": "newValue",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 269,
                                        "end": 277,
                                        "decorators": [],
                                        "name": "oldValue",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "returnType": null,
                                    "typeParameters": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 243,
                                  "end": 257,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 243,
                                    "end": 247
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 248,
                                    "end": 257,
                                    "decorators": [],
                                    "name": "aFunction",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "left": {
                          "type": "VariableDeclaration",
                          "start": 200,
                          "end": 209,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 204,
                              "end": 209,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 204,
                                "end": 209,
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": null
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 223,
                          "decorators": [],
                          "name": "innerArray",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 158,
                        "end": 167,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 162,
                            "end": 167,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 167,
                              "decorators": [],
                              "name": "outer",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 181,
                        "decorators": [],
                        "name": "outerArray",
                        "optional": false,
                        "typeAnnotation": null
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
            },
            {
              "type": "MethodDefinition",
              "start": 383,
              "end": 459,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 390,
                "end": 399,
                "decorators": [],
                "name": "aFunction",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 399,
                "end": 459,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 452,
                  "end": 459,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 400,
                    "end": 444,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 404,
                      "end": 444,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 406,
                        "end": 444,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 407,
                            "end": 420,
                            "decorators": [],
                            "name": "newValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 415,
                              "end": 420,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 417,
                                "end": 420
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 422,
                            "end": 435,
                            "decorators": [],
                            "name": "oldValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 430,
                              "end": 435,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 432,
                                "end": 435
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 437,
                          "end": 444,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 440,
                            "end": 444
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 445,
                  "end": 451,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 447,
                    "end": 451
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
