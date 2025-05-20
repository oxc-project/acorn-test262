__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 824,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 22,
      "end": 49,
      "body": {
        "type": "TSEnumBody",
        "start": 30,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 32,
            "end": 35,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 40,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 47,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 29,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 50,
      "end": 85,
      "body": {
        "type": "TSEnumBody",
        "start": 66,
        "end": 85,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 68,
            "end": 71,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 73,
            "end": 76,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 78,
            "end": 83,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 123,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 97,
        "decorators": [],
        "name": "Bins1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 100,
        "end": 123,
        "constraint": {
          "type": "TSTypeReference",
          "start": 108,
          "end": 110,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "decorators": [],
            "name": "E1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": true,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 114,
          "end": 120
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 124,
      "end": 160,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 134,
        "decorators": [],
        "name": "Bins2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 137,
        "end": 160,
        "constraint": {
          "type": "TSTypeReference",
          "start": 145,
          "end": 147,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 145,
            "end": 147,
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": true,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 151,
          "end": 157
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 177,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 177,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 177,
                  "decorators": [],
                  "name": "Bins1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 180,
            "end": 182,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 199,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 199,
                  "decorators": [],
                  "name": "Bins2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 202,
            "end": 204,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 219,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 219,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 219,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 219,
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 222,
            "end": 228,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 222,
              "end": 224,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 242,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 242,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 242,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 245,
            "end": 251,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 245,
              "end": 247,
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 248,
              "end": 251,
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 266,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 254,
        "end": 265,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 254,
          "end": 259,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 254,
            "end": 256,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 257,
            "end": 258,
            "raw": "1",
            "value": 1
          }
        },
        "right": {
          "type": "Literal",
          "start": 262,
          "end": 265,
          "raw": "\"a\"",
          "value": "a"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 280,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 267,
        "end": 279,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 267,
          "end": 273,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 272,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 276,
          "end": 279,
          "raw": "\"b\"",
          "value": "b"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 294,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 282,
        "end": 293,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 282,
          "end": 287,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 284,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 285,
            "end": 286,
            "raw": "1",
            "value": 1
          }
        },
        "right": {
          "type": "Literal",
          "start": 290,
          "end": 293,
          "raw": "\"a\"",
          "value": "a"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 308,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 295,
        "end": 307,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 295,
          "end": 301,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 304,
          "end": 307,
          "raw": "\"b\"",
          "value": "b"
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 402,
      "end": 433,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 422,
        "decorators": [],
        "name": "val",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 424,
        "end": 432,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 426,
          "end": 432
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 435,
      "end": 467,
      "body": {
        "type": "TSEnumBody",
        "start": 443,
        "end": 467,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 445,
            "end": 454,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 449,
              "end": 454,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 456,
            "end": 465,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 456,
              "end": 457,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 460,
              "end": 465,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 460,
                "end": 463,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 442,
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 468,
      "end": 500,
      "body": {
        "type": "TSEnumBody",
        "start": 476,
        "end": 500,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 478,
            "end": 487,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 482,
              "end": 487,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 482,
                "end": 485,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 489,
            "end": 498,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 493,
              "end": 498,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 493,
                "end": 496,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 475,
        "decorators": [],
        "name": "N2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 502,
      "end": 534,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 507,
        "end": 509,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 512,
        "end": 533,
        "constraint": {
          "type": "TSUnionType",
          "start": 520,
          "end": 527,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 520,
              "end": 522,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 520,
                "end": 522,
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 525,
              "end": 527,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 525,
                "end": 527,
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 515,
          "end": 516,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 530,
          "end": 531,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 744,
      "end": 784,
      "body": {
        "type": "TSEnumBody",
        "start": 759,
        "end": 784,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 761,
            "end": 764,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 761,
              "end": 764,
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 766,
            "end": 769,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 766,
              "end": 769,
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 771,
            "end": 782,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 771,
              "end": 776,
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 779,
              "end": 782,
              "raw": "'x'",
              "value": "x"
            }
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 757,
        "end": 758,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 785,
      "end": 804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 791,
          "end": 803,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 791,
            "end": 795,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 792,
              "end": 795,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 794,
                "end": 795,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 795,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 798,
            "end": 803,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 798,
              "end": 799,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 800,
              "end": 803,
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 805,
      "end": 824,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 811,
          "end": 823,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 811,
            "end": 819,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 812,
              "end": 819,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 814,
                "end": 819,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 814,
                  "end": 819,
                  "left": {
                    "type": "Identifier",
                    "start": 814,
                    "end": 815,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 819,
                    "decorators": [],
                    "name": "ONE",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 822,
            "end": 823,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
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
