__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 355,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 59,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 59,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 24,
              "end": 59,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 34,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 28,
                      "end": 34
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 59,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 39,
                  "end": 59,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 40,
                      "end": 50,
                      "decorators": [],
                      "name": "y2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 42,
                        "end": 50,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 44,
                          "end": 50
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 59,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 55,
                      "end": 59
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 235,
      "expression": {
        "type": "CallExpression",
        "start": 135,
        "end": 234,
        "callee": {
          "type": "Identifier",
          "start": 135,
          "end": 138,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 233,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 164,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 144,
                "end": 164,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 145,
                    "end": 155,
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 149,
                        "end": 155
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 160,
                    "end": 164
                  }
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 168,
              "end": 233,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 174,
                  "end": 194,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 178,
                      "end": 193,
                      "id": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 182,
                        "end": 193,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 182,
                          "end": 190,
                          "object": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 184,
                            "end": 190,
                            "decorators": [],
                            "name": "charAt",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 191,
                            "end": 192,
                            "value": 0,
                            "raw": "0"
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 219,
                  "end": 231,
                  "argument": {
                    "type": "Literal",
                    "start": 226,
                    "end": 230,
                    "value": null,
                    "raw": "null"
                  }
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
      "type": "ExpressionStatement",
      "start": 237,
      "end": 355,
      "expression": {
        "type": "CallExpression",
        "start": 237,
        "end": 354,
        "callee": {
          "type": "Identifier",
          "start": 237,
          "end": 240,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 241,
            "end": 353,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 242,
                "end": 251,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 243,
                  "end": 251,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 256,
              "end": 353,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 262,
                  "end": 351,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 269,
                    "end": 350,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 269,
                        "end": 271,
                        "decorators": [],
                        "name": "y2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 275,
                      "end": 350,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 285,
                          "end": 306,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 289,
                              "end": 305,
                              "id": {
                                "type": "Identifier",
                                "start": 289,
                                "end": 290,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "CallExpression",
                                "start": 293,
                                "end": 305,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 293,
                                  "end": 303,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 293,
                                    "end": 295,
                                    "decorators": [],
                                    "name": "y2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 296,
                                    "end": 303,
                                    "decorators": [],
                                    "name": "toFixed",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 335,
                          "end": 344,
                          "argument": {
                            "type": "Literal",
                            "start": 342,
                            "end": 343,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
