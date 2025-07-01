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
            "name": "npm",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 24
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 24
            },
            "right": {
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
                  "name": "tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 41
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 43,
                "end": 46
              },
              "expression": false,
              "start": 27,
              "end": 46
            },
            "start": 10,
            "end": 46
          },
          "definite": false,
          "start": 4,
          "end": 46
        }
      ],
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 61
            },
            "optional": false,
            "computed": false,
            "start": 47,
            "end": 61
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "asReadInstalled",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 77
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 77
        },
        "right": {
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
              "name": "tree",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 94
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "npm",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 105
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tree",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 110
                    }
                  ],
                  "optional": false,
                  "start": 102,
                  "end": 111
                },
                "directive": null,
                "start": 102,
                "end": 111
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 160
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 168
                    },
                    "optional": false,
                    "computed": false,
                    "start": 154,
                    "end": 168
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tree",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 173
                    }
                  ],
                  "optional": false,
                  "start": 154,
                  "end": 174
                },
                "directive": null,
                "start": 154,
                "end": 174
              }
            ],
            "start": 96,
            "end": 176
          },
          "expression": false,
          "start": 80,
          "end": 176
        },
        "start": 47,
        "end": 176
      },
      "directive": null,
      "start": 47,
      "end": 176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
