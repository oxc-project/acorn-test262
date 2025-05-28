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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 115,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 40,
        "end": 115,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 64,
          "decorators": [],
          "name": "ClickableProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 65,
          "end": 115,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 71,
              "end": 89,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 94,
              "end": 113,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 106,
                  "end": 112
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 117,
      "end": 215,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 124,
        "end": 215,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 145,
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 169,
          "end": 215,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 175,
              "end": 213,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 175,
                "end": 182,
                "decorators": [],
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 184,
                  "end": 212,
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
                  },
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
                  }
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 217,
      "end": 286,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 224,
        "end": 286,
        "id": {
          "type": "Identifier",
          "start": 234,
          "end": 243,
          "decorators": [],
          "name": "LinkProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 267,
          "end": 286,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 273,
              "end": 284,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 273,
                "end": 275,
                "decorators": [],
                "name": "to",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 275,
                "end": 283,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 277,
                  "end": 283
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 288,
      "end": 370,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 295,
        "end": 370,
        "id": {
          "type": "Identifier",
          "start": 305,
          "end": 316,
          "decorators": [],
          "name": "HyphenProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 340,
          "end": 370,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 346,
              "end": 368,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 346,
                "end": 359,
                "value": "data-format",
                "raw": "\"data-format\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 359,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 361,
                  "end": 367
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 403,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 402,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 391,
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 393,
                  "end": 400,
                  "value": "world",
                  "raw": "\"world\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 405,
      "end": 453,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 453,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 430,
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 432,
                  "end": 436,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 442,
                "end": 451,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 444,
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 446,
                  "end": 451,
                  "value": "boo",
                  "raw": "\"boo\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 455,
      "end": 489,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 489,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 479,
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 481,
                  "end": 487,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 485,
                    "end": 487,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 505,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 504,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 507,
      "end": 573,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 514,
        "end": 573,
        "id": {
          "type": "Identifier",
          "start": 523,
          "end": 533,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 558,
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 574,
      "end": 636,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 581,
        "end": 636,
        "id": {
          "type": "Identifier",
          "start": 590,
          "end": 600,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 621,
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 637,
      "end": 703,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 644,
        "end": 703,
        "id": {
          "type": "Identifier",
          "start": 653,
          "end": 663,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 688,
                  "decorators": [],
                  "name": "HyphenProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 704,
      "end": 949,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 711,
        "end": 949,
        "id": {
          "type": "Identifier",
          "start": 720,
          "end": 730,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 738,
                      "end": 749,
                      "decorators": [],
                      "name": "ButtonProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 752,
                    "end": 761,
                    "typeName": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 761,
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 764,
                    "end": 775,
                    "typeName": {
                      "type": "Identifier",
                      "start": 764,
                      "end": 775,
                      "decorators": [],
                      "name": "HyphenProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 790,
          "end": 949,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 796,
              "end": 833,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 802,
                  "end": 832,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 823,
                        "end": 832,
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 838,
              "end": 905,
              "test": {
                "type": "MemberExpression",
                "start": 841,
                "end": 853,
                "object": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 850,
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 853,
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 872,
                        "end": 891,
                        "object": {
                          "type": "ThisExpression",
                          "start": 872,
                          "end": 876
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 877,
                          "end": 891,
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                      "optional": false
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 911,
              "end": 947,
              "argument": {
                "type": "CallExpression",
                "start": 918,
                "end": 946,
                "callee": {
                  "type": "MemberExpression",
                  "start": 918,
                  "end": 939,
                  "object": {
                    "type": "ThisExpression",
                    "start": 918,
                    "end": 922
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 923,
                    "end": 939,
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
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
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 960,
      "end": 1033,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 966,
          "end": 1032,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 971,
              "end": 1017,
              "name": {
                "type": "JSXIdentifier",
                "start": 972,
                "end": 982,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                    "value": "/some/path",
                    "raw": "'/some/path'"
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 1013,
                        "end": 1015,
                        "body": []
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 1017,
                "end": 1019,
                "value": "GO",
                "raw": "GO"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1054,
      "end": 1136,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1060,
          "end": 1135,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1065,
              "end": 1111,
              "name": {
                "type": "JSXIdentifier",
                "start": 1066,
                "end": 1076,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 1097,
                        "end": 1099,
                        "body": []
                      },
                      "id": null,
                      "generator": false
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
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 1111,
                "end": 1122,
                "value": "Hello world",
                "raw": "Hello world"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1157,
      "end": 1212,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1163,
          "end": 1211,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1168,
              "end": 1211,
              "name": {
                "type": "JSXIdentifier",
                "start": 1169,
                "end": 1179,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1185,
                          "end": 1187,
                          "decorators": [],
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1189,
                          "end": 1196,
                          "value": "10000",
                          "raw": "\"10000\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1232,
      "end": 1303,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1238,
          "end": 1302,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1243,
              "end": 1302,
              "name": {
                "type": "JSXIdentifier",
                "start": 1244,
                "end": 1254,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1260,
                          "end": 1262,
                          "decorators": [],
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1264,
                          "end": 1271,
                          "value": "10000",
                          "raw": "\"10000\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1279,
                          "end": 1286,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1288,
                          "end": 1297,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 1295,
                            "end": 1297,
                            "body": []
                          },
                          "id": null,
                          "generator": false
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1323,
      "end": 1362,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1329,
          "end": 1361,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1334,
              "end": 1361,
              "name": {
                "type": "JSXIdentifier",
                "start": 1335,
                "end": 1345,
                "name": "MainButton"
              },
              "typeArguments": null,
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1452,
      "end": 1517,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1458,
          "end": 1516,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1463,
              "end": 1516,
              "name": {
                "type": "JSXIdentifier",
                "start": 1464,
                "end": 1474,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1488,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1488,
                          "end": 1500,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 1497,
                            "end": 1500,
                            "body": []
                          },
                          "expression": false
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1612,
      "end": 1679,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1618,
          "end": 1678,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1623,
              "end": 1678,
              "name": {
                "type": "JSXIdentifier",
                "start": 1624,
                "end": 1634,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1641,
                          "end": 1648,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1648,
                          "end": 1658,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 1656,
                            "end": 1658,
                            "body": []
                          },
                          "expression": false
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
                      "value": 10,
                      "raw": "10"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1722,
      "end": 1802,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1728,
          "end": 1801,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1733,
              "end": 1801,
              "name": {
                "type": "JSXIdentifier",
                "start": 1734,
                "end": 1744,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1751,
                          "end": 1758,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1758,
                          "end": 1768,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 1766,
                            "end": 1768,
                            "body": []
                          },
                          "expression": false
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
                    "value": "hello",
                    "raw": "\"hello\""
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1845,
      "end": 1883,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1851,
          "end": 1882,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1856,
              "end": 1882,
              "name": {
                "type": "JSXIdentifier",
                "start": 1857,
                "end": 1867,
                "name": "MainButton"
              },
              "typeArguments": null,
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
