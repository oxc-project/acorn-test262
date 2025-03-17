__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 16,
                "end": 40,
                "id": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 20,
                  "end": 40,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                            "name": "window",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
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
