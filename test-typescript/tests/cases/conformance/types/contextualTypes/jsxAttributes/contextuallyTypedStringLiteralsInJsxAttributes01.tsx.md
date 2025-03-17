__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 357,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 20,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 34,
        "end": 158,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 100,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 47,
              "end": 100,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 74,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 75,
                "end": 100,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 85,
                    "end": 94,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 89,
                      "name": "span",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 91,
                        "end": 93,
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
            "start": 105,
            "end": 156,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 112,
              "end": 156,
              "id": {
                "type": "Identifier",
                "start": 122,
                "end": 129,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 130,
                "end": 156,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 134,
                    "end": 150,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 143,
                      "name": "something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 144,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 146,
                        "end": 149
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
      "start": 160,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 178,
            "name": "FooComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 181,
            "end": 242,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 182,
                "end": 213,
                "name": "props",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 187,
                  "end": 213,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 189,
                    "end": 213,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 191,
                        "end": 211,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 194,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 194,
                          "end": 211,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 196,
                            "end": 211,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 196,
                                "end": 199,
                                "literal": {
                                  "type": "Literal",
                                  "start": 196,
                                  "end": 199,
                                  "value": "A",
                                  "raw": "\"A\""
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 202,
                                "end": 205,
                                "literal": {
                                  "type": "Literal",
                                  "start": 202,
                                  "end": 205,
                                  "value": "B",
                                  "raw": "\"B\""
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 208,
                                "end": 211,
                                "literal": {
                                  "type": "Literal",
                                  "start": 208,
                                  "end": 211,
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
              "start": 218,
              "end": 242,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 218,
                "end": 224,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 219,
                  "end": 223,
                  "name": "span"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 235,
                "end": 242,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 237,
                  "end": 241,
                  "name": "span"
                }
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 224,
                  "end": 235,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 225,
                    "end": 234,
                    "object": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 230,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 234,
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
      "start": 245,
      "end": 272,
      "expression": {
        "type": "JSXElement",
        "start": 245,
        "end": 271,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 245,
          "end": 271,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 259,
              "end": 268,
              "name": {
                "type": "JSXIdentifier",
                "start": 259,
                "end": 262,
                "name": "foo"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 263,
                "end": 268,
                "expression": {
                  "type": "Literal",
                  "start": 264,
                  "end": 267,
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 246,
            "end": 258,
            "name": "FooComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 300,
      "expression": {
        "type": "JSXElement",
        "start": 273,
        "end": 299,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 273,
          "end": 299,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 287,
              "end": 294,
              "name": {
                "type": "JSXIdentifier",
                "start": 287,
                "end": 290,
                "name": "foo"
              },
              "value": {
                "type": "Literal",
                "start": 291,
                "end": 294,
                "value": "A",
                "raw": "\"A\""
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 274,
            "end": 286,
            "name": "FooComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 329,
      "expression": {
        "type": "JSXElement",
        "start": 302,
        "end": 328,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 302,
          "end": 328,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 316,
              "end": 325,
              "name": {
                "type": "JSXIdentifier",
                "start": 316,
                "end": 319,
                "name": "foo"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 320,
                "end": 325,
                "expression": {
                  "type": "Literal",
                  "start": 321,
                  "end": 324,
                  "value": "f",
                  "raw": "\"f\""
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 303,
            "end": 315,
            "name": "FooComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 357,
      "expression": {
        "type": "JSXElement",
        "start": 330,
        "end": 356,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 330,
          "end": 356,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 344,
              "end": 351,
              "name": {
                "type": "JSXIdentifier",
                "start": 344,
                "end": 347,
                "name": "foo"
              },
              "value": {
                "type": "Literal",
                "start": 348,
                "end": 351,
                "value": "f",
                "raw": "\"f\""
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 331,
            "end": 343,
            "name": "FooComponent"
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
