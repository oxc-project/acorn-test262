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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "makePoint",
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 62,
                    "end": 64,
                    "value": 10,
                    "raw": "10"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 74,
                  "end": 95,
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 79,
                    "end": 95,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 105,
                  "end": 137,
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 110,
                    "end": 137,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 122,
                      "end": 137,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 124,
                          "end": 135,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 124,
                            "end": 134,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 124,
                              "end": 130,
                              "object": {
                                "type": "ThisExpression",
                                "start": 124,
                                "end": 128
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 129,
                                "end": 130,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 177,
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
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 174,
              "decorators": [],
              "name": "makePoint",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 175,
                "end": 176,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 200,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 199,
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
            "object": {
              "type": "Identifier",
              "start": 192,
              "end": 197,
              "decorators": [],
              "name": "point",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 219,
      "expression": {
        "type": "AssignmentExpression",
        "start": 201,
        "end": 218,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 201,
          "end": 213,
          "object": {
            "type": "Identifier",
            "start": 201,
            "end": 206,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 216,
          "end": 218,
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
