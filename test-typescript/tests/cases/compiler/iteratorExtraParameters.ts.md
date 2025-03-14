__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 269,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "decorators": [],
            "name": "iter",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 69,
            "end": 131,
            "properties": [
              {
                "type": "Property",
                "start": 75,
                "end": 129,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 77,
                  "end": 92,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 83,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 92,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 93,
                  "end": 129,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 105,
                    "end": 129,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 115,
                        "end": 123,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 115,
                          "end": 122,
                          "argument": {
                            "type": "Literal",
                            "start": 121,
                            "end": 122,
                            "raw": "0",
                            "value": 0
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 94,
                      "end": 103,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 95,
                        "end": 103,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 97,
                          "end": 103
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 134,
      "end": 172,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 153,
          "end": 165,
          "argument": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 165,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 162,
              "end": 165
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 171,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 168,
          "end": 171
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 174,
      "end": 268,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 268,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 194,
            "end": 216,
            "await": false,
            "body": {
              "type": "EmptyStatement",
              "start": 215,
              "end": 216
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 199,
              "end": 206,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 205,
                  "end": 206,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "decorators": [],
                    "name": "_",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 210,
              "end": 214,
              "decorators": [],
              "name": "iter",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 222,
            "end": 234,
            "expression": {
              "type": "YieldExpression",
              "start": 222,
              "end": 233,
              "argument": {
                "type": "Identifier",
                "start": 229,
                "end": 233,
                "decorators": [],
                "name": "iter",
                "optional": false
              },
              "delegate": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 240,
            "end": 249,
            "expression": {
              "type": "ArrayExpression",
              "start": 240,
              "end": 249,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 241,
                  "end": 248,
                  "argument": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 248,
                    "decorators": [],
                    "name": "iter",
                    "optional": false
                  }
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 255,
            "end": 266,
            "expression": {
              "type": "CallExpression",
              "start": 255,
              "end": 265,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 257,
                  "end": 264,
                  "argument": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 264,
                    "decorators": [],
                    "name": "iter",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 185,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
