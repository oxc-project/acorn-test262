__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 16,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 20,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 26,
                "end": 98,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 33,
                  "end": 98,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 36,
                    "end": 98,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 46,
                        "end": 92,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 50,
                          "end": 56,
                          "left": {
                            "type": "Literal",
                            "start": 50,
                            "end": 51,
                            "value": 1,
                            "raw": "1"
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "start": 55,
                            "end": 56,
                            "value": 1,
                            "raw": "1"
                          }
                        },
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
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 104,
                "end": 143,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 109,
                  "end": 114,
                  "left": {
                    "type": "Literal",
                    "start": 109,
                    "end": 110,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 113,
                    "end": 114,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 115,
                  "end": 143,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 10,
                          "raw": "10"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 149,
                "end": 210,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 154,
                  "end": 159,
                  "left": {
                    "type": "Literal",
                    "start": 154,
                    "end": 155,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 158,
                    "end": 159,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 160,
                  "end": 210,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 10,
                          "raw": "10"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 216,
                "end": 256,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 221,
                  "end": 226,
                  "left": {
                    "type": "Literal",
                    "start": 221,
                    "end": 222,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 225,
                    "end": 226,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 227,
                  "end": 256,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 10,
                          "raw": "10"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 262,
                "end": 334,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 269,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 269,
                  "end": 334,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 272,
                    "end": 334,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 282,
                        "end": 328,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 286,
                          "end": 292,
                          "left": {
                            "type": "Literal",
                            "start": 286,
                            "end": 287,
                            "value": 2,
                            "raw": "2"
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "start": 291,
                            "end": 292,
                            "value": 2,
                            "raw": "2"
                          }
                        },
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
                                "value": 20,
                                "raw": "20"
                              }
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 340,
                "end": 346,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 342,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 344,
                  "end": 346,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
