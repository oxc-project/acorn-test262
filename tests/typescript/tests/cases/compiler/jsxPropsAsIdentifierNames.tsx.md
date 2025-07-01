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
              "start": 38,
              "end": 45
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 46,
              "end": 49
            },
            "declare": false,
            "start": 28,
            "end": 49
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 81
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
                    "start": 92,
                    "end": 95
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "static",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 111,
                            "end": 117
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 120,
                              "end": 127
                            },
                            "start": 118,
                            "end": 127
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 111,
                          "end": 128
                        }
                      ],
                      "start": 97,
                      "end": 138
                    },
                    "start": 95,
                    "end": 138
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 92,
                  "end": 139
                }
              ],
              "start": 82,
              "end": 145
            },
            "declare": false,
            "start": 54,
            "end": 145
          }
        ],
        "start": 22,
        "end": 147
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 147
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 164,
            "end": 167
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "static",
                "start": 168,
                "end": 174
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 176,
                  "end": 180
                },
                "start": 175,
                "end": 181
              },
              "start": 168,
              "end": 181
            }
          ],
          "selfClosing": true,
          "start": 163,
          "end": 184
        },
        "children": [],
        "closingElement": null,
        "start": 163,
        "end": 184
      },
      "exportKind": "value",
      "start": 148,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 185
}
```
