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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
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
            "value": "someValue",
            "raw": "\"someValue\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 44,
        "decorators": [],
        "name": "someType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 47,
        "end": 57,
        "literal": {
          "type": "Literal",
          "start": 47,
          "end": 57,
          "value": "someType",
          "raw": "\"someType\""
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 90,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 69,
          "end": 87,
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 78,
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Literal",
            "start": 82,
            "end": 87,
            "value": "<X>",
            "raw": "\"<X>\""
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 91,
      "end": 170,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 100,
          "end": 115,
          "imported": {
            "type": "Literal",
            "start": 100,
            "end": 105,
            "value": "<X>",
            "raw": "\"<X>\""
          },
          "local": {
            "type": "Identifier",
            "start": 109,
            "end": 115,
            "decorators": [],
            "name": "valueX",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 123,
        "end": 169,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 171,
      "end": 227,
      "test": {
        "type": "BinaryExpression",
        "start": 175,
        "end": 197,
        "left": {
          "type": "Identifier",
          "start": 175,
          "end": 181,
          "decorators": [],
          "name": "valueX",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 186,
          "end": 197,
          "value": "someValue",
          "raw": "\"someValue\""
        }
      },
      "consequent": {
        "type": "ThrowStatement",
        "start": 199,
        "end": 227,
        "argument": {
          "type": "Literal",
          "start": 205,
          "end": 226,
          "value": "should be someValue",
          "raw": "\"should be someValue\""
        }
      },
      "alternate": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 229,
      "end": 307,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 238,
          "end": 252,
          "local": {
            "type": "Literal",
            "start": 238,
            "end": 243,
            "value": "<X>",
            "raw": "\"<X>\""
          },
          "exported": {
            "type": "Literal",
            "start": 247,
            "end": 252,
            "value": "<Y>",
            "raw": "\"<Y>\""
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 260,
        "end": 306,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 308,
      "end": 387,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 317,
          "end": 332,
          "imported": {
            "type": "Literal",
            "start": 317,
            "end": 322,
            "value": "<Y>",
            "raw": "\"<Y>\""
          },
          "local": {
            "type": "Identifier",
            "start": 326,
            "end": 332,
            "decorators": [],
            "name": "valueY",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 340,
        "end": 386,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 388,
      "end": 444,
      "test": {
        "type": "BinaryExpression",
        "start": 392,
        "end": 414,
        "left": {
          "type": "Identifier",
          "start": 392,
          "end": 398,
          "decorators": [],
          "name": "valueY",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 403,
          "end": 414,
          "value": "someValue",
          "raw": "\"someValue\""
        }
      },
      "consequent": {
        "type": "ThrowStatement",
        "start": 416,
        "end": 444,
        "argument": {
          "type": "Literal",
          "start": 422,
          "end": 443,
          "value": "should be someValue",
          "raw": "\"should be someValue\""
        }
      },
      "alternate": null
    },
    {
      "type": "ExportAllDeclaration",
      "start": 446,
      "end": 516,
      "exported": {
        "type": "Literal",
        "start": 458,
        "end": 463,
        "value": "<Z>",
        "raw": "\"<Z>\""
      },
      "source": {
        "type": "Literal",
        "start": 469,
        "end": 515,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 517,
      "end": 596,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 526,
          "end": 541,
          "imported": {
            "type": "Literal",
            "start": 526,
            "end": 531,
            "value": "<Z>",
            "raw": "\"<Z>\""
          },
          "local": {
            "type": "Identifier",
            "start": 535,
            "end": 541,
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 549,
        "end": 595,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 597,
      "end": 660,
      "test": {
        "type": "BinaryExpression",
        "start": 601,
        "end": 630,
        "left": {
          "type": "MemberExpression",
          "start": 601,
          "end": 614,
          "object": {
            "type": "Identifier",
            "start": 601,
            "end": 607,
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 608,
            "end": 613,
            "value": "<X>",
            "raw": "\"<X>\""
          },
          "optional": false,
          "computed": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 619,
          "end": 630,
          "value": "someValue",
          "raw": "\"someValue\""
        }
      },
      "consequent": {
        "type": "ThrowStatement",
        "start": 632,
        "end": 660,
        "argument": {
          "type": "Literal",
          "start": 638,
          "end": 659,
          "value": "should be someValue",
          "raw": "\"should be someValue\""
        }
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 661,
      "end": 724,
      "test": {
        "type": "BinaryExpression",
        "start": 665,
        "end": 694,
        "left": {
          "type": "MemberExpression",
          "start": 665,
          "end": 678,
          "object": {
            "type": "Identifier",
            "start": 665,
            "end": 671,
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 672,
            "end": 677,
            "value": "<Y>",
            "raw": "\"<Y>\""
          },
          "optional": false,
          "computed": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 683,
          "end": 694,
          "value": "someValue",
          "raw": "\"someValue\""
        }
      },
      "consequent": {
        "type": "ThrowStatement",
        "start": 696,
        "end": 724,
        "argument": {
          "type": "Literal",
          "start": 702,
          "end": 723,
          "value": "should be someValue",
          "raw": "\"should be someValue\""
        }
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 725,
      "end": 790,
      "test": {
        "type": "BinaryExpression",
        "start": 729,
        "end": 753,
        "left": {
          "type": "MemberExpression",
          "start": 729,
          "end": 742,
          "object": {
            "type": "Identifier",
            "start": 729,
            "end": 735,
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 736,
            "end": 741,
            "value": "<Z>",
            "raw": "\"<Z>\""
          },
          "optional": false,
          "computed": true
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 747,
          "end": 753,
          "decorators": [],
          "name": "valueZ",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "ThrowStatement",
        "start": 755,
        "end": 790,
        "argument": {
          "type": "Literal",
          "start": 761,
          "end": 789,
          "value": "should be export namespace",
          "raw": "\"should be export namespace\""
        }
      },
      "alternate": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 792,
      "end": 826,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 801,
          "end": 823,
          "local": {
            "type": "Identifier",
            "start": 806,
            "end": 814,
            "decorators": [],
            "name": "someType",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Literal",
            "start": 818,
            "end": 823,
            "value": "<A>",
            "raw": "\"<A>\""
          },
          "exportKind": "type"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 827,
      "end": 910,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 836,
          "end": 855,
          "imported": {
            "type": "Literal",
            "start": 841,
            "end": 846,
            "value": "<A>",
            "raw": "\"<A>\""
          },
          "local": {
            "type": "Identifier",
            "start": 850,
            "end": 855,
            "decorators": [],
            "name": "typeA",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 863,
        "end": 909,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 911,
      "end": 967,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 917,
          "end": 966,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 934,
                  "decorators": [],
                  "name": "typeA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 937,
            "end": 966,
            "value": "expect error about someType",
            "raw": "\"expect error about someType\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 969,
      "end": 1052,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 978,
          "end": 997,
          "local": {
            "type": "Literal",
            "start": 983,
            "end": 988,
            "value": "<A>",
            "raw": "\"<A>\""
          },
          "exported": {
            "type": "Literal",
            "start": 992,
            "end": 997,
            "value": "<B>",
            "raw": "\"<B>\""
          },
          "exportKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1005,
        "end": 1051,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 1053,
      "end": 1136,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1062,
          "end": 1081,
          "imported": {
            "type": "Literal",
            "start": 1067,
            "end": 1072,
            "value": "<B>",
            "raw": "\"<B>\""
          },
          "local": {
            "type": "Identifier",
            "start": 1076,
            "end": 1081,
            "decorators": [],
            "name": "typeB",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1089,
        "end": 1135,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 1137,
      "end": 1195,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1143,
          "end": 1194,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1157,
                  "end": 1162,
                  "decorators": [],
                  "name": "typeB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1165,
            "end": 1194,
            "value": "expect error about someType",
            "raw": "\"expect error about someType\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportAllDeclaration",
      "start": 1197,
      "end": 1272,
      "exported": {
        "type": "Literal",
        "start": 1214,
        "end": 1219,
        "value": "<C>",
        "raw": "\"<C>\""
      },
      "source": {
        "type": "Literal",
        "start": 1225,
        "end": 1271,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 1273,
      "end": 1356,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1282,
          "end": 1301,
          "imported": {
            "type": "Literal",
            "start": 1287,
            "end": 1292,
            "value": "<C>",
            "raw": "\"<C>\""
          },
          "local": {
            "type": "Identifier",
            "start": 1296,
            "end": 1301,
            "decorators": [],
            "name": "typeC",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1309,
        "end": 1355,
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1357,
      "end": 1393,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1364,
        "end": 1393,
        "id": {
          "type": "Identifier",
          "start": 1369,
          "end": 1378,
          "decorators": [],
          "name": "otherType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 1381,
          "end": 1392,
          "literal": {
            "type": "Literal",
            "start": 1381,
            "end": 1392,
            "value": "otherType",
            "raw": "\"otherType\""
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1394,
      "end": 1466,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1400,
          "end": 1465,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1435,
            "end": 1465,
            "value": "expect error about otherType",
            "raw": "\"expect error about otherType\""
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
