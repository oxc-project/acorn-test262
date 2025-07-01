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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 43
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
          "start": 52,
          "end": 57
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 67
        },
        "optional": false,
        "computed": false,
        "start": 52,
        "end": 67
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
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
                  "start": 69,
                  "end": 70
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 73,
                    "end": 79
                  },
                  "start": 71,
                  "end": 79
                },
                "accessibility": null,
                "static": false,
                "start": 69,
                "end": 79
              }
            ],
            "start": 68,
            "end": 80
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 82,
            "end": 84
          }
        ],
        "start": 67,
        "end": 85
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
              "start": 92,
              "end": 98
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 118,
                      "end": 122
                    },
                    "start": 111,
                    "end": 123
                  }
                ],
                "start": 101,
                "end": 129
              },
              "expression": false,
              "start": 98,
              "end": 129
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 92,
            "end": 129
          }
        ],
        "start": 86,
        "end": 131
      },
      "abstract": false,
      "declare": false,
      "start": 34,
      "end": 131
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 142
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
          "start": 151,
          "end": 156
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 166
        },
        "optional": false,
        "computed": false,
        "start": 151,
        "end": 166
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
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
                  "start": 169,
                  "end": 170
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 172,
                    "end": 178
                  },
                  "start": 170,
                  "end": 178
                },
                "accessibility": null,
                "static": false,
                "start": 169,
                "end": 178
              }
            ],
            "start": 167,
            "end": 180
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 182,
            "end": 184
          }
        ],
        "start": 166,
        "end": 185
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
              "start": 192,
              "end": 198
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 218,
                      "end": 222
                    },
                    "start": 211,
                    "end": 223
                  }
                ],
                "start": 201,
                "end": 229
              },
              "expression": false,
              "start": 198,
              "end": 229
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 192,
            "end": 229
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 248
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
                "start": 251,
                "end": 254
              },
              "expression": false,
              "start": 248,
              "end": 254
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 234,
            "end": 254
          }
        ],
        "start": 186,
        "end": 256
      },
      "abstract": false,
      "declare": false,
      "start": 133,
      "end": 256
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC3",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 267
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
          "start": 276,
          "end": 281
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 291
        },
        "optional": false,
        "computed": false,
        "start": 276,
        "end": 291
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 292,
            "end": 294
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 296,
            "end": 298
          }
        ],
        "start": 291,
        "end": 299
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
              "start": 306,
              "end": 312
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 332,
                      "end": 336
                    },
                    "start": 325,
                    "end": 337
                  }
                ],
                "start": 315,
                "end": 343
              },
              "expression": false,
              "start": 312,
              "end": 343
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 306,
            "end": 343
          }
        ],
        "start": 300,
        "end": 345
      },
      "abstract": false,
      "declare": false,
      "start": 258,
      "end": 345
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC4",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 356
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
          "start": 365,
          "end": 370
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 380
        },
        "optional": false,
        "computed": false,
        "start": 365,
        "end": 380
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 381,
            "end": 383
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 385,
            "end": 387
          }
        ],
        "start": 380,
        "end": 388
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
              "start": 395,
              "end": 401
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 421,
                      "end": 425
                    },
                    "start": 414,
                    "end": 426
                  }
                ],
                "start": 404,
                "end": 432
              },
              "expression": false,
              "start": 401,
              "end": 432
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 395,
            "end": 432
          }
        ],
        "start": 389,
        "end": 434
      },
      "abstract": false,
      "declare": false,
      "start": 347,
      "end": 434
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
            "name": "RCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 446
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 452
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 459
            },
            "start": 449,
            "end": 459
          },
          "definite": false,
          "start": 440,
          "end": 459
        }
      ],
      "declare": false,
      "start": 436,
      "end": 460
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
            "name": "EmptyRCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 476
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC3",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 482
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 489
            },
            "start": 479,
            "end": 489
          },
          "definite": false,
          "start": 465,
          "end": 489
        }
      ],
      "declare": false,
      "start": 461,
      "end": 490
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
            "name": "PartRCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 505
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 511
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 518
            },
            "start": 508,
            "end": 518
          },
          "definite": false,
          "start": 495,
          "end": 518
        }
      ],
      "declare": false,
      "start": 491,
      "end": 519
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 534
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "RCComp",
                "start": 538,
                "end": 544
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 545,
                    "end": 546
                  },
                  "value": null,
                  "start": 545,
                  "end": 546
                }
              ],
              "selfClosing": true,
              "start": 537,
              "end": 549
            },
            "children": [],
            "closingElement": null,
            "start": 537,
            "end": 549
          },
          "definite": false,
          "start": 533,
          "end": 549
        }
      ],
      "declare": false,
      "start": 529,
      "end": 550
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 556
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "PartRCComp",
                "start": 560,
                "end": 570
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 571,
                    "end": 572
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 574,
                      "end": 576
                    },
                    "start": 573,
                    "end": 577
                  },
                  "start": 571,
                  "end": 577
                }
              ],
              "selfClosing": true,
              "start": 559,
              "end": 580
            },
            "children": [],
            "closingElement": null,
            "start": 559,
            "end": 580
          },
          "definite": false,
          "start": 555,
          "end": 580
        }
      ],
      "declare": false,
      "start": 551,
      "end": 580
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 586
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyRCComp",
                "start": 590,
                "end": 601
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 602,
                    "end": 606
                  },
                  "value": null,
                  "start": 602,
                  "end": 606
                }
              ],
              "selfClosing": true,
              "start": 589,
              "end": 609
            },
            "children": [],
            "closingElement": null,
            "start": 589,
            "end": 609
          },
          "definite": false,
          "start": 585,
          "end": 609
        }
      ],
      "declare": false,
      "start": 581,
      "end": 610
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 610
}
```
