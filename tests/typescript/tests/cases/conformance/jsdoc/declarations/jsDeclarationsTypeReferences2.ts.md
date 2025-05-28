__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 39,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 17,
              "end": 39,
              "properties": [
                {
                  "type": "Property",
                  "start": 23,
                  "end": 27,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 26,
                    "end": 27,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 33,
                  "end": 37,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 36,
                    "end": 37,
                    "value": 1,
                    "raw": "1"
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 40,
          "id": {
            "type": "ObjectPattern",
            "start": 5,
            "end": 13,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 7,
                "end": 8,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 8,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 8,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 10,
                "end": 11,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "m",
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
            "start": 16,
            "end": 40,
            "object": {
              "type": "CallExpression",
              "start": 16,
              "end": 38,
              "callee": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 24,
                  "end": 37,
                  "value": "./something",
                  "raw": "\"./something\""
                }
              ],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "o",
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
      "type": "VariableDeclaration",
      "start": 43,
      "end": 62,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 54,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 57,
            "end": 62,
            "left": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 95,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 64,
          "end": 78,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 70,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 78,
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
          "start": 81,
          "end": 94,
          "properties": [
            {
              "type": "Property",
              "start": 87,
              "end": 92,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 87,
                "end": 92,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 87,
                "end": 92,
                "decorators": [],
                "name": "thing",
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
