__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 27,
            "decorators": [],
            "name": "myReactLib",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
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
      "start": 29,
      "end": 50,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
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
      "start": 51,
      "end": 72,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 71,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 71,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 68,
                "end": 71
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
      "start": 73,
      "end": 95,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 94,
            "decorators": [],
            "name": "_Bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 94,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
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
      "start": 96,
      "end": 115,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 114,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 114,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 111,
                "end": 114
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
      "type": "ExpressionStatement",
      "start": 117,
      "end": 129,
      "expression": {
        "type": "JSXElement",
        "start": 117,
        "end": 128,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 117,
          "end": 128,
          "name": {
            "type": "JSXIdentifier",
            "start": 118,
            "end": 121,
            "name": "foo"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 122,
              "end": 126,
              "name": {
                "type": "JSXIdentifier",
                "start": 122,
                "end": 126,
                "name": "data"
              },
              "value": null
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 144,
      "expression": {
        "type": "JSXElement",
        "start": 130,
        "end": 143,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 130,
          "end": 143,
          "name": {
            "type": "JSXIdentifier",
            "start": 131,
            "end": 134,
            "name": "Bar"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 135,
              "end": 140,
              "name": {
                "type": "JSXIdentifier",
                "start": 135,
                "end": 136,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 137,
                "end": 140,
                "expression": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 161,
      "expression": {
        "type": "JSXElement",
        "start": 145,
        "end": 160,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 145,
          "end": 160,
          "name": {
            "type": "JSXIdentifier",
            "start": 146,
            "end": 157,
            "name": "x-component"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 177,
      "expression": {
        "type": "JSXElement",
        "start": 162,
        "end": 176,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 162,
          "end": 176,
          "name": {
            "type": "JSXIdentifier",
            "start": 163,
            "end": 166,
            "name": "Bar"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 167,
              "end": 173,
              "argument": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 201,
      "expression": {
        "type": "JSXElement",
        "start": 178,
        "end": 200,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 178,
          "end": 200,
          "name": {
            "type": "JSXIdentifier",
            "start": 179,
            "end": 182,
            "name": "Bar"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 183,
              "end": 191,
              "argument": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "JSXAttribute",
              "start": 192,
              "end": 197,
              "name": {
                "type": "JSXIdentifier",
                "start": 192,
                "end": 193,
                "name": "y"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 194,
                "end": 197,
                "expression": {
                  "type": "Literal",
                  "start": 195,
                  "end": 196,
                  "value": 2,
                  "raw": "2"
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 220,
      "expression": {
        "type": "JSXElement",
        "start": 202,
        "end": 219,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 202,
          "end": 219,
          "name": {
            "type": "JSXIdentifier",
            "start": 203,
            "end": 207,
            "name": "_Bar"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 208,
              "end": 216,
              "argument": {
                "type": "Identifier",
                "start": 213,
                "end": 214,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
