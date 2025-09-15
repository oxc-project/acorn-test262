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
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
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
                    "start": 80,
                    "end": 83
                  },
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
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 88
                }
              ],
              "start": 76,
              "end": 91
            },
            "declare": false,
            "start": 48,
            "end": 91
          }
        ],
        "start": 22,
        "end": 93
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 93
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
            "start": 101,
            "end": 102
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
                  "start": 106,
                  "end": 109
                },
                "value": {
                  "type": "Literal",
                  "value": "h1",
                  "raw": "'h1'",
                  "start": 110,
                  "end": 114
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 106,
                "end": 114
              }
            ],
            "start": 105,
            "end": 115
          },
          "definite": false,
          "start": 101,
          "end": 115
        }
      ],
      "declare": false,
      "start": 95,
      "end": 115
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
            "start": 122,
            "end": 125
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
                  "start": 129,
                  "end": 130
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "tag",
                  "start": 131,
                  "end": 134
                },
                "start": 129,
                "end": 134
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 128,
              "end": 136
            },
            "children": [],
            "closingElement": null,
            "start": 128,
            "end": 136
          },
          "definite": false,
          "start": 122,
          "end": 136
        }
      ],
      "declare": false,
      "start": 116,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
