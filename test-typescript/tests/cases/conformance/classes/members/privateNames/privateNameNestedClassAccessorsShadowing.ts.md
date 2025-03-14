__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 306,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 306,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 39,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 23,
              "name": "x"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 39,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 39,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 28,
                    "end": 37,
                    "argument": {
                      "type": "Literal",
                      "start": 35,
                      "end": 36,
                      "raw": "1",
                      "value": 1
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
            "start": 45,
            "end": 304,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 304,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 304,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 69,
                    "end": 298,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 83,
                      "end": 298,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 97,
                          "end": 119,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 101,
                            "end": 103,
                            "name": "x"
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 103,
                            "end": 119,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 106,
                              "end": 119,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 108,
                                  "end": 117,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 115,
                                    "end": 116,
                                    "raw": "1",
                                    "value": 1
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
                          "start": 133,
                          "end": 201,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 141,
                            "decorators": [],
                            "name": "testBase",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 141,
                            "end": 201,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 151,
                              "end": 201,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 169,
                                  "end": 187,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 169,
                                    "end": 186,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 181,
                                        "end": 185,
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
                                          "type": "PrivateIdentifier",
                                          "start": 183,
                                          "end": 185,
                                          "name": "x"
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 169,
                                      "end": 180,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 169,
                                        "end": 176,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 177,
                                        "end": 180,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false
                                      }
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
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 142,
                                "end": 149,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 143,
                                  "end": 149,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 145,
                                    "end": 149,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 145,
                                      "end": 149,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 214,
                          "end": 288,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 214,
                            "end": 225,
                            "decorators": [],
                            "name": "testDerived",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 225,
                            "end": 288,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 238,
                              "end": 288,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 256,
                                  "end": 274,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 256,
                                    "end": 273,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 268,
                                        "end": 272,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 268,
                                          "end": 269,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 270,
                                          "end": 272,
                                          "name": "x"
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 256,
                                      "end": 267,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 256,
                                        "end": 263,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 264,
                                        "end": 267,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false
                                      }
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
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 226,
                                "end": 236,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 227,
                                  "end": 236,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 229,
                                    "end": 236,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 229,
                                      "end": 236,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 82,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
