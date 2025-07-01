__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            },
            "start": 13,
            "end": 21
          },
          "start": 12,
          "end": 21
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 30,
                      "end": 31
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 33,
                      "end": 34
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 36,
                      "end": 37
                    }
                  ],
                  "start": 29,
                  "end": 38
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 42
                },
                "optional": false,
                "computed": false,
                "start": 29,
                "end": 42
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 44
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 65,
                            "end": 69
                          },
                          "consequent": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 74,
                                  "end": 75
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 78,
                                  "end": 79
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false,
                                "start": 73,
                                "end": 79
                              }
                            ],
                            "start": 71,
                            "end": 81
                          },
                          "alternate": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 87,
                                  "end": 88
                                },
                                "value": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 91,
                                    "end": 92
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 95,
                                    "end": 96
                                  },
                                  "start": 91,
                                  "end": 96
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false,
                                "start": 86,
                                "end": 96
                              }
                            ],
                            "start": 84,
                            "end": 98
                          },
                          "start": 65,
                          "end": 98
                        },
                        "start": 58,
                        "end": 98
                      }
                    ],
                    "start": 48,
                    "end": 104
                  },
                  "id": null,
                  "generator": false,
                  "start": 43,
                  "end": 104
                }
              ],
              "optional": false,
              "start": 29,
              "end": 105
            },
            "directive": null,
            "start": 29,
            "end": 105
          }
        ],
        "start": 23,
        "end": 107
      },
      "expression": false,
      "start": 0,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
