__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 40,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
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
      "start": 42,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "decorators": [],
            "name": "array",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 54,
            "end": 74,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 55,
                "end": 73,
                "properties": [
                  {
                    "type": "Property",
                    "start": 57,
                    "end": 62,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 60,
                      "end": 62,
                      "raw": "\"\"",
                      "value": ""
                    }
                  },
                  {
                    "type": "Property",
                    "start": 64,
                    "end": 71,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 67,
                      "end": 71,
                      "raw": "true",
                      "value": true
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
      "start": 75,
      "end": 87,
      "body": {
        "type": "TSEnumBody",
        "start": 82,
        "end": 87,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 84,
            "end": 85,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "ForOfStatement",
      "start": 88,
      "end": 133,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 133,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 124,
            "expression": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 129,
            "end": 131,
            "expression": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "ObjectPattern",
        "start": 93,
        "end": 105,
        "decorators": [],
        "optional": false,
        "properties": [
          {
            "type": "Property",
            "start": 94,
            "end": 95,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "Property",
            "start": 97,
            "end": 104,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "AssignmentPattern",
              "start": 97,
              "end": 104,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "MemberExpression",
                "start": 101,
                "end": 104,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "right": {
        "type": "Identifier",
        "start": 109,
        "end": 114,
        "decorators": [],
        "name": "array",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
