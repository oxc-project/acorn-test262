__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "test",
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
        "start": 16,
        "end": 81,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 51,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 50,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "name": "cats",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 33,
                  "end": 50,
                  "callee": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 42,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 42,
                    "end": 48,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 43,
                        "end": 47,
                        "typeName": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 47,
                          "name": "WAWA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
