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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 15,
                  "end": 20,
                  "value": "yes",
                  "raw": "'yes'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 22,
                "end": 29,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 25,
                  "end": 29,
                  "value": "no",
                  "raw": "'no'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 58,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 57,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 48,
                  "end": 49,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 65,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 80,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 79,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 102,
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
          "properties": [
            {
              "type": "Property",
              "start": 84,
              "end": 85,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 87,
              "end": 94,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 90,
                "end": 94,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
