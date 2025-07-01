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
                    "start": 80,
                    "end": 83
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
                            "start": 87,
                            "end": 88
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 90,
                              "end": 96
                            },
                            "start": 88,
                            "end": 96
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 87,
                          "end": 97
                        }
                      ],
                      "start": 85,
                      "end": 99
                    },
                    "start": 83,
                    "end": 99
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 100
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
                    "start": 106,
                    "end": 110
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
                            "start": 114,
                            "end": 115
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 117,
                              "end": 123
                            },
                            "start": 115,
                            "end": 123
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 114,
                          "end": 124
                        }
                      ],
                      "start": 112,
                      "end": 126
                    },
                    "start": 110,
                    "end": 126
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 106,
                  "end": 127
                }
              ],
              "start": 73,
              "end": 130
            },
            "declare": false,
            "start": 45,
            "end": 130
          }
        ],
        "start": 19,
        "end": 132
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 132
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
            "start": 141,
            "end": 144
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 145,
                "end": 146
              },
              "value": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 147,
                "end": 150
              },
              "start": 145,
              "end": 150
            }
          ],
          "selfClosing": true,
          "start": 140,
          "end": 153
        },
        "children": [],
        "closingElement": null,
        "start": 140,
        "end": 153
      },
      "directive": null,
      "start": 140,
      "end": 154
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
            "start": 163,
            "end": 167
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "m",
                "start": 168,
                "end": 169
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "'ok'",
                "start": 170,
                "end": 174
              },
              "start": 168,
              "end": 174
            }
          ],
          "selfClosing": true,
          "start": 162,
          "end": 177
        },
        "children": [],
        "closingElement": null,
        "start": 162,
        "end": 177
      },
      "directive": null,
      "start": 162,
      "end": 178
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
            "start": 190,
            "end": 194
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "q",
                "start": 195,
                "end": 196
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 197,
                "end": 199
              },
              "start": 195,
              "end": 199
            }
          ],
          "selfClosing": true,
          "start": 189,
          "end": 202
        },
        "children": [],
        "closingElement": null,
        "start": 189,
        "end": 202
      },
      "directive": null,
      "start": 189,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
