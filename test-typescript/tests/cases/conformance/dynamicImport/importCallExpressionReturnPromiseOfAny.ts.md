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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 46,
        "raw": "\"./defaultPath\"",
        "value": "./defaultPath"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 48,
      "end": 88,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 77,
        "decorators": [],
        "name": "getSpecifier",
        "optional": false
      },
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 89,
      "end": 136,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 124,
        "decorators": [],
        "name": "ValidSomeCondition",
        "optional": false
      },
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 276,
      "expression": {
        "type": "ImportExpression",
        "start": 238,
        "end": 275,
        "options": null,
        "source": {
          "type": "TemplateLiteral",
          "start": 245,
          "end": 274,
          "expressions": [
            {
              "type": "Identifier",
              "start": 248,
              "end": 257,
              "decorators": [],
              "name": "directory",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 262,
              "end": 272,
              "decorators": [],
              "name": "moduleFile",
              "optional": false
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 245,
              "end": 248,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 257,
              "end": 262,
              "tail": false,
              "value": {
                "cooked": "\\",
                "raw": "\\\\"
              }
            },
            {
              "type": "TemplateElement",
              "start": 272,
              "end": 274,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 300,
      "expression": {
        "type": "ImportExpression",
        "start": 277,
        "end": 299,
        "options": null,
        "source": {
          "type": "CallExpression",
          "start": 284,
          "end": 298,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 284,
            "end": 296,
            "decorators": [],
            "name": "getSpecifier",
            "optional": false
          },
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 311,
            "end": 366,
            "options": null,
            "source": {
              "type": "ConditionalExpression",
              "start": 318,
              "end": 365,
              "alternate": {
                "type": "Literal",
                "start": 349,
                "end": 365,
                "raw": "\"externalModule\"",
                "value": "externalModule"
              },
              "consequent": {
                "type": "Literal",
                "start": 341,
                "end": 346,
                "raw": "\"./0\"",
                "value": "./0"
              },
              "test": {
                "type": "CallExpression",
                "start": 318,
                "end": 338,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 336,
                  "decorators": [],
                  "name": "ValidSomeCondition",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 383,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "start": 391,
            "end": 413,
            "options": null,
            "source": {
              "type": "CallExpression",
              "start": 398,
              "end": 412,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 398,
                "end": 410,
                "decorators": [],
                "name": "getSpecifier",
                "optional": false
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 431,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "start": 456,
            "end": 478,
            "options": null,
            "source": {
              "type": "CallExpression",
              "start": 463,
              "end": 477,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 463,
                "end": 475,
                "decorators": [],
                "name": "getSpecifier",
                "optional": false
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 488,
            "decorators": [],
            "name": "p2",
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
              "options": null,
              "source": {
                "type": "ConditionalExpression",
                "start": 498,
                "end": 540,
                "alternate": {
                  "type": "Literal",
                  "start": 528,
                  "end": 540,
                  "raw": "\"defaulPath\"",
                  "value": "defaulPath"
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 511,
                  "end": 525,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 523,
                    "decorators": [],
                    "name": "getSpecifier",
                    "optional": false
                  },
                  "optional": false
                },
                "test": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 508,
                  "decorators": [],
                  "name": "whatToLoad",
                  "optional": false
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 545,
              "end": 574,
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
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 552,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 576,
      "end": 640,
      "expression": {
        "type": "CallExpression",
        "start": 576,
        "end": 639,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 584,
            "end": 638,
            "async": false,
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
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 605,
                      "end": 613,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 605,
                        "end": 609,
                        "decorators": [],
                        "name": "zero",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 613,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 588,
                "decorators": [],
                "name": "zero",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 576,
          "end": 583,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 576,
            "end": 578,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 579,
            "end": 583,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 672,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "start": 697,
            "end": 721,
            "options": null,
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
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 706,
                "end": 720,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 718,
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 724,
      "end": 898,
      "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 828,
                        "end": 832,
                        "decorators": [],
                        "name": "path",
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
                            "decorators": [],
                            "name": "directory",
                            "optional": false
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 835,
                            "end": 838,
                            "tail": false,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 847,
                            "end": 861,
                            "tail": true,
                            "value": {
                              "cooked": "\\moduleFile",
                              "raw": "\\\\moduleFile"
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 871,
                  "end": 890,
                  "expression": {
                    "type": "ImportExpression",
                    "start": 871,
                    "end": 889,
                    "options": null,
                    "source": {
                      "type": "YieldExpression",
                      "start": 878,
                      "end": 888,
                      "argument": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 888,
                        "decorators": [],
                        "name": "path",
                        "optional": false
                      },
                      "delegate": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 780,
              "end": 795,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 786,
                  "end": 795,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 795,
                    "decorators": [],
                    "name": "directory",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 799,
              "end": 810,
              "decorators": [],
              "name": "directories",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 745,
        "decorators": [],
        "name": "loadModule",
        "optional": false
      },
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
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
