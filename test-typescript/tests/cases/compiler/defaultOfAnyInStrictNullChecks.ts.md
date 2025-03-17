__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 115,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 114,
        "body": [
          {
            "type": "TryStatement",
            "start": 51,
            "end": 112,
            "block": {
              "type": "BlockStatement",
              "start": 55,
              "end": 62,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 67,
              "end": 112,
              "param": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 112,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 105,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 91,
                        "end": 104,
                        "id": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 95,
                          "end": 104,
                          "object": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "name": "e",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 104,
                            "name": "message",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
