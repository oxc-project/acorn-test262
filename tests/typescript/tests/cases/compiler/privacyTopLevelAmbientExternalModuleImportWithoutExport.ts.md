__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31,
    "range": [
      26,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 32,
    "end": 40,
    "range": [
      32,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 47,
    "end": 50,
    "range": [
      47,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 13,
    "end": 21,
    "range": [
      13,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 28,
    "end": 31,
    "range": [
      28,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 77,
    "end": 84,
    "range": [
      77,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "String",
    "value": "'m'",
    "start": 92,
    "end": 95,
    "range": [
      92,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108,
    "range": [
      102,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 115,
    "end": 124,
    "range": [
      115,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 135,
    "end": 138,
    "range": [
      135,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "String",
    "value": "'m2'",
    "start": 15,
    "end": 19,
    "range": [
      15,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 39,
    "end": 48,
    "range": [
      39,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 59,
    "end": 63,
    "range": [
      59,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 229,
    "end": 235,
    "range": [
      229,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 236,
    "end": 257,
    "range": [
      236,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 260,
    "end": 267,
    "range": [
      260,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 268,
    "end": 271,
    "range": [
      268,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 281,
    "end": 302,
    "range": [
      281,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 305,
    "end": 312,
    "range": [
      305,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "String",
    "value": "\"m2\"",
    "start": 313,
    "end": 317,
    "range": [
      313,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 320,
    "end": 326,
    "range": [
      320,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 327,
    "end": 347,
    "range": [
      327,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 350,
    "end": 357,
    "range": [
      350,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "String",
    "value": "\"./privacyTopLevelAmbientExternalModuleImportWithoutExport_require\"",
    "start": 358,
    "end": 425,
    "range": [
      358,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 428,
    "end": 434,
    "range": [
      428,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 435,
    "end": 455,
    "range": [
      435,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 458,
    "end": 465,
    "range": [
      458,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "String",
    "value": "\"./privacyTopLevelAmbientExternalModuleImportWithoutExport_require1\"",
    "start": 466,
    "end": 534,
    "range": [
      466,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 572,
    "end": 575,
    "range": [
      572,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_private",
    "start": 576,
    "end": 608,
    "range": [
      576,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 611,
    "end": 614,
    "range": [
      611,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 615,
    "end": 636,
    "range": [
      615,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 637,
    "end": 646,
    "range": [
      637,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 650,
    "end": 656,
    "range": [
      650,
      656
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 657,
    "end": 660,
    "range": [
      657,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_private",
    "start": 661,
    "end": 692,
    "range": [
      661,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 695,
    "end": 698,
    "range": [
      695,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 699,
    "end": 720,
    "range": [
      699,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 721,
    "end": 730,
    "range": [
      721,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 734,
    "end": 737,
    "range": [
      734,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_private",
    "start": 738,
    "end": 770,
    "range": [
      738,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 773,
    "end": 776,
    "range": [
      773,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 777,
    "end": 798,
    "range": [
      777,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 799,
    "end": 808,
    "range": [
      799,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 812,
    "end": 818,
    "range": [
      812,
      818
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 819,
    "end": 822,
    "range": [
      819,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_private",
    "start": 823,
    "end": 854,
    "range": [
      823,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 861,
    "end": 882,
    "range": [
      861,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 883,
    "end": 892,
    "range": [
      883,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 896,
    "end": 899,
    "range": [
      896,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_public",
    "start": 900,
    "end": 931,
    "range": [
      900,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 934,
    "end": 937,
    "range": [
      934,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 938,
    "end": 958,
    "range": [
      938,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 959,
    "end": 967,
    "range": [
      959,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 971,
    "end": 977,
    "range": [
      971,
      977
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 978,
    "end": 981,
    "range": [
      978,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_public",
    "start": 982,
    "end": 1012,
    "range": [
      982,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1015,
    "end": 1018,
    "range": [
      1015,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 1019,
    "end": 1039,
    "range": [
      1019,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 1040,
    "end": 1048,
    "range": [
      1040,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1052,
    "end": 1055,
    "range": [
      1052,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_public",
    "start": 1056,
    "end": 1087,
    "range": [
      1056,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1090,
    "end": 1093,
    "range": [
      1090,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 1094,
    "end": 1114,
    "range": [
      1094,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 1115,
    "end": 1123,
    "range": [
      1115,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1127,
    "end": 1133,
    "range": [
      1127,
      1133
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1134,
    "end": 1137,
    "range": [
      1134,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_public",
    "start": 1138,
    "end": 1168,
    "range": [
      1138,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1171,
    "end": 1174,
    "range": [
      1171,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 1175,
    "end": 1195,
    "range": [
      1175,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 1196,
    "end": 1204,
    "range": [
      1196,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  }
]
```
