objectAssignLikeNonUnionResult.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 566,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 42,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 42,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 40,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "field",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "Interface",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 72,
            "decorators": [],
            "name": "defaultValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 72,
                  "decorators": [],
                  "name": "Interface",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 75,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 77,
                "end": 85,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 82,
                  "decorators": [],
                  "name": "field",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 84,
                  "end": 85,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 149,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 113,
        "decorators": [],
        "name": "assign",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 120,
          "end": 129,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 129,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 131,
          "end": 140,
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 141,
        "end": 148,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 143,
          "end": 148,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 143,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 147,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 118,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 249,
            "decorators": [],
            "name": "data1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 252,
            "end": 308,
            "arguments": [
              {
                "type": "Identifier",
                "start": 259,
                "end": 271,
                "decorators": [],
                "name": "defaultValue",
                "optional": false
              },
              {
                "type": "ConditionalExpression",
                "start": 273,
                "end": 307,
                "alternate": {
                  "type": "ObjectExpression",
                  "start": 305,
                  "end": 307,
                  "properties": []
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "start": 290,
                  "end": 302,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 292,
                      "end": 300,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 297,
                        "decorators": [],
                        "name": "field",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 299,
                        "end": 300,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 273,
                  "end": 287,
                  "operator": ">",
                  "left": {
                    "type": "CallExpression",
                    "start": 273,
                    "end": 283,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 273,
                      "end": 281,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 273,
                        "end": 277,
                        "decorators": [],
                        "name": "Date",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 281,
                        "decorators": [],
                        "name": "now",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 286,
                    "end": 287,
                    "raw": "3",
                    "value": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 258,
              "decorators": [],
              "name": "assign",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 311,
      "end": 397,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 335,
        "decorators": [],
        "name": "ExtractRawComponent",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 341,
        "end": 396,
        "checkType": {
          "type": "TSTypeReference",
          "start": 341,
          "end": 342,
          "typeName": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 351,
          "end": 369,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 353,
              "end": 367,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 353,
                "end": 358,
                "decorators": [],
                "name": "__raw",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 358,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 360,
                  "end": 367,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 366,
                    "end": 367,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 367,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTupleType",
          "start": 389,
          "end": 396,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 390,
              "end": 395,
              "elementType": {
                "type": "TSTypeReference",
                "start": 394,
                "end": 395,
                "typeName": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "label": {
                "type": "Identifier",
                "start": 390,
                "end": 392,
                "decorators": [],
                "name": "R1",
                "optional": false
              },
              "optional": false
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 372,
          "end": 386,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 373,
              "end": 378,
              "elementType": {
                "type": "TSTypeReference",
                "start": 377,
                "end": 378,
                "typeName": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 378,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "label": {
                "type": "Identifier",
                "start": 373,
                "end": 375,
                "decorators": [],
                "name": "L1",
                "optional": false
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 380,
              "end": 385,
              "elementType": {
                "type": "TSTypeReference",
                "start": 384,
                "end": 385,
                "typeName": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              "label": {
                "type": "Identifier",
                "start": 380,
                "end": 382,
                "decorators": [],
                "name": "L2",
                "optional": false
              },
              "optional": false
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 335,
        "end": 338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 336,
            "end": 337,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 398,
      "end": 442,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 405,
        "decorators": [],
        "name": "t1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 408,
        "end": 441,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 427,
          "end": 441,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 428,
              "end": 440,
              "exprName": {
                "type": "Identifier",
                "start": 435,
                "end": 440,
                "decorators": [],
                "name": "data1",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 408,
          "end": 427,
          "decorators": [],
          "name": "ExtractRawComponent",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 451,
      "end": 506,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 463,
        "decorators": [],
        "name": "Explode",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 469,
        "end": 505,
        "checkType": {
          "type": "TSTypeReference",
          "start": 469,
          "end": 470,
          "typeName": {
            "type": "Identifier",
            "start": 469,
            "end": 470,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 479,
          "end": 493,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 481,
              "end": 491,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 481,
                "end": 482,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 482,
                "end": 491,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 484,
                  "end": 491,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 490,
                    "end": 491,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 490,
                      "end": 491,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 502,
          "end": 505,
          "literal": {
            "type": "Literal",
            "start": 502,
            "end": 505,
            "raw": "'X'",
            "value": "X"
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 496,
          "end": 499,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 497,
              "end": 498,
              "typeName": {
                "type": "Identifier",
                "start": 497,
                "end": 498,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 463,
        "end": 466,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 464,
            "end": 465,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 534,
      "end": 566,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 541,
        "decorators": [],
        "name": "e1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 544,
        "end": 565,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 551,
          "end": 565,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 552,
              "end": 564,
              "exprName": {
                "type": "Identifier",
                "start": 559,
                "end": 564,
                "decorators": [],
                "name": "data1",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 544,
          "end": 551,
          "decorators": [],
          "name": "Explode",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
