__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 429,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 113,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 113,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 37,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 31,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 37,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 37,
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
            "start": 42,
            "end": 82,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
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
              "start": 54,
              "end": 82,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 82,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 67,
                    "end": 76,
                    "argument": {
                      "type": "Literal",
                      "start": 74,
                      "end": 75,
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
            "start": 88,
            "end": 111,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 111,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 111,
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
      "start": 115,
      "end": 429,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 429,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 220,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 220,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 169,
                    "end": 181,
                    "expression": {
                      "type": "CallExpression",
                      "start": 169,
                      "end": 180,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 169,
                        "end": 178,
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
                          "end": 178,
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
                    "start": 196,
                    "end": 204,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 196,
                      "end": 203,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 196,
                        "end": 201
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 203,
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
            "start": 226,
            "end": 321,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 237,
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
              "start": 237,
              "end": 321,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 321,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 250,
                    "end": 258,
                    "expression": {
                      "type": "CallExpression",
                      "start": 250,
                      "end": 257,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 250,
                        "end": 255
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 267,
                    "end": 279,
                    "expression": {
                      "type": "CallExpression",
                      "start": 267,
                      "end": 278,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 267,
                        "end": 276,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 267,
                          "end": 272
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 276,
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
                    "start": 297,
                    "end": 305,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 297,
                      "end": 304,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 297,
                        "end": 302
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 303,
                        "end": 304,
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
            "start": 327,
            "end": 427,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 346,
              "end": 427,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 349,
                "end": 427,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 359,
                    "end": 371,
                    "expression": {
                      "type": "CallExpression",
                      "start": 359,
                      "end": 370,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 359,
                        "end": 368,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 359,
                          "end": 364
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 368,
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
                    "start": 386,
                    "end": 394,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 386,
                      "end": 393,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 386,
                        "end": 391
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 393,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 412,
                    "end": 421,
                    "argument": {
                      "type": "Literal",
                      "start": 419,
                      "end": 420,
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
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
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
