__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 21,
            "end": 201,
            "properties": [
              {
                "type": "Property",
                "start": 25,
                "end": 30,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 28,
                  "end": 30,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 34,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 37,
                  "end": 40,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 38,
                      "end": 39,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 44,
                "end": 94,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 47,
                  "decorators": [],
                  "name": "fun",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 49,
                  "end": 94,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 60,
                    "end": 94,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 66,
                        "end": 76,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 66,
                          "end": 76,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 66,
                            "end": 72,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 66,
                              "end": 70
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 72,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 75,
                            "end": 76,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 81,
                        "end": 85,
                        "directive": null,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 81,
                          "end": 85
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
                "start": 98,
                "end": 143,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 100,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 102,
                  "end": 143,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 113,
                    "end": 143,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 119,
                        "end": 125,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 119,
                          "end": 125,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 119,
                            "end": 123
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 125,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 130,
                        "end": 134,
                        "directive": null,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
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
                "start": 147,
                "end": 198,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 149,
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 152,
                  "end": 197,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 163,
                    "end": 197,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 169,
                        "end": 179,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 169,
                          "end": 179,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 169,
                            "end": 175,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 169,
                              "end": 173
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 175,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 178,
                            "end": 179,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 184,
                        "end": 188,
                        "directive": null,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 184,
                          "end": 188
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
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
