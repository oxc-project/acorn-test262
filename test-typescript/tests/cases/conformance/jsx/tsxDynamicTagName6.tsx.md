__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 90,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 90,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 88,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 88,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 85,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 80,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 102,
            "end": 112,
            "properties": [
              {
                "type": "Property",
                "start": 103,
                "end": 111,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 106,
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 107,
                  "end": 111,
                  "raw": "'h1'",
                  "value": "h1"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 122,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 125,
            "end": 133,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 125,
              "end": 133,
              "attributes": [],
              "name": {
                "type": "JSXMemberExpression",
                "start": 126,
                "end": 131,
                "object": {
                  "type": "JSXIdentifier",
                  "start": 126,
                  "end": 127,
                  "name": "t"
                },
                "property": {
                  "type": "JSXIdentifier",
                  "start": 128,
                  "end": 131,
                  "name": "tag"
                }
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
