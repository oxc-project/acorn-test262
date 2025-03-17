__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "name": "promise1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 15,
            "end": 96,
            "callee": {
              "type": "MemberExpression",
              "start": 15,
              "end": 81,
              "object": {
                "type": "NewExpression",
                "start": 15,
                "end": 56,
                "callee": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 26,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "FunctionExpression",
                    "start": 27,
                    "end": 55,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 36,
                        "end": 43,
                        "name": "resolve",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 45,
                        "end": 51,
                        "name": "reject",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 53,
                      "end": 55,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 81,
                "name": "finally",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 82,
                "end": 95,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 93,
                  "end": 95,
                  "body": []
                },
                "declare": false,
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
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
