__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 37,
            "end": 54,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 42,
              "end": 54,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 43,
                  "end": 47,
                  "argument": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "Literal",
                "start": 52,
                "end": 54,
                "value": "",
                "raw": "\"\""
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 78,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 57,
        "end": 77,
        "tag": {
          "type": "CallExpression",
          "start": 57,
          "end": 75,
          "callee": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 69,
                          "end": 70,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        },
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
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 101,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 79,
        "end": 100,
        "tag": {
          "type": "CallExpression",
          "start": 79,
          "end": 97,
          "callee": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 91,
                          "end": 92,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        },
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
              "value": {
                "cooked": "x",
                "raw": "x"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 129,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 102,
        "end": 128,
        "tag": {
          "type": "CallExpression",
          "start": 102,
          "end": 120,
          "callee": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 112,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 114,
                          "end": 115,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 120,
          "end": 128,
          "expressions": [
            {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 120,
              "end": 124,
              "value": {
                "cooked": "x",
                "raw": "x"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 125,
              "end": 128,
              "value": {
                "cooked": "x",
                "raw": "x"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 167,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 130,
        "end": 166,
        "tag": {
          "type": "CallExpression",
          "start": 130,
          "end": 164,
          "callee": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 142,
                          "end": 143,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "Property",
                  "start": 147,
                  "end": 161,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 150,
                    "end": 161,
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 151,
                      "end": 158,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Literal",
                        "start": 157,
                        "end": 158,
                        "value": 1,
                        "raw": "1"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        },
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
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 205,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 168,
        "end": 204,
        "tag": {
          "type": "CallExpression",
          "start": 168,
          "end": 202,
          "callee": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 175,
                    "end": 186,
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 176,
                      "end": 183,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Literal",
                        "start": 182,
                        "end": 183,
                        "value": 1,
                        "raw": "1"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 194,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 196,
                          "end": 197,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        },
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
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
