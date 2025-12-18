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
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 40,
    "end": 49,
    "range": [
      40,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 50,
    "end": 64,
    "range": [
      50,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 71,
    "end": 79,
    "range": [
      71,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 94,
    "end": 103,
    "range": [
      94,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112,
    "range": [
      106,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 124,
    "end": 133,
    "range": [
      124,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 134,
    "end": 145,
    "range": [
      134,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 146,
    "end": 153,
    "range": [
      146,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 154,
    "end": 168,
    "range": [
      154,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 175,
    "end": 182,
    "range": [
      175,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 184,
    "end": 189,
    "range": [
      184,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseEventHandler",
    "start": 190,
    "end": 207,
    "range": [
      190,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 208,
    "end": 211,
    "range": [
      208,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223,
    "range": [
      217,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 224,
    "end": 233,
    "range": [
      224,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 234,
    "end": 243,
    "range": [
      234,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251,
    "range": [
      244,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 252,
    "end": 266,
    "range": [
      252,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 273,
    "end": 275,
    "range": [
      273,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 277,
    "end": 283,
    "range": [
      277,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 288,
    "end": 294,
    "range": [
      288,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 295,
    "end": 304,
    "range": [
      295,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 305,
    "end": 316,
    "range": [
      305,
      316
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 317,
    "end": 324,
    "range": [
      317,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 325,
    "end": 339,
    "range": [
      325,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "String",
    "value": "\"data-format\"",
    "start": 346,
    "end": 359,
    "range": [
      346,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 361,
    "end": 367,
    "range": [
      361,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 372,
    "end": 375,
    "range": [
      372,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 376,
    "end": 380,
    "range": [
      376,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 389,
    "end": 391,
    "range": [
      389,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 393,
    "end": 400,
    "range": [
      393,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 405,
    "end": 408,
    "range": [
      405,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 409,
    "end": 413,
    "range": [
      409,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 422,
    "end": 430,
    "range": [
      422,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 432,
    "end": 436,
    "range": [
      432,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 442,
    "end": 444,
    "range": [
      442,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "String",
    "value": "\"boo\"",
    "start": 446,
    "end": 451,
    "range": [
      446,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 455,
    "end": 458,
    "range": [
      455,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 459,
    "end": 463,
    "range": [
      459,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 472,
    "end": 479,
    "range": [
      472,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 483,
    "end": 485,
    "range": [
      483,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 491,
    "end": 494,
    "range": [
      491,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 495,
    "end": 499,
    "range": [
      495,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 501,
    "end": 504,
    "range": [
      501,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 507,
    "end": 513,
    "range": [
      507,
      513
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 514,
    "end": 522,
    "range": [
      514,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 523,
    "end": 533,
    "range": [
      523,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 534,
    "end": 545,
    "range": [
      534,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 547,
    "end": 558,
    "range": [
      547,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 561,
    "end": 564,
    "range": [
      561,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 565,
    "end": 572,
    "range": [
      565,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 574,
    "end": 580,
    "range": [
      574,
      580
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 581,
    "end": 589,
    "range": [
      581,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 590,
    "end": 600,
    "range": [
      590,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 601,
    "end": 610,
    "range": [
      601,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 612,
    "end": 621,
    "range": [
      612,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 624,
    "end": 627,
    "range": [
      624,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 628,
    "end": 635,
    "range": [
      628,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 637,
    "end": 643,
    "range": [
      637,
      643
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 644,
    "end": 652,
    "range": [
      644,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 653,
    "end": 663,
    "range": [
      653,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "hyphenProps",
    "start": 664,
    "end": 675,
    "range": [
      664,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 677,
    "end": 688,
    "range": [
      677,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 691,
    "end": 694,
    "range": [
      691,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 695,
    "end": 702,
    "range": [
      695,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 704,
    "end": 710,
    "range": [
      704,
      710
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 711,
    "end": 719,
    "range": [
      711,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 720,
    "end": 730,
    "range": [
      720,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 731,
    "end": 736,
    "range": [
      731,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 738,
    "end": 749,
    "range": [
      738,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 752,
    "end": 761,
    "range": [
      752,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 764,
    "end": 775,
    "range": [
      764,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 778,
    "end": 781,
    "range": [
      778,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 782,
    "end": 789,
    "range": [
      782,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 796,
    "end": 801,
    "range": [
      796,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 802,
    "end": 811,
    "range": [
      802,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 814,
    "end": 819,
    "range": [
      814,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 820,
    "end": 822,
    "range": [
      820,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 823,
    "end": 832,
    "range": [
      823,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 838,
    "end": 840,
    "range": [
      838,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 841,
    "end": 850,
    "range": [
      841,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 851,
    "end": 853,
    "range": [
      851,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 865,
    "end": 871,
    "range": [
      865,
      871
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 872,
    "end": 876,
    "range": [
      872,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "_buildMainLink",
    "start": 877,
    "end": 891,
    "range": [
      877,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 892,
    "end": 897,
    "range": [
      892,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 911,
    "end": 917,
    "range": [
      911,
      917
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 918,
    "end": 922,
    "range": [
      918,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "_buildMainButton",
    "start": 923,
    "end": 939,
    "range": [
      923,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 940,
    "end": 945,
    "range": [
      940,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 960,
    "end": 965,
    "range": [
      960,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 966,
    "end": 968,
    "range": [
      966,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 972,
    "end": 982,
    "range": [
      972,
      982
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 983,
    "end": 985,
    "range": [
      983,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 986,
    "end": 998,
    "range": [
      986,
      998
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 999,
    "end": 1006,
    "range": [
      999,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1011,
    "end": 1013,
    "range": [
      1011,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "JSXText",
    "value": "GO",
    "start": 1017,
    "end": 1019,
    "range": [
      1017,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1021,
    "end": 1031,
    "range": [
      1021,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1054,
    "end": 1059,
    "range": [
      1054,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1060,
    "end": 1062,
    "range": [
      1060,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1066,
    "end": 1076,
    "range": [
      1066,
      1076
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1077,
    "end": 1084,
    "range": [
      1077,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1090,
    "end": 1093,
    "range": [
      1090,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1094,
    "end": 1096,
    "range": [
      1094,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1102,
    "end": 1105,
    "range": [
      1102,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 1105,
    "end": 1109,
    "range": [
      1105,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "JSXText",
    "value": "Hello world",
    "start": 1111,
    "end": 1122,
    "range": [
      1111,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1124,
    "end": 1134,
    "range": [
      1124,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1157,
    "end": 1162,
    "range": [
      1157,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1163,
    "end": 1165,
    "range": [
      1163,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1169,
    "end": 1179,
    "range": [
      1169,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1181,
    "end": 1184,
    "range": [
      1181,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "String",
    "value": "\"10000\"",
    "start": 1189,
    "end": 1196,
    "range": [
      1189,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1200,
    "end": 1203,
    "range": [
      1200,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 1203,
    "end": 1207,
    "range": [
      1203,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1232,
    "end": 1237,
    "range": [
      1232,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1238,
    "end": 1240,
    "range": [
      1238,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1244,
    "end": 1254,
    "range": [
      1244,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1256,
    "end": 1259,
    "range": [
      1256,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 1260,
    "end": 1262,
    "range": [
      1260,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "String",
    "value": "\"10000\"",
    "start": 1264,
    "end": 1271,
    "range": [
      1264,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1275,
    "end": 1278,
    "range": [
      1275,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1279,
    "end": 1286,
    "range": [
      1279,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1292,
    "end": 1294,
    "range": [
      1292,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1323,
    "end": 1328,
    "range": [
      1323,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1329,
    "end": 1331,
    "range": [
      1329,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1335,
    "end": 1345,
    "range": [
      1335,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1347,
    "end": 1350,
    "range": [
      1347,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 1350,
    "end": 1354,
    "range": [
      1350,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1356,
    "end": 1358,
    "range": [
      1356,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1452,
    "end": 1457,
    "range": [
      1452,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1458,
    "end": 1460,
    "range": [
      1458,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1464,
    "end": 1474,
    "range": [
      1464,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1476,
    "end": 1479,
    "range": [
      1476,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1481,
    "end": 1488,
    "range": [
      1481,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1492,
    "end": 1495,
    "range": [
      1492,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1505,
    "end": 1508,
    "range": [
      1505,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 1508,
    "end": 1512,
    "range": [
      1508,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1612,
    "end": 1617,
    "range": [
      1612,
      1617
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1618,
    "end": 1620,
    "range": [
      1618,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1624,
    "end": 1634,
    "range": [
      1624,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1636,
    "end": 1639,
    "range": [
      1636,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1641,
    "end": 1648,
    "range": [
      1641,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1652,
    "end": 1655,
    "range": [
      1652,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1662,
    "end": 1670,
    "range": [
      1662,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1672,
    "end": 1674,
    "range": [
      1672,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1722,
    "end": 1727,
    "range": [
      1722,
      1727
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1728,
    "end": 1730,
    "range": [
      1728,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1734,
    "end": 1744,
    "range": [
      1734,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1746,
    "end": 1749,
    "range": [
      1746,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1751,
    "end": 1758,
    "range": [
      1751,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1762,
    "end": 1765,
    "range": [
      1762,
      1765
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1772,
    "end": 1780,
    "range": [
      1772,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1781,
    "end": 1788,
    "range": [
      1781,
      1788
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 1789,
    "end": 1798,
    "range": [
      1789,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1845,
    "end": 1850,
    "range": [
      1845,
      1850
    ]
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1851,
    "end": 1853,
    "range": [
      1851,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1857,
    "end": 1867,
    "range": [
      1857,
      1867
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "data-format",
    "start": 1868,
    "end": 1879,
    "range": [
      1868,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  }
]
```
