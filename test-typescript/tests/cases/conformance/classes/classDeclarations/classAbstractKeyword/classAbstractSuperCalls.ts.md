__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 485,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 35,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 33,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 33,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 33,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 22,
                    "end": 31,
                    "argument": {
                      "type": "Literal",
                      "start": 29,
                      "end": 30,
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 145,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 145,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 70,
            "end": 85,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 82,
              "end": 85,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 112,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 93,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 112,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 98,
                    "end": 110,
                    "expression": {
                      "type": "CallExpression",
                      "start": 98,
                      "end": 109,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 98,
                        "end": 107,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 98,
                          "end": 103
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 107,
                          "decorators": [],
                          "name": "foo",
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 143,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 143,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 143,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 125,
                    "end": 141,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 132,
                      "end": 140,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 132,
                        "end": 136
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 140,
                        "decorators": [],
                        "name": "foo",
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
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 147,
      "end": 303,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 303,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 190,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 174,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 190,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 190,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 179,
                    "end": 188,
                    "argument": {
                      "type": "Literal",
                      "start": 186,
                      "end": 187,
                      "raw": "2",
                      "value": 2
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
            "start": 195,
            "end": 237,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 198,
              "decorators": [],
              "name": "qux",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 198,
              "end": 237,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 201,
                "end": 237,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 203,
                    "end": 235,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 210,
                      "end": 234,
                      "operator": "||",
                      "left": {
                        "type": "CallExpression",
                        "start": 210,
                        "end": 221,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 210,
                          "end": 219,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 210,
                            "end": 215
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 219,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 225,
                        "end": 234,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 225,
                          "end": 230
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 234,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
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
            "type": "MethodDefinition",
            "start": 271,
            "end": 301,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 275,
              "decorators": [],
              "name": "norf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 301,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 278,
                "end": 301,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 280,
                    "end": 299,
                    "argument": {
                      "type": "CallExpression",
                      "start": 287,
                      "end": 298,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 287,
                        "end": 296,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 287,
                          "end": 292
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 296,
                          "decorators": [],
                          "name": "bar",
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 305,
      "end": 374,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 314,
        "end": 374,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 339,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 320,
              "end": 323,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 323,
              "end": 339,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 339,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 328,
                    "end": 337,
                    "argument": {
                      "type": "Literal",
                      "start": 335,
                      "end": 336,
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
            "start": 344,
            "end": 372,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 347,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 347,
              "end": 372,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 350,
                "end": 372,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 352,
                    "end": 370,
                    "argument": {
                      "type": "CallExpression",
                      "start": 359,
                      "end": 369,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 359,
                        "end": 367,
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
                          "end": 367,
                          "decorators": [],
                          "name": "foo",
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 313,
        "decorators": [],
        "name": "AA",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 376,
      "end": 484,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 405,
        "end": 484,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 411,
            "end": 426,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 423,
              "end": 426,
              "async": false,
              "body": null,
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
        "start": 391,
        "end": 393,
        "decorators": [],
        "name": "BB",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 402,
        "end": 404,
        "decorators": [],
        "name": "AA",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
