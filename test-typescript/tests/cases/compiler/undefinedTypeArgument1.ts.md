__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "cats",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 11,
            "end": 28,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 20,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 20,
              "end": 26,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 21,
                  "end": 25,
                  "typeName": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 25,
                    "decorators": [],
                    "name": "WAWA",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
