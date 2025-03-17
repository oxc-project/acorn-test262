__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "mod",
        "raw": "'mod'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 58,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 25,
            "end": 36,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 29,
                "end": 35,
                "id": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 35,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 32,
                      "end": 35
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
            "declare": false
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 39,
            "end": 56,
            "declaration": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "name": "Main",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 22,
        "value": "mod",
        "raw": "'mod'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
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
          "start": 41,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "name": "React",
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
      "start": 92,
      "end": 119,
      "expression": {
        "type": "JSXElement",
        "start": 92,
        "end": 118,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 92,
          "end": 112,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 97,
              "end": 111,
              "name": {
                "type": "JSXIdentifier",
                "start": 97,
                "end": 104,
                "name": "handler"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 105,
                "end": 111,
                "expression": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 110,
                  "name": "Main",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 93,
            "end": 96,
            "name": "Foo"
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
            "name": "Foo"
          }
        },
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 186,
      "expression": {
        "type": "JSXElement",
        "start": 164,
        "end": 185,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 164,
          "end": 179,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 169,
              "end": 178,
              "argument": {
                "type": "Identifier",
                "start": 173,
                "end": 177,
                "name": "Main",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 165,
            "end": 168,
            "name": "Foo"
          },
          "selfClosing": false,
          "typeArguments": null
        },
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 179,
          "end": 185,
          "name": {
            "type": "JSXIdentifier",
            "start": 181,
            "end": 184,
            "name": "Foo"
          }
        },
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
