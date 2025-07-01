__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 16
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 18,
                  "end": 20
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 20
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 33
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 50,
                            "end": 51
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 55,
                            "end": 56
                          },
                          "start": 50,
                          "end": 56
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 79,
                                "end": 81
                              },
                              "start": 72,
                              "end": 82
                            }
                          ],
                          "start": 58,
                          "end": 92
                        },
                        "alternate": null,
                        "start": 46,
                        "end": 92
                      }
                    ],
                    "start": 36,
                    "end": 98
                  },
                  "expression": false,
                  "start": 33,
                  "end": 98
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 26,
                "end": 98
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 109,
                    "end": 110
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 113,
                    "end": 114
                  },
                  "start": 109,
                  "end": 114
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 134,
                          "end": 136
                        },
                        "start": 128,
                        "end": 137
                      }
                    ],
                    "start": 118,
                    "end": 143
                  },
                  "expression": false,
                  "start": 115,
                  "end": 143
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 104,
                "end": 143
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 154,
                    "end": 155
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 158,
                    "end": 159
                  },
                  "start": 154,
                  "end": 159
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 201,
                          "end": 203
                        },
                        "start": 195,
                        "end": 204
                      }
                    ],
                    "start": 163,
                    "end": 210
                  },
                  "expression": false,
                  "start": 160,
                  "end": 210
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 149,
                "end": 210
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 221,
                    "end": 222
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 225,
                    "end": 226
                  },
                  "start": 221,
                  "end": 226
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 247,
                          "end": 249
                        },
                        "start": 240,
                        "end": 250
                      }
                    ],
                    "start": 230,
                    "end": 256
                  },
                  "expression": false,
                  "start": 227,
                  "end": 256
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 216,
                "end": 256
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 269
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 286,
                            "end": 287
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 291,
                            "end": 292
                          },
                          "start": 286,
                          "end": 292
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": 20,
                                "raw": "20",
                                "start": 315,
                                "end": 317
                              },
                              "start": 308,
                              "end": 318
                            }
                          ],
                          "start": 294,
                          "end": 328
                        },
                        "alternate": null,
                        "start": 282,
                        "end": 328
                      }
                    ],
                    "start": 272,
                    "end": 334
                  },
                  "expression": false,
                  "start": 269,
                  "end": 334
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 262,
                "end": 334
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 342
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 344,
                  "end": 346
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 340,
                "end": 346
              }
            ],
            "start": 8,
            "end": 348
          },
          "definite": false,
          "start": 4,
          "end": 348
        }
      ],
      "declare": false,
      "start": 0,
      "end": 348
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 348
}
```
