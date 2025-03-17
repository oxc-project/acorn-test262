__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 199,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 24,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 27,
            "end": 199,
            "properties": [
              {
                "type": "Property",
                "start": 33,
                "end": 59,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 38,
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
                  "start": 38,
                  "end": 59,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 56,
                    "end": 59,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 39,
                      "end": 45,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 40,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 43,
                        "end": 45,
                        "raw": "10",
                        "value": 10
                      },
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 47,
                      "end": 54,
                      "argument": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 54,
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
                "start": 65,
                "end": 87,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
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
                  "start": 70,
                  "end": 87,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 84,
                    "end": 87,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 71,
                      "end": 82,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 75,
                        "end": 82,
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
                "start": 93,
                "end": 137,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 98,
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
                  "start": 98,
                  "end": 137,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 134,
                    "end": 137,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 108,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 100,
                        "end": 108,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 102,
                          "end": 108
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 110,
                      "end": 119,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 119,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 113,
                          "end": 119
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 121,
                      "end": 132,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 125,
                        "end": 132,
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
                "start": 143,
                "end": 196,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 148,
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
                  "start": 148,
                  "end": 196,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 193,
                    "end": 196,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 149,
                      "end": 158,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 150,
                        "end": 158,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 152,
                          "end": 158
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 160,
                      "end": 169,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 161,
                        "end": 169,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 163,
                          "end": 169
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 171,
                      "end": 182,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 175,
                        "end": 182,
                        "raw": "\"hello\"",
                        "value": "hello"
                      },
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 184,
                      "end": 191,
                      "argument": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 191,
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
