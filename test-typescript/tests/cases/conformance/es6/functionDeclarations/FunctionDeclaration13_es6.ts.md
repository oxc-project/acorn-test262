__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 83,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 83,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 68,
            "end": 81,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 72,
                "end": 80,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 80,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 75,
                      "end": 80,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 80,
                        "decorators": [],
                        "name": "yield",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
