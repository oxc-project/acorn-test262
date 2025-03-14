__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 32,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 32,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 51,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 76,
      "expression": {
        "type": "ConditionalExpression",
        "start": 54,
        "end": 75,
        "alternate": {
          "type": "AssignmentExpression",
          "start": 70,
          "end": 75,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "raw": "3",
            "value": 3
          }
        },
        "consequent": {
          "type": "AssignmentExpression",
          "start": 61,
          "end": 67,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 65,
            "end": 67,
            "raw": "\"\"",
            "value": ""
          }
        },
        "test": {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "cond",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 79,
      "expression": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
