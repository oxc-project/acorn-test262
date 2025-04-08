__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "foo",
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
          "start": 27,
          "end": 31,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 31,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 30,
              "end": 31,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
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
        {
          "type": "Identifier",
          "start": 33,
          "end": 65,
          "name": "fun",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 65,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 38,
              "end": 65,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 65,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 44,
                  "end": 65,
                  "typeName": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 52,
                    "name": "Iterable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 52,
                    "end": 65,
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "start": 53,
                        "end": 64,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 54,
                            "end": 58,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 55,
                              "end": 58,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 57,
                                "end": 58,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 57,
                                  "end": 58,
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
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 60,
                          "end": 64,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 63,
                            "end": 64,
                            "typeName": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 64,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 84,
          "name": "fun2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 84,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 73,
              "end": 84,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 78,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 78,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 77,
                      "end": 78,
                      "typeName": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 84,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 84,
                  "typeName": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 88,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 87,
          "end": 88,
          "typeName": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 225,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 224,
        "callee": {
          "type": "Identifier",
          "start": 91,
          "end": 94,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 95,
            "end": 97,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "FunctionExpression",
            "start": 99,
            "end": 207,
            "id": null,
            "expression": false,
            "generator": true,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 112,
              "end": 207,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 118,
                  "end": 205,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 118,
                    "end": 205,
                    "delegate": true,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 125,
                      "end": 205,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 135,
                          "end": 199,
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 137,
                            "end": 152,
                            "object": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 143,
                              "name": "Symbol",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 152,
                              "name": "iterator",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 153,
                            "end": 199,
                            "id": null,
                            "expression": false,
                            "generator": true,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 156,
                              "end": 199,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 170,
                                  "end": 189,
                                  "expression": {
                                    "type": "YieldExpression",
                                    "start": 170,
                                    "end": 189,
                                    "delegate": false,
                                    "argument": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 176,
                                      "end": 189,
                                      "id": null,
                                      "expression": true,
                                      "generator": false,
                                      "async": false,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 176,
                                          "end": 177,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "body": {
                                        "type": "MemberExpression",
                                        "start": 181,
                                        "end": 189,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 181,
                                          "end": 182,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 183,
                                          "end": 189,
                                          "name": "length",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 209,
            "end": 223,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 214,
              "end": 223,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
