__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 136,
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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 40,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
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
      "type": "VariableDeclaration",
      "start": 42,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 60,
                      "end": 62,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 64,
                    "end": 71,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 67,
                      "end": 71,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 75,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 84,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 82,
        "end": 87,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 84,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 88,
      "end": 136,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 93,
        "end": 108,
        "properties": [
          {
            "type": "Property",
            "start": 94,
            "end": 95,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 97,
            "end": 107,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 100,
              "end": 107,
              "left": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 104,
                "end": 107,
                "object": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 112,
        "end": 117,
        "name": "array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 136,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 125,
            "end": 127,
            "expression": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 132,
            "end": 134,
            "expression": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
