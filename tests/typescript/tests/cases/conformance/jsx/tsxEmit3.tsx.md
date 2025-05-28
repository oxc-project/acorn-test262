__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 105,
                "end": 108,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 109,
                "end": 130,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 111,
                    "end": 128,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 122,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 122,
                      "end": 128,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 125,
                        "end": 128,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 168,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 169,
                        "end": 172,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "JSXElement",
                  "start": 245,
                  "end": 252,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 245,
                    "end": 252,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 246,
                      "end": 249,
                      "name": "Foo"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true
                  },
                  "children": [],
                  "closingElement": null
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
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "JSXElement",
                          "start": 297,
                          "end": 304,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 297,
                            "end": 304,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 298,
                              "end": 301,
                              "name": "Foo"
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": true
                          },
                          "children": [],
                          "closingElement": null
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
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "JSXElement",
                          "start": 330,
                          "end": 337,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 330,
                            "end": 337,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 331,
                              "end": 334,
                              "name": "Bar"
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": true
                          },
                          "children": [],
                          "closingElement": null
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
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 380,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                {
                  "type": "JSXElement",
                  "start": 382,
                  "end": 391,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 382,
                    "end": 391,
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
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true
                  },
                  "children": [],
                  "closingElement": null
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 412,
                "end": 419,
                "id": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 413,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "JSXElement",
                  "start": 444,
                  "end": 451,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 444,
                    "end": 451,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 445,
                      "end": 448,
                      "name": "Foo"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true
                  },
                  "children": [],
                  "closingElement": null
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
