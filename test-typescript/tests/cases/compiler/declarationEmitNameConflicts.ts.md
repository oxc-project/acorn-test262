__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 31,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 29,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 18,
              "end": 29,
              "id": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 26,
                "end": 29,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 32,
      "end": 43,
      "expression": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1070,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "im",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 55,
          "value": "./declarationEmit_nameConflicts_1",
          "raw": "'./declarationEmit_nameConflicts_1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 326,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 65,
        "end": 326,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 74,
          "end": 326,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 80,
              "end": 103,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 87,
                "end": 103,
                "id": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 100,
                  "end": 103,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 108,
              "end": 126,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 115,
                "end": 126,
                "id": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 123,
                  "end": 126,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 131,
              "end": 218,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 138,
                "end": 218,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 147,
                  "end": 218,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 157,
                      "end": 180,
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "start": 164,
                        "end": 180,
                        "id": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 177,
                          "end": 180,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 180,
                      "end": 181
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 190,
                      "end": 212,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 197,
                        "end": 212,
                        "id": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 208,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 209,
                          "end": 212,
                          "body": []
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "type"
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 224,
              "end": 246,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 231,
                "end": 246,
                "id": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 242,
                  "end": 245,
                  "left": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 251,
              "end": 273,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 258,
                "end": 273,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 269,
                  "end": 272,
                  "left": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 270,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 278,
              "end": 298,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 285,
                "end": 298,
                "id": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 303,
              "end": 324,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 310,
                "end": 324,
                "id": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 318,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 323,
                  "name": "im",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 328,
      "end": 733,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 335,
        "end": 733,
        "id": {
          "type": "TSQualifiedName",
          "start": 342,
          "end": 345,
          "left": {
            "type": "Identifier",
            "start": 342,
            "end": 343,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 344,
            "end": 345,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 346,
          "end": 733,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 352,
              "end": 375,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 359,
                "end": 375,
                "id": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 369,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 372,
                  "end": 375,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 380,
              "end": 398,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 387,
                "end": 398,
                "id": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 394,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 395,
                  "end": 398,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 403,
              "end": 490,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 410,
                "end": 490,
                "id": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 419,
                  "end": 490,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 429,
                      "end": 452,
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "start": 436,
                        "end": 452,
                        "id": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 449,
                          "end": 452,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 452,
                      "end": 453
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 462,
                      "end": 484,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 469,
                        "end": 484,
                        "id": {
                          "type": "Identifier",
                          "start": 479,
                          "end": 480,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 481,
                          "end": 484,
                          "body": []
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "type"
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 495,
              "end": 520,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 502,
                "end": 520,
                "id": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 511,
                  "name": "im",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 514,
                  "end": 519,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 514,
                    "end": 517,
                    "left": {
                      "type": "Identifier",
                      "start": 514,
                      "end": 515,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 516,
                      "end": 517,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 519,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 525,
              "end": 544,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 532,
                "end": 544,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 536,
                    "end": 543,
                    "id": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 537,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 540,
                      "end": 543,
                      "object": {
                        "type": "Identifier",
                        "start": 540,
                        "end": 541,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 543,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 584,
              "end": 603,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 591,
                "end": 603,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 595,
                    "end": 602,
                    "id": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 596,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 599,
                      "end": 602,
                      "object": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 601,
                        "end": 602,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 614,
              "end": 633,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 621,
                "end": 633,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 625,
                    "end": 632,
                    "id": {
                      "type": "Identifier",
                      "start": 625,
                      "end": 626,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 629,
                      "end": 632,
                      "object": {
                        "type": "Identifier",
                        "start": 629,
                        "end": 630,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 631,
                        "end": 632,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 644,
              "end": 665,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 651,
                "end": 665,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 655,
                    "end": 664,
                    "id": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 656,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 659,
                      "end": 664,
                      "object": {
                        "type": "MemberExpression",
                        "start": 659,
                        "end": 662,
                        "object": {
                          "type": "Identifier",
                          "start": 659,
                          "end": 660,
                          "name": "M",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 661,
                          "end": 662,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 664,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 676,
              "end": 695,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 683,
                "end": 695,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 687,
                    "end": 694,
                    "id": {
                      "type": "Identifier",
                      "start": 687,
                      "end": 688,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 691,
                      "end": 694,
                      "object": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 692,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 693,
                        "end": 694,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 735,
      "end": 1070,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 742,
        "end": 1070,
        "id": {
          "type": "TSQualifiedName",
          "start": 749,
          "end": 752,
          "left": {
            "type": "Identifier",
            "start": 749,
            "end": 750,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 751,
            "end": 752,
            "name": "Q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 753,
          "end": 1070,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 759,
              "end": 782,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 766,
                "end": 782,
                "id": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 776,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 779,
                  "end": 782,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 787,
              "end": 805,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 794,
                "end": 805,
                "id": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 801,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 802,
                  "end": 805,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 810,
              "end": 897,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 817,
                "end": 897,
                "id": {
                  "type": "Identifier",
                  "start": 824,
                  "end": 825,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 826,
                  "end": 897,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 836,
                      "end": 859,
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "start": 843,
                        "end": 859,
                        "id": {
                          "type": "Identifier",
                          "start": 852,
                          "end": 853,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 856,
                          "end": 859,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 859,
                      "end": 860
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 869,
                      "end": 891,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 876,
                        "end": 891,
                        "id": {
                          "type": "Identifier",
                          "start": 886,
                          "end": 887,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 888,
                          "end": 891,
                          "body": []
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "type"
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 902,
              "end": 936,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 909,
                "end": 936,
                "id": {
                  "type": "Identifier",
                  "start": 919,
                  "end": 920,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 929,
                    "end": 932,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 929,
                      "end": 932,
                      "object": {
                        "type": "Identifier",
                        "start": 929,
                        "end": 930,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 931,
                        "end": 932,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 933,
                  "end": 936,
                  "body": []
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 947,
              "end": 983,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 954,
                "end": 983,
                "id": {
                  "type": "Identifier",
                  "start": 964,
                  "end": 965,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 974,
                    "end": 979,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 974,
                      "end": 979,
                      "object": {
                        "type": "MemberExpression",
                        "start": 974,
                        "end": 977,
                        "object": {
                          "type": "Identifier",
                          "start": 974,
                          "end": 975,
                          "name": "M",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 976,
                          "end": 977,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 978,
                        "end": 979,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 980,
                  "end": 983,
                  "body": []
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 994,
              "end": 1068,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 1001,
                "end": 1068,
                "id": {
                  "type": "Identifier",
                  "start": 1008,
                  "end": 1009,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 1010,
                  "end": 1068,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 1020,
                      "end": 1056,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 1027,
                        "end": 1056,
                        "id": {
                          "type": "Identifier",
                          "start": 1037,
                          "end": 1038,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [
                          {
                            "type": "TSInterfaceHeritage",
                            "start": 1047,
                            "end": 1052,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 1047,
                              "end": 1052,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1047,
                                "end": 1050,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1047,
                                  "end": 1048,
                                  "name": "M",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1049,
                                  "end": 1050,
                                  "name": "c",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1051,
                                "end": 1052,
                                "name": "I",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 1053,
                          "end": 1056,
                          "body": []
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "type"
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
