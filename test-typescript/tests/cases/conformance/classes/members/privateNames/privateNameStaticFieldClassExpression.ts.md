__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 364,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 361,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 361,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 184,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 25,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "start": 28,
              "end": 183,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 183,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 130,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
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
                      "start": 55,
                      "end": 130,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 58,
                        "end": 130,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 72,
                            "end": 93,
                            "expression": {
                              "type": "CallExpression",
                              "start": 72,
                              "end": 92,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 84,
                                  "end": 91,
                                  "raw": "\"hello\"",
                                  "value": "hello"
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 72,
                                "end": 83,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 72,
                                  "end": 79,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 83,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 106,
                            "end": 120,
                            "expression": {
                              "type": "NewExpression",
                              "start": 106,
                              "end": 119,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 110,
                                "end": 117,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 110,
                                  "end": 111,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 112,
                                  "end": 117,
                                  "name": "foo2"
                                }
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
                    "start": 139,
                    "end": 157,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "decorators": [],
                      "name": "test",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "start": 153,
                      "end": 156,
                      "raw": "123",
                      "value": 123
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 166,
                    "end": 177,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 171,
                      "decorators": [],
                      "name": "field",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "start": 174,
                      "end": 176,
                      "raw": "10",
                      "value": 10
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
            "start": 189,
            "end": 255,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 196,
              "end": 201,
              "name": "foo2"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "start": 204,
              "end": 254,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 214,
                "end": 254,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 224,
                    "end": 248,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 241,
                      "decorators": [],
                      "name": "otherClass",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "start": 244,
                      "end": 247,
                      "raw": "123",
                      "value": 123
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 210,
                "end": 213,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "implements": [],
              "superClass": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 359,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 359,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 265,
                "end": 359,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 275,
                    "end": 299,
                    "expression": {
                      "type": "CallExpression",
                      "start": 275,
                      "end": 299,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 287,
                          "end": 298,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 293,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 288,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 289,
                              "end": 293,
                              "name": "foo"
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 294,
                            "end": 298,
                            "decorators": [],
                            "name": "test",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 275,
                        "end": 286,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 282,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 286,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 325,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 308,
                      "end": 324,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 308,
                        "end": 319,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 308,
                          "end": 314,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 309,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 310,
                            "end": 314,
                            "name": "foo"
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 319,
                          "decorators": [],
                          "name": "test",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 322,
                        "end": 324,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 353,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 334,
                      "end": 352,
                      "computed": false,
                      "object": {
                        "type": "NewExpression",
                        "start": 334,
                        "end": 346,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 338,
                          "end": 344,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 338,
                            "end": 339,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 340,
                            "end": 344,
                            "name": "foo"
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 352,
                        "decorators": [],
                        "name": "field",
                        "optional": false
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
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
