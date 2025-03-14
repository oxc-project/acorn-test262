castNewObjectBug.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 17,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "decorators": [],
            "name": "xx",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 27,
            "end": 45,
            "expression": {
              "type": "NewExpression",
              "start": 33,
              "end": 45,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 37,
                "end": 43,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 31,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 31,
                "decorators": [],
                "name": "Foo",
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
