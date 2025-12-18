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
            "name": "EmptyRCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 451
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC3",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 457
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 464
            },
            "start": 454,
            "end": 464
          },
          "definite": false,
          "start": 440,
          "end": 464
        }
      ],
      "declare": false,
      "start": 436,
      "end": 465
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
            "start": 470,
            "end": 480
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 486
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 493
            },
            "start": 483,
            "end": 493
          },
          "definite": false,
          "start": 470,
          "end": 493
        }
      ],
      "declare": false,
      "start": 466,
      "end": 494
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
            "start": 499,
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
              "name": "RC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 518
            },
            "start": 508,
            "end": 518
          },
          "definite": false,
          "start": 499,
          "end": 518
        }
      ],
      "declare": false,
      "start": 495,
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
            "start": 530,
            "end": 531
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "RCComp",
                "start": 535,
                "end": 541
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 542,
                    "end": 543
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hi",
                    "raw": "\"Hi\"",
                    "start": 544,
                    "end": 548
                  },
                  "start": 542,
                  "end": 548
                }
              ],
              "selfClosing": true,
              "start": 534,
              "end": 551
            },
            "children": [],
            "closingElement": null,
            "start": 534,
            "end": 551
          },
          "definite": false,
          "start": 530,
          "end": 551
        }
      ],
      "declare": false,
      "start": 526,
      "end": 552
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 559
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyRCComp",
                "start": 563,
                "end": 574
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 562,
              "end": 577
            },
            "children": [],
            "closingElement": null,
            "start": 562,
            "end": 577
          },
          "definite": false,
          "start": 557,
          "end": 577
        }
      ],
      "declare": false,
      "start": 553,
      "end": 578
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 585
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyRCComp",
                "start": 589,
                "end": 600
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-prop",
                    "start": 601,
                    "end": 610
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 611,
                    "end": 618
                  },
                  "start": 601,
                  "end": 618
                }
              ],
              "selfClosing": true,
              "start": 588,
              "end": 621
            },
            "children": [],
            "closingElement": null,
            "start": 588,
            "end": 621
          },
          "definite": false,
          "start": 583,
          "end": 621
        }
      ],
      "declare": false,
      "start": 579,
      "end": 622
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
            "start": 627,
            "end": 628
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "PartRCComp",
                "start": 632,
                "end": 642
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 631,
              "end": 645
            },
            "children": [],
            "closingElement": null,
            "start": 631,
            "end": 645
          },
          "definite": false,
          "start": 627,
          "end": 645
        }
      ],
      "declare": false,
      "start": 623,
      "end": 645
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
            "start": 650,
            "end": 651
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "PartRCComp",
                "start": 655,
                "end": 665
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-extra",
                    "start": 666,
                    "end": 676
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 677,
                    "end": 684
                  },
                  "start": 666,
                  "end": 684
                }
              ],
              "selfClosing": true,
              "start": 654,
              "end": 687
            },
            "children": [],
            "closingElement": null,
            "start": 654,
            "end": 687
          },
          "definite": false,
          "start": 650,
          "end": 687
        }
      ],
      "declare": false,
      "start": 646,
      "end": 687
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 687
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
    "value": "class",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "RC1",
    "start": 40,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 44,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 58,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 111,
    "end": 117
  },
  {
    "type": "Null",
    "value": "null",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "RC2",
    "start": 139,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 143,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 157,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 211,
    "end": 217
  },
  {
    "type": "Null",
    "value": "null",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 234,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 258,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "RC3",
    "start": 264,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 268,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 282,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "render",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 325,
    "end": 331
  },
  {
    "type": "Null",
    "value": "null",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 347,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "RC4",
    "start": 353,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 357,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 371,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 414,
    "end": 420
  },
  {
    "type": "Null",
    "value": "null",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 436,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "EmptyRCComp",
    "start": 440,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "RC3",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 458,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "RC4",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "PartRCComp",
    "start": 470,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "RC1",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 487,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "RC4",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "RCComp",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "RC1",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 512,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "RC2",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 526,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "JSXIdentifier",
    "value": "RCComp",
    "start": 535,
    "end": 541
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "JSXText",
    "value": "\"Hi\"",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 562,
    "end": 563
  },
  {
    "type": "JSXIdentifier",
    "value": "EmptyRCComp",
    "start": 563,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 588,
    "end": 589
  },
  {
    "type": "JSXIdentifier",
    "value": "EmptyRCComp",
    "start": 589,
    "end": 600
  },
  {
    "type": "JSXIdentifier",
    "value": "data-prop",
    "start": 601,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 611,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 623,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "JSXIdentifier",
    "value": "PartRCComp",
    "start": 632,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 654,
    "end": 655
  },
  {
    "type": "JSXIdentifier",
    "value": "PartRCComp",
    "start": 655,
    "end": 665
  },
  {
    "type": "JSXIdentifier",
    "value": "data-extra",
    "start": 666,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 677,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 686,
    "end": 687
  }
]
```
