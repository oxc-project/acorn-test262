__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 547,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "MouseEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 52,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 82,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 84,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 100,
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 118,
              "decorators": [],
              "name": "onmousemove",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 143,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 120,
                "end": 143,
                "typeParameters": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 329,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 174,
                  "decorators": [],
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 176,
                  "end": 177,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 184,
                "end": 326,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 189,
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 191,
                  "end": 326,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                            "object": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 219,
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 231,
                              "decorators": [],
                              "name": "onmousemove",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "ArrowFunctionExpression",
                            "start": 234,
                            "end": 319,
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
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
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "MemberExpression",
                                      "start": 254,
                                      "end": 266,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 254,
                                        "end": 258
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 259,
                                        "end": 266,
                                        "decorators": [],
                                        "name": "counter",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 281,
                                  "end": 308,
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 285,
                                      "end": 307,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 285,
                                        "end": 286,
                                        "decorators": [],
                                        "name": "f",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "ArrowFunctionExpression",
                                        "start": 289,
                                        "end": 307,
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
                                        "body": {
                                          "type": "MemberExpression",
                                          "start": 295,
                                          "end": 307,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 295,
                                            "end": 299
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 300,
                                            "end": 307,
                                            "decorators": [],
                                            "name": "counter",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
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
                            "id": null,
                            "generator": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 333,
      "end": 547,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 340,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 341,
        "end": 547,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 344,
            "end": 368,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 357,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 360,
              "end": 367,
              "value": "value",
              "raw": "\"value\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 544,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 381,
              "end": 544,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 384,
                "end": 544,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 388,
                    "end": 530,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 392,
                        "end": 529,
                        "id": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 397,
                          "decorators": [],
                          "name": "outer",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 399,
                          "end": 529,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 405,
                            "end": 529,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 419,
                                "end": 438,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 423,
                                    "end": 437,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 423,
                                      "end": 424,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 427,
                                      "end": 437,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 427,
                                        "end": 431
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 432,
                                        "end": 437,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              },
                              {
                                "type": "VariableDeclaration",
                                "start": 451,
                                "end": 511,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 455,
                                    "end": 511,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 455,
                                      "end": 460,
                                      "decorators": [],
                                      "name": "inner",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 463,
                                      "end": 511,
                                      "expression": false,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 469,
                                        "end": 511,
                                        "body": [
                                          {
                                            "type": "VariableDeclaration",
                                            "start": 487,
                                            "end": 506,
                                            "kind": "var",
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "start": 491,
                                                "end": 505,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 491,
                                                  "end": 492,
                                                  "decorators": [],
                                                  "name": "y",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "init": {
                                                  "type": "MemberExpression",
                                                  "start": 495,
                                                  "end": 505,
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 495,
                                                    "end": 499
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 500,
                                                    "end": 505,
                                                    "decorators": [],
                                                    "name": "value",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
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
                                "type": "ExpressionStatement",
                                "start": 516,
                                "end": 524,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 516,
                                  "end": 523,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 516,
                                    "end": 521,
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "directive": null
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
                    "type": "ExpressionStatement",
                    "start": 533,
                    "end": 541,
                    "expression": {
                      "type": "CallExpression",
                      "start": 533,
                      "end": 540,
                      "callee": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 538,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
