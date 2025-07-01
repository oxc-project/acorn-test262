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
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 54
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 63,
                            "end": 69
                          },
                          "start": 61,
                          "end": 69
                        },
                        "start": 58,
                        "end": 69
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 72,
                        "end": 75
                      },
                      "start": 70,
                      "end": 75
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 57,
                    "end": 75
                  }
                ],
                "start": 55,
                "end": 77
              },
              "declare": false,
              "start": 27,
              "end": 77
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 77
          }
        ],
        "start": 14,
        "end": 79
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 79
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 91,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 97,
              "end": 102
            },
            "start": 91,
            "end": 102
          },
          "definite": false,
          "start": 87,
          "end": 102
        }
      ],
      "declare": false,
      "start": 81,
      "end": 103
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 114,
            "end": 118
          },
          "definite": false,
          "start": 110,
          "end": 118
        }
      ],
      "declare": false,
      "start": 104,
      "end": 119
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 139
          },
          "definite": false,
          "start": 126,
          "end": 139
        }
      ],
      "declare": false,
      "start": 120,
      "end": 140
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 153,
                "end": 156
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 163
                  },
                  "start": 157,
                  "end": 165
                }
              ],
              "selfClosing": true,
              "start": 152,
              "end": 168
            },
            "children": [],
            "closingElement": null,
            "start": 152,
            "end": 168
          },
          "definite": false,
          "start": 148,
          "end": 168
        }
      ],
      "declare": false,
      "start": 142,
      "end": 168
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 176
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 180,
                "end": 183
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "start": 184,
                  "end": 192
                }
              ],
              "selfClosing": true,
              "start": 179,
              "end": 195
            },
            "children": [],
            "closingElement": null,
            "start": 179,
            "end": 195
          },
          "definite": false,
          "start": 175,
          "end": 195
        }
      ],
      "declare": false,
      "start": 169,
      "end": 195
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 203
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 207,
                "end": 210
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "start": 211,
                  "end": 219
                }
              ],
              "selfClosing": true,
              "start": 206,
              "end": 222
            },
            "children": [],
            "closingElement": null,
            "start": 206,
            "end": 222
          },
          "definite": false,
          "start": 202,
          "end": 222
        }
      ],
      "declare": false,
      "start": 196,
      "end": 222
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 222
}
```
