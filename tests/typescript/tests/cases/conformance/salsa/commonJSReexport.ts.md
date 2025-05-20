__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 54,
            "decorators": [],
            "name": "hardline",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 57,
            "end": 73,
            "properties": [
              {
                "type": "Property",
                "start": 59,
                "end": 71,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 65,
                  "end": 71,
                  "raw": "\"hard\"",
                  "value": "hard"
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
      "type": "ExpressionStatement",
      "start": 74,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 105,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 74,
          "end": 88,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 91,
          "end": 105,
          "properties": [
            {
              "type": "Property",
              "start": 95,
              "end": 103,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 103,
                "decorators": [],
                "name": "hardline",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 95,
                "end": 103,
                "decorators": [],
                "name": "hardline",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 50,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 17,
          "end": 49,
          "properties": [
            {
              "type": "Property",
              "start": 21,
              "end": 47,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "CallExpression",
                "start": 29,
                "end": 47,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 37,
                    "end": 46,
                    "raw": "'./first'",
                    "value": "./first"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 36,
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 47,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 18,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 16,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 16,
                  "decorators": [],
                  "name": "hardline",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 16,
                  "decorators": [],
                  "name": "hardline",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 21,
            "end": 47,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 21,
              "end": 40,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 39,
                  "raw": "'./second'",
                  "value": "./second"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 47,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 49,
        "end": 57,
        "decorators": [],
        "name": "hardline",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
