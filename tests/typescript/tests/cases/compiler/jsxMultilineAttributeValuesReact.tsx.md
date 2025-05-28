__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 68,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 34,
            "end": 67,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 34,
              "end": 59,
              "name": {
                "type": "JSXIdentifier",
                "start": 35,
                "end": 40,
                "name": "input"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 41,
                  "end": 58,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 41,
                    "end": 46,
                    "name": "value"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 47,
                    "end": 58,
                    "value": "\nfoo: 23\n",
                    "raw": "\"\nfoo: 23\n\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 59,
              "end": 67,
              "name": {
                "type": "JSXIdentifier",
                "start": 61,
                "end": 66,
                "name": "input"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 113,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 79,
            "end": 112,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 79,
              "end": 104,
              "name": {
                "type": "JSXIdentifier",
                "start": 80,
                "end": 85,
                "name": "input"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 86,
                  "end": 103,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 86,
                    "end": 91,
                    "name": "value"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 92,
                    "end": 103,
                    "value": "\nfoo: 23\n",
                    "raw": "'\nfoo: 23\n'"
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 104,
              "end": 112,
              "name": {
                "type": "JSXIdentifier",
                "start": 106,
                "end": 111,
                "name": "input"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 160,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 124,
            "end": 159,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 124,
              "end": 151,
              "name": {
                "type": "JSXIdentifier",
                "start": 125,
                "end": 130,
                "name": "input"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 131,
                  "end": 150,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 131,
                    "end": 136,
                    "name": "value"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 137,
                    "end": 150,
                    "value": "\nfoo: 23\\n\n",
                    "raw": "'\nfoo: 23\\n\n'"
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 151,
              "end": 159,
              "name": {
                "type": "JSXIdentifier",
                "start": 153,
                "end": 158,
                "name": "input"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
