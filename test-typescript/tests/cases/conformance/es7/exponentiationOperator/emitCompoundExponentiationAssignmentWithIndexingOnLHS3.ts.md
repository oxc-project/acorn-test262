__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 209,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 13,
            "end": 123,
            "properties": [
              {
                "type": "Property",
                "start": 19,
                "end": 24,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 21,
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
                  "start": 23,
                  "end": 24,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 30,
                "end": 69,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 34,
                  "end": 35,
                  "raw": "0",
                  "value": 0
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 35,
                  "end": 69,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 38,
                    "end": 69,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 48,
                        "end": 63,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 55,
                          "end": 62,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 55,
                            "end": 59
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 62,
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
                "start": 75,
                "end": 120,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "raw": "0",
                  "value": 0
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 80,
                  "end": 120,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 92,
                    "end": 120,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 102,
                        "end": 114,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 102,
                          "end": 113,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 102,
                            "end": 109,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 102,
                              "end": 106
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 107,
                              "end": 109,
                              "decorators": [],
                              "name": "_0",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
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
                      "start": 81,
                      "end": 90,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 82,
                        "end": 90,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 84,
                          "end": 90
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
      "start": 124,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 124,
        "end": 147,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 124,
          "end": 133,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 124,
            "end": 130,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 131,
            "end": 132,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 138,
          "end": 147,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 138,
            "end": 144,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 145,
            "end": 146,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 179,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 178,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 149,
          "end": 158,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 156,
            "end": 157,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 163,
          "end": 178,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 163,
            "end": 172,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 163,
              "end": 169,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 170,
              "end": 171,
              "raw": "0",
              "value": 0
            }
          },
          "right": {
            "type": "Literal",
            "start": 177,
            "end": 178,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 180,
        "end": 208,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 180,
          "end": 189,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 186,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 194,
          "end": 208,
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "start": 194,
            "end": 203,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 194,
              "end": 200,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 201,
              "end": 202,
              "raw": "0",
              "value": 0
            }
          },
          "right": {
            "type": "Literal",
            "start": 207,
            "end": 208,
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
