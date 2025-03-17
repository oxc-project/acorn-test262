__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 477,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 445,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 443,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 443,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 443,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 39,
                    "end": 58,
                    "id": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 51,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 54,
                      "end": 58,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 74,
                    "expression": {
                      "type": "CallExpression",
                      "start": 68,
                      "end": 73,
                      "callee": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 92,
                          "end": 93,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 117,
                          "name": "inner",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 112,
                            "end": 117,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 114,
                              "end": 117
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 120,
                          "end": 436,
                          "callee": {
                            "type": "FunctionExpression",
                            "start": 121,
                            "end": 433,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                      "id": {
                                        "type": "Identifier",
                                        "start": 150,
                                        "end": 159,
                                        "name": "CScriptIO",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "start": 162,
                                        "end": 396,
                                        "callee": {
                                          "type": "FunctionExpression",
                                          "start": 163,
                                          "end": 393,
                                          "id": null,
                                          "expression": false,
                                          "generator": false,
                                          "async": false,
                                          "params": [],
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
                                                    "id": {
                                                      "type": "Identifier",
                                                      "start": 196,
                                                      "end": 199,
                                                      "name": "fso",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "init": {
                                                      "type": "Literal",
                                                      "start": 202,
                                                      "end": 203,
                                                      "value": 0,
                                                      "raw": "0"
                                                    },
                                                    "definite": false
                                                  }
                                                ],
                                                "kind": "var",
                                                "declare": false
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
                                                      "method": false,
                                                      "shorthand": false,
                                                      "computed": false,
                                                      "key": {
                                                        "type": "Identifier",
                                                        "start": 250,
                                                        "end": 258,
                                                        "name": "readFile",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "value": {
                                                        "type": "FunctionExpression",
                                                        "start": 260,
                                                        "end": 361,
                                                        "id": null,
                                                        "expression": false,
                                                        "generator": false,
                                                        "async": false,
                                                        "params": [
                                                          {
                                                            "type": "Identifier",
                                                            "start": 269,
                                                            "end": 281,
                                                            "name": "path",
                                                            "typeAnnotation": {
                                                              "type": "TSTypeAnnotation",
                                                              "start": 273,
                                                              "end": 281,
                                                              "typeAnnotation": {
                                                                "type": "TSStringKeyword",
                                                                "start": 275,
                                                                "end": 281
                                                              }
                                                            },
                                                            "decorators": [],
                                                            "optional": false
                                                          }
                                                        ],
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
                                                                "callee": {
                                                                  "type": "MemberExpression",
                                                                  "start": 324,
                                                                  "end": 336,
                                                                  "object": {
                                                                    "type": "Identifier",
                                                                    "start": 324,
                                                                    "end": 327,
                                                                    "name": "fso",
                                                                    "typeAnnotation": null,
                                                                    "decorators": [],
                                                                    "optional": false
                                                                  },
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "start": 328,
                                                                    "end": 336,
                                                                    "name": "toString",
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
                                                            }
                                                          ]
                                                        },
                                                        "declare": false,
                                                        "typeParameters": null,
                                                        "returnType": {
                                                          "type": "TSTypeAnnotation",
                                                          "start": 282,
                                                          "end": 290,
                                                          "typeAnnotation": {
                                                            "type": "TSStringKeyword",
                                                            "start": 284,
                                                            "end": 290
                                                          }
                                                        }
                                                      },
                                                      "kind": "init",
                                                      "optional": false
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          },
                                          "declare": false,
                                          "typeParameters": null,
                                          "returnType": null
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 410,
                                  "end": 423,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 417,
                                    "end": 422,
                                    "name": "inner",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 452,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 455,
            "end": 462,
            "callee": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 473,
      "expression": {
        "type": "CallExpression",
        "start": 465,
        "end": 472,
        "callee": {
          "type": "MemberExpression",
          "start": 465,
          "end": 470,
          "object": {
            "type": "Identifier",
            "start": 465,
            "end": 466,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 467,
            "end": 470,
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
