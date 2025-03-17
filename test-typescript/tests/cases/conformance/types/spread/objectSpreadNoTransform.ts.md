__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 15,
                  "end": 20,
                  "value": "yes",
                  "raw": "'yes'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 22,
                "end": 29,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 25,
                  "end": 29,
                  "value": "no",
                  "raw": "'no'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 48,
                  "end": 49,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
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
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "b",
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
      "start": 66,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 79,
            "name": "rest",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 79,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 76,
                "end": 79
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
          "properties": [
            {
              "type": "Property",
              "start": 84,
              "end": 85,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 87,
              "end": 94,
              "argument": {
                "type": "Identifier",
                "start": 90,
                "end": 94,
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
