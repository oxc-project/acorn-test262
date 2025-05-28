__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 864,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 22,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 9,
            "end": 14,
            "typeName": {
              "type": "Identifier",
              "start": 9,
              "end": 14,
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 17,
            "end": 22,
            "typeName": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 25,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 74,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 56,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 53,
                "end": 56,
                "literal": {
                  "type": "Literal",
                  "start": 53,
                  "end": 56,
                  "value": "A",
                  "raw": "'A'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 62,
            "end": 72,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
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
      "type": "TSInterfaceDeclaration",
      "start": 75,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 90,
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 107,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 106,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 103,
                "end": 106,
                "literal": {
                  "type": "Literal",
                  "start": 103,
                  "end": 106,
                  "value": "B",
                  "raw": "'B'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 112,
            "end": 122,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
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
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 146,
        "decorators": [],
        "name": "assertNever",
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
          "start": 147,
          "end": 155,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 155,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 150,
              "end": 155
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 174,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 163,
            "end": 172,
            "argument": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 303,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 197,
        "decorators": [],
        "name": "IfWithString",
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
          "start": 198,
          "end": 204,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 204,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 204,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 303,
        "body": [
          {
            "type": "IfStatement",
            "start": 212,
            "end": 301,
            "test": {
              "type": "BinaryExpression",
              "start": 216,
              "end": 235,
              "left": {
                "type": "MemberExpression",
                "start": 216,
                "end": 227,
                "object": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 219,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 220,
                  "end": 226,
                  "value": "kind",
                  "raw": "'kind'"
                },
                "optional": false,
                "computed": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 232,
                "end": 235,
                "value": "B",
                "raw": "'B'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 237,
              "end": 266,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 247,
                  "end": 260,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 254,
                    "end": 259,
                    "object": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 257,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 272,
              "end": 301,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 282,
                  "end": 295,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 289,
                    "end": 294,
                    "object": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 292,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 294,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 330,
        "decorators": [],
        "name": "SwitchWithString",
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
          "start": 331,
          "end": 337,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 334,
            "end": 337,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 336,
              "end": 337,
              "typeName": {
                "type": "Identifier",
                "start": 336,
                "end": 337,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 517,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 345,
            "end": 515,
            "discriminant": {
              "type": "MemberExpression",
              "start": 353,
              "end": 364,
              "object": {
                "type": "Identifier",
                "start": 353,
                "end": 356,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 357,
                "end": 363,
                "value": "kind",
                "raw": "'kind'"
              },
              "optional": false,
              "computed": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 376,
                "end": 411,
                "test": {
                  "type": "Literal",
                  "start": 381,
                  "end": 384,
                  "value": "A",
                  "raw": "'A'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 398,
                    "end": 411,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 405,
                      "end": 410,
                      "object": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 408,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 410,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 420,
                "end": 455,
                "test": {
                  "type": "Literal",
                  "start": 425,
                  "end": 428,
                  "value": "B",
                  "raw": "'B'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 442,
                    "end": 455,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 449,
                      "end": 454,
                      "object": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 452,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 454,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 464,
                "end": 509,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 485,
                    "end": 509,
                    "argument": {
                      "type": "CallExpression",
                      "start": 492,
                      "end": 508,
                      "callee": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 503,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 504,
                          "end": 507,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 519,
      "end": 648,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 542,
        "decorators": [],
        "name": "IfWithTemplate",
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
          "start": 543,
          "end": 549,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 546,
            "end": 549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 548,
              "end": 549,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 551,
        "end": 648,
        "body": [
          {
            "type": "IfStatement",
            "start": 557,
            "end": 646,
            "test": {
              "type": "BinaryExpression",
              "start": 561,
              "end": 580,
              "left": {
                "type": "MemberExpression",
                "start": 561,
                "end": 572,
                "object": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 564,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "TemplateLiteral",
                  "start": 565,
                  "end": 571,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 565,
                      "end": 571,
                      "value": {
                        "cooked": "kind",
                        "raw": "kind"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "optional": false,
                "computed": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 577,
                "end": 580,
                "value": "B",
                "raw": "'B'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 582,
              "end": 611,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 592,
                  "end": 605,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 599,
                    "end": 604,
                    "object": {
                      "type": "Identifier",
                      "start": 599,
                      "end": 602,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 604,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 617,
              "end": 646,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 627,
                  "end": 640,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 634,
                    "end": 639,
                    "object": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 637,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 639,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 650,
      "end": 864,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 677,
        "decorators": [],
        "name": "SwitchWithTemplate",
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
          "start": 678,
          "end": 684,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 681,
            "end": 684,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 683,
              "end": 684,
              "typeName": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 686,
        "end": 864,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 692,
            "end": 862,
            "discriminant": {
              "type": "MemberExpression",
              "start": 700,
              "end": 711,
              "object": {
                "type": "Identifier",
                "start": 700,
                "end": 703,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "TemplateLiteral",
                "start": 704,
                "end": 710,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 704,
                    "end": 710,
                    "value": {
                      "cooked": "kind",
                      "raw": "kind"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              },
              "optional": false,
              "computed": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 723,
                "end": 758,
                "test": {
                  "type": "Literal",
                  "start": 728,
                  "end": 731,
                  "value": "A",
                  "raw": "'A'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 745,
                    "end": 758,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 752,
                      "end": 757,
                      "object": {
                        "type": "Identifier",
                        "start": 752,
                        "end": 755,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 756,
                        "end": 757,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 767,
                "end": 802,
                "test": {
                  "type": "Literal",
                  "start": 772,
                  "end": 775,
                  "value": "B",
                  "raw": "'B'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 789,
                    "end": 802,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 796,
                      "end": 801,
                      "object": {
                        "type": "Identifier",
                        "start": 796,
                        "end": 799,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 800,
                        "end": 801,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 811,
                "end": 856,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 832,
                    "end": 856,
                    "argument": {
                      "type": "CallExpression",
                      "start": 839,
                      "end": 855,
                      "callee": {
                        "type": "Identifier",
                        "start": 839,
                        "end": 850,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 851,
                          "end": 854,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
