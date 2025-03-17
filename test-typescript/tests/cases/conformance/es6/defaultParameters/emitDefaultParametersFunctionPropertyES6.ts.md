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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 24,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 38,
                  "name": "func1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 38,
                  "end": 59,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 39,
                      "end": 45,
                      "left": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 40,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 43,
                        "end": 45,
                        "value": 10,
                        "raw": "10"
                      },
                      "decorators": [],
                      "optional": false,
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
                        "name": "rest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 56,
                    "end": 59,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 65,
                "end": 87,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "name": "func2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 70,
                  "end": 87,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 71,
                      "end": 82,
                      "left": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 75,
                        "end": 82,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 84,
                    "end": 87,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 93,
                "end": 137,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 98,
                  "name": "func3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 98,
                  "end": 137,
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
                          "type": "TSStringKeyword",
                          "start": 102,
                          "end": 108
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 110,
                      "end": 119,
                      "name": "z",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 119,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 113,
                          "end": 119
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 121,
                      "end": 132,
                      "left": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 125,
                        "end": 132,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 134,
                    "end": 137,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 143,
                "end": 196,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 148,
                  "name": "func4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 148,
                  "end": 196,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 149,
                      "end": 158,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 150,
                        "end": 158,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 152,
                          "end": 158
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 160,
                      "end": 169,
                      "name": "z",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 161,
                        "end": 169,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 163,
                          "end": 169
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 171,
                      "end": 182,
                      "left": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 175,
                        "end": 182,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "decorators": [],
                      "optional": false,
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
                        "name": "rest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 193,
                    "end": 196,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
