__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 12,
        "end": 15
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 28
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 30
        },
        "start": 27,
        "end": 30
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 31,
        "end": 34
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 17,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "start": 46,
          "end": 49
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "start": 46,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ma",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 67
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "importKind": "value",
            "start": 58,
            "end": 72
          }
        ],
        "start": 52,
        "end": 74
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 36,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mImport",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 93
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "importKind": "value",
            "start": 100,
            "end": 113
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 130
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "start": 129,
              "end": 132
            },
            "importKind": "value",
            "start": 118,
            "end": 133
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 147
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "importKind": "value",
            "start": 138,
            "end": 152
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 166
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "start": 169,
              "end": 172
            },
            "importKind": "value",
            "start": 157,
            "end": 173
          }
        ],
        "start": 94,
        "end": 175
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 76,
      "end": 175
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m0",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 189
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 207
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 210,
              "end": 217
            },
            "expression": false,
            "start": 196,
            "end": 217
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 234
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  "start": 236,
                  "end": 244
                },
                "start": 235,
                "end": 244
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 223,
            "end": 246
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 262
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 266,
                    "end": 272
                  },
                  "start": 264,
                  "end": 272
                },
                "start": 263,
                "end": 272
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 251,
            "end": 274
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 290
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 295,
                    "end": 298
                  },
                  "start": 293,
                  "end": 298
                },
                "start": 291,
                "end": 298
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 300,
              "end": 307
            },
            "expression": false,
            "start": 279,
            "end": 307
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 321
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 340
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 347,
                          "end": 353
                        },
                        "start": 345,
                        "end": 353
                      },
                      "start": 343,
                      "end": 353
                    },
                    "start": 341,
                    "end": 353
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 332,
                  "end": 354
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 372
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 378,
                          "end": 384
                        },
                        "start": 376,
                        "end": 384
                      },
                      "start": 374,
                      "end": 384
                    },
                    "start": 372,
                    "end": 384
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 363,
                  "end": 385
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 411
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 394,
                  "end": 412
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 437
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 421,
                  "end": 438
                }
              ],
              "start": 322,
              "end": 444
            },
            "abstract": false,
            "declare": false,
            "start": 313,
            "end": 444
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 462
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 484
                      },
                      "typeArguments": null,
                      "start": 478,
                      "end": 484
                    },
                    "start": 476,
                    "end": 484
                  },
                  "start": 473,
                  "end": 485
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 498,
                          "end": 504
                        },
                        "start": 496,
                        "end": 504
                      },
                      "start": 495,
                      "end": 504
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 507,
                        "end": 509
                      },
                      "typeArguments": null,
                      "start": 507,
                      "end": 509
                    },
                    "start": 505,
                    "end": 509
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 494,
                  "end": 510
                }
              ],
              "start": 463,
              "end": 516
            },
            "declare": false,
            "start": 450,
            "end": 516
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 531
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 535
            },
            "importKind": "value",
            "start": 522,
            "end": 536
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 550
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "importKind": "value",
            "start": 541,
            "end": 555
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 569
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 573
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
              },
              "start": 572,
              "end": 575
            },
            "importKind": "value",
            "start": 560,
            "end": 576
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 590
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 594
            },
            "importKind": "value",
            "start": 581,
            "end": 595
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 609
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 613
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 615
              },
              "start": 612,
              "end": 615
            },
            "importKind": "value",
            "start": 600,
            "end": 616
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 630
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 634
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 636
                },
                "start": 633,
                "end": 636
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 638
              },
              "start": 633,
              "end": 638
            },
            "importKind": "value",
            "start": 621,
            "end": 639
          }
        ],
        "start": 190,
        "end": 641
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 177,
      "end": 641
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 653,
        "end": 655
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 678,
                "end": 680
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 683,
                "end": 690
              },
              "expression": false,
              "start": 669,
              "end": 690
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 662,
            "end": 690
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 714
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 718,
                      "end": 724
                    },
                    "start": 716,
                    "end": 724
                  },
                  "start": 715,
                  "end": 724
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 703,
              "end": 726
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 696,
            "end": 726
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 749
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 753,
                      "end": 759
                    },
                    "start": 751,
                    "end": 759
                  },
                  "start": 750,
                  "end": 759
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 738,
              "end": 761
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 731,
            "end": 761
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 784
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 789,
                      "end": 792
                    },
                    "start": 787,
                    "end": 792
                  },
                  "start": 785,
                  "end": 792
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 794,
                "end": 801
              },
              "expression": false,
              "start": 773,
              "end": 801
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 766,
            "end": 801
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 822
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 840,
                      "end": 841
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 848,
                            "end": 854
                          },
                          "start": 846,
                          "end": 854
                        },
                        "start": 843,
                        "end": 854
                      },
                      "start": 841,
                      "end": 854
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 833,
                    "end": 855
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 872,
                      "end": 873
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 880,
                            "end": 886
                          },
                          "start": 878,
                          "end": 886
                        },
                        "start": 875,
                        "end": 886
                      },
                      "start": 873,
                      "end": 886
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 864,
                    "end": 887
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 911,
                      "end": 913
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 896,
                    "end": 914
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 937,
                      "end": 939
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 923,
                    "end": 940
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 957,
                      "end": 958
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "Hello",
                              "raw": "\"Hello\"",
                              "start": 982,
                              "end": 989
                            },
                            "start": 975,
                            "end": 990
                          }
                        ],
                        "start": 961,
                        "end": 1000
                      },
                      "expression": false,
                      "start": 958,
                      "end": 1000
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 950,
                    "end": 1000
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1017,
                      "end": 1018
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1022,
                              "end": 1023
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1025,
                                "end": 1031
                              },
                              "start": 1023,
                              "end": 1031
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1022,
                            "end": 1032
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1033,
                              "end": 1034
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1036,
                                "end": 1042
                              },
                              "start": 1034,
                              "end": 1042
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1033,
                            "end": 1043
                          }
                        ],
                        "start": 1020,
                        "end": 1045
                      },
                      "start": 1018,
                      "end": 1045
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1010,
                    "end": 1046
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1055,
                      "end": 1066
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1075,
                            "end": 1076
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1068,
                          "end": 1076
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1089,
                                "end": 1095
                              },
                              "start": 1087,
                              "end": 1095
                            },
                            "start": 1085,
                            "end": 1095
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1078,
                          "end": 1095
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1105,
                            "end": 1107
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1097,
                          "end": 1107
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n4",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1121,
                                "end": 1127
                              },
                              "start": 1119,
                              "end": 1127
                            },
                            "start": 1117,
                            "end": 1127
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1109,
                          "end": 1127
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1129,
                        "end": 1140
                      },
                      "expression": false,
                      "start": 1067,
                      "end": 1140
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1055,
                    "end": 1140
                  }
                ],
                "start": 823,
                "end": 1146
              },
              "abstract": false,
              "declare": false,
              "start": 814,
              "end": 1146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 807,
            "end": 1146
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1169,
                "end": 1171
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1187,
                          "end": 1193
                        },
                        "typeArguments": null,
                        "start": 1187,
                        "end": 1193
                      },
                      "start": 1185,
                      "end": 1193
                    },
                    "start": 1182,
                    "end": 1194
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1207,
                            "end": 1213
                          },
                          "start": 1205,
                          "end": 1213
                        },
                        "start": 1204,
                        "end": 1213
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1216,
                          "end": 1218
                        },
                        "typeArguments": null,
                        "start": 1216,
                        "end": 1218
                      },
                      "start": 1214,
                      "end": 1218
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1203,
                    "end": 1219
                  }
                ],
                "start": 1172,
                "end": 1225
              },
              "declare": false,
              "start": 1159,
              "end": 1225
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1152,
            "end": 1225
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1240
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1244
            },
            "importKind": "value",
            "start": 1231,
            "end": 1245
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1259
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1262,
              "end": 1263
            },
            "importKind": "value",
            "start": 1250,
            "end": 1264
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1278
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1282
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1283,
                "end": 1284
              },
              "start": 1281,
              "end": 1284
            },
            "importKind": "value",
            "start": 1269,
            "end": 1285
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1297,
              "end": 1299
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1303
            },
            "importKind": "value",
            "start": 1290,
            "end": 1304
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1318
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1322
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1323,
                "end": 1324
              },
              "start": 1321,
              "end": 1324
            },
            "importKind": "value",
            "start": 1309,
            "end": 1325
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1339
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1342,
                  "end": 1343
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1345
                },
                "start": 1342,
                "end": 1345
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1347
              },
              "start": 1342,
              "end": 1347
            },
            "importKind": "value",
            "start": 1330,
            "end": 1348
          }
        ],
        "start": 656,
        "end": 1350
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 643,
      "end": 1350
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1362,
        "end": 1363
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1389
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1404,
                          "end": 1405
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1408,
                          "end": 1410
                        },
                        "definite": false,
                        "start": 1404,
                        "end": 1410
                      }
                    ],
                    "declare": false,
                    "start": 1400,
                    "end": 1411
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1434,
                                "end": 1440
                              },
                              "start": 1432,
                              "end": 1440
                            },
                            "start": 1431,
                            "end": 1440
                          },
                          "init": null,
                          "definite": false,
                          "start": 1431,
                          "end": 1440
                        }
                      ],
                      "declare": false,
                      "start": 1427,
                      "end": 1441
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1420,
                    "end": 1441
                  }
                ],
                "start": 1390,
                "end": 1447
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1377,
              "end": 1447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1370,
            "end": 1447
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1470,
                "end": 1472
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1497,
                                "end": 1503
                              },
                              "start": 1495,
                              "end": 1503
                            },
                            "start": 1494,
                            "end": 1503
                          },
                          "init": null,
                          "definite": false,
                          "start": 1494,
                          "end": 1503
                        }
                      ],
                      "declare": false,
                      "start": 1490,
                      "end": 1504
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1483,
                    "end": 1504
                  }
                ],
                "start": 1473,
                "end": 1510
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1460,
              "end": 1510
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1453,
            "end": 1510
          }
        ],
        "start": 1364,
        "end": 1512
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1352,
      "end": 1512
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1524,
        "end": 1525
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m25",
                "optional": false,
                "typeAnnotation": null,
                "start": 1550,
                "end": 1553
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1581,
                        "end": 1583
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
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
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1612,
                                        "end": 1618
                                      },
                                      "start": 1610,
                                      "end": 1618
                                    },
                                    "start": 1609,
                                    "end": 1618
                                  },
                                  "init": null,
                                  "definite": false,
                                  "start": 1609,
                                  "end": 1618
                                }
                              ],
                              "declare": false,
                              "start": 1605,
                              "end": 1619
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1598,
                            "end": 1619
                          }
                        ],
                        "start": 1584,
                        "end": 1629
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1571,
                      "end": 1629
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1564,
                    "end": 1629
                  }
                ],
                "start": 1554,
                "end": 1635
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1540,
              "end": 1635
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1533,
            "end": 1635
          }
        ],
        "start": 1526,
        "end": 1637
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1514,
      "end": 1637
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1649,
        "end": 1652
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1676,
                "end": 1678
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1706,
                        "end": 1708
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSModuleDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1740,
                                "end": 1742
                              },
                              "body": {
                                "type": "TSModuleBlock",
                                "body": [
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
                                            "name": "c",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1775,
                                                "end": 1781
                                              },
                                              "start": 1773,
                                              "end": 1781
                                            },
                                            "start": 1772,
                                            "end": 1781
                                          },
                                          "init": null,
                                          "definite": false,
                                          "start": 1772,
                                          "end": 1781
                                        }
                                      ],
                                      "declare": false,
                                      "start": 1768,
                                      "end": 1782
                                    },
                                    "specifiers": [],
                                    "source": null,
                                    "exportKind": "value",
                                    "attributes": [],
                                    "start": 1761,
                                    "end": 1782
                                  }
                                ],
                                "start": 1743,
                                "end": 1796
                              },
                              "kind": "namespace",
                              "declare": false,
                              "global": false,
                              "start": 1730,
                              "end": 1796
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1723,
                            "end": 1796
                          }
                        ],
                        "start": 1709,
                        "end": 1806
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1696,
                      "end": 1806
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1689,
                    "end": 1806
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1832,
                        "end": 1833
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 20,
                              "raw": "20",
                              "start": 1857,
                              "end": 1859
                            },
                            "start": 1850,
                            "end": 1860
                          }
                        ],
                        "start": 1836,
                        "end": 1870
                      },
                      "expression": false,
                      "start": 1823,
                      "end": 1870
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1816,
                    "end": 1870
                  }
                ],
                "start": 1679,
                "end": 1876
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1666,
              "end": 1876
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1659,
            "end": 1876
          }
        ],
        "start": 1653,
        "end": 1878
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1639,
      "end": 1878
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1898,
        "end": 1900
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1918,
                    "end": 1919
                  },
                  "init": null,
                  "definite": false,
                  "start": 1918,
                  "end": 1919
                }
              ],
              "declare": false,
              "start": 1914,
              "end": 1920
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1907,
            "end": 1920
          }
        ],
        "start": 1901,
        "end": 1922
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1880,
      "end": 1922
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1942,
        "end": 1944
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1962,
                    "end": 1963
                  },
                  "init": null,
                  "definite": false,
                  "start": 1962,
                  "end": 1963
                }
              ],
              "declare": false,
              "start": 1958,
              "end": 1964
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1951,
            "end": 1964
          }
        ],
        "start": 1945,
        "end": 1966
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1924,
      "end": 1966
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m43",
        "optional": false,
        "typeAnnotation": null,
        "start": 1986,
        "end": 1989
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2007,
                    "end": 2008
                  },
                  "init": null,
                  "definite": false,
                  "start": 2007,
                  "end": 2008
                }
              ],
              "declare": false,
              "start": 2003,
              "end": 2009
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1996,
            "end": 2009
          }
        ],
        "start": 1990,
        "end": 2011
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1968,
      "end": 2011
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m55",
        "optional": false,
        "typeAnnotation": null,
        "start": 2031,
        "end": 2034
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2052,
                    "end": 2053
                  },
                  "init": null,
                  "definite": false,
                  "start": 2052,
                  "end": 2053
                }
              ],
              "declare": false,
              "start": 2048,
              "end": 2054
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2041,
            "end": 2054
          }
        ],
        "start": 2035,
        "end": 2056
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2013,
      "end": 2056
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m3",
        "raw": "\"m3\"",
        "start": 2073,
        "end": 2077
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2098,
                        "end": 2104
                      },
                      "start": 2096,
                      "end": 2104
                    },
                    "start": 2095,
                    "end": 2104
                  },
                  "init": null,
                  "definite": false,
                  "start": 2095,
                  "end": 2104
                }
              ],
              "declare": false,
              "start": 2091,
              "end": 2105
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2084,
            "end": 2105
          }
        ],
        "start": 2078,
        "end": 2107
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 2058,
      "end": 2107
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exportTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2130
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
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2150,
                "end": 2159
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2178,
                      "end": 2180
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 30,
                              "raw": "30",
                              "start": 2204,
                              "end": 2206
                            },
                            "start": 2197,
                            "end": 2207
                          }
                        ],
                        "start": 2183,
                        "end": 2217
                      },
                      "expression": false,
                      "start": 2180,
                      "end": 2217
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2170,
                    "end": 2217
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2234,
                      "end": 2236
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 2260,
                              "end": 2268
                            },
                            "start": 2253,
                            "end": 2269
                          }
                        ],
                        "start": 2239,
                        "end": 2279
                      },
                      "expression": false,
                      "start": 2236,
                      "end": 2279
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2227,
                    "end": 2279
                  }
                ],
                "start": 2160,
                "end": 2285
              },
              "abstract": false,
              "declare": false,
              "start": 2144,
              "end": 2285
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2137,
            "end": 2285
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2296,
              "end": 2306
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2325,
                    "end": 2327
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 30,
                            "raw": "30",
                            "start": 2351,
                            "end": 2353
                          },
                          "start": 2344,
                          "end": 2354
                        }
                      ],
                      "start": 2330,
                      "end": 2364
                    },
                    "expression": false,
                    "start": 2327,
                    "end": 2364
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2317,
                  "end": 2364
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2381,
                    "end": 2383
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2407,
                            "end": 2415
                          },
                          "start": 2400,
                          "end": 2416
                        }
                      ],
                      "start": 2386,
                      "end": 2426
                    },
                    "expression": false,
                    "start": 2383,
                    "end": 2426
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2374,
                  "end": 2426
                }
              ],
              "start": 2307,
              "end": 2432
            },
            "abstract": false,
            "declare": false,
            "start": 2290,
            "end": 2432
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2451,
                "end": 2460
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getC2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2479,
                      "end": 2492
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2520,
                                "end": 2530
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2516,
                              "end": 2532
                            },
                            "start": 2509,
                            "end": 2533
                          }
                        ],
                        "start": 2495,
                        "end": 2543
                      },
                      "expression": false,
                      "start": 2492,
                      "end": 2543
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2471,
                    "end": 2543
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setC2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2560,
                      "end": 2573
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2579,
                                "end": 2589
                              },
                              "typeArguments": null,
                              "start": 2579,
                              "end": 2589
                            },
                            "start": 2577,
                            "end": 2589
                          },
                          "start": 2574,
                          "end": 2589
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2591,
                        "end": 2602
                      },
                      "expression": false,
                      "start": 2573,
                      "end": 2602
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2552,
                    "end": 2602
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2623,
                      "end": 2625
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2653,
                                "end": 2663
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2649,
                              "end": 2665
                            },
                            "start": 2642,
                            "end": 2666
                          }
                        ],
                        "start": 2628,
                        "end": 2676
                      },
                      "expression": false,
                      "start": 2625,
                      "end": 2676
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2611,
                    "end": 2676
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getC1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2692,
                      "end": 2704
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2732,
                                "end": 2741
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2728,
                              "end": 2743
                            },
                            "start": 2721,
                            "end": 2744
                          }
                        ],
                        "start": 2707,
                        "end": 2754
                      },
                      "expression": false,
                      "start": 2704,
                      "end": 2754
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2685,
                    "end": 2754
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setC1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2770,
                      "end": 2782
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2788,
                                "end": 2797
                              },
                              "typeArguments": null,
                              "start": 2788,
                              "end": 2797
                            },
                            "start": 2786,
                            "end": 2797
                          },
                          "start": 2783,
                          "end": 2797
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2799,
                        "end": 2810
                      },
                      "expression": false,
                      "start": 2782,
                      "end": 2810
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2763,
                    "end": 2810
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2830,
                      "end": 2832
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2860,
                                "end": 2869
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2856,
                              "end": 2871
                            },
                            "start": 2849,
                            "end": 2872
                          }
                        ],
                        "start": 2835,
                        "end": 2882
                      },
                      "expression": false,
                      "start": 2832,
                      "end": 2882
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2819,
                    "end": 2882
                  }
                ],
                "start": 2461,
                "end": 2888
              },
              "abstract": false,
              "declare": false,
              "start": 2445,
              "end": 2888
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2438,
            "end": 2888
          }
        ],
        "start": 2131,
        "end": 2890
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2109,
      "end": 2890
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 2910,
        "end": 2918
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2931,
              "end": 2932
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
                    "name": "myProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2950,
                    "end": 2956
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2958,
                      "end": 2964
                    },
                    "start": 2956,
                    "end": 2964
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 2943,
                  "end": 2965
                }
              ],
              "start": 2933,
              "end": 2971
            },
            "abstract": false,
            "declare": false,
            "start": 2925,
            "end": 2971
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2986,
              "end": 2989
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2994,
                  "end": 2995
                },
                "typeArguments": null,
                "start": 2994,
                "end": 2995
              },
              "start": 2992,
              "end": 2995
            },
            "body": null,
            "expression": false,
            "start": 2977,
            "end": 2996
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
                  "name": "aVar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3011,
                        "end": 3012
                      },
                      "typeArguments": null,
                      "start": 3011,
                      "end": 3012
                    },
                    "start": 3009,
                    "end": 3012
                  },
                  "start": 3005,
                  "end": 3012
                },
                "init": null,
                "definite": false,
                "start": 3005,
                "end": 3012
              }
            ],
            "declare": false,
            "start": 3001,
            "end": 3013
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3028,
              "end": 3029
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3040,
                    "end": 3041
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3043,
                      "end": 3049
                    },
                    "start": 3041,
                    "end": 3049
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3040,
                  "end": 3050
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3059,
                    "end": 3060
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3062,
                        "end": 3063
                      },
                      "typeArguments": null,
                      "start": 3062,
                      "end": 3063
                    },
                    "start": 3060,
                    "end": 3063
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3059,
                  "end": 3064
                }
              ],
              "start": 3030,
              "end": 3070
            },
            "declare": false,
            "start": 3018,
            "end": 3070
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 3080,
              "end": 3081
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3092,
                    "end": 3093
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3092,
                  "end": 3093
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3103,
                    "end": 3104
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3103,
                  "end": 3104
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3114,
                    "end": 3115
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3114,
                  "end": 3115
                }
              ],
              "start": 3082,
              "end": 3121
            },
            "const": false,
            "declare": false,
            "start": 3075,
            "end": 3121
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3137,
              "end": 3139
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3156,
                    "end": 3157
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
                          "name": "myProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3179,
                          "end": 3185
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3187,
                            "end": 3193
                          },
                          "start": 3185,
                          "end": 3193
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public",
                        "start": 3172,
                        "end": 3194
                      }
                    ],
                    "start": 3158,
                    "end": 3204
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3150,
                  "end": 3204
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3223,
                    "end": 3226
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3230,
                        "end": 3231
                      },
                      "typeArguments": null,
                      "start": 3230,
                      "end": 3231
                    },
                    "start": 3228,
                    "end": 3231
                  },
                  "body": null,
                  "expression": false,
                  "start": 3214,
                  "end": 3232
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
                        "name": "aVar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3251,
                              "end": 3252
                            },
                            "typeArguments": null,
                            "start": 3251,
                            "end": 3252
                          },
                          "start": 3249,
                          "end": 3252
                        },
                        "start": 3245,
                        "end": 3252
                      },
                      "init": null,
                      "definite": false,
                      "start": 3245,
                      "end": 3252
                    }
                  ],
                  "declare": false,
                  "start": 3241,
                  "end": 3253
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3272,
                    "end": 3273
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3288,
                          "end": 3289
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3291,
                            "end": 3297
                          },
                          "start": 3289,
                          "end": 3297
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3288,
                        "end": 3298
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3311,
                          "end": 3312
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3314,
                              "end": 3315
                            },
                            "typeArguments": null,
                            "start": 3314,
                            "end": 3315
                          },
                          "start": 3312,
                          "end": 3315
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3311,
                        "end": 3316
                      }
                    ],
                    "start": 3274,
                    "end": 3326
                  },
                  "declare": false,
                  "start": 3262,
                  "end": 3326
                },
                {
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3340,
                    "end": 3341
                  },
                  "body": {
                    "type": "TSEnumBody",
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3356,
                          "end": 3357
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3356,
                        "end": 3357
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3371,
                          "end": 3372
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3371,
                        "end": 3372
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3386,
                          "end": 3387
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3386,
                        "end": 3387
                      }
                    ],
                    "start": 3342,
                    "end": 3397
                  },
                  "const": false,
                  "declare": false,
                  "start": 3335,
                  "end": 3397
                }
              ],
              "start": 3140,
              "end": 3403
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3127,
            "end": 3403
          }
        ],
        "start": 2919,
        "end": 3405
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2892,
      "end": 3405
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3416,
        "end": 3419
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mAmbient",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3435,
                  "end": 3443
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3444,
                  "end": 3447
                },
                "optional": false,
                "computed": false,
                "start": 3435,
                "end": 3447
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3435,
              "end": 3449
            },
            "start": 3428,
            "end": 3450
          }
        ],
        "start": 3422,
        "end": 3452
      },
      "expression": false,
      "start": 3407,
      "end": 3452
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
            "name": "cVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3458,
            "end": 3462
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mAmbient",
                "optional": false,
                "typeAnnotation": null,
                "start": 3469,
                "end": 3477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 3478,
                "end": 3479
              },
              "optional": false,
              "computed": false,
              "start": 3469,
              "end": 3479
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3465,
            "end": 3481
          },
          "definite": false,
          "start": 3458,
          "end": 3481
        }
      ],
      "declare": false,
      "start": 3454,
      "end": 3482
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
            "name": "aVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3487,
            "end": 3491
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mAmbient",
              "optional": false,
              "typeAnnotation": null,
              "start": 3494,
              "end": 3502
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "aVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3503,
              "end": 3507
            },
            "optional": false,
            "computed": false,
            "start": 3494,
            "end": 3507
          },
          "definite": false,
          "start": 3487,
          "end": 3507
        }
      ],
      "declare": false,
      "start": 3483,
      "end": 3508
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
            "name": "bB",
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
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3517,
                    "end": 3525
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3526,
                    "end": 3527
                  },
                  "start": 3517,
                  "end": 3527
                },
                "typeArguments": null,
                "start": 3517,
                "end": 3527
              },
              "start": 3515,
              "end": 3527
            },
            "start": 3513,
            "end": 3527
          },
          "init": null,
          "definite": false,
          "start": 3513,
          "end": 3527
        }
      ],
      "declare": false,
      "start": 3509,
      "end": 3528
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
            "name": "eVar",
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
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3539,
                    "end": 3547
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3548,
                    "end": 3549
                  },
                  "start": 3539,
                  "end": 3549
                },
                "typeArguments": null,
                "start": 3539,
                "end": 3549
              },
              "start": 3537,
              "end": 3549
            },
            "start": 3533,
            "end": 3549
          },
          "init": null,
          "definite": false,
          "start": 3533,
          "end": 3549
        }
      ],
      "declare": false,
      "start": 3529,
      "end": 3550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3561,
        "end": 3566
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3582,
                    "end": 3590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3591,
                    "end": 3593
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3582,
                  "end": 3593
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3594,
                  "end": 3597
                },
                "optional": false,
                "computed": false,
                "start": 3582,
                "end": 3597
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3582,
              "end": 3599
            },
            "start": 3575,
            "end": 3600
          }
        ],
        "start": 3569,
        "end": 3602
      },
      "expression": false,
      "start": 3552,
      "end": 3602
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
            "name": "m3cVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3608,
            "end": 3614
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mAmbient",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3621,
                  "end": 3629
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3630,
                  "end": 3632
                },
                "optional": false,
                "computed": false,
                "start": 3621,
                "end": 3632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 3633,
                "end": 3634
              },
              "optional": false,
              "computed": false,
              "start": 3621,
              "end": 3634
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3617,
            "end": 3636
          },
          "definite": false,
          "start": 3608,
          "end": 3636
        }
      ],
      "declare": false,
      "start": 3604,
      "end": 3637
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
            "name": "m3aVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3642,
            "end": 3648
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mAmbient",
                "optional": false,
                "typeAnnotation": null,
                "start": 3651,
                "end": 3659
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 3660,
                "end": 3662
              },
              "optional": false,
              "computed": false,
              "start": 3651,
              "end": 3662
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "aVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3663,
              "end": 3667
            },
            "optional": false,
            "computed": false,
            "start": 3651,
            "end": 3667
          },
          "definite": false,
          "start": 3642,
          "end": 3667
        }
      ],
      "declare": false,
      "start": 3638,
      "end": 3668
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
            "name": "m3bB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mAmbient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3679,
                      "end": 3687
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3688,
                      "end": 3690
                    },
                    "start": 3679,
                    "end": 3690
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3691,
                    "end": 3692
                  },
                  "start": 3679,
                  "end": 3692
                },
                "typeArguments": null,
                "start": 3679,
                "end": 3692
              },
              "start": 3677,
              "end": 3692
            },
            "start": 3673,
            "end": 3692
          },
          "init": null,
          "definite": false,
          "start": 3673,
          "end": 3692
        }
      ],
      "declare": false,
      "start": 3669,
      "end": 3693
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
            "name": "m3eVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mAmbient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3706,
                      "end": 3714
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3715,
                      "end": 3717
                    },
                    "start": 3706,
                    "end": 3717
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3718,
                    "end": 3719
                  },
                  "start": 3706,
                  "end": 3719
                },
                "typeArguments": null,
                "start": 3706,
                "end": 3719
              },
              "start": 3704,
              "end": 3719
            },
            "start": 3698,
            "end": 3719
          },
          "init": null,
          "definite": false,
          "start": 3698,
          "end": 3719
        }
      ],
      "declare": false,
      "start": 3694,
      "end": 3720
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3721
}
```
