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
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 83
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
                            "name": "text",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 94
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 97,
                              "end": 103
                            },
                            "start": 95,
                            "end": 103
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 90,
                          "end": 104
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 108,
                            "end": 113
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 116,
                              "end": 122
                            },
                            "start": 114,
                            "end": 122
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 108,
                          "end": 123
                        }
                      ],
                      "start": 85,
                      "end": 127
                    },
                    "start": 83,
                    "end": 127
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 127
                },
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
                    "start": 131,
                    "end": 135
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 137,
                      "end": 140
                    },
                    "start": 135,
                    "end": 140
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 131,
                  "end": 141
                }
              ],
              "start": 76,
              "end": 144
            },
            "declare": false,
            "start": 48,
            "end": 144
          }
        ],
        "start": 22,
        "end": 146
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 194,
            "end": 197
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "text",
                "start": 198,
                "end": 202
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 204,
                  "end": 206
                },
                "start": 203,
                "end": 207
              },
              "start": 198,
              "end": 207
            }
          ],
          "selfClosing": true,
          "start": 193,
          "end": 210
        },
        "children": [],
        "closingElement": null,
        "start": 193,
        "end": 210
      },
      "directive": null,
      "start": 193,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 259,
            "end": 262
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "width",
                "start": 263,
                "end": 268
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 270,
                  "end": 275
                },
                "start": 269,
                "end": 276
              },
              "start": 263,
              "end": 276
            }
          ],
          "selfClosing": true,
          "start": 258,
          "end": 279
        },
        "children": [],
        "closingElement": null,
        "start": 258,
        "end": 279
      },
      "directive": null,
      "start": 258,
      "end": 280
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "attribs",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 338
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 347
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 349,
                  "end": 352
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 343,
                "end": 352
              }
            ],
            "start": 341,
            "end": 354
          },
          "definite": false,
          "start": 331,
          "end": 354
        }
      ],
      "declare": false,
      "start": 327,
      "end": 355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 357,
            "end": 360
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "attribs",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 372
              },
              "start": 361,
              "end": 373
            }
          ],
          "selfClosing": true,
          "start": 356,
          "end": 376
        },
        "children": [],
        "closingElement": null,
        "start": 356,
        "end": 376
      },
      "directive": null,
      "start": 356,
      "end": 377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "span",
            "start": 398,
            "end": 402
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 403,
                "end": 406
              },
              "value": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 407,
                "end": 412
              },
              "start": 403,
              "end": 412
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "bar",
                "start": 413,
                "end": 416
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 418,
                  "end": 423
                },
                "start": 417,
                "end": 424
              },
              "start": 413,
              "end": 424
            }
          ],
          "selfClosing": true,
          "start": 397,
          "end": 427
        },
        "children": [],
        "closingElement": null,
        "start": 397,
        "end": 427
      },
      "directive": null,
      "start": 397,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 428
}
```
