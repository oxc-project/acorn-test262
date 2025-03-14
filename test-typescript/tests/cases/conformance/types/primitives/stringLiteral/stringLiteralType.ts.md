__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 11,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7,
                "end": 11,
                "literal": {
                  "type": "Literal",
                  "start": 7,
                  "end": 11,
                  "raw": "'hi'",
                  "value": "hi"
                }
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
      "type": "TSDeclareFunction",
      "start": 14,
      "end": 34,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 32,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 32,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 28,
              "end": 32,
              "literal": {
                "type": "Literal",
                "start": 28,
                "end": 32,
                "raw": "'hi'",
                "value": "hi"
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 35,
      "end": 57,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 55,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 47,
            "end": 55,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 49,
              "end": 55
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 58,
      "end": 80,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 80,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 69,
          "end": 75,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 75,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 72,
              "end": 75
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
