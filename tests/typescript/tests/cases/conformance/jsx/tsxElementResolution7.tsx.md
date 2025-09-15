__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 76,
              "end": 79
            },
            "declare": false,
            "start": 48,
            "end": 79
          }
        ],
        "start": 22,
        "end": 81
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "my",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 95
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 118,
                        "end": 121
                      },
                      "start": 116,
                      "end": 121
                    },
                    "start": 113,
                    "end": 121
                  },
                  "init": null,
                  "definite": false,
                  "start": 113,
                  "end": 121
                }
              ],
              "declare": false,
              "start": 109,
              "end": 122
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 122
          }
        ],
        "start": 96,
        "end": 124
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 83,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXMemberExpression",
            "object": {
              "type": "JSXIdentifier",
              "name": "my",
              "start": 132,
              "end": 134
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "div",
              "start": 135,
              "end": 138
            },
            "start": 132,
            "end": 138
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 139,
                "end": 140
              },
              "value": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 141,
                "end": 144
              },
              "start": 139,
              "end": 144
            }
          ],
          "selfClosing": true,
          "start": 131,
          "end": 147
        },
        "children": [],
        "closingElement": null,
        "start": 131,
        "end": 147
      },
      "directive": null,
      "start": 131,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXMemberExpression",
            "object": {
              "type": "JSXIdentifier",
              "name": "my",
              "start": 159,
              "end": 161
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "other",
              "start": 162,
              "end": 167
            },
            "start": 159,
            "end": 167
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 158,
          "end": 170
        },
        "children": [],
        "closingElement": null,
        "start": 158,
        "end": 170
      },
      "directive": null,
      "start": 158,
      "end": 171
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "q",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 184
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mine",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 202
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 207
            },
            "importKind": "value",
            "start": 191,
            "end": 208
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXMemberExpression",
                  "object": {
                    "type": "JSXIdentifier",
                    "name": "mine",
                    "start": 224,
                    "end": 228
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 229,
                    "end": 232
                  },
                  "start": 224,
                  "end": 232
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "n",
                      "start": 233,
                      "end": 234
                    },
                    "value": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "'x'",
                      "start": 235,
                      "end": 238
                    },
                    "start": 233,
                    "end": 238
                  }
                ],
                "selfClosing": true,
                "start": 223,
                "end": 241
              },
              "children": [],
              "closingElement": null,
              "start": 223,
              "end": 241
            },
            "directive": null,
            "start": 223,
            "end": 242
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXMemberExpression",
                  "object": {
                    "type": "JSXIdentifier",
                    "name": "mine",
                    "start": 261,
                    "end": 265
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "non",
                    "start": 266,
                    "end": 269
                  },
                  "start": 261,
                  "end": 269
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 260,
                "end": 272
              },
              "children": [],
              "closingElement": null,
              "start": 260,
              "end": 272
            },
            "directive": null,
            "start": 260,
            "end": 273
          }
        ],
        "start": 185,
        "end": 275
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 173,
      "end": 275
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 275
}
```
