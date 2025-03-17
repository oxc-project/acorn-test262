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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "fns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
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
                  "name": "fns",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 61,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 62,
                  "end": 79,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "ObjectExpression",
                    "start": 69,
                    "end": 78,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 71,
                        "end": 76,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 76,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 76,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "fns",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 107,
                "end": 117,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 107,
                    "end": 109,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 113,
                  "end": 117,
                  "callee": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 115,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 132,
            "end": 138,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
