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
                            "type": "Literal",
                            "value": "data-foo",
                            "raw": "\"data-foo\"",
                            "start": 86,
                            "end": 96
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 99,
                              "end": 105
                            },
                            "start": 97,
                            "end": 105
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 86,
                          "end": 105
                        }
                      ],
                      "start": 84,
                      "end": 107
                    },
                    "start": 82,
                    "end": 107
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 108
                }
              ],
              "start": 73,
              "end": 111
            },
            "declare": false,
            "start": 45,
            "end": 111
          }
        ],
        "start": 19,
        "end": 113
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 113
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
            "start": 125,
            "end": 130
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-foo",
                "start": 131,
                "end": 139
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 141,
                  "end": 143
                },
                "start": 140,
                "end": 144
              },
              "start": 131,
              "end": 144
            }
          ],
          "selfClosing": true,
          "start": 124,
          "end": 147
        },
        "children": [],
        "closingElement": null,
        "start": 124,
        "end": 147
      },
      "directive": null,
      "start": 124,
      "end": 148
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
                "name": "data-foo",
                "start": 163,
                "end": 171
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "32",
                  "raw": "'32'",
                  "start": 173,
                  "end": 177
                },
                "start": 172,
                "end": 178
              },
              "start": 163,
              "end": 178
            }
          ],
          "selfClosing": true,
          "start": 156,
          "end": 181
        },
        "children": [],
        "closingElement": null,
        "start": 156,
        "end": 181
      },
      "directive": null,
      "start": 156,
      "end": 182
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
            "start": 184,
            "end": 189
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-bar",
                "start": 190,
                "end": 198
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "32",
                  "raw": "'32'",
                  "start": 200,
                  "end": 204
                },
                "start": 199,
                "end": 205
              },
              "start": 190,
              "end": 205
            }
          ],
          "selfClosing": true,
          "start": 183,
          "end": 208
        },
        "children": [],
        "closingElement": null,
        "start": 183,
        "end": 208
      },
      "directive": null,
      "start": 183,
      "end": 209
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
            "start": 211,
            "end": 216
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-bar",
                "start": 217,
                "end": 225
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 227,
                  "end": 229
                },
                "start": 226,
                "end": 230
              },
              "start": 217,
              "end": 230
            }
          ],
          "selfClosing": true,
          "start": 210,
          "end": 233
        },
        "children": [],
        "closingElement": null,
        "start": 210,
        "end": 233
      },
      "directive": null,
      "start": 210,
      "end": 234
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 234
}
```
