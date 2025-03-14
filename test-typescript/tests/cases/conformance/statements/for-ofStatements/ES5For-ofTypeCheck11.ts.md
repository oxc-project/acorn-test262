ES5For-ofTypeCheck11.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 43,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
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
      "start": 45,
      "end": 65,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 65,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "v",
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "union",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
