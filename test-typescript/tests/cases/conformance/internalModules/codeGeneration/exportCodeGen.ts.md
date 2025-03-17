__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 71,
  "end": 927,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 71,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 157,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 104,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 93,
              "end": 104,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 97,
                  "end": 103,
                  "id": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 101,
                    "end": 103,
                    "value": 12,
                    "raw": "12"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 109,
            "end": 155,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 122,
              "name": "lt12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 125,
              "end": 155,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 135,
                  "end": 149,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 142,
                    "end": 148,
                    "left": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "start": 146,
                      "end": 148,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 192,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 201,
        "end": 271,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 207,
            "end": 218,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 211,
                "end": 217,
                "id": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 215,
                  "end": 217,
                  "value": 12,
                  "raw": "12"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 223,
            "end": 269,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 236,
              "name": "lt12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 239,
              "end": 269,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 249,
                  "end": 263,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 256,
                    "end": 262,
                    "left": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 257,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "start": 260,
                      "end": 262,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 307,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 315,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 316,
        "end": 367,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 322,
            "end": 365,
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 333,
              "name": "no",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 336,
              "end": 365,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 346,
                  "end": 359,
                  "argument": {
                    "type": "Literal",
                    "start": 353,
                    "end": 358,
                    "value": false,
                    "raw": "false"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 395,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 403,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 404,
        "end": 462,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 410,
            "end": 460,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 417,
              "end": 460,
              "id": {
                "type": "Identifier",
                "start": 426,
                "end": 429,
                "name": "yes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 432,
                "end": 460,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 442,
                    "end": 454,
                    "argument": {
                      "type": "Literal",
                      "start": 449,
                      "end": 453,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 502,
      "end": 702,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 510,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 511,
        "end": 702,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 517,
            "end": 542,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 524,
              "end": 542,
              "id": {
                "type": "Identifier",
                "start": 529,
                "end": 534,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 537,
                  "end": 540,
                  "id": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 540,
                    "name": "Red",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 535,
                "end": 542,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 537,
                    "end": 540,
                    "id": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 540,
                      "name": "Red",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 547,
            "end": 571,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 554,
              "end": 571,
              "id": {
                "type": "Identifier",
                "start": 563,
                "end": 565,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 568,
                "end": 571,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 576,
            "end": 609,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 583,
              "end": 609,
              "id": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 595,
                "end": 609,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 597,
                    "end": 607,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 597,
                      "end": 599,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 599,
                      "end": 607,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 601,
                        "end": 607
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 614,
            "end": 645,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 621,
              "end": 645,
              "id": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 629,
                "end": 645,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 631,
                    "end": 643,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 631,
                      "end": 635,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 635,
                      "end": 643,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 637,
                        "end": 643
                      }
                    },
                    "accessibility": null
                  }
                ]
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 650,
            "end": 700,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 657,
              "end": 700,
              "id": {
                "type": "Identifier",
                "start": 664,
                "end": 665,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 666,
                "end": 700,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 676,
                    "end": 694,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 683,
                      "end": 694,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 687,
                          "end": 693,
                          "id": {
                            "type": "Identifier",
                            "start": 687,
                            "end": 688,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 691,
                            "end": 693,
                            "value": 42,
                            "raw": "42"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 769,
      "end": 927,
      "id": {
        "type": "Identifier",
        "start": 776,
        "end": 777,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 778,
        "end": 927,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 784,
            "end": 802,
            "id": {
              "type": "Identifier",
              "start": 789,
              "end": 794,
              "name": "Color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 797,
                "end": 800,
                "id": {
                  "type": "Identifier",
                  "start": 797,
                  "end": 800,
                  "name": "Red",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 795,
              "end": 802,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 797,
                  "end": 800,
                  "id": {
                    "type": "Identifier",
                    "start": 797,
                    "end": 800,
                    "name": "Red",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 807,
            "end": 824,
            "id": {
              "type": "Identifier",
              "start": 816,
              "end": 818,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 821,
              "end": 824,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 829,
            "end": 855,
            "id": {
              "type": "Identifier",
              "start": 839,
              "end": 840,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 841,
              "end": 855,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 843,
                  "end": 853,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 843,
                    "end": 845,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 845,
                    "end": 853,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 847,
                      "end": 853
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 860,
            "end": 884,
            "id": {
              "type": "Identifier",
              "start": 866,
              "end": 867,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 868,
              "end": 884,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 870,
                  "end": 882,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 874,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 874,
                    "end": 882,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 876,
                      "end": 882
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 889,
            "end": 925,
            "id": {
              "type": "Identifier",
              "start": 896,
              "end": 897,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 898,
              "end": 925,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 908,
                  "end": 919,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 912,
                      "end": 918,
                      "id": {
                        "type": "Identifier",
                        "start": 912,
                        "end": 913,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 916,
                        "end": 918,
                        "value": 42,
                        "raw": "42"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
