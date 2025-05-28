__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 898,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 25,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "decorators": [],
            "name": "defaultModule",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 46,
        "value": "./defaultPath",
        "raw": "\"./defaultPath\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 48,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 77,
        "decorators": [],
        "name": "getSpecifier",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 87,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 81,
          "end": 87
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 89,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 124,
        "decorators": [],
        "name": "ValidSomeCondition",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 135,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 128,
          "end": 135
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 168,
            "decorators": [],
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 168,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 161,
                "end": 168
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 202,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 201,
            "decorators": [],
            "name": "directory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 201,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 236,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 235,
            "decorators": [],
            "name": "moduleFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 276,
      "expression": {
        "type": "ImportExpression",
        "start": 238,
        "end": 275,
        "source": {
          "type": "TemplateLiteral",
          "start": 245,
          "end": 274,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 245,
              "end": 248,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 257,
              "end": 262,
              "value": {
                "cooked": "\\",
                "raw": "\\\\"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 272,
              "end": 274,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Identifier",
              "start": 248,
              "end": 257,
              "decorators": [],
              "name": "directory",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 262,
              "end": 272,
              "decorators": [],
              "name": "moduleFile",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        },
        "options": null,
        "phase": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 300,
      "expression": {
        "type": "ImportExpression",
        "start": 277,
        "end": 299,
        "source": {
          "type": "CallExpression",
          "start": 284,
          "end": 298,
          "callee": {
            "type": "Identifier",
            "start": 284,
            "end": 296,
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "options": null,
        "phase": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 367,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 311,
            "end": 366,
            "source": {
              "type": "ConditionalExpression",
              "start": 318,
              "end": 365,
              "test": {
                "type": "CallExpression",
                "start": 318,
                "end": 338,
                "callee": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 336,
                  "decorators": [],
                  "name": "ValidSomeCondition",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "consequent": {
                "type": "Literal",
                "start": 341,
                "end": 346,
                "value": "./0",
                "raw": "\"./0\""
              },
              "alternate": {
                "type": "Literal",
                "start": 349,
                "end": 365,
                "value": "externalModule",
                "raw": "\"externalModule\""
              }
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 414,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 388,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 388,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 376,
                "end": 388,
                "typeName": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 383,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 383,
                  "end": 388,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 384,
                      "end": 387
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "start": 391,
            "end": 413,
            "source": {
              "type": "CallExpression",
              "start": 398,
              "end": 412,
              "callee": {
                "type": "Identifier",
                "start": 398,
                "end": 410,
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 479,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 478,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 453,
            "decorators": [],
            "name": "p11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 453,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 424,
                "end": 453,
                "typeName": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 431,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 431,
                  "end": 453,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 432,
                      "end": 452,
                      "exprName": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 452,
                        "decorators": [],
                        "name": "defaultModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "start": 456,
            "end": 478,
            "source": {
              "type": "CallExpression",
              "start": 463,
              "end": 477,
              "callee": {
                "type": "Identifier",
                "start": 463,
                "end": 475,
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 480,
      "end": 575,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 488,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 491,
            "end": 574,
            "expression": {
              "type": "ImportExpression",
              "start": 491,
              "end": 541,
              "source": {
                "type": "ConditionalExpression",
                "start": 498,
                "end": 540,
                "test": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 508,
                  "decorators": [],
                  "name": "whatToLoad",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 511,
                  "end": 525,
                  "callee": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 523,
                    "decorators": [],
                    "name": "getSpecifier",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "alternate": {
                  "type": "Literal",
                  "start": 528,
                  "end": 540,
                  "value": "defaulPath",
                  "raw": "\"defaulPath\""
                }
              },
              "options": null,
              "phase": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 545,
              "end": 574,
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 552,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 552,
                "end": 574,
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "start": 553,
                    "end": 573,
                    "exprName": {
                      "type": "Identifier",
                      "start": 560,
                      "end": 573,
                      "decorators": [],
                      "name": "defaultModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 576,
      "end": 640,
      "expression": {
        "type": "CallExpression",
        "start": 576,
        "end": 639,
        "callee": {
          "type": "MemberExpression",
          "start": 576,
          "end": 583,
          "object": {
            "type": "Identifier",
            "start": 576,
            "end": 578,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 579,
            "end": 583,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 584,
            "end": 638,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 588,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 592,
              "end": 638,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 598,
                  "end": 616,
                  "argument": {
                    "type": "CallExpression",
                    "start": 605,
                    "end": 615,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 605,
                      "end": 613,
                      "object": {
                        "type": "Identifier",
                        "start": 605,
                        "end": 609,
                        "decorators": [],
                        "name": "zero",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 613,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 642,
      "end": 656,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 646,
          "end": 655,
          "id": {
            "type": "Identifier",
            "start": 646,
            "end": 655,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 647,
              "end": 655,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 649,
                "end": 655
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 657,
      "end": 722,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 694,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 663,
              "end": 694,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 665,
                "end": 694,
                "typeName": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 672,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 672,
                  "end": 694,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 673,
                      "end": 693,
                      "exprName": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 693,
                        "decorators": [],
                        "name": "defaultModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "start": 697,
            "end": 721,
            "source": {
              "type": "AssignmentExpression",
              "start": 704,
              "end": 720,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 706,
                "end": 720,
                "callee": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 718,
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 724,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 745,
        "decorators": [],
        "name": "loadModule",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 746,
          "end": 767,
          "decorators": [],
          "name": "directories",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 757,
            "end": 767,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 759,
              "end": 767,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 759,
                "end": 765
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 769,
        "end": 898,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 775,
            "end": 896,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 780,
              "end": 795,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 786,
                  "end": 795,
                  "id": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 795,
                    "decorators": [],
                    "name": "directory",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 799,
              "end": 810,
              "decorators": [],
              "name": "directories",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 812,
              "end": 896,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 822,
                  "end": 862,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 828,
                      "end": 861,
                      "id": {
                        "type": "Identifier",
                        "start": 828,
                        "end": 832,
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "start": 835,
                        "end": 861,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 835,
                            "end": 838,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 847,
                            "end": 861,
                            "value": {
                              "cooked": "\\moduleFile",
                              "raw": "\\\\moduleFile"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 838,
                            "end": 847,
                            "decorators": [],
                            "name": "directory",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 871,
                  "end": 890,
                  "expression": {
                    "type": "ImportExpression",
                    "start": 871,
                    "end": 889,
                    "source": {
                      "type": "YieldExpression",
                      "start": 878,
                      "end": 888,
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 888,
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "options": null,
                    "phase": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
