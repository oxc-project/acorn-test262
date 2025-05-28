__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 428,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 146,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 25,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 43,
              "end": 46,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 48,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 75,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 76,
              "end": 144,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 80,
                  "end": 127,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 83,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 85,
                      "end": 127,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 90,
                          "end": 104,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 94,
                            "decorators": [],
                            "name": "text",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 95,
                            "end": 103,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 97,
                              "end": 103
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 108,
                          "end": 123,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 113,
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 114,
                            "end": 122,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 116,
                              "end": 122
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 131,
                  "end": 141,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 135,
                    "decorators": [],
                    "name": "span",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 137,
                      "end": 140
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 211,
      "expression": {
        "type": "JSXElement",
        "start": 193,
        "end": 210,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 193,
          "end": 210,
          "name": {
            "type": "JSXIdentifier",
            "start": 194,
            "end": 197,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 198,
              "end": 207,
              "name": {
                "type": "JSXIdentifier",
                "start": 198,
                "end": 202,
                "name": "text"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 203,
                "end": 207,
                "expression": {
                  "type": "Literal",
                  "start": 204,
                  "end": 206,
                  "value": 42,
                  "raw": "42"
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
      "start": 258,
      "end": 280,
      "expression": {
        "type": "JSXElement",
        "start": 258,
        "end": 279,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 258,
          "end": 279,
          "name": {
            "type": "JSXIdentifier",
            "start": 259,
            "end": 262,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 263,
              "end": 276,
              "name": {
                "type": "JSXIdentifier",
                "start": 263,
                "end": 268,
                "name": "width"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 269,
                "end": 276,
                "expression": {
                  "type": "Literal",
                  "start": 270,
                  "end": 275,
                  "value": "foo",
                  "raw": "'foo'"
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
      "type": "VariableDeclaration",
      "start": 327,
      "end": 355,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 338,
            "decorators": [],
            "name": "attribs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 341,
            "end": 354,
            "properties": [
              {
                "type": "Property",
                "start": 343,
                "end": 352,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 347,
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 349,
                  "end": 352,
                  "value": 100,
                  "raw": "100"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 377,
      "expression": {
        "type": "JSXElement",
        "start": 356,
        "end": 376,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 356,
          "end": 376,
          "name": {
            "type": "JSXIdentifier",
            "start": 357,
            "end": 360,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 361,
              "end": 373,
              "argument": {
                "type": "Identifier",
                "start": 365,
                "end": 372,
                "decorators": [],
                "name": "attribs",
                "optional": false,
                "typeAnnotation": null
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
      "start": 397,
      "end": 428,
      "expression": {
        "type": "JSXElement",
        "start": 397,
        "end": 427,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 397,
          "end": 427,
          "name": {
            "type": "JSXIdentifier",
            "start": 398,
            "end": 402,
            "name": "span"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 403,
              "end": 412,
              "name": {
                "type": "JSXIdentifier",
                "start": 403,
                "end": 406,
                "name": "foo"
              },
              "value": {
                "type": "Literal",
                "start": 407,
                "end": 412,
                "value": "bar",
                "raw": "'bar'"
              }
            },
            {
              "type": "JSXAttribute",
              "start": 413,
              "end": 424,
              "name": {
                "type": "JSXIdentifier",
                "start": 413,
                "end": 416,
                "name": "bar"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 417,
                "end": 424,
                "expression": {
                  "type": "Literal",
                  "start": 418,
                  "end": 423,
                  "value": "foo",
                  "raw": "'foo'"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
