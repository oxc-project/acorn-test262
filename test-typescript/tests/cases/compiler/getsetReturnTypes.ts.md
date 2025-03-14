__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 74,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 74,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 34,
            "end": 71,
            "argument": {
              "type": "ObjectExpression",
              "start": 41,
              "end": 71,
              "properties": [
                {
                  "type": "Property",
                  "start": 46,
                  "end": 67,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 51,
                    "end": 67,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 54,
                      "end": 67,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 56,
                          "end": 65,
                          "argument": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 64,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "makePoint",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 28,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 28,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            }
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 74,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 85,
            "end": 99,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 85,
              "end": 97,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 95,
                  "end": 96,
                  "raw": "2",
                  "value": 2
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 85,
                "end": 94,
                "decorators": [],
                "name": "makePoint",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 114,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 108,
                "end": 114
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 117,
            "end": 131,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 117,
              "end": 129,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 127,
                  "end": 128,
                  "raw": "2",
                  "value": 2
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 117,
                "end": 126,
                "decorators": [],
                "name": "makePoint",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "x",
              "optional": false
            }
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
