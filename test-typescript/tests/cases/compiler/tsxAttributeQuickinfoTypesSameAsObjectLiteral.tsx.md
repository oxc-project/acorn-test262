__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 138,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 138,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 80,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 80,
              "body": {
                "type": "TSInterfaceBody",
                "start": 55,
                "end": 80,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 65,
                    "end": 74,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 69,
                      "decorators": [],
                      "name": "span",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 71,
                        "end": 73,
                        "members": []
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 54,
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 85,
            "end": 136,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 92,
              "end": 136,
              "body": {
                "type": "TSInterfaceBody",
                "start": 110,
                "end": 136,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 114,
                    "end": 130,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 123,
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 124,
                      "end": 129,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 126,
                        "end": 129
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 102,
                "end": 109,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 149,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 152,
            "end": 213,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 189,
              "end": 213,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 195,
                  "end": 206,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 196,
                    "end": 205,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 201,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 205,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 206,
                "end": 213,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 208,
                  "end": 212,
                  "name": "span"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 189,
                "end": 195,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 190,
                  "end": 194,
                  "name": "span"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 184,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 184,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 160,
                    "end": 184,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 162,
                        "end": 182,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 165,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 165,
                          "end": 182,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 167,
                            "end": 182,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 167,
                                "end": 170,
                                "literal": {
                                  "type": "Literal",
                                  "start": 167,
                                  "end": 170,
                                  "raw": "\"A\"",
                                  "value": "A",
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 173,
                                "end": 176,
                                "literal": {
                                  "type": "Literal",
                                  "start": 173,
                                  "end": 176,
                                  "raw": "\"B\"",
                                  "value": "B",
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 179,
                                "end": 182,
                                "literal": {
                                  "type": "Literal",
                                  "start": 179,
                                  "end": 182,
                                  "raw": "\"C\"",
                                  "value": "C",
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 238,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 237,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 220,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 226,
                "end": 234,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 229,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 231,
                  "end": 234,
                  "raw": "\"B\"",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 219,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 255,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 240,
        "end": 255,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 240,
          "end": 255,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 245,
              "end": 252,
              "name": {
                "type": "JSXIdentifier",
                "start": 245,
                "end": 248,
                "name": "foo"
              },
              "value": {
                "type": "Literal",
                "start": 249,
                "end": 252,
                "raw": "\"B\"",
                "value": "B",
                "regex": null,
                "bigint": null
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 241,
            "end": 244,
            "name": "Foo"
          },
          "selfClosing": true,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
