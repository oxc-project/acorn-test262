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
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
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
                            "type": "Literal",
                            "value": "data-foo",
                            "raw": "\"data-foo\"",
                            "start": 89,
                            "end": 99
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 102,
                              "end": 108
                            },
                            "start": 100,
                            "end": 108
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 89,
                          "end": 108
                        }
                      ],
                      "start": 87,
                      "end": 110
                    },
                    "start": 85,
                    "end": 110
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
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
            "name": "test1",
            "start": 128,
            "end": 133
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-foo",
                "start": 134,
                "end": 142
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 144,
                  "end": 146
                },
                "start": 143,
                "end": 147
              },
              "start": 134,
              "end": 147
            }
          ],
          "selfClosing": true,
          "start": 127,
          "end": 150
        },
        "children": [],
        "closingElement": null,
        "start": 127,
        "end": 150
      },
      "directive": null,
      "start": 127,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 160,
            "end": 165
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-foo",
                "start": 166,
                "end": 174
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "32",
                  "raw": "'32'",
                  "start": 176,
                  "end": 180
                },
                "start": 175,
                "end": 181
              },
              "start": 166,
              "end": 181
            }
          ],
          "selfClosing": true,
          "start": 159,
          "end": 184
        },
        "children": [],
        "closingElement": null,
        "start": 159,
        "end": 184
      },
      "directive": null,
      "start": 159,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 187,
            "end": 192
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-bar",
                "start": 193,
                "end": 201
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "32",
                  "raw": "'32'",
                  "start": 203,
                  "end": 207
                },
                "start": 202,
                "end": 208
              },
              "start": 193,
              "end": 208
            }
          ],
          "selfClosing": true,
          "start": 186,
          "end": 211
        },
        "children": [],
        "closingElement": null,
        "start": 186,
        "end": 211
      },
      "directive": null,
      "start": 186,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 214,
            "end": 219
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-bar",
                "start": 220,
                "end": 228
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 230,
                  "end": 232
                },
                "start": 229,
                "end": 233
              },
              "start": 220,
              "end": 233
            }
          ],
          "selfClosing": true,
          "start": 213,
          "end": 236
        },
        "children": [],
        "closingElement": null,
        "start": 213,
        "end": 236
      },
      "directive": null,
      "start": 213,
      "end": 237
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 237
}
```
