commentInNamespaceDeclarationWithIdentifierPathName.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 70,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 70,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 32,
            "end": 49,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 47,
              "end": 49,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 11,
        "end": 25,
        "left": {
          "type": "TSQualifiedName",
          "start": 11,
          "end": 19,
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 16,
            "decorators": [],
            "name": "hello",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "decorators": [],
            "name": "hi",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 20,
          "end": 25,
          "decorators": [],
          "name": "world",
          "optional": false
        }
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script"
}
```
