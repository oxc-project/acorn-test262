__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 138,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 80,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 80,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 54,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 55,
                "end": 80,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 65,
                    "end": 74,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 69,
                      "name": "span",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 85,
            "end": 136,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 92,
              "end": 136,
              "id": {
                "type": "Identifier",
                "start": 102,
                "end": 109,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 110,
                "end": 136,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 114,
                    "end": 130,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 123,
                      "name": "something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 124,
                      "end": 129,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 126,
                        "end": 129
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 149,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 152,
            "end": 213,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 184,
                "name": "props",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 165,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                  "value": "A",
                                  "raw": "\"A\""
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
                                  "value": "B",
                                  "raw": "\"B\""
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
                                  "value": "C",
                                  "raw": "\"C\""
                                }
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 189,
              "end": 213,
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
              },
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
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 195,
                  "end": 206,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 196,
                    "end": 205,
                    "object": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 201,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 205,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 238,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 237,
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 219,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 229,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 231,
                  "end": 234,
                  "value": "B",
                  "raw": "\"B\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 255,
      "expression": {
        "type": "JSXElement",
        "start": 240,
        "end": 255,
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
                "value": "B",
                "raw": "\"B\""
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
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
