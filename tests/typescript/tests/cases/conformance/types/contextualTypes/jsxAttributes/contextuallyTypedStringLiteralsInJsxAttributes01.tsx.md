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
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 54
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
                      "name": "span",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 69
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 71,
                        "end": 73
                      },
                      "start": 69,
                      "end": 73
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 65,
                    "end": 74
                  }
                ],
                "start": 55,
                "end": 80
              },
              "declare": false,
              "start": 27,
              "end": 80
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 80
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 109
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 123
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 126,
                        "end": 129
                      },
                      "start": 124,
                      "end": 129
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 114,
                    "end": 130
                  }
                ],
                "start": 110,
                "end": 136
              },
              "declare": false,
              "start": 92,
              "end": 136
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 85,
            "end": 136
          }
        ],
        "start": 14,
        "end": 138
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 158
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 174
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "A",
                                  "raw": "\"A\"",
                                  "start": 176,
                                  "end": 179
                                },
                                "start": 176,
                                "end": 179
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "B",
                                  "raw": "\"B\"",
                                  "start": 182,
                                  "end": 185
                                },
                                "start": 182,
                                "end": 185
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "C",
                                  "raw": "\"C\"",
                                  "start": 188,
                                  "end": 191
                                },
                                "start": 188,
                                "end": 191
                              }
                            ],
                            "start": 176,
                            "end": 191
                          },
                          "start": 174,
                          "end": 191
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 171,
                        "end": 191
                      }
                    ],
                    "start": 169,
                    "end": 193
                  },
                  "start": 167,
                  "end": 193
                },
                "start": 162,
                "end": 193
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 199,
                  "end": 203
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 198,
                "end": 204
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 210
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 214
                    },
                    "optional": false,
                    "computed": false,
                    "start": 205,
                    "end": 214
                  },
                  "start": 204,
                  "end": 215
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 217,
                  "end": 221
                },
                "start": 215,
                "end": 222
              },
              "start": 198,
              "end": 222
            },
            "id": null,
            "generator": false,
            "start": 161,
            "end": 222
          },
          "definite": false,
          "start": 146,
          "end": 222
        }
      ],
      "declare": false,
      "start": 140,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "FooComponent",
            "start": 226,
            "end": 238
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 239,
                "end": 242
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 244,
                  "end": 247
                },
                "start": 243,
                "end": 248
              },
              "start": 239,
              "end": 248
            }
          ],
          "selfClosing": true,
          "start": 225,
          "end": 251
        },
        "children": [],
        "closingElement": null,
        "start": 225,
        "end": 251
      },
      "directive": null,
      "start": 225,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "FooComponent",
            "start": 254,
            "end": 266
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 267,
                "end": 270
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 271,
                "end": 274
              },
              "start": 267,
              "end": 274
            }
          ],
          "selfClosing": true,
          "start": 253,
          "end": 279
        },
        "children": [],
        "closingElement": null,
        "start": 253,
        "end": 279
      },
      "directive": null,
      "start": 253,
      "end": 280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "FooComponent",
            "start": 283,
            "end": 295
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 296,
                "end": 299
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "f",
                  "raw": "\"f\"",
                  "start": 301,
                  "end": 304
                },
                "start": 300,
                "end": 305
              },
              "start": 296,
              "end": 305
            }
          ],
          "selfClosing": true,
          "start": 282,
          "end": 308
        },
        "children": [],
        "closingElement": null,
        "start": 282,
        "end": 308
      },
      "directive": null,
      "start": 282,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "FooComponent",
            "start": 311,
            "end": 323
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 324,
                "end": 327
              },
              "value": {
                "type": "Literal",
                "value": "f",
                "raw": "\"f\"",
                "start": 328,
                "end": 331
              },
              "start": 324,
              "end": 331
            }
          ],
          "selfClosing": true,
          "start": 310,
          "end": 336
        },
        "children": [],
        "closingElement": null,
        "start": 310,
        "end": 336
      },
      "directive": null,
      "start": 310,
      "end": 337
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 337
}
```
