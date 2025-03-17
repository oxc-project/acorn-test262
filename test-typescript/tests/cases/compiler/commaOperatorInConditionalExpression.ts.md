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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "name": "m",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 104,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "key": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 75,
                                  "name": "m",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 78,
                                  "end": 79,
                                  "name": "i",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "kind": "init",
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
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "key": {
                                  "type": "Identifier",
                                  "start": 87,
                                  "end": 88,
                                  "name": "m",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "BinaryExpression",
                                  "start": 91,
                                  "end": 96,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 91,
                                    "end": 92,
                                    "name": "i",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
