__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1468,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 70,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 12,
            "end": 36,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 14,
                "end": 24,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 18,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 18,
                  "end": 23,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 20,
                    "end": 23,
                    "literal": {
                      "type": "Literal",
                      "start": 20,
                      "end": 23,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 25,
                "end": 34,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 39,
            "end": 52,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 41,
                "end": 50,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 45,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 47,
                    "end": 50,
                    "literal": {
                      "type": "Literal",
                      "start": 47,
                      "end": 50,
                      "value": "b",
                      "raw": "'b'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 55,
            "end": 70,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 57,
                "end": 68,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 61,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 63,
                    "end": 68
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "f1",
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
          "start": 85,
          "end": 94,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 94,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 94,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 94,
                "decorators": [],
                "name": "Foo1",
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
        "start": 96,
        "end": 148,
        "body": [
          {
            "type": "IfStatement",
            "start": 102,
            "end": 146,
            "test": {
              "type": "BinaryExpression",
              "start": 106,
              "end": 122,
              "left": {
                "type": "MemberExpression",
                "start": 106,
                "end": 114,
                "object": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 109,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 119,
                "end": 122,
                "value": "a",
                "raw": "'a'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 124,
              "end": 146,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 134,
                  "end": 140,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 134,
                    "end": 139,
                    "object": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 137,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 150,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 159,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 162,
        "end": 223,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 162,
            "end": 187,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 164,
                "end": 175,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 168,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 169,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 171,
                    "end": 174,
                    "literal": {
                      "type": "Literal",
                      "start": 171,
                      "end": 174,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 176,
                "end": 185,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 179,
                    "end": 185
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 190,
            "end": 204,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 192,
                "end": 202,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 196,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 197,
                  "end": 202,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 199,
                    "end": 202,
                    "literal": {
                      "type": "Literal",
                      "start": 199,
                      "end": 202,
                      "value": "b",
                      "raw": "'b'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 207,
            "end": 223,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 209,
                "end": 221,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 214,
                  "end": 221,
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 216,
                    "end": 221
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 237,
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
          "start": 238,
          "end": 247,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 241,
            "end": 247,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 243,
              "end": 247,
              "typeName": {
                "type": "Identifier",
                "start": 243,
                "end": 247,
                "decorators": [],
                "name": "Foo2",
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
        "start": 249,
        "end": 301,
        "body": [
          {
            "type": "IfStatement",
            "start": 255,
            "end": 299,
            "test": {
              "type": "BinaryExpression",
              "start": 259,
              "end": 275,
              "left": {
                "type": "MemberExpression",
                "start": 259,
                "end": 267,
                "object": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 262,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 267,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 272,
                "end": 275,
                "value": "a",
                "raw": "'a'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 277,
              "end": 299,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 287,
                  "end": 293,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 287,
                    "end": 292,
                    "object": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 290,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 325,
      "end": 472,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 332,
        "end": 472,
        "id": {
          "type": "Identifier",
          "start": 342,
          "end": 365,
          "decorators": [],
          "name": "GatewayPayloadStructure",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 365,
          "end": 424,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 366,
              "end": 389,
              "name": {
                "type": "Identifier",
                "start": 366,
                "end": 367,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 376,
                "end": 389,
                "typeName": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 389,
                  "decorators": [],
                  "name": "GatewayOpcode",
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
              "start": 391,
              "end": 420,
              "name": {
                "type": "Identifier",
                "start": 391,
                "end": 392,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 401,
                "end": 420,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 407,
                  "end": 420,
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 420,
                    "decorators": [],
                    "name": "GatewayEvents",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 422,
              "end": 423,
              "name": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "D",
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
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 425,
          "end": 472,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 431,
              "end": 436,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 431,
                "end": 433,
                "decorators": [],
                "name": "op",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 433,
                "end": 436,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 435,
                  "end": 436,
                  "typeName": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 436,
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 441,
              "end": 445,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 441,
                "end": 442,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 442,
                "end": 445,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 444,
                  "end": 445,
                  "typeName": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 450,
              "end": 455,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 450,
                "end": 451,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 452,
                "end": 455,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 454,
                  "end": 455,
                  "typeName": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 460,
              "end": 470,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 462,
                "end": 470,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 464,
                  "end": 470
                }
              },
              "accessibility": null,
              "static": false
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
      "type": "ExportNamedDeclaration",
      "start": 474,
      "end": 818,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 481,
        "end": 818,
        "id": {
          "type": "Identifier",
          "start": 486,
          "end": 500,
          "decorators": [],
          "name": "GatewayPayload",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 503,
          "end": 818,
          "objectType": {
            "type": "TSMappedType",
            "start": 503,
            "end": 803,
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 511,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 515,
              "end": 528,
              "typeName": {
                "type": "Identifier",
                "start": 515,
                "end": 528,
                "decorators": [],
                "name": "GatewayOpcode",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 531,
              "end": 801,
              "checkType": {
                "type": "TSTypeReference",
                "start": 531,
                "end": 532,
                "typeName": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 532,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 541,
                "end": 563,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 541,
                  "end": 563,
                  "left": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 554,
                    "decorators": [],
                    "name": "GatewayOpcode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 563,
                    "decorators": [],
                    "name": "DISPATCH",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 570,
                "end": 703,
                "objectType": {
                  "type": "TSMappedType",
                  "start": 570,
                  "end": 682,
                  "key": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 586,
                    "end": 605,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 592,
                      "end": 605,
                      "typeName": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 605,
                        "decorators": [],
                        "name": "GatewayEvents",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 608,
                    "end": 676,
                    "typeName": {
                      "type": "Identifier",
                      "start": 608,
                      "end": 631,
                      "decorators": [],
                      "name": "GatewayPayloadStructure",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 631,
                      "end": 676,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 632,
                          "end": 654,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 632,
                            "end": 654,
                            "left": {
                              "type": "Identifier",
                              "start": 632,
                              "end": 645,
                              "decorators": [],
                              "name": "GatewayOpcode",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 646,
                              "end": 654,
                              "decorators": [],
                              "name": "DISPATCH",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 656,
                          "end": 657,
                          "typeName": {
                            "type": "Identifier",
                            "start": 656,
                            "end": 657,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSIndexedAccessType",
                          "start": 659,
                          "end": 675,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 659,
                            "end": 672,
                            "typeName": {
                              "type": "Identifier",
                              "start": 659,
                              "end": 672,
                              "decorators": [],
                              "name": "GatewayEvents",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 673,
                            "end": 674,
                            "typeName": {
                              "type": "Identifier",
                              "start": 673,
                              "end": 674,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  },
                  "optional": false,
                  "readonly": null
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 683,
                  "end": 702,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 689,
                    "end": 702,
                    "typeName": {
                      "type": "Identifier",
                      "start": 689,
                      "end": 702,
                      "decorators": [],
                      "name": "GatewayEvents",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 710,
                "end": 801,
                "typeName": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 733,
                  "decorators": [],
                  "name": "GatewayPayloadStructure",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 733,
                  "end": 801,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 734,
                      "end": 735,
                      "typeName": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 735,
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 737,
                      "end": 742
                    },
                    {
                      "type": "TSConditionalType",
                      "start": 744,
                      "end": 800,
                      "checkType": {
                        "type": "TSTypeReference",
                        "start": 744,
                        "end": 745,
                        "typeName": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 745,
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "extendsType": {
                        "type": "TSTypeOperator",
                        "start": 754,
                        "end": 773,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 760,
                          "end": 773,
                          "typeName": {
                            "type": "Identifier",
                            "start": 760,
                            "end": 773,
                            "decorators": [],
                            "name": "GatewayParams",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "trueType": {
                        "type": "TSIndexedAccessType",
                        "start": 776,
                        "end": 792,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 776,
                          "end": 789,
                          "typeName": {
                            "type": "Identifier",
                            "start": 776,
                            "end": 789,
                            "decorators": [],
                            "name": "GatewayParams",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 790,
                          "end": 791,
                          "typeName": {
                            "type": "Identifier",
                            "start": 790,
                            "end": 791,
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 795,
                        "end": 800
                      }
                    }
                  ]
                }
              }
            },
            "optional": false,
            "readonly": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 804,
            "end": 817,
            "typeName": {
              "type": "Identifier",
              "start": 804,
              "end": 817,
              "decorators": [],
              "name": "GatewayOpcode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 820,
      "end": 890,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 827,
        "end": 890,
        "id": {
          "type": "Identifier",
          "start": 837,
          "end": 850,
          "decorators": [],
          "name": "GatewayParams",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 851,
          "end": 890,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 857,
              "end": 888,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "MemberExpression",
                "start": 858,
                "end": 877,
                "object": {
                  "type": "Identifier",
                  "start": 858,
                  "end": 871,
                  "decorators": [],
                  "name": "GatewayOpcode",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 872,
                  "end": 877,
                  "decorators": [],
                  "name": "HELLO",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 878,
                "end": 888,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 880,
                  "end": 888,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 882,
                      "end": 886,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 882,
                        "end": 883,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 883,
                        "end": 886,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 885,
                          "end": 886,
                          "literal": {
                            "type": "Literal",
                            "start": 885,
                            "end": 886,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
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
      "type": "ExportNamedDeclaration",
      "start": 892,
      "end": 1160,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 899,
        "end": 1160,
        "id": {
          "type": "Identifier",
          "start": 904,
          "end": 917,
          "decorators": [],
          "name": "GatewayOpcode",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 918,
          "end": 1160,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 924,
              "end": 936,
              "id": {
                "type": "Identifier",
                "start": 924,
                "end": 932,
                "decorators": [],
                "name": "DISPATCH",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 935,
                "end": 936,
                "value": 0,
                "raw": "0"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 942,
              "end": 955,
              "id": {
                "type": "Identifier",
                "start": 942,
                "end": 951,
                "decorators": [],
                "name": "HEARTBEAT",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 954,
                "end": 955,
                "value": 1,
                "raw": "1"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 961,
              "end": 973,
              "id": {
                "type": "Identifier",
                "start": 961,
                "end": 969,
                "decorators": [],
                "name": "IDENTIFY",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 972,
                "end": 973,
                "value": 2,
                "raw": "2"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 979,
              "end": 998,
              "id": {
                "type": "Identifier",
                "start": 979,
                "end": 994,
                "decorators": [],
                "name": "PRESENCE_UPDATE",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 997,
                "end": 998,
                "value": 3,
                "raw": "3"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 1004,
              "end": 1026,
              "id": {
                "type": "Identifier",
                "start": 1004,
                "end": 1022,
                "decorators": [],
                "name": "VOICE_STATE_UPDATE",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 1025,
                "end": 1026,
                "value": 4,
                "raw": "4"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 1032,
              "end": 1042,
              "id": {
                "type": "Identifier",
                "start": 1032,
                "end": 1038,
                "decorators": [],
                "name": "RESUME",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 1041,
                "end": 1042,
                "value": 6,
                "raw": "6"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 1048,
              "end": 1061,
              "id": {
                "type": "Identifier",
                "start": 1048,
                "end": 1057,
                "decorators": [],
                "name": "RECONNECT",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 1060,
                "end": 1061,
                "value": 7,
                "raw": "7"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 1067,
              "end": 1092,
              "id": {
                "type": "Identifier",
                "start": 1067,
                "end": 1088,
                "decorators": [],
                "name": "REQUEST_GUILD_MEMBERS",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 1091,
                "end": 1092,
                "value": 8,
                "raw": "8"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 1098,
              "end": 1117,
              "id": {
                "type": "Identifier",
                "start": 1098,
                "end": 1113,
                "decorators": [],
                "name": "INVALID_SESSION",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 1116,
                "end": 1117,
                "value": 9,
                "raw": "9"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 1123,
              "end": 1133,
              "id": {
                "type": "Identifier",
                "start": 1123,
                "end": 1128,
                "decorators": [],
                "name": "HELLO",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 1131,
                "end": 1133,
                "value": 10,
                "raw": "10"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 1139,
              "end": 1157,
              "id": {
                "type": "Identifier",
                "start": 1139,
                "end": 1152,
                "decorators": [],
                "name": "HEARTBEAT_ACK",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 1155,
                "end": 1157,
                "value": 11,
                "raw": "11"
              },
              "computed": false
            }
          ]
        },
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1162,
      "end": 1283,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1169,
        "end": 1283,
        "id": {
          "type": "Identifier",
          "start": 1179,
          "end": 1192,
          "decorators": [],
          "name": "GatewayEvents",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 1193,
          "end": 1283,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1199,
              "end": 1223,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1199,
                "end": 1213,
                "decorators": [],
                "name": "MESSAGE_CREATE",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1213,
                "end": 1223,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1215,
                  "end": 1223,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1217,
                      "end": 1221,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1217,
                        "end": 1218,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1218,
                        "end": 1221,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1220,
                          "end": 1221,
                          "literal": {
                            "type": "Literal",
                            "start": 1220,
                            "end": 1221,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1228,
              "end": 1252,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1228,
                "end": 1242,
                "decorators": [],
                "name": "MESSAGE_UPDATE",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1242,
                "end": 1252,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1244,
                  "end": 1252,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1246,
                      "end": 1250,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1246,
                        "end": 1247,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1247,
                        "end": 1250,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1249,
                          "end": 1250,
                          "literal": {
                            "type": "Literal",
                            "start": 1249,
                            "end": 1250,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1257,
              "end": 1281,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1257,
                "end": 1271,
                "decorators": [],
                "name": "MESSAGE_DELETE",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1271,
                "end": 1281,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1273,
                  "end": 1281,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1275,
                      "end": 1279,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1275,
                        "end": 1276,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1276,
                        "end": 1279,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1278,
                          "end": 1279,
                          "literal": {
                            "type": "Literal",
                            "start": 1278,
                            "end": 1279,
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
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
      "type": "FunctionDeclaration",
      "start": 1285,
      "end": 1328,
      "id": {
        "type": "Identifier",
        "start": 1294,
        "end": 1307,
        "decorators": [],
        "name": "assertMessage",
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
          "start": 1308,
          "end": 1323,
          "decorators": [],
          "name": "event",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1313,
            "end": 1323,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1315,
              "end": 1323,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1317,
                  "end": 1321,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1317,
                    "end": 1318,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1318,
                    "end": 1321,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1320,
                      "end": 1321,
                      "literal": {
                        "type": "Literal",
                        "start": 1320,
                        "end": 1321,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1325,
        "end": 1328,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1330,
      "end": 1468,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1337,
        "end": 1468,
        "id": {
          "type": "Identifier",
          "start": 1352,
          "end": 1364,
          "decorators": [],
          "name": "adaptSession",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 1365,
            "end": 1386,
            "decorators": [],
            "name": "input",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1370,
              "end": 1386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1372,
                "end": 1386,
                "typeName": {
                  "type": "Identifier",
                  "start": 1372,
                  "end": 1386,
                  "decorators": [],
                  "name": "GatewayPayload",
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
          "start": 1388,
          "end": 1468,
          "body": [
            {
              "type": "IfStatement",
              "start": 1394,
              "end": 1466,
              "test": {
                "type": "BinaryExpression",
                "start": 1398,
                "end": 1426,
                "left": {
                  "type": "MemberExpression",
                  "start": 1398,
                  "end": 1405,
                  "object": {
                    "type": "Identifier",
                    "start": 1398,
                    "end": 1403,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1404,
                    "end": 1405,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1410,
                  "end": 1426,
                  "value": "MESSAGE_CREATE",
                  "raw": "'MESSAGE_CREATE'"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1428,
                "end": 1466,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1438,
                    "end": 1460,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1438,
                      "end": 1460,
                      "callee": {
                        "type": "Identifier",
                        "start": 1438,
                        "end": 1451,
                        "decorators": [],
                        "name": "assertMessage",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1452,
                          "end": 1459,
                          "object": {
                            "type": "Identifier",
                            "start": 1452,
                            "end": 1457,
                            "decorators": [],
                            "name": "input",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1458,
                            "end": 1459,
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
