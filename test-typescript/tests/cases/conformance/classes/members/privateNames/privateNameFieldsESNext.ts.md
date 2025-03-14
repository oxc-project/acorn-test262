privateNameFieldsESNext.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 335,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 333,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 22,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "raw": "123",
              "value": 123
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 35,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 27,
              "end": 29,
              "name": "a"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 32,
              "end": 34,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 52,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 44,
              "end": 51,
              "raw": "\"hello\"",
              "value": "hello"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 57,
            "end": 60,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 57,
              "end": 59,
              "name": "b"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 168,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
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
              "start": 71,
              "end": 168,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 168,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 105,
                    "expression": {
                      "type": "CallExpression",
                      "start": 84,
                      "end": 104,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 96,
                          "end": 103,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 96,
                            "end": 100
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 101,
                            "end": 103,
                            "name": "a"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 84,
                        "end": 95,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 91,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 95,
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
                    "start": 114,
                    "end": 132,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 114,
                      "end": 131,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 114,
                        "end": 121,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 119,
                          "end": 121,
                          "name": "a"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 124,
                        "end": 131,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 162,
                    "expression": {
                      "type": "CallExpression",
                      "start": 141,
                      "end": 161,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 153,
                          "end": 160,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 158,
                            "end": 160,
                            "name": "b"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 141,
                        "end": 152,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 148,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 152,
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
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 192,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 180,
              "end": 182,
              "name": "m"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 185,
              "end": 191,
              "raw": "\"test\"",
              "value": "test"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 197,
            "end": 207,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 204,
              "end": 206,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 212,
            "end": 302,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 223,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 223,
              "end": 302,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 302,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 257,
                    "expression": {
                      "type": "CallExpression",
                      "start": 236,
                      "end": 256,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 248,
                          "end": 255,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 248,
                            "end": 252
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 253,
                            "end": 255,
                            "name": "m"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 236,
                        "end": 247,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 243,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 247,
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
                    "start": 266,
                    "end": 296,
                    "expression": {
                      "type": "CallExpression",
                      "start": 266,
                      "end": 295,
                      "arguments": [
                        {
                          "type": "AssignmentExpression",
                          "start": 278,
                          "end": 294,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 278,
                            "end": 285,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 278,
                              "end": 282
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 283,
                              "end": 285,
                              "name": "x"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 288,
                            "end": 294,
                            "raw": "\"test\"",
                            "value": "test"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 266,
                        "end": 277,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 273,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 277,
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
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 307,
            "end": 331,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 307,
              "end": 317,
              "name": "something"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 320,
              "end": 330,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 326,
                "end": 330,
                "raw": "1234",
                "value": 1234
              },
              "expression": true,
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
    }
  ],
  "sourceType": "script"
}
```
