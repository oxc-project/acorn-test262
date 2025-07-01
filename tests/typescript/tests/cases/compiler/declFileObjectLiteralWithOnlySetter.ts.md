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
        "name": "makePoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            },
            "start": 25,
            "end": 33
          },
          "start": 24,
          "end": 33
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 62,
                    "end": 64
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 59,
                  "end": 64
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 83,
                            "end": 89
                          },
                          "start": 81,
                          "end": 89
                        },
                        "start": 80,
                        "end": 89
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 93,
                                "end": 97
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 98,
                                "end": 99
                              },
                              "optional": false,
                              "computed": false,
                              "start": 93,
                              "end": 99
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 102,
                              "end": 103
                            },
                            "start": 93,
                            "end": 103
                          },
                          "directive": null,
                          "start": 93,
                          "end": 104
                        }
                      ],
                      "start": 91,
                      "end": 106
                    },
                    "expression": false,
                    "start": 79,
                    "end": 106
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 74,
                  "end": 106
                }
              ],
              "start": 49,
              "end": 112
            },
            "start": 42,
            "end": 113
          }
        ],
        "start": 35,
        "end": 115
      },
      "expression": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "EmptyStatement",
      "start": 115,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 131
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makePoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 143
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 144,
                "end": 145
              }
            ],
            "optional": false,
            "start": 134,
            "end": 146
          },
          "definite": false,
          "start": 126,
          "end": 146
        }
      ],
      "declare": false,
      "start": 117,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "optional": false,
          "computed": false,
          "start": 148,
          "end": 160
        },
        "right": {
          "type": "Literal",
          "value": 30,
          "raw": "30",
          "start": 163,
          "end": 165
        },
        "start": 148,
        "end": 165
      },
      "directive": null,
      "start": 148,
      "end": 166
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 166
}
```
