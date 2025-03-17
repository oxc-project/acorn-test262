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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 463,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 80,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 60,
              "name": "arrowFunctionBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 63,
              "end": 79,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
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
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 149,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 112,
              "name": "functionExprBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 206,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 178,
              "name": "classExprBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ClassExpression",
              "start": 181,
              "end": 205,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 187,
                "end": 205,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 189,
                    "end": 203,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 190,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 211,
            "end": 461,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 246,
              "name": "functionAndClassDeclBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 249,
              "end": 460,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 250,
                "end": 457,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "ClassDeclaration",
                      "start": 332,
                      "end": 451,
                      "id": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 340,
                        "name": "CC",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 341,
                        "end": 451,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 355,
                            "end": 369,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 356,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                            "decorators": [],
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "typeAnnotation": null,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 382,
                            "end": 441,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 382,
                              "end": 388,
                              "name": "method",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 389,
                              "end": 441,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                          "name": "f",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
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
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
