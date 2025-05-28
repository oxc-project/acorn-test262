__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 81,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 51,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 50,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "cats",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 33,
                  "end": 50,
                  "callee": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 42,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "decorators": [],
                          "name": "WAWA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
