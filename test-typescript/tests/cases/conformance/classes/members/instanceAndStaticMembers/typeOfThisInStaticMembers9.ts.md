typeOfThisInStaticMembers9.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 490,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
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
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 489,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 489,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 103,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 82,
              "decorators": [],
              "name": "arrowFunctionBoundary",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 85,
              "end": 102,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 91,
                "end": 102,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 91,
                  "end": 98,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 91,
                    "end": 96
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 101,
                  "end": 102,
                  "raw": "1",
                  "value": 1
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 173,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 135,
              "decorators": [],
              "name": "functionExprBoundary",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 172,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 150,
                "end": 172,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 152,
                    "end": 170,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 159,
                      "end": 170,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 159,
                        "end": 166,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 159,
                          "end": 164
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "decorators": [],
                          "name": "f",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 169,
                        "end": 170,
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
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 231,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 202,
              "decorators": [],
              "name": "classExprBoundary",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "start": 205,
              "end": 230,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 211,
                "end": 230,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 213,
                    "end": 228,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "BinaryExpression",
                      "start": 217,
                      "end": 228,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 224,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 217,
                          "end": 222
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 223,
                          "end": 224,
                          "decorators": [],
                          "name": "f",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 227,
                        "end": 228,
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
              "superClass": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 236,
            "end": 487,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 271,
              "decorators": [],
              "name": "functionAndClassDeclBoundary",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 274,
              "end": 486,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 275,
                "end": 483,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 281,
                  "end": 483,
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "start": 291,
                      "end": 349,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 307,
                        "end": 349,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 321,
                            "end": 339,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 328,
                              "end": 339,
                              "operator": "+",
                              "left": {
                                "type": "MemberExpression",
                                "start": 328,
                                "end": 335,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 328,
                                  "end": 333
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 334,
                                  "end": 335,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 338,
                                "end": 339,
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
                        "start": 300,
                        "end": 303,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "params": []
                    },
                    {
                      "type": "ClassDeclaration",
                      "start": 358,
                      "end": 477,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 366,
                        "end": 477,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 380,
                            "end": 395,
                            "computed": false,
                            "declare": false,
                            "decorators": [],
                            "definite": false,
                            "key": {
                              "type": "Identifier",
                              "start": 380,
                              "end": 381,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "override": false,
                            "readonly": false,
                            "static": false,
                            "value": {
                              "type": "BinaryExpression",
                              "start": 384,
                              "end": 395,
                              "operator": "+",
                              "left": {
                                "type": "MemberExpression",
                                "start": 384,
                                "end": 391,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 384,
                                  "end": 389
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 390,
                                  "end": 391,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 394,
                                "end": 395,
                                "raw": "5",
                                "value": 5
                              }
                            }
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 408,
                            "end": 467,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 408,
                              "end": 414,
                              "decorators": [],
                              "name": "method",
                              "optional": false
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 415,
                              "end": 467,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 418,
                                "end": 467,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 436,
                                    "end": 453,
                                    "argument": {
                                      "type": "BinaryExpression",
                                      "start": 443,
                                      "end": 453,
                                      "operator": "+",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 443,
                                        "end": 450,
                                        "computed": false,
                                        "object": {
                                          "type": "Super",
                                          "start": 443,
                                          "end": 448
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 449,
                                          "end": 450,
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 452,
                                        "end": 453,
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
                              "params": []
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 364,
                        "end": 365,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "implements": [],
                      "superClass": null
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
