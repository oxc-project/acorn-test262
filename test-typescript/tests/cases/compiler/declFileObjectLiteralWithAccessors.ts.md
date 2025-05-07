__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 146,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 146,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 42,
            "end": 144,
            "argument": {
              "type": "ObjectExpression",
              "start": 49,
              "end": 143,
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
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 74,
                  "end": 95,
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
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 79,
                    "end": 95,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 82,
                      "end": 95,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 84,
                          "end": 93,
                          "argument": {
                            "type": "Identifier",
                            "start": 91,
                            "end": 92,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
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
                  "start": 105,
                  "end": 137,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
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
                    "start": 110,
                    "end": 137,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 122,
                      "end": 137,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 124,
                          "end": 135,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 124,
                            "end": 134,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 124,
                              "end": 130,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 124,
                                "end": 128
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 129,
                                "end": 130,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 134,
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
                        "start": 111,
                        "end": 120,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 120,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 114,
                            "end": 120
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
      "start": 146,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 162,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 165,
            "end": 177,
            "arguments": [
              {
                "type": "Literal",
                "start": 175,
                "end": 176,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 174,
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
      "type": "VariableDeclaration",
      "start": 179,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 192,
            "end": 199,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 192,
              "end": 197,
              "decorators": [],
              "name": "point",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 219,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 201,
        "end": 218,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 201,
          "end": 213,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 201,
            "end": 206,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 216,
          "end": 218,
          "raw": "30",
          "value": 30,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
