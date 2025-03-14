__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 302,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 302,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 26,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 48,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ThisExpression",
              "start": 43,
              "end": 47
            }
          },
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 225,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
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
              "start": 57,
              "end": 225,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 60,
                "end": 225,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 72,
                    "end": 79,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 72,
                      "end": 78,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 72,
                        "end": 76
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 114,
                    "end": 135,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 118,
                        "end": 134,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "decorators": [],
                          "name": "f",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 122,
                          "end": 134,
                          "async": false,
                          "body": {
                            "type": "MemberExpression",
                            "start": 128,
                            "end": 134,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 128,
                              "end": 132
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 134,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 183,
                    "end": 198,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 187,
                        "end": 197,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 188,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 191,
                          "end": 197,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 191,
                            "end": 195
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 197,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 207,
                    "end": 219,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 214,
                      "end": 218
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
            "start": 231,
            "end": 300,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 242,
              "decorators": [],
              "name": "bar2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 242,
              "end": 300,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 245,
                "end": 300,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 255,
                    "end": 270,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 259,
                        "end": 269,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 260,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 263,
                          "end": 269,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 263,
                            "end": 267
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 268,
                            "end": 269,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 279,
                    "end": 294,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 283,
                        "end": 293,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 287,
                          "end": 293,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 287,
                            "end": 291
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 292,
                            "end": 293,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
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
