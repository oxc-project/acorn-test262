__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 45,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
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
      "type": "TSModuleDeclaration",
      "start": 47,
      "end": 85,
      "id": {
        "type": "TSQualifiedName",
        "start": 62,
        "end": 67,
        "left": {
          "type": "TSQualifiedName",
          "start": 62,
          "end": 65,
          "left": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 72,
            "end": 83,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 76,
                "end": 82,
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 79,
                      "end": 82
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 113,
      "expression": {
        "type": "JSXElement",
        "start": 87,
        "end": 113,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 87,
          "end": 96,
          "name": {
            "type": "JSXMemberExpression",
            "start": 88,
            "end": 95,
            "object": {
              "type": "JSXMemberExpression",
              "start": 88,
              "end": 93,
              "object": {
                "type": "JSXMemberExpression",
                "start": 88,
                "end": 91,
                "object": {
                  "type": "JSXIdentifier",
                  "start": 88,
                  "end": 89,
                  "name": "A"
                },
                "property": {
                  "type": "JSXIdentifier",
                  "start": 90,
                  "end": 91,
                  "name": "B"
                }
              },
              "property": {
                "type": "JSXIdentifier",
                "start": 92,
                "end": 93,
                "name": "C"
              }
            },
            "property": {
              "type": "JSXIdentifier",
              "start": 94,
              "end": 95,
              "name": "D"
            }
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 96,
            "end": 99,
            "value": "foo",
            "raw": "foo"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 99,
          "end": 113,
          "name": {
            "type": "JSXMemberExpression",
            "start": 101,
            "end": 112,
            "object": {
              "type": "JSXMemberExpression",
              "start": 101,
              "end": 110,
              "object": {
                "type": "JSXMemberExpression",
                "start": 101,
                "end": 106,
                "object": {
                  "type": "JSXIdentifier",
                  "start": 101,
                  "end": 102,
                  "name": "A"
                },
                "property": {
                  "type": "JSXIdentifier",
                  "start": 105,
                  "end": 106,
                  "name": "B"
                }
              },
              "property": {
                "type": "JSXIdentifier",
                "start": 109,
                "end": 110,
                "name": "C"
              }
            },
            "property": {
              "type": "JSXIdentifier",
              "start": 111,
              "end": 112,
              "name": "D"
            }
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
