__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 88
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "initializer": null,
            "computed": false,
            "start": 91,
            "end": 92
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "initializer": null,
            "computed": false,
            "start": 94,
            "end": 95
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "initializer": null,
            "computed": false,
            "start": 97,
            "end": 98
          }
        ],
        "start": 89,
        "end": 100
      },
      "const": false,
      "declare": false,
      "start": 82,
      "end": 100
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 110,
                "end": 117
              },
              "start": 108,
              "end": 117
            },
            "start": 106,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 117
        }
      ],
      "declare": false,
      "start": 102,
      "end": 118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 121
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 125,
          "end": 127
        },
        "start": 119,
        "end": 127
      },
      "directive": null,
      "start": 119,
      "end": 128
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 138,
                "end": 144
              },
              "start": 136,
              "end": 144
            },
            "start": 134,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 144
        }
      ],
      "declare": false,
      "start": 130,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 148
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 152,
          "end": 154
        },
        "start": 146,
        "end": 154
      },
      "directive": null,
      "start": 146,
      "end": 155
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "typeArguments": null,
                "start": 165,
                "end": 166
              },
              "start": 163,
              "end": 166
            },
            "start": 161,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 161,
          "end": 166
        }
      ],
      "declare": false,
      "start": 157,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 170
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 174,
          "end": 176
        },
        "start": 168,
        "end": 176
      },
      "directive": null,
      "start": 168,
      "end": 177
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 189
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 191,
                        "end": 197
                      },
                      "start": 189,
                      "end": 197
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 188,
                    "end": 197
                  }
                ],
                "start": 187,
                "end": 198
              },
              "start": 185,
              "end": 198
            },
            "start": 183,
            "end": 198
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 198
        }
      ],
      "declare": false,
      "start": 179,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 202
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 206,
          "end": 208
        },
        "start": 200,
        "end": 208
      },
      "directive": null,
      "start": 200,
      "end": 209
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 219,
                "end": 223
              },
              "start": 217,
              "end": 223
            },
            "start": 215,
            "end": 223
          },
          "init": null,
          "definite": false,
          "start": 215,
          "end": 223
        }
      ],
      "declare": false,
      "start": 211,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 227
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 231,
          "end": 233
        },
        "start": 225,
        "end": 233
      },
      "directive": null,
      "start": 225,
      "end": 234
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 234
}
```
