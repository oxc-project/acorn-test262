__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 464,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 463,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 463,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 60,
              "decorators": [],
              "name": "arrowFunctionBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 63,
              "end": 79,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 69,
                "end": 79,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 69,
                  "end": 75,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 69,
                    "end": 73
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 78,
                  "end": 79,
                  "raw": "1",
                  "value": 1
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 112,
              "decorators": [],
              "name": "functionExprBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 148,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 146,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 136,
                      "end": 146,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 136,
                        "end": 142,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 136,
                          "end": 140
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 145,
                        "end": 146,
                        "raw": "2",
                        "value": 2
                      }
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
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 206,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 178,
              "decorators": [],
              "name": "classExprBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 181,
              "end": 205,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 187,
                "end": 205,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 189,
                    "end": 203,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 190,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": {
                      "type": "BinaryExpression",
                      "start": 193,
                      "end": 203,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 193,
                        "end": 199,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 193,
                          "end": 197
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 202,
                        "end": 203,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 211,
            "end": 461,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 246,
              "decorators": [],
              "name": "functionAndClassDeclBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 249,
              "end": 460,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 250,
                "end": 457,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 256,
                  "end": 457,
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "start": 266,
                      "end": 323,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 282,
                        "end": 323,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 296,
                            "end": 313,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 303,
                              "end": 313,
                              "operator": "+",
                              "left": {
                                "type": "MemberExpression",
                                "start": 303,
                                "end": 309,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 303,
                                  "end": 307
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 308,
                                  "end": 309,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 312,
                                "end": 313,
                                "raw": "4",
                                "value": 4
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 278,
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
                      "type": "ClassDeclaration",
                      "start": 332,
                      "end": 451,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 341,
                        "end": 451,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 355,
                            "end": 369,
                            "accessibility": null,
                            "computed": false,
                            "declare": false,
                            "decorators": [],
                            "definite": false,
                            "key": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 356,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "override": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": null,
                            "value": {
                              "type": "BinaryExpression",
                              "start": 359,
                              "end": 369,
                              "operator": "+",
                              "left": {
                                "type": "MemberExpression",
                                "start": 359,
                                "end": 365,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 359,
                                  "end": 363
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 364,
                                  "end": 365,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 368,
                                "end": 369,
                                "raw": "5",
                                "value": 5
                              }
                            }
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 382,
                            "end": 441,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 382,
                              "end": 388,
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 389,
                              "end": 441,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 392,
                                "end": 441,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 410,
                                    "end": 427,
                                    "argument": {
                                      "type": "BinaryExpression",
                                      "start": 417,
                                      "end": 427,
                                      "operator": "+",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 417,
                                        "end": 423,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 417,
                                          "end": 421
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 422,
                                          "end": 423,
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 426,
                                        "end": 427,
                                        "raw": "6",
                                        "value": 6
                                      }
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
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 340,
                        "decorators": [],
                        "name": "CC",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "implements": [],
                      "superClass": null,
                      "superTypeArguments": null,
                      "typeParameters": null
                    }
                  ]
                },
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
