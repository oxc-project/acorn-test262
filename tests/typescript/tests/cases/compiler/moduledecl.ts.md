__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3652,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 12,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 12,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 14,
      "end": 28,
      "id": {
        "type": "TSQualifiedName",
        "start": 21,
        "end": 24,
        "left": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 28,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 65,
      "id": {
        "type": "TSQualifiedName",
        "start": 37,
        "end": 42,
        "left": {
          "type": "TSQualifiedName",
          "start": 37,
          "end": 40,
          "left": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 43,
        "end": 65,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 49,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 58,
              "decorators": [],
              "name": "ma",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 81,
        "decorators": [],
        "name": "mImport",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 82,
        "end": 163,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 88,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 106,
            "end": 121,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 117,
              "end": 120,
              "left": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 126,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 133,
              "end": 135,
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 145,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 152,
              "end": 154,
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 157,
              "end": 160,
              "left": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 165,
      "end": 626,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 174,
        "decorators": [],
        "name": "m0",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 175,
        "end": 626,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 181,
            "end": 202,
            "id": {
              "type": "Identifier",
              "start": 190,
              "end": 192,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 195,
              "end": 202,
              "body": []
            },
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 208,
            "end": 231,
            "id": {
              "type": "Identifier",
              "start": 217,
              "end": 219,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 220,
                "end": 229,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 221,
                  "end": 229,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 223,
                    "end": 229
                  }
                }
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 236,
            "end": 259,
            "id": {
              "type": "Identifier",
              "start": 245,
              "end": 247,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 248,
                "end": 257,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 249,
                  "end": 257,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 251,
                    "end": 257
                  }
                }
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 264,
            "end": 292,
            "id": {
              "type": "Identifier",
              "start": 273,
              "end": 275,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 276,
                "end": 283,
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 278,
                  "end": 283,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 280,
                    "end": 283
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 285,
              "end": 292,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ClassDeclaration",
            "start": 298,
            "end": 429,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 304,
              "end": 306,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 307,
              "end": 429,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 317,
                  "end": 339,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 326,
                    "end": 338,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 328,
                      "end": 338,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 330,
                        "end": 338,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 332,
                          "end": 338
                        }
                      }
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
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 348,
                  "end": 370,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 357,
                    "end": 369,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 359,
                      "end": 369,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 361,
                        "end": 369,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 363,
                          "end": 369
                        }
                      }
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
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 379,
                  "end": 397,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 396,
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null
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
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 406,
                  "end": 423,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 422,
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null
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
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 435,
            "end": 501,
            "id": {
              "type": "Identifier",
              "start": 445,
              "end": 447,
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 448,
              "end": 501,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 458,
                  "end": 470,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 461,
                    "end": 469,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 463,
                      "end": 469,
                      "typeName": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 469,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSIndexSignature",
                  "start": 479,
                  "end": 495,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 480,
                      "end": 489,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 481,
                        "end": 489,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 483,
                          "end": 489
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 490,
                    "end": 494,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 492,
                      "end": 494,
                      "typeName": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 494,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 507,
            "end": 521,
            "id": {
              "type": "Identifier",
              "start": 514,
              "end": 516,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 526,
            "end": 540,
            "id": {
              "type": "Identifier",
              "start": 533,
              "end": 535,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 545,
            "end": 561,
            "id": {
              "type": "Identifier",
              "start": 552,
              "end": 554,
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 557,
              "end": 560,
              "left": {
                "type": "Identifier",
                "start": 557,
                "end": 558,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 559,
                "end": 560,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 566,
            "end": 580,
            "id": {
              "type": "Identifier",
              "start": 573,
              "end": 575,
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 585,
            "end": 601,
            "id": {
              "type": "Identifier",
              "start": 592,
              "end": 594,
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 597,
              "end": 600,
              "left": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 599,
                "end": 600,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 606,
            "end": 624,
            "id": {
              "type": "Identifier",
              "start": 613,
              "end": 615,
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 618,
              "end": 623,
              "left": {
                "type": "TSQualifiedName",
                "start": 618,
                "end": 621,
                "left": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 619,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 620,
                  "end": 621,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 628,
      "end": 1332,
      "id": {
        "type": "Identifier",
        "start": 635,
        "end": 637,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 638,
        "end": 1332,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 644,
            "end": 672,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 651,
              "end": 672,
              "id": {
                "type": "Identifier",
                "start": 660,
                "end": 662,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 665,
                "end": 672,
                "body": []
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
            "start": 678,
            "end": 708,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 685,
              "end": 708,
              "id": {
                "type": "Identifier",
                "start": 694,
                "end": 696,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 697,
                  "end": 706,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 698,
                    "end": 706,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 700,
                      "end": 706
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 713,
            "end": 743,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 720,
              "end": 743,
              "id": {
                "type": "Identifier",
                "start": 729,
                "end": 731,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 732,
                  "end": 741,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 733,
                    "end": 741,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 735,
                      "end": 741
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 748,
            "end": 783,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 755,
              "end": 783,
              "id": {
                "type": "Identifier",
                "start": 764,
                "end": 766,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 767,
                  "end": 774,
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 769,
                    "end": 774,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 771,
                      "end": 774
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 776,
                "end": 783,
                "body": []
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
            "start": 789,
            "end": 1128,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 796,
              "end": 1128,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 802,
                "end": 804,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 805,
                "end": 1128,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 815,
                    "end": 837,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 822,
                      "end": 823,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 823,
                      "end": 836,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 825,
                        "end": 836,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 828,
                          "end": 836,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 830,
                            "end": 836
                          }
                        }
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
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 846,
                    "end": 869,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 854,
                      "end": 855,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 855,
                      "end": 868,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 857,
                        "end": 868,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 860,
                          "end": 868,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 862,
                            "end": 868
                          }
                        }
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
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 878,
                    "end": 896,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 893,
                      "end": 895,
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": null
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
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 905,
                    "end": 922,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 919,
                      "end": 921,
                      "decorators": [],
                      "name": "s2",
                      "optional": false,
                      "typeAnnotation": null
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
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 932,
                    "end": 982,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 939,
                      "end": 940,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 940,
                      "end": 982,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 943,
                        "end": 982,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 957,
                            "end": 972,
                            "argument": {
                              "type": "Literal",
                              "start": 964,
                              "end": 971,
                              "value": "Hello",
                              "raw": "\"Hello\""
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 992,
                    "end": 1028,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1000,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1000,
                      "end": 1027,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1002,
                        "end": 1027,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1004,
                            "end": 1014,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1004,
                              "end": 1005,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1005,
                              "end": 1013,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1007,
                                "end": 1013
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1015,
                            "end": 1025,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1015,
                              "end": 1016,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1016,
                              "end": 1024,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1018,
                                "end": 1024
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
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
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1037,
                    "end": 1122,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1037,
                      "end": 1048,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1049,
                      "end": 1122,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 1050,
                          "end": 1058,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1057,
                            "end": 1058,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 1060,
                          "end": 1077,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1067,
                            "end": 1077,
                            "decorators": [],
                            "name": "n2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1069,
                              "end": 1077,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1071,
                                "end": 1077
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 1079,
                          "end": 1089,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1087,
                            "end": 1089,
                            "decorators": [],
                            "name": "n3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 1091,
                          "end": 1109,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1099,
                            "end": 1109,
                            "decorators": [],
                            "name": "n4",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1101,
                              "end": 1109,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1103,
                                "end": 1109
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1111,
                        "end": 1122,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1134,
            "end": 1207,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1141,
              "end": 1207,
              "id": {
                "type": "Identifier",
                "start": 1151,
                "end": 1153,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 1154,
                "end": 1207,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1164,
                    "end": 1176,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1167,
                      "end": 1175,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1169,
                        "end": 1175,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1169,
                          "end": 1175,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 1185,
                    "end": 1201,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1186,
                        "end": 1195,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1187,
                          "end": 1195,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1189,
                            "end": 1195
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1196,
                      "end": 1200,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1198,
                        "end": 1200,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1198,
                          "end": 1200,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1213,
            "end": 1227,
            "id": {
              "type": "Identifier",
              "start": 1220,
              "end": 1222,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 1225,
              "end": 1226,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1232,
            "end": 1246,
            "id": {
              "type": "Identifier",
              "start": 1239,
              "end": 1241,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 1244,
              "end": 1245,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1251,
            "end": 1267,
            "id": {
              "type": "Identifier",
              "start": 1258,
              "end": 1260,
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 1263,
              "end": 1266,
              "left": {
                "type": "Identifier",
                "start": 1263,
                "end": 1264,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1265,
                "end": 1266,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1272,
            "end": 1286,
            "id": {
              "type": "Identifier",
              "start": 1279,
              "end": 1281,
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 1284,
              "end": 1285,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1291,
            "end": 1307,
            "id": {
              "type": "Identifier",
              "start": 1298,
              "end": 1300,
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 1303,
              "end": 1306,
              "left": {
                "type": "Identifier",
                "start": 1303,
                "end": 1304,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1305,
                "end": 1306,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1312,
            "end": 1330,
            "id": {
              "type": "Identifier",
              "start": 1319,
              "end": 1321,
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 1324,
              "end": 1329,
              "left": {
                "type": "TSQualifiedName",
                "start": 1324,
                "end": 1327,
                "left": {
                  "type": "Identifier",
                  "start": 1324,
                  "end": 1325,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1326,
                  "end": 1327,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1328,
                "end": 1329,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1334,
      "end": 1485,
      "id": {
        "type": "Identifier",
        "start": 1341,
        "end": 1342,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1343,
        "end": 1485,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1349,
            "end": 1423,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1356,
              "end": 1423,
              "id": {
                "type": "Identifier",
                "start": 1363,
                "end": 1365,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1366,
                "end": 1423,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1376,
                    "end": 1387,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1380,
                        "end": 1386,
                        "id": {
                          "type": "Identifier",
                          "start": 1380,
                          "end": 1381,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1384,
                          "end": 1386,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1396,
                    "end": 1417,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 1403,
                      "end": 1417,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1407,
                          "end": 1416,
                          "id": {
                            "type": "Identifier",
                            "start": 1407,
                            "end": 1416,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1408,
                              "end": 1416,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1410,
                                "end": 1416
                              }
                            }
                          },
                          "init": null,
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
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1429,
            "end": 1483,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1436,
              "end": 1483,
              "id": {
                "type": "Identifier",
                "start": 1443,
                "end": 1445,
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1446,
                "end": 1483,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1456,
                    "end": 1477,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 1463,
                      "end": 1477,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1467,
                          "end": 1476,
                          "id": {
                            "type": "Identifier",
                            "start": 1467,
                            "end": 1476,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1468,
                              "end": 1476,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1470,
                                "end": 1476
                              }
                            }
                          },
                          "init": null,
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
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
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
      "start": 1487,
      "end": 1601,
      "id": {
        "type": "Identifier",
        "start": 1494,
        "end": 1495,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1496,
        "end": 1601,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1503,
            "end": 1599,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1510,
              "end": 1599,
              "id": {
                "type": "Identifier",
                "start": 1517,
                "end": 1520,
                "decorators": [],
                "name": "m25",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1521,
                "end": 1599,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1531,
                    "end": 1593,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 1538,
                      "end": 1593,
                      "id": {
                        "type": "Identifier",
                        "start": 1545,
                        "end": 1547,
                        "decorators": [],
                        "name": "m5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 1548,
                        "end": 1593,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 1562,
                            "end": 1583,
                            "declaration": {
                              "type": "VariableDeclaration",
                              "start": 1569,
                              "end": 1583,
                              "kind": "var",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 1573,
                                  "end": 1582,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 1573,
                                    "end": 1582,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1574,
                                      "end": 1582,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1576,
                                        "end": 1582
                                      }
                                    }
                                  },
                                  "init": null,
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
                        ]
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false
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
      "start": 1603,
      "end": 1830,
      "id": {
        "type": "Identifier",
        "start": 1610,
        "end": 1613,
        "decorators": [],
        "name": "m13",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1614,
        "end": 1830,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1620,
            "end": 1828,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1627,
              "end": 1828,
              "id": {
                "type": "Identifier",
                "start": 1634,
                "end": 1636,
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1637,
                "end": 1828,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1647,
                    "end": 1758,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 1654,
                      "end": 1758,
                      "id": {
                        "type": "Identifier",
                        "start": 1661,
                        "end": 1663,
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 1664,
                        "end": 1758,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 1678,
                            "end": 1748,
                            "declaration": {
                              "type": "TSModuleDeclaration",
                              "start": 1685,
                              "end": 1748,
                              "id": {
                                "type": "Identifier",
                                "start": 1692,
                                "end": 1694,
                                "decorators": [],
                                "name": "m3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "body": {
                                "type": "TSModuleBlock",
                                "start": 1695,
                                "end": 1748,
                                "body": [
                                  {
                                    "type": "ExportNamedDeclaration",
                                    "start": 1713,
                                    "end": 1734,
                                    "declaration": {
                                      "type": "VariableDeclaration",
                                      "start": 1720,
                                      "end": 1734,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 1724,
                                          "end": 1733,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 1724,
                                            "end": 1733,
                                            "decorators": [],
                                            "name": "c",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1725,
                                              "end": 1733,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1727,
                                                "end": 1733
                                              }
                                            }
                                          },
                                          "init": null,
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
                                ]
                              },
                              "kind": "module",
                              "declare": false,
                              "global": false
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
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1768,
                    "end": 1822,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 1775,
                      "end": 1822,
                      "id": {
                        "type": "Identifier",
                        "start": 1784,
                        "end": 1785,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1788,
                        "end": 1822,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1802,
                            "end": 1812,
                            "argument": {
                              "type": "Literal",
                              "start": 1809,
                              "end": 1811,
                              "value": 20,
                              "raw": "20"
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
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
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
      "start": 1832,
      "end": 1871,
      "id": {
        "type": "Identifier",
        "start": 1847,
        "end": 1849,
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1850,
        "end": 1871,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1856,
            "end": 1869,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1863,
              "end": 1869,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1867,
                  "end": 1868,
                  "id": {
                    "type": "Identifier",
                    "start": 1867,
                    "end": 1868,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1873,
      "end": 1912,
      "id": {
        "type": "Identifier",
        "start": 1888,
        "end": 1890,
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1891,
        "end": 1912,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1897,
            "end": 1910,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1904,
              "end": 1910,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1908,
                  "end": 1909,
                  "id": {
                    "type": "Identifier",
                    "start": 1908,
                    "end": 1909,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1914,
      "end": 1954,
      "id": {
        "type": "Identifier",
        "start": 1929,
        "end": 1932,
        "decorators": [],
        "name": "m43",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1933,
        "end": 1954,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1939,
            "end": 1952,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1946,
              "end": 1952,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1950,
                  "end": 1951,
                  "id": {
                    "type": "Identifier",
                    "start": 1950,
                    "end": 1951,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1956,
      "end": 1996,
      "id": {
        "type": "Identifier",
        "start": 1971,
        "end": 1974,
        "decorators": [],
        "name": "m55",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1975,
        "end": 1996,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1981,
            "end": 1994,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1988,
              "end": 1994,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1992,
                  "end": 1993,
                  "id": {
                    "type": "Identifier",
                    "start": 1992,
                    "end": 1993,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1998,
      "end": 2047,
      "id": {
        "type": "Literal",
        "start": 2013,
        "end": 2017,
        "value": "m3",
        "raw": "\"m3\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2018,
        "end": 2047,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2024,
            "end": 2045,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2031,
              "end": 2045,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2035,
                  "end": 2044,
                  "id": {
                    "type": "Identifier",
                    "start": 2035,
                    "end": 2044,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2036,
                      "end": 2044,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2038,
                        "end": 2044
                      }
                    }
                  },
                  "init": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2049,
      "end": 2827,
      "id": {
        "type": "Identifier",
        "start": 2056,
        "end": 2067,
        "decorators": [],
        "name": "exportTests",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2068,
        "end": 2827,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2074,
            "end": 2222,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2081,
              "end": 2222,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 2087,
                "end": 2096,
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 2097,
                "end": 2222,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2107,
                    "end": 2154,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2115,
                      "end": 2117,
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2117,
                      "end": 2154,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2120,
                        "end": 2154,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2134,
                            "end": 2144,
                            "argument": {
                              "type": "Literal",
                              "start": 2141,
                              "end": 2143,
                              "value": 30,
                              "raw": "30"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2164,
                    "end": 2216,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2171,
                      "end": 2173,
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2173,
                      "end": 2216,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2176,
                        "end": 2216,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2190,
                            "end": 2206,
                            "argument": {
                              "type": "Literal",
                              "start": 2197,
                              "end": 2205,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
          },
          {
            "type": "ClassDeclaration",
            "start": 2227,
            "end": 2369,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2233,
              "end": 2243,
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 2244,
              "end": 2369,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 2254,
                  "end": 2301,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2262,
                    "end": 2264,
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2264,
                    "end": 2301,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2267,
                      "end": 2301,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2281,
                          "end": 2291,
                          "argument": {
                            "type": "Literal",
                            "start": 2288,
                            "end": 2290,
                            "value": 30,
                            "raw": "30"
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2311,
                  "end": 2363,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2318,
                    "end": 2320,
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2320,
                    "end": 2363,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2323,
                      "end": 2363,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2337,
                          "end": 2353,
                          "argument": {
                            "type": "Literal",
                            "start": 2344,
                            "end": 2352,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2375,
            "end": 2825,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2382,
              "end": 2825,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 2388,
                "end": 2397,
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 2398,
                "end": 2825,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2408,
                    "end": 2480,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2416,
                      "end": 2429,
                      "decorators": [],
                      "name": "getC2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2429,
                      "end": 2480,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2432,
                        "end": 2480,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2446,
                            "end": 2470,
                            "argument": {
                              "type": "NewExpression",
                              "start": 2453,
                              "end": 2469,
                              "callee": {
                                "type": "Identifier",
                                "start": 2457,
                                "end": 2467,
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2489,
                    "end": 2539,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2497,
                      "end": 2510,
                      "decorators": [],
                      "name": "setC2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2510,
                      "end": 2539,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2511,
                          "end": 2526,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2514,
                            "end": 2526,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2516,
                              "end": 2526,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2516,
                                "end": 2526,
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2528,
                        "end": 2539,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2548,
                    "end": 2613,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2560,
                      "end": 2562,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2562,
                      "end": 2613,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2565,
                        "end": 2613,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2579,
                            "end": 2603,
                            "argument": {
                              "type": "NewExpression",
                              "start": 2586,
                              "end": 2602,
                              "callee": {
                                "type": "Identifier",
                                "start": 2590,
                                "end": 2600,
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2622,
                    "end": 2691,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2629,
                      "end": 2641,
                      "decorators": [],
                      "name": "getC1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2641,
                      "end": 2691,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2644,
                        "end": 2691,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2658,
                            "end": 2681,
                            "argument": {
                              "type": "NewExpression",
                              "start": 2665,
                              "end": 2680,
                              "callee": {
                                "type": "Identifier",
                                "start": 2669,
                                "end": 2678,
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2700,
                    "end": 2747,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2707,
                      "end": 2719,
                      "decorators": [],
                      "name": "setC1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2719,
                      "end": 2747,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2720,
                          "end": 2734,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2723,
                            "end": 2734,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2725,
                              "end": 2734,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2725,
                                "end": 2734,
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2736,
                        "end": 2747,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2756,
                    "end": 2819,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2767,
                      "end": 2769,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2769,
                      "end": 2819,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2772,
                        "end": 2819,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2786,
                            "end": 2809,
                            "argument": {
                              "type": "NewExpression",
                              "start": 2793,
                              "end": 2808,
                              "callee": {
                                "type": "Identifier",
                                "start": 2797,
                                "end": 2806,
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2829,
      "end": 3336,
      "id": {
        "type": "Identifier",
        "start": 2844,
        "end": 2852,
        "decorators": [],
        "name": "mAmbient",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2853,
        "end": 3336,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 2859,
            "end": 2905,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2865,
              "end": 2866,
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
              "start": 2867,
              "end": 2905,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2877,
                  "end": 2899,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2884,
                    "end": 2890,
                    "decorators": [],
                    "name": "myProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2890,
                    "end": 2898,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2892,
                      "end": 2898
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
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 2911,
            "end": 2930,
            "id": {
              "type": "Identifier",
              "start": 2920,
              "end": 2923,
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
              "start": 2926,
              "end": 2929,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2928,
                "end": 2929,
                "typeName": {
                  "type": "Identifier",
                  "start": 2928,
                  "end": 2929,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2935,
            "end": 2947,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2939,
                "end": 2946,
                "id": {
                  "type": "Identifier",
                  "start": 2939,
                  "end": 2946,
                  "decorators": [],
                  "name": "aVar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2943,
                    "end": 2946,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2945,
                      "end": 2946,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2945,
                        "end": 2946,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2952,
            "end": 3004,
            "id": {
              "type": "Identifier",
              "start": 2962,
              "end": 2963,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 2964,
              "end": 3004,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2974,
                  "end": 2984,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2974,
                    "end": 2975,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2975,
                    "end": 2983,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2977,
                      "end": 2983
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2993,
                  "end": 2998,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2993,
                    "end": 2994,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2994,
                    "end": 2997,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2996,
                      "end": 2997,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2996,
                        "end": 2997,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 3009,
            "end": 3055,
            "id": {
              "type": "Identifier",
              "start": 3014,
              "end": 3015,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 3016,
              "end": 3055,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 3026,
                  "end": 3027,
                  "id": {
                    "type": "Identifier",
                    "start": 3026,
                    "end": 3027,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3037,
                  "end": 3038,
                  "id": {
                    "type": "Identifier",
                    "start": 3037,
                    "end": 3038,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3048,
                  "end": 3049,
                  "id": {
                    "type": "Identifier",
                    "start": 3048,
                    "end": 3049,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 3061,
            "end": 3334,
            "id": {
              "type": "Identifier",
              "start": 3068,
              "end": 3070,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 3071,
              "end": 3334,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 3081,
                  "end": 3135,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 3087,
                    "end": 3088,
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
                    "start": 3089,
                    "end": 3135,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 3103,
                        "end": 3125,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3110,
                          "end": 3116,
                          "decorators": [],
                          "name": "myProp",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3116,
                          "end": 3124,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3118,
                            "end": 3124
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
                        "accessibility": "public"
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                {
                  "type": "TSDeclareFunction",
                  "start": 3145,
                  "end": 3163,
                  "id": {
                    "type": "Identifier",
                    "start": 3154,
                    "end": 3157,
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
                    "start": 3159,
                    "end": 3162,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3161,
                      "end": 3162,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3161,
                        "end": 3162,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "body": null,
                  "expression": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3172,
                  "end": 3184,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3176,
                      "end": 3183,
                      "id": {
                        "type": "Identifier",
                        "start": 3176,
                        "end": 3183,
                        "decorators": [],
                        "name": "aVar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3180,
                          "end": 3183,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3182,
                            "end": 3183,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3182,
                              "end": 3183,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3193,
                  "end": 3257,
                  "id": {
                    "type": "Identifier",
                    "start": 3203,
                    "end": 3204,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3205,
                    "end": 3257,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3219,
                        "end": 3229,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3219,
                          "end": 3220,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3220,
                          "end": 3228,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3222,
                            "end": 3228
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 3242,
                        "end": 3247,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3242,
                          "end": 3243,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3243,
                          "end": 3246,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3245,
                            "end": 3246,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3245,
                              "end": 3246,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSEnumDeclaration",
                  "start": 3266,
                  "end": 3328,
                  "id": {
                    "type": "Identifier",
                    "start": 3271,
                    "end": 3272,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "body": {
                    "type": "TSEnumBody",
                    "start": 3273,
                    "end": 3328,
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "start": 3287,
                        "end": 3288,
                        "id": {
                          "type": "Identifier",
                          "start": 3287,
                          "end": 3288,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 3302,
                        "end": 3303,
                        "id": {
                          "type": "Identifier",
                          "start": 3302,
                          "end": 3303,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 3317,
                        "end": 3318,
                        "id": {
                          "type": "Identifier",
                          "start": 3317,
                          "end": 3318,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "initializer": null,
                        "computed": false
                      }
                    ]
                  },
                  "const": false,
                  "declare": false
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
      "type": "FunctionDeclaration",
      "start": 3338,
      "end": 3383,
      "id": {
        "type": "Identifier",
        "start": 3347,
        "end": 3350,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3353,
        "end": 3383,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3359,
            "end": 3381,
            "argument": {
              "type": "CallExpression",
              "start": 3366,
              "end": 3380,
              "callee": {
                "type": "MemberExpression",
                "start": 3366,
                "end": 3378,
                "object": {
                  "type": "Identifier",
                  "start": 3366,
                  "end": 3374,
                  "decorators": [],
                  "name": "mAmbient",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3375,
                  "end": 3378,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3385,
      "end": 3413,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3389,
          "end": 3412,
          "id": {
            "type": "Identifier",
            "start": 3389,
            "end": 3393,
            "decorators": [],
            "name": "cVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 3396,
            "end": 3412,
            "callee": {
              "type": "MemberExpression",
              "start": 3400,
              "end": 3410,
              "object": {
                "type": "Identifier",
                "start": 3400,
                "end": 3408,
                "decorators": [],
                "name": "mAmbient",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3409,
                "end": 3410,
                "decorators": [],
                "name": "C",
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
      "type": "VariableDeclaration",
      "start": 3414,
      "end": 3439,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3418,
          "end": 3438,
          "id": {
            "type": "Identifier",
            "start": 3418,
            "end": 3422,
            "decorators": [],
            "name": "aVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 3425,
            "end": 3438,
            "object": {
              "type": "Identifier",
              "start": 3425,
              "end": 3433,
              "decorators": [],
              "name": "mAmbient",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 3434,
              "end": 3438,
              "decorators": [],
              "name": "aVar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3440,
      "end": 3459,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3444,
          "end": 3458,
          "id": {
            "type": "Identifier",
            "start": 3444,
            "end": 3458,
            "decorators": [],
            "name": "bB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3446,
              "end": 3458,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3448,
                "end": 3458,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3448,
                  "end": 3458,
                  "left": {
                    "type": "Identifier",
                    "start": 3448,
                    "end": 3456,
                    "decorators": [],
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3457,
                    "end": 3458,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3460,
      "end": 3481,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3464,
          "end": 3480,
          "id": {
            "type": "Identifier",
            "start": 3464,
            "end": 3480,
            "decorators": [],
            "name": "eVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3468,
              "end": 3480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3470,
                "end": 3480,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3470,
                  "end": 3480,
                  "left": {
                    "type": "Identifier",
                    "start": 3470,
                    "end": 3478,
                    "decorators": [],
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3479,
                    "end": 3480,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3483,
      "end": 3533,
      "id": {
        "type": "Identifier",
        "start": 3492,
        "end": 3497,
        "decorators": [],
        "name": "m3foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3500,
        "end": 3533,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3506,
            "end": 3531,
            "argument": {
              "type": "CallExpression",
              "start": 3513,
              "end": 3530,
              "callee": {
                "type": "MemberExpression",
                "start": 3513,
                "end": 3528,
                "object": {
                  "type": "MemberExpression",
                  "start": 3513,
                  "end": 3524,
                  "object": {
                    "type": "Identifier",
                    "start": 3513,
                    "end": 3521,
                    "decorators": [],
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3522,
                    "end": 3524,
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3525,
                  "end": 3528,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3535,
      "end": 3568,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3539,
          "end": 3567,
          "id": {
            "type": "Identifier",
            "start": 3539,
            "end": 3545,
            "decorators": [],
            "name": "m3cVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 3548,
            "end": 3567,
            "callee": {
              "type": "MemberExpression",
              "start": 3552,
              "end": 3565,
              "object": {
                "type": "MemberExpression",
                "start": 3552,
                "end": 3563,
                "object": {
                  "type": "Identifier",
                  "start": 3552,
                  "end": 3560,
                  "decorators": [],
                  "name": "mAmbient",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3561,
                  "end": 3563,
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 3564,
                "end": 3565,
                "decorators": [],
                "name": "C",
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
      "type": "VariableDeclaration",
      "start": 3569,
      "end": 3599,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3573,
          "end": 3598,
          "id": {
            "type": "Identifier",
            "start": 3573,
            "end": 3579,
            "decorators": [],
            "name": "m3aVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 3582,
            "end": 3598,
            "object": {
              "type": "MemberExpression",
              "start": 3582,
              "end": 3593,
              "object": {
                "type": "Identifier",
                "start": 3582,
                "end": 3590,
                "decorators": [],
                "name": "mAmbient",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3591,
                "end": 3593,
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 3594,
              "end": 3598,
              "decorators": [],
              "name": "aVar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3600,
      "end": 3624,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3604,
          "end": 3623,
          "id": {
            "type": "Identifier",
            "start": 3604,
            "end": 3623,
            "decorators": [],
            "name": "m3bB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3608,
              "end": 3623,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3610,
                "end": 3623,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3610,
                  "end": 3623,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 3610,
                    "end": 3621,
                    "left": {
                      "type": "Identifier",
                      "start": 3610,
                      "end": 3618,
                      "decorators": [],
                      "name": "mAmbient",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3619,
                      "end": 3621,
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3622,
                    "end": 3623,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3625,
      "end": 3651,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3629,
          "end": 3650,
          "id": {
            "type": "Identifier",
            "start": 3629,
            "end": 3650,
            "decorators": [],
            "name": "m3eVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3635,
              "end": 3650,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3637,
                "end": 3650,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3637,
                  "end": 3650,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 3637,
                    "end": 3648,
                    "left": {
                      "type": "Identifier",
                      "start": 3637,
                      "end": 3645,
                      "decorators": [],
                      "name": "mAmbient",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3646,
                      "end": 3648,
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3649,
                    "end": 3650,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
