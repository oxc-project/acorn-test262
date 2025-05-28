__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 11,
                "end": 28,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 12,
                    "end": 18
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 20,
                    "end": 27
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 31,
            "end": 41,
            "elements": [
              {
                "type": "Literal",
                "start": 32,
                "end": 34,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 36,
                "end": 40,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 43,
      "end": 74,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 48,
        "end": 53,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "decorators": [],
        "name": "tuple",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 74,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 70,
            "end": 72,
            "expression": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
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
