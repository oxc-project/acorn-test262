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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
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
    {
      "type": "VariableDeclaration",
      "start": 7,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 21,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 21,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 14,
                "end": 21
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 24,
            "end": 32,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 44,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 47,
            "end": 55,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 70,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 73,
            "end": 81,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
