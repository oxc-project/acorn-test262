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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "elements": [],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "CallExpression",
              "start": 13,
              "end": 28,
              "callee": {
                "type": "MemberExpression",
                "start": 13,
                "end": 20,
                "object": {
                  "type": "ArrayExpression",
                  "start": 13,
                  "end": 16,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 14,
                      "end": 15,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 20,
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
                  "start": 21,
                  "end": 27,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 21,
                      "end": 22,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 38,
            "end": 53,
            "callee": {
              "type": "MemberExpression",
              "start": 38,
              "end": 45,
              "object": {
                "type": "ArrayExpression",
                "start": 38,
                "end": 41,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 39,
                    "end": 40,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
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
                "start": 46,
                "end": 52,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
