__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 227,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 226,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 226,
        "body": [
          {
            "type": "ForStatement",
            "start": 37,
            "end": 224,
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 224,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 75,
                  "end": 90,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 79,
                      "end": 89,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 89,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 81,
                          "end": 89,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 83,
                            "end": 89
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 99,
                  "end": 129,
                  "expression": {
                    "type": "CallExpression",
                    "start": 99,
                    "end": 128,
                    "arguments": [
                      {
                        "type": "FunctionExpression",
                        "start": 110,
                        "end": 127,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 122,
                          "end": 127,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 124,
                              "end": 125,
                              "expression": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 125,
                                "decorators": [],
                                "name": "i",
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
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 99,
                      "end": 109,
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 99,
                        "end": 101,
                        "elements": []
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 109,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 138,
                  "end": 157,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 139,
                    "end": 155,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 141,
                        "end": 153,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 150,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 152,
                          "end": 153,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 166,
                  "end": 182,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 167,
                    "end": 180,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 169,
                        "end": 178,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 178,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 178,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 191,
                  "end": 218,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 192,
                    "end": 216,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 194,
                        "end": 214,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 203,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 214,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 42,
              "end": 51,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 46,
                  "end": 51,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 50,
                    "end": 51,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 53,
              "end": 58,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 57,
                "end": 58,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 60,
              "end": 63,
              "argument": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "operator": "++",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
