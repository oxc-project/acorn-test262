__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1469,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 85,
          "end": 94,
          "name": "foo",
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
                "name": "Foo1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 150,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 159,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 238,
          "end": 247,
          "name": "foo",
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
                "name": "Foo2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 267,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "GatewayPayloadStructure",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
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
                "name": "O",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 376,
                "end": 389,
                "typeName": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 389,
                  "name": "GatewayOpcode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "GatewayEvents",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
                "name": "op",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "GatewayPayload",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 510,
              "end": 528,
              "name": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "name": "O",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 515,
                "end": 528,
                "typeName": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 528,
                  "name": "GatewayOpcode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
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
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "GatewayOpcode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 563,
                    "name": "DISPATCH",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 581,
                    "end": 605,
                    "name": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 582,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "GatewayEvents",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
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
                      "name": "GatewayPayloadStructure",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                              "name": "GatewayOpcode",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 646,
                              "end": 654,
                              "name": "DISPATCH",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                              "name": "GatewayEvents",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  },
                  "optional": null,
                  "readonly": null,
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
                        "name": "GatewayEvents",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
                      "name": "GatewayEvents",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                  "name": "GatewayPayloadStructure",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "O",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "O",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "GatewayParams",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "GatewayParams",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "O",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeReference",
              "start": 515,
              "end": 528,
              "typeName": {
                "type": "Identifier",
                "start": 515,
                "end": 528,
                "name": "GatewayOpcode",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 511,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 804,
            "end": 817,
            "typeName": {
              "type": "Identifier",
              "start": 804,
              "end": 817,
              "name": "GatewayOpcode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "GatewayParams",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                  "name": "GatewayOpcode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 872,
                  "end": 877,
                  "name": "HELLO",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "GatewayOpcode",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 924,
            "end": 936,
            "id": {
              "type": "Identifier",
              "start": 924,
              "end": 932,
              "name": "DISPATCH",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "HEARTBEAT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "IDENTIFY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "PRESENCE_UPDATE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "VOICE_STATE_UPDATE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "RESUME",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "RECONNECT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "REQUEST_GUILD_MEMBERS",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "INVALID_SESSION",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "HELLO",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "HEARTBEAT_ACK",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        ],
        "const": false,
        "declare": false,
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
                "name": "DISPATCH",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "HEARTBEAT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "IDENTIFY",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "PRESENCE_UPDATE",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "VOICE_STATE_UPDATE",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "RESUME",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "RECONNECT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "REQUEST_GUILD_MEMBERS",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "INVALID_SESSION",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "HELLO",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "HEARTBEAT_ACK",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "GatewayEvents",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "MESSAGE_CREATE",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "name": "MESSAGE_UPDATE",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "name": "MESSAGE_DELETE",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1285,
      "end": 1328,
      "id": {
        "type": "Identifier",
        "start": 1294,
        "end": 1307,
        "name": "assertMessage",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1308,
          "end": 1323,
          "name": "event",
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1325,
        "end": 1328,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "adaptSession",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [
          {
            "type": "Identifier",
            "start": 1365,
            "end": 1386,
            "name": "input",
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
                  "name": "GatewayPayload",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                    "name": "input",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1404,
                    "end": 1405,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
                        "name": "assertMessage",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1452,
                          "end": 1459,
                          "object": {
                            "type": "Identifier",
                            "start": 1452,
                            "end": 1457,
                            "name": "input",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1458,
                            "end": 1459,
                            "name": "d",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
