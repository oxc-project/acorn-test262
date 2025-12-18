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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 379
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
                  "start": 388,
                  "end": 396
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 398,
                  "end": 402
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 388,
                "end": 402
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
                  "start": 408,
                  "end": 410
                },
                "value": {
                  "type": "Literal",
                  "value": "boo",
                  "raw": "\"boo\"",
                  "start": 412,
                  "end": 417
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 408,
                "end": 417
              }
            ],
            "start": 382,
            "end": 419
          },
          "definite": false,
          "start": 376,
          "end": 419
        }
      ],
      "declare": false,
      "start": 372,
      "end": 419
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 430,
                "end": 433
              },
              "start": 428,
              "end": 433
            },
            "start": 424,
            "end": 433
          },
          "init": null,
          "definite": false,
          "start": 424,
          "end": 433
        }
      ],
      "declare": false,
      "start": 420,
      "end": 434
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
            "start": 439,
            "end": 443
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
                  "start": 452,
                  "end": 459
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
                    "start": 467,
                    "end": 469
                  },
                  "id": null,
                  "generator": false,
                  "start": 461,
                  "end": 469
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 452,
                "end": 469
              }
            ],
            "start": 446,
            "end": 471
          },
          "definite": false,
          "start": 439,
          "end": 471
        }
      ],
      "declare": false,
      "start": 435,
      "end": 471
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
          "start": 489,
          "end": 499
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
                  "start": 513,
                  "end": 524
                },
                "typeArguments": null,
                "start": 513,
                "end": 524
              },
              "start": 511,
              "end": 524
            },
            "start": 500,
            "end": 524
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
                "start": 527,
                "end": 530
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 538
              },
              "start": 527,
              "end": 538
            },
            "typeArguments": null,
            "start": 527,
            "end": 538
          },
          "start": 525,
          "end": 538
        },
        "body": null,
        "expression": false,
        "start": 480,
        "end": 539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 473,
      "end": 539
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
          "start": 556,
          "end": 566
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
                  "start": 578,
                  "end": 587
                },
                "typeArguments": null,
                "start": 578,
                "end": 587
              },
              "start": 576,
              "end": 587
            },
            "start": 567,
            "end": 587
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
                "start": 590,
                "end": 593
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 601
              },
              "start": 590,
              "end": 601
            },
            "typeArguments": null,
            "start": 590,
            "end": 601
          },
          "start": 588,
          "end": 601
        },
        "body": null,
        "expression": false,
        "start": 547,
        "end": 602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 540,
      "end": 602
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
          "start": 619,
          "end": 629
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
                  "start": 643,
                  "end": 654
                },
                "typeArguments": null,
                "start": 643,
                "end": 654
              },
              "start": 641,
              "end": 654
            },
            "start": 630,
            "end": 654
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
                "start": 657,
                "end": 660
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 668
              },
              "start": 657,
              "end": 668
            },
            "typeArguments": null,
            "start": 657,
            "end": 668
          },
          "start": 655,
          "end": 668
        },
        "body": null,
        "expression": false,
        "start": 610,
        "end": 669
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 603,
      "end": 669
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
          "start": 686,
          "end": 696
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
                      "start": 704,
                      "end": 715
                    },
                    "typeArguments": null,
                    "start": 704,
                    "end": 715
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 727
                    },
                    "typeArguments": null,
                    "start": 718,
                    "end": 727
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HyphenProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 741
                    },
                    "typeArguments": null,
                    "start": 730,
                    "end": 741
                  }
                ],
                "start": 704,
                "end": 741
              },
              "start": 702,
              "end": 741
            },
            "start": 697,
            "end": 741
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
                "start": 744,
                "end": 747
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 755
              },
              "start": 744,
              "end": 755
            },
            "typeArguments": null,
            "start": 744,
            "end": 755
          },
          "start": 742,
          "end": 755
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
                    "start": 768,
                    "end": 777
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 780,
                      "end": 785
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 798
                      },
                      "typeArguments": null,
                      "start": 789,
                      "end": 798
                    },
                    "start": 780,
                    "end": 798
                  },
                  "definite": false,
                  "start": 768,
                  "end": 798
                }
              ],
              "declare": false,
              "start": 762,
              "end": 799
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
                  "start": 807,
                  "end": 816
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 817,
                  "end": 819
                },
                "optional": false,
                "computed": false,
                "start": 807,
                "end": 819
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
                          "start": 838,
                          "end": 842
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 843,
                          "end": 857
                        },
                        "optional": false,
                        "computed": false,
                        "start": 838,
                        "end": 857
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 858,
                          "end": 863
                        }
                      ],
                      "optional": false,
                      "start": 838,
                      "end": 864
                    },
                    "start": 831,
                    "end": 865
                  }
                ],
                "start": 821,
                "end": 871
              },
              "alternate": null,
              "start": 804,
              "end": 871
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 884,
                    "end": 888
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 905
                  },
                  "optional": false,
                  "computed": false,
                  "start": 884,
                  "end": 905
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 911
                  }
                ],
                "optional": false,
                "start": 884,
                "end": 912
              },
              "start": 877,
              "end": 913
            }
          ],
          "start": 756,
          "end": 915
        },
        "expression": false,
        "start": 677,
        "end": 915
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 670,
      "end": 915
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
            "start": 929,
            "end": 931
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 935,
                "end": 945
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 946,
                    "end": 948
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/some/path",
                    "raw": "'/some/path'",
                    "start": 949,
                    "end": 961
                  },
                  "start": 946,
                  "end": 961
                }
              ],
              "selfClosing": false,
              "start": 934,
              "end": 962
            },
            "children": [
              {
                "type": "JSXText",
                "value": "GO",
                "raw": "GO",
                "start": 962,
                "end": 964
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 966,
                "end": 976
              },
              "start": 964,
              "end": 977
            },
            "start": 934,
            "end": 977
          },
          "definite": false,
          "start": 929,
          "end": 977
        }
      ],
      "declare": false,
      "start": 923,
      "end": 978
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
            "start": 985,
            "end": 987
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 991,
                "end": 1001
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 1002,
                    "end": 1009
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
                          "start": 1012,
                          "end": 1013
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1018,
                        "end": 1020
                      },
                      "id": null,
                      "generator": false,
                      "start": 1011,
                      "end": 1020
                    },
                    "start": 1010,
                    "end": 1021
                  },
                  "start": 1002,
                  "end": 1021
                }
              ],
              "selfClosing": false,
              "start": 990,
              "end": 1022
            },
            "children": [
              {
                "type": "JSXText",
                "value": "Hello world",
                "raw": "Hello world",
                "start": 1022,
                "end": 1033
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1035,
                "end": 1045
              },
              "start": 1033,
              "end": 1046
            },
            "start": 990,
            "end": 1046
          },
          "definite": false,
          "start": 985,
          "end": 1046
        }
      ],
      "declare": false,
      "start": 979,
      "end": 1047
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
            "start": 1054,
            "end": 1056
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1060,
                "end": 1070
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
                    "start": 1075,
                    "end": 1078
                  },
                  "start": 1071,
                  "end": 1079
                }
              ],
              "selfClosing": true,
              "start": 1059,
              "end": 1082
            },
            "children": [],
            "closingElement": null,
            "start": 1059,
            "end": 1082
          },
          "definite": false,
          "start": 1054,
          "end": 1082
        }
      ],
      "declare": false,
      "start": 1048,
      "end": 1083
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
            "start": 1090,
            "end": 1092
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1096,
                "end": 1106
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
                          "start": 1112,
                          "end": 1114
                        },
                        "value": {
                          "type": "Literal",
                          "value": 10000,
                          "raw": "10000",
                          "start": 1116,
                          "end": 1121
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1112,
                        "end": 1121
                      }
                    ],
                    "start": 1111,
                    "end": 1122
                  },
                  "start": 1107,
                  "end": 1123
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1131
                  },
                  "start": 1124,
                  "end": 1132
                }
              ],
              "selfClosing": true,
              "start": 1095,
              "end": 1135
            },
            "children": [],
            "closingElement": null,
            "start": 1095,
            "end": 1135
          },
          "definite": false,
          "start": 1090,
          "end": 1135
        }
      ],
      "declare": false,
      "start": 1084,
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1143,
            "end": 1145
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1149,
                "end": 1159
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
                    "start": 1164,
                    "end": 1168
                  },
                  "start": 1160,
                  "end": 1169
                }
              ],
              "selfClosing": true,
              "start": 1148,
              "end": 1172
            },
            "children": [],
            "closingElement": null,
            "start": 1148,
            "end": 1172
          },
          "definite": false,
          "start": 1143,
          "end": 1172
        }
      ],
      "declare": false,
      "start": 1137,
      "end": 1173
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
            "start": 1218,
            "end": 1220
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1224,
                "end": 1234
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
                    "start": 1239,
                    "end": 1243
                  },
                  "start": 1235,
                  "end": 1244
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1245,
                    "end": 1247
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/to/somewhere",
                    "raw": "\"/to/somewhere\"",
                    "start": 1248,
                    "end": 1263
                  },
                  "start": 1245,
                  "end": 1263
                }
              ],
              "selfClosing": true,
              "start": 1223,
              "end": 1266
            },
            "children": [],
            "closingElement": null,
            "start": 1223,
            "end": 1266
          },
          "definite": false,
          "start": 1218,
          "end": 1266
        }
      ],
      "declare": false,
      "start": 1212,
      "end": 1267
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
            "start": 1310,
            "end": 1312
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1316,
                "end": 1326
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1331,
                    "end": 1335
                  },
                  "start": 1327,
                  "end": 1336
                }
              ],
              "selfClosing": true,
              "start": 1315,
              "end": 1339
            },
            "children": [],
            "closingElement": null,
            "start": 1315,
            "end": 1339
          },
          "definite": false,
          "start": 1310,
          "end": 1339
        }
      ],
      "declare": false,
      "start": 1304,
      "end": 1340
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
            "start": 1347,
            "end": 1349
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1353,
                "end": 1363
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
                          "start": 1369,
                          "end": 1376
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
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1386,
                                      "end": 1393
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1394,
                                      "end": 1397
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1386,
                                    "end": 1397
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "hi",
                                      "raw": "\"hi\"",
                                      "start": 1398,
                                      "end": 1402
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1386,
                                  "end": 1403
                                },
                                "directive": null,
                                "start": 1386,
                                "end": 1403
                              }
                            ],
                            "start": 1384,
                            "end": 1405
                          },
                          "id": null,
                          "generator": false,
                          "start": 1378,
                          "end": 1405
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1369,
                        "end": 1405
                      }
                    ],
                    "start": 1368,
                    "end": 1406
                  },
                  "start": 1364,
                  "end": 1407
                }
              ],
              "selfClosing": true,
              "start": 1352,
              "end": 1410
            },
            "children": [],
            "closingElement": null,
            "start": 1352,
            "end": 1410
          },
          "definite": false,
          "start": 1347,
          "end": 1410
        }
      ],
      "declare": false,
      "start": 1341,
      "end": 1411
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
            "start": 1418,
            "end": 1420
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1424,
                "end": 1434
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
                          "start": 1440,
                          "end": 1447
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
                            "start": 1450,
                            "end": 1452
                          },
                          "expression": false,
                          "start": 1447,
                          "end": 1452
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1440,
                        "end": 1452
                      }
                    ],
                    "start": 1439,
                    "end": 1453
                  },
                  "start": 1435,
                  "end": 1454
                }
              ],
              "selfClosing": true,
              "start": 1423,
              "end": 1457
            },
            "children": [],
            "closingElement": null,
            "start": 1423,
            "end": 1457
          },
          "definite": false,
          "start": 1418,
          "end": 1457
        }
      ],
      "declare": false,
      "start": 1412,
      "end": 1458
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
            "name": "b9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1525,
            "end": 1527
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1531,
                "end": 1541
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1542,
                    "end": 1544
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/some/path",
                    "raw": "'/some/path'",
                    "start": 1545,
                    "end": 1557
                  },
                  "start": 1542,
                  "end": 1557
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra-prop",
                    "start": 1558,
                    "end": 1568
                  },
                  "value": null,
                  "start": 1558,
                  "end": 1568
                }
              ],
              "selfClosing": false,
              "start": 1530,
              "end": 1569
            },
            "children": [
              {
                "type": "JSXText",
                "value": "GO",
                "raw": "GO",
                "start": 1569,
                "end": 1571
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1573,
                "end": 1583
              },
              "start": 1571,
              "end": 1584
            },
            "start": 1530,
            "end": 1584
          },
          "definite": false,
          "start": 1525,
          "end": 1584
        }
      ],
      "declare": false,
      "start": 1519,
      "end": 1585
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
            "name": "b10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1592,
            "end": 1595
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1599,
                "end": 1609
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1610,
                    "end": 1612
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/some/path",
                    "raw": "'/some/path'",
                    "start": 1613,
                    "end": 1625
                  },
                  "start": 1610,
                  "end": 1625
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 1626,
                    "end": 1634
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 1635,
                    "end": 1639
                  },
                  "start": 1626,
                  "end": 1639
                }
              ],
              "selfClosing": false,
              "start": 1598,
              "end": 1641
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1643,
                "end": 1653
              },
              "start": 1641,
              "end": 1654
            },
            "start": 1598,
            "end": 1654
          },
          "definite": false,
          "start": 1592,
          "end": 1654
        }
      ],
      "declare": false,
      "start": 1586,
      "end": 1655
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
            "name": "b11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1662,
            "end": 1665
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1669,
                "end": 1679
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 1680,
                    "end": 1687
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
                          "start": 1690,
                          "end": 1691
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1696,
                        "end": 1698
                      },
                      "id": null,
                      "generator": false,
                      "start": 1689,
                      "end": 1698
                    },
                    "start": 1688,
                    "end": 1699
                  },
                  "start": 1680,
                  "end": 1699
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "start": 1700,
                    "end": 1709
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1710,
                    "end": 1717
                  },
                  "start": 1700,
                  "end": 1717
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-format",
                    "start": 1718,
                    "end": 1729
                  },
                  "value": null,
                  "start": 1718,
                  "end": 1729
                }
              ],
              "selfClosing": false,
              "start": 1668,
              "end": 1730
            },
            "children": [
              {
                "type": "JSXText",
                "value": "Hello world",
                "raw": "Hello world",
                "start": 1730,
                "end": 1741
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1743,
                "end": 1753
              },
              "start": 1741,
              "end": 1754
            },
            "start": 1668,
            "end": 1754
          },
          "definite": false,
          "start": 1662,
          "end": 1754
        }
      ],
      "declare": false,
      "start": 1656,
      "end": 1755
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
            "name": "b12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1762,
            "end": 1765
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1769,
                "end": 1779
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-format",
                    "start": 1780,
                    "end": 1791
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hello world",
                    "raw": "\"Hello world\"",
                    "start": 1792,
                    "end": 1805
                  },
                  "start": 1780,
                  "end": 1805
                }
              ],
              "selfClosing": true,
              "start": 1768,
              "end": 1808
            },
            "children": [],
            "closingElement": null,
            "start": 1768,
            "end": 1808
          },
          "definite": false,
          "start": 1762,
          "end": 1808
        }
      ],
      "declare": false,
      "start": 1756,
      "end": 1808
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1810
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
    "value": "obj",
    "start": 376,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 388,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "String",
    "value": "\"boo\"",
    "start": 412,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 420,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 452,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 473,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 480,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 489,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 500,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 513,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 527,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 531,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 540,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 547,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 556,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 567,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 578,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 594,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 603,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 610,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 619,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "hyphenProps",
    "start": 630,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 643,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 661,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 670,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 677,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 686,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 697,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 704,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 718,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 730,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 744,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 748,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 762,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 768,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 780,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 786,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 789,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 804,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 807,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 831,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "_buildMainLink",
    "start": 843,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 858,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 877,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 884,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "_buildMainButton",
    "start": 889,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 906,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 923,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 929,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 934,
    "end": 935
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 935,
    "end": 945
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 946,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 948,
    "end": 949
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 949,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 961,
    "end": 962
  },
  {
    "type": "JSXText",
    "value": "GO",
    "start": 962,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 965,
    "end": 966
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 966,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 979,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 985,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 990,
    "end": 991
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 991,
    "end": 1001
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1002,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1015,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "JSXText",
    "value": "Hello world",
    "start": 1022,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1035,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1048,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1060,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1084,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1096,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Numeric",
    "value": "10000",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1133,
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
    "start": 1137,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1143,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1149,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1164,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1212,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1218,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1224,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1239,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "JSXText",
    "value": "\"/to/somewhere\"",
    "start": 1248,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1304,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1310,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1316,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1328,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 1331,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1341,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1347,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1353,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1369,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 1386,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1398,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1412,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1418,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1424,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1440,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1519,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1531,
    "end": 1541
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1542,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 1545,
    "end": 1557
  },
  {
    "type": "JSXIdentifier",
    "value": "extra-prop",
    "start": 1558,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "JSXText",
    "value": "GO",
    "start": 1569,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1573,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1586,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 1592,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1599,
    "end": 1609
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1610,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 1613,
    "end": 1625
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1626,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 1635,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1643,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1656,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 1662,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1669,
    "end": 1679
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1680,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1693,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 1700,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1710,
    "end": 1717
  },
  {
    "type": "JSXIdentifier",
    "value": "data-format",
    "start": 1718,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "JSXText",
    "value": "Hello world",
    "start": 1730,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1743,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1756,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1769,
    "end": 1779
  },
  {
    "type": "JSXIdentifier",
    "value": "data-format",
    "start": 1780,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "JSXText",
    "value": "\"Hello world\"",
    "start": 1792,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1807,
    "end": 1808
  }
]
```
