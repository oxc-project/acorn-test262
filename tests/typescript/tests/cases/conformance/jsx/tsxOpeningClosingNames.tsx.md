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
          }
        ],
        "start": 22,
        "end": 48
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "start": 68,
          "end": 71
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 73
        },
        "start": 68,
        "end": 73
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 85,
                      "end": 88
                    },
                    "start": 83,
                    "end": 88
                  },
                  "start": 82,
                  "end": 88
                },
                "init": null,
                "definite": false,
                "start": 82,
                "end": 88
              }
            ],
            "declare": false,
            "start": 78,
            "end": 89
          }
        ],
        "start": 74,
        "end": 91
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 50,
      "end": 91
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
              "type": "JSXMemberExpression",
              "object": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "A",
                  "start": 94,
                  "end": 95
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "B",
                  "start": 96,
                  "end": 97
                },
                "start": 94,
                "end": 97
              },
              "property": {
                "type": "JSXIdentifier",
                "name": "C",
                "start": 98,
                "end": 99
              },
              "start": 94,
              "end": 99
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "D",
              "start": 100,
              "end": 101
            },
            "start": 94,
            "end": 101
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 93,
          "end": 102
        },
        "children": [
          {
            "type": "JSXText",
            "value": "foo",
            "raw": "foo",
            "start": 102,
            "end": 105
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXMemberExpression",
            "object": {
              "type": "JSXMemberExpression",
              "object": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "A",
                  "start": 107,
                  "end": 108
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "B",
                  "start": 111,
                  "end": 112
                },
                "start": 107,
                "end": 112
              },
              "property": {
                "type": "JSXIdentifier",
                "name": "C",
                "start": 115,
                "end": 116
              },
              "start": 107,
              "end": 116
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "D",
              "start": 117,
              "end": 118
            },
            "start": 107,
            "end": 118
          },
          "start": 105,
          "end": 119
        },
        "start": 93,
        "end": 119
      },
      "directive": null,
      "start": 93,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
