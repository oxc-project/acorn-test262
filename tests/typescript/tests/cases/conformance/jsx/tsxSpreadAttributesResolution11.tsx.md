__ESTREE_TEST__:PASS:
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
