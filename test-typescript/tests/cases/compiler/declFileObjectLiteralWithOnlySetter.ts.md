__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 115,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 115,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 42,
            "end": 113,
            "argument": {
              "type": "ObjectExpression",
              "start": 49,
              "end": 112,
              "properties": [
                {
                  "type": "Property",
                  "start": 59,
                  "end": 64,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 62,
                    "end": 64,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "Property",
                  "start": 74,
                  "end": 106,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 79,
                    "end": 106,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 91,
                      "end": 106,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 93,
                          "end": 104,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 93,
                            "end": 103,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 93,
                              "end": 99,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 93,
                                "end": 97
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 98,
                                "end": 99,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 102,
                              "end": 103,
                              "decorators": [],
                              "name": "a",
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
                        "start": 80,
                        "end": 89,
                        "decorators": [],
                        "name": "a",
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
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "makePoint",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 33,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 115,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 131,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 134,
            "end": 146,
            "arguments": [
              {
                "type": "Literal",
                "start": 144,
                "end": 145,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 134,
              "end": 143,
              "decorators": [],
              "name": "makePoint",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 148,
          "end": 160,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 163,
          "end": 165,
          "raw": "30",
          "value": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
