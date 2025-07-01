__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 17
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 36
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "outerArray",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 66,
                                  "end": 71
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 72,
                                      "end": 78
                                    }
                                  ],
                                  "start": 71,
                                  "end": 79
                                },
                                "start": 66,
                                "end": 79
                              },
                              "start": 64,
                              "end": 79
                            },
                            "start": 54,
                            "end": 79
                          },
                          "init": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 83,
                                "end": 84
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 86,
                                "end": 87
                              },
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 89,
                                "end": 90
                              }
                            ],
                            "start": 82,
                            "end": 91
                          },
                          "definite": false,
                          "start": 54,
                          "end": 91
                        }
                      ],
                      "declare": false,
                      "start": 50,
                      "end": 92
                    },
                    {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "innerArray",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 117,
                                  "end": 122
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 123,
                                      "end": 129
                                    }
                                  ],
                                  "start": 122,
                                  "end": 130
                                },
                                "start": 117,
                                "end": 130
                              },
                              "start": 115,
                              "end": 130
                            },
                            "start": 105,
                            "end": 130
                          },
                          "init": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 134,
                                "end": 135
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 137,
                                "end": 138
                              },
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 140,
                                "end": 141
                              }
                            ],
                            "start": 133,
                            "end": 142
                          },
                          "definite": false,
                          "start": 105,
                          "end": 142
                        }
                      ],
                      "declare": false,
                      "start": 101,
                      "end": 143
                    },
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "outer",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 162,
                              "end": 167
                            },
                            "init": null,
                            "definite": false,
                            "start": 162,
                            "end": 167
                          }
                        ],
                        "declare": false,
                        "start": 158,
                        "end": 167
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outerArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 181
                      },
                      "body": {
                        "type": "ForOfStatement",
                        "await": false,
                        "left": {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 204,
                                "end": 209
                              },
                              "init": null,
                              "definite": false,
                              "start": 204,
                              "end": 209
                            }
                          ],
                          "declare": false,
                          "start": 200,
                          "end": 209
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "innerArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 223
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 243,
                                    "end": 247
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "aFunction",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 248,
                                    "end": 257
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 243,
                                  "end": 257
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "newValue",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 259,
                                        "end": 267
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "oldValue",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 269,
                                        "end": 277
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "VariableDeclaration",
                                          "kind": "let",
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "id": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "x",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 308,
                                                "end": 309
                                              },
                                              "init": {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "outer",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 312,
                                                    "end": 317
                                                  },
                                                  "operator": "+",
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "inner",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 320,
                                                    "end": 325
                                                  },
                                                  "start": 312,
                                                  "end": 325
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "newValue",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 328,
                                                  "end": 336
                                                },
                                                "start": 312,
                                                "end": 336
                                              },
                                              "definite": false,
                                              "start": 308,
                                              "end": 336
                                            }
                                          ],
                                          "declare": false,
                                          "start": 304,
                                          "end": 337
                                        }
                                      ],
                                      "start": 282,
                                      "end": 355
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 258,
                                    "end": 355
                                  }
                                ],
                                "optional": false,
                                "start": 243,
                                "end": 356
                              },
                              "directive": null,
                              "start": 243,
                              "end": 357
                            }
                          ],
                          "start": 225,
                          "end": 371
                        },
                        "start": 195,
                        "end": 371
                      },
                      "start": 153,
                      "end": 371
                    }
                  ],
                  "start": 39,
                  "end": 377
                },
                "expression": false,
                "start": 36,
                "end": 377
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 25,
              "end": 377
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "aFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 399
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
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
                            "name": "newValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 417,
                                "end": 420
                              },
                              "start": 415,
                              "end": 420
                            },
                            "start": 407,
                            "end": 420
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 432,
                                "end": 435
                              },
                              "start": 430,
                              "end": 435
                            },
                            "start": 422,
                            "end": 435
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 440,
                            "end": 444
                          },
                          "start": 437,
                          "end": 444
                        },
                        "start": 406,
                        "end": 444
                      },
                      "start": 404,
                      "end": 444
                    },
                    "start": 400,
                    "end": 444
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 447,
                    "end": 451
                  },
                  "start": 445,
                  "end": 451
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 452,
                  "end": 459
                },
                "expression": false,
                "start": 399,
                "end": 459
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 383,
              "end": 459
            }
          ],
          "start": 19,
          "end": 461
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 461
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 461
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 461
}
```
