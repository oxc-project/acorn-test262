__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "Literal",
            "value": "someValue",
            "raw": "\"someValue\"",
            "start": 18,
            "end": 29
          },
          "definite": false,
          "start": 6,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someType",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 44
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": "someType",
          "raw": "\"someType\"",
          "start": 47,
          "end": 57
        },
        "start": 47,
        "end": 57
      },
      "declare": false,
      "start": 31,
      "end": 58
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 78
          },
          "exported": {
            "type": "Literal",
            "value": "<X>",
            "raw": "\"<X>\"",
            "start": 82,
            "end": 87
          },
          "exportKind": "value",
          "start": 69,
          "end": 87
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<X>",
            "raw": "\"<X>\"",
            "start": 100,
            "end": 105
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueX",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 115
          },
          "importKind": "value",
          "start": 100,
          "end": 115
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 123,
        "end": 169
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 170
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueX",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 181
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "someValue",
          "raw": "\"someValue\"",
          "start": 186,
          "end": 197
        },
        "start": 175,
        "end": 197
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be someValue",
          "raw": "\"should be someValue\"",
          "start": 205,
          "end": 226
        },
        "start": 199,
        "end": 227
      },
      "alternate": null,
      "start": 171,
      "end": 227
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Literal",
            "value": "<X>",
            "raw": "\"<X>\"",
            "start": 238,
            "end": 243
          },
          "exported": {
            "type": "Literal",
            "value": "<Y>",
            "raw": "\"<Y>\"",
            "start": 247,
            "end": 252
          },
          "exportKind": "value",
          "start": 238,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 260,
        "end": 306
      },
      "exportKind": "value",
      "attributes": [],
      "start": 229,
      "end": 307
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<Y>",
            "raw": "\"<Y>\"",
            "start": 317,
            "end": 322
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueY",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 332
          },
          "importKind": "value",
          "start": 317,
          "end": 332
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 340,
        "end": 386
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 308,
      "end": 387
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueY",
          "optional": false,
          "typeAnnotation": null,
          "start": 392,
          "end": 398
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "someValue",
          "raw": "\"someValue\"",
          "start": 403,
          "end": 414
        },
        "start": 392,
        "end": 414
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be someValue",
          "raw": "\"should be someValue\"",
          "start": 422,
          "end": 443
        },
        "start": 416,
        "end": 444
      },
      "alternate": null,
      "start": 388,
      "end": 444
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Literal",
        "value": "<Z>",
        "raw": "\"<Z>\"",
        "start": 458,
        "end": 463
      },
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 469,
        "end": 515
      },
      "attributes": [],
      "exportKind": "value",
      "start": 446,
      "end": 516
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<Z>",
            "raw": "\"<Z>\"",
            "start": 526,
            "end": 531
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 535,
            "end": 541
          },
          "importKind": "value",
          "start": 526,
          "end": 541
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 549,
        "end": 595
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 517,
      "end": 596
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 607
          },
          "property": {
            "type": "Literal",
            "value": "<X>",
            "raw": "\"<X>\"",
            "start": 608,
            "end": 613
          },
          "optional": false,
          "computed": true,
          "start": 601,
          "end": 614
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "someValue",
          "raw": "\"someValue\"",
          "start": 619,
          "end": 630
        },
        "start": 601,
        "end": 630
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be someValue",
          "raw": "\"should be someValue\"",
          "start": 638,
          "end": 659
        },
        "start": 632,
        "end": 660
      },
      "alternate": null,
      "start": 597,
      "end": 660
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 671
          },
          "property": {
            "type": "Literal",
            "value": "<Y>",
            "raw": "\"<Y>\"",
            "start": 672,
            "end": 677
          },
          "optional": false,
          "computed": true,
          "start": 665,
          "end": 678
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "someValue",
          "raw": "\"someValue\"",
          "start": 683,
          "end": 694
        },
        "start": 665,
        "end": 694
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be someValue",
          "raw": "\"should be someValue\"",
          "start": 702,
          "end": 723
        },
        "start": 696,
        "end": 724
      },
      "alternate": null,
      "start": 661,
      "end": 724
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 735
          },
          "property": {
            "type": "Literal",
            "value": "<Z>",
            "raw": "\"<Z>\"",
            "start": 736,
            "end": 741
          },
          "optional": false,
          "computed": true,
          "start": 729,
          "end": 742
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueZ",
          "optional": false,
          "typeAnnotation": null,
          "start": 747,
          "end": 753
        },
        "start": 729,
        "end": 753
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be export namespace",
          "raw": "\"should be export namespace\"",
          "start": 761,
          "end": 789
        },
        "start": 755,
        "end": 790
      },
      "alternate": null,
      "start": 725,
      "end": 790
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "someType",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 814
          },
          "exported": {
            "type": "Literal",
            "value": "<A>",
            "raw": "\"<A>\"",
            "start": 818,
            "end": 823
          },
          "exportKind": "type",
          "start": 801,
          "end": 823
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 792,
      "end": 826
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<A>",
            "raw": "\"<A>\"",
            "start": 841,
            "end": 846
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeA",
            "optional": false,
            "typeAnnotation": null,
            "start": 850,
            "end": 855
          },
          "importKind": "type",
          "start": 836,
          "end": 855
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 863,
        "end": 909
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 827,
      "end": 910
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
            "name": "importTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 934
                },
                "typeArguments": null,
                "start": 929,
                "end": 934
              },
              "start": 927,
              "end": 934
            },
            "start": 917,
            "end": 934
          },
          "init": {
            "type": "Literal",
            "value": "expect error about someType",
            "raw": "\"expect error about someType\"",
            "start": 937,
            "end": 966
          },
          "definite": false,
          "start": 917,
          "end": 966
        }
      ],
      "declare": false,
      "start": 911,
      "end": 967
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Literal",
            "value": "<A>",
            "raw": "\"<A>\"",
            "start": 983,
            "end": 988
          },
          "exported": {
            "type": "Literal",
            "value": "<B>",
            "raw": "\"<B>\"",
            "start": 992,
            "end": 997
          },
          "exportKind": "type",
          "start": 978,
          "end": 997
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 1005,
        "end": 1051
      },
      "exportKind": "value",
      "attributes": [],
      "start": 969,
      "end": 1052
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<B>",
            "raw": "\"<B>\"",
            "start": 1067,
            "end": 1072
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1081
          },
          "importKind": "type",
          "start": 1062,
          "end": 1081
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 1089,
        "end": 1135
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1053,
      "end": 1136
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
            "name": "reimportTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1162
                },
                "typeArguments": null,
                "start": 1157,
                "end": 1162
              },
              "start": 1155,
              "end": 1162
            },
            "start": 1143,
            "end": 1162
          },
          "init": {
            "type": "Literal",
            "value": "expect error about someType",
            "raw": "\"expect error about someType\"",
            "start": 1165,
            "end": 1194
          },
          "definite": false,
          "start": 1143,
          "end": 1194
        }
      ],
      "declare": false,
      "start": 1137,
      "end": 1195
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Literal",
        "value": "<C>",
        "raw": "\"<C>\"",
        "start": 1214,
        "end": 1219
      },
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 1225,
        "end": 1271
      },
      "attributes": [],
      "exportKind": "type",
      "start": 1197,
      "end": 1272
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<C>",
            "raw": "\"<C>\"",
            "start": 1287,
            "end": 1292
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1301
          },
          "importKind": "type",
          "start": 1282,
          "end": 1301
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 1309,
        "end": 1355
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1273,
      "end": 1356
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "otherType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1369,
          "end": 1378
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "otherType",
            "raw": "\"otherType\"",
            "start": 1381,
            "end": 1392
          },
          "start": 1381,
          "end": 1392
        },
        "declare": false,
        "start": 1364,
        "end": 1393
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1357,
      "end": 1393
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
            "name": "importStarTestA",
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
                    "name": "typeC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1417,
                    "end": 1422
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1423,
                    "end": 1432
                  },
                  "start": 1417,
                  "end": 1432
                },
                "typeArguments": null,
                "start": 1417,
                "end": 1432
              },
              "start": 1415,
              "end": 1432
            },
            "start": 1400,
            "end": 1432
          },
          "init": {
            "type": "Literal",
            "value": "expect error about otherType",
            "raw": "\"expect error about otherType\"",
            "start": 1435,
            "end": 1465
          },
          "definite": false,
          "start": 1400,
          "end": 1465
        }
      ],
      "declare": false,
      "start": 1394,
      "end": 1466
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1466
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "someValue",
    "start": 6,
    "end": 15,
    "range": [
      6,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 18,
    "end": 29,
    "range": [
      18,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 31,
    "end": 35,
    "range": [
      31,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "someType",
    "start": 36,
    "end": 44,
    "range": [
      36,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "String",
    "value": "\"someType\"",
    "start": 47,
    "end": 57,
    "range": [
      47,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "someValue",
    "start": 69,
    "end": 78,
    "range": [
      69,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 79,
    "end": 81,
    "range": [
      79,
      81
    ]
  },
  {
    "type": "String",
    "value": "\"<X>\"",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "String",
    "value": "\"<X>\"",
    "start": 100,
    "end": 105,
    "range": [
      100,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 106,
    "end": 108,
    "range": [
      106,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "valueX",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 118,
    "end": 122,
    "range": [
      118,
      122
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 123,
    "end": 169,
    "range": [
      123,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 171,
    "end": 173,
    "range": [
      171,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "valueX",
    "start": 175,
    "end": 181,
    "range": [
      175,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 182,
    "end": 185,
    "range": [
      182,
      185
    ]
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 186,
    "end": 197,
    "range": [
      186,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 199,
    "end": 204,
    "range": [
      199,
      204
    ]
  },
  {
    "type": "String",
    "value": "\"should be someValue\"",
    "start": 205,
    "end": 226,
    "range": [
      205,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 229,
    "end": 235,
    "range": [
      229,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "String",
    "value": "\"<X>\"",
    "start": 238,
    "end": 243,
    "range": [
      238,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 244,
    "end": 246,
    "range": [
      244,
      246
    ]
  },
  {
    "type": "String",
    "value": "\"<Y>\"",
    "start": 247,
    "end": 252,
    "range": [
      247,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 255,
    "end": 259,
    "range": [
      255,
      259
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 260,
    "end": 306,
    "range": [
      260,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 308,
    "end": 314,
    "range": [
      308,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "String",
    "value": "\"<Y>\"",
    "start": 317,
    "end": 322,
    "range": [
      317,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 323,
    "end": 325,
    "range": [
      323,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "valueY",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 335,
    "end": 339,
    "range": [
      335,
      339
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 340,
    "end": 386,
    "range": [
      340,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "valueY",
    "start": 392,
    "end": 398,
    "range": [
      392,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 399,
    "end": 402,
    "range": [
      399,
      402
    ]
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 403,
    "end": 414,
    "range": [
      403,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 416,
    "end": 421,
    "range": [
      416,
      421
    ]
  },
  {
    "type": "String",
    "value": "\"should be someValue\"",
    "start": 422,
    "end": 443,
    "range": [
      422,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 446,
    "end": 452,
    "range": [
      446,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 455,
    "end": 457,
    "range": [
      455,
      457
    ]
  },
  {
    "type": "String",
    "value": "\"<Z>\"",
    "start": 458,
    "end": 463,
    "range": [
      458,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 464,
    "end": 468,
    "range": [
      464,
      468
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 469,
    "end": 515,
    "range": [
      469,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 517,
    "end": 523,
    "range": [
      517,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "String",
    "value": "\"<Z>\"",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 532,
    "end": 534,
    "range": [
      532,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 544,
    "end": 548,
    "range": [
      544,
      548
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 549,
    "end": 595,
    "range": [
      549,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 597,
    "end": 599,
    "range": [
      597,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 601,
    "end": 607,
    "range": [
      601,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "String",
    "value": "\"<X>\"",
    "start": 608,
    "end": 613,
    "range": [
      608,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 619,
    "end": 630,
    "range": [
      619,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 632,
    "end": 637,
    "range": [
      632,
      637
    ]
  },
  {
    "type": "String",
    "value": "\"should be someValue\"",
    "start": 638,
    "end": 659,
    "range": [
      638,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 661,
    "end": 663,
    "range": [
      661,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 665,
    "end": 671,
    "range": [
      665,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "String",
    "value": "\"<Y>\"",
    "start": 672,
    "end": 677,
    "range": [
      672,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 683,
    "end": 694,
    "range": [
      683,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 696,
    "end": 701,
    "range": [
      696,
      701
    ]
  },
  {
    "type": "String",
    "value": "\"should be someValue\"",
    "start": 702,
    "end": 723,
    "range": [
      702,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 725,
    "end": 727,
    "range": [
      725,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 729,
    "end": 735,
    "range": [
      729,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "String",
    "value": "\"<Z>\"",
    "start": 736,
    "end": 741,
    "range": [
      736,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 743,
    "end": 746,
    "range": [
      743,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 755,
    "end": 760,
    "range": [
      755,
      760
    ]
  },
  {
    "type": "String",
    "value": "\"should be export namespace\"",
    "start": 761,
    "end": 789,
    "range": [
      761,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 792,
    "end": 798,
    "range": [
      792,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 801,
    "end": 805,
    "range": [
      801,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "someType",
    "start": 806,
    "end": 814,
    "range": [
      806,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 815,
    "end": 817,
    "range": [
      815,
      817
    ]
  },
  {
    "type": "String",
    "value": "\"<A>\"",
    "start": 818,
    "end": 823,
    "range": [
      818,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 827,
    "end": 833,
    "range": [
      827,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 836,
    "end": 840,
    "range": [
      836,
      840
    ]
  },
  {
    "type": "String",
    "value": "\"<A>\"",
    "start": 841,
    "end": 846,
    "range": [
      841,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 847,
    "end": 849,
    "range": [
      847,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "typeA",
    "start": 850,
    "end": 855,
    "range": [
      850,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 858,
    "end": 862,
    "range": [
      858,
      862
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 863,
    "end": 909,
    "range": [
      863,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 911,
    "end": 916,
    "range": [
      911,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "importTest",
    "start": 917,
    "end": 927,
    "range": [
      917,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "typeA",
    "start": 929,
    "end": 934,
    "range": [
      929,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "String",
    "value": "\"expect error about someType\"",
    "start": 937,
    "end": 966,
    "range": [
      937,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 969,
    "end": 975,
    "range": [
      969,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 978,
    "end": 982,
    "range": [
      978,
      982
    ]
  },
  {
    "type": "String",
    "value": "\"<A>\"",
    "start": 983,
    "end": 988,
    "range": [
      983,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 989,
    "end": 991,
    "range": [
      989,
      991
    ]
  },
  {
    "type": "String",
    "value": "\"<B>\"",
    "start": 992,
    "end": 997,
    "range": [
      992,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1000,
    "end": 1004,
    "range": [
      1000,
      1004
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 1005,
    "end": 1051,
    "range": [
      1005,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1053,
    "end": 1059,
    "range": [
      1053,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1062,
    "end": 1066,
    "range": [
      1062,
      1066
    ]
  },
  {
    "type": "String",
    "value": "\"<B>\"",
    "start": 1067,
    "end": 1072,
    "range": [
      1067,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1073,
    "end": 1075,
    "range": [
      1073,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "typeB",
    "start": 1076,
    "end": 1081,
    "range": [
      1076,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1084,
    "end": 1088,
    "range": [
      1084,
      1088
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 1089,
    "end": 1135,
    "range": [
      1089,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1137,
    "end": 1142,
    "range": [
      1137,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "reimportTest",
    "start": 1143,
    "end": 1155,
    "range": [
      1143,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "typeB",
    "start": 1157,
    "end": 1162,
    "range": [
      1157,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "String",
    "value": "\"expect error about someType\"",
    "start": 1165,
    "end": 1194,
    "range": [
      1165,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1197,
    "end": 1203,
    "range": [
      1197,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1204,
    "end": 1208,
    "range": [
      1204,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1211,
    "end": 1213,
    "range": [
      1211,
      1213
    ]
  },
  {
    "type": "String",
    "value": "\"<C>\"",
    "start": 1214,
    "end": 1219,
    "range": [
      1214,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1220,
    "end": 1224,
    "range": [
      1220,
      1224
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 1225,
    "end": 1271,
    "range": [
      1225,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1273,
    "end": 1279,
    "range": [
      1273,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1282,
    "end": 1286,
    "range": [
      1282,
      1286
    ]
  },
  {
    "type": "String",
    "value": "\"<C>\"",
    "start": 1287,
    "end": 1292,
    "range": [
      1287,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1293,
    "end": 1295,
    "range": [
      1293,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "typeC",
    "start": 1296,
    "end": 1301,
    "range": [
      1296,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1304,
    "end": 1308,
    "range": [
      1304,
      1308
    ]
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 1309,
    "end": 1355,
    "range": [
      1309,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1357,
    "end": 1363,
    "range": [
      1357,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1364,
    "end": 1368,
    "range": [
      1364,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "otherType",
    "start": 1369,
    "end": 1378,
    "range": [
      1369,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "String",
    "value": "\"otherType\"",
    "start": 1381,
    "end": 1392,
    "range": [
      1381,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1394,
    "end": 1399,
    "range": [
      1394,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "importStarTestA",
    "start": 1400,
    "end": 1415,
    "range": [
      1400,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "typeC",
    "start": 1417,
    "end": 1422,
    "range": [
      1417,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "otherType",
    "start": 1423,
    "end": 1432,
    "range": [
      1423,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "String",
    "value": "\"expect error about otherType\"",
    "start": 1435,
    "end": 1465,
    "range": [
      1435,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  }
]
```
