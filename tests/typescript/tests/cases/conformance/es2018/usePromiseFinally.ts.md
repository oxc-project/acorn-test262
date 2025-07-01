__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "promise1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 12
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 26
                },
                "typeArguments": null,
                "arguments": [
                  {
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
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 36,
                        "end": 43
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 45,
                        "end": 51
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 53,
                      "end": 55
                    },
                    "expression": false,
                    "start": 27,
                    "end": 55
                  }
                ],
                "start": 15,
                "end": 56
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "finally",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 81
              },
              "optional": false,
              "computed": false,
              "start": 15,
              "end": 81
            },
            "typeArguments": null,
            "arguments": [
              {
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
                  "start": 93,
                  "end": 95
                },
                "expression": false,
                "start": 82,
                "end": 95
              }
            ],
            "optional": false,
            "start": 15,
            "end": 96
          },
          "definite": false,
          "start": 4,
          "end": 96
        }
      ],
      "declare": false,
      "start": 0,
      "end": 97
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
