__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 11
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 7,
                "end": 11
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 16,
            "end": 18
          },
          "definite": false,
          "start": 6,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 31
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 27,
                "end": 31
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 33
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 36,
            "end": 38
          },
          "definite": false,
          "start": 26,
          "end": 38
        }
      ],
      "declare": false,
      "start": 20,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 44,
          "end": 45
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 48
        }
      ],
      "declare": false,
      "start": 40,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 52,
              "end": 56
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 58
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 61,
          "end": 63
        },
        "start": 51,
        "end": 63
      },
      "directive": null,
      "start": 50,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 72
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 68,
              "end": 72
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 74
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 77,
          "end": 79
        },
        "start": 67,
        "end": 79
      },
      "directive": null,
      "start": 66,
      "end": 81
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 126
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 130,
              "end": 133
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 134,
              "end": 136
            },
            "start": 129,
            "end": 136
          },
          "definite": false,
          "start": 122,
          "end": 136
        }
      ],
      "declare": false,
      "start": 116,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 145,
                "end": 146
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 148
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 152,
              "end": 155
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 156,
              "end": 158
            },
            "start": 151,
            "end": 158
          },
          "definite": false,
          "start": 144,
          "end": 158
        }
      ],
      "declare": false,
      "start": 138,
      "end": 159
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 164,
          "end": 165
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 167,
          "end": 168
        }
      ],
      "declare": false,
      "start": 160,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 175
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 179,
            "end": 182
          },
          "expression": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 183,
            "end": 185
          },
          "start": 178,
          "end": 185
        },
        "start": 171,
        "end": 185
      },
      "directive": null,
      "start": 170,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
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
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 190,
              "end": 191
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 193
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 197,
            "end": 200
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 201,
            "end": 203
          },
          "start": 196,
          "end": 203
        },
        "start": 189,
        "end": 203
      },
      "directive": null,
      "start": 188,
      "end": 205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 205
}
```
