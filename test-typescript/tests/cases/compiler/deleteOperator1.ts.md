__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 21,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 21,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 14,
                "end": 21
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "start": 24,
            "end": 32,
            "argument": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 44,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "start": 47,
            "end": 55,
            "argument": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 70,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "start": 73,
            "end": 81,
            "argument": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
