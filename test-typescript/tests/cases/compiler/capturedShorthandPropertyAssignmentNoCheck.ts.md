__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "fns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 14,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 16,
      "end": 83,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 83,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 53,
            "end": 81,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 53,
              "end": 80,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 62,
                  "end": 79,
                  "async": false,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 69,
                    "end": 78,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 71,
                        "end": 76,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 76,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 76,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 53,
                "end": 61,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 56,
                  "decorators": [],
                  "name": "fns",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 61,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 32,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 32,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 36,
        "end": 45,
        "elements": [
          {
            "type": "Literal",
            "start": 37,
            "end": 38,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 40,
            "end": 41,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "raw": "3",
            "value": 3
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 99,
            "end": 118,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 107,
                "end": 117,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 113,
                  "end": 117,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 115,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 107,
                    "end": 109,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 99,
              "end": 106,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "decorators": [],
                "name": "fns",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 139,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 139,
        "arguments": [
          {
            "type": "Identifier",
            "start": 132,
            "end": 138,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 120,
          "end": 131,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 127,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
