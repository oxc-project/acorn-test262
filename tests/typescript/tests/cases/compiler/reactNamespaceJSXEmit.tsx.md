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
            "name": "myReactLib",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              },
              "start": 22,
              "end": 27
            },
            "start": 12,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 27
        }
      ],
      "declare": true,
      "start": 0,
      "end": 28
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              },
              "start": 44,
              "end": 49
            },
            "start": 41,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 49
        }
      ],
      "declare": true,
      "start": 29,
      "end": 50
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
            "name": "Bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 68,
                "end": 71
              },
              "start": 66,
              "end": 71
            },
            "start": 63,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 71
        }
      ],
      "declare": true,
      "start": 51,
      "end": 72
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
            "name": "_Bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              },
              "start": 89,
              "end": 94
            },
            "start": 85,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 94
        }
      ],
      "declare": true,
      "start": 73,
      "end": 95
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 111,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "start": 108,
            "end": 114
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 114
        }
      ],
      "declare": true,
      "start": 96,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foo",
            "start": 118,
            "end": 121
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data",
                "start": 122,
                "end": 126
              },
              "value": null,
              "start": 122,
              "end": 126
            }
          ],
          "selfClosing": true,
          "start": 117,
          "end": 128
        },
        "children": [],
        "closingElement": null,
        "start": 117,
        "end": 128
      },
      "directive": null,
      "start": 117,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Bar",
            "start": 131,
            "end": 134
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 135,
                "end": 136
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "start": 137,
                "end": 140
              },
              "start": 135,
              "end": 140
            }
          ],
          "selfClosing": true,
          "start": 130,
          "end": 143
        },
        "children": [],
        "closingElement": null,
        "start": 130,
        "end": 143
      },
      "directive": null,
      "start": 130,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "x-component",
            "start": 146,
            "end": 157
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 145,
          "end": 160
        },
        "children": [],
        "closingElement": null,
        "start": 145,
        "end": 160
      },
      "directive": null,
      "start": 145,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Bar",
            "start": 163,
            "end": 166
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "start": 167,
              "end": 173
            }
          ],
          "selfClosing": true,
          "start": 162,
          "end": 176
        },
        "children": [],
        "closingElement": null,
        "start": 162,
        "end": 176
      },
      "directive": null,
      "start": 162,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Bar",
            "start": 179,
            "end": 182
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 189
              },
              "start": 183,
              "end": 191
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "y",
                "start": 192,
                "end": 193
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 195,
                  "end": 196
                },
                "start": 194,
                "end": 197
              },
              "start": 192,
              "end": 197
            }
          ],
          "selfClosing": true,
          "start": 178,
          "end": 200
        },
        "children": [],
        "closingElement": null,
        "start": 178,
        "end": 200
      },
      "directive": null,
      "start": 178,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "_Bar",
            "start": 203,
            "end": 207
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 214
              },
              "start": 208,
              "end": 216
            }
          ],
          "selfClosing": true,
          "start": 202,
          "end": 219
        },
        "children": [],
        "closingElement": null,
        "start": 202,
        "end": 219
      },
      "directive": null,
      "start": 202,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
