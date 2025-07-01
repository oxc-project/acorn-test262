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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
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
                  "name": "func1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 22
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
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 23,
                        "end": 24
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 27,
                        "end": 29
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 23,
                      "end": 29
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 34,
                        "end": 38
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 31,
                      "end": 38
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 40,
                    "end": 43
                  },
                  "expression": false,
                  "start": 22,
                  "end": 43
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 43
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 54
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
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 56
                      },
                      "right": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 59,
                        "end": 66
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 66
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 68,
                    "end": 71
                  },
                  "expression": false,
                  "start": 54,
                  "end": 71
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 49,
                "end": 71
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 82
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
                          "type": "TSStringKeyword",
                          "start": 86,
                          "end": 92
                        },
                        "start": 84,
                        "end": 92
                      },
                      "start": 83,
                      "end": 92
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 97,
                          "end": 103
                        },
                        "start": 95,
                        "end": 103
                      },
                      "start": 94,
                      "end": 103
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 106
                      },
                      "right": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 109,
                        "end": 116
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 116
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 118,
                    "end": 121
                  },
                  "expression": false,
                  "start": 82,
                  "end": 121
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 77,
                "end": 121
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 132
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
                          "type": "TSStringKeyword",
                          "start": 136,
                          "end": 142
                        },
                        "start": 134,
                        "end": 142
                      },
                      "start": 133,
                      "end": 142
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 147,
                          "end": 153
                        },
                        "start": 145,
                        "end": 153
                      },
                      "start": 144,
                      "end": 153
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 155,
                        "end": 156
                      },
                      "right": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 159,
                        "end": 166
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 166
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 175
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 168,
                      "end": 175
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 177,
                    "end": 180
                  },
                  "expression": false,
                  "start": 132,
                  "end": 180
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 127,
                "end": 180
              }
            ],
            "start": 11,
            "end": 183
          },
          "definite": false,
          "start": 4,
          "end": 183
        }
      ],
      "declare": false,
      "start": 0,
      "end": 183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 183
}
```
