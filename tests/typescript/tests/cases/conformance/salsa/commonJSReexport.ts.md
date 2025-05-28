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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 73,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 65,
                  "end": 71,
                  "value": "hard",
                  "raw": "\"hard\""
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
      "type": "ExpressionStatement",
      "start": 74,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 105,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 74,
          "end": 88,
          "object": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 103,
                "decorators": [],
                "name": "hardline",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 95,
                "end": 103,
                "decorators": [],
                "name": "hardline",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "CallExpression",
                "start": 29,
                "end": 47,
                "callee": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 36,
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 37,
                    "end": 46,
                    "value": "./first",
                    "raw": "'./first'"
                  }
                ],
                "optional": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 47,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 18,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 16,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 16,
                  "decorators": [],
                  "name": "hardline",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 16,
                  "decorators": [],
                  "name": "hardline",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 21,
            "end": 47,
            "object": {
              "type": "CallExpression",
              "start": 21,
              "end": 40,
              "callee": {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 39,
                  "value": "./second",
                  "raw": "'./second'"
                }
              ],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 47,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 57,
      "expression": {
        "type": "Identifier",
        "start": 49,
        "end": 57,
        "decorators": [],
        "name": "hardline",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
