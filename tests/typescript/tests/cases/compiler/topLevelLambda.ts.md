__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 42,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 12,
            "end": 40,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 16,
                "end": 40,
                "id": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 20,
                  "end": 40,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 26,
                    "end": 40,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 27,
                        "end": 39,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 27,
                          "end": 38,
                          "object": {
                            "type": "ThisExpression",
                            "start": 27,
                            "end": 31
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 38,
                            "decorators": [],
                            "name": "window",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
