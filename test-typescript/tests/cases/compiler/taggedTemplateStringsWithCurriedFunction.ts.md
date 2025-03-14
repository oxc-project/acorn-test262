taggedTemplateStringsWithCurriedFunction.ts
```json
{
  "type": "Program",
  "start": 27,
  "end": 206,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 37,
            "end": 54,
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 42,
              "end": 54,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 52,
                "end": 54,
                "raw": "\"\"",
                "value": ""
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 43,
                  "end": 47,
                  "argument": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "_",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "_",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 78,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 57,
        "end": 77,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 75,
          "end": 77,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 75,
              "end": 77,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "CallExpression",
          "start": 57,
          "end": 75,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 59,
              "end": 74,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 61,
                  "end": 72,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 64,
                    "end": 72,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 66,
                        "end": 70,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 69,
                          "end": 70,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 101,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 79,
        "end": 100,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 97,
          "end": 100,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 97,
              "end": 100,
              "tail": true,
              "value": {
                "cooked": "x",
                "raw": "x"
              }
            }
          ]
        },
        "tag": {
          "type": "CallExpression",
          "start": 79,
          "end": 97,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 81,
              "end": 96,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 83,
                  "end": 94,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 86,
                    "end": 94,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 88,
                        "end": 92,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 91,
                          "end": 92,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 129,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 102,
        "end": 128,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 120,
          "end": 128,
          "expressions": [
            {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 120,
              "end": 124,
              "tail": false,
              "value": {
                "cooked": "x",
                "raw": "x"
              }
            },
            {
              "type": "TemplateElement",
              "start": 125,
              "end": 128,
              "tail": true,
              "value": {
                "cooked": "x",
                "raw": "x"
              }
            }
          ]
        },
        "tag": {
          "type": "CallExpression",
          "start": 102,
          "end": 120,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 104,
              "end": 119,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 106,
                  "end": 117,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 109,
                    "end": 117,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 111,
                        "end": 115,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 112,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 114,
                          "end": 115,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 167,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 130,
        "end": 166,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 164,
          "end": 166,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 164,
              "end": 166,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "CallExpression",
          "start": 130,
          "end": 164,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 132,
              "end": 163,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 134,
                  "end": 145,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 137,
                    "end": 145,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 139,
                        "end": 143,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 142,
                          "end": 143,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "Property",
                  "start": 147,
                  "end": 161,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "start": 150,
                    "end": 161,
                    "arguments": [],
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 151,
                      "end": 158,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 157,
                        "end": 158,
                        "raw": "1",
                        "value": 1
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    },
                    "optional": false
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 205,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 168,
        "end": 204,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 202,
          "end": 204,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 202,
              "end": 204,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "CallExpression",
          "start": 168,
          "end": 202,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 170,
              "end": 201,
              "properties": [
                {
                  "type": "Property",
                  "start": 172,
                  "end": 186,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "start": 175,
                    "end": 186,
                    "arguments": [],
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 176,
                      "end": 183,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 182,
                        "end": 183,
                        "raw": "1",
                        "value": 1
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    },
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 188,
                  "end": 199,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 191,
                    "end": 199,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 193,
                        "end": 197,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 194,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 196,
                          "end": 197,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
