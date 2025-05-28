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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 32,
          "end": 40,
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 41,
          "end": 61,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 47,
              "end": 59,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 50,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 22,
          "end": 42,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 28,
              "end": 40,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 31,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 157,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 77,
      "end": 155,
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
        "end": 155,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 102,
            "end": 153,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 109,
              "end": 153,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 115,
                "end": 124,
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 125,
                "end": 153,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 135,
                    "end": 147,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 138,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 49,
                "end": 78,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 59,
                    "end": 72,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "decorators": [],
                      "name": "bing",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
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
  "start": 223,
  "end": 1203,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 223,
      "end": 334,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 230,
        "end": 334,
        "id": {
          "type": "Identifier",
          "start": 237,
          "end": 257,
          "decorators": [],
          "name": "im_public_mi_private",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 260,
          "end": 333,
          "expression": {
            "type": "Literal",
            "start": 268,
            "end": 332,
            "value": "./privacyTopLevelAmbientExternalModuleImportWithExport_require",
            "raw": "\"./privacyTopLevelAmbientExternalModuleImportWithExport_require\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 335,
      "end": 447,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 342,
        "end": 447,
        "id": {
          "type": "Identifier",
          "start": 349,
          "end": 369,
          "decorators": [],
          "name": "im_public_mu_private",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 372,
          "end": 446,
          "expression": {
            "type": "Literal",
            "start": 380,
            "end": 445,
            "value": "./privacyTopLevelAmbientExternalModuleImportWithExport_require1",
            "raw": "\"./privacyTopLevelAmbientExternalModuleImportWithExport_require1\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 448,
      "end": 497,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 455,
        "end": 497,
        "id": {
          "type": "Identifier",
          "start": 462,
          "end": 481,
          "decorators": [],
          "name": "im_public_mi_public",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 484,
          "end": 496,
          "expression": {
            "type": "Literal",
            "start": 492,
            "end": 495,
            "value": "m",
            "raw": "\"m\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 498,
      "end": 548,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 505,
        "end": 548,
        "id": {
          "type": "Identifier",
          "start": 512,
          "end": 531,
          "decorators": [],
          "name": "im_public_mu_public",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 534,
          "end": 547,
          "expression": {
            "type": "Literal",
            "start": 542,
            "end": 546,
            "value": "m2",
            "raw": "\"m2\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 658,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 657,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 619,
            "decorators": [],
            "name": "privateUse_im_public_mi_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 622,
            "end": 657,
            "callee": {
              "type": "MemberExpression",
              "start": 626,
              "end": 655,
              "object": {
                "type": "Identifier",
                "start": 626,
                "end": 646,
                "decorators": [],
                "name": "im_public_mi_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 647,
                "end": 655,
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 659,
      "end": 739,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 666,
        "end": 739,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 670,
            "end": 738,
            "id": {
              "type": "Identifier",
              "start": 670,
              "end": 700,
              "decorators": [],
              "name": "publicUse_im_public_mi_private",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 703,
              "end": 738,
              "callee": {
                "type": "MemberExpression",
                "start": 707,
                "end": 736,
                "object": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 727,
                  "decorators": [],
                  "name": "im_public_mi_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 736,
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 740,
      "end": 814,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 744,
          "end": 813,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 775,
            "decorators": [],
            "name": "privateUse_im_public_mu_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 778,
            "end": 813,
            "callee": {
              "type": "MemberExpression",
              "start": 782,
              "end": 811,
              "object": {
                "type": "Identifier",
                "start": 782,
                "end": 802,
                "decorators": [],
                "name": "im_public_mu_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 803,
                "end": 811,
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 815,
      "end": 895,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 822,
        "end": 895,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 826,
            "end": 894,
            "id": {
              "type": "Identifier",
              "start": 826,
              "end": 856,
              "decorators": [],
              "name": "publicUse_im_public_mu_private",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 859,
              "end": 894,
              "callee": {
                "type": "MemberExpression",
                "start": 863,
                "end": 892,
                "object": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 883,
                  "decorators": [],
                  "name": "im_public_mu_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 892,
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 896,
      "end": 969,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 900,
          "end": 968,
          "id": {
            "type": "Identifier",
            "start": 900,
            "end": 930,
            "decorators": [],
            "name": "privateUse_im_public_mi_public",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 933,
            "end": 968,
            "callee": {
              "type": "MemberExpression",
              "start": 937,
              "end": 966,
              "object": {
                "type": "Identifier",
                "start": 937,
                "end": 956,
                "decorators": [],
                "name": "im_public_mi_public",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 957,
                "end": 966,
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 970,
      "end": 1049,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 977,
        "end": 1049,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 981,
            "end": 1048,
            "id": {
              "type": "Identifier",
              "start": 981,
              "end": 1010,
              "decorators": [],
              "name": "publicUse_im_public_mi_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 1013,
              "end": 1048,
              "callee": {
                "type": "MemberExpression",
                "start": 1017,
                "end": 1046,
                "object": {
                  "type": "Identifier",
                  "start": 1017,
                  "end": 1036,
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1037,
                  "end": 1046,
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1050,
      "end": 1123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1054,
          "end": 1122,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1084,
            "decorators": [],
            "name": "privateUse_im_public_mi_public",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1087,
            "end": 1122,
            "callee": {
              "type": "MemberExpression",
              "start": 1091,
              "end": 1120,
              "object": {
                "type": "Identifier",
                "start": 1091,
                "end": 1110,
                "decorators": [],
                "name": "im_public_mi_public",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1111,
                "end": 1120,
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1124,
      "end": 1203,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1131,
        "end": 1203,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1135,
            "end": 1202,
            "id": {
              "type": "Identifier",
              "start": 1135,
              "end": 1164,
              "decorators": [],
              "name": "publicUse_im_public_mi_public",
              "optional": false,
              "typeAnnotation": null
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
                  "end": 1190,
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1200,
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
