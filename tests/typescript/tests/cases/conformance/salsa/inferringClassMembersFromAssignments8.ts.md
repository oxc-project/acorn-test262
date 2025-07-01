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
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 62
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 91
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 94,
                        "end": 98
                      },
                      "definite": false,
                      "start": 86,
                      "end": 98
                    }
                  ],
                  "declare": false,
                  "start": 82,
                  "end": 99
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 104,
                        "end": 109
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "swap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 114
                      },
                      "optional": false,
                      "computed": false,
                      "start": 104,
                      "end": 114
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 128,
                        "end": 131
                      },
                      "expression": false,
                      "start": 117,
                      "end": 131
                    },
                    "start": 104,
                    "end": 131
                  },
                  "directive": null,
                  "start": 104,
                  "end": 131
                }
              ],
              "start": 76,
              "end": 133
            },
            "expression": false,
            "start": 65,
            "end": 133
          },
          "definite": false,
          "start": 59,
          "end": 133
        }
      ],
      "declare": false,
      "start": 55,
      "end": 133
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 139
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 149
            },
            "typeArguments": null,
            "arguments": [],
            "start": 142,
            "end": 151
          },
          "definite": false,
          "start": 138,
          "end": 151
        }
      ],
      "declare": false,
      "start": 134,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 153
      },
      "directive": null,
      "start": 152,
      "end": 153
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 55,
  "end": 153
}
```
