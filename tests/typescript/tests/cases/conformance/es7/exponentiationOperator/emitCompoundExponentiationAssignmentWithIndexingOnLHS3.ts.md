__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 21
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 23,
                  "end": 24
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 19,
                "end": 24
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 34,
                  "end": 35
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 55,
                            "end": 59
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 62
                          },
                          "optional": false,
                          "computed": false,
                          "start": 55,
                          "end": 62
                        },
                        "start": 48,
                        "end": 63
                      }
                    ],
                    "start": 38,
                    "end": 69
                  },
                  "expression": false,
                  "start": 35,
                  "end": 69
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 30,
                "end": 69
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 79,
                  "end": 80
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 84,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
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
                              "start": 102,
                              "end": 106
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_0",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 107,
                              "end": 109
                            },
                            "optional": false,
                            "computed": false,
                            "start": 102,
                            "end": 109
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 112,
                            "end": 113
                          },
                          "start": 102,
                          "end": 113
                        },
                        "directive": null,
                        "start": 102,
                        "end": 114
                      }
                    ],
                    "start": 92,
                    "end": 120
                  },
                  "expression": false,
                  "start": 80,
                  "end": 120
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 75,
                "end": 120
              }
            ],
            "start": 13,
            "end": 123
          },
          "definite": false,
          "start": 4,
          "end": 123
        }
      ],
      "declare": false,
      "start": 0,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 130
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 131,
            "end": 132
          },
          "optional": false,
          "computed": true,
          "start": 124,
          "end": 133
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 144
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 145,
            "end": 146
          },
          "optional": false,
          "computed": true,
          "start": 138,
          "end": 147
        },
        "start": 124,
        "end": 147
      },
      "directive": null,
      "start": 124,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 155
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 156,
            "end": 157
          },
          "optional": false,
          "computed": true,
          "start": 149,
          "end": 158
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 169
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 170,
              "end": 171
            },
            "optional": false,
            "computed": true,
            "start": 163,
            "end": 172
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 177,
            "end": 178
          },
          "start": 163,
          "end": 178
        },
        "start": 149,
        "end": 178
      },
      "directive": null,
      "start": 149,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 186
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 187,
            "end": 188
          },
          "optional": false,
          "computed": true,
          "start": 180,
          "end": 189
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 200
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 201,
              "end": 202
            },
            "optional": false,
            "computed": true,
            "start": 194,
            "end": 203
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 207,
            "end": 208
          },
          "start": 194,
          "end": 208
        },
        "start": 180,
        "end": 208
      },
      "directive": null,
      "start": 180,
      "end": 209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 209
}
```
