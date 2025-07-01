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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 11,
                "end": 28
              },
              "start": 9,
              "end": 28
            },
            "start": 4,
            "end": 28
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 32,
                "end": 34
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 36,
                "end": 40
              }
            ],
            "start": 31,
            "end": 41
          },
          "definite": false,
          "start": 4,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "init": null,
            "definite": false,
            "start": 52,
            "end": 53
          }
        ],
        "declare": false,
        "start": 48,
        "end": 53
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "tuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 62
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "directive": null,
            "start": 70,
            "end": 72
          }
        ],
        "start": 64,
        "end": 74
      },
      "start": 43,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
