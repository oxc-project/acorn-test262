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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 899,
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
            "name": "defaultModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "getSpecifier",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 87,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 81,
          "end": 87
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 89,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 124,
        "name": "ValidSomeCondition",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 135,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 128,
          "end": 135
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 168,
            "name": "whatToLoad",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 168,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 161,
                "end": 168
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 201,
            "name": "directory",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 201,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 235,
            "name": "moduleFile",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
          "expressions": [
            {
              "type": "Identifier",
              "start": 248,
              "end": 257,
              "name": "directory",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 262,
              "end": 272,
              "name": "moduleFile",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
          ]
        },
        "options": null
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
            "name": "getSpecifier",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "options": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "ValidSomeCondition",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
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
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 388,
            "name": "p1",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                "name": "getSpecifier",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 478,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 453,
            "name": "p11",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "defaultModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "getSpecifier",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 480,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 488,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "whatToLoad",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 511,
                  "end": 525,
                  "callee": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 523,
                    "name": "getSpecifier",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "alternate": {
                  "type": "Literal",
                  "start": 528,
                  "end": 540,
                  "value": "defaulPath",
                  "raw": "\"defaulPath\""
                }
              },
              "options": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 545,
              "end": 574,
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 552,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "defaultModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "kind": "const",
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
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 579,
            "end": 583,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 584,
            "end": 638,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 588,
                "name": "zero",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                        "name": "zero",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 613,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 642,
      "end": 656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 646,
          "end": 655,
          "id": {
            "type": "Identifier",
            "start": 646,
            "end": 655,
            "name": "j",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 647,
              "end": 655,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 649,
                "end": 655
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 657,
      "end": 722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 694,
            "name": "p3",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "defaultModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 706,
                "end": 720,
                "callee": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 718,
                  "name": "getSpecifier",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "loadModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 746,
          "end": 767,
          "name": "directories",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 786,
                  "end": 795,
                  "id": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 795,
                    "name": "directory",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 799,
              "end": 810,
              "name": "directories",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 828,
                      "end": 861,
                      "id": {
                        "type": "Identifier",
                        "start": 828,
                        "end": 832,
                        "name": "path",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "start": 835,
                        "end": 861,
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 838,
                            "end": 847,
                            "name": "directory",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                        ]
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
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
                        "name": "path",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "options": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
