__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 44,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 16,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "f",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 44,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 44,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 42,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 37,
              "end": 41,
              "expression": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 39,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
