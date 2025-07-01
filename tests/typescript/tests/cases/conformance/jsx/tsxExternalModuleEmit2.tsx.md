__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "mod",
        "raw": "'mod'",
        "start": 15,
        "end": 20
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 32,
                      "end": 35
                    },
                    "start": 30,
                    "end": 35
                  },
                  "start": 29,
                  "end": 35
                },
                "init": null,
                "definite": false,
                "start": 29,
                "end": 35
              }
            ],
            "declare": false,
            "start": 25,
            "end": 36
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "exportKind": "value",
            "start": 39,
            "end": 56
          }
        ],
        "start": 21,
        "end": 58
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Main",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mod",
        "raw": "'mod'",
        "start": 17,
        "end": 22
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 23
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
            "start": 36,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 39
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 46
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 46
        }
      ],
      "declare": true,
      "start": 24,
      "end": 47
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
            "start": 93,
            "end": 96
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "handler",
                "start": 97,
                "end": 104
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Main",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 110
                },
                "start": 105,
                "end": 111
              },
              "start": 97,
              "end": 111
            }
          ],
          "selfClosing": false,
          "start": 92,
          "end": 112
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 114,
            "end": 117
          },
          "start": 112,
          "end": 118
        },
        "start": 92,
        "end": 118
      },
      "directive": null,
      "start": 92,
      "end": 119
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
            "start": 165,
            "end": 168
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "Main",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 177
              },
              "start": 169,
              "end": 178
            }
          ],
          "selfClosing": false,
          "start": 164,
          "end": 179
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 181,
            "end": 184
          },
          "start": 179,
          "end": 185
        },
        "start": 164,
        "end": 185
      },
      "directive": null,
      "start": 164,
      "end": 186
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 187
}
```
