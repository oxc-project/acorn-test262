__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 476,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 445,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 445,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 443,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
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
              "start": 26,
              "end": 443,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 443,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 39,
                    "end": 58,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 54,
                      "end": 58,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 51,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 74,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 68,
                      "end": 73,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 84,
                    "end": 94,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 88,
                        "end": 93,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 92,
                          "end": 93,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 103,
                    "end": 437,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 107,
                        "end": 436,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 117,
                          "decorators": [],
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 112,
                            "end": 117,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 114,
                              "end": 117
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 120,
                          "end": 436,
                          "arguments": [],
                          "callee": {
                            "type": "FunctionExpression",
                            "start": 121,
                            "end": 433,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 132,
                              "end": 433,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 146,
                                  "end": 397,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 150,
                                      "end": 396,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 150,
                                        "end": 159,
                                        "decorators": [],
                                        "name": "CScriptIO",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "start": 162,
                                        "end": 396,
                                        "arguments": [],
                                        "callee": {
                                          "type": "FunctionExpression",
                                          "start": 163,
                                          "end": 393,
                                          "async": false,
                                          "body": {
                                            "type": "BlockStatement",
                                            "start": 174,
                                            "end": 393,
                                            "body": [
                                              {
                                                "type": "VariableDeclaration",
                                                "start": 192,
                                                "end": 203,
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "start": 196,
                                                    "end": 203,
                                                    "definite": false,
                                                    "id": {
                                                      "type": "Identifier",
                                                      "start": 196,
                                                      "end": 199,
                                                      "decorators": [],
                                                      "name": "fso",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "init": {
                                                      "type": "Literal",
                                                      "start": 202,
                                                      "end": 203,
                                                      "raw": "0",
                                                      "value": 0
                                                    }
                                                  }
                                                ],
                                                "declare": false,
                                                "kind": "var"
                                              },
                                              {
                                                "type": "ReturnStatement",
                                                "start": 221,
                                                "end": 379,
                                                "argument": {
                                                  "type": "ObjectExpression",
                                                  "start": 228,
                                                  "end": 379,
                                                  "properties": [
                                                    {
                                                      "type": "Property",
                                                      "start": 250,
                                                      "end": 361,
                                                      "computed": false,
                                                      "key": {
                                                        "type": "Identifier",
                                                        "start": 250,
                                                        "end": 258,
                                                        "decorators": [],
                                                        "name": "readFile",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "kind": "init",
                                                      "method": false,
                                                      "optional": false,
                                                      "shorthand": false,
                                                      "value": {
                                                        "type": "FunctionExpression",
                                                        "start": 260,
                                                        "end": 361,
                                                        "async": false,
                                                        "body": {
                                                          "type": "BlockStatement",
                                                          "start": 291,
                                                          "end": 361,
                                                          "body": [
                                                            {
                                                              "type": "ReturnStatement",
                                                              "start": 317,
                                                              "end": 339,
                                                              "argument": {
                                                                "type": "CallExpression",
                                                                "start": 324,
                                                                "end": 338,
                                                                "arguments": [],
                                                                "callee": {
                                                                  "type": "MemberExpression",
                                                                  "start": 324,
                                                                  "end": 336,
                                                                  "computed": false,
                                                                  "object": {
                                                                    "type": "Identifier",
                                                                    "start": 324,
                                                                    "end": 327,
                                                                    "decorators": [],
                                                                    "name": "fso",
                                                                    "optional": false,
                                                                    "typeAnnotation": null
                                                                  },
                                                                  "optional": false,
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "start": 328,
                                                                    "end": 336,
                                                                    "decorators": [],
                                                                    "name": "toString",
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
                                                        "declare": false,
                                                        "expression": false,
                                                        "generator": false,
                                                        "id": null,
                                                        "params": [
                                                          {
                                                            "type": "Identifier",
                                                            "start": 269,
                                                            "end": 281,
                                                            "decorators": [],
                                                            "name": "path",
                                                            "optional": false,
                                                            "typeAnnotation": {
                                                              "type": "TSTypeAnnotation",
                                                              "start": 273,
                                                              "end": 281,
                                                              "typeAnnotation": {
                                                                "type": "TSStringKeyword",
                                                                "start": 275,
                                                                "end": 281
                                                              }
                                                            }
                                                          }
                                                        ],
                                                        "returnType": {
                                                          "type": "TSTypeAnnotation",
                                                          "start": 282,
                                                          "end": 290,
                                                          "typeAnnotation": {
                                                            "type": "TSStringKeyword",
                                                            "start": 284,
                                                            "end": 290
                                                          }
                                                        },
                                                        "typeParameters": null
                                                      }
                                                    }
                                                  ]
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
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 410,
                                  "end": 423,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 417,
                                    "end": 422,
                                    "decorators": [],
                                    "name": "inner",
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
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 452,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 455,
            "end": 462,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 473,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 465,
        "end": 472,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 465,
          "end": 470,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 465,
            "end": 466,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 467,
            "end": 470,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
