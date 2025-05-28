__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 463,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 463,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 463,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 80,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 60,
              "decorators": [],
              "name": "arrowFunctionBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 63,
              "end": 79,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "start": 69,
                "end": 79,
                "left": {
                  "type": "MemberExpression",
                  "start": 69,
                  "end": 75,
                  "object": {
                    "type": "ThisExpression",
                    "start": 69,
                    "end": 73
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 78,
                  "end": 79,
                  "value": 1,
                  "raw": "1"
                }
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 149,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 112,
              "decorators": [],
              "name": "functionExprBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 136,
                        "end": 142,
                        "object": {
                          "type": "ThisExpression",
                          "start": 136,
                          "end": 140
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 145,
                        "end": 146,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 206,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 178,
              "decorators": [],
              "name": "classExprBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 181,
              "end": 205,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 187,
                "end": 205,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 189,
                    "end": 203,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 190,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "BinaryExpression",
                      "start": 193,
                      "end": 203,
                      "left": {
                        "type": "MemberExpression",
                        "start": 193,
                        "end": 199,
                        "object": {
                          "type": "ThisExpression",
                          "start": 193,
                          "end": 197
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 202,
                        "end": 203,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 211,
            "end": 461,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 246,
              "decorators": [],
              "name": "functionAndClassDeclBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 249,
              "end": 460,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 250,
                "end": 457,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 256,
                  "end": 457,
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "start": 266,
                      "end": 323,
                      "id": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 278,
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
                              "left": {
                                "type": "MemberExpression",
                                "start": 303,
                                "end": 309,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 303,
                                  "end": 307
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 308,
                                  "end": 309,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 312,
                                "end": 313,
                                "value": 4,
                                "raw": "4"
                              }
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    {
                      "type": "ClassDeclaration",
                      "start": 332,
                      "end": 451,
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
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 341,
                        "end": 451,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 355,
                            "end": 369,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 356,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "BinaryExpression",
                              "start": 359,
                              "end": 369,
                              "left": {
                                "type": "MemberExpression",
                                "start": 359,
                                "end": 365,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 359,
                                  "end": 363
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 364,
                                  "end": 365,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 368,
                                "end": 369,
                                "value": 5,
                                "raw": "5"
                              }
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 382,
                            "end": 441,
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
                            "value": {
                              "type": "FunctionExpression",
                              "start": 389,
                              "end": 441,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
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
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 417,
                                        "end": 423,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 417,
                                          "end": 421
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 422,
                                          "end": 423,
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "start": 426,
                                        "end": 427,
                                        "value": 6,
                                        "raw": "6"
                                      }
                                    }
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
                            "accessibility": null
                          }
                        ]
                      },
                      "abstract": false,
                      "declare": false
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
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
