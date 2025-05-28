__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 584,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 584,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 584,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 18,
          "decorators": [],
          "name": "f1",
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
          "start": 21,
          "end": 584,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 27,
              "end": 89,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 33,
                  "end": 88,
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 52,
                    "decorators": [],
                    "name": "localClassFieldName",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 55,
                    "end": 88,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 55,
                      "end": 74,
                      "left": {
                        "type": "CallExpression",
                        "start": 55,
                        "end": 68,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 55,
                          "end": 66,
                          "object": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 59,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 66,
                            "decorators": [],
                            "name": "random",
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
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 71,
                        "end": 74,
                        "value": 0.5,
                        "raw": "0.5"
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 77,
                      "end": 81,
                      "value": "g1",
                      "raw": "\"g1\""
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 84,
                      "end": 88,
                      "value": "g2",
                      "raw": "\"g2\""
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 161,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 100,
                  "end": 160,
                  "id": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 115,
                    "decorators": [],
                    "name": "localOtherField",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 118,
                    "end": 160,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 118,
                      "end": 146,
                      "left": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 137,
                        "decorators": [],
                        "name": "localClassFieldName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 142,
                        "end": 146,
                        "value": "g1",
                        "raw": "\"g1\""
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 149,
                      "end": 153,
                      "value": "g2",
                      "raw": "\"g2\""
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 156,
                      "end": 160,
                      "value": "g1",
                      "raw": "\"g1\""
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 166,
              "end": 225,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 172,
                  "end": 224,
                  "id": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 188,
                    "decorators": [],
                    "name": "localStaticField",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 191,
                    "end": 224,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 191,
                      "end": 210,
                      "left": {
                        "type": "CallExpression",
                        "start": 191,
                        "end": 204,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 191,
                          "end": 202,
                          "object": {
                            "type": "Identifier",
                            "start": 191,
                            "end": 195,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 202,
                            "decorators": [],
                            "name": "random",
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
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 207,
                        "end": 210,
                        "value": 0.5,
                        "raw": "0.5"
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 213,
                      "end": 217,
                      "value": "s1",
                      "raw": "\"s1\""
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 220,
                      "end": 224,
                      "value": "s2",
                      "raw": "\"s2\""
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 230,
              "end": 582,
              "argument": {
                "type": "ClassExpression",
                "start": 237,
                "end": 582,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 262,
                  "decorators": [],
                  "name": "ParameterizedHolder",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 263,
                  "end": 582,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 273,
                      "end": 336,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 293,
                        "decorators": [],
                        "name": "localClassFieldName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 294,
                        "end": 336,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 297,
                          "end": 336,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 311,
                              "end": 326,
                              "argument": {
                                "type": "Literal",
                                "start": 318,
                                "end": 325,
                                "value": "value",
                                "raw": "\"value\""
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": true,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 345,
                      "end": 399,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 346,
                        "end": 361,
                        "decorators": [],
                        "name": "localOtherField",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 362,
                        "end": 399,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 365,
                          "end": 399,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 379,
                              "end": 389,
                              "argument": {
                                "type": "Literal",
                                "start": 386,
                                "end": 388,
                                "value": 42,
                                "raw": "42"
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": true,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 408,
                      "end": 484,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 416,
                        "end": 432,
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 433,
                        "end": 484,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 436,
                          "end": 484,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 450,
                              "end": 474,
                              "argument": {
                                "type": "ObjectExpression",
                                "start": 457,
                                "end": 473,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 459,
                                    "end": 471,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 459,
                                      "end": 465,
                                      "decorators": [],
                                      "name": "static",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 467,
                                      "end": 471,
                                      "value": true,
                                      "raw": "true"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": true,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 493,
                      "end": 576,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 517,
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 518,
                        "end": 576,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 521,
                          "end": 576,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 535,
                              "end": 566,
                              "argument": {
                                "type": "ObjectExpression",
                                "start": 542,
                                "end": 565,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 544,
                                    "end": 563,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 544,
                                      "end": 550,
                                      "decorators": [],
                                      "name": "static",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 552,
                                      "end": 563,
                                      "value": "sometimes",
                                      "raw": "\"sometimes\""
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": true,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
