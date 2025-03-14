__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 44,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 42,
            "body": {
              "type": "TSInterfaceBody",
              "start": 39,
              "end": 42,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 38,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 67,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 67,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 64,
                "end": 67
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 85,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "decorators": [],
            "name": "Bar",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "decorators": [],
            "name": "baz",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 149,
      "expression": {
        "type": "JSXElement",
        "start": 98,
        "end": 148,
        "children": [
          {
            "type": "JSXText",
            "start": 103,
            "end": 104,
            "raw": " ",
            "value": " "
          },
          {
            "type": "JSXElement",
            "start": 104,
            "end": 118,
            "children": [
              {
                "type": "JSXText",
                "start": 109,
                "end": 112,
                "raw": " q ",
                "value": " q "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 112,
              "end": 118,
              "name": {
                "type": "JSXIdentifier",
                "start": 114,
                "end": 117,
                "name": "Bar"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 104,
              "end": 109,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 105,
                "end": 108,
                "name": "Bar"
              },
              "selfClosing": false
            }
          },
          {
            "type": "JSXText",
            "start": 118,
            "end": 119,
            "raw": " ",
            "value": " "
          },
          {
            "type": "JSXElement",
            "start": 119,
            "end": 125,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 119,
              "end": 125,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 120,
                "end": 123,
                "name": "Bar"
              },
              "selfClosing": true
            }
          },
          {
            "type": "JSXText",
            "start": 125,
            "end": 130,
            "raw": "   s ",
            "value": "   s "
          },
          {
            "type": "JSXElement",
            "start": 130,
            "end": 136,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 130,
              "end": 136,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 131,
                "end": 134,
                "name": "Bar"
              },
              "selfClosing": true
            }
          },
          {
            "type": "JSXElement",
            "start": 136,
            "end": 142,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 136,
              "end": 142,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 137,
                "end": 140,
                "name": "Bar"
              },
              "selfClosing": true
            }
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 142,
          "end": 148,
          "name": {
            "type": "JSXIdentifier",
            "start": 144,
            "end": 147,
            "name": "Foo"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 98,
          "end": 103,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 99,
            "end": 102,
            "name": "Foo"
          },
          "selfClosing": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
