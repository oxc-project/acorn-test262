ES3For-ofTypeCheck4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 28,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 11,
                "end": 28,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 11,
                    "end": 17
                  },
                  {
                    "type": "TSArrayType",
                    "start": 20,
                    "end": 28,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 20,
                      "end": 26
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 30,
      "end": 56,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 56,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 42,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 46,
        "end": 51,
        "decorators": [],
        "name": "union",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
