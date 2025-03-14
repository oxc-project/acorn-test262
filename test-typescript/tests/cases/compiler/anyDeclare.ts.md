anyDeclare.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 20,
      "end": 75,
      "body": {
        "type": "TSModuleBlock",
        "start": 33,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 48,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 47,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "myFn",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 53,
            "end": 73,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 69,
              "end": 73,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
              "decorators": [],
              "name": "myFn",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "decorators": [],
        "name": "myMod",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
