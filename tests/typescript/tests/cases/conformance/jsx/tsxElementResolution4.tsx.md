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
                    "start": 83,
                    "end": 86
                  },
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
                            "start": 90,
                            "end": 91
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 93,
                              "end": 99
                            },
                            "start": 91,
                            "end": 99
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 90,
                          "end": 100
                        }
                      ],
                      "start": 88,
                      "end": 102
                    },
                    "start": 86,
                    "end": 102
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 83,
                  "end": 103
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "span",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 113
                  },
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
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 117,
                            "end": 118
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 120,
                              "end": 126
                            },
                            "start": 118,
                            "end": 126
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 117,
                          "end": 127
                        }
                      ],
                      "start": 115,
                      "end": 129
                    },
                    "start": 113,
                    "end": 129
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 109,
                  "end": 130
                }
              ],
              "start": 76,
              "end": 133
            },
            "declare": false,
            "start": 48,
            "end": 133
          }
        ],
        "start": 22,
        "end": 135
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 135
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
            "start": 144,
            "end": 147
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 148,
                "end": 149
              },
              "value": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 150,
                "end": 153
              },
              "start": 148,
              "end": 153
            }
          ],
          "selfClosing": true,
          "start": 143,
          "end": 156
        },
        "children": [],
        "closingElement": null,
        "start": 143,
        "end": 156
      },
      "directive": null,
      "start": 143,
      "end": 157
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
            "start": 166,
            "end": 170
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "m",
                "start": 171,
                "end": 172
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "'ok'",
                "start": 173,
                "end": 177
              },
              "start": 171,
              "end": 177
            }
          ],
          "selfClosing": true,
          "start": 165,
          "end": 180
        },
        "children": [],
        "closingElement": null,
        "start": 165,
        "end": 180
      },
      "directive": null,
      "start": 165,
      "end": 181
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
            "start": 193,
            "end": 197
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "q",
                "start": 198,
                "end": 199
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 200,
                "end": 202
              },
              "start": 198,
              "end": 202
            }
          ],
          "selfClosing": true,
          "start": 192,
          "end": 205
        },
        "children": [],
        "closingElement": null,
        "start": 192,
        "end": 205
      },
      "directive": null,
      "start": 192,
      "end": 206
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 206
}
```
