__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
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
      "type": "VariableDeclaration",
      "start": 26,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 35,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 38,
            "end": 58,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 39,
                "end": 57,
                "properties": [
                  {
                    "type": "Property",
                    "start": 41,
                    "end": 46,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
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
                      "start": 44,
                      "end": 46,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 48,
                    "end": 55,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
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
                      "start": 51,
                      "end": 55,
                      "raw": "true",
                      "value": true,
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
      "type": "TSEnumDeclaration",
      "start": 59,
      "end": 71,
      "body": {
        "type": "TSEnumBody",
        "start": 66,
        "end": 71,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 68,
            "end": 69,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 72,
      "end": 117,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 117,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 106,
            "end": 108,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 113,
            "end": 115,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "ObjectPattern",
        "start": 77,
        "end": 89,
        "decorators": [],
        "optional": false,
        "properties": [
          {
            "type": "Property",
            "start": 78,
            "end": 79,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Property",
            "start": 81,
            "end": 88,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "AssignmentPattern",
              "start": 81,
              "end": 88,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "right": {
                "type": "MemberExpression",
                "start": 85,
                "end": 88,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeAnnotation": null
            }
          }
        ],
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 93,
        "end": 98,
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
