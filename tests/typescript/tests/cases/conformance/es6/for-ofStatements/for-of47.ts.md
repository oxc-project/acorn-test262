__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "start": 15,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 24
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 35
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 42
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 44,
                      "end": 46
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 41,
                    "end": 46
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 49
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 51,
                      "end": 55
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 48,
                    "end": 55
                  }
                ],
                "start": 39,
                "end": 57
              }
            ],
            "start": 38,
            "end": 58
          },
          "definite": false,
          "start": 30,
          "end": 58
        }
      ],
      "declare": false,
      "start": 26,
      "end": 58
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 65
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "initializer": null,
            "computed": false,
            "start": 68,
            "end": 69
          }
        ],
        "start": 66,
        "end": 71
      },
      "const": false,
      "declare": false,
      "start": 59,
      "end": 71
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 78,
            "end": 79
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "optional": false,
                "computed": false,
                "start": 88,
                "end": 91
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 91
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 81,
            "end": 91
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 92
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 101
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "directive": null,
            "start": 109,
            "end": 111
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "directive": null,
            "start": 116,
            "end": 118
          }
        ],
        "start": 103,
        "end": 120
      },
      "start": 72,
      "end": 120
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
