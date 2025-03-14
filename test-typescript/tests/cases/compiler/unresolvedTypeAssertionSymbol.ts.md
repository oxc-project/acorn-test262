unresolvedTypeAssertionSymbol.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 19,
            "end": 26,
            "expression": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 20,
              "end": 24,
              "typeName": {
                "type": "Identifier",
                "start": 20,
                "end": 24,
                "decorators": [],
                "name": "asdf",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
