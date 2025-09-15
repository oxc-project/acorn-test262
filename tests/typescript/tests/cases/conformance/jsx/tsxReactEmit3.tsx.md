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
              "start": 34,
              "end": 41
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 42,
              "end": 45
            },
            "declare": false,
            "start": 24,
            "end": 45
          }
        ],
        "start": 22,
        "end": 47
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 47
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
                "start": 67,
                "end": 70
              },
              "start": 65,
              "end": 70
            },
            "start": 60,
            "end": 70
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 70
        }
      ],
      "declare": true,
      "start": 48,
      "end": 71
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
            "start": 85,
            "end": 88
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 88
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 93
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 93
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 95,
          "end": 98
        }
      ],
      "declare": true,
      "start": 73,
      "end": 99
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
            "start": 102,
            "end": 105
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 101,
          "end": 106
        },
        "children": [
          {
            "type": "JSXText",
            "value": " ",
            "raw": " ",
            "start": 106,
            "end": 107
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 108,
                "end": 111
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 107,
              "end": 112
            },
            "children": [
              {
                "type": "JSXText",
                "value": " q ",
                "raw": " q ",
                "start": 112,
                "end": 115
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 117,
                "end": 120
              },
              "start": 115,
              "end": 121
            },
            "start": 107,
            "end": 121
          },
          {
            "type": "JSXText",
            "value": " ",
            "raw": " ",
            "start": 121,
            "end": 122
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 123,
                "end": 126
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 122,
              "end": 128
            },
            "children": [],
            "closingElement": null,
            "start": 122,
            "end": 128
          },
          {
            "type": "JSXText",
            "value": "   s ",
            "raw": "   s ",
            "start": 128,
            "end": 133
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 134,
                "end": 137
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 133,
              "end": 139
            },
            "children": [],
            "closingElement": null,
            "start": 133,
            "end": 139
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Bar",
                "start": 140,
                "end": 143
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 139,
              "end": 145
            },
            "children": [],
            "closingElement": null,
            "start": 139,
            "end": 145
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 147,
            "end": 150
          },
          "start": 145,
          "end": 151
        },
        "start": 101,
        "end": 151
      },
      "directive": null,
      "start": 101,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 152
}
```
