nonPrimitiveIndexingWithForInNoImplicitAny.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 7,
                "end": 13
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
      "type": "ForInStatement",
      "start": 16,
      "end": 71,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 71,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 41,
            "end": 60,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 45,
                "end": 59,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 50,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 53,
                  "end": 59,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 58,
                    "decorators": [],
                    "name": "key",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "key",
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
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
