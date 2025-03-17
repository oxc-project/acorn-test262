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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "name": "makePoint",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 28,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 28,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 51,
                    "end": 67,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
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
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 85,
            "end": 99,
            "object": {
              "type": "CallExpression",
              "start": 85,
              "end": 97,
              "callee": {
                "type": "Identifier",
                "start": 85,
                "end": 94,
                "name": "makePoint",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 95,
                  "end": 96,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 114,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 108,
                "end": 114
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 117,
            "end": 131,
            "object": {
              "type": "CallExpression",
              "start": 117,
              "end": 129,
              "callee": {
                "type": "Identifier",
                "start": 117,
                "end": 126,
                "name": "makePoint",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 127,
                  "end": 128,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
