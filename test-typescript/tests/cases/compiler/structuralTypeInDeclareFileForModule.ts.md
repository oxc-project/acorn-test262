structuralTypeInDeclareFileForModule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 26,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 26,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 24,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 18,
              "end": 24,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 22,
                  "end": 23,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "M",
            "optional": false
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
