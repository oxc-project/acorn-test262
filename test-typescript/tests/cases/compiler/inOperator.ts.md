__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 8,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 6,
            "end": 8,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 11,
      "end": 30,
      "left": {
        "type": "VariableDeclaration",
        "start": 16,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 20,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "x",
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
        "start": 25,
        "end": 26,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 30,
        "body": []
      }
    },
    {
      "type": "IfStatement",
      "start": 32,
      "end": 46,
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 42,
        "left": {
          "type": "Literal",
          "start": 36,
          "end": 37,
          "value": 3,
          "raw": "3"
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 44,
        "end": 46,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 56,
            "end": 63,
            "left": {
              "type": "Literal",
              "start": 56,
              "end": 58,
              "value": "",
              "raw": "''"
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "start": 62,
              "end": 63,
              "value": 0,
              "raw": "0"
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
      "start": 66,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 76,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 76,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 73,
                "end": 76
              }
            },
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
      "start": 78,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
              }
            },
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
      "type": "IfStatement",
      "start": 93,
      "end": 108,
      "test": {
        "type": "BinaryExpression",
        "start": 97,
        "end": 103,
        "left": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 105,
        "end": 108,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
