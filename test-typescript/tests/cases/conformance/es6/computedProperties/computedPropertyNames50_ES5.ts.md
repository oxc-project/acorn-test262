computedPropertyNames50_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 348,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 348,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 348,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 20,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 16,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 20,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 26,
                "end": 98,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 33,
                  "end": 98,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 36,
                    "end": 98,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 46,
                        "end": 92,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 58,
                          "end": 92,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 72,
                              "end": 82,
                              "argument": {
                                "type": "Literal",
                                "start": 79,
                                "end": 81,
                                "raw": "10",
                                "value": 10
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 50,
                          "end": 56,
                          "operator": "==",
                          "left": {
                            "type": "Literal",
                            "start": 50,
                            "end": 51,
                            "raw": "1",
                            "value": 1
                          },
                          "right": {
                            "type": "Literal",
                            "start": 55,
                            "end": 56,
                            "raw": "1",
                            "value": 1
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
                "type": "Property",
                "start": 104,
                "end": 143,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 109,
                  "end": 114,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 109,
                    "end": 110,
                    "raw": "1",
                    "value": 1
                  },
                  "right": {
                    "type": "Literal",
                    "start": 113,
                    "end": 114,
                    "raw": "1",
                    "value": 1
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 115,
                  "end": 143,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 118,
                    "end": 143,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 128,
                        "end": 137,
                        "argument": {
                          "type": "Literal",
                          "start": 134,
                          "end": 136,
                          "raw": "10",
                          "value": 10
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
                "type": "Property",
                "start": 149,
                "end": 210,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 154,
                  "end": 159,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 154,
                    "end": 155,
                    "raw": "1",
                    "value": 1
                  },
                  "right": {
                    "type": "Literal",
                    "start": 158,
                    "end": 159,
                    "raw": "1",
                    "value": 1
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 160,
                  "end": 210,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 163,
                    "end": 210,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 195,
                        "end": 204,
                        "argument": {
                          "type": "Literal",
                          "start": 201,
                          "end": 203,
                          "raw": "10",
                          "value": 10
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
                "type": "Property",
                "start": 216,
                "end": 256,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 221,
                  "end": 226,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 221,
                    "end": 222,
                    "raw": "1",
                    "value": 1
                  },
                  "right": {
                    "type": "Literal",
                    "start": 225,
                    "end": 226,
                    "raw": "1",
                    "value": 1
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 227,
                  "end": 256,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 230,
                    "end": 256,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 240,
                        "end": 250,
                        "argument": {
                          "type": "Literal",
                          "start": 247,
                          "end": 249,
                          "raw": "10",
                          "value": 10
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
                "type": "Property",
                "start": 262,
                "end": 334,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 269,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 269,
                  "end": 334,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 272,
                    "end": 334,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 282,
                        "end": 328,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 294,
                          "end": 328,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 308,
                              "end": 318,
                              "argument": {
                                "type": "Literal",
                                "start": 315,
                                "end": 317,
                                "raw": "20",
                                "value": 20
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 286,
                          "end": 292,
                          "operator": "==",
                          "left": {
                            "type": "Literal",
                            "start": 286,
                            "end": 287,
                            "raw": "2",
                            "value": 2
                          },
                          "right": {
                            "type": "Literal",
                            "start": 291,
                            "end": 292,
                            "raw": "2",
                            "value": 2
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
                "type": "Property",
                "start": 340,
                "end": 346,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 342,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 344,
                  "end": 346,
                  "raw": "20",
                  "value": 20
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
