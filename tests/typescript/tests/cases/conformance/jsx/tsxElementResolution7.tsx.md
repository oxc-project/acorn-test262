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
        "start": 15,
        "end": 18
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
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 73,
              "end": 76
            },
            "declare": false,
            "start": 45,
            "end": 76
          }
        ],
        "start": 19,
        "end": 78
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "my",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 89
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
                        "start": 112,
                        "end": 115
                      },
                      "start": 110,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
                  },
                  "init": null,
                  "definite": false,
                  "start": 107,
                  "end": 115
                }
              ],
              "declare": false,
              "start": 103,
              "end": 116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 96,
            "end": 116
          }
        ],
        "start": 90,
        "end": 118
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 80,
      "end": 118
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
              "start": 126,
              "end": 128
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "div",
              "start": 129,
              "end": 132
            },
            "start": 126,
            "end": 132
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 133,
                "end": 134
              },
              "value": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 135,
                "end": 138
              },
              "start": 133,
              "end": 138
            }
          ],
          "selfClosing": true,
          "start": 125,
          "end": 141
        },
        "children": [],
        "closingElement": null,
        "start": 125,
        "end": 141
      },
      "directive": null,
      "start": 125,
      "end": 142
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
              "start": 153,
              "end": 155
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "other",
              "start": 156,
              "end": 161
            },
            "start": 153,
            "end": 161
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 152,
          "end": 164
        },
        "children": [],
        "closingElement": null,
        "start": 152,
        "end": 164
      },
      "directive": null,
      "start": 152,
      "end": 165
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "q",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 175
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
              "start": 189,
              "end": 193
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 198
            },
            "importKind": "value",
            "start": 182,
            "end": 199
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
                    "start": 215,
                    "end": 219
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 220,
                    "end": 223
                  },
                  "start": 215,
                  "end": 223
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "n",
                      "start": 224,
                      "end": 225
                    },
                    "value": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "'x'",
                      "start": 226,
                      "end": 229
                    },
                    "start": 224,
                    "end": 229
                  }
                ],
                "selfClosing": true,
                "start": 214,
                "end": 232
              },
              "children": [],
              "closingElement": null,
              "start": 214,
              "end": 232
            },
            "directive": null,
            "start": 214,
            "end": 233
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
                    "start": 252,
                    "end": 256
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "non",
                    "start": 257,
                    "end": 260
                  },
                  "start": 252,
                  "end": 260
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 251,
                "end": 263
              },
              "children": [],
              "closingElement": null,
              "start": 251,
              "end": 263
            },
            "directive": null,
            "start": 251,
            "end": 264
          }
        ],
        "start": 176,
        "end": 266
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 167,
      "end": 266
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 266
}
```
