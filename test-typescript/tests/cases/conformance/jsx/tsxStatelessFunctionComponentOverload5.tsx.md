__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1932,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 40,
        "end": 115,
        "body": {
          "type": "TSInterfaceBody",
          "start": 65,
          "end": 115,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 71,
              "end": 89,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 94,
              "end": 113,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 106,
                  "end": 112
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 64,
          "decorators": [],
          "name": "ClickableProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 117,
      "end": 215,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 124,
        "end": 215,
        "body": {
          "type": "TSInterfaceBody",
          "start": 169,
          "end": 215,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 175,
              "end": 213,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 175,
                "end": 182,
                "decorators": [],
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 184,
                  "end": 212,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 207,
                    "end": 212,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 208,
                        "end": 211
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 184,
                    "end": 207,
                    "left": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 189,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 207,
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 154,
            "end": 168,
            "expression": {
              "type": "Identifier",
              "start": 154,
              "end": 168,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 145,
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 217,
      "end": 286,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 224,
        "end": 286,
        "body": {
          "type": "TSInterfaceBody",
          "start": 267,
          "end": 286,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 273,
              "end": 284,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 273,
                "end": 275,
                "decorators": [],
                "name": "to",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 275,
                "end": 283,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 277,
                  "end": 283
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 252,
            "end": 266,
            "expression": {
              "type": "Identifier",
              "start": 252,
              "end": 266,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 234,
          "end": 243,
          "decorators": [],
          "name": "LinkProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 288,
      "end": 370,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 295,
        "end": 370,
        "body": {
          "type": "TSInterfaceBody",
          "start": 340,
          "end": 370,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 346,
              "end": 368,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 346,
                "end": 359,
                "raw": "\"data-format\"",
                "value": "data-format"
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 359,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 361,
                  "end": 367
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 325,
            "end": 339,
            "expression": {
              "type": "Identifier",
              "start": 325,
              "end": 339,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 305,
          "end": 316,
          "decorators": [],
          "name": "HyphenProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 402,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 380,
            "decorators": [],
            "name": "obj0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 383,
            "end": 402,
            "properties": [
              {
                "type": "Property",
                "start": 389,
                "end": 400,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 391,
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 393,
                  "end": 400,
                  "raw": "\"world\"",
                  "value": "world"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 405,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 453,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 413,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 416,
            "end": 453,
            "properties": [
              {
                "type": "Property",
                "start": 422,
                "end": 436,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 430,
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 432,
                  "end": 436,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              },
              {
                "type": "Property",
                "start": 442,
                "end": 451,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 444,
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 446,
                  "end": 451,
                  "raw": "\"boo\"",
                  "value": "boo"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 455,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 489,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 463,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 466,
            "end": 489,
            "properties": [
              {
                "type": "Property",
                "start": 472,
                "end": 487,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 479,
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 481,
                  "end": 487,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 485,
                    "end": 487,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 504,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 504,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 499,
              "end": 504,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 501,
                "end": 504
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
      "type": "ExportNamedDeclaration",
      "start": 507,
      "end": 573,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 514,
        "end": 573,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 523,
          "end": 533,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 534,
            "end": 558,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 545,
              "end": 558,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 547,
                "end": 558,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 558,
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 559,
          "end": 572,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 561,
            "end": 572,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 561,
              "end": 572,
              "left": {
                "type": "Identifier",
                "start": 561,
                "end": 564,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 565,
                "end": 572,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 574,
      "end": 636,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 581,
        "end": 636,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 590,
          "end": 600,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 601,
            "end": 621,
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 621,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 612,
                "end": 621,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 621,
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 622,
          "end": 635,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 624,
            "end": 635,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 624,
              "end": 635,
              "left": {
                "type": "Identifier",
                "start": 624,
                "end": 627,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 628,
                "end": 635,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 637,
      "end": 703,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 644,
        "end": 703,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 653,
          "end": 663,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 664,
            "end": 688,
            "decorators": [],
            "name": "hyphenProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 688,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 677,
                "end": 688,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 688,
                  "decorators": [],
                  "name": "HyphenProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 689,
          "end": 702,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 691,
            "end": 702,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 691,
              "end": 702,
              "left": {
                "type": "Identifier",
                "start": 691,
                "end": 694,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 695,
                "end": 702,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 704,
      "end": 949,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 711,
        "end": 949,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 790,
          "end": 949,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 796,
              "end": 833,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 802,
                  "end": 832,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 802,
                    "end": 811,
                    "decorators": [],
                    "name": "linkProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 814,
                    "end": 832,
                    "expression": {
                      "type": "Identifier",
                      "start": 814,
                      "end": 819,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 823,
                      "end": 832,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 823,
                        "end": 832,
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "IfStatement",
              "start": 838,
              "end": 905,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 855,
                "end": 905,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 865,
                    "end": 899,
                    "argument": {
                      "type": "CallExpression",
                      "start": 872,
                      "end": 898,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 892,
                          "end": 897,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 872,
                        "end": 891,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 872,
                          "end": 876
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 877,
                          "end": 891,
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "MemberExpression",
                "start": 841,
                "end": 853,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 850,
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 853,
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 911,
              "end": 947,
              "argument": {
                "type": "CallExpression",
                "start": 918,
                "end": 946,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 940,
                    "end": 945,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 918,
                  "end": 939,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 918,
                    "end": 922
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 923,
                    "end": 939,
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 720,
          "end": 730,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 731,
            "end": 775,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 736,
              "end": 775,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 738,
                "end": 775,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 738,
                    "end": 749,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 738,
                      "end": 749,
                      "decorators": [],
                      "name": "ButtonProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 752,
                    "end": 761,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 761,
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 764,
                    "end": 775,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 764,
                      "end": 775,
                      "decorators": [],
                      "name": "HyphenProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 776,
          "end": 789,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 778,
            "end": 789,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 778,
              "end": 789,
              "left": {
                "type": "Identifier",
                "start": 778,
                "end": 781,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 782,
                "end": 789,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 960,
      "end": 1033,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 966,
          "end": 1032,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 966,
            "end": 968,
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 971,
            "end": 1032,
            "children": [
              {
                "type": "JSXText",
                "start": 1017,
                "end": 1019,
                "raw": "GO",
                "value": "GO"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1019,
              "end": 1032,
              "name": {
                "type": "JSXIdentifier",
                "start": 1021,
                "end": 1031,
                "name": "MainButton"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 971,
              "end": 1017,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 983,
                  "end": 998,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 983,
                    "end": 985,
                    "name": "to"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 986,
                    "end": 998,
                    "raw": "'/some/path'",
                    "value": "/some/path"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 999,
                  "end": 1016,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 999,
                    "end": 1006,
                    "name": "onClick"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1007,
                    "end": 1016,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1008,
                      "end": 1015,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1013,
                        "end": 1015,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1009,
                          "end": 1010,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 972,
                "end": 982,
                "name": "MainButton"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1054,
      "end": 1136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1060,
          "end": 1135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1060,
            "end": 1062,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1065,
            "end": 1135,
            "children": [
              {
                "type": "JSXText",
                "start": 1111,
                "end": 1122,
                "raw": "Hello world",
                "value": "Hello world"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1122,
              "end": 1135,
              "name": {
                "type": "JSXIdentifier",
                "start": 1124,
                "end": 1134,
                "name": "MainButton"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1065,
              "end": 1111,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1077,
                  "end": 1100,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1077,
                    "end": 1084,
                    "name": "onClick"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1085,
                    "end": 1100,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1086,
                      "end": 1099,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1097,
                        "end": 1099,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1087,
                          "end": 1093,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1088,
                            "end": 1093,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1090,
                              "end": 1093
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1101,
                  "end": 1110,
                  "argument": {
                    "type": "Identifier",
                    "start": 1105,
                    "end": 1109,
                    "decorators": [],
                    "name": "obj0",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1066,
                "end": 1076,
                "name": "MainButton"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1157,
      "end": 1212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1163,
          "end": 1211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1163,
            "end": 1165,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1168,
            "end": 1211,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1168,
              "end": 1211,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1180,
                  "end": 1198,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1184,
                    "end": 1197,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1185,
                        "end": 1196,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1185,
                          "end": 1187,
                          "decorators": [],
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 1189,
                          "end": 1196,
                          "raw": "\"10000\"",
                          "value": "10000"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1199,
                  "end": 1208,
                  "argument": {
                    "type": "Identifier",
                    "start": 1203,
                    "end": 1207,
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1169,
                "end": 1179,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1232,
      "end": 1303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1238,
          "end": 1302,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1238,
            "end": 1240,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1243,
            "end": 1302,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1243,
              "end": 1302,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1255,
                  "end": 1273,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1259,
                    "end": 1272,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1260,
                        "end": 1271,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1260,
                          "end": 1262,
                          "decorators": [],
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 1264,
                          "end": 1271,
                          "raw": "\"10000\"",
                          "value": "10000"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1274,
                  "end": 1299,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1278,
                    "end": 1298,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1279,
                        "end": 1297,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1279,
                          "end": 1286,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1288,
                          "end": 1297,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1295,
                            "end": 1297,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1289,
                              "end": 1290,
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1244,
                "end": 1254,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1323,
      "end": 1362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1329,
          "end": 1361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1329,
            "end": 1331,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1334,
            "end": 1361,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1334,
              "end": 1361,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1346,
                  "end": 1355,
                  "argument": {
                    "type": "Identifier",
                    "start": 1350,
                    "end": 1354,
                    "decorators": [],
                    "name": "obj3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1356,
                  "end": 1358,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1356,
                    "end": 1358,
                    "name": "to"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1335,
                "end": 1345,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1452,
      "end": 1517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1458,
          "end": 1516,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1458,
            "end": 1460,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1463,
            "end": 1516,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1463,
              "end": 1516,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1475,
                  "end": 1503,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1479,
                    "end": 1502,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1481,
                        "end": 1500,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1488,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1488,
                          "end": 1500,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1497,
                            "end": 1500,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1489,
                              "end": 1495,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1490,
                                "end": 1495,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1492,
                                  "end": 1495
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1504,
                  "end": 1513,
                  "argument": {
                    "type": "Identifier",
                    "start": 1508,
                    "end": 1512,
                    "decorators": [],
                    "name": "obj0",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1464,
                "end": 1474,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1612,
      "end": 1679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1618,
          "end": 1678,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1618,
            "end": 1620,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1623,
            "end": 1678,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1623,
              "end": 1678,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1635,
                  "end": 1661,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1639,
                    "end": 1660,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1641,
                        "end": 1658,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1641,
                          "end": 1648,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1648,
                          "end": 1658,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1656,
                            "end": 1658,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1649,
                              "end": 1655,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1650,
                                "end": 1655,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1652,
                                  "end": 1655
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1662,
                  "end": 1675,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1662,
                    "end": 1670,
                    "name": "children"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1671,
                    "end": 1675,
                    "expression": {
                      "type": "Literal",
                      "start": 1672,
                      "end": 1674,
                      "raw": "10",
                      "value": 10
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1624,
                "end": 1634,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1722,
      "end": 1802,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1728,
          "end": 1801,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1728,
            "end": 1730,
            "decorators": [],
            "name": "b7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1733,
            "end": 1801,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1733,
              "end": 1801,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1745,
                  "end": 1771,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1749,
                    "end": 1770,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1751,
                        "end": 1768,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1751,
                          "end": 1758,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1758,
                          "end": 1768,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1766,
                            "end": 1768,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1759,
                              "end": 1765,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1760,
                                "end": 1765,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1762,
                                  "end": 1765
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1772,
                  "end": 1788,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1772,
                    "end": 1780,
                    "name": "children"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1781,
                    "end": 1788,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1789,
                  "end": 1798,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1789,
                    "end": 1798,
                    "name": "className"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1734,
                "end": 1744,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1845,
      "end": 1883,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1851,
          "end": 1882,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1851,
            "end": 1853,
            "decorators": [],
            "name": "b8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1856,
            "end": 1882,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1856,
              "end": 1882,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1868,
                  "end": 1879,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1868,
                    "end": 1879,
                    "name": "data-format"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1857,
                "end": 1867,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
