__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 137,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 34,
        "end": 137,
        "decorators": [
          {
            "type": "Decorator",
            "start": 22,
            "end": 26,
            "expression": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 42,
          "end": 137,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 48,
              "end": 63,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 48,
                "end": 50,
                "name": "x"
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 52,
                  "end": 58
                }
              },
              "value": {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 68,
              "end": 106,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 75,
                "end": 106,
                "id": null,
                "generator": false,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 78,
                  "end": 106,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 80,
                      "end": 104,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 80,
                        "end": 103,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 80,
                          "end": 87,
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 85,
                            "end": 87,
                            "name": "x"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "AwaitExpression",
                          "start": 90,
                          "end": 103,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 96,
                            "end": 103,
                            "object": {
                              "type": "ThisExpression",
                              "start": 96,
                              "end": 100
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 101,
                              "end": 103,
                              "name": "x"
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      },
                      "directive": null
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
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 111,
              "end": 135,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 112,
                "end": 135,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 116,
                  "end": 135,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 118,
                      "end": 133,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 125,
                        "end": 132,
                        "left": {
                          "type": "PrivateIdentifier",
                          "start": 125,
                          "end": 127,
                          "name": "x"
                        },
                        "operator": "in",
                        "right": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "decorators": [],
                          "name": "u",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
      "type": "VariableDeclaration",
      "start": 139,
      "end": 158,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 149,
            "end": 157,
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 155,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 154,
                  "end": 155,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 178,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 169,
            "end": 177,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 171,
                "end": 175,
                "argument": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
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
  "end": 702,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "__extends",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 34,
            "end": 45,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 45,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 47,
            "end": 58,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 58,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 59,
          "end": 65,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 61,
            "end": 65
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 179,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 74,
        "end": 179,
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 101,
          "decorators": [],
          "name": "__decorate",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 102,
            "end": 124,
            "decorators": [],
            "name": "decorators",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 124,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 114,
                "end": 124,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 122,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 122,
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 126,
            "end": 137,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 137,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 134,
                "end": 137
              }
            }
          },
          {
            "type": "Identifier",
            "start": 139,
            "end": 160,
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 160,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 145,
                "end": 160,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 145,
                    "end": 151
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 154,
                    "end": 160
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 162,
            "end": 172,
            "decorators": [],
            "name": "desc",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 172,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 169,
                "end": 172
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 173,
          "end": 178,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 175,
            "end": 178
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 180,
      "end": 263,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 187,
        "end": 263,
        "id": {
          "type": "Identifier",
          "start": 204,
          "end": 211,
          "decorators": [],
          "name": "__param",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 212,
            "end": 230,
            "decorators": [],
            "name": "paramIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 224,
                "end": 230
              }
            }
          },
          {
            "type": "Identifier",
            "start": 232,
            "end": 251,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 251,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 251,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 252,
          "end": 262,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 254,
            "end": 262,
            "typeName": {
              "type": "Identifier",
              "start": 254,
              "end": 262,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 264,
      "end": 347,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 271,
        "end": 347,
        "id": {
          "type": "Identifier",
          "start": 288,
          "end": 298,
          "decorators": [],
          "name": "__metadata",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 299,
            "end": 315,
            "decorators": [],
            "name": "metadataKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 315,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 312,
                "end": 315
              }
            }
          },
          {
            "type": "Identifier",
            "start": 317,
            "end": 335,
            "decorators": [],
            "name": "metadataValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 330,
              "end": 335,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 332,
                "end": 335
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 336,
          "end": 346,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 338,
            "end": 346,
            "typeName": {
              "type": "Identifier",
              "start": 338,
              "end": 346,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 348,
      "end": 452,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 355,
        "end": 452,
        "id": {
          "type": "Identifier",
          "start": 372,
          "end": 381,
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 382,
            "end": 394,
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 394,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 391,
                "end": 394
              }
            }
          },
          {
            "type": "Identifier",
            "start": 396,
            "end": 411,
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 411,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 408,
                "end": 411
              }
            }
          },
          {
            "type": "Identifier",
            "start": 413,
            "end": 424,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 424,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 416,
                "end": 424,
                "typeName": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 424,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 426,
            "end": 445,
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 445,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 445,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 445,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 446,
          "end": 451,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 448,
            "end": 451
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 453,
      "end": 537,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 460,
        "end": 537,
        "id": {
          "type": "Identifier",
          "start": 477,
          "end": 499,
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 500,
            "end": 506,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 506,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 503,
                "end": 506
              }
            }
          },
          {
            "type": "Identifier",
            "start": 508,
            "end": 514,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 509,
              "end": 514,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 511,
                "end": 514
              }
            }
          },
          {
            "type": "Identifier",
            "start": 516,
            "end": 522,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 517,
              "end": 522,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 519,
                "end": 522
              }
            }
          },
          {
            "type": "Identifier",
            "start": 524,
            "end": 530,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 530,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 527,
                "end": 530
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 531,
          "end": 536,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 533,
            "end": 536
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 538,
      "end": 630,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 545,
        "end": 630,
        "id": {
          "type": "Identifier",
          "start": 562,
          "end": 584,
          "decorators": [],
          "name": "__classPrivateFieldSet",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 585,
            "end": 591,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 586,
              "end": 591,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 588,
                "end": 591
              }
            }
          },
          {
            "type": "Identifier",
            "start": 593,
            "end": 599,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 599,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 596,
                "end": 599
              }
            }
          },
          {
            "type": "Identifier",
            "start": 601,
            "end": 607,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 602,
              "end": 607,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 604,
                "end": 607
              }
            }
          },
          {
            "type": "Identifier",
            "start": 609,
            "end": 615,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 615,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 612,
                "end": 615
              }
            }
          },
          {
            "type": "Identifier",
            "start": 617,
            "end": 623,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 623,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 620,
                "end": 623
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 624,
          "end": 629,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 626,
            "end": 629
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 631,
      "end": 702,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 638,
        "end": 702,
        "id": {
          "type": "Identifier",
          "start": 655,
          "end": 676,
          "decorators": [],
          "name": "__classPrivateFieldIn",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 677,
            "end": 683,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 678,
              "end": 683,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 680,
                "end": 683
              }
            }
          },
          {
            "type": "Identifier",
            "start": 685,
            "end": 691,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 686,
              "end": 691,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 688,
                "end": 691
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 692,
          "end": 701,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 694,
            "end": 701
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
