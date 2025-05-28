__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 29,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 13,
                "end": 28,
                "properties": [
                  {
                    "type": "Property",
                    "start": 15,
                    "end": 20,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 16,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 18,
                      "end": 20,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 22,
                    "end": 26,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 23,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 25,
                      "end": 26,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 30,
      "end": 91,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 63,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 63,
            "id": {
              "type": "ObjectPattern",
              "start": 39,
              "end": 63,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 40,
                  "end": 49,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 43,
                    "end": 49,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 47,
                      "end": 49,
                      "value": "",
                      "raw": "\"\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 51,
                  "end": 62,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 54,
                    "end": 62,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 58,
                      "end": 62,
                      "value": true,
                      "raw": "true"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 67,
        "end": 72,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 91,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 80,
            "end": 82,
            "expression": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 87,
            "end": 89,
            "expression": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
