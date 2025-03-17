__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 201,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 25,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 28,
            "end": 200,
            "properties": [
              {
                "type": "Property",
                "start": 34,
                "end": 60,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 39,
                  "decorators": [],
                  "name": "func1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 39,
                  "end": 60,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 57,
                    "end": 60,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 40,
                      "end": 46,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 44,
                        "end": 46,
                        "raw": "10",
                        "value": 10
                      },
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 48,
                      "end": 55,
                      "argument": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 55,
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 66,
                "end": 88,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 71,
                  "decorators": [],
                  "name": "func2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 71,
                  "end": 88,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 85,
                    "end": 88,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 72,
                      "end": 83,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 76,
                        "end": 83,
                        "raw": "\"hello\"",
                        "value": "hello"
                      },
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 94,
                "end": 138,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 99,
                  "decorators": [],
                  "name": "func3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 99,
                  "end": 138,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 135,
                    "end": 138,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 100,
                      "end": 109,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 101,
                        "end": 109,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 103,
                          "end": 109
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 111,
                      "end": 120,
                      "decorators": [],
                      "name": "z",
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
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 122,
                      "end": 133,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 126,
                        "end": 133,
                        "raw": "\"hello\"",
                        "value": "hello"
                      },
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 144,
                "end": 197,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 149,
                  "decorators": [],
                  "name": "func4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 149,
                  "end": 197,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 194,
                    "end": 197,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 150,
                      "end": 159,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 151,
                        "end": 159,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 153,
                          "end": 159
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 161,
                      "end": 170,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 162,
                        "end": 170,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 164,
                          "end": 170
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 172,
                      "end": 183,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 176,
                        "end": 183,
                        "raw": "\"hello\"",
                        "value": "hello"
                      },
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 185,
                      "end": 192,
                      "argument": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 192,
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
