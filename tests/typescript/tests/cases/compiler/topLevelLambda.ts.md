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
        "start": 7,
        "end": 8
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
                  "start": 16,
                  "end": 17
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
                            "start": 27,
                            "end": 31
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "window",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 32,
                            "end": 38
                          },
                          "optional": false,
                          "computed": false,
                          "start": 27,
                          "end": 38
                        },
                        "directive": null,
                        "start": 27,
                        "end": 39
                      }
                    ],
                    "start": 26,
                    "end": 40
                  },
                  "id": null,
                  "generator": false,
                  "start": 20,
                  "end": 40
                },
                "definite": false,
                "start": 16,
                "end": 40
              }
            ],
            "declare": false,
            "start": 12,
            "end": 40
          }
        ],
        "start": 9,
        "end": 42
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
