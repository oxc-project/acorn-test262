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
                  "end": 95,
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
                    "end": 95,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "start": 105,
                  "end": 137,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 110,
                    "end": 137,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 111,
                        "end": 120,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 120,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 114,
                            "end": 120
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                              "start": 133,
                              "end": 134,
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
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 162,
            "name": "point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 165,
            "end": 177,
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 174,
              "name": "makePoint",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 175,
                "end": 176,
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
      "type": "VariableDeclaration",
      "start": 179,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 192,
            "end": 199,
            "object": {
              "type": "Identifier",
              "start": 192,
              "end": 197,
              "name": "point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
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
