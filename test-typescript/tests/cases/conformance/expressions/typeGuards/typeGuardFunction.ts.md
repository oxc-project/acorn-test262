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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "name": "propA",
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
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
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
      "type": "ClassDeclaration",
      "start": 32,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "name": "propB",
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
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
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
      "type": "ClassDeclaration",
      "start": 64,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 104,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "name": "propC",
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
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
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
      "type": "TSDeclareFunction",
      "start": 106,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "name": "isA",
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
          "start": 127,
          "end": 134,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 134,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 131,
              "end": 134
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 146,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 166,
        "name": "isB",
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
          "start": 167,
          "end": 174,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 174,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 171,
              "end": 174
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 186,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 206,
        "name": "isC",
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
          "start": 207,
          "end": 214,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 209,
            "end": 214,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 211,
              "end": 214
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 227,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "name": "retC",
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 264,
            "name": "a",
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 274,
            "name": "b",
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
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
          "name": "isC",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 306,
                "end": 311,
                "name": "propC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 342,
            "name": "subType",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
          "name": "isA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 351,
            "end": 358,
            "name": "subType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
                "name": "subType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 375,
                "end": 380,
                "name": "propC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 415,
            "name": "union",
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "B",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "isA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 424,
            "end": 429,
            "name": "union",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
                "name": "union",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 449,
                "name": "propA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "p1",
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
                      "name": "A",
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
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
        "name": "isC_multipleParams",
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
          "start": 693,
          "end": 695,
          "name": "p1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 697,
          "end": 699,
          "name": "p2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
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
          "name": "isC_multipleParams",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 734,
            "end": 735,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 737,
            "end": 738,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 749,
                "end": 754,
                "name": "propC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 809,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 809,
            "name": "obj",
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
                      "name": "func1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "p1",
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
                              "name": "A",
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
                          "name": "p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 810,
      "end": 878,
      "id": {
        "type": "Identifier",
        "start": 816,
        "end": 817,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 818,
        "end": 878,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 824,
            "end": 876,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 824,
              "end": 831,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 831,
              "end": 876,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 832,
                  "end": 837,
                  "name": "p1",
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
                        "name": "A",
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "VariableDeclaration",
      "start": 898,
      "end": 933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 902,
          "end": 932,
          "id": {
            "type": "Identifier",
            "start": 902,
            "end": 904,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 907,
            "end": 932,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 908,
                "end": 913,
                "name": "p1",
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
                      "name": "A",
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
            "body": {
              "type": "Literal",
              "start": 927,
              "end": 932,
              "value": false,
              "raw": "false"
            },
            "typeParameters": null,
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
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "f2",
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
          "start": 972,
          "end": 994,
          "name": "p1",
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
                  "name": "p1",
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
                        "name": "A",
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
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 1025,
            "end": 1070,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1034,
                "end": 1039,
                "name": "p1",
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
                      "name": "A",
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
            "declare": false,
            "typeParameters": null,
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
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "acceptingBoolean",
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
          "start": 1151,
          "end": 1161,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1152,
            "end": 1161,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1154,
              "end": 1161
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
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
          "name": "acceptingBoolean",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1181,
            "end": 1187,
            "callee": {
              "type": "Identifier",
              "start": 1181,
              "end": 1184,
              "name": "isA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1185,
                "end": 1186,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "acceptingTypeGuardFunction",
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
          "start": 1285,
          "end": 1308,
          "name": "p1",
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
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
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
          "name": "acceptingTypeGuardFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1338,
            "end": 1341,
            "name": "isA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1367,
      "end": 1385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1371,
          "end": 1384,
          "id": {
            "type": "Identifier",
            "start": 1371,
            "end": 1384,
            "name": "union2",
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "B",
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
      "start": 1386,
      "end": 1434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1390,
          "end": 1433,
          "id": {
            "type": "Identifier",
            "start": 1390,
            "end": 1409,
            "name": "union3",
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
                      "name": "B",
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
                "name": "isA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1416,
                  "end": 1422,
                  "name": "union2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 1427,
              "end": 1433,
              "name": "union2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
