__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 673,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Show",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "show",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 48,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 27,
                "end": 48,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 28,
                    "end": 37,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  }
                }
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
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 63,
          "end": 98,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 65,
              "end": 90,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 69,
                "decorators": [],
                "name": "show",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 71,
                "end": 90,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 81,
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 84,
                  "end": 90,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 98,
                "decorators": [],
                "name": "Show",
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
        "start": 100,
        "end": 102,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
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
          "type": "ObjectPattern",
          "start": 115,
          "end": 152,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 117,
              "end": 144,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 117,
                "end": 123,
                "value": "show",
                "raw": "\"show\""
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 125,
                "end": 144,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 135,
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 138,
                  "end": 144,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 152,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 152,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 152,
                "decorators": [],
                "name": "Show",
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
        "start": 154,
        "end": 156,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 168,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 169,
          "end": 208,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 171,
              "end": 200,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 172,
                "end": 178,
                "value": "show",
                "raw": "\"show\""
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 181,
                "end": 200,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 191,
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 194,
                  "end": 200,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 208,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 204,
              "end": 208,
              "typeName": {
                "type": "Identifier",
                "start": 204,
                "end": 208,
                "decorators": [],
                "name": "Show",
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
        "start": 210,
        "end": 212,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 214,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 230,
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 231,
        "end": 251,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 237,
            "end": 249,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 243,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 249,
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 249,
                  "decorators": [],
                  "name": "Show",
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
      "type": "FunctionDeclaration",
      "start": 252,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 263,
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 264,
          "end": 315,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 266,
              "end": 305,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 266,
                "end": 272,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 274,
                "end": 305,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 286,
                  "decorators": [],
                  "name": "nestedRename",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 289,
                  "end": 305,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 291,
                      "end": 303,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 295,
                        "decorators": [],
                        "name": "show",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 297,
                        "end": 303,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 297,
                            "end": 298,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 307,
            "end": 315,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 309,
              "end": 315,
              "typeName": {
                "type": "Identifier",
                "start": 309,
                "end": 315,
                "decorators": [],
                "name": "Nested",
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
        "start": 317,
        "end": 319,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 321,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 345,
        "decorators": [],
        "name": "StringIdentity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 346,
        "end": 388,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 352,
            "end": 386,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 366,
              "decorators": [],
              "name": "stringIdentity",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 367,
                "end": 376,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 368,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 370,
                    "end": 376
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 385,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 379,
                "end": 385
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 389,
      "end": 480,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 479,
          "id": {
            "type": "ObjectPattern",
            "start": 393,
            "end": 451,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 395,
                "end": 433,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 409,
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 411,
                  "end": 433,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 413,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 416,
                    "end": 433,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 416,
                        "end": 419,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 423,
                      "end": 433,
                      "object": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 426,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 427,
                        "end": 433,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 451,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 451,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 451,
                  "decorators": [],
                  "name": "StringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 454,
            "end": 479,
            "properties": [
              {
                "type": "Property",
                "start": 456,
                "end": 478,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 470,
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 472,
                  "end": 478,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 472,
                      "end": 473,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
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
      "type": "TSInterfaceDeclaration",
      "start": 482,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 492,
        "end": 498,
        "decorators": [],
        "name": "Tuples",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 499,
        "end": 530,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 505,
            "end": 528,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 509,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 509,
              "end": 527,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 511,
                "end": 527,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 512,
                    "end": 518
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 520,
                    "end": 526
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
    {
      "type": "FunctionDeclaration",
      "start": 531,
      "end": 576,
      "id": {
        "type": "Identifier",
        "start": 540,
        "end": 541,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 542,
          "end": 572,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 544,
              "end": 562,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 544,
                "end": 548,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 544,
                "end": 562,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 548,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 551,
                  "end": 562,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 552,
                      "end": 555,
                      "value": 101,
                      "raw": "101"
                    },
                    {
                      "type": "Literal",
                      "start": 557,
                      "end": 561,
                      "value": 1234,
                      "raw": "1234"
                    }
                  ]
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 564,
            "end": 572,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 566,
              "end": 572,
              "typeName": {
                "type": "Identifier",
                "start": 566,
                "end": 572,
                "decorators": [],
                "name": "Tuples",
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
        "start": 574,
        "end": 576,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 578,
      "end": 628,
      "id": {
        "type": "Identifier",
        "start": 588,
        "end": 599,
        "decorators": [],
        "name": "StringUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 600,
        "end": 628,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 606,
            "end": 626,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 606,
              "end": 610,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 625,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 612,
                "end": 625,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 612,
                    "end": 617,
                    "literal": {
                      "type": "Literal",
                      "start": 612,
                      "end": 617,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 620,
                    "end": 625,
                    "literal": {
                      "type": "Literal",
                      "start": 620,
                      "end": 625,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
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
    {
      "type": "FunctionDeclaration",
      "start": 629,
      "end": 673,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 639,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 640,
          "end": 669,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 642,
              "end": 654,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 642,
                "end": 646,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 642,
                "end": 654,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 642,
                  "end": 646,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 649,
                  "end": 654,
                  "value": "baz",
                  "raw": "\"baz\""
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 656,
            "end": 669,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 658,
              "end": 669,
              "typeName": {
                "type": "Identifier",
                "start": 658,
                "end": 669,
                "decorators": [],
                "name": "StringUnion",
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
        "start": 671,
        "end": 673,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
