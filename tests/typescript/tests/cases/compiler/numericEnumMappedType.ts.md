__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 29
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "initializer": null,
            "computed": false,
            "start": 32,
            "end": 35
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 40
            },
            "initializer": null,
            "computed": false,
            "start": 37,
            "end": 40
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 47
            },
            "initializer": null,
            "computed": false,
            "start": 42,
            "end": 47
          }
        ],
        "start": 30,
        "end": 49
      },
      "const": false,
      "declare": false,
      "start": 22,
      "end": 49
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 65
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 71
            },
            "initializer": null,
            "computed": false,
            "start": 68,
            "end": 71
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 76
            },
            "initializer": null,
            "computed": false,
            "start": 73,
            "end": 76
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "initializer": null,
            "computed": false,
            "start": 78,
            "end": 83
          }
        ],
        "start": 66,
        "end": 85
      },
      "const": false,
      "declare": true,
      "start": 50,
      "end": 85
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bins1",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 97
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E1",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 110
          },
          "typeArguments": null,
          "start": 108,
          "end": 110
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 114,
          "end": 120
        },
        "optional": true,
        "readonly": null,
        "start": 100,
        "end": 123
      },
      "declare": false,
      "start": 87,
      "end": 123
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bins2",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 134
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 141
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 147
          },
          "typeArguments": null,
          "start": 145,
          "end": 147
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 151,
          "end": 157
        },
        "optional": true,
        "readonly": null,
        "start": 137,
        "end": 160
      },
      "declare": false,
      "start": 124,
      "end": 160
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bins1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 177
                },
                "typeArguments": null,
                "start": 172,
                "end": 177
              },
              "start": 170,
              "end": 177
            },
            "start": 168,
            "end": 177
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 180,
            "end": 182
          },
          "definite": false,
          "start": 168,
          "end": 182
        }
      ],
      "declare": false,
      "start": 162,
      "end": 183
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bins2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 199
                },
                "typeArguments": null,
                "start": 194,
                "end": 199
              },
              "start": 192,
              "end": 199
            },
            "start": 190,
            "end": 199
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 202,
            "end": 204
          },
          "definite": false,
          "start": 190,
          "end": 204
        }
      ],
      "declare": false,
      "start": 184,
      "end": 205
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 219
                },
                "typeArguments": null,
                "start": 217,
                "end": 219
              },
              "start": 215,
              "end": 219
            },
            "start": 213,
            "end": 219
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 224
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 228
            },
            "optional": false,
            "computed": false,
            "start": 222,
            "end": 228
          },
          "definite": false,
          "start": 213,
          "end": 228
        }
      ],
      "declare": false,
      "start": 207,
      "end": 229
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 242
                },
                "typeArguments": null,
                "start": 240,
                "end": 242
              },
              "start": 238,
              "end": 242
            },
            "start": 236,
            "end": 242
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 247
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 251
            },
            "optional": false,
            "computed": false,
            "start": 245,
            "end": 251
          },
          "definite": false,
          "start": 236,
          "end": 251
        }
      ],
      "declare": false,
      "start": 230,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 256
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 257,
            "end": 258
          },
          "optional": false,
          "computed": true,
          "start": 254,
          "end": 259
        },
        "right": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 262,
          "end": 265
        },
        "start": 254,
        "end": 265
      },
      "directive": null,
      "start": 254,
      "end": 266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 272
          },
          "optional": false,
          "computed": true,
          "start": 267,
          "end": 273
        },
        "right": {
          "type": "Literal",
          "value": "b",
          "raw": "\"b\"",
          "start": 276,
          "end": 279
        },
        "start": 267,
        "end": 279
      },
      "directive": null,
      "start": 267,
      "end": 280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 284
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 285,
            "end": 286
          },
          "optional": false,
          "computed": true,
          "start": 282,
          "end": 287
        },
        "right": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 290,
          "end": 293
        },
        "start": 282,
        "end": 293
      },
      "directive": null,
      "start": 282,
      "end": 294
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 300
          },
          "optional": false,
          "computed": true,
          "start": 295,
          "end": 301
        },
        "right": {
          "type": "Literal",
          "value": "b",
          "raw": "\"b\"",
          "start": 304,
          "end": 307
        },
        "start": 295,
        "end": 307
      },
      "directive": null,
      "start": 295,
      "end": 308
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "val",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 422
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 426,
          "end": 432
        },
        "start": 424,
        "end": 432
      },
      "body": null,
      "expression": false,
      "start": 402,
      "end": 433
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 442
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 452
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 449,
              "end": 454
            },
            "computed": false,
            "start": 445,
            "end": 454
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 457
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 463
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 460,
              "end": 465
            },
            "computed": false,
            "start": 456,
            "end": 465
          }
        ],
        "start": 443,
        "end": 467
      },
      "const": false,
      "declare": false,
      "start": 435,
      "end": 467
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N2",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 475
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 479
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 485
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 482,
              "end": 487
            },
            "computed": false,
            "start": 478,
            "end": 487
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 496
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 493,
              "end": 498
            },
            "computed": false,
            "start": 489,
            "end": 498
          }
        ],
        "start": 476,
        "end": 500
      },
      "const": false,
      "declare": false,
      "start": 468,
      "end": 500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 507,
        "end": 509
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 515,
          "end": 516
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 522
              },
              "typeArguments": null,
              "start": 520,
              "end": 522
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 527
              },
              "typeArguments": null,
              "start": 525,
              "end": 527
            }
          ],
          "start": 520,
          "end": 527
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 531
          },
          "typeArguments": null,
          "start": 530,
          "end": 531
        },
        "optional": false,
        "readonly": null,
        "start": 512,
        "end": 533
      },
      "declare": false,
      "start": 502,
      "end": 534
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 757,
        "end": 758
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 764
            },
            "initializer": null,
            "computed": false,
            "start": 761,
            "end": 764
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 769
            },
            "initializer": null,
            "computed": false,
            "start": 766,
            "end": 769
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 776
            },
            "initializer": {
              "type": "Literal",
              "value": "x",
              "raw": "'x'",
              "start": 779,
              "end": 782
            },
            "computed": false,
            "start": 771,
            "end": 782
          }
        ],
        "start": 759,
        "end": 784
      },
      "const": false,
      "declare": true,
      "start": 744,
      "end": 784
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 795
                },
                "typeArguments": null,
                "start": 794,
                "end": 795
              },
              "start": 792,
              "end": 795
            },
            "start": 791,
            "end": 795
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 799
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 803
            },
            "optional": false,
            "computed": false,
            "start": 798,
            "end": 803
          },
          "definite": false,
          "start": 791,
          "end": 803
        }
      ],
      "declare": false,
      "start": 785,
      "end": 804
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 814,
                    "end": 815
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ONE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 819
                  },
                  "start": 814,
                  "end": 819
                },
                "typeArguments": null,
                "start": 814,
                "end": 819
              },
              "start": 812,
              "end": 819
            },
            "start": 811,
            "end": 819
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 823
          },
          "definite": false,
          "start": 811,
          "end": 823
        }
      ],
      "declare": false,
      "start": 805,
      "end": 824
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 824
}
```
