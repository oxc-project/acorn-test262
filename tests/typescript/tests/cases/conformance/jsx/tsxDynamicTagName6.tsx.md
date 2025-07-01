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
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 80
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
                    },
                    "start": 80,
                    "end": 85
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 85
                }
              ],
              "start": 73,
              "end": 88
            },
            "declare": false,
            "start": 45,
            "end": 88
          }
        ],
        "start": 19,
        "end": 90
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 90
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 106
                },
                "value": {
                  "type": "Literal",
                  "value": "h1",
                  "raw": "'h1'",
                  "start": 107,
                  "end": 111
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 103,
                "end": 111
              }
            ],
            "start": 102,
            "end": 112
          },
          "definite": false,
          "start": 98,
          "end": 112
        }
      ],
      "declare": false,
      "start": 92,
      "end": 112
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 122
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "t",
                  "start": 126,
                  "end": 127
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "tag",
                  "start": 128,
                  "end": 131
                },
                "start": 126,
                "end": 131
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 125,
              "end": 133
            },
            "children": [],
            "closingElement": null,
            "start": 125,
            "end": 133
          },
          "definite": false,
          "start": 119,
          "end": 133
        }
      ],
      "declare": false,
      "start": 113,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
