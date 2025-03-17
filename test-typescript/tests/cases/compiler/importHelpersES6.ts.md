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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 42,
          "end": 137,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 48,
              "end": 63,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 48,
                "end": 50,
                "name": "x"
              },
              "value": {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 68,
              "end": 106,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 75,
                "end": 106,
                "id": null,
                "expression": false,
                "generator": false,
                "async": true,
                "params": [],
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
                          "computed": false,
                          "optional": false
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
                            "computed": false,
                            "optional": false
                          }
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 111,
              "end": 135,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 112,
                "end": 135,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "name": "u",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 22,
            "end": 26,
            "expression": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
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
      "type": "VariableDeclaration",
      "start": 139,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 154,
                  "end": 155,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
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
  "end": 703,
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
          "name": "__extends",
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
            "start": 34,
            "end": 45,
            "name": "d",
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
                  "name": "Function",
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
          {
            "type": "Identifier",
            "start": 47,
            "end": 58,
            "name": "b",
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
                  "name": "Function",
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
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 59,
          "end": 65,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 61,
            "end": 65
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__decorate",
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
            "start": 102,
            "end": 124,
            "name": "decorators",
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
                    "name": "Function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 126,
            "end": 137,
            "name": "target",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 137,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 134,
                "end": 137
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 139,
            "end": 160,
            "name": "key",
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
            },
            "decorators": [],
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 162,
            "end": 172,
            "name": "desc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 172,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 169,
                "end": 172
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 173,
          "end": 178,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 175,
            "end": 178
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__param",
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
            "start": 212,
            "end": 230,
            "name": "paramIndex",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 224,
                "end": 230
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 232,
            "end": 251,
            "name": "decorator",
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
                  "name": "Function",
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
        "body": null,
        "declare": true,
        "typeParameters": null,
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
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__metadata",
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
            "start": 299,
            "end": 315,
            "name": "metadataKey",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 315,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 312,
                "end": 315
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 317,
            "end": 335,
            "name": "metadataValue",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 330,
              "end": 335,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 332,
                "end": 335
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
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
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__awaiter",
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
            "start": 382,
            "end": 394,
            "name": "thisArg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 394,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 391,
                "end": 394
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 396,
            "end": 411,
            "name": "_arguments",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 411,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 408,
                "end": 411
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 413,
            "end": 424,
            "name": "P",
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
                  "name": "Function",
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
          {
            "type": "Identifier",
            "start": 426,
            "end": 445,
            "name": "generator",
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
                  "name": "Function",
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
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 446,
          "end": 451,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 448,
            "end": 451
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__classPrivateFieldGet",
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
            "start": 500,
            "end": 506,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 506,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 503,
                "end": 506
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 508,
            "end": 514,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 509,
              "end": 514,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 511,
                "end": 514
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 516,
            "end": 522,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 517,
              "end": 522,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 519,
                "end": 522
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 524,
            "end": 530,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 530,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 527,
                "end": 530
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 531,
          "end": 536,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 533,
            "end": 536
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__classPrivateFieldSet",
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
            "start": 585,
            "end": 591,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 586,
              "end": 591,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 588,
                "end": 591
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 593,
            "end": 599,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 599,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 596,
                "end": 599
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 601,
            "end": 607,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 602,
              "end": 607,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 604,
                "end": 607
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 609,
            "end": 615,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 615,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 612,
                "end": 615
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 617,
            "end": 623,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 623,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 620,
                "end": 623
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 624,
          "end": 629,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 626,
            "end": 629
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__classPrivateFieldIn",
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
            "start": 677,
            "end": 683,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 678,
              "end": 683,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 680,
                "end": 683
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 685,
            "end": 691,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 686,
              "end": 691,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 688,
                "end": 691
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 692,
          "end": 701,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 694,
            "end": 701
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
