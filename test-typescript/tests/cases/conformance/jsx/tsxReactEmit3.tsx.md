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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 44,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 38,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 39,
              "end": 42,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 67,
            "name": "React",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 67,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 64,
                "end": 67
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 85,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 149,
      "expression": {
        "type": "JSXElement",
        "start": 98,
        "end": 148,
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
          "selfClosing": false,
          "typeArguments": null
        },
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
        "children": [
          {
            "type": "JSXText",
            "start": 103,
            "end": 104,
            "value": " ",
            "raw": " "
          },
          {
            "type": "JSXElement",
            "start": 104,
            "end": 118,
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
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 109,
                "end": 112,
                "value": " q ",
                "raw": " q "
              }
            ]
          },
          {
            "type": "JSXText",
            "start": 118,
            "end": 119,
            "value": " ",
            "raw": " "
          },
          {
            "type": "JSXElement",
            "start": 119,
            "end": 125,
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXText",
            "start": 125,
            "end": 130,
            "value": "   s ",
            "raw": "   s "
          },
          {
            "type": "JSXElement",
            "start": 130,
            "end": 136,
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          {
            "type": "JSXElement",
            "start": 136,
            "end": 142,
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
