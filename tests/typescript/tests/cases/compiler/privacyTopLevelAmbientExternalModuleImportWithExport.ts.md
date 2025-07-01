__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 40
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 50
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 52,
                  "end": 58
                },
                "start": 50,
                "end": 58
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
              "start": 47,
              "end": 59
            }
          ],
          "start": 41,
          "end": 61
        },
        "abstract": false,
        "declare": false,
        "start": 26,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 62
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 21
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 31
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                },
                "start": 31,
                "end": 39
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
              "start": 28,
              "end": 40
            }
          ],
          "start": 22,
          "end": 42
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m",
        "raw": "'m'",
        "start": 92,
        "end": 95
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 124
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
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 138
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 140,
                        "end": 146
                      },
                      "start": 138,
                      "end": 146
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
                    "start": 135,
                    "end": 147
                  }
                ],
                "start": 125,
                "end": 153
              },
              "abstract": false,
              "declare": false,
              "start": 109,
              "end": 153
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 153
          }
        ],
        "start": 96,
        "end": 155
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 77,
      "end": 155
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 77,
  "end": 157
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m2",
        "raw": "'m2'",
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 48
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
                      "name": "bing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 63
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 65,
                        "end": 71
                      },
                      "start": 63,
                      "end": 71
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
                    "start": 59,
                    "end": 72
                  }
                ],
                "start": 49,
                "end": 78
              },
              "abstract": false,
              "declare": false,
              "start": 33,
              "end": 78
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 78
          }
        ],
        "start": 20,
        "end": 80
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mi_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 257
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "./privacyTopLevelAmbientExternalModuleImportWithExport_require",
            "raw": "\"./privacyTopLevelAmbientExternalModuleImportWithExport_require\"",
            "start": 268,
            "end": 332
          },
          "start": 260,
          "end": 333
        },
        "importKind": "value",
        "start": 230,
        "end": 334
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 334
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mu_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 369
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "./privacyTopLevelAmbientExternalModuleImportWithExport_require1",
            "raw": "\"./privacyTopLevelAmbientExternalModuleImportWithExport_require1\"",
            "start": 380,
            "end": 445
          },
          "start": 372,
          "end": 446
        },
        "importKind": "value",
        "start": 342,
        "end": 447
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 335,
      "end": 447
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mi_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 481
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "m",
            "raw": "\"m\"",
            "start": 492,
            "end": 495
          },
          "start": 484,
          "end": 496
        },
        "importKind": "value",
        "start": 455,
        "end": 497
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 448,
      "end": 497
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mu_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 531
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "m2",
            "raw": "\"m2\"",
            "start": 542,
            "end": 546
          },
          "start": 534,
          "end": 547
        },
        "importKind": "value",
        "start": 505,
        "end": 548
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 498,
      "end": 548
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
            "name": "privateUse_im_public_mi_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 619
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 646
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 655
              },
              "optional": false,
              "computed": false,
              "start": 626,
              "end": 655
            },
            "typeArguments": null,
            "arguments": [],
            "start": 622,
            "end": 657
          },
          "definite": false,
          "start": 588,
          "end": 657
        }
      ],
      "declare": false,
      "start": 584,
      "end": 658
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicUse_im_public_mi_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 700
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 727
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 736
                },
                "optional": false,
                "computed": false,
                "start": 707,
                "end": 736
              },
              "typeArguments": null,
              "arguments": [],
              "start": 703,
              "end": 738
            },
            "definite": false,
            "start": 670,
            "end": 738
          }
        ],
        "declare": false,
        "start": 666,
        "end": 739
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 659,
      "end": 739
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
            "name": "privateUse_im_public_mu_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 744,
            "end": 775
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 802
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 803,
                "end": 811
              },
              "optional": false,
              "computed": false,
              "start": 782,
              "end": 811
            },
            "typeArguments": null,
            "arguments": [],
            "start": 778,
            "end": 813
          },
          "definite": false,
          "start": 744,
          "end": 813
        }
      ],
      "declare": false,
      "start": 740,
      "end": 814
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicUse_im_public_mu_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 856
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 883
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 892
                },
                "optional": false,
                "computed": false,
                "start": 863,
                "end": 892
              },
              "typeArguments": null,
              "arguments": [],
              "start": 859,
              "end": 894
            },
            "definite": false,
            "start": 826,
            "end": 894
          }
        ],
        "declare": false,
        "start": 822,
        "end": 895
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 815,
      "end": 895
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
            "name": "privateUse_im_public_mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 900,
            "end": 930
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 956
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 957,
                "end": 966
              },
              "optional": false,
              "computed": false,
              "start": 937,
              "end": 966
            },
            "typeArguments": null,
            "arguments": [],
            "start": 933,
            "end": 968
          },
          "definite": false,
          "start": 900,
          "end": 968
        }
      ],
      "declare": false,
      "start": 896,
      "end": 969
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicUse_im_public_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 1010
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1017,
                  "end": 1036
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1046
                },
                "optional": false,
                "computed": false,
                "start": 1017,
                "end": 1046
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1013,
              "end": 1048
            },
            "definite": false,
            "start": 981,
            "end": 1048
          }
        ],
        "declare": false,
        "start": 977,
        "end": 1049
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 970,
      "end": 1049
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
            "name": "privateUse_im_public_mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 1054,
            "end": 1084
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1091,
                "end": 1110
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1120
              },
              "optional": false,
              "computed": false,
              "start": 1091,
              "end": 1120
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1087,
            "end": 1122
          },
          "definite": false,
          "start": 1054,
          "end": 1122
        }
      ],
      "declare": false,
      "start": 1050,
      "end": 1123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicUse_im_public_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1164
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1190
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1191,
                  "end": 1200
                },
                "optional": false,
                "computed": false,
                "start": 1171,
                "end": 1200
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1167,
              "end": 1202
            },
            "definite": false,
            "start": 1135,
            "end": 1202
          }
        ],
        "declare": false,
        "start": 1131,
        "end": 1203
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1124,
      "end": 1203
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 223,
  "end": 1203
}
```
