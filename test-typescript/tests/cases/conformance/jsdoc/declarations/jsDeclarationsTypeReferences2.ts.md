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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 39,
            "definite": false,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
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
                    "start": 26,
                    "end": 27,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 33,
                  "end": 37,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 36,
                    "end": 37,
                    "raw": "1",
                    "value": 1,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 40,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 5,
            "end": 13,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 7,
                "end": 8,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 8,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 8,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 10,
                "end": 11,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 16,
            "end": 40,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 16,
              "end": 38,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 24,
                  "end": 37,
                  "raw": "\"./something\"",
                  "value": "./something",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
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
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "o",
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
      "type": "VariableDeclaration",
      "start": 43,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 62,
          "definite": false,
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
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "m",
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
      "start": 64,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 64,
          "end": 78,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 70,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 78,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 87,
                "end": 92,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 87,
                "end": 92,
                "decorators": [],
                "name": "thing",
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
