__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 16,
      "end": 83,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 32,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
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
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 40,
            "end": 41,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 83,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 53,
            "end": 81,
            "expression": {
              "type": "CallExpression",
              "start": 53,
              "end": 80,
              "callee": {
                "type": "MemberExpression",
                "start": 53,
                "end": 61,
                "object": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 56,
                  "decorators": [],
                  "name": "fns",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 61,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 62,
                  "end": 79,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 69,
                    "end": 78,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 71,
                        "end": 76,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 76,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 76,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 119,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 118,
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
            "callee": {
              "type": "MemberExpression",
              "start": 99,
              "end": 106,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "decorators": [],
                "name": "fns",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 107,
                "end": 117,
                "expression": true,
                "async": false,
                "typeParameters": null,
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
                "body": {
                  "type": "CallExpression",
                  "start": 113,
                  "end": 117,
                  "callee": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 115,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 139,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 139,
        "callee": {
          "type": "MemberExpression",
          "start": 120,
          "end": 131,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 127,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
