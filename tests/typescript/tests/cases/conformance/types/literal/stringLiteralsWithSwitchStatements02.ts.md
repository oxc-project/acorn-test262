__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 7,
                  "end": 12
                },
                "start": 7,
                "end": 12
              },
              "start": 5,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 21,
                      "end": 26
                    },
                    "start": 21,
                    "end": 26
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 29,
                      "end": 34
                    },
                    "start": 29,
                    "end": 34
                  }
                ],
                "start": 21,
                "end": 34
              },
              "start": 19,
              "end": 34
            },
            "start": 18,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 34
        }
      ],
      "declare": false,
      "start": 14,
      "end": 35
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "start": 41,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 51
        }
      ],
      "declare": false,
      "start": 37,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "start": 57,
          "end": 63
        },
        "start": 53,
        "end": 63
      },
      "directive": null,
      "start": 53,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 69,
            "end": 74
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "start": 69,
          "end": 79
        },
        "start": 65,
        "end": 79
      },
      "directive": null,
      "start": 65,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 81
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 89,
            "end": 94
          },
          "start": 84,
          "end": 94
        },
        "start": 80,
        "end": 94
      },
      "directive": null,
      "start": 80,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 97
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 100,
            "end": 105
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 109,
            "end": 114
          },
          "start": 100,
          "end": 114
        },
        "start": 96,
        "end": 114
      },
      "directive": null,
      "start": 96,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "start": 121,
          "end": 127
        },
        "start": 117,
        "end": 127
      },
      "directive": null,
      "start": 117,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 130
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 133,
            "end": 138
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "start": 133,
          "end": 143
        },
        "start": 129,
        "end": 143
      },
      "directive": null,
      "start": 129,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 145
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 153,
            "end": 158
          },
          "start": 148,
          "end": 158
        },
        "start": 144,
        "end": 158
      },
      "directive": null,
      "start": 144,
      "end": 159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 161
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 164,
            "end": 169
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 173,
            "end": 178
          },
          "start": 164,
          "end": 178
        },
        "start": 160,
        "end": 178
      },
      "directive": null,
      "start": 160,
      "end": 179
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 180
}
```
