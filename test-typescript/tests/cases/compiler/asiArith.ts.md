__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 21,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 33,
            "end": 46,
            "left": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "UnaryExpression",
              "start": 39,
              "end": 46,
              "operator": "+",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 42,
                "end": 46,
                "operator": "+",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
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
      "start": 49,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 58,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 69,
            "end": 70,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 82,
            "end": 95,
            "left": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "-",
            "right": {
              "type": "UnaryExpression",
              "start": 88,
              "end": 95,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 91,
                "end": 95,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
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
