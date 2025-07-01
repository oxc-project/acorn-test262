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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 149
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
                          "start": 162,
                          "end": 165
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
                                  "start": 167,
                                  "end": 170
                                },
                                "start": 167,
                                "end": 170
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "B",
                                  "raw": "\"B\"",
                                  "start": 173,
                                  "end": 176
                                },
                                "start": 173,
                                "end": 176
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "C",
                                  "raw": "\"C\"",
                                  "start": 179,
                                  "end": 182
                                },
                                "start": 179,
                                "end": 182
                              }
                            ],
                            "start": 167,
                            "end": 182
                          },
                          "start": 165,
                          "end": 182
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 162,
                        "end": 182
                      }
                    ],
                    "start": 160,
                    "end": 184
                  },
                  "start": 158,
                  "end": 184
                },
                "start": 153,
                "end": 184
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
                  "start": 190,
                  "end": 194
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 189,
                "end": 195
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
                      "start": 196,
                      "end": 201
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 205
                    },
                    "optional": false,
                    "computed": false,
                    "start": 196,
                    "end": 205
                  },
                  "start": 195,
                  "end": 206
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 208,
                  "end": 212
                },
                "start": 206,
                "end": 213
              },
              "start": 189,
              "end": 213
            },
            "id": null,
            "generator": false,
            "start": 152,
            "end": 213
          },
          "definite": false,
          "start": 146,
          "end": 213
        }
      ],
      "declare": false,
      "start": 140,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 229
                },
                "value": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 231,
                  "end": 234
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 234
              }
            ],
            "start": 220,
            "end": 236
          }
        ],
        "optional": false,
        "start": 216,
        "end": 237
      },
      "directive": null,
      "start": 216,
      "end": 238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 241,
            "end": 244
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 245,
                "end": 248
              },
              "value": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 249,
                "end": 252
              },
              "start": 245,
              "end": 252
            }
          ],
          "selfClosing": true,
          "start": 240,
          "end": 255
        },
        "children": [],
        "closingElement": null,
        "start": 240,
        "end": 255
      },
      "directive": null,
      "start": 240,
      "end": 255
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 255
}
```
