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
      "kind": "module",
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 35,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 32,
                      "end": 35
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 39,
            "end": 56,
            "declaration": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "'mod'",
        "value": "mod"
      }
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 22,
        "raw": "'mod'",
        "value": "mod"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "Main",
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "decorators": [],
            "name": "React",
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
      "start": 92,
      "end": 119,
      "expression": {
        "type": "JSXElement",
        "start": 92,
        "end": 118,
        "children": [],
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
                  "decorators": [],
                  "name": "Main",
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
          "selfClosing": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 186,
      "expression": {
        "type": "JSXElement",
        "start": 164,
        "end": 185,
        "children": [],
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
                "decorators": [],
                "name": "Main",
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
          "selfClosing": false
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
