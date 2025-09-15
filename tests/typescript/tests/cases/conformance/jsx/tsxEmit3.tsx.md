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
              "body": [],
              "start": 76,
              "end": 79
            },
            "declare": false,
            "start": 48,
            "end": 79
          }
        ],
        "start": 22,
        "end": 81
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
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
                "start": 111,
                "end": 114
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
                      "start": 117,
                      "end": 128
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
                        "start": 131,
                        "end": 134
                      },
                      "expression": false,
                      "start": 128,
                      "end": 134
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 117,
                    "end": 134
                  }
                ],
                "start": 115,
                "end": 136
              },
              "abstract": false,
              "declare": false,
              "start": 105,
              "end": 136
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 98,
            "end": 136
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
                "start": 155,
                "end": 156
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
                        "start": 174,
                        "end": 177
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 178,
                        "end": 181
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 168,
                      "end": 181
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 161,
                    "end": 181
                  }
                ],
                "start": 157,
                "end": 218
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 145,
              "end": 218
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 138,
            "end": 218
          }
        ],
        "start": 95,
        "end": 220
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 83,
      "end": 220
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 233
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
                  "start": 252,
                  "end": 255
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Foo",
                      "start": 258,
                      "end": 261
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 257,
                    "end": 264
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 257,
                  "end": 264
                }
              ],
              "start": 252,
              "end": 264
            },
            "directive": null,
            "start": 252,
            "end": 265
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
                "start": 285,
                "end": 286
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
                          "start": 307,
                          "end": 310
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 313,
                              "end": 316
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": true,
                            "start": 312,
                            "end": 319
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 312,
                          "end": 319
                        }
                      ],
                      "start": 307,
                      "end": 319
                    },
                    "directive": null,
                    "start": 307,
                    "end": 320
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
                          "start": 340,
                          "end": 343
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Bar",
                              "start": 346,
                              "end": 349
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": true,
                            "start": 345,
                            "end": 352
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 345,
                          "end": 352
                        }
                      ],
                      "start": 340,
                      "end": 352
                    },
                    "directive": null,
                    "start": 340,
                    "end": 353
                  }
                ],
                "start": 287,
                "end": 356
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 275,
              "end": 356
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 268,
            "end": 356
          }
        ],
        "start": 234,
        "end": 359
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 222,
      "end": 359
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 372
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
                    "start": 393,
                    "end": 394
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 398
                  },
                  "optional": false,
                  "computed": false,
                  "start": 393,
                  "end": 398
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
                        "start": 401,
                        "end": 402
                      },
                      "property": {
                        "type": "JSXIdentifier",
                        "name": "Bar",
                        "start": 403,
                        "end": 406
                      },
                      "start": 401,
                      "end": 406
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 400,
                    "end": 409
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 400,
                  "end": 409
                }
              ],
              "start": 393,
              "end": 409
            },
            "directive": null,
            "start": 393,
            "end": 410
          }
        ],
        "start": 373,
        "end": 412
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 361,
      "end": 412
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 425
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
                  "start": 433,
                  "end": 434
                },
                "init": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 437,
                  "end": 440
                },
                "definite": false,
                "start": 433,
                "end": 440
              }
            ],
            "declare": false,
            "start": 429,
            "end": 441
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
                  "start": 460,
                  "end": 463
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Foo",
                      "start": 466,
                      "end": 469
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 465,
                    "end": 472
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 465,
                  "end": 472
                }
              ],
              "start": 460,
              "end": 472
            },
            "directive": null,
            "start": 460,
            "end": 473
          }
        ],
        "start": 426,
        "end": 475
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 414,
      "end": 475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 475
}
```
