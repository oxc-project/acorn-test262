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
                    "end": 146
                  }
                ],
                "start": 125,
                "end": 152
              },
              "abstract": false,
              "declare": false,
              "start": 109,
              "end": 152
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 152
          }
        ],
        "start": 96,
        "end": 157
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 77,
      "end": 157
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 77,
  "end": 158
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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mi_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 257
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "m",
          "raw": "\"m\"",
          "start": 268,
          "end": 271
        },
        "start": 260,
        "end": 272
      },
      "importKind": "value",
      "start": 229,
      "end": 273
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mu_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 302
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "m2",
          "raw": "\"m2\"",
          "start": 313,
          "end": 317
        },
        "start": 305,
        "end": 318
      },
      "importKind": "value",
      "start": 274,
      "end": 319
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mi_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 347
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./privacyTopLevelAmbientExternalModuleImportWithoutExport_require",
          "raw": "\"./privacyTopLevelAmbientExternalModuleImportWithoutExport_require\"",
          "start": 358,
          "end": 425
        },
        "start": 350,
        "end": 426
      },
      "importKind": "value",
      "start": 320,
      "end": 427
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mu_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 435,
        "end": 455
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./privacyTopLevelAmbientExternalModuleImportWithoutExport_require1",
          "raw": "\"./privacyTopLevelAmbientExternalModuleImportWithoutExport_require1\"",
          "start": 466,
          "end": 534
        },
        "start": 458,
        "end": 535
      },
      "importKind": "value",
      "start": 428,
      "end": 536
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
            "name": "privateUse_im_private_mi_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 608
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 636
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 646
              },
              "optional": false,
              "computed": false,
              "start": 615,
              "end": 646
            },
            "typeArguments": null,
            "arguments": [],
            "start": 611,
            "end": 648
          },
          "definite": false,
          "start": 576,
          "end": 648
        }
      ],
      "declare": false,
      "start": 572,
      "end": 649
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
              "name": "publicUse_im_private_mi_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 661,
              "end": 692
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 720
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 721,
                  "end": 730
                },
                "optional": false,
                "computed": false,
                "start": 699,
                "end": 730
              },
              "typeArguments": null,
              "arguments": [],
              "start": 695,
              "end": 732
            },
            "definite": false,
            "start": 661,
            "end": 732
          }
        ],
        "declare": false,
        "start": 657,
        "end": 733
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 650,
      "end": 733
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
            "name": "privateUse_im_private_mu_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 738,
            "end": 770
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 777,
                "end": 798
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 808
              },
              "optional": false,
              "computed": false,
              "start": 777,
              "end": 808
            },
            "typeArguments": null,
            "arguments": [],
            "start": 773,
            "end": 810
          },
          "definite": false,
          "start": 738,
          "end": 810
        }
      ],
      "declare": false,
      "start": 734,
      "end": 811
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
              "name": "publicUse_im_private_mu_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 854
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 882
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 892
                },
                "optional": false,
                "computed": false,
                "start": 861,
                "end": 892
              },
              "typeArguments": null,
              "arguments": [],
              "start": 857,
              "end": 894
            },
            "definite": false,
            "start": 823,
            "end": 894
          }
        ],
        "declare": false,
        "start": 819,
        "end": 895
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 812,
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
            "name": "privateUse_im_private_mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 900,
            "end": 931
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 938,
                "end": 958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 967
              },
              "optional": false,
              "computed": false,
              "start": 938,
              "end": 967
            },
            "typeArguments": null,
            "arguments": [],
            "start": 934,
            "end": 969
          },
          "definite": false,
          "start": 900,
          "end": 969
        }
      ],
      "declare": false,
      "start": 896,
      "end": 970
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
              "name": "publicUse_im_private_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 982,
              "end": 1012
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1019,
                  "end": 1039
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1040,
                  "end": 1048
                },
                "optional": false,
                "computed": false,
                "start": 1019,
                "end": 1048
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1015,
              "end": 1050
            },
            "definite": false,
            "start": 982,
            "end": 1050
          }
        ],
        "declare": false,
        "start": 978,
        "end": 1051
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 971,
      "end": 1051
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
            "name": "privateUse_im_private_mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 1056,
            "end": 1087
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1114
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1115,
                "end": 1123
              },
              "optional": false,
              "computed": false,
              "start": 1094,
              "end": 1123
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1090,
            "end": 1125
          },
          "definite": false,
          "start": 1056,
          "end": 1125
        }
      ],
      "declare": false,
      "start": 1052,
      "end": 1126
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
              "name": "publicUse_im_private_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1168
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1175,
                  "end": 1195
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1204
                },
                "optional": false,
                "computed": false,
                "start": 1175,
                "end": 1204
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1171,
              "end": 1206
            },
            "definite": false,
            "start": 1138,
            "end": 1206
          }
        ],
        "declare": false,
        "start": 1134,
        "end": 1207
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1127,
      "end": 1207
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 229,
  "end": 1207
}
```
