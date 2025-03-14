generatorTypeCheck46.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 65,
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 65,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 38,
              "end": 65,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 65,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 44,
                  "end": 65,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 52,
                    "end": 65,
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "start": 53,
                        "end": 64,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 54,
                            "end": 58,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
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
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 52,
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 84,
          "decorators": [],
          "name": "fun2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 84,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 73,
              "end": 84,
              "params": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 78,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "Literal",
            "start": 95,
            "end": 97,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "FunctionExpression",
            "start": 99,
            "end": 207,
            "async": false,
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
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 125,
                      "end": 205,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 135,
                          "end": 199,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 137,
                            "end": 152,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 143,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 152,
                              "decorators": [],
                              "name": "iterator",
                              "optional": false
                            }
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 153,
                            "end": 199,
                            "async": false,
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
                                    "argument": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 176,
                                      "end": 189,
                                      "async": false,
                                      "body": {
                                        "type": "MemberExpression",
                                        "start": 181,
                                        "end": 189,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 181,
                                          "end": 182,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 183,
                                          "end": 189,
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false
                                        }
                                      },
                                      "expression": true,
                                      "generator": false,
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 176,
                                          "end": 177,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "delegate": false
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": true,
                            "id": null,
                            "params": []
                          }
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 209,
            "end": 223,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 214,
              "end": 223,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "decorators": [],
                "name": "p",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 91,
          "end": 94,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
