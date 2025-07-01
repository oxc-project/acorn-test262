__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 107
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactHTML",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 117
                    },
                    "start": 102,
                    "end": 117
                  },
                  "typeArguments": null,
                  "start": 102,
                  "end": 117
                },
                "start": 96,
                "end": 117
              },
              "start": 94,
              "end": 117
            },
            "start": 91,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 117
        }
      ],
      "declare": true,
      "start": 77,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "classes",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 133
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 136,
            "end": 138
          },
          "definite": false,
          "start": 126,
          "end": 138
        }
      ],
      "declare": false,
      "start": 120,
      "end": 139
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 157
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HTMLAttributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 172
                  },
                  "start": 152,
                  "end": 172
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 184
                      },
                      "typeArguments": null,
                      "start": 173,
                      "end": 184
                    }
                  ],
                  "start": 172,
                  "end": 185
                },
                "start": 152,
                "end": 185
              },
              "start": 150,
              "end": 185
            },
            "start": 146,
            "end": 185
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 188,
            "end": 190
          },
          "definite": false,
          "start": 146,
          "end": 190
        }
      ],
      "declare": false,
      "start": 140,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 208,
                  "end": 211
                },
                "start": 208,
                "end": 213
              },
              "start": 206,
              "end": 213
            },
            "start": 198,
            "end": 213
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 216,
            "end": 218
          },
          "definite": false,
          "start": 198,
          "end": 218
        }
      ],
      "declare": false,
      "start": 192,
      "end": 219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Tag",
            "start": 221,
            "end": 224
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "className",
                "start": 225,
                "end": 234
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "classes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 243
                },
                "start": 235,
                "end": 244
              },
              "start": 225,
              "end": 244
            },
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 253
              },
              "start": 245,
              "end": 254
            }
          ],
          "selfClosing": false,
          "start": 220,
          "end": 255
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 255,
            "end": 256
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 265
            },
            "start": 256,
            "end": 266
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 266,
            "end": 267
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Tag",
            "start": 269,
            "end": 272
          },
          "start": 267,
          "end": 273
        },
        "start": 220,
        "end": 273
      },
      "directive": null,
      "start": 220,
      "end": 273
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 273
}
```
