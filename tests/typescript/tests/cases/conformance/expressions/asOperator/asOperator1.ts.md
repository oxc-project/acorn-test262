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
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "Literal",
            "value": 43,
            "raw": "43",
            "start": 9,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 34,
              "end": 40
            },
            "start": 21,
            "end": 40
          },
          "definite": false,
          "start": 17,
          "end": 40
        }
      ],
      "declare": false,
      "start": 13,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 51,
                "end": 55
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              },
              "start": 51,
              "end": 65
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 73
            },
            "optional": false,
            "computed": false,
            "start": 50,
            "end": 73
          },
          "definite": false,
          "start": 46,
          "end": 73
        }
      ],
      "declare": false,
      "start": 42,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 87
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              },
              "start": 83,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 98,
              "end": 104
            },
            "start": 83,
            "end": 104
          },
          "definite": false,
          "start": 79,
          "end": 104
        }
      ],
      "declare": false,
      "start": 75,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 32,
              "raw": "32",
              "start": 198,
              "end": 200
            },
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 204,
              "end": 217
            },
            "start": 198,
            "end": 217
          },
          "definite": false,
          "start": 194,
          "end": 217
        }
      ],
      "declare": false,
      "start": 190,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 223,
          "end": 225
        },
        "start": 219,
        "end": 225
      },
      "directive": null,
      "start": 219,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
