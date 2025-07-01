__ESTREE_TEST__:PASS:
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
