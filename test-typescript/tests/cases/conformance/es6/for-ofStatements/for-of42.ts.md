__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 28,
            "end": 45,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 29,
                "end": 44,
                "properties": [
                  {
                    "type": "Property",
                    "start": 31,
                    "end": 36,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
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
                      "start": 34,
                      "end": 36,
                      "raw": "\"\"",
                      "value": ""
                    }
                  },
                  {
                    "type": "Property",
                    "start": 38,
                    "end": 42,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
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
                      "start": 41,
                      "end": 42,
                      "raw": "0",
                      "value": 0
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
      "start": 46,
      "end": 95,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 84,
            "end": 86,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 91,
            "end": 93,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
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
        "start": 51,
        "end": 67,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 67,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 55,
              "end": 67,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 56,
                  "end": 60,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
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
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 62,
                  "end": 66,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
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
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
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
        "start": 71,
        "end": 76,
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
