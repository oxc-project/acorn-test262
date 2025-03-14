letKeepNamesOfTopLevelItems.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 7,
      "end": 36,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 36,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 34,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 33,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 38,
      "end": 61,
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 61,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 53,
            "end": 59,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 57,
                "end": 58,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
