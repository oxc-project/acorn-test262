selfInLambdas.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 548,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 54,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 37,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 52,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "MouseEvent",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 82,
            "decorators": [],
            "name": "window",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "decorators": [],
                  "name": "Window",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 84,
      "end": 151,
      "body": {
        "type": "TSInterfaceBody",
        "start": 101,
        "end": 151,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 107,
            "end": 144,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 118,
              "decorators": [],
              "name": "onmousemove",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 143,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 120,
                "end": 143,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 121,
                    "end": 135,
                    "decorators": [],
                    "name": "ev",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 123,
                      "end": 135,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 125,
                        "end": 135,
                        "typeName": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 135,
                          "decorators": [],
                          "name": "MouseEvent",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 143,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 140,
                    "end": 143
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 100,
        "decorators": [],
        "name": "Window",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 160,
            "end": 329,
            "properties": [
              {
                "type": "Property",
                "start": 167,
                "end": 177,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 174,
                  "decorators": [],
                  "name": "counter",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 176,
                  "end": 177,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 184,
                "end": 326,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 189,
                  "decorators": [],
                  "name": "start",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 191,
                  "end": 326,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 202,
                    "end": 326,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 213,
                        "end": 319,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 213,
                          "end": 319,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 213,
                            "end": 231,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 219,
                              "decorators": [],
                              "name": "window",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 231,
                              "decorators": [],
                              "name": "onmousemove",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "ArrowFunctionExpression",
                            "start": 234,
                            "end": 319,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 240,
                              "end": 319,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 254,
                                  "end": 268,
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "start": 254,
                                    "end": 268,
                                    "argument": {
                                      "type": "MemberExpression",
                                      "start": 254,
                                      "end": 266,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 254,
                                        "end": 258
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 259,
                                        "end": 266,
                                        "decorators": [],
                                        "name": "counter",
                                        "optional": false
                                      }
                                    },
                                    "operator": "++",
                                    "prefix": false
                                  }
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 281,
                                  "end": 308,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 285,
                                      "end": 307,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 285,
                                        "end": 286,
                                        "decorators": [],
                                        "name": "f",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "ArrowFunctionExpression",
                                        "start": 289,
                                        "end": 307,
                                        "async": false,
                                        "body": {
                                          "type": "MemberExpression",
                                          "start": 295,
                                          "end": 307,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 295,
                                            "end": 299
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 300,
                                            "end": 307,
                                            "decorators": [],
                                            "name": "counter",
                                            "optional": false
                                          }
                                        },
                                        "expression": true,
                                        "generator": false,
                                        "id": null,
                                        "params": []
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                }
                              ]
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": []
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 333,
      "end": 547,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 341,
        "end": 547,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 344,
            "end": 368,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 357,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 360,
              "end": 367,
              "raw": "\"value\"",
              "value": "value"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 544,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 381,
              "end": 544,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 384,
                "end": 544,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 388,
                    "end": 530,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 392,
                        "end": 529,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 397,
                          "decorators": [],
                          "name": "outer",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 399,
                          "end": 529,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 405,
                            "end": 529,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 419,
                                "end": 438,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 423,
                                    "end": 437,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 423,
                                      "end": 424,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 427,
                                      "end": 437,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 427,
                                        "end": 431
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 432,
                                        "end": 437,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              },
                              {
                                "type": "VariableDeclaration",
                                "start": 451,
                                "end": 511,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 455,
                                    "end": 511,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 455,
                                      "end": 460,
                                      "decorators": [],
                                      "name": "inner",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 463,
                                      "end": 511,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 469,
                                        "end": 511,
                                        "body": [
                                          {
                                            "type": "VariableDeclaration",
                                            "start": 487,
                                            "end": 506,
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "start": 491,
                                                "end": 505,
                                                "definite": false,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 491,
                                                  "end": 492,
                                                  "decorators": [],
                                                  "name": "y",
                                                  "optional": false
                                                },
                                                "init": {
                                                  "type": "MemberExpression",
                                                  "start": 495,
                                                  "end": 505,
                                                  "computed": false,
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 495,
                                                    "end": 499
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 500,
                                                    "end": 505,
                                                    "decorators": [],
                                                    "name": "value",
                                                    "optional": false
                                                  }
                                                }
                                              }
                                            ],
                                            "declare": false,
                                            "kind": "var"
                                          }
                                        ]
                                      },
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": []
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 516,
                                "end": 524,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 516,
                                  "end": 523,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 516,
                                    "end": 521,
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false
                                  },
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 533,
                    "end": 541,
                    "expression": {
                      "type": "CallExpression",
                      "start": 533,
                      "end": 540,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 538,
                        "decorators": [],
                        "name": "outer",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 340,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
