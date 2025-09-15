__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myMod",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 35
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 50
                },
                "init": null,
                "definite": false,
                "start": 46,
                "end": 50
              }
            ],
            "declare": false,
            "start": 42,
            "end": 51
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "myFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 69
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 72,
              "end": 76
            },
            "expression": false,
            "start": 56,
            "end": 76
          }
        ],
        "start": 36,
        "end": 78
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 20,
      "end": 78
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
