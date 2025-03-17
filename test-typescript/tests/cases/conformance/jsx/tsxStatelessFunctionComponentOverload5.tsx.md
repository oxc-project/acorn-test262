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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "ClickableProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "children",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "className",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "ButtonProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 154,
            "end": 168,
            "expression": {
              "type": "Identifier",
              "start": 154,
              "end": 168,
              "name": "ClickableProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
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
                "name": "onClick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 207,
                      "name": "MouseEventHandler",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "LinkProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 252,
            "end": 266,
            "expression": {
              "type": "Identifier",
              "start": 252,
              "end": 266,
              "name": "ClickableProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
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
                "name": "to",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "HyphenProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 325,
            "end": 339,
            "expression": {
              "type": "Identifier",
              "start": 325,
              "end": 339,
              "name": "ClickableProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
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
      "attributes": [],
      "exportKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 380,
            "name": "obj0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 391,
                  "name": "to",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 393,
                  "end": 400,
                  "value": "world",
                  "raw": "\"world\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 413,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 430,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 432,
                  "end": 436,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 442,
                "end": 451,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 444,
                  "name": "to",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 446,
                  "end": 451,
                  "value": "boo",
                  "raw": "\"boo\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 463,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 479,
                  "name": "onClick",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 481,
                  "end": 487,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 485,
                    "end": 487,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 504,
            "name": "obj3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 499,
              "end": 504,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 501,
                "end": 504
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
          "name": "MainButton",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 534,
            "end": 558,
            "name": "buttonProps",
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
                  "name": "ButtonProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": false,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 565,
                "end": 572,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "MainButton",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 601,
            "end": 621,
            "name": "linkProps",
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
                  "name": "LinkProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": false,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 628,
                "end": 635,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "MainButton",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 664,
            "end": 688,
            "name": "hyphenProps",
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
                  "name": "HyphenProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": false,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 695,
                "end": 702,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "MainButton",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 731,
            "end": 775,
            "name": "props",
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
                      "name": "ButtonProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "LinkProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "HyphenProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                  "id": {
                    "type": "Identifier",
                    "start": 802,
                    "end": 811,
                    "name": "linkProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 814,
                    "end": 832,
                    "expression": {
                      "type": "Identifier",
                      "start": 814,
                      "end": 819,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 823,
                      "end": 832,
                      "typeName": {
                        "type": "Identifier",
                        "start": 823,
                        "end": 832,
                        "name": "LinkProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
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
                  "name": "linkProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 853,
                  "name": "to",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                          "name": "_buildMainLink",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 892,
                          "end": 897,
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                    "name": "_buildMainButton",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 940,
                    "end": 945,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 782,
                "end": 789,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 966,
            "end": 968,
            "name": "b0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 971,
            "end": 1032,
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
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1009,
                          "end": 1010,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1013,
                        "end": 1015,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
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
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 1017,
                "end": 1019,
                "value": "GO",
                "raw": "GO"
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
      "type": "VariableDeclaration",
      "start": 1054,
      "end": 1136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1060,
          "end": 1135,
          "id": {
            "type": "Identifier",
            "start": 1060,
            "end": 1062,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1065,
            "end": 1135,
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
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1087,
                          "end": 1093,
                          "name": "e",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1088,
                            "end": 1093,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1090,
                              "end": 1093
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1097,
                        "end": 1099,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
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
                    "name": "obj0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 1111,
                "end": 1122,
                "value": "Hello world",
                "raw": "Hello world"
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
      "type": "VariableDeclaration",
      "start": 1157,
      "end": 1212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1163,
          "end": 1211,
          "id": {
            "type": "Identifier",
            "start": 1163,
            "end": 1165,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1168,
            "end": 1211,
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1185,
                          "end": 1187,
                          "name": "to",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1189,
                          "end": 1196,
                          "value": "10000",
                          "raw": "\"10000\""
                        },
                        "kind": "init",
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
                    "name": "obj2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1238,
            "end": 1240,
            "name": "b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1243,
            "end": 1302,
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1260,
                          "end": 1262,
                          "name": "to",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1264,
                          "end": 1271,
                          "value": "10000",
                          "raw": "\"10000\""
                        },
                        "kind": "init",
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1279,
                          "end": 1286,
                          "name": "onClick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1288,
                          "end": 1297,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1289,
                              "end": 1290,
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1295,
                            "end": 1297,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1329,
            "end": 1331,
            "name": "b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1334,
            "end": 1361,
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
                    "name": "obj3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1458,
            "end": 1460,
            "name": "b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1463,
            "end": 1516,
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
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1488,
                          "name": "onClick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1488,
                          "end": 1500,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1489,
                              "end": 1495,
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1490,
                                "end": 1495,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1492,
                                  "end": 1495
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1497,
                            "end": 1500,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
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
                    "name": "obj0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1618,
            "end": 1620,
            "name": "b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1623,
            "end": 1678,
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
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1641,
                          "end": 1648,
                          "name": "onClick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1648,
                          "end": 1658,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1649,
                              "end": 1655,
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1650,
                                "end": 1655,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1652,
                                  "end": 1655
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1656,
                            "end": 1658,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
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
              "name": {
                "type": "JSXIdentifier",
                "start": 1624,
                "end": 1634,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1728,
            "end": 1730,
            "name": "b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1733,
            "end": 1801,
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
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1751,
                          "end": 1758,
                          "name": "onClick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1758,
                          "end": 1768,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1759,
                              "end": 1765,
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1760,
                                "end": 1765,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1762,
                                  "end": 1765
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1766,
                            "end": 1768,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
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
              "name": {
                "type": "JSXIdentifier",
                "start": 1734,
                "end": 1744,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1851,
            "end": 1853,
            "name": "b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1856,
            "end": 1882,
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
