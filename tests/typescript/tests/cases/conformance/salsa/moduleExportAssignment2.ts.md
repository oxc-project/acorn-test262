__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 46,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "npm",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 10,
            "end": 46,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 10,
              "end": 24,
              "object": {
                "type": "Identifier",
                "start": 10,
                "end": 16,
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 24,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 46,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "tree",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 46,
                "body": []
              },
              "expression": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 176,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 77,
          "object": {
            "type": "MemberExpression",
            "start": 47,
            "end": 61,
            "object": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 61,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 62,
            "end": 77,
            "decorators": [],
            "name": "asReadInstalled",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 80,
          "end": 176,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "decorators": [],
              "name": "tree",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 96,
            "end": 176,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 102,
                "end": 111,
                "expression": {
                  "type": "CallExpression",
                  "start": 102,
                  "end": 111,
                  "callee": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 105,
                    "decorators": [],
                    "name": "npm",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 106,
                      "end": 110,
                      "decorators": [],
                      "name": "tree",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 154,
                "end": 174,
                "expression": {
                  "type": "CallExpression",
                  "start": 154,
                  "end": 174,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 154,
                    "end": 168,
                    "object": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 160,
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 168,
                      "decorators": [],
                      "name": "exports",
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
                      "start": 169,
                      "end": 173,
                      "decorators": [],
                      "name": "tree",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
