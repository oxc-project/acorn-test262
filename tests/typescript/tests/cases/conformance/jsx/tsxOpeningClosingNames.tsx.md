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
          }
        ],
        "start": 19,
        "end": 45
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 45
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
            "start": 62,
            "end": 63
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "start": 62,
          "end": 65
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 67
        },
        "start": 62,
        "end": 67
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
                      "start": 79,
                      "end": 82
                    },
                    "start": 77,
                    "end": 82
                  },
                  "start": 76,
                  "end": 82
                },
                "init": null,
                "definite": false,
                "start": 76,
                "end": 82
              }
            ],
            "declare": false,
            "start": 72,
            "end": 83
          }
        ],
        "start": 68,
        "end": 85
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 47,
      "end": 85
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
                  "start": 88,
                  "end": 89
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "B",
                  "start": 90,
                  "end": 91
                },
                "start": 88,
                "end": 91
              },
              "property": {
                "type": "JSXIdentifier",
                "name": "C",
                "start": 92,
                "end": 93
              },
              "start": 88,
              "end": 93
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "D",
              "start": 94,
              "end": 95
            },
            "start": 88,
            "end": 95
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 87,
          "end": 96
        },
        "children": [
          {
            "type": "JSXText",
            "value": "foo",
            "raw": "foo",
            "start": 96,
            "end": 99
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
                  "start": 101,
                  "end": 102
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "B",
                  "start": 105,
                  "end": 106
                },
                "start": 101,
                "end": 106
              },
              "property": {
                "type": "JSXIdentifier",
                "name": "C",
                "start": 109,
                "end": 110
              },
              "start": 101,
              "end": 110
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "D",
              "start": 111,
              "end": 112
            },
            "start": 101,
            "end": 112
          },
          "start": 99,
          "end": 113
        },
        "start": 87,
        "end": 113
      },
      "directive": null,
      "start": 87,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
