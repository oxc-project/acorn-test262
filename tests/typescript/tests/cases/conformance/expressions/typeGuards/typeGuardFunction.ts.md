__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propA",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 28
          }
        ],
        "start": 8,
        "end": 30
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 39
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propB",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 46,
            "end": 60
          }
        ],
        "start": 40,
        "end": 62
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 62
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 81
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propC",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
              },
              "start": 93,
              "end": 101
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 88,
            "end": 102
          }
        ],
        "start": 82,
        "end": 104
      },
      "abstract": false,
      "declare": false,
      "start": 64,
      "end": 104
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 131,
              "end": 134
            },
            "start": 129,
            "end": 134
          },
          "start": 127,
          "end": 134
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 139
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "typeArguments": null,
              "start": 143,
              "end": 144
            },
            "start": 143,
            "end": 144
          },
          "start": 137,
          "end": 144
        },
        "start": 135,
        "end": 144
      },
      "body": null,
      "expression": false,
      "start": 106,
      "end": 145
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isB",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 166
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 171,
              "end": 174
            },
            "start": 169,
            "end": 174
          },
          "start": 167,
          "end": 174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 179
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 184
              },
              "typeArguments": null,
              "start": 183,
              "end": 184
            },
            "start": 183,
            "end": 184
          },
          "start": 177,
          "end": 184
        },
        "start": 175,
        "end": 184
      },
      "body": null,
      "expression": false,
      "start": 146,
      "end": 185
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 206
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 211,
              "end": 214
            },
            "start": 209,
            "end": 214
          },
          "start": 207,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 219
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 224
              },
              "typeArguments": null,
              "start": 223,
              "end": 224
            },
            "start": 223,
            "end": 224
          },
          "start": 217,
          "end": 224
        },
        "start": 215,
        "end": 224
      },
      "body": null,
      "expression": false,
      "start": 186,
      "end": 225
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "retC",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 248
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 253
          },
          "typeArguments": null,
          "start": 252,
          "end": 253
        },
        "start": 250,
        "end": 253
      },
      "body": null,
      "expression": false,
      "start": 227,
      "end": 254
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 264
                },
                "typeArguments": null,
                "start": 263,
                "end": 264
              },
              "start": 261,
              "end": 264
            },
            "start": 260,
            "end": 264
          },
          "init": null,
          "definite": false,
          "start": 260,
          "end": 264
        }
      ],
      "declare": false,
      "start": 256,
      "end": 265
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "typeArguments": null,
                "start": 273,
                "end": 274
              },
              "start": 271,
              "end": 274
            },
            "start": 270,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 270,
          "end": 274
        }
      ],
      "declare": false,
      "start": 266,
      "end": 275
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isC",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 295
          }
        ],
        "optional": false,
        "start": 290,
        "end": 296
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "propC",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 311
              },
              "optional": false,
              "computed": false,
              "start": 304,
              "end": 311
            },
            "directive": null,
            "start": 304,
            "end": 312
          }
        ],
        "start": 298,
        "end": 314
      },
      "alternate": null,
      "start": 286,
      "end": 314
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "subType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 342
                },
                "typeArguments": null,
                "start": 341,
                "end": 342
              },
              "start": 339,
              "end": 342
            },
            "start": 332,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 332,
          "end": 342
        }
      ],
      "declare": false,
      "start": 328,
      "end": 343
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isA",
          "optional": false,
          "typeAnnotation": null,
          "start": 347,
          "end": 350
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "subType",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 358
          }
        ],
        "optional": false,
        "start": 347,
        "end": 359
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "subType",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 374
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "propC",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 380
              },
              "optional": false,
              "computed": false,
              "start": 367,
              "end": 380
            },
            "directive": null,
            "start": 367,
            "end": 381
          }
        ],
        "start": 361,
        "end": 383
      },
      "alternate": null,
      "start": 344,
      "end": 383
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 411
                    },
                    "typeArguments": null,
                    "start": 410,
                    "end": 411
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 415
                    },
                    "typeArguments": null,
                    "start": 414,
                    "end": 415
                  }
                ],
                "start": 410,
                "end": 415
              },
              "start": 408,
              "end": 415
            },
            "start": 403,
            "end": 415
          },
          "init": null,
          "definite": false,
          "start": 403,
          "end": 415
        }
      ],
      "declare": false,
      "start": 399,
      "end": 416
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isA",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 423
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 429
          }
        ],
        "optional": false,
        "start": 420,
        "end": 430
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "union",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "propA",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 449
              },
              "optional": false,
              "computed": false,
              "start": 438,
              "end": 449
            },
            "directive": null,
            "start": 438,
            "end": 450
          }
        ],
        "start": 432,
        "end": 452
      },
      "alternate": null,
      "start": 417,
      "end": 452
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 482,
        "end": 484
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 497
                    },
                    "typeArguments": null,
                    "start": 496,
                    "end": 497
                  },
                  "start": 494,
                  "end": 497
                },
                "start": 492,
                "end": 497
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 502
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 507
                    },
                    "typeArguments": null,
                    "start": 506,
                    "end": 507
                  },
                  "start": 506,
                  "end": 507
                },
                "start": 500,
                "end": 507
              },
              "start": 498,
              "end": 507
            },
            "start": 491,
            "end": 508
          }
        ],
        "start": 485,
        "end": 510
      },
      "declare": false,
      "start": 472,
      "end": 510
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC_multipleParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 692
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 695
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 699
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 702,
            "end": 704
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 708,
                "end": 709
              },
              "typeArguments": null,
              "start": 708,
              "end": 709
            },
            "start": 708,
            "end": 709
          },
          "start": 702,
          "end": 709
        },
        "start": 700,
        "end": 709
      },
      "body": null,
      "expression": false,
      "start": 657,
      "end": 710
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isC_multipleParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 715,
          "end": 733
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 735
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 737,
            "end": 738
          }
        ],
        "optional": false,
        "start": 715,
        "end": 739
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 748
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "propC",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 754
              },
              "optional": false,
              "computed": false,
              "start": 747,
              "end": 754
            },
            "directive": null,
            "start": 747,
            "end": 755
          }
        ],
        "start": 741,
        "end": 757
      },
      "alternate": null,
      "start": 711,
      "end": 757
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 785,
                      "end": 790
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 795,
                              "end": 796
                            },
                            "typeArguments": null,
                            "start": 795,
                            "end": 796
                          },
                          "start": 793,
                          "end": 796
                        },
                        "start": 791,
                        "end": 796
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 801
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 805,
                              "end": 806
                            },
                            "typeArguments": null,
                            "start": 805,
                            "end": 806
                          },
                          "start": 805,
                          "end": 806
                        },
                        "start": 799,
                        "end": 806
                      },
                      "start": 797,
                      "end": 806
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 785,
                    "end": 807
                  }
                ],
                "start": 779,
                "end": 809
              },
              "start": 777,
              "end": 809
            },
            "start": 774,
            "end": 809
          },
          "init": null,
          "definite": false,
          "start": 774,
          "end": 809
        }
      ],
      "declare": false,
      "start": 770,
      "end": 809
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 816,
        "end": 817
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 831
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 836,
                        "end": 837
                      },
                      "typeArguments": null,
                      "start": 836,
                      "end": 837
                    },
                    "start": 834,
                    "end": 837
                  },
                  "start": 832,
                  "end": 837
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 842
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 847
                      },
                      "typeArguments": null,
                      "start": 846,
                      "end": 847
                    },
                    "start": 846,
                    "end": 847
                  },
                  "start": 840,
                  "end": 847
                },
                "start": 838,
                "end": 847
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 865,
                      "end": 869
                    },
                    "start": 858,
                    "end": 870
                  }
                ],
                "start": 848,
                "end": 876
              },
              "expression": false,
              "start": 831,
              "end": 876
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 824,
            "end": 876
          }
        ],
        "start": 818,
        "end": 878
      },
      "abstract": false,
      "declare": false,
      "start": 810,
      "end": 878
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 904
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 912,
                      "end": 913
                    },
                    "typeArguments": null,
                    "start": 912,
                    "end": 913
                  },
                  "start": 910,
                  "end": 913
                },
                "start": 908,
                "end": 913
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 916,
                  "end": 918
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 923
                    },
                    "typeArguments": null,
                    "start": 922,
                    "end": 923
                  },
                  "start": 922,
                  "end": 923
                },
                "start": 916,
                "end": 923
              },
              "start": 914,
              "end": 923
            },
            "body": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 927,
              "end": 932
            },
            "id": null,
            "generator": false,
            "start": 907,
            "end": 932
          },
          "definite": false,
          "start": 902,
          "end": 932
        }
      ],
      "declare": false,
      "start": 898,
      "end": 933
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 969,
        "end": 971
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 981,
                        "end": 982
                      },
                      "typeArguments": null,
                      "start": 981,
                      "end": 982
                    },
                    "start": 979,
                    "end": 982
                  },
                  "start": 977,
                  "end": 982
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 987,
                    "end": 989
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 993,
                        "end": 994
                      },
                      "typeArguments": null,
                      "start": 993,
                      "end": 994
                    },
                    "start": 993,
                    "end": 994
                  },
                  "start": 987,
                  "end": 994
                },
                "start": 984,
                "end": 994
              },
              "start": 976,
              "end": 994
            },
            "start": 974,
            "end": 994
          },
          "start": 972,
          "end": 994
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 952,
      "end": 996
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1022,
          "end": 1024
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1038,
                      "end": 1039
                    },
                    "typeArguments": null,
                    "start": 1038,
                    "end": 1039
                  },
                  "start": 1036,
                  "end": 1039
                },
                "start": 1034,
                "end": 1039
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1044
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1048,
                      "end": 1049
                    },
                    "typeArguments": null,
                    "start": 1048,
                    "end": 1049
                  },
                  "start": 1048,
                  "end": 1049
                },
                "start": 1042,
                "end": 1049
              },
              "start": 1040,
              "end": 1049
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1063,
                    "end": 1067
                  },
                  "start": 1056,
                  "end": 1068
                }
              ],
              "start": 1050,
              "end": 1070
            },
            "expression": false,
            "start": 1025,
            "end": 1070
          }
        ],
        "optional": false,
        "start": 1022,
        "end": 1071
      },
      "directive": null,
      "start": 1022,
      "end": 1072
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptingBoolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 1134,
        "end": 1150
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1154,
              "end": 1161
            },
            "start": 1152,
            "end": 1161
          },
          "start": 1151,
          "end": 1161
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1117,
      "end": 1163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptingBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 1164,
          "end": 1180
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1184
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1185,
                "end": 1186
              }
            ],
            "optional": false,
            "start": 1181,
            "end": 1187
          }
        ],
        "optional": false,
        "start": 1164,
        "end": 1188
      },
      "directive": null,
      "start": 1164,
      "end": 1189
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptingTypeGuardFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1258,
        "end": 1284
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1290,
                  "end": 1294
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1303
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1307,
                        "end": 1308
                      },
                      "typeArguments": null,
                      "start": 1307,
                      "end": 1308
                    },
                    "start": 1307,
                    "end": 1308
                  },
                  "start": 1299,
                  "end": 1308
                },
                "start": 1296,
                "end": 1308
              },
              "start": 1289,
              "end": 1308
            },
            "start": 1287,
            "end": 1308
          },
          "start": 1285,
          "end": 1308
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1241,
      "end": 1310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptingTypeGuardFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 1311,
          "end": 1337
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1338,
            "end": 1341
          }
        ],
        "optional": false,
        "start": 1311,
        "end": 1342
      },
      "directive": null,
      "start": 1311,
      "end": 1343
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "union2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1379,
                      "end": 1380
                    },
                    "typeArguments": null,
                    "start": 1379,
                    "end": 1380
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1383,
                      "end": 1384
                    },
                    "typeArguments": null,
                    "start": 1383,
                    "end": 1384
                  }
                ],
                "start": 1379,
                "end": 1384
              },
              "start": 1377,
              "end": 1384
            },
            "start": 1371,
            "end": 1384
          },
          "init": null,
          "definite": false,
          "start": 1371,
          "end": 1384
        }
      ],
      "declare": false,
      "start": 1367,
      "end": 1385
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "union3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1398,
                    "end": 1405
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1409
                    },
                    "typeArguments": null,
                    "start": 1408,
                    "end": 1409
                  }
                ],
                "start": 1398,
                "end": 1409
              },
              "start": 1396,
              "end": 1409
            },
            "start": 1390,
            "end": 1409
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1412,
                "end": 1415
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "union2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1416,
                  "end": 1422
                }
              ],
              "optional": false,
              "start": 1412,
              "end": 1423
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "union2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1433
            },
            "start": 1412,
            "end": 1433
          },
          "definite": false,
          "start": 1390,
          "end": 1433
        }
      ],
      "declare": false,
      "start": 1386,
      "end": 1434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1434
}
```
