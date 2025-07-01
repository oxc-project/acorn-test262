__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 25
          },
          "start": 7,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./defaultPath",
        "raw": "\"./defaultPath\"",
        "start": 31,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSpecifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 77
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 81,
          "end": 87
        },
        "start": 79,
        "end": 87
      },
      "body": null,
      "expression": false,
      "start": 48,
      "end": 88
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValidSomeCondition",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 124
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 128,
          "end": 135
        },
        "start": 126,
        "end": 135
      },
      "body": null,
      "expression": false,
      "start": 89,
      "end": 136
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
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 161,
                "end": 168
              },
              "start": 159,
              "end": 168
            },
            "start": 149,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 149,
          "end": 168
        }
      ],
      "declare": true,
      "start": 137,
      "end": 169
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
            "name": "directory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
              },
              "start": 193,
              "end": 201
            },
            "start": 184,
            "end": 201
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 201
        }
      ],
      "declare": true,
      "start": 170,
      "end": 202
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
            "name": "moduleFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              },
              "start": 227,
              "end": 235
            },
            "start": 217,
            "end": 235
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 235
        }
      ],
      "declare": true,
      "start": 203,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 245,
              "end": 248
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "\\\\",
                "cooked": "\\"
              },
              "tail": false,
              "start": 257,
              "end": 262
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 272,
              "end": 274
            }
          ],
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "directory",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 257
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleFile",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 272
            }
          ],
          "start": 245,
          "end": 274
        },
        "options": null,
        "phase": null,
        "start": 238,
        "end": 275
      },
      "directive": null,
      "start": 238,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 296
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 284,
          "end": 298
        },
        "options": null,
        "phase": null,
        "start": 277,
        "end": 299
      },
      "directive": null,
      "start": 277,
      "end": 300
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 308
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValidSomeCondition",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 336
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 318,
                "end": 338
              },
              "consequent": {
                "type": "Literal",
                "value": "./0",
                "raw": "\"./0\"",
                "start": 341,
                "end": 346
              },
              "alternate": {
                "type": "Literal",
                "value": "externalModule",
                "raw": "\"externalModule\"",
                "start": 349,
                "end": 365
              },
              "start": 318,
              "end": 365
            },
            "options": null,
            "phase": null,
            "start": 311,
            "end": 366
          },
          "definite": false,
          "start": 306,
          "end": 366
        }
      ],
      "declare": false,
      "start": 302,
      "end": 367
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 383
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 384,
                      "end": 387
                    }
                  ],
                  "start": 383,
                  "end": 388
                },
                "start": 376,
                "end": 388
              },
              "start": 374,
              "end": 388
            },
            "start": 372,
            "end": 388
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 410
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 398,
              "end": 412
            },
            "options": null,
            "phase": null,
            "start": 391,
            "end": 413
          },
          "definite": false,
          "start": 372,
          "end": 413
        }
      ],
      "declare": false,
      "start": 368,
      "end": 414
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
            "name": "p11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 431
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 452
                      },
                      "typeArguments": null,
                      "start": 432,
                      "end": 452
                    }
                  ],
                  "start": 431,
                  "end": 453
                },
                "start": 424,
                "end": 453
              },
              "start": 422,
              "end": 453
            },
            "start": 419,
            "end": 453
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 475
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 463,
              "end": 477
            },
            "options": null,
            "phase": null,
            "start": 456,
            "end": 478
          },
          "definite": false,
          "start": 419,
          "end": 478
        }
      ],
      "declare": false,
      "start": 415,
      "end": 479
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 488
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ImportExpression",
              "source": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "whatToLoad",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 508
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSpecifier",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 523
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 511,
                  "end": 525
                },
                "alternate": {
                  "type": "Literal",
                  "value": "defaulPath",
                  "raw": "\"defaulPath\"",
                  "start": 528,
                  "end": 540
                },
                "start": 498,
                "end": 540
              },
              "options": null,
              "phase": null,
              "start": 491,
              "end": 541
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 552
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defaultModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 560,
                      "end": 573
                    },
                    "typeArguments": null,
                    "start": 553,
                    "end": 573
                  }
                ],
                "start": 552,
                "end": 574
              },
              "start": 545,
              "end": 574
            },
            "start": 491,
            "end": 574
          },
          "definite": false,
          "start": 486,
          "end": 574
        }
      ],
      "declare": false,
      "start": 480,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 578
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 583
          },
          "optional": false,
          "computed": false,
          "start": 576,
          "end": 583
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 588
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zero",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 609
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 613
                      },
                      "optional": false,
                      "computed": false,
                      "start": 605,
                      "end": 613
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 605,
                    "end": 615
                  },
                  "start": 598,
                  "end": 616
                }
              ],
              "start": 592,
              "end": 638
            },
            "id": null,
            "generator": false,
            "start": 584,
            "end": 638
          }
        ],
        "optional": false,
        "start": 576,
        "end": 639
      },
      "directive": null,
      "start": 576,
      "end": 640
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
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 649,
                "end": 655
              },
              "start": 647,
              "end": 655
            },
            "start": 646,
            "end": 655
          },
          "init": null,
          "definite": false,
          "start": 646,
          "end": 655
        }
      ],
      "declare": false,
      "start": 642,
      "end": 656
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 672
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 693
                      },
                      "typeArguments": null,
                      "start": 673,
                      "end": 693
                    }
                  ],
                  "start": 672,
                  "end": 694
                },
                "start": 665,
                "end": 694
              },
              "start": 663,
              "end": 694
            },
            "start": 661,
            "end": 694
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 718
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 706,
                "end": 720
              },
              "start": 704,
              "end": 720
            },
            "options": null,
            "phase": null,
            "start": 697,
            "end": 721
          },
          "definite": false,
          "start": 661,
          "end": 721
        }
      ],
      "declare": false,
      "start": 657,
      "end": 722
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loadModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 745
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "directories",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 759,
                "end": 765
              },
              "start": 759,
              "end": 767
            },
            "start": 757,
            "end": 767
          },
          "start": 746,
          "end": 767
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "directory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 795
                  },
                  "init": null,
                  "definite": false,
                  "start": 786,
                  "end": 795
                }
              ],
              "declare": false,
              "start": 780,
              "end": 795
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "directories",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 810
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
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 828,
                        "end": 832
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 835,
                            "end": 838
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "\\\\moduleFile",
                              "cooked": "\\moduleFile"
                            },
                            "tail": true,
                            "start": 847,
                            "end": 861
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "directory",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 838,
                            "end": 847
                          }
                        ],
                        "start": 835,
                        "end": 861
                      },
                      "definite": false,
                      "start": 828,
                      "end": 861
                    }
                  ],
                  "declare": false,
                  "start": 822,
                  "end": 862
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 884,
                        "end": 888
                      },
                      "start": 878,
                      "end": 888
                    },
                    "options": null,
                    "phase": null,
                    "start": 871,
                    "end": 889
                  },
                  "directive": null,
                  "start": 871,
                  "end": 890
                }
              ],
              "start": 812,
              "end": 896
            },
            "start": 775,
            "end": 896
          }
        ],
        "start": 769,
        "end": 898
      },
      "expression": false,
      "start": 724,
      "end": 898
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 898
}
```
