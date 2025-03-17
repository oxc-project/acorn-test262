__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "MouseEvent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 82,
            "name": "window",
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
                  "name": "Window",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "Window",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "onmousemove",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "ev",
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
                          "name": "MouseEvent",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 174,
                  "name": "counter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 176,
                  "end": 177,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 184,
                "end": 326,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 189,
                  "name": "start",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 191,
                  "end": 326,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                              "name": "window",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 231,
                              "name": "onmousemove",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "ArrowFunctionExpression",
                            "start": 234,
                            "end": 319,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                        "name": "counter",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  },
                                  "directive": null
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
                                      "id": {
                                        "type": "Identifier",
                                        "start": 285,
                                        "end": 286,
                                        "name": "f",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "ArrowFunctionExpression",
                                        "start": 289,
                                        "end": 307,
                                        "id": null,
                                        "expression": true,
                                        "generator": false,
                                        "async": false,
                                        "params": [],
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
                                            "name": "counter",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "typeParameters": null,
                                        "returnType": null
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                }
                              ]
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 333,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 340,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 341,
        "end": 547,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 344,
            "end": 368,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 357,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 360,
              "end": 367,
              "value": "value",
              "raw": "\"value\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 544,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 381,
              "end": 544,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 397,
                          "name": "outer",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 399,
                          "end": 529,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                    "id": {
                                      "type": "Identifier",
                                      "start": 423,
                                      "end": 424,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
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
                                    "id": {
                                      "type": "Identifier",
                                      "start": 455,
                                      "end": 460,
                                      "name": "inner",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 463,
                                      "end": 511,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
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
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 491,
                                                  "end": 492,
                                                  "name": "y",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
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
                                                    "name": "value",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "computed": false,
                                                  "optional": false
                                                },
                                                "definite": false
                                              }
                                            ],
                                            "kind": "var",
                                            "declare": false
                                          }
                                        ]
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
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
                                    "name": "inner",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "outer",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
