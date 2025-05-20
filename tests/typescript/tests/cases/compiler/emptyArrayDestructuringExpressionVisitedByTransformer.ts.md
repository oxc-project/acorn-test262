__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 8,
            "end": 28,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 8,
              "end": 10,
              "decorators": [],
              "elements": [],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "CallExpression",
              "start": 13,
              "end": 28,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 21,
                  "end": 27,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 21,
                      "end": 22,
                      "decorators": [],
                      "name": "_",
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
                "start": 13,
                "end": 20,
                "computed": false,
                "object": {
                  "type": "ArrayExpression",
                  "start": 13,
                  "end": 16,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 14,
                      "end": 15,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 20,
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
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 38,
            "end": 53,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 46,
                "end": 52,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "_",
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
              "start": 38,
              "end": 45,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 38,
                "end": 41,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 39,
                    "end": 40,
                    "raw": "1",
                    "value": 1
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
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
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
