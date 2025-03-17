__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 20,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "name": "myMod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "name": "myFn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 53,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
              "name": "myFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 69,
              "end": 73,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
