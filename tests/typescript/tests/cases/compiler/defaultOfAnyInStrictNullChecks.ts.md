__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 42
      },
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 55,
              "end": 62
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "body": {
                "type": "BlockStatement",
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 91,
                          "end": 92
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 96
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 104
                          },
                          "optional": false,
                          "computed": false,
                          "start": 95,
                          "end": 104
                        },
                        "definite": false,
                        "start": 91,
                        "end": 104
                      }
                    ],
                    "declare": false,
                    "start": 87,
                    "end": 105
                  }
                ],
                "start": 77,
                "end": 112
              },
              "start": 67,
              "end": 112
            },
            "finalizer": null,
            "start": 51,
            "end": 112
          }
        ],
        "start": 45,
        "end": 114
      },
      "expression": false,
      "start": 30,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 114
}
```
