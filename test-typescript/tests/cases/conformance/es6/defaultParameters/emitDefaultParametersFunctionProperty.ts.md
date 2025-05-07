__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 183,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 43,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 22,
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
                  "start": 22,
                  "end": 43,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 40,
                    "end": 43,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 23,
                      "end": 29,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 23,
                        "end": 24,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 27,
                        "end": 29,
                        "raw": "10",
                        "value": 10,
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 31,
                      "end": 38,
                      "argument": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 38,
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
                "start": 49,
                "end": 71,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 54,
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
                  "start": 54,
                  "end": 71,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 68,
                    "end": 71,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 55,
                      "end": 66,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 59,
                        "end": 66,
                        "raw": "\"hello\"",
                        "value": "hello",
                        "regex": null,
                        "bigint": null
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
                "start": 77,
                "end": 121,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 82,
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
                  "start": 82,
                  "end": 121,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 118,
                    "end": 121,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 83,
                      "end": 92,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 84,
                        "end": 92,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 86,
                          "end": 92
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 94,
                      "end": 103,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 95,
                        "end": 103,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 97,
                          "end": 103
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 105,
                      "end": 116,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 109,
                        "end": 116,
                        "raw": "\"hello\"",
                        "value": "hello",
                        "regex": null,
                        "bigint": null
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
                "start": 127,
                "end": 180,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 132,
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
                  "start": 132,
                  "end": 180,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 177,
                    "end": 180,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 133,
                      "end": 142,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 134,
                        "end": 142,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 136,
                          "end": 142
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 144,
                      "end": 153,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 145,
                        "end": 153,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 147,
                          "end": 153
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 155,
                      "end": 166,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 159,
                        "end": 166,
                        "raw": "\"hello\"",
                        "value": "hello",
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 168,
                      "end": 175,
                      "argument": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 175,
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
