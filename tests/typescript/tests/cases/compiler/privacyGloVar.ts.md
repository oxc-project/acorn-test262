__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2557,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 2013,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 38,
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
                "start": 39,
                "end": 79,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 49,
                    "end": 73,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 59,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 59,
                      "end": 73,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 62,
                        "end": 73,
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
            "start": 85,
            "end": 109,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 101,
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
              "start": 102,
              "end": 109,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 115,
            "end": 782,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 122,
              "end": 782,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 128,
                "end": 137,
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
                "start": 138,
                "end": 782,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 148,
                    "end": 181,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 169,
                      "decorators": [],
                      "name": "C3_v1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                    "start": 190,
                    "end": 221,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 209,
                      "decorators": [],
                      "name": "C3_v2_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                    "start": 230,
                    "end": 264,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 251,
                      "decorators": [],
                      "name": "C3_v3_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                    "start": 273,
                    "end": 305,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 292,
                      "decorators": [],
                      "name": "C3_v4_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                    "start": 324,
                    "end": 365,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 346,
                      "decorators": [],
                      "name": "C3_v11_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "start": 349,
                      "end": 364,
                      "callee": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 362,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
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
                    "start": 374,
                    "end": 413,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 394,
                      "decorators": [],
                      "name": "C3_v12_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "start": 397,
                      "end": 412,
                      "callee": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 410,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
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
                    "start": 422,
                    "end": 464,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 444,
                      "decorators": [],
                      "name": "C3_v13_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "start": 447,
                      "end": 463,
                      "callee": {
                        "type": "Identifier",
                        "start": 451,
                        "end": 461,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
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
                    "start": 473,
                    "end": 513,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 493,
                      "decorators": [],
                      "name": "C3_v14_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "start": 496,
                      "end": 512,
                      "callee": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 510,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
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
                    "start": 532,
                    "end": 584,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 554,
                      "decorators": [],
                      "name": "C3_v21_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 568,
                      "end": 583,
                      "callee": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 581,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
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
                    "start": 593,
                    "end": 643,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 600,
                      "end": 613,
                      "decorators": [],
                      "name": "C3_v22_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 627,
                      "end": 642,
                      "callee": {
                        "type": "Identifier",
                        "start": 631,
                        "end": 640,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
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
                    "start": 652,
                    "end": 706,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 674,
                      "decorators": [],
                      "name": "C3_v23_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 689,
                      "end": 705,
                      "callee": {
                        "type": "Identifier",
                        "start": 693,
                        "end": 703,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
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
                    "start": 715,
                    "end": 767,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 722,
                      "end": 735,
                      "decorators": [],
                      "name": "C3_v24_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 750,
                      "end": 766,
                      "callee": {
                        "type": "Identifier",
                        "start": 754,
                        "end": 764,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 788,
            "end": 1421,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 794,
              "end": 803,
              "decorators": [],
              "name": "C4_public",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 804,
              "end": 1421,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 814,
                  "end": 847,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 822,
                    "end": 835,
                    "decorators": [],
                    "name": "C4_v1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "start": 856,
                  "end": 887,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 875,
                    "decorators": [],
                    "name": "C4_v2_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "start": 896,
                  "end": 930,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 904,
                    "end": 917,
                    "decorators": [],
                    "name": "C4_v3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "start": 939,
                  "end": 971,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 946,
                    "end": 958,
                    "decorators": [],
                    "name": "C4_v4_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "start": 981,
                  "end": 1022,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 989,
                    "end": 1003,
                    "decorators": [],
                    "name": "C4_v11_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "start": 1006,
                    "end": 1021,
                    "callee": {
                      "type": "Identifier",
                      "start": 1010,
                      "end": 1019,
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
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
                  "start": 1031,
                  "end": 1070,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1038,
                    "end": 1051,
                    "decorators": [],
                    "name": "C4_v12_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "start": 1054,
                    "end": 1069,
                    "callee": {
                      "type": "Identifier",
                      "start": 1058,
                      "end": 1067,
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
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
                  "start": 1079,
                  "end": 1121,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1087,
                    "end": 1101,
                    "decorators": [],
                    "name": "C4_v13_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "start": 1104,
                    "end": 1120,
                    "callee": {
                      "type": "Identifier",
                      "start": 1108,
                      "end": 1118,
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
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
                  "start": 1130,
                  "end": 1170,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1150,
                    "decorators": [],
                    "name": "C4_v14_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "start": 1153,
                    "end": 1169,
                    "callee": {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1167,
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
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
                  "start": 1180,
                  "end": 1232,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1188,
                    "end": 1202,
                    "decorators": [],
                    "name": "C4_v21_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1216,
                    "end": 1231,
                    "callee": {
                      "type": "Identifier",
                      "start": 1220,
                      "end": 1229,
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
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
                  "start": 1241,
                  "end": 1291,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1261,
                    "decorators": [],
                    "name": "C4_v22_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1275,
                    "end": 1290,
                    "callee": {
                      "type": "Identifier",
                      "start": 1279,
                      "end": 1288,
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
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
                  "start": 1300,
                  "end": 1354,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1322,
                    "decorators": [],
                    "name": "C4_v23_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1337,
                    "end": 1353,
                    "callee": {
                      "type": "Identifier",
                      "start": 1341,
                      "end": 1351,
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
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
                  "start": 1363,
                  "end": 1415,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1370,
                    "end": 1383,
                    "decorators": [],
                    "name": "C4_v24_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 1398,
                    "end": 1414,
                    "callee": {
                      "type": "Identifier",
                      "start": 1402,
                      "end": 1412,
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
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
            "type": "VariableDeclaration",
            "start": 1427,
            "end": 1456,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1431,
                "end": 1455,
                "id": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1455,
                  "decorators": [],
                  "name": "m1_v1_private",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C1_public",
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
            "type": "ExportNamedDeclaration",
            "start": 1461,
            "end": 1496,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1468,
              "end": 1496,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1472,
                  "end": 1495,
                  "id": {
                    "type": "Identifier",
                    "start": 1472,
                    "end": 1495,
                    "decorators": [],
                    "name": "m1_v2_public",
                    "optional": false,
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
                          "decorators": [],
                          "name": "C1_public",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 1501,
            "end": 1531,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1505,
                "end": 1530,
                "id": {
                  "type": "Identifier",
                  "start": 1505,
                  "end": 1530,
                  "decorators": [],
                  "name": "m1_v3_private",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C2_private",
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
            "type": "ExportNamedDeclaration",
            "start": 1536,
            "end": 1572,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1543,
              "end": 1572,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1547,
                  "end": 1571,
                  "id": {
                    "type": "Identifier",
                    "start": 1547,
                    "end": 1571,
                    "decorators": [],
                    "name": "m1_v4_public",
                    "optional": false,
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
                          "decorators": [],
                          "name": "C2_private",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 1587,
            "end": 1624,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1591,
                "end": 1623,
                "id": {
                  "type": "Identifier",
                  "start": 1591,
                  "end": 1605,
                  "decorators": [],
                  "name": "m1_v11_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1608,
                  "end": 1623,
                  "callee": {
                    "type": "Identifier",
                    "start": 1612,
                    "end": 1621,
                    "decorators": [],
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null
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
            "start": 1629,
            "end": 1672,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1636,
              "end": 1672,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1640,
                  "end": 1671,
                  "id": {
                    "type": "Identifier",
                    "start": 1640,
                    "end": 1653,
                    "decorators": [],
                    "name": "m1_v12_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1656,
                    "end": 1671,
                    "callee": {
                      "type": "Identifier",
                      "start": 1660,
                      "end": 1669,
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 1677,
            "end": 1715,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1681,
                "end": 1714,
                "id": {
                  "type": "Identifier",
                  "start": 1681,
                  "end": 1695,
                  "decorators": [],
                  "name": "m1_v13_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1698,
                  "end": 1714,
                  "callee": {
                    "type": "Identifier",
                    "start": 1702,
                    "end": 1712,
                    "decorators": [],
                    "name": "C2_private",
                    "optional": false,
                    "typeAnnotation": null
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
            "start": 1720,
            "end": 1764,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1727,
              "end": 1764,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1731,
                  "end": 1763,
                  "id": {
                    "type": "Identifier",
                    "start": 1731,
                    "end": 1744,
                    "decorators": [],
                    "name": "m1_v14_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1747,
                    "end": 1763,
                    "callee": {
                      "type": "Identifier",
                      "start": 1751,
                      "end": 1761,
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 1779,
            "end": 1827,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1783,
                "end": 1826,
                "id": {
                  "type": "Identifier",
                  "start": 1783,
                  "end": 1808,
                  "decorators": [],
                  "name": "m1_v21_private",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1811,
                  "end": 1826,
                  "callee": {
                    "type": "Identifier",
                    "start": 1815,
                    "end": 1824,
                    "decorators": [],
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null
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
            "start": 1832,
            "end": 1886,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1839,
              "end": 1886,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1843,
                  "end": 1885,
                  "id": {
                    "type": "Identifier",
                    "start": 1843,
                    "end": 1867,
                    "decorators": [],
                    "name": "m1_v22_public",
                    "optional": false,
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
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1870,
                    "end": 1885,
                    "callee": {
                      "type": "Identifier",
                      "start": 1874,
                      "end": 1883,
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 1891,
            "end": 1941,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1895,
                "end": 1940,
                "id": {
                  "type": "Identifier",
                  "start": 1895,
                  "end": 1921,
                  "decorators": [],
                  "name": "m1_v23_private",
                  "optional": false,
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
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1924,
                  "end": 1940,
                  "callee": {
                    "type": "Identifier",
                    "start": 1928,
                    "end": 1938,
                    "decorators": [],
                    "name": "C2_private",
                    "optional": false,
                    "typeAnnotation": null
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
            "start": 1946,
            "end": 2002,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1953,
              "end": 2002,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1957,
                  "end": 2001,
                  "id": {
                    "type": "Identifier",
                    "start": 1957,
                    "end": 1982,
                    "decorators": [],
                    "name": "m1_v24_public",
                    "optional": false,
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
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1985,
                    "end": 2001,
                    "callee": {
                      "type": "Identifier",
                      "start": 1989,
                      "end": 1999,
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2021,
        "end": 2034,
        "decorators": [],
        "name": "glo_C1_public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2035,
        "end": 2063,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2041,
            "end": 2061,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2049,
              "end": 2051,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2051,
              "end": 2061,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2054,
                "end": 2061,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2065,
      "end": 2422,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2071,
        "end": 2084,
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2085,
        "end": 2422,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2091,
            "end": 2132,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2099,
              "end": 2116,
              "decorators": [],
              "name": "glo_C3_v1_private",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "start": 2137,
            "end": 2176,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2144,
              "end": 2160,
              "decorators": [],
              "name": "glo_C3_v2_public",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "start": 2182,
            "end": 2231,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2190,
              "end": 2208,
              "decorators": [],
              "name": "glo_C3_v11_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 2211,
              "end": 2230,
              "callee": {
                "type": "Identifier",
                "start": 2215,
                "end": 2228,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
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
            "start": 2236,
            "end": 2283,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2243,
              "end": 2260,
              "decorators": [],
              "name": "glo_C3_v12_public",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 2263,
              "end": 2282,
              "callee": {
                "type": "Identifier",
                "start": 2267,
                "end": 2280,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
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
            "start": 2289,
            "end": 2353,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2297,
              "end": 2315,
              "decorators": [],
              "name": "glo_C3_v21_private",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 2333,
              "end": 2352,
              "callee": {
                "type": "Identifier",
                "start": 2337,
                "end": 2350,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
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
            "start": 2358,
            "end": 2420,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2365,
              "end": 2382,
              "decorators": [],
              "name": "glo_C3_v22_public",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 2400,
              "end": 2419,
              "callee": {
                "type": "Identifier",
                "start": 2404,
                "end": 2417,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
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
      "type": "VariableDeclaration",
      "start": 2425,
      "end": 2458,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2429,
          "end": 2457,
          "id": {
            "type": "Identifier",
            "start": 2429,
            "end": 2457,
            "decorators": [],
            "name": "glo_v2_public",
            "optional": false,
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
                  "decorators": [],
                  "name": "glo_C1_public",
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
      "type": "VariableDeclaration",
      "start": 2459,
      "end": 2500,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2463,
          "end": 2499,
          "id": {
            "type": "Identifier",
            "start": 2463,
            "end": 2477,
            "decorators": [],
            "name": "glo_v12_public",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2480,
            "end": 2499,
            "callee": {
              "type": "Identifier",
              "start": 2484,
              "end": 2497,
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null
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
      "start": 2501,
      "end": 2557,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2505,
          "end": 2556,
          "id": {
            "type": "Identifier",
            "start": 2505,
            "end": 2534,
            "decorators": [],
            "name": "glo_v22_public",
            "optional": false,
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
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 2537,
            "end": 2556,
            "callee": {
              "type": "Identifier",
              "start": 2541,
              "end": 2554,
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
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
