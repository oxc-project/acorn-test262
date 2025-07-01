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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cats",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 30
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 42
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WAWA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 43,
                          "end": 47
                        },
                        "typeArguments": null,
                        "start": 43,
                        "end": 47
                      }
                    ],
                    "start": 42,
                    "end": 48
                  },
                  "arguments": [],
                  "start": 33,
                  "end": 50
                },
                "definite": false,
                "start": 26,
                "end": 50
              }
            ],
            "declare": false,
            "start": 22,
            "end": 51
          }
        ],
        "start": 16,
        "end": 81
      },
      "expression": false,
      "start": 0,
      "end": 81
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
