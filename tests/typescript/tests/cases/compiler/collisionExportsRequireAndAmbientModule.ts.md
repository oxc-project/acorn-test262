__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 779,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 91,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 91,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 29,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 30,
          "end": 91,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 36,
              "end": 62,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 43,
                "end": 62,
                "id": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 55,
                  "end": 62,
                  "body": []
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 67,
              "end": 89,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 74,
                "end": 89,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 82,
                  "end": 89,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 145,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 99,
        "end": 145,
        "id": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 113,
          "end": 124,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 115,
            "end": 124,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 115,
              "end": 124,
              "left": {
                "type": "Identifier",
                "start": 115,
                "end": 122,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 125,
          "end": 145,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 131,
              "end": 143,
              "argument": {
                "type": "Literal",
                "start": 138,
                "end": 142,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 237,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 153,
        "end": 237,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 175,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 176,
          "end": 237,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 182,
              "end": 208,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 189,
                "end": 208,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 201,
                  "end": 208,
                  "body": []
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 213,
              "end": 235,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 220,
                "end": 235,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 228,
                  "end": 235,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 238,
      "end": 292,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 245,
        "end": 292,
        "id": {
          "type": "Identifier",
          "start": 254,
          "end": 258,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 260,
          "end": 271,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 262,
            "end": 271,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 262,
              "end": 271,
              "left": {
                "type": "Identifier",
                "start": 262,
                "end": 269,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 272,
          "end": 292,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 278,
              "end": 290,
              "argument": {
                "type": "Literal",
                "start": 285,
                "end": 289,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 293,
      "end": 516,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 310,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 311,
        "end": 516,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 317,
            "end": 413,
            "id": {
              "type": "Identifier",
              "start": 324,
              "end": 331,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 332,
              "end": 413,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 342,
                  "end": 372,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 349,
                    "end": 372,
                    "id": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 361,
                      "end": 372,
                      "body": []
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 381,
                  "end": 407,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 388,
                    "end": 407,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 395,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 396,
                      "end": 407,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 418,
            "end": 514,
            "id": {
              "type": "Identifier",
              "start": 425,
              "end": 432,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 433,
              "end": 514,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 443,
                  "end": 473,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 450,
                    "end": 473,
                    "id": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 461,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 462,
                      "end": 473,
                      "body": []
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 482,
                  "end": 508,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 489,
                    "end": 508,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 495,
                      "end": 496,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 497,
                      "end": 508,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 517,
      "end": 778,
      "id": {
        "type": "Identifier",
        "start": 524,
        "end": 526,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 527,
        "end": 778,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 533,
            "end": 644,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 540,
              "end": 644,
              "id": {
                "type": "Identifier",
                "start": 555,
                "end": 562,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 563,
                "end": 644,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 573,
                    "end": 603,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 580,
                      "end": 603,
                      "id": {
                        "type": "Identifier",
                        "start": 590,
                        "end": 591,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 592,
                        "end": 603,
                        "body": []
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 612,
                    "end": 638,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 619,
                      "end": 638,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 625,
                        "end": 626,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 627,
                        "end": 638,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": true,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 649,
            "end": 760,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 656,
              "end": 760,
              "id": {
                "type": "Identifier",
                "start": 671,
                "end": 678,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 679,
                "end": 760,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 689,
                    "end": 719,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 696,
                      "end": 719,
                      "id": {
                        "type": "Identifier",
                        "start": 706,
                        "end": 707,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 708,
                        "end": 719,
                        "body": []
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 728,
                    "end": 754,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 735,
                      "end": 754,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 741,
                        "end": 742,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 743,
                        "end": 754,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": true,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 765,
            "end": 776,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 769,
                "end": 775,
                "id": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 770,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 773,
                  "end": 775,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
  "end": 656,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 84,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 55,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 36,
              "end": 55,
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 48,
                "end": 55,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 60,
            "end": 82,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 67,
              "end": 82,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 75,
                "end": 82,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 85,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 107,
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 108,
        "end": 169,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 114,
            "end": 140,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 121,
              "end": 140,
              "id": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 133,
                "end": 140,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 145,
            "end": 167,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 152,
              "end": 167,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 160,
                "end": 167,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 170,
      "end": 393,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 187,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 188,
        "end": 393,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 194,
            "end": 290,
            "id": {
              "type": "Identifier",
              "start": 201,
              "end": 208,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 209,
              "end": 290,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 219,
                  "end": 249,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 226,
                    "end": 249,
                    "id": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 237,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 238,
                      "end": 249,
                      "body": []
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 258,
                  "end": 284,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 265,
                    "end": 284,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 273,
                      "end": 284,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 295,
            "end": 391,
            "id": {
              "type": "Identifier",
              "start": 302,
              "end": 309,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 310,
              "end": 391,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 320,
                  "end": 350,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 327,
                    "end": 350,
                    "id": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 338,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 339,
                      "end": 350,
                      "body": []
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 359,
                  "end": 385,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 366,
                    "end": 385,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 372,
                      "end": 373,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 374,
                      "end": 385,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 394,
      "end": 656,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 403,
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 404,
        "end": 656,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 410,
            "end": 521,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 417,
              "end": 521,
              "id": {
                "type": "Identifier",
                "start": 432,
                "end": 439,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 440,
                "end": 521,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 450,
                    "end": 480,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 457,
                      "end": 480,
                      "id": {
                        "type": "Identifier",
                        "start": 467,
                        "end": 468,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 469,
                        "end": 480,
                        "body": []
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 489,
                    "end": 515,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 496,
                      "end": 515,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 502,
                        "end": 503,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 504,
                        "end": 515,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": true,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 526,
            "end": 637,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 533,
              "end": 637,
              "id": {
                "type": "Identifier",
                "start": 548,
                "end": 555,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 556,
                "end": 637,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 566,
                    "end": 596,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 573,
                      "end": 596,
                      "id": {
                        "type": "Identifier",
                        "start": 583,
                        "end": 584,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 585,
                        "end": 596,
                        "body": []
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 605,
                    "end": 631,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 612,
                      "end": 631,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 618,
                        "end": 619,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 620,
                        "end": 631,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": true,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 643,
            "end": 654,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 647,
                "end": 653,
                "id": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 648,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 651,
                  "end": 653,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
