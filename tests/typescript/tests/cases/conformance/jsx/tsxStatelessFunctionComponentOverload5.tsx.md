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
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClickableProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 64
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 79
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                },
                "start": 80,
                "end": 88
              },
              "accessibility": null,
              "static": false,
              "start": 71,
              "end": 89
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 103
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 106,
                  "end": 112
                },
                "start": 104,
                "end": 112
              },
              "accessibility": null,
              "static": false,
              "start": 94,
              "end": 113
            }
          ],
          "start": 65,
          "end": 115
        },
        "declare": false,
        "start": 40,
        "end": 115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 33,
      "end": 115
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 145
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 168
            },
            "typeArguments": null,
            "start": 154,
            "end": 168
          }
        ],
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
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 182
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 189
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 207
                    },
                    "start": 184,
                    "end": 207
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 208,
                        "end": 211
                      }
                    ],
                    "start": 207,
                    "end": 212
                  },
                  "start": 184,
                  "end": 212
                },
                "start": 182,
                "end": 212
              },
              "accessibility": null,
              "static": false,
              "start": 175,
              "end": 213
            }
          ],
          "start": 169,
          "end": 215
        },
        "declare": false,
        "start": 124,
        "end": 215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 117,
      "end": 215
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LinkProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 243
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 266
            },
            "typeArguments": null,
            "start": 252,
            "end": 266
          }
        ],
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
                "name": "to",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 275
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 277,
                  "end": 283
                },
                "start": 275,
                "end": 283
              },
              "accessibility": null,
              "static": false,
              "start": 273,
              "end": 284
            }
          ],
          "start": 267,
          "end": 286
        },
        "declare": false,
        "start": 224,
        "end": 286
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 217,
      "end": 286
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HyphenProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 316
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 339
            },
            "typeArguments": null,
            "start": 325,
            "end": 339
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "data-format",
                "raw": "\"data-format\"",
                "start": 346,
                "end": 359
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 361,
                  "end": 367
                },
                "start": 359,
                "end": 367
              },
              "accessibility": null,
              "static": false,
              "start": 346,
              "end": 368
            }
          ],
          "start": 340,
          "end": 370
        },
        "declare": false,
        "start": 295,
        "end": 370
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 288,
      "end": 370
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
            "name": "obj0",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 380
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
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 391
                },
                "value": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 393,
                  "end": 400
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 389,
                "end": 400
              }
            ],
            "start": 383,
            "end": 402
          },
          "definite": false,
          "start": 376,
          "end": 402
        }
      ],
      "declare": false,
      "start": 372,
      "end": 403
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 413
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
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 430
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 432,
                  "end": 436
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 422,
                "end": 436
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 444
                },
                "value": {
                  "type": "Literal",
                  "value": "boo",
                  "raw": "\"boo\"",
                  "start": 446,
                  "end": 451
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 442,
                "end": 451
              }
            ],
            "start": 416,
            "end": 453
          },
          "definite": false,
          "start": 409,
          "end": 453
        }
      ],
      "declare": false,
      "start": 405,
      "end": 453
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 463
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
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 479
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 485,
                    "end": 487
                  },
                  "id": null,
                  "generator": false,
                  "start": 481,
                  "end": 487
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 472,
                "end": 487
              }
            ],
            "start": 466,
            "end": 489
          },
          "definite": false,
          "start": 459,
          "end": 489
        }
      ],
      "declare": false,
      "start": 455,
      "end": 489
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 501,
                "end": 504
              },
              "start": 499,
              "end": 504
            },
            "start": 495,
            "end": 504
          },
          "init": null,
          "definite": false,
          "start": 495,
          "end": 504
        }
      ],
      "declare": false,
      "start": 491,
      "end": 505
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 523,
          "end": 533
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 558
                },
                "typeArguments": null,
                "start": 547,
                "end": 558
              },
              "start": 545,
              "end": 558
            },
            "start": 534,
            "end": 558
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 564
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 565,
                "end": 572
              },
              "start": 561,
              "end": 572
            },
            "typeArguments": null,
            "start": 561,
            "end": 572
          },
          "start": 559,
          "end": 572
        },
        "body": null,
        "expression": false,
        "start": 514,
        "end": 573
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 507,
      "end": 573
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 590,
          "end": 600
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 621
                },
                "typeArguments": null,
                "start": 612,
                "end": 621
              },
              "start": 610,
              "end": 621
            },
            "start": 601,
            "end": 621
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 627
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 628,
                "end": 635
              },
              "start": 624,
              "end": 635
            },
            "typeArguments": null,
            "start": 624,
            "end": 635
          },
          "start": 622,
          "end": 635
        },
        "body": null,
        "expression": false,
        "start": 581,
        "end": 636
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 574,
      "end": 636
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 653,
          "end": 663
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "hyphenProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HyphenProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 688
                },
                "typeArguments": null,
                "start": 677,
                "end": 688
              },
              "start": 675,
              "end": 688
            },
            "start": 664,
            "end": 688
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 694
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 702
              },
              "start": 691,
              "end": 702
            },
            "typeArguments": null,
            "start": 691,
            "end": 702
          },
          "start": 689,
          "end": 702
        },
        "body": null,
        "expression": false,
        "start": 644,
        "end": 703
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 637,
      "end": 703
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 720,
          "end": 730
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ButtonProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 738,
                      "end": 749
                    },
                    "typeArguments": null,
                    "start": 738,
                    "end": 749
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 752,
                      "end": 761
                    },
                    "typeArguments": null,
                    "start": 752,
                    "end": 761
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HyphenProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 764,
                      "end": 775
                    },
                    "typeArguments": null,
                    "start": 764,
                    "end": 775
                  }
                ],
                "start": 738,
                "end": 775
              },
              "start": 736,
              "end": 775
            },
            "start": 731,
            "end": 775
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 781
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 789
              },
              "start": 778,
              "end": 789
            },
            "typeArguments": null,
            "start": 778,
            "end": 789
          },
          "start": 776,
          "end": 789
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "linkProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 802,
                    "end": 811
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 814,
                      "end": 819
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 832
                      },
                      "typeArguments": null,
                      "start": 823,
                      "end": 832
                    },
                    "start": 814,
                    "end": 832
                  },
                  "definite": false,
                  "start": 802,
                  "end": 832
                }
              ],
              "declare": false,
              "start": 796,
              "end": 833
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 850
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 853
                },
                "optional": false,
                "computed": false,
                "start": 841,
                "end": 853
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 872,
                          "end": 876
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 891
                        },
                        "optional": false,
                        "computed": false,
                        "start": 872,
                        "end": 891
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 892,
                          "end": 897
                        }
                      ],
                      "optional": false,
                      "start": 872,
                      "end": 898
                    },
                    "start": 865,
                    "end": 899
                  }
                ],
                "start": 855,
                "end": 905
              },
              "alternate": null,
              "start": 838,
              "end": 905
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 918,
                    "end": 922
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 939
                  },
                  "optional": false,
                  "computed": false,
                  "start": 918,
                  "end": 939
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 940,
                    "end": 945
                  }
                ],
                "optional": false,
                "start": 918,
                "end": 946
              },
              "start": 911,
              "end": 947
            }
          ],
          "start": 790,
          "end": 949
        },
        "expression": false,
        "start": 711,
        "end": 949
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 704,
      "end": 949
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
            "name": "b0",
            "optional": false,
            "typeAnnotation": null,
            "start": 966,
            "end": 968
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 972,
                "end": 982
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 983,
                    "end": 985
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/some/path",
                    "raw": "'/some/path'",
                    "start": 986,
                    "end": 998
                  },
                  "start": 983,
                  "end": 998
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 999,
                    "end": 1006
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1009,
                          "end": 1010
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1013,
                        "end": 1015
                      },
                      "id": null,
                      "generator": false,
                      "start": 1008,
                      "end": 1015
                    },
                    "start": 1007,
                    "end": 1016
                  },
                  "start": 999,
                  "end": 1016
                }
              ],
              "selfClosing": false,
              "start": 971,
              "end": 1017
            },
            "children": [
              {
                "type": "JSXText",
                "value": "GO",
                "raw": "GO",
                "start": 1017,
                "end": 1019
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1021,
                "end": 1031
              },
              "start": 1019,
              "end": 1032
            },
            "start": 971,
            "end": 1032
          },
          "definite": false,
          "start": 966,
          "end": 1032
        }
      ],
      "declare": false,
      "start": 960,
      "end": 1033
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1060,
            "end": 1062
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1066,
                "end": 1076
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 1077,
                    "end": 1084
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1090,
                              "end": 1093
                            },
                            "start": 1088,
                            "end": 1093
                          },
                          "start": 1087,
                          "end": 1093
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1097,
                        "end": 1099
                      },
                      "id": null,
                      "generator": false,
                      "start": 1086,
                      "end": 1099
                    },
                    "start": 1085,
                    "end": 1100
                  },
                  "start": 1077,
                  "end": 1100
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1105,
                    "end": 1109
                  },
                  "start": 1101,
                  "end": 1110
                }
              ],
              "selfClosing": false,
              "start": 1065,
              "end": 1111
            },
            "children": [
              {
                "type": "JSXText",
                "value": "Hello world",
                "raw": "Hello world",
                "start": 1111,
                "end": 1122
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1124,
                "end": 1134
              },
              "start": 1122,
              "end": 1135
            },
            "start": 1065,
            "end": 1135
          },
          "definite": false,
          "start": 1060,
          "end": 1135
        }
      ],
      "declare": false,
      "start": 1054,
      "end": 1136
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1165
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1169,
                "end": 1179
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
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1185,
                          "end": 1187
                        },
                        "value": {
                          "type": "Literal",
                          "value": "10000",
                          "raw": "\"10000\"",
                          "start": 1189,
                          "end": 1196
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1185,
                        "end": 1196
                      }
                    ],
                    "start": 1184,
                    "end": 1197
                  },
                  "start": 1180,
                  "end": 1198
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1203,
                    "end": 1207
                  },
                  "start": 1199,
                  "end": 1208
                }
              ],
              "selfClosing": true,
              "start": 1168,
              "end": 1211
            },
            "children": [],
            "closingElement": null,
            "start": 1168,
            "end": 1211
          },
          "definite": false,
          "start": 1163,
          "end": 1211
        }
      ],
      "declare": false,
      "start": 1157,
      "end": 1212
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1238,
            "end": 1240
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1244,
                "end": 1254
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
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1260,
                          "end": 1262
                        },
                        "value": {
                          "type": "Literal",
                          "value": "10000",
                          "raw": "\"10000\"",
                          "start": 1264,
                          "end": 1271
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1260,
                        "end": 1271
                      }
                    ],
                    "start": 1259,
                    "end": 1272
                  },
                  "start": 1255,
                  "end": 1273
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
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1279,
                          "end": 1286
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1289,
                              "end": 1290
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1295,
                            "end": 1297
                          },
                          "id": null,
                          "generator": false,
                          "start": 1288,
                          "end": 1297
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1279,
                        "end": 1297
                      }
                    ],
                    "start": 1278,
                    "end": 1298
                  },
                  "start": 1274,
                  "end": 1299
                }
              ],
              "selfClosing": true,
              "start": 1243,
              "end": 1302
            },
            "children": [],
            "closingElement": null,
            "start": 1243,
            "end": 1302
          },
          "definite": false,
          "start": 1238,
          "end": 1302
        }
      ],
      "declare": false,
      "start": 1232,
      "end": 1303
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1329,
            "end": 1331
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1335,
                "end": 1345
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1350,
                    "end": 1354
                  },
                  "start": 1346,
                  "end": 1355
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1356,
                    "end": 1358
                  },
                  "value": null,
                  "start": 1356,
                  "end": 1358
                }
              ],
              "selfClosing": true,
              "start": 1334,
              "end": 1361
            },
            "children": [],
            "closingElement": null,
            "start": 1334,
            "end": 1361
          },
          "definite": false,
          "start": 1329,
          "end": 1361
        }
      ],
      "declare": false,
      "start": 1323,
      "end": 1362
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1458,
            "end": 1460
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1464,
                "end": 1474
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
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1481,
                          "end": 1488
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1492,
                                  "end": 1495
                                },
                                "start": 1490,
                                "end": 1495
                              },
                              "start": 1489,
                              "end": 1495
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1497,
                            "end": 1500
                          },
                          "expression": false,
                          "start": 1488,
                          "end": 1500
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1481,
                        "end": 1500
                      }
                    ],
                    "start": 1479,
                    "end": 1502
                  },
                  "start": 1475,
                  "end": 1503
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1508,
                    "end": 1512
                  },
                  "start": 1504,
                  "end": 1513
                }
              ],
              "selfClosing": true,
              "start": 1463,
              "end": 1516
            },
            "children": [],
            "closingElement": null,
            "start": 1463,
            "end": 1516
          },
          "definite": false,
          "start": 1458,
          "end": 1516
        }
      ],
      "declare": false,
      "start": 1452,
      "end": 1517
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
            "name": "b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1618,
            "end": 1620
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1624,
                "end": 1634
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
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1641,
                          "end": 1648
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1652,
                                  "end": 1655
                                },
                                "start": 1650,
                                "end": 1655
                              },
                              "start": 1649,
                              "end": 1655
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1656,
                            "end": 1658
                          },
                          "expression": false,
                          "start": 1648,
                          "end": 1658
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1641,
                        "end": 1658
                      }
                    ],
                    "start": 1639,
                    "end": 1660
                  },
                  "start": 1635,
                  "end": 1661
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 1662,
                    "end": 1670
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1672,
                      "end": 1674
                    },
                    "start": 1671,
                    "end": 1675
                  },
                  "start": 1662,
                  "end": 1675
                }
              ],
              "selfClosing": true,
              "start": 1623,
              "end": 1678
            },
            "children": [],
            "closingElement": null,
            "start": 1623,
            "end": 1678
          },
          "definite": false,
          "start": 1618,
          "end": 1678
        }
      ],
      "declare": false,
      "start": 1612,
      "end": 1679
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
            "name": "b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1728,
            "end": 1730
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1734,
                "end": 1744
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
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1751,
                          "end": 1758
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1762,
                                  "end": 1765
                                },
                                "start": 1760,
                                "end": 1765
                              },
                              "start": 1759,
                              "end": 1765
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1766,
                            "end": 1768
                          },
                          "expression": false,
                          "start": 1758,
                          "end": 1768
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1751,
                        "end": 1768
                      }
                    ],
                    "start": 1749,
                    "end": 1770
                  },
                  "start": 1745,
                  "end": 1771
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 1772,
                    "end": 1780
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1781,
                    "end": 1788
                  },
                  "start": 1772,
                  "end": 1788
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "start": 1789,
                    "end": 1798
                  },
                  "value": null,
                  "start": 1789,
                  "end": 1798
                }
              ],
              "selfClosing": true,
              "start": 1733,
              "end": 1801
            },
            "children": [],
            "closingElement": null,
            "start": 1733,
            "end": 1801
          },
          "definite": false,
          "start": 1728,
          "end": 1801
        }
      ],
      "declare": false,
      "start": 1722,
      "end": 1802
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
            "name": "b8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1851,
            "end": 1853
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1857,
                "end": 1867
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-format",
                    "start": 1868,
                    "end": 1879
                  },
                  "value": null,
                  "start": 1868,
                  "end": 1879
                }
              ],
              "selfClosing": true,
              "start": 1856,
              "end": 1882
            },
            "children": [],
            "closingElement": null,
            "start": 1856,
            "end": 1882
          },
          "definite": false,
          "start": 1851,
          "end": 1882
        }
      ],
      "declare": false,
      "start": 1845,
      "end": 1883
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1932
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
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 40,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 50,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 71,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 94,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 117,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 124,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 134,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 146,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 154,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "MouseEventHandler",
    "start": 190,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 224,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 234,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 252,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 288,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 295,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 305,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 317,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 325,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "String",
    "value": "\"data-format\"",
    "start": 346,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 393,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 409,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 422,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "String",
    "value": "\"boo\"",
    "start": 446,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 472,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 507,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 514,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 523,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 534,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 547,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 565,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 574,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 581,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 590,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 601,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 612,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 637,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 644,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 653,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "hyphenProps",
    "start": 664,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 677,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 691,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 695,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 704,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 711,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 720,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 731,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 738,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 752,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 764,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 778,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 782,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 796,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 802,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 814,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 820,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 823,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 838,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 841,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 851,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 865,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "_buildMainLink",
    "start": 877,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 892,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 911,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 918,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "_buildMainButton",
    "start": 923,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 940,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 960,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 966,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 971,
    "end": 972
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 972,
    "end": 982
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 983,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 985,
    "end": 986
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 986,
    "end": 998
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 999,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "JSXText",
    "value": "GO",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1021,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1066,
    "end": 1076
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1077,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1090,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 1105,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "JSXText",
    "value": "Hello world",
    "start": 1111,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1124,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1163,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1169,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "String",
    "value": "\"10000\"",
    "start": 1189,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1232,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1244,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 1260,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "String",
    "value": "\"10000\"",
    "start": 1264,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1275,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1279,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1292,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1323,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1329,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1335,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 1350,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1356,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1452,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1458,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1464,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1481,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1492,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 1508,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1612,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1618,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1624,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1636,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1641,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1652,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1662,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1672,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1722,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1728,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1734,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1746,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1751,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1772,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1781,
    "end": 1788
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 1789,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1845,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1851,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1857,
    "end": 1867
  },
  {
    "type": "JSXIdentifier",
    "value": "data-format",
    "start": 1868,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1882,
    "end": 1883
  }
]
```
