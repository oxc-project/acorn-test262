__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1434,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "propA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 62,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 60,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "propB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 104,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 104,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "propC",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 106,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 134,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 134,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 131,
              "end": 134
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 135,
        "end": 144,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 137,
          "end": 144,
          "parameterName": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 143,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 146,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 166,
        "decorators": [],
        "name": "isB",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 167,
          "end": 174,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 174,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 171,
              "end": 174
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 184,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 177,
          "end": 184,
          "parameterName": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 184,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 183,
              "end": 184,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 186,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 206,
        "decorators": [],
        "name": "isC",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 207,
          "end": 214,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 209,
            "end": 214,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 211,
              "end": 214
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 224,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 217,
          "end": 224,
          "parameterName": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 223,
            "end": 224,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 223,
              "end": 224,
              "typeName": {
                "type": "Identifier",
                "start": 223,
                "end": 224,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 227,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "decorators": [],
        "name": "retC",
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
        "start": 250,
        "end": 253,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 252,
          "end": 253,
          "typeName": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 265,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 264,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 264,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 266,
      "end": 275,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 274,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 274,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "IfStatement",
      "start": 286,
      "end": 314,
      "test": {
        "type": "CallExpression",
        "start": 290,
        "end": 296,
        "callee": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "decorators": [],
          "name": "isC",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 298,
        "end": 314,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 304,
            "end": 312,
            "expression": {
              "type": "MemberExpression",
              "start": 304,
              "end": 311,
              "object": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 306,
                "end": 311,
                "decorators": [],
                "name": "propC",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 343,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 342,
            "decorators": [],
            "name": "subType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "IfStatement",
      "start": 344,
      "end": 383,
      "test": {
        "type": "CallExpression",
        "start": 347,
        "end": 359,
        "callee": {
          "type": "Identifier",
          "start": 347,
          "end": 350,
          "decorators": [],
          "name": "isA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 351,
            "end": 358,
            "decorators": [],
            "name": "subType",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 361,
        "end": 383,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 367,
            "end": 381,
            "expression": {
              "type": "MemberExpression",
              "start": 367,
              "end": 380,
              "object": {
                "type": "Identifier",
                "start": 367,
                "end": 374,
                "decorators": [],
                "name": "subType",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 375,
                "end": 380,
                "decorators": [],
                "name": "propC",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 416,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 415,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 415,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 410,
                "end": 415,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 410,
                    "end": 411,
                    "typeName": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 415,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "IfStatement",
      "start": 417,
      "end": 452,
      "test": {
        "type": "CallExpression",
        "start": 420,
        "end": 430,
        "callee": {
          "type": "Identifier",
          "start": 420,
          "end": 423,
          "decorators": [],
          "name": "isA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 424,
            "end": 429,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 432,
        "end": 452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 438,
            "end": 450,
            "expression": {
              "type": "MemberExpression",
              "start": 438,
              "end": 449,
              "object": {
                "type": "Identifier",
                "start": 438,
                "end": 443,
                "decorators": [],
                "name": "union",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 449,
                "decorators": [],
                "name": "propA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 472,
      "end": 510,
      "id": {
        "type": "Identifier",
        "start": 482,
        "end": 484,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 485,
        "end": 510,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 491,
            "end": 508,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 492,
                "end": 497,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 494,
                  "end": 497,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 496,
                    "end": 497,
                    "typeName": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 497,
                      "decorators": [],
                      "name": "A",
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
              "start": 498,
              "end": 507,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 500,
                "end": 507,
                "parameterName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 502,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 506,
                  "end": 507,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 506,
                    "end": 507,
                    "typeName": {
                      "type": "Identifier",
                      "start": 506,
                      "end": 507,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 657,
      "end": 710,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 692,
        "decorators": [],
        "name": "isC_multipleParams",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 693,
          "end": 695,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 697,
          "end": 699,
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 700,
        "end": 709,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 702,
          "end": 709,
          "parameterName": {
            "type": "Identifier",
            "start": 702,
            "end": 704,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 708,
            "end": 709,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 708,
              "end": 709,
              "typeName": {
                "type": "Identifier",
                "start": 708,
                "end": 709,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "IfStatement",
      "start": 711,
      "end": 757,
      "test": {
        "type": "CallExpression",
        "start": 715,
        "end": 739,
        "callee": {
          "type": "Identifier",
          "start": 715,
          "end": 733,
          "decorators": [],
          "name": "isC_multipleParams",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 734,
            "end": 735,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 737,
            "end": 738,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 741,
        "end": 757,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 747,
            "end": 755,
            "expression": {
              "type": "MemberExpression",
              "start": 747,
              "end": 754,
              "object": {
                "type": "Identifier",
                "start": 747,
                "end": 748,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 749,
                "end": 754,
                "decorators": [],
                "name": "propC",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 770,
      "end": 809,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 809,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 809,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 777,
              "end": 809,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 779,
                "end": 809,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 785,
                    "end": 807,
                    "key": {
                      "type": "Identifier",
                      "start": 785,
                      "end": 790,
                      "decorators": [],
                      "name": "func1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 791,
                        "end": 796,
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 793,
                          "end": 796,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 795,
                            "end": 796,
                            "typeName": {
                              "type": "Identifier",
                              "start": 795,
                              "end": 796,
                              "decorators": [],
                              "name": "A",
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
                      "start": 797,
                      "end": 806,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 799,
                        "end": 806,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 799,
                          "end": 801,
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 805,
                          "end": 806,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 805,
                            "end": 806,
                            "typeName": {
                              "type": "Identifier",
                              "start": 805,
                              "end": 806,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "type": "ClassDeclaration",
      "start": 810,
      "end": 878,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 816,
        "end": 817,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 818,
        "end": 878,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 824,
            "end": 876,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 824,
              "end": 831,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 831,
              "end": 876,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 832,
                  "end": 837,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 834,
                    "end": 837,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 836,
                      "end": 837,
                      "typeName": {
                        "type": "Identifier",
                        "start": 836,
                        "end": 837,
                        "decorators": [],
                        "name": "A",
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
                "start": 838,
                "end": 847,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 840,
                  "end": 847,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 840,
                    "end": 842,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 846,
                    "end": 847,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 846,
                      "end": 847,
                      "typeName": {
                        "type": "Identifier",
                        "start": 846,
                        "end": 847,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 848,
                "end": 876,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 858,
                    "end": 870,
                    "argument": {
                      "type": "Literal",
                      "start": 865,
                      "end": 869,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 898,
      "end": 933,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 902,
          "end": 932,
          "id": {
            "type": "Identifier",
            "start": 902,
            "end": 904,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 907,
            "end": 932,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 908,
                "end": 913,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 910,
                  "end": 913,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 912,
                    "end": 913,
                    "typeName": {
                      "type": "Identifier",
                      "start": 912,
                      "end": 913,
                      "decorators": [],
                      "name": "A",
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
              "start": 914,
              "end": 923,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 916,
                "end": 923,
                "parameterName": {
                  "type": "Identifier",
                  "start": 916,
                  "end": 918,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 922,
                  "end": 923,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 922,
                    "end": 923,
                    "typeName": {
                      "type": "Identifier",
                      "start": 922,
                      "end": 923,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "body": {
              "type": "Literal",
              "start": 927,
              "end": 932,
              "value": false,
              "raw": "false"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 952,
      "end": 996,
      "id": {
        "type": "Identifier",
        "start": 969,
        "end": 971,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 972,
          "end": 994,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 974,
            "end": 994,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 976,
              "end": 994,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 977,
                  "end": 982,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 979,
                    "end": 982,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 981,
                      "end": 982,
                      "typeName": {
                        "type": "Identifier",
                        "start": 981,
                        "end": 982,
                        "decorators": [],
                        "name": "A",
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
                "start": 984,
                "end": 994,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 987,
                  "end": 994,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 987,
                    "end": 989,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 993,
                    "end": 994,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 993,
                      "end": 994,
                      "typeName": {
                        "type": "Identifier",
                        "start": 993,
                        "end": 994,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1022,
      "end": 1072,
      "expression": {
        "type": "CallExpression",
        "start": 1022,
        "end": 1071,
        "callee": {
          "type": "Identifier",
          "start": 1022,
          "end": 1024,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 1025,
            "end": 1070,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1034,
                "end": 1039,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1036,
                  "end": 1039,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1038,
                    "end": 1039,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1038,
                      "end": 1039,
                      "decorators": [],
                      "name": "A",
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
              "start": 1040,
              "end": 1049,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 1042,
                "end": 1049,
                "parameterName": {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1044,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1048,
                  "end": 1049,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1048,
                    "end": 1049,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1048,
                      "end": 1049,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1050,
              "end": 1070,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1056,
                  "end": 1068,
                  "argument": {
                    "type": "Literal",
                    "start": 1063,
                    "end": 1067,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1117,
      "end": 1163,
      "id": {
        "type": "Identifier",
        "start": 1134,
        "end": 1150,
        "decorators": [],
        "name": "acceptingBoolean",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1151,
          "end": 1161,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1152,
            "end": 1161,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1154,
              "end": 1161
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1164,
      "end": 1189,
      "expression": {
        "type": "CallExpression",
        "start": 1164,
        "end": 1188,
        "callee": {
          "type": "Identifier",
          "start": 1164,
          "end": 1180,
          "decorators": [],
          "name": "acceptingBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1181,
            "end": 1187,
            "callee": {
              "type": "Identifier",
              "start": 1181,
              "end": 1184,
              "decorators": [],
              "name": "isA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1185,
                "end": 1186,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1241,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1258,
        "end": 1284,
        "decorators": [],
        "name": "acceptingTypeGuardFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1285,
          "end": 1308,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1287,
            "end": 1308,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1289,
              "end": 1308,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1290,
                  "end": 1294,
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1296,
                "end": 1308,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1299,
                  "end": 1308,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1299,
                    "end": 1303,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1307,
                    "end": 1308,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1307,
                      "end": 1308,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1307,
                        "end": 1308,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1311,
      "end": 1343,
      "expression": {
        "type": "CallExpression",
        "start": 1311,
        "end": 1342,
        "callee": {
          "type": "Identifier",
          "start": 1311,
          "end": 1337,
          "decorators": [],
          "name": "acceptingTypeGuardFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1338,
            "end": 1341,
            "decorators": [],
            "name": "isA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1367,
      "end": 1385,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1371,
          "end": 1384,
          "id": {
            "type": "Identifier",
            "start": 1371,
            "end": 1384,
            "decorators": [],
            "name": "union2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1377,
              "end": 1384,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1379,
                "end": 1384,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1379,
                    "end": 1380,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1379,
                      "end": 1380,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1383,
                    "end": 1384,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1383,
                      "end": 1384,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 1386,
      "end": 1434,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1390,
          "end": 1433,
          "id": {
            "type": "Identifier",
            "start": 1390,
            "end": 1409,
            "decorators": [],
            "name": "union3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1396,
              "end": 1409,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1398,
                "end": 1409,
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1398,
                    "end": 1405
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1408,
                    "end": 1409,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1408,
                      "end": 1409,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1412,
            "end": 1433,
            "left": {
              "type": "CallExpression",
              "start": 1412,
              "end": 1423,
              "callee": {
                "type": "Identifier",
                "start": 1412,
                "end": 1415,
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1416,
                  "end": 1422,
                  "decorators": [],
                  "name": "union2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 1427,
              "end": 1433,
              "decorators": [],
              "name": "union2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
