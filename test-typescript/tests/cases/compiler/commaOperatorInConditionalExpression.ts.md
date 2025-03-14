__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 107,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 107,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 29,
            "end": 105,
            "expression": {
              "type": "CallExpression",
              "start": 29,
              "end": 105,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 104,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 48,
                    "end": 104,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 58,
                        "end": 98,
                        "argument": {
                          "type": "ConditionalExpression",
                          "start": 65,
                          "end": 98,
                          "alternate": {
                            "type": "ObjectExpression",
                            "start": 84,
                            "end": 98,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 86,
                                "end": 96,
                                "computed": true,
                                "key": {
                                  "type": "Identifier",
                                  "start": 87,
                                  "end": 88,
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "BinaryExpression",
                                  "start": 91,
                                  "end": 96,
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 91,
                                    "end": 92,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 95,
                                    "end": 96,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              }
                            ]
                          },
                          "consequent": {
                            "type": "ObjectExpression",
                            "start": 71,
                            "end": 81,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 73,
                                "end": 79,
                                "computed": true,
                                "key": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 75,
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Identifier",
                                  "start": 78,
                                  "end": 79,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "Literal",
                            "start": 65,
                            "end": 69,
                            "raw": "true",
                            "value": true
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 29,
                "end": 42,
                "computed": false,
                "object": {
                  "type": "ArrayExpression",
                  "start": 29,
                  "end": 38,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 30,
                      "end": 31,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 33,
                      "end": 34,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 36,
                      "end": 37,
                      "raw": "3",
                      "value": 3
                    }
                  ]
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 42,
                  "decorators": [],
                  "name": "map",
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
