__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 31,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 20,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 15,
                  "end": 20,
                  "raw": "'yes'",
                  "value": "yes",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 22,
                "end": 29,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 25,
                  "end": 29,
                  "raw": "'no'",
                  "value": "no",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 43,
            "end": 57,
            "properties": [
              {
                "type": "Property",
                "start": 45,
                "end": 49,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 48,
                  "end": 49,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 51,
                "end": 55,
                "argument": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 79,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 79,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 76,
                "end": 79
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
      "type": "ExpressionStatement",
      "start": 81,
      "end": 102,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 100,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 82,
          "end": 96,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 84,
              "end": 85,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "RestElement",
              "start": 87,
              "end": 94,
              "argument": {
                "type": "Identifier",
                "start": 90,
                "end": 94,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
