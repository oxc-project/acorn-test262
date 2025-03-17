__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 455,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 78,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 76,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 80,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 89,
        "end": 211,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 92,
            "end": 130,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 99,
              "end": 130,
              "id": {
                "type": "Identifier",
                "start": 105,
                "end": 108,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 109,
                "end": 130,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 111,
                    "end": 128,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 122,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 122,
                      "end": 128,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 125,
                        "end": 128,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 132,
            "end": 209,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 139,
              "end": 209,
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 148,
                "end": 209,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 152,
                    "end": 172,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 159,
                      "end": 172,
                      "id": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 168,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 169,
                        "end": 172,
                        "body": []
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 213,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 221,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 222,
        "end": 344,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 240,
            "end": 253,
            "expression": {
              "type": "SequenceExpression",
              "start": 240,
              "end": 252,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "JSXElement",
                  "start": 245,
                  "end": 252,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 245,
                    "end": 252,
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 246,
                      "end": 249,
                      "name": "Foo"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 256,
            "end": 341,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 263,
              "end": 341,
              "id": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 272,
                "end": 341,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 292,
                    "end": 305,
                    "expression": {
                      "type": "SequenceExpression",
                      "start": 292,
                      "end": 304,
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 292,
                          "end": 295,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "JSXElement",
                          "start": 297,
                          "end": 304,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 297,
                            "end": 304,
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 298,
                              "end": 301,
                              "name": "Foo"
                            },
                            "selfClosing": true,
                            "typeArguments": null
                          },
                          "closingElement": null,
                          "children": []
                        }
                      ]
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 325,
                    "end": 338,
                    "expression": {
                      "type": "SequenceExpression",
                      "start": 325,
                      "end": 337,
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 325,
                          "end": 328,
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "JSXElement",
                          "start": 330,
                          "end": 337,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 330,
                            "end": 337,
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 331,
                              "end": 334,
                              "name": "Bar"
                            },
                            "selfClosing": true,
                            "typeArguments": null
                          },
                          "closingElement": null,
                          "children": []
                        }
                      ]
                    },
                    "directive": null
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 346,
      "end": 394,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 354,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 355,
        "end": 394,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 375,
            "end": 392,
            "expression": {
              "type": "SequenceExpression",
              "start": 375,
              "end": 391,
              "expressions": [
                {
                  "type": "MemberExpression",
                  "start": 375,
                  "end": 380,
                  "object": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 380,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "JSXElement",
                  "start": 382,
                  "end": 391,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 382,
                    "end": 391,
                    "attributes": [],
                    "name": {
                      "type": "JSXMemberExpression",
                      "start": 383,
                      "end": 388,
                      "object": {
                        "type": "JSXIdentifier",
                        "start": 383,
                        "end": 384,
                        "name": "S"
                      },
                      "property": {
                        "type": "JSXIdentifier",
                        "start": 385,
                        "end": 388,
                        "name": "Bar"
                      }
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                }
              ]
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 396,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 404,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 405,
        "end": 454,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 408,
            "end": 420,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 412,
                "end": 419,
                "id": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 413,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 416,
                  "end": 419,
                  "value": 100,
                  "raw": "100"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 439,
            "end": 452,
            "expression": {
              "type": "SequenceExpression",
              "start": 439,
              "end": 451,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 439,
                  "end": 442,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "JSXElement",
                  "start": 444,
                  "end": 451,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 444,
                    "end": 451,
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 445,
                      "end": 448,
                      "name": "Foo"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                }
              ]
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
