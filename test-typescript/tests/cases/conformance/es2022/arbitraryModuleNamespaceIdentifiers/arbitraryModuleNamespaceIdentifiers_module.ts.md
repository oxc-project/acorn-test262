__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1466,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 15,
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 18,
            "end": 29,
            "raw": "\"someValue\"",
            "value": "someValue",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 58,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 44,
        "decorators": [],
        "name": "someType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 47,
        "end": 57,
        "literal": {
          "type": "Literal",
          "start": 47,
          "end": 57,
          "raw": "\"someType\"",
          "value": "someType",
          "regex": null,
          "bigint": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 90,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 69,
          "end": 87,
          "exported": {
            "type": "Literal",
            "start": 82,
            "end": 87,
            "raw": "\"<X>\"",
            "value": "<X>",
            "regex": null,
            "bigint": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 78,
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 91,
      "end": 170,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 123,
        "end": 169,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 100,
          "end": 115,
          "imported": {
            "type": "Literal",
            "start": 100,
            "end": 105,
            "raw": "\"<X>\"",
            "value": "<X>",
            "regex": null,
            "bigint": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 109,
            "end": 115,
            "decorators": [],
            "name": "valueX",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "IfStatement",
      "start": 171,
      "end": 227,
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "start": 199,
        "end": 227,
        "argument": {
          "type": "Literal",
          "start": 205,
          "end": 226,
          "raw": "\"should be someValue\"",
          "value": "should be someValue",
          "regex": null,
          "bigint": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 175,
        "end": 197,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 175,
          "end": 181,
          "decorators": [],
          "name": "valueX",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 186,
          "end": 197,
          "raw": "\"someValue\"",
          "value": "someValue",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 229,
      "end": 307,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 260,
        "end": 306,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 238,
          "end": 252,
          "exported": {
            "type": "Literal",
            "start": 247,
            "end": 252,
            "raw": "\"<Y>\"",
            "value": "<Y>",
            "regex": null,
            "bigint": null
          },
          "exportKind": "value",
          "local": {
            "type": "Literal",
            "start": 238,
            "end": 243,
            "raw": "\"<X>\"",
            "value": "<X>",
            "regex": null,
            "bigint": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 308,
      "end": 387,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 340,
        "end": 386,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 317,
          "end": 332,
          "imported": {
            "type": "Literal",
            "start": 317,
            "end": 322,
            "raw": "\"<Y>\"",
            "value": "<Y>",
            "regex": null,
            "bigint": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 326,
            "end": 332,
            "decorators": [],
            "name": "valueY",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "IfStatement",
      "start": 388,
      "end": 444,
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "start": 416,
        "end": 444,
        "argument": {
          "type": "Literal",
          "start": 422,
          "end": 443,
          "raw": "\"should be someValue\"",
          "value": "should be someValue",
          "regex": null,
          "bigint": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 392,
        "end": 414,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 392,
          "end": 398,
          "decorators": [],
          "name": "valueY",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 403,
          "end": 414,
          "raw": "\"someValue\"",
          "value": "someValue",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 446,
      "end": 516,
      "attributes": [],
      "exported": {
        "type": "Literal",
        "start": 458,
        "end": 463,
        "raw": "\"<Z>\"",
        "value": "<Z>",
        "regex": null,
        "bigint": null
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 469,
        "end": 515,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 517,
      "end": 596,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 549,
        "end": 595,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 526,
          "end": 541,
          "imported": {
            "type": "Literal",
            "start": 526,
            "end": 531,
            "raw": "\"<Z>\"",
            "value": "<Z>",
            "regex": null,
            "bigint": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 535,
            "end": 541,
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "IfStatement",
      "start": 597,
      "end": 660,
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "start": 632,
        "end": 660,
        "argument": {
          "type": "Literal",
          "start": 638,
          "end": 659,
          "raw": "\"should be someValue\"",
          "value": "should be someValue",
          "regex": null,
          "bigint": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 601,
        "end": 630,
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "start": 601,
          "end": 614,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 601,
            "end": 607,
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 608,
            "end": 613,
            "raw": "\"<X>\"",
            "value": "<X>",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 619,
          "end": 630,
          "raw": "\"someValue\"",
          "value": "someValue",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 661,
      "end": 724,
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "start": 696,
        "end": 724,
        "argument": {
          "type": "Literal",
          "start": 702,
          "end": 723,
          "raw": "\"should be someValue\"",
          "value": "should be someValue",
          "regex": null,
          "bigint": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 665,
        "end": 694,
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "start": 665,
          "end": 678,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 665,
            "end": 671,
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 672,
            "end": 677,
            "raw": "\"<Y>\"",
            "value": "<Y>",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 683,
          "end": 694,
          "raw": "\"someValue\"",
          "value": "someValue",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 725,
      "end": 790,
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "start": 755,
        "end": 790,
        "argument": {
          "type": "Literal",
          "start": 761,
          "end": 789,
          "raw": "\"should be export namespace\"",
          "value": "should be export namespace",
          "regex": null,
          "bigint": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 729,
        "end": 753,
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "start": 729,
          "end": 742,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 729,
            "end": 735,
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 736,
            "end": 741,
            "raw": "\"<Z>\"",
            "value": "<Z>",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 747,
          "end": 753,
          "decorators": [],
          "name": "valueZ",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 792,
      "end": 826,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 801,
          "end": 823,
          "exported": {
            "type": "Literal",
            "start": 818,
            "end": 823,
            "raw": "\"<A>\"",
            "value": "<A>",
            "regex": null,
            "bigint": null
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 806,
            "end": 814,
            "decorators": [],
            "name": "someType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 827,
      "end": 910,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 863,
        "end": 909,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 836,
          "end": 855,
          "imported": {
            "type": "Literal",
            "start": 841,
            "end": 846,
            "raw": "\"<A>\"",
            "value": "<A>",
            "regex": null,
            "bigint": null
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 850,
            "end": 855,
            "decorators": [],
            "name": "typeA",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 911,
      "end": 967,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 917,
          "end": 966,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 917,
            "end": 934,
            "decorators": [],
            "name": "importTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 927,
              "end": 934,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 929,
                "end": 934,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 934,
                  "decorators": [],
                  "name": "typeA",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 937,
            "end": 966,
            "raw": "\"expect error about someType\"",
            "value": "expect error about someType",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 969,
      "end": 1052,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 1005,
        "end": 1051,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 978,
          "end": 997,
          "exported": {
            "type": "Literal",
            "start": 992,
            "end": 997,
            "raw": "\"<B>\"",
            "value": "<B>",
            "regex": null,
            "bigint": null
          },
          "exportKind": "type",
          "local": {
            "type": "Literal",
            "start": 983,
            "end": 988,
            "raw": "\"<A>\"",
            "value": "<A>",
            "regex": null,
            "bigint": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1053,
      "end": 1136,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1089,
        "end": 1135,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1062,
          "end": 1081,
          "imported": {
            "type": "Literal",
            "start": 1067,
            "end": 1072,
            "raw": "\"<B>\"",
            "value": "<B>",
            "regex": null,
            "bigint": null
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 1076,
            "end": 1081,
            "decorators": [],
            "name": "typeB",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 1137,
      "end": 1195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1143,
          "end": 1194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1143,
            "end": 1162,
            "decorators": [],
            "name": "reimportTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1155,
              "end": 1162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1157,
                "end": 1162,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1157,
                  "end": 1162,
                  "decorators": [],
                  "name": "typeB",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1165,
            "end": 1194,
            "raw": "\"expect error about someType\"",
            "value": "expect error about someType",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 1197,
      "end": 1272,
      "attributes": [],
      "exported": {
        "type": "Literal",
        "start": 1214,
        "end": 1219,
        "raw": "\"<C>\"",
        "value": "<C>",
        "regex": null,
        "bigint": null
      },
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 1225,
        "end": 1271,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 1273,
      "end": 1356,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1309,
        "end": 1355,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1282,
          "end": 1301,
          "imported": {
            "type": "Literal",
            "start": 1287,
            "end": 1292,
            "raw": "\"<C>\"",
            "value": "<C>",
            "regex": null,
            "bigint": null
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 1296,
            "end": 1301,
            "decorators": [],
            "name": "typeC",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1357,
      "end": 1393,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1364,
        "end": 1393,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1369,
          "end": 1378,
          "decorators": [],
          "name": "otherType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 1381,
          "end": 1392,
          "literal": {
            "type": "Literal",
            "start": 1381,
            "end": 1392,
            "raw": "\"otherType\"",
            "value": "otherType",
            "regex": null,
            "bigint": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1394,
      "end": 1466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1400,
          "end": 1465,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1400,
            "end": 1432,
            "decorators": [],
            "name": "importStarTestA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1415,
              "end": 1432,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1417,
                "end": 1432,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1417,
                  "end": 1432,
                  "left": {
                    "type": "Identifier",
                    "start": 1417,
                    "end": 1422,
                    "decorators": [],
                    "name": "typeC",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1423,
                    "end": 1432,
                    "decorators": [],
                    "name": "otherType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1435,
            "end": 1465,
            "raw": "\"expect error about otherType\"",
            "value": "expect error about otherType",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
