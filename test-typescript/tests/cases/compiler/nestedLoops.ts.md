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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "name": "Test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 461,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 25,
              "end": 377,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 36,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 36,
                "end": 377,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "id": {
                            "type": "Identifier",
                            "start": 54,
                            "end": 79,
                            "name": "outerArray",
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
                                  "name": "Array",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                            },
                            "decorators": [],
                            "optional": false
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
                      "kind": "let",
                      "declare": false
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
                          "id": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 130,
                            "name": "innerArray",
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
                                  "name": "Array",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                            },
                            "decorators": [],
                            "optional": false
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
                      "kind": "let",
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
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 162,
                            "end": 167,
                            "id": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 167,
                              "name": "outer",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 181,
                        "name": "outerArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 204,
                              "end": 209,
                              "id": {
                                "type": "Identifier",
                                "start": 204,
                                "end": 209,
                                "name": "inner",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 223,
                          "name": "innerArray",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                    "name": "aFunction",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 258,
                                    "end": 355,
                                    "id": null,
                                    "expression": false,
                                    "generator": false,
                                    "async": false,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 259,
                                        "end": 267,
                                        "name": "newValue",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 269,
                                        "end": 277,
                                        "name": "oldValue",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
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
                                              "id": {
                                                "type": "Identifier",
                                                "start": 308,
                                                "end": 309,
                                                "name": "x",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
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
                                                    "name": "outer",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "operator": "+",
                                                  "right": {
                                                    "type": "Identifier",
                                                    "start": 320,
                                                    "end": 325,
                                                    "name": "inner",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  }
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Identifier",
                                                  "start": 328,
                                                  "end": 336,
                                                  "name": "newValue",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                }
                                              },
                                              "definite": false
                                            }
                                          ],
                                          "kind": "let",
                                          "declare": false
                                        }
                                      ]
                                    },
                                    "typeParameters": null,
                                    "returnType": null
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        }
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
            },
            {
              "type": "MethodDefinition",
              "start": 383,
              "end": 459,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 390,
                "end": 399,
                "name": "aFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 399,
                "end": 459,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 400,
                    "end": 444,
                    "name": "func",
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
                            "name": "newValue",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 415,
                              "end": 420,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 417,
                                "end": 420
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 422,
                            "end": 435,
                            "name": "oldValue",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 430,
                              "end": 435,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 432,
                                "end": 435
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 452,
                  "end": 459,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 445,
                  "end": 451,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 447,
                    "end": 451
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
