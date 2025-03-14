declarationEmitComputedNamesInaccessible.ts
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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 584,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 21,
          "end": 584,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 27,
              "end": 89,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 33,
                  "end": 88,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 52,
                    "decorators": [],
                    "name": "localClassFieldName",
                    "optional": false
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 55,
                    "end": 88,
                    "alternate": {
                      "type": "Literal",
                      "start": 84,
                      "end": 88,
                      "raw": "\"g2\"",
                      "value": "g2"
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 77,
                      "end": 81,
                      "raw": "\"g1\"",
                      "value": "g1"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 55,
                      "end": 74,
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "start": 55,
                        "end": 68,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 55,
                          "end": 66,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 59,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 66,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 71,
                        "end": 74,
                        "raw": "0.5",
                        "value": 0.5
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 161,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 100,
                  "end": 160,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 115,
                    "decorators": [],
                    "name": "localOtherField",
                    "optional": false
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 118,
                    "end": 160,
                    "alternate": {
                      "type": "Literal",
                      "start": 156,
                      "end": 160,
                      "raw": "\"g1\"",
                      "value": "g1"
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 149,
                      "end": 153,
                      "raw": "\"g2\"",
                      "value": "g2"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 118,
                      "end": 146,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 137,
                        "decorators": [],
                        "name": "localClassFieldName",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 142,
                        "end": 146,
                        "raw": "\"g1\"",
                        "value": "g1"
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "VariableDeclaration",
              "start": 166,
              "end": 225,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 172,
                  "end": 224,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 188,
                    "decorators": [],
                    "name": "localStaticField",
                    "optional": false
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 191,
                    "end": 224,
                    "alternate": {
                      "type": "Literal",
                      "start": 220,
                      "end": 224,
                      "raw": "\"s2\"",
                      "value": "s2"
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 213,
                      "end": 217,
                      "raw": "\"s1\"",
                      "value": "s1"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 191,
                      "end": 210,
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "start": 191,
                        "end": 204,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 191,
                          "end": 202,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 191,
                            "end": 195,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 202,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 207,
                        "end": 210,
                        "raw": "0.5",
                        "value": 0.5
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ReturnStatement",
              "start": 230,
              "end": 582,
              "argument": {
                "type": "ClassExpression",
                "start": 237,
                "end": 582,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 263,
                  "end": 582,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 273,
                      "end": 336,
                      "computed": true,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 293,
                        "decorators": [],
                        "name": "localClassFieldName",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 294,
                        "end": 336,
                        "async": false,
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
                                "raw": "\"value\"",
                                "value": "value"
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
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 345,
                      "end": 399,
                      "computed": true,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 346,
                        "end": 361,
                        "decorators": [],
                        "name": "localOtherField",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 362,
                        "end": 399,
                        "async": false,
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
                                "raw": "42",
                                "value": 42
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
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 408,
                      "end": 484,
                      "computed": true,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 416,
                        "end": 432,
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 433,
                        "end": 484,
                        "async": false,
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
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 459,
                                      "end": 465,
                                      "decorators": [],
                                      "name": "static",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 467,
                                      "end": 471,
                                      "raw": "true",
                                      "value": true
                                    }
                                  }
                                ]
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
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 493,
                      "end": 576,
                      "computed": true,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 517,
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 518,
                        "end": 576,
                        "async": false,
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
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 544,
                                      "end": 550,
                                      "decorators": [],
                                      "name": "static",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 552,
                                      "end": 563,
                                      "raw": "\"sometimes\"",
                                      "value": "sometimes"
                                    }
                                  }
                                ]
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
                  "start": 243,
                  "end": 262,
                  "decorators": [],
                  "name": "ParameterizedHolder",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 18,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
