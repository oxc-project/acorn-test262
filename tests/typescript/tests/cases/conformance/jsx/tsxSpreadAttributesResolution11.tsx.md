__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
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
            "start": 40,
            "end": 43
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 46,
            "end": 48
          },
          "definite": false,
          "start": 40,
          "end": 48
        }
      ],
      "declare": false,
      "start": 34,
      "end": 49
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 65
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 67,
                          "end": 68
                        },
                        "start": 67,
                        "end": 68
                      },
                      "start": 65,
                      "end": 68
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 64,
                    "end": 68
                  }
                ],
                "start": 62,
                "end": 70
              },
              "start": 60,
              "end": 70
            },
            "start": 56,
            "end": 70
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 80
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 82,
                  "end": 83
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 79,
                "end": 83
              }
            ],
            "start": 73,
            "end": 85
          },
          "definite": false,
          "start": 56,
          "end": 85
        }
      ],
      "declare": false,
      "start": 50,
      "end": 85
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 100
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 102,
                          "end": 106
                        },
                        "start": 102,
                        "end": 106
                      },
                      "start": 100,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 99,
                    "end": 107
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 117
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 119,
                        "end": 125
                      },
                      "start": 117,
                      "end": 125
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 108,
                    "end": 125
                  }
                ],
                "start": 98,
                "end": 127
              },
              "start": 96,
              "end": 127
            },
            "start": 92,
            "end": 127
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 139,
                  "end": 143
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 136,
                "end": 143
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "overwrite",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 158
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 160,
                  "end": 164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 149,
                "end": 164
              }
            ],
            "start": 130,
            "end": 166
          },
          "definite": false,
          "start": 92,
          "end": 166
        }
      ],
      "declare": false,
      "start": 86,
      "end": 166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 182
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 190
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 192,
                  "end": 193
                },
                "start": 192,
                "end": 193
              },
              "start": 190,
              "end": 193
            },
            "accessibility": null,
            "static": false,
            "start": 189,
            "end": 193
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 201,
                  "end": 205
                },
                "start": 201,
                "end": 205
              },
              "start": 199,
              "end": 205
            },
            "accessibility": null,
            "static": false,
            "start": 198,
            "end": 205
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overwrite",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 219
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 221,
                "end": 227
              },
              "start": 219,
              "end": 227
            },
            "accessibility": null,
            "static": false,
            "start": 210,
            "end": 227
          }
        ],
        "start": 183,
        "end": 229
      },
      "declare": false,
      "start": 168,
      "end": 229
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverWriteAttr",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 250
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 264
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 274
        },
        "optional": false,
        "computed": false,
        "start": 259,
        "end": 274
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 279
            },
            "typeArguments": null,
            "start": 275,
            "end": 279
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 281,
            "end": 283
          }
        ],
        "start": 274,
        "end": 284
      },
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
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 297
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
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 318,
                          "end": 321
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 317,
                        "end": 322
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 322,
                          "end": 327
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 329,
                          "end": 332
                        },
                        "start": 327,
                        "end": 333
                      },
                      "start": 317,
                      "end": 333
                    },
                    "start": 310,
                    "end": 334
                  }
                ],
                "start": 300,
                "end": 340
              },
              "expression": false,
              "start": 297,
              "end": 340
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 291,
            "end": 340
          }
        ],
        "start": 285,
        "end": 342
      },
      "abstract": false,
      "declare": false,
      "start": 231,
      "end": 342
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyobj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 356,
                "end": 359
              },
              "start": 354,
              "end": 359
            },
            "start": 348,
            "end": 359
          },
          "init": null,
          "definite": false,
          "start": 348,
          "end": 359
        }
      ],
      "declare": false,
      "start": 344,
      "end": 360
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 372
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 376,
                "end": 389
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 397
                  },
                  "start": 390,
                  "end": 398
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 399,
                    "end": 400
                  },
                  "value": null,
                  "start": 399,
                  "end": 400
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 401,
                    "end": 410
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 411,
                    "end": 415
                  },
                  "start": 401,
                  "end": 415
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 424
                  },
                  "start": 416,
                  "end": 425
                }
              ],
              "selfClosing": true,
              "start": 375,
              "end": 428
            },
            "children": [],
            "closingElement": null,
            "start": 375,
            "end": 428
          },
          "definite": false,
          "start": 371,
          "end": 428
        }
      ],
      "declare": false,
      "start": 367,
      "end": 428
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 435
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 439,
                "end": 452
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 457,
                    "end": 461
                  },
                  "start": 453,
                  "end": 462
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 471
                  },
                  "start": 463,
                  "end": 472
                }
              ],
              "selfClosing": true,
              "start": 438,
              "end": 475
            },
            "children": [],
            "closingElement": null,
            "start": 438,
            "end": 475
          },
          "definite": false,
          "start": 433,
          "end": 475
        }
      ],
      "declare": false,
      "start": 429,
      "end": 475
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 482
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 486,
                "end": 499
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 500,
                    "end": 501
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 503,
                      "end": 504
                    },
                    "start": 502,
                    "end": 505
                  },
                  "start": 500,
                  "end": 505
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 506,
                    "end": 515
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 516,
                    "end": 520
                  },
                  "start": 506,
                  "end": 520
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 529
                  },
                  "start": 521,
                  "end": 530
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 536,
                          "end": 537
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 539,
                          "end": 543
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 536,
                        "end": 543
                      }
                    ],
                    "start": 535,
                    "end": 544
                  },
                  "start": 531,
                  "end": 545
                }
              ],
              "selfClosing": true,
              "start": 485,
              "end": 548
            },
            "children": [],
            "closingElement": null,
            "start": 485,
            "end": 548
          },
          "definite": false,
          "start": 480,
          "end": 548
        }
      ],
      "declare": false,
      "start": 476,
      "end": 548
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 555
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 559,
                "end": 572
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 573,
                    "end": 582
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 583,
                    "end": 587
                  },
                  "start": 573,
                  "end": 587
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 596
                  },
                  "start": 588,
                  "end": 597
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 598,
                    "end": 599
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 601,
                      "end": 602
                    },
                    "start": 600,
                    "end": 603
                  },
                  "start": 598,
                  "end": 603
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 609,
                          "end": 610
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 612,
                          "end": 616
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 609,
                        "end": 616
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 618,
                          "end": 619
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 621,
                          "end": 622
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 618,
                        "end": 622
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "overwrite",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 624,
                          "end": 633
                        },
                        "value": {
                          "type": "Literal",
                          "value": "world",
                          "raw": "\"world\"",
                          "start": 634,
                          "end": 641
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 624,
                        "end": 641
                      }
                    ],
                    "start": 608,
                    "end": 642
                  },
                  "start": 604,
                  "end": 643
                }
              ],
              "selfClosing": true,
              "start": 558,
              "end": 646
            },
            "children": [],
            "closingElement": null,
            "start": 558,
            "end": 646
          },
          "definite": false,
          "start": 553,
          "end": 646
        }
      ],
      "declare": false,
      "start": 549,
      "end": 646
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 651,
            "end": 653
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 657,
                "end": 670
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 677
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 679,
                          "end": 680
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 676,
                        "end": 680
                      }
                    ],
                    "start": 675,
                    "end": 681
                  },
                  "start": 671,
                  "end": 682
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "overwrite",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 688,
                          "end": 697
                        },
                        "value": {
                          "type": "Literal",
                          "value": "world",
                          "raw": "\"world\"",
                          "start": 699,
                          "end": 706
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 688,
                        "end": 706
                      }
                    ],
                    "start": 687,
                    "end": 707
                  },
                  "start": 683,
                  "end": 708
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 714,
                          "end": 715
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 717,
                          "end": 721
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 714,
                        "end": 721
                      }
                    ],
                    "start": 713,
                    "end": 722
                  },
                  "start": 709,
                  "end": 723
                }
              ],
              "selfClosing": true,
              "start": 656,
              "end": 726
            },
            "children": [],
            "closingElement": null,
            "start": 656,
            "end": 726
          },
          "definite": false,
          "start": 651,
          "end": 726
        }
      ],
      "declare": false,
      "start": 647,
      "end": 726
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 731,
            "end": 733
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 737,
                "end": 750
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyobj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 761
                  },
                  "start": 751,
                  "end": 762
                }
              ],
              "selfClosing": true,
              "start": 736,
              "end": 765
            },
            "children": [],
            "closingElement": null,
            "start": 736,
            "end": 765
          },
          "definite": false,
          "start": 731,
          "end": 765
        }
      ],
      "declare": false,
      "start": 727,
      "end": 765
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 765
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 108,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 149,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 168,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 201,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 210,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "OverWriteAttr",
    "start": 237,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 251,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 259,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 318,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 321,
    "end": 322
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 322,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 328,
    "end": 329
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "anyobj",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 376,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 394,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 399,
    "end": 400
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 401,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 417,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 433,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 439,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 454,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 486,
    "end": 499
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 506,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 522,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 539,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 559,
    "end": 572
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 573,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 583,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 589,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 612,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 624,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 634,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 647,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 656,
    "end": 657
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 657,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 688,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 697,
    "end": 698
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 699,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 727,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 731,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 736,
    "end": 737
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 737,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "anyobj",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 764,
    "end": 765
  }
]
```
