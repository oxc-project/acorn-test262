__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 337,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "span",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
      "end": 223,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 222,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 158,
            "decorators": [],
            "name": "FooComponent",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 161,
            "end": 222,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 162,
                "end": 193,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 169,
                    "end": 193,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 171,
                        "end": 191,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 174,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 174,
                          "end": 191,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 176,
                            "end": 191,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 176,
                                "end": 179,
                                "literal": {
                                  "type": "Literal",
                                  "start": 176,
                                  "end": 179,
                                  "value": "A",
                                  "raw": "\"A\""
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 182,
                                "end": 185,
                                "literal": {
                                  "type": "Literal",
                                  "start": 182,
                                  "end": 185,
                                  "value": "B",
                                  "raw": "\"B\""
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 188,
                                "end": 191,
                                "literal": {
                                  "type": "Literal",
                                  "start": 188,
                                  "end": 191,
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
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 198,
              "end": 222,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 198,
                "end": 204,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 199,
                  "end": 203,
                  "name": "span"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 204,
                  "end": 215,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 205,
                    "end": 214,
                    "object": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 210,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 214,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 215,
                "end": 222,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 217,
                  "end": 221,
                  "name": "span"
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 252,
      "expression": {
        "type": "JSXElement",
        "start": 225,
        "end": 251,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 225,
          "end": 251,
          "name": {
            "type": "JSXIdentifier",
            "start": 226,
            "end": 238,
            "name": "FooComponent"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 239,
              "end": 248,
              "name": {
                "type": "JSXIdentifier",
                "start": 239,
                "end": 242,
                "name": "foo"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 243,
                "end": 248,
                "expression": {
                  "type": "Literal",
                  "start": 244,
                  "end": 247,
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 280,
      "expression": {
        "type": "JSXElement",
        "start": 253,
        "end": 279,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 253,
          "end": 279,
          "name": {
            "type": "JSXIdentifier",
            "start": 254,
            "end": 266,
            "name": "FooComponent"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 267,
              "end": 274,
              "name": {
                "type": "JSXIdentifier",
                "start": 267,
                "end": 270,
                "name": "foo"
              },
              "value": {
                "type": "Literal",
                "start": 271,
                "end": 274,
                "value": "A",
                "raw": "\"A\""
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 309,
      "expression": {
        "type": "JSXElement",
        "start": 282,
        "end": 308,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 282,
          "end": 308,
          "name": {
            "type": "JSXIdentifier",
            "start": 283,
            "end": 295,
            "name": "FooComponent"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 296,
              "end": 305,
              "name": {
                "type": "JSXIdentifier",
                "start": 296,
                "end": 299,
                "name": "foo"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 300,
                "end": 305,
                "expression": {
                  "type": "Literal",
                  "start": 301,
                  "end": 304,
                  "value": "f",
                  "raw": "\"f\""
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 310,
      "end": 337,
      "expression": {
        "type": "JSXElement",
        "start": 310,
        "end": 336,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 310,
          "end": 336,
          "name": {
            "type": "JSXIdentifier",
            "start": 311,
            "end": 323,
            "name": "FooComponent"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 324,
              "end": 331,
              "name": {
                "type": "JSXIdentifier",
                "start": 324,
                "end": 327,
                "name": "foo"
              },
              "value": {
                "type": "Literal",
                "start": 328,
                "end": 331,
                "value": "f",
                "raw": "\"f\""
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
