__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 96,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 96,
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
            "end": 94,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 94,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 83,
                  "end": 91,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
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
                    "start": 86,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 88,
                      "end": 91
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
      "start": 98,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "decorators": [],
            "name": "customTag",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 118,
            "raw": "\"h1\"",
            "value": "h1",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 156,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 120,
        "end": 156,
        "children": [
          {
            "type": "JSXText",
            "start": 131,
            "end": 144,
            "raw": " Hello World ",
            "value": " Hello World "
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 144,
          "end": 156,
          "name": {
            "type": "JSXIdentifier",
            "start": 146,
            "end": 155,
            "name": "customTag"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 120,
          "end": 131,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 121,
            "end": 130,
            "name": "customTag"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
