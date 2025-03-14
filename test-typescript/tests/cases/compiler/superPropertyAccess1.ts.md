__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 384,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 99,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 99,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 30,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
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
              "start": 24,
              "end": 30,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 30,
                "body": []
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
            "start": 35,
            "end": 75,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 75,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 75,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 69,
                    "argument": {
                      "type": "Literal",
                      "start": 67,
                      "end": 68,
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
            "start": 81,
            "end": 97,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
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
              "start": 91,
              "end": 97,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 97,
                "body": []
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 384,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 384,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 125,
            "end": 193,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
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
              "start": 135,
              "end": 193,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 193,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 160,
                    "expression": {
                      "type": "CallExpression",
                      "start": 148,
                      "end": 159,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 148,
                        "end": 157,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 148,
                          "end": 153
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 157,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 169,
                    "end": 177,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 169,
                      "end": 176,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 169,
                        "end": 174
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 176,
                        "decorators": [],
                        "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 289,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 214,
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
              "start": 214,
              "end": 289,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 289,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 227,
                    "end": 235,
                    "expression": {
                      "type": "CallExpression",
                      "start": 227,
                      "end": 234,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 227,
                        "end": 232
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 244,
                    "end": 256,
                    "expression": {
                      "type": "CallExpression",
                      "start": 244,
                      "end": 255,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 244,
                        "end": 253,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 244,
                          "end": 249
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 253,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 265,
                    "end": 273,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 265,
                      "end": 272,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 265,
                        "end": 270
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "decorators": [],
                        "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 295,
            "end": 382,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 307,
              "end": 382,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 310,
                "end": 382,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 332,
                    "expression": {
                      "type": "CallExpression",
                      "start": 320,
                      "end": 331,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 320,
                        "end": 329,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 320,
                          "end": 325
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 329,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 341,
                    "end": 349,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 341,
                      "end": 348,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 341,
                        "end": 346
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 348,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 367,
                    "end": 376,
                    "argument": {
                      "type": "Literal",
                      "start": 374,
                      "end": 375,
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
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
