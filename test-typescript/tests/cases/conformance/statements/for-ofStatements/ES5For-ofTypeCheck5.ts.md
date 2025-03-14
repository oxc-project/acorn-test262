ES5For-ofTypeCheck5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
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
                      "type": "TSNumberKeyword",
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
      "end": 54,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 54,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 40,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 44,
        "end": 49,
        "decorators": [],
        "name": "union",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
