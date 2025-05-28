__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 937,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 35,
        "decorators": [],
        "name": "SubGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 49,
              "end": 52,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 51,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 56,
        "end": 57,
        "typeName": {
          "type": "Identifier",
          "start": 56,
          "end": 57,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 60,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 70,
        "decorators": [],
        "name": "IsSub",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 81,
              "end": 86,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 81,
                "end": 84
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 98,
              "end": 103,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 98,
                "end": 101
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 107,
        "end": 178,
        "checkType": {
          "type": "TSTypeReference",
          "start": 107,
          "end": 108,
          "typeName": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 117,
          "end": 166,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 118,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 149,
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 129,
                  "decorators": [],
                  "name": "SubGuard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 129,
                  "end": 149,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 130,
                      "end": 139,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 130,
                        "end": 131,
                        "typeName": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "start": 132,
                        "end": 138
                      }
                    },
                    {
                      "type": "TSInferType",
                      "start": 141,
                      "end": 148,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 147,
                        "end": 148,
                        "name": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 148,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 151,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSRestType",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 160,
                "end": 165,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 160,
                  "end": 163
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 169,
          "end": 170,
          "typeName": {
            "type": "Identifier",
            "start": 169,
            "end": 170,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 173,
          "end": 178
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 181,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 188,
        "decorators": [],
        "name": "E0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 191,
        "end": 221,
        "typeName": {
          "type": "Identifier",
          "start": 191,
          "end": 196,
          "decorators": [],
          "name": "IsSub",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 196,
          "end": 221,
          "params": [
            {
              "type": "TSTupleType",
              "start": 197,
              "end": 209,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 198,
                  "end": 199,
                  "literal": {
                    "type": "Literal",
                    "start": 198,
                    "end": 199,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 201,
                  "end": 202,
                  "literal": {
                    "type": "Literal",
                    "start": 201,
                    "end": 202,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 204,
                  "end": 205,
                  "literal": {
                    "type": "Literal",
                    "start": 204,
                    "end": 205,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 207,
                  "end": 208,
                  "literal": {
                    "type": "Literal",
                    "start": 207,
                    "end": 208,
                    "value": 4,
                    "raw": "4"
                  }
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 211,
              "end": 220,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 212,
                  "end": 213,
                  "literal": {
                    "type": "Literal",
                    "start": 212,
                    "end": 213,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 215,
                  "end": 216,
                  "literal": {
                    "type": "Literal",
                    "start": 215,
                    "end": 216,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 218,
                  "end": 219,
                  "literal": {
                    "type": "Literal",
                    "start": 218,
                    "end": 219,
                    "value": 4,
                    "raw": "4"
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 244,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 251,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 254,
        "end": 318,
        "checkType": {
          "type": "TSTupleType",
          "start": 254,
          "end": 266,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 255,
              "end": 256,
              "literal": {
                "type": "Literal",
                "start": 255,
                "end": 256,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 258,
              "end": 259,
              "literal": {
                "type": "Literal",
                "start": 258,
                "end": 259,
                "value": 2,
                "raw": "2"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 261,
              "end": 262,
              "literal": {
                "type": "Literal",
                "start": 261,
                "end": 262,
                "value": 3,
                "raw": "3"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 264,
              "end": 265,
              "literal": {
                "type": "Literal",
                "start": 264,
                "end": 265,
                "value": 4,
                "raw": "4"
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 275,
          "end": 306,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 276,
              "end": 286,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 279,
                "end": 286,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 285,
                  "end": 286,
                  "name": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 286,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            },
            {
              "type": "TSLiteralType",
              "start": 288,
              "end": 289,
              "literal": {
                "type": "Literal",
                "start": 288,
                "end": 289,
                "value": 2,
                "raw": "2"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 291,
              "end": 292,
              "literal": {
                "type": "Literal",
                "start": 291,
                "end": 292,
                "value": 3,
                "raw": "3"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 294,
              "end": 295,
              "literal": {
                "type": "Literal",
                "start": 294,
                "end": 295,
                "value": 4,
                "raw": "4"
              }
            },
            {
              "type": "TSRestType",
              "start": 297,
              "end": 305,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 300,
                "end": 305,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 300,
                  "end": 303
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 309,
          "end": 310,
          "typeName": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 313,
          "end": 318
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 357,
      "end": 398,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 371,
        "decorators": [],
        "name": "Constrain",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 371,
        "end": 387,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 383,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 382,
              "end": 383,
              "typeName": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 385,
            "end": 386,
            "name": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 390,
        "end": 397
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 400,
      "end": 458,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 408,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 408,
        "end": 411,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 409,
            "end": 410,
            "name": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 414,
        "end": 457,
        "checkType": {
          "type": "TSTypeReference",
          "start": 414,
          "end": 415,
          "typeName": {
            "type": "Identifier",
            "start": 414,
            "end": 415,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 424,
          "end": 445,
          "typeName": {
            "type": "Identifier",
            "start": 424,
            "end": 433,
            "decorators": [],
            "name": "Constrain",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 433,
            "end": 445,
            "params": [
              {
                "type": "TSInferType",
                "start": 434,
                "end": 441,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 440,
                  "end": 441,
                  "name": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 443,
                "end": 444,
                "typeName": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 444,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 448,
          "end": 449,
          "typeName": {
            "type": "Identifier",
            "start": 448,
            "end": 449,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 452,
          "end": 457
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 460,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 467,
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 470,
        "end": 481,
        "typeName": {
          "type": "Identifier",
          "start": 470,
          "end": 473,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 473,
          "end": 481,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 474,
              "end": 480
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 576,
      "end": 651,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 591,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 591,
        "end": 594,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 592,
            "end": 593,
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 595,
        "end": 651,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 599,
            "end": 649,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 609,
              "end": 613,
              "decorators": [],
              "name": "fake",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 613,
              "end": 649,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 615,
                "end": 618,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 617,
                  "end": 618,
                  "typeName": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 618,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 619,
                "end": 649,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 625,
                    "end": 645,
                    "argument": {
                      "type": "NewExpression",
                      "start": 631,
                      "end": 644,
                      "callee": {
                        "type": "Identifier",
                        "start": 635,
                        "end": 640,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 641,
                          "end": 643,
                          "value": "",
                          "raw": "\"\""
                        }
                      ]
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
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 653,
      "end": 708,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 664,
        "decorators": [],
        "name": "Klass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 664,
        "end": 667,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 665,
            "end": 666,
            "name": {
              "type": "Identifier",
              "start": 665,
              "end": 666,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 676,
        "end": 685,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 685,
        "end": 688,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 686,
            "end": 687,
            "typeName": {
              "type": "Identifier",
              "start": 686,
              "end": 687,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 689,
        "end": 708,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 693,
            "end": 706,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 693,
              "end": 698,
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 701,
              "end": 705,
              "value": true,
              "raw": "true"
            },
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 710,
      "end": 768,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 726,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 726,
        "end": 753,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 727,
            "end": 728,
            "name": {
              "type": "Identifier",
              "start": 727,
              "end": 728,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 730,
            "end": 752,
            "name": {
              "type": "Identifier",
              "start": 730,
              "end": 731,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 740,
              "end": 752,
              "typeName": {
                "type": "Identifier",
                "start": 740,
                "end": 749,
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 749,
                "end": 752,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 750,
                    "end": 751,
                    "typeName": {
                      "type": "Identifier",
                      "start": 750,
                      "end": 751,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 756,
        "end": 767,
        "abstract": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 763,
          "end": 767,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 766,
            "end": 767,
            "typeName": {
              "type": "Identifier",
              "start": 766,
              "end": 767,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 769,
      "end": 838,
      "id": {
        "type": "Identifier",
        "start": 774,
        "end": 783,
        "decorators": [],
        "name": "inferTest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 783,
        "end": 789,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 784,
            "end": 785,
            "name": {
              "type": "Identifier",
              "start": 784,
              "end": 785,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 787,
            "end": 788,
            "name": {
              "type": "Identifier",
              "start": 787,
              "end": 788,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 792,
        "end": 837,
        "checkType": {
          "type": "TSTypeReference",
          "start": 792,
          "end": 793,
          "typeName": {
            "type": "Identifier",
            "start": 792,
            "end": 793,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 802,
          "end": 825,
          "typeName": {
            "type": "Identifier",
            "start": 802,
            "end": 813,
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 813,
            "end": 825,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 814,
                "end": 815,
                "typeName": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 815,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSInferType",
                "start": 817,
                "end": 824,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 823,
                  "end": 824,
                  "name": {
                    "type": "Identifier",
                    "start": 823,
                    "end": 824,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 828,
          "end": 829,
          "typeName": {
            "type": "Identifier",
            "start": 828,
            "end": 829,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 832,
          "end": 837
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 840,
      "end": 903,
      "id": {
        "type": "Identifier",
        "start": 845,
        "end": 846,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 849,
        "end": 902,
        "typeName": {
          "type": "Identifier",
          "start": 849,
          "end": 858,
          "decorators": [],
          "name": "inferTest",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 858,
          "end": 902,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 859,
              "end": 865
            },
            {
              "type": "TSTypeReference",
              "start": 867,
              "end": 901,
              "typeName": {
                "type": "Identifier",
                "start": 867,
                "end": 878,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 878,
                "end": 901,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 879,
                    "end": 885
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 887,
                    "end": 900,
                    "typeName": {
                      "type": "Identifier",
                      "start": 887,
                      "end": 892,
                      "decorators": [],
                      "name": "Klass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 892,
                      "end": 900,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 893,
                          "end": 899
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 905,
      "end": 922,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 917,
          "end": 921,
          "id": {
            "type": "Identifier",
            "start": 917,
            "end": 921,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 918,
              "end": 921,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 920,
                "end": 921,
                "typeName": {
                  "type": "Identifier",
                  "start": 920,
                  "end": 921,
                  "decorators": [],
                  "name": "U",
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 923,
      "end": 931,
      "expression": {
        "type": "MemberExpression",
        "start": 923,
        "end": 930,
        "object": {
          "type": "Identifier",
          "start": 923,
          "end": 924,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 925,
          "end": 930,
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
