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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
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
              "callee": {
                "type": "MemberExpression",
                "start": 29,
                "end": 42,
                "object": {
                  "type": "ArrayExpression",
                  "start": 29,
                  "end": 38,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 30,
                      "end": 31,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 33,
                      "end": 34,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 36,
                      "end": 37,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 42,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 104,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
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
                          "test": {
                            "type": "Literal",
                            "start": 65,
                            "end": 69,
                            "value": true,
                            "raw": "true"
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 75,
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 78,
                                  "end": 79,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false
                              }
                            ]
                          },
                          "alternate": {
                            "type": "ObjectExpression",
                            "start": 84,
                            "end": 98,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 86,
                                "end": 96,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 87,
                                  "end": 88,
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "BinaryExpression",
                                  "start": 91,
                                  "end": 96,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 91,
                                    "end": 92,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "start": 95,
                                    "end": 96,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
