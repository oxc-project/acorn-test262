__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 434,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 55,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 8,
            "end": 55,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 14,
              "end": 55,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 20,
                  "end": 43,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 24,
                      "end": 42,
                      "id": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 27,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 30,
                        "end": 42,
                        "object": {
                          "type": "Identifier",
                          "start": 30,
                          "end": 39,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 40,
                          "end": 41,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "computed": true
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 148,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 65,
            "end": 148,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 77,
              "end": 148,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 83,
                  "end": 146,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 87,
                      "end": 146,
                      "id": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 88,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 91,
                        "end": 146,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 97,
                          "end": 146,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 107,
                              "end": 130,
                              "kind": "var",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 111,
                                  "end": 129,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 111,
                                    "end": 114,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "start": 117,
                                    "end": 129,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 117,
                                      "end": 126,
                                      "decorators": [],
                                      "name": "arguments",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "start": 127,
                                      "end": 128,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "optional": false,
                                    "computed": true
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
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 162,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 206,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 168,
            "end": 204,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 168,
              "end": 204,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 174,
                "end": 204,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 178,
                    "end": 201,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 182,
                        "end": 200,
                        "id": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 185,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 188,
                          "end": 200,
                          "object": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 197,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 198,
                            "end": 199,
                            "value": 0,
                            "raw": "0"
                          },
                          "optional": false,
                          "computed": true
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
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 220,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 221,
          "end": 242,
          "decorators": [],
          "name": "inputFunc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 230,
            "end": 242,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 232,
              "end": 242,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 235,
                "end": 242,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 238,
                  "end": 242
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 244,
        "end": 247,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 301,
      "expression": {
        "type": "CallExpression",
        "start": 248,
        "end": 300,
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 252,
            "end": 299,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 258,
              "end": 299,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 264,
                  "end": 287,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 268,
                      "end": 286,
                      "id": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 271,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 286,
                        "object": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 283,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 284,
                          "end": 285,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "computed": true
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 303,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 315,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 318,
        "end": 362,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 324,
            "end": 347,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 328,
                "end": 346,
                "id": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 331,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 334,
                  "end": 346,
                  "object": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 343,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 344,
                    "end": 345,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 365,
      "end": 434,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 365,
        "end": 434,
        "expression": false,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 371,
          "end": 434,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 374,
              "end": 432,
              "id": {
                "type": "Identifier",
                "start": 383,
                "end": 386,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 389,
                "end": 432,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 393,
                    "end": 416,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 397,
                        "end": 415,
                        "id": {
                          "type": "Identifier",
                          "start": 397,
                          "end": 400,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 403,
                          "end": 415,
                          "object": {
                            "type": "Identifier",
                            "start": 403,
                            "end": 412,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 413,
                            "end": 414,
                            "value": 0,
                            "raw": "0"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            }
          ]
        },
        "id": null,
        "generator": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
