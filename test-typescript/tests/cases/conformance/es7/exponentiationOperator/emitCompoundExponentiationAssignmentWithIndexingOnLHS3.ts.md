__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 227,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 28,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 31,
            "end": 141,
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 42,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 39,
                  "decorators": [],
                  "name": "_0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 41,
                  "end": 42,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 48,
                "end": 87,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 52,
                  "end": 53,
                  "raw": "0",
                  "value": 0
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 53,
                  "end": 87,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 56,
                    "end": 87,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 66,
                        "end": 81,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 73,
                          "end": 80,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 73,
                            "end": 77
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 78,
                            "end": 80,
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 93,
                "end": 138,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 97,
                  "end": 98,
                  "raw": "0",
                  "value": 0
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 98,
                  "end": 138,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 110,
                    "end": 138,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 120,
                        "end": 132,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 120,
                          "end": 131,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 120,
                            "end": 127,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 120,
                              "end": 124
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 125,
                              "end": 127,
                              "decorators": [],
                              "name": "_0",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 108,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 100,
                        "end": 108,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 102,
                          "end": 108
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 165,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 142,
          "end": 151,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 149,
            "end": 150,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 156,
          "end": 165,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 156,
            "end": 162,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 163,
            "end": 164,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 197,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 196,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 167,
          "end": 176,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 173,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 174,
            "end": 175,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 181,
          "end": 196,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 181,
            "end": 190,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 181,
              "end": 187,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 188,
              "end": 189,
              "raw": "0",
              "value": 0
            }
          },
          "right": {
            "type": "Literal",
            "start": 195,
            "end": 196,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 227,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 226,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 198,
          "end": 207,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 198,
            "end": 204,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 205,
            "end": 206,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 212,
          "end": 226,
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "start": 212,
            "end": 221,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 212,
              "end": 218,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 219,
              "end": 220,
              "raw": "0",
              "value": 0
            }
          },
          "right": {
            "type": "Literal",
            "start": 225,
            "end": 226,
            "raw": "2",
            "value": 2
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
