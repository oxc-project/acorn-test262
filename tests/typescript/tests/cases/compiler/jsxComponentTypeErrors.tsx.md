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
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 53
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "element",
                          "raw": "'element'",
                          "start": 55,
                          "end": 64
                        },
                        "start": 55,
                        "end": 64
                      },
                      "start": 53,
                      "end": 64
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 49,
                    "end": 65
                  }
                ],
                "start": 43,
                "end": 69
              },
              "declare": false,
              "start": 25,
              "end": 69
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 69
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 101
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 112
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "element-class",
                          "raw": "'element-class'",
                          "start": 114,
                          "end": 129
                        },
                        "start": 114,
                        "end": 129
                      },
                      "start": 112,
                      "end": 129
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 108,
                    "end": 130
                  }
                ],
                "start": 102,
                "end": 134
              },
              "declare": false,
              "start": 79,
              "end": 134
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 72,
            "end": 134
          }
        ],
        "start": 14,
        "end": 136
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 164
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 181
          }
        ],
        "start": 164,
        "end": 182
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 184,
              "end": 188
            }
          ],
          "optional": false,
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 196
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 200
                      },
                      "typeArguments": null,
                      "start": 199,
                      "end": 200
                    },
                    "start": 197,
                    "end": 200
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 192,
                  "end": 200
                }
              ],
              "start": 191,
              "end": 201
            },
            "start": 189,
            "end": 201
          },
          "start": 183,
          "end": 201
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 224
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 224
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 220,
                  "end": 224
                }
              ],
              "start": 214,
              "end": 228
            },
            "start": 207,
            "end": 228
          }
        ],
        "start": 203,
        "end": 230
      },
      "expression": false,
      "start": 138,
      "end": 230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 248
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "useThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 256
          },
          "optional": false,
          "computed": false,
          "start": 231,
          "end": 256
        },
        "right": {
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
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "this",
                      "start": 282,
                      "end": 286
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "type",
                          "start": 287,
                          "end": 291
                        },
                        "value": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 292,
                          "end": 297
                        },
                        "start": 287,
                        "end": 297
                      }
                    ],
                    "selfClosing": true,
                    "start": 281,
                    "end": 300
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 281,
                  "end": 300
                },
                "start": 274,
                "end": 301
              }
            ],
            "start": 270,
            "end": 303
          },
          "expression": false,
          "start": 259,
          "end": 303
        },
        "start": 231,
        "end": 303
      },
      "directive": null,
      "start": 231,
      "end": 303
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 325
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 334
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 337,
              "end": 345
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 330,
            "end": 346
          }
        ],
        "start": 326,
        "end": 348
      },
      "abstract": false,
      "declare": false,
      "start": 305,
      "end": 348
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MixedComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 370
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 377
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 384
                },
                "optional": false,
                "computed": false,
                "start": 373,
                "end": 384
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 373,
              "end": 386
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 406
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 423
            },
            "start": 373,
            "end": 423
          },
          "definite": false,
          "start": 356,
          "end": 423
        }
      ],
      "declare": false,
      "start": 350,
      "end": 424
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem1",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 437
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "FunctionComponent",
                "start": 441,
                "end": 458
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "type",
                    "start": 459,
                    "end": 463
                  },
                  "value": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 464,
                    "end": 469
                  },
                  "start": 459,
                  "end": 469
                }
              ],
              "selfClosing": true,
              "start": 440,
              "end": 472
            },
            "children": [],
            "closingElement": null,
            "start": 440,
            "end": 472
          },
          "definite": false,
          "start": 432,
          "end": 472
        }
      ],
      "declare": false,
      "start": 426,
      "end": 473
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem2",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 485
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "FunctionComponent",
                "start": 489,
                "end": 506
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "\"abc\"",
                      "start": 507,
                      "end": 512
                    },
                    "start": 507,
                    "end": 512
                  }
                ],
                "start": 506,
                "end": 513
              },
              "attributes": [],
              "selfClosing": true,
              "start": 488,
              "end": 516
            },
            "children": [],
            "closingElement": null,
            "start": 488,
            "end": 516
          },
          "definite": false,
          "start": 480,
          "end": 516
        }
      ],
      "declare": false,
      "start": 474,
      "end": 517
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem3",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 529
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ClassComponent",
                "start": 533,
                "end": 547
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 532,
              "end": 550
            },
            "children": [],
            "closingElement": null,
            "start": 532,
            "end": 550
          },
          "definite": false,
          "start": 524,
          "end": 550
        }
      ],
      "declare": false,
      "start": 518,
      "end": 551
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem4",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 563
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MixedComponent",
                "start": 567,
                "end": 581
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 566,
              "end": 584
            },
            "children": [],
            "closingElement": null,
            "start": 566,
            "end": 584
          },
          "definite": false,
          "start": 558,
          "end": 584
        }
      ],
      "declare": false,
      "start": 552,
      "end": 585
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 596
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
                  "name": "MemberFunctionComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 626
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
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 642,
                          "end": 644
                        },
                        "start": 635,
                        "end": 645
                      }
                    ],
                    "start": 629,
                    "end": 649
                  },
                  "expression": false,
                  "start": 626,
                  "end": 649
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 603,
                "end": 649
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MemberClassComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 673
                },
                "value": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 681,
                    "end": 683
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 675,
                  "end": 683
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 653,
                "end": 683
              }
            ],
            "start": 599,
            "end": 686
          },
          "definite": false,
          "start": 593,
          "end": 686
        }
      ],
      "declare": false,
      "start": 587,
      "end": 687
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem5",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 700
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "obj",
                  "start": 704,
                  "end": 707
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "MemberFunctionComponent",
                  "start": 708,
                  "end": 731
                },
                "start": 704,
                "end": 731
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 703,
              "end": 734
            },
            "children": [],
            "closingElement": null,
            "start": 703,
            "end": 734
          },
          "definite": false,
          "start": 695,
          "end": 734
        }
      ],
      "declare": false,
      "start": 689,
      "end": 735
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem6",
            "optional": false,
            "typeAnnotation": null,
            "start": 742,
            "end": 747
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "obj",
                  "start": 751,
                  "end": 754
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "MemberClassComponent",
                  "start": 756,
                  "end": 776
                },
                "start": 751,
                "end": 776
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 750,
              "end": 779
            },
            "children": [],
            "closingElement": null,
            "start": 750,
            "end": 779
          },
          "definite": false,
          "start": 742,
          "end": 779
        }
      ],
      "declare": false,
      "start": 736,
      "end": 780
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 780
}
```
