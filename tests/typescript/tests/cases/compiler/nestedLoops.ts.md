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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 461,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 461,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 25,
              "end": 377,
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
              "value": {
                "type": "FunctionExpression",
                "start": 36,
                "end": 377,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 39,
                  "end": 377,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 50,
                      "end": 92,
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 54,
                          "end": 91,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 66,
                                  "end": 71,
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 86,
                                "end": 87,
                                "value": 2,
                                "raw": "2"
                              },
                              {
                                "type": "Literal",
                                "start": 89,
                                "end": 90,
                                "value": 3,
                                "raw": "3"
                              }
                            ]
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 101,
                      "end": 143,
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 105,
                          "end": 142,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 122,
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 137,
                                "end": 138,
                                "value": 2,
                                "raw": "2"
                              },
                              {
                                "type": "Literal",
                                "start": 140,
                                "end": 141,
                                "value": 3,
                                "raw": "3"
                              }
                            ]
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ForOfStatement",
                      "start": 153,
                      "end": 371,
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 158,
                        "end": 167,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 162,
                            "end": 167,
                            "id": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 167,
                              "decorators": [],
                              "name": "outer",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 181,
                        "decorators": [],
                        "name": "outerArray",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "ForOfStatement",
                        "start": 195,
                        "end": 371,
                        "await": false,
                        "left": {
                          "type": "VariableDeclaration",
                          "start": 200,
                          "end": 209,
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 204,
                              "end": 209,
                              "id": {
                                "type": "Identifier",
                                "start": 204,
                                "end": 209,
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 223,
                          "decorators": [],
                          "name": "innerArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 225,
                          "end": 371,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 243,
                              "end": 357,
                              "expression": {
                                "type": "CallExpression",
                                "start": 243,
                                "end": 356,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 243,
                                  "end": 257,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 243,
                                    "end": 247
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 248,
                                    "end": 257,
                                    "decorators": [],
                                    "name": "aFunction",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 258,
                                    "end": 355,
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
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
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 282,
                                      "end": 355,
                                      "body": [
                                        {
                                          "type": "VariableDeclaration",
                                          "start": 304,
                                          "end": 337,
                                          "kind": "let",
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "start": 308,
                                              "end": 336,
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
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "start": 312,
                                                  "end": 325,
                                                  "left": {
                                                    "type": "Identifier",
                                                    "start": 312,
                                                    "end": 317,
                                                    "decorators": [],
                                                    "name": "outer",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "operator": "+",
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
                                                "operator": "+",
                                                "right": {
                                                  "type": "Identifier",
                                                  "start": 328,
                                                  "end": 336,
                                                  "decorators": [],
                                                  "name": "newValue",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              },
                                              "definite": false
                                            }
                                          ],
                                          "declare": false
                                        }
                                      ]
                                    },
                                    "id": null,
                                    "generator": false
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 383,
              "end": 459,
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
              "value": {
                "type": "FunctionExpression",
                "start": 399,
                "end": 459,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                        "typeParameters": null,
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
                        }
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
                "body": {
                  "type": "BlockStatement",
                  "start": 452,
                  "end": 459,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
