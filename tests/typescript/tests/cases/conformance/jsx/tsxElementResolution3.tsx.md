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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 87,
                          "end": 93
                        },
                        "start": 85,
                        "end": 93
                      },
                      "start": 84,
                      "end": 93
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 99
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 101,
                              "end": 107
                            },
                            "start": 99,
                            "end": 107
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 98,
                          "end": 108
                        }
                      ],
                      "start": 96,
                      "end": 110
                    },
                    "start": 94,
                    "end": 110
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 83,
                  "end": 111
                }
              ],
              "start": 76,
              "end": 114
            },
            "declare": false,
            "start": 48,
            "end": 114
          }
        ],
        "start": 22,
        "end": 116
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 125,
            "end": 128
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 129,
                "end": 130
              },
              "value": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 131,
                "end": 134
              },
              "start": 129,
              "end": 134
            }
          ],
          "selfClosing": true,
          "start": 124,
          "end": 137
        },
        "children": [],
        "closingElement": null,
        "start": 124,
        "end": 137
      },
      "directive": null,
      "start": 124,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "span",
            "start": 150,
            "end": 154
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "w",
                "start": 155,
                "end": 156
              },
              "value": {
                "type": "Literal",
                "value": "err",
                "raw": "'err'",
                "start": 157,
                "end": 162
              },
              "start": 155,
              "end": 162
            }
          ],
          "selfClosing": true,
          "start": 149,
          "end": 165
        },
        "children": [],
        "closingElement": null,
        "start": 149,
        "end": 165
      },
      "directive": null,
      "start": 149,
      "end": 166
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 166
}
```
