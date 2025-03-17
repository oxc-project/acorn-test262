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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "name": "makePoint",
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
          "start": 24,
          "end": 33,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 33,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 62,
                    "end": 64,
                    "value": 10,
                    "raw": "10"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 74,
                  "end": 106,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 79,
                    "end": 106,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 89,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 81,
                          "end": 89,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 83,
                            "end": 89
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 91,
                      "end": 106,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 93,
                          "end": 104,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 93,
                            "end": 103,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 93,
                              "end": 99,
                              "object": {
                                "type": "ThisExpression",
                                "start": 93,
                                "end": 97
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 98,
                                "end": 99,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 102,
                              "end": 103,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "set",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 131,
            "name": "point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 134,
            "end": 146,
            "callee": {
              "type": "Identifier",
              "start": 134,
              "end": 143,
              "name": "makePoint",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 144,
                "end": 145,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 148,
          "end": 160,
          "object": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "name": "point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 163,
          "end": 165,
          "value": 30,
          "raw": "30"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
