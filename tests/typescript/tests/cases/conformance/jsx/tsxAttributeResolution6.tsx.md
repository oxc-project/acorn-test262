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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 90
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 93,
                              "end": 100
                            },
                            "start": 91,
                            "end": 100
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 89,
                          "end": 101
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 102,
                            "end": 103
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 106,
                              "end": 112
                            },
                            "start": 104,
                            "end": 112
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 102,
                          "end": 112
                        }
                      ],
                      "start": 87,
                      "end": 113
                    },
                    "start": 85,
                    "end": 113
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 114
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 122
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
                            "start": 126,
                            "end": 127
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 129,
                              "end": 136
                            },
                            "start": 127,
                            "end": 136
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 126,
                          "end": 137
                        }
                      ],
                      "start": 124,
                      "end": 139
                    },
                    "start": 122,
                    "end": 139
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 117,
                  "end": 140
                }
              ],
              "start": 76,
              "end": 143
            },
            "declare": false,
            "start": 48,
            "end": 143
          }
        ],
        "start": 22,
        "end": 145
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 145
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
            "start": 157,
            "end": 162
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "s",
                "start": 163,
                "end": 164
              },
              "value": null,
              "start": 163,
              "end": 164
            }
          ],
          "selfClosing": true,
          "start": 156,
          "end": 167
        },
        "children": [],
        "closingElement": null,
        "start": 156,
        "end": 167
      },
      "directive": null,
      "start": 156,
      "end": 168
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
            "start": 170,
            "end": 175
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 176,
                "end": 177
              },
              "value": {
                "type": "Literal",
                "value": "true",
                "raw": "'true'",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            }
          ],
          "selfClosing": true,
          "start": 169,
          "end": 187
        },
        "children": [],
        "closingElement": null,
        "start": 169,
        "end": 187
      },
      "directive": null,
      "start": 169,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 190,
            "end": 195
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 189,
          "end": 198
        },
        "children": [],
        "closingElement": null,
        "start": 189,
        "end": 198
      },
      "directive": null,
      "start": 189,
      "end": 199
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
            "start": 208,
            "end": 213
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 214,
                "end": 215
              },
              "value": null,
              "start": 214,
              "end": 215
            }
          ],
          "selfClosing": true,
          "start": 207,
          "end": 218
        },
        "children": [],
        "closingElement": null,
        "start": 207,
        "end": 218
      },
      "directive": null,
      "start": 207,
      "end": 219
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
            "start": 221,
            "end": 226
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 227,
                "end": 228
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 230,
                  "end": 235
                },
                "start": 229,
                "end": 236
              },
              "start": 227,
              "end": 236
            }
          ],
          "selfClosing": true,
          "start": 220,
          "end": 239
        },
        "children": [],
        "closingElement": null,
        "start": 220,
        "end": 239
      },
      "directive": null,
      "start": 220,
      "end": 240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 242,
            "end": 247
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 248,
                "end": 249
              },
              "value": null,
              "start": 248,
              "end": 249
            }
          ],
          "selfClosing": true,
          "start": 241,
          "end": 252
        },
        "children": [],
        "closingElement": null,
        "start": 241,
        "end": 252
      },
      "directive": null,
      "start": 241,
      "end": 253
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 253
}
```
