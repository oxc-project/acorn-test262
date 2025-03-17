__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 227,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 28,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 31,
            "end": 141,
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 42,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 39,
                  "name": "_0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 41,
                  "end": 42,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 48,
                "end": 87,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 52,
                  "end": 53,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 53,
                  "end": 87,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 56,
                    "end": 87,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 66,
                        "end": 81,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 73,
                          "end": 80,
                          "object": {
                            "type": "ThisExpression",
                            "start": 73,
                            "end": 77
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 78,
                            "end": 80,
                            "name": "_0",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                "start": 93,
                "end": 138,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 97,
                  "end": 98,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 98,
                  "end": 138,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 108,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 100,
                        "end": 108,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 102,
                          "end": 108
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 110,
                    "end": 138,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 120,
                        "end": 132,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 120,
                          "end": 131,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 120,
                            "end": 127,
                            "object": {
                              "type": "ThisExpression",
                              "start": 120,
                              "end": 124
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 125,
                              "end": 127,
                              "name": "_0",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "name": "x",
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 165,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 142,
          "end": 151,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 149,
            "end": 150,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 156,
          "end": 165,
          "object": {
            "type": "Identifier",
            "start": 156,
            "end": 162,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 163,
            "end": 164,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 197,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 196,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 167,
          "end": 176,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 173,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 174,
            "end": 175,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 181,
          "end": 196,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 181,
            "end": 190,
            "object": {
              "type": "Identifier",
              "start": 181,
              "end": 187,
              "name": "object",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 188,
              "end": 189,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 195,
            "end": 196,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 227,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 226,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 198,
          "end": 207,
          "object": {
            "type": "Identifier",
            "start": 198,
            "end": 204,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 205,
            "end": 206,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 212,
          "end": 226,
          "left": {
            "type": "MemberExpression",
            "start": 212,
            "end": 221,
            "object": {
              "type": "Identifier",
              "start": 212,
              "end": 218,
              "name": "object",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 219,
              "end": 220,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 225,
            "end": 226,
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
