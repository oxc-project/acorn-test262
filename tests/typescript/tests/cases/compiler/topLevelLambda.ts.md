__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 20
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 30,
                            "end": 34
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "window",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 35,
                            "end": 41
                          },
                          "optional": false,
                          "computed": false,
                          "start": 30,
                          "end": 41
                        },
                        "directive": null,
                        "start": 30,
                        "end": 42
                      }
                    ],
                    "start": 29,
                    "end": 43
                  },
                  "id": null,
                  "generator": false,
                  "start": 23,
                  "end": 43
                },
                "definite": false,
                "start": 19,
                "end": 43
              }
            ],
            "declare": false,
            "start": 15,
            "end": 43
          }
        ],
        "start": 12,
        "end": 45
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
