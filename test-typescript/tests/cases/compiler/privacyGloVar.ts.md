__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2558,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 2013,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 2013,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 38,
                "name": "C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 79,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 49,
                    "end": 73,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 59,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 59,
                      "end": 73,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 62,
                        "end": 73,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
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
          },
          {
            "type": "ClassDeclaration",
            "start": 85,
            "end": 109,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 101,
              "name": "C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 102,
              "end": 109,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 115,
            "end": 782,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 122,
              "end": 782,
              "id": {
                "type": "Identifier",
                "start": 128,
                "end": 137,
                "name": "C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 782,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 148,
                    "end": 181,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 169,
                      "name": "C3_v1_private",
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
                      "start": 169,
                      "end": 180,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 180,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 180,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 190,
                    "end": 221,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 209,
                      "name": "C3_v2_public",
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
                      "start": 209,
                      "end": 220,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 211,
                        "end": 220,
                        "typeName": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 220,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 230,
                    "end": 264,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 251,
                      "name": "C3_v3_private",
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
                      "start": 251,
                      "end": 263,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 253,
                        "end": 263,
                        "typeName": {
                          "type": "Identifier",
                          "start": 253,
                          "end": 263,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 273,
                    "end": 305,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 292,
                      "name": "C3_v4_public",
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
                      "start": 292,
                      "end": 304,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 294,
                        "end": 304,
                        "typeName": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 304,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 324,
                    "end": 365,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 346,
                      "name": "C3_v11_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 349,
                      "end": 364,
                      "callee": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 362,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 374,
                    "end": 413,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 394,
                      "name": "C3_v12_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 397,
                      "end": 412,
                      "callee": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 410,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 422,
                    "end": 464,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 444,
                      "name": "C3_v13_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 447,
                      "end": 463,
                      "callee": {
                        "type": "Identifier",
                        "start": 451,
                        "end": 461,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 473,
                    "end": 513,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 493,
                      "name": "C3_v14_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 496,
                      "end": 512,
                      "callee": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 510,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 532,
                    "end": 584,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 554,
                      "name": "C3_v21_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 568,
                      "end": 583,
                      "callee": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 581,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 554,
                      "end": 565,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 556,
                        "end": 565,
                        "typeName": {
                          "type": "Identifier",
                          "start": 556,
                          "end": 565,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 593,
                    "end": 643,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 600,
                      "end": 613,
                      "name": "C3_v22_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 627,
                      "end": 642,
                      "callee": {
                        "type": "Identifier",
                        "start": 631,
                        "end": 640,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 613,
                      "end": 624,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 615,
                        "end": 624,
                        "typeName": {
                          "type": "Identifier",
                          "start": 615,
                          "end": 624,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 652,
                    "end": 706,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 674,
                      "name": "C3_v23_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 689,
                      "end": 705,
                      "callee": {
                        "type": "Identifier",
                        "start": 693,
                        "end": 703,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 674,
                      "end": 686,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 676,
                        "end": 686,
                        "typeName": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 686,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 715,
                    "end": 767,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 722,
                      "end": 735,
                      "name": "C3_v24_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 750,
                      "end": 766,
                      "callee": {
                        "type": "Identifier",
                        "start": 754,
                        "end": 764,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 735,
                      "end": 747,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 737,
                        "end": 747,
                        "typeName": {
                          "type": "Identifier",
                          "start": 737,
                          "end": 747,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "public"
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
          },
          {
            "type": "ClassDeclaration",
            "start": 788,
            "end": 1421,
            "id": {
              "type": "Identifier",
              "start": 794,
              "end": 803,
              "name": "C4_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 804,
              "end": 1421,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 814,
                  "end": 847,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 822,
                    "end": 835,
                    "name": "C4_v1_private",
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
                    "start": 835,
                    "end": 846,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 837,
                      "end": 846,
                      "typeName": {
                        "type": "Identifier",
                        "start": 837,
                        "end": 846,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 856,
                  "end": 887,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 875,
                    "name": "C4_v2_public",
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
                    "start": 875,
                    "end": 886,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 877,
                      "end": 886,
                      "typeName": {
                        "type": "Identifier",
                        "start": 877,
                        "end": 886,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 896,
                  "end": 930,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 904,
                    "end": 917,
                    "name": "C4_v3_private",
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
                    "start": 917,
                    "end": 929,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 919,
                      "end": 929,
                      "typeName": {
                        "type": "Identifier",
                        "start": 919,
                        "end": 929,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 939,
                  "end": 971,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 946,
                    "end": 958,
                    "name": "C4_v4_public",
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
                    "start": 958,
                    "end": 970,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 960,
                      "end": 970,
                      "typeName": {
                        "type": "Identifier",
                        "start": 960,
                        "end": 970,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 981,
                  "end": 1022,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 989,
                    "end": 1003,
                    "name": "C4_v11_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1006,
                    "end": 1021,
                    "callee": {
                      "type": "Identifier",
                      "start": 1010,
                      "end": 1019,
                      "name": "C1_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1031,
                  "end": 1070,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1038,
                    "end": 1051,
                    "name": "C4_v12_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1054,
                    "end": 1069,
                    "callee": {
                      "type": "Identifier",
                      "start": 1058,
                      "end": 1067,
                      "name": "C1_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1079,
                  "end": 1121,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1087,
                    "end": 1101,
                    "name": "C4_v13_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1104,
                    "end": 1120,
                    "callee": {
                      "type": "Identifier",
                      "start": 1108,
                      "end": 1118,
                      "name": "C2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1130,
                  "end": 1170,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1150,
                    "name": "C4_v14_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1153,
                    "end": 1169,
                    "callee": {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1167,
                      "name": "C2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1180,
                  "end": 1232,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1188,
                    "end": 1202,
                    "name": "C4_v21_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1216,
                    "end": 1231,
                    "callee": {
                      "type": "Identifier",
                      "start": 1220,
                      "end": 1229,
                      "name": "C1_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1202,
                    "end": 1213,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1204,
                      "end": 1213,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1204,
                        "end": 1213,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1241,
                  "end": 1291,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1261,
                    "name": "C4_v22_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1275,
                    "end": 1290,
                    "callee": {
                      "type": "Identifier",
                      "start": 1279,
                      "end": 1288,
                      "name": "C1_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1261,
                    "end": 1272,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1263,
                      "end": 1272,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1263,
                        "end": 1272,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1300,
                  "end": 1354,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1322,
                    "name": "C4_v23_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1337,
                    "end": 1353,
                    "callee": {
                      "type": "Identifier",
                      "start": 1341,
                      "end": 1351,
                      "name": "C2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1322,
                    "end": 1334,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1324,
                      "end": 1334,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1324,
                        "end": 1334,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1363,
                  "end": 1415,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1370,
                    "end": 1383,
                    "name": "C4_v24_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1398,
                    "end": 1414,
                    "callee": {
                      "type": "Identifier",
                      "start": 1402,
                      "end": 1412,
                      "name": "C2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1383,
                    "end": 1395,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1385,
                      "end": 1395,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1385,
                        "end": 1395,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
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
          {
            "type": "VariableDeclaration",
            "start": 1427,
            "end": 1456,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1431,
                "end": 1455,
                "id": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1455,
                  "name": "m1_v1_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1444,
                    "end": 1455,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1446,
                      "end": 1455,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1446,
                        "end": 1455,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1461,
            "end": 1496,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1468,
              "end": 1496,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1472,
                  "end": 1495,
                  "id": {
                    "type": "Identifier",
                    "start": 1472,
                    "end": 1495,
                    "name": "m1_v2_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1484,
                      "end": 1495,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1486,
                        "end": 1495,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1486,
                          "end": 1495,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
            "start": 1501,
            "end": 1531,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1505,
                "end": 1530,
                "id": {
                  "type": "Identifier",
                  "start": 1505,
                  "end": 1530,
                  "name": "m1_v3_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1518,
                    "end": 1530,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1520,
                      "end": 1530,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1520,
                        "end": 1530,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1536,
            "end": 1572,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1543,
              "end": 1572,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1547,
                  "end": 1571,
                  "id": {
                    "type": "Identifier",
                    "start": 1547,
                    "end": 1571,
                    "name": "m1_v4_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1559,
                      "end": 1571,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1561,
                        "end": 1571,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1561,
                          "end": 1571,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
            "start": 1587,
            "end": 1624,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1591,
                "end": 1623,
                "id": {
                  "type": "Identifier",
                  "start": 1591,
                  "end": 1605,
                  "name": "m1_v11_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1608,
                  "end": 1623,
                  "callee": {
                    "type": "Identifier",
                    "start": 1612,
                    "end": 1621,
                    "name": "C1_public",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "start": 1629,
            "end": 1672,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1636,
              "end": 1672,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1640,
                  "end": 1671,
                  "id": {
                    "type": "Identifier",
                    "start": 1640,
                    "end": 1653,
                    "name": "m1_v12_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1656,
                    "end": 1671,
                    "callee": {
                      "type": "Identifier",
                      "start": 1660,
                      "end": 1669,
                      "name": "C1_public",
                      "typeAnnotation": null,
                      "decorators": [],
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
            "start": 1677,
            "end": 1715,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1681,
                "end": 1714,
                "id": {
                  "type": "Identifier",
                  "start": 1681,
                  "end": 1695,
                  "name": "m1_v13_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1698,
                  "end": 1714,
                  "callee": {
                    "type": "Identifier",
                    "start": 1702,
                    "end": 1712,
                    "name": "C2_private",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "start": 1720,
            "end": 1764,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1727,
              "end": 1764,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1731,
                  "end": 1763,
                  "id": {
                    "type": "Identifier",
                    "start": 1731,
                    "end": 1744,
                    "name": "m1_v14_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1747,
                    "end": 1763,
                    "callee": {
                      "type": "Identifier",
                      "start": 1751,
                      "end": 1761,
                      "name": "C2_private",
                      "typeAnnotation": null,
                      "decorators": [],
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
            "start": 1779,
            "end": 1827,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1783,
                "end": 1826,
                "id": {
                  "type": "Identifier",
                  "start": 1783,
                  "end": 1808,
                  "name": "m1_v21_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1797,
                    "end": 1808,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1799,
                      "end": 1808,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1799,
                        "end": 1808,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1811,
                  "end": 1826,
                  "callee": {
                    "type": "Identifier",
                    "start": 1815,
                    "end": 1824,
                    "name": "C1_public",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "start": 1832,
            "end": 1886,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1839,
              "end": 1886,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1843,
                  "end": 1885,
                  "id": {
                    "type": "Identifier",
                    "start": 1843,
                    "end": 1867,
                    "name": "m1_v22_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1856,
                      "end": 1867,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1858,
                        "end": 1867,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1858,
                          "end": 1867,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1870,
                    "end": 1885,
                    "callee": {
                      "type": "Identifier",
                      "start": 1874,
                      "end": 1883,
                      "name": "C1_public",
                      "typeAnnotation": null,
                      "decorators": [],
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
            "start": 1891,
            "end": 1941,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1895,
                "end": 1940,
                "id": {
                  "type": "Identifier",
                  "start": 1895,
                  "end": 1921,
                  "name": "m1_v23_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1909,
                    "end": 1921,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1911,
                      "end": 1921,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1911,
                        "end": 1921,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1924,
                  "end": 1940,
                  "callee": {
                    "type": "Identifier",
                    "start": 1928,
                    "end": 1938,
                    "name": "C2_private",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "start": 1946,
            "end": 2002,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1953,
              "end": 2002,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1957,
                  "end": 2001,
                  "id": {
                    "type": "Identifier",
                    "start": 1957,
                    "end": 1982,
                    "name": "m1_v24_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1970,
                      "end": 1982,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1972,
                        "end": 1982,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1972,
                          "end": 1982,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1985,
                    "end": 2001,
                    "callee": {
                      "type": "Identifier",
                      "start": 1989,
                      "end": 1999,
                      "name": "C2_private",
                      "typeAnnotation": null,
                      "decorators": [],
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2015,
      "end": 2063,
      "id": {
        "type": "Identifier",
        "start": 2021,
        "end": 2034,
        "name": "glo_C1_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2035,
        "end": 2063,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2041,
            "end": 2061,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2049,
              "end": 2051,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2051,
              "end": 2061,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2054,
                "end": 2061,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
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
    {
      "type": "ClassDeclaration",
      "start": 2065,
      "end": 2422,
      "id": {
        "type": "Identifier",
        "start": 2071,
        "end": 2084,
        "name": "glo_C3_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2085,
        "end": 2422,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2091,
            "end": 2132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2099,
              "end": 2116,
              "name": "glo_C3_v1_private",
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
              "start": 2116,
              "end": 2131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2118,
                "end": 2131,
                "typeName": {
                  "type": "Identifier",
                  "start": 2118,
                  "end": 2131,
                  "name": "glo_C1_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 2137,
            "end": 2176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2144,
              "end": 2160,
              "name": "glo_C3_v2_public",
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
              "start": 2160,
              "end": 2175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2162,
                "end": 2175,
                "typeName": {
                  "type": "Identifier",
                  "start": 2162,
                  "end": 2175,
                  "name": "glo_C1_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 2182,
            "end": 2231,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2190,
              "end": 2208,
              "name": "glo_C3_v11_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 2211,
              "end": 2230,
              "callee": {
                "type": "Identifier",
                "start": 2215,
                "end": 2228,
                "name": "glo_C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 2236,
            "end": 2283,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2243,
              "end": 2260,
              "name": "glo_C3_v12_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 2263,
              "end": 2282,
              "callee": {
                "type": "Identifier",
                "start": 2267,
                "end": 2280,
                "name": "glo_C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 2289,
            "end": 2353,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2297,
              "end": 2315,
              "name": "glo_C3_v21_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 2333,
              "end": 2352,
              "callee": {
                "type": "Identifier",
                "start": 2337,
                "end": 2350,
                "name": "glo_C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2315,
              "end": 2330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2317,
                "end": 2330,
                "typeName": {
                  "type": "Identifier",
                  "start": 2317,
                  "end": 2330,
                  "name": "glo_C1_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 2358,
            "end": 2420,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2365,
              "end": 2382,
              "name": "glo_C3_v22_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 2400,
              "end": 2419,
              "callee": {
                "type": "Identifier",
                "start": 2404,
                "end": 2417,
                "name": "glo_C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2382,
              "end": 2397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2384,
                "end": 2397,
                "typeName": {
                  "type": "Identifier",
                  "start": 2384,
                  "end": 2397,
                  "name": "glo_C1_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
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
    {
      "type": "VariableDeclaration",
      "start": 2425,
      "end": 2458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2429,
          "end": 2457,
          "id": {
            "type": "Identifier",
            "start": 2429,
            "end": 2457,
            "name": "glo_v2_public",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2442,
              "end": 2457,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2444,
                "end": 2457,
                "typeName": {
                  "type": "Identifier",
                  "start": 2444,
                  "end": 2457,
                  "name": "glo_C1_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2459,
      "end": 2500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2463,
          "end": 2499,
          "id": {
            "type": "Identifier",
            "start": 2463,
            "end": 2477,
            "name": "glo_v12_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2480,
            "end": 2499,
            "callee": {
              "type": "Identifier",
              "start": 2484,
              "end": 2497,
              "name": "glo_C1_public",
              "typeAnnotation": null,
              "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2501,
      "end": 2557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2505,
          "end": 2556,
          "id": {
            "type": "Identifier",
            "start": 2505,
            "end": 2534,
            "name": "glo_v22_public",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2519,
              "end": 2534,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2521,
                "end": 2534,
                "typeName": {
                  "type": "Identifier",
                  "start": 2521,
                  "end": 2534,
                  "name": "glo_C1_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2537,
            "end": 2556,
            "callee": {
              "type": "Identifier",
              "start": 2541,
              "end": 2554,
              "name": "glo_C1_public",
              "typeAnnotation": null,
              "decorators": [],
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
