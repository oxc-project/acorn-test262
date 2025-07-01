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
              "body": [],
              "start": 73,
              "end": 76
            },
            "declare": false,
            "start": 45,
            "end": 76
          }
        ],
        "start": 19,
        "end": 78
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 88
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 108
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 122
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 125,
                        "end": 128
                      },
                      "expression": false,
                      "start": 122,
                      "end": 128
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 111,
                    "end": 128
                  }
                ],
                "start": 109,
                "end": 130
              },
              "abstract": false,
              "declare": false,
              "start": 99,
              "end": 130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 130
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 168
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 169,
                        "end": 172
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 159,
                      "end": 172
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 152,
                    "end": 172
                  }
                ],
                "start": 148,
                "end": 209
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 139,
              "end": 209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 132,
            "end": 209
          }
        ],
        "start": 89,
        "end": 211
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 80,
      "end": 211
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 221
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 243
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Foo",
                      "start": 246,
                      "end": 249
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 245,
                    "end": 252
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 245,
                  "end": 252
                }
              ],
              "start": 240,
              "end": 252
            },
            "directive": null,
            "start": 240,
            "end": 253
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "SequenceExpression",
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 292,
                          "end": 295
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 298,
                              "end": 301
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": true,
                            "start": 297,
                            "end": 304
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 297,
                          "end": 304
                        }
                      ],
                      "start": 292,
                      "end": 304
                    },
                    "directive": null,
                    "start": 292,
                    "end": 305
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "SequenceExpression",
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 328
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Bar",
                              "start": 331,
                              "end": 334
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": true,
                            "start": 330,
                            "end": 337
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 330,
                          "end": 337
                        }
                      ],
                      "start": 325,
                      "end": 337
                    },
                    "directive": null,
                    "start": 325,
                    "end": 338
                  }
                ],
                "start": 272,
                "end": 341
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 263,
              "end": 341
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 256,
            "end": 341
          }
        ],
        "start": 222,
        "end": 344
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 213,
      "end": 344
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 354
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 376
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 380
                  },
                  "optional": false,
                  "computed": false,
                  "start": 375,
                  "end": 380
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXMemberExpression",
                      "object": {
                        "type": "JSXIdentifier",
                        "name": "S",
                        "start": 383,
                        "end": 384
                      },
                      "property": {
                        "type": "JSXIdentifier",
                        "name": "Bar",
                        "start": 385,
                        "end": 388
                      },
                      "start": 383,
                      "end": 388
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 382,
                    "end": 391
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 382,
                  "end": 391
                }
              ],
              "start": 375,
              "end": 391
            },
            "directive": null,
            "start": 375,
            "end": 392
          }
        ],
        "start": 355,
        "end": 394
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 346,
      "end": 394
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 404
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 413
                },
                "init": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 416,
                  "end": 419
                },
                "definite": false,
                "start": 412,
                "end": 419
              }
            ],
            "declare": false,
            "start": 408,
            "end": 420
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 442
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Foo",
                      "start": 445,
                      "end": 448
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 444,
                    "end": 451
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 444,
                  "end": 451
                }
              ],
              "start": 439,
              "end": 451
            },
            "directive": null,
            "start": 439,
            "end": 452
          }
        ],
        "start": 405,
        "end": 454
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 396,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
}
```
