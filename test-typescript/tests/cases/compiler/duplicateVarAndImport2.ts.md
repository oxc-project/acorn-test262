duplicateVarAndImport2.ts
```json
{
  "type": "Program",
  "start": 38,
  "end": 89,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 75,
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 75,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 73,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 63,
              "end": 73,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 67,
                  "end": 72,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 71,
                    "end": 72,
                    "raw": "1",
                    "value": 1
                  }
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
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 76,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "M",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
