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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 16,
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
                      "start": 18,
                      "end": 20,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 22,
                    "end": 26,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 23,
                      "decorators": [],
                      "name": "y",
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
                      "end": 26,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 30,
      "end": 91,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 91,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 80,
            "end": 82,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 87,
            "end": 89,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 63,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 63,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 39,
              "end": 63,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 40,
                  "end": 49,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
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
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 47,
                      "end": 49,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 51,
                  "end": 62,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
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
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 58,
                      "end": 62,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 67,
        "end": 72,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
