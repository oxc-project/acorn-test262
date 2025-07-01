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
                "type": "TSTypeLiteral",
                "members": [],
                "start": 152,
                "end": 154
              },
              "start": 150,
              "end": 154
            },
            "start": 146,
            "end": 154
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 157,
            "end": 159
          },
          "definite": false,
          "start": 146,
          "end": 159
        }
      ],
      "declare": false,
      "start": 140,
      "end": 160
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
                  "start": 177,
                  "end": 180
                },
                "start": 177,
                "end": 182
              },
              "start": 175,
              "end": 182
            },
            "start": 167,
            "end": 182
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 185,
            "end": 187
          },
          "definite": false,
          "start": 167,
          "end": 187
        }
      ],
      "declare": false,
      "start": 161,
      "end": 188
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
            "start": 190,
            "end": 193
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "className",
                "start": 194,
                "end": 203
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "classes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 212
                },
                "start": 204,
                "end": 213
              },
              "start": 194,
              "end": 213
            },
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 222
              },
              "start": 214,
              "end": 223
            }
          ],
          "selfClosing": false,
          "start": 189,
          "end": 224
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 224,
            "end": 225
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 234
            },
            "start": 225,
            "end": 235
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 235,
            "end": 236
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Tag",
            "start": 238,
            "end": 241
          },
          "start": 236,
          "end": 242
        },
        "start": 189,
        "end": 242
      },
      "directive": null,
      "start": 189,
      "end": 242
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 242
}
```
