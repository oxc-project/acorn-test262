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
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 82
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
                            "start": 86,
                            "end": 87
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 90,
                              "end": 97
                            },
                            "start": 88,
                            "end": 97
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 86,
                          "end": 98
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
                            "start": 99,
                            "end": 100
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 103,
                              "end": 109
                            },
                            "start": 101,
                            "end": 109
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 99,
                          "end": 109
                        }
                      ],
                      "start": 84,
                      "end": 110
                    },
                    "start": 82,
                    "end": 110
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 111
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
                    "start": 114,
                    "end": 119
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
                            "start": 123,
                            "end": 124
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 126,
                              "end": 133
                            },
                            "start": 124,
                            "end": 133
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 123,
                          "end": 134
                        }
                      ],
                      "start": 121,
                      "end": 136
                    },
                    "start": 119,
                    "end": 136
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 114,
                  "end": 137
                }
              ],
              "start": 73,
              "end": 140
            },
            "declare": false,
            "start": 45,
            "end": 140
          }
        ],
        "start": 19,
        "end": 142
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 142
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
            "start": 154,
            "end": 159
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "s",
                "start": 160,
                "end": 161
              },
              "value": null,
              "start": 160,
              "end": 161
            }
          ],
          "selfClosing": true,
          "start": 153,
          "end": 164
        },
        "children": [],
        "closingElement": null,
        "start": 153,
        "end": 164
      },
      "directive": null,
      "start": 153,
      "end": 165
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
            "start": 167,
            "end": 172
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 173,
                "end": 174
              },
              "value": {
                "type": "Literal",
                "value": "true",
                "raw": "'true'",
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            }
          ],
          "selfClosing": true,
          "start": 166,
          "end": 184
        },
        "children": [],
        "closingElement": null,
        "start": 166,
        "end": 184
      },
      "directive": null,
      "start": 166,
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
            "name": "test2",
            "start": 187,
            "end": 192
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 186,
          "end": 195
        },
        "children": [],
        "closingElement": null,
        "start": 186,
        "end": 195
      },
      "directive": null,
      "start": 186,
      "end": 196
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
            "start": 205,
            "end": 210
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 211,
                "end": 212
              },
              "value": null,
              "start": 211,
              "end": 212
            }
          ],
          "selfClosing": true,
          "start": 204,
          "end": 215
        },
        "children": [],
        "closingElement": null,
        "start": 204,
        "end": 215
      },
      "directive": null,
      "start": 204,
      "end": 216
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
            "start": 218,
            "end": 223
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 224,
                "end": 225
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 227,
                  "end": 232
                },
                "start": 226,
                "end": 233
              },
              "start": 224,
              "end": 233
            }
          ],
          "selfClosing": true,
          "start": 217,
          "end": 236
        },
        "children": [],
        "closingElement": null,
        "start": 217,
        "end": 236
      },
      "directive": null,
      "start": 217,
      "end": 237
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
            "start": 239,
            "end": 244
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 245,
                "end": 246
              },
              "value": null,
              "start": 245,
              "end": 246
            }
          ],
          "selfClosing": true,
          "start": 238,
          "end": 249
        },
        "children": [],
        "closingElement": null,
        "start": 238,
        "end": 249
      },
      "directive": null,
      "start": 238,
      "end": 250
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 250
}
```
