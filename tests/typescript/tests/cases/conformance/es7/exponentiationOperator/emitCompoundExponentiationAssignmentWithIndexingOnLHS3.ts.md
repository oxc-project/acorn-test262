__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 209,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 13,
            "end": 123,
            "properties": [
              {
                "type": "Property",
                "start": 19,
                "end": 24,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 21,
                  "decorators": [],
                  "name": "_0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 23,
                  "end": 24,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 30,
                "end": 69,
                "kind": "get",
                "key": {
                  "type": "Literal",
                  "start": 34,
                  "end": 35,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 35,
                  "end": 69,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 38,
                    "end": 69,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 48,
                        "end": 63,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 55,
                          "end": 62,
                          "object": {
                            "type": "ThisExpression",
                            "start": 55,
                            "end": 59
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 62,
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                "start": 75,
                "end": 120,
                "kind": "set",
                "key": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 80,
                  "end": 120,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 81,
                      "end": 90,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 82,
                        "end": 90,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 84,
                          "end": 90
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 92,
                    "end": 120,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 102,
                        "end": 114,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 102,
                          "end": 113,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 102,
                            "end": 109,
                            "object": {
                              "type": "ThisExpression",
                              "start": 102,
                              "end": 106
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 107,
                              "end": 109,
                              "decorators": [],
                              "name": "_0",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
                            "decorators": [],
                            "name": "x",
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 124,
        "end": 147,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 124,
          "end": 133,
          "object": {
            "type": "Identifier",
            "start": 124,
            "end": 130,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 131,
            "end": 132,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "MemberExpression",
          "start": 138,
          "end": 147,
          "object": {
            "type": "Identifier",
            "start": 138,
            "end": 144,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 145,
            "end": 146,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 179,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 178,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 149,
          "end": 158,
          "object": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 156,
            "end": 157,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 163,
          "end": 178,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 163,
            "end": 172,
            "object": {
              "type": "Identifier",
              "start": 163,
              "end": 169,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 170,
              "end": 171,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "right": {
            "type": "Literal",
            "start": 177,
            "end": 178,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 180,
        "end": 208,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 180,
          "end": 189,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 186,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 194,
          "end": 208,
          "left": {
            "type": "MemberExpression",
            "start": 194,
            "end": 203,
            "object": {
              "type": "Identifier",
              "start": 194,
              "end": 200,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 201,
              "end": 202,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 207,
            "end": 208,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
