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
              "start": 31,
              "end": 38
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 39,
              "end": 42
            },
            "declare": false,
            "start": 21,
            "end": 42
          }
        ],
        "start": 19,
        "end": 44
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 44
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
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 64,
                "end": 67
              },
              "start": 62,
              "end": 67
            },
            "start": 57,
            "end": 67
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 67
        }
      ],
      "declare": true,
      "start": 45,
      "end": 68
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 82,
          "end": 85
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 87,
          "end": 90
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 92,
          "end": 95
        }
      ],
      "declare": true,
      "start": 70,
      "end": 96
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 99,
            "end": 102
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 98,
          "end": 103
        },
        "children": [
          {
            "type": "JSXText",
            "value": " ",
            "raw": " ",
            "start": 103,
            "end": 104
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 105,
                "end": 108
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 104,
              "end": 109
            },
            "children": [
              {
                "type": "JSXText",
                "value": " q ",
                "raw": " q ",
                "start": 109,
                "end": 112
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 114,
                "end": 117
              },
              "start": 112,
              "end": 118
            },
            "start": 104,
            "end": 118
          },
          {
            "type": "JSXText",
            "value": " ",
            "raw": " ",
            "start": 118,
            "end": 119
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 120,
                "end": 123
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 119,
              "end": 125
            },
            "children": [],
            "closingElement": null,
            "start": 119,
            "end": 125
          },
          {
            "type": "JSXText",
            "value": "   s ",
            "raw": "   s ",
            "start": 125,
            "end": 130
          },
          {
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
              "attributes": [],
              "selfClosing": true,
              "start": 130,
              "end": 136
            },
            "children": [],
            "closingElement": null,
            "start": 130,
            "end": 136
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 137,
                "end": 140
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 136,
              "end": 142
            },
            "children": [],
            "closingElement": null,
            "start": 136,
            "end": 142
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 144,
            "end": 147
          },
          "start": 142,
          "end": 148
        },
        "start": 98,
        "end": 148
      },
      "directive": null,
      "start": 98,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
