__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 62,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 61,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 26,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 32,
          "end": 40,
          "name": "c_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 41,
          "end": 61,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 47,
              "end": 59,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 50,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 52,
                  "end": 58
                }
              },
              "accessibility": null
            }
          ]
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
  "end": 43,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 42,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "name": "c_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 22,
          "end": 42,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 28,
              "end": 40,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 31,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                }
              },
              "accessibility": null
            }
          ]
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 158,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 77,
      "end": 157,
      "id": {
        "type": "Literal",
        "start": 92,
        "end": 95,
        "value": "m",
        "raw": "'m'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 96,
        "end": 157,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 102,
            "end": 152,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 109,
              "end": 152,
              "id": {
                "type": "Identifier",
                "start": 115,
                "end": 124,
                "name": "c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 125,
                "end": 152,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 135,
                    "end": 146,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 138,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 146,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 140,
                        "end": 146
                      }
                    },
                    "accessibility": null
                  }
                ]
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
      "declare": true,
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
  "end": 81,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "m2",
        "raw": "'m2'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 80,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 78,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 33,
              "end": 78,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "name": "c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 49,
                "end": 78,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 59,
                    "end": 72,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "name": "bing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 63,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 65,
                        "end": 71
                      }
                    },
                    "accessibility": null
                  }
                ]
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
      "declare": true,
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
  "start": 229,
  "end": 1204,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 229,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 257,
        "name": "im_private_mi_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 260,
        "end": 272,
        "expression": {
          "type": "Literal",
          "start": 268,
          "end": 271,
          "value": "m",
          "raw": "\"m\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 274,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 302,
        "name": "im_private_mu_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 305,
        "end": 318,
        "expression": {
          "type": "Literal",
          "start": 313,
          "end": 317,
          "value": "m2",
          "raw": "\"m2\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 320,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 347,
        "name": "im_private_mi_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 350,
        "end": 424,
        "expression": {
          "type": "Literal",
          "start": 358,
          "end": 423,
          "value": "privacyTopLevelAmbientExternalModuleImportWithoutExport_require",
          "raw": "\"privacyTopLevelAmbientExternalModuleImportWithoutExport_require\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 426,
      "end": 532,
      "id": {
        "type": "Identifier",
        "start": 433,
        "end": 453,
        "name": "im_private_mu_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 456,
        "end": 531,
        "expression": {
          "type": "Literal",
          "start": 464,
          "end": 530,
          "value": "privacyTopLevelAmbientExternalModuleImportWithoutExport_require1",
          "raw": "\"privacyTopLevelAmbientExternalModuleImportWithoutExport_require1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 644,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 604,
            "name": "privateUse_im_private_mi_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 607,
            "end": 644,
            "callee": {
              "type": "MemberExpression",
              "start": 611,
              "end": 642,
              "object": {
                "type": "Identifier",
                "start": 611,
                "end": 632,
                "name": "im_private_mi_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 633,
                "end": 642,
                "name": "c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 646,
      "end": 729,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 653,
        "end": 729,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 657,
            "end": 728,
            "id": {
              "type": "Identifier",
              "start": 657,
              "end": 688,
              "name": "publicUse_im_private_mi_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 691,
              "end": 728,
              "callee": {
                "type": "MemberExpression",
                "start": 695,
                "end": 726,
                "object": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 716,
                  "name": "im_private_mi_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 726,
                  "name": "c_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 730,
      "end": 807,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 806,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 766,
            "name": "privateUse_im_private_mu_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 769,
            "end": 806,
            "callee": {
              "type": "MemberExpression",
              "start": 773,
              "end": 804,
              "object": {
                "type": "Identifier",
                "start": 773,
                "end": 794,
                "name": "im_private_mu_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 795,
                "end": 804,
                "name": "c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 808,
      "end": 891,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 815,
        "end": 891,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 819,
            "end": 890,
            "id": {
              "type": "Identifier",
              "start": 819,
              "end": 850,
              "name": "publicUse_im_private_mu_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 853,
              "end": 890,
              "callee": {
                "type": "MemberExpression",
                "start": 857,
                "end": 888,
                "object": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 878,
                  "name": "im_private_mu_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 888,
                  "name": "c_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 892,
      "end": 966,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 896,
          "end": 965,
          "id": {
            "type": "Identifier",
            "start": 896,
            "end": 927,
            "name": "privateUse_im_private_mi_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 930,
            "end": 965,
            "callee": {
              "type": "MemberExpression",
              "start": 934,
              "end": 963,
              "object": {
                "type": "Identifier",
                "start": 934,
                "end": 954,
                "name": "im_private_mi_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 955,
                "end": 963,
                "name": "c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 967,
      "end": 1047,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 974,
        "end": 1047,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 978,
            "end": 1046,
            "id": {
              "type": "Identifier",
              "start": 978,
              "end": 1008,
              "name": "publicUse_im_private_mi_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 1011,
              "end": 1046,
              "callee": {
                "type": "MemberExpression",
                "start": 1015,
                "end": 1044,
                "object": {
                  "type": "Identifier",
                  "start": 1015,
                  "end": 1035,
                  "name": "im_private_mi_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1036,
                  "end": 1044,
                  "name": "c_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1048,
      "end": 1122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1052,
          "end": 1121,
          "id": {
            "type": "Identifier",
            "start": 1052,
            "end": 1083,
            "name": "privateUse_im_private_mi_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1086,
            "end": 1121,
            "callee": {
              "type": "MemberExpression",
              "start": 1090,
              "end": 1119,
              "object": {
                "type": "Identifier",
                "start": 1090,
                "end": 1110,
                "name": "im_private_mi_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1111,
                "end": 1119,
                "name": "c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1123,
      "end": 1203,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1130,
        "end": 1203,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1134,
            "end": 1202,
            "id": {
              "type": "Identifier",
              "start": 1134,
              "end": 1164,
              "name": "publicUse_im_private_mi_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 1167,
              "end": 1202,
              "callee": {
                "type": "MemberExpression",
                "start": 1171,
                "end": 1200,
                "object": {
                  "type": "Identifier",
                  "start": 1171,
                  "end": 1191,
                  "name": "im_private_mi_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1192,
                  "end": 1200,
                  "name": "c_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
