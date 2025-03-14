functionDeclarationWithResolutionOfTypeNamedArguments01.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 68,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 24,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 24,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 20,
        "decorators": [],
        "name": "arguments",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 68,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 68,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 66,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 45,
              "end": 65,
              "expression": {
                "type": "Identifier",
                "start": 56,
                "end": 65,
                "decorators": [],
                "name": "arguments",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "decorators": [],
                  "name": "arguments",
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
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
