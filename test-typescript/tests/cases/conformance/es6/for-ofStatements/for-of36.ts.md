__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 44,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 27,
                "end": 44,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 36,
                    "end": 43
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 47,
            "end": 57,
            "elements": [
              {
                "type": "Literal",
                "start": 48,
                "end": 50,
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 52,
                "end": 56,
                "raw": "true",
                "value": true
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 59,
      "end": 90,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 90,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 88,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 69,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 69,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 73,
        "end": 78,
        "decorators": [],
        "name": "tuple",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
