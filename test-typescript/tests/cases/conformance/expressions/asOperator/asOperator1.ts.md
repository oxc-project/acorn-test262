__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 9,
            "end": 11,
            "value": 43,
            "raw": "43"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 21,
            "end": 40,
            "expression": {
              "type": "Identifier",
              "start": 21,
              "end": 30,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 34,
              "end": 40
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
      "start": 42,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 50,
            "end": 73,
            "object": {
              "type": "TSAsExpression",
              "start": 51,
              "end": 65,
              "expression": {
                "type": "Literal",
                "start": 51,
                "end": 55,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            },
            "property": {
              "type": "Identifier",
              "start": 67,
              "end": 73,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 83,
            "end": 104,
            "expression": {
              "type": "TSAsExpression",
              "start": 83,
              "end": 94,
              "expression": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              }
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 98,
              "end": 104
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
      "start": 190,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 198,
            "end": 217,
            "expression": {
              "type": "Literal",
              "start": 198,
              "end": 200,
              "value": 32,
              "raw": "32"
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 204,
              "end": 217,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 204,
                  "end": 210
                },
                {
                  "type": "TSStringKeyword",
                  "start": 211,
                  "end": 217
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 226,
      "expression": {
        "type": "AssignmentExpression",
        "start": 219,
        "end": 225,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "name": "j",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 223,
          "end": 225,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
