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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 44,
            "name": "tuple",
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
            },
            "decorators": [],
            "optional": false
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
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 52,
                "end": 56,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 59,
      "end": 90,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 69,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "v",
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
      "right": {
        "type": "Identifier",
        "start": 73,
        "end": 78,
        "name": "tuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 90,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 88,
            "expression": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
