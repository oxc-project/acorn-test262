__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 674,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Show",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "show",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    },
                    "decorators": [],
                    "optional": false
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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 63,
          "end": 98,
          "properties": [
            {
              "type": "Property",
              "start": 65,
              "end": 90,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 69,
                "name": "show",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 71,
                "end": 90,
                "left": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 81,
                  "name": "showRename",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 84,
                  "end": 90,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                "name": "Show",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 102,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
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
          "type": "ObjectPattern",
          "start": 115,
          "end": 152,
          "properties": [
            {
              "type": "Property",
              "start": 117,
              "end": 144,
              "method": false,
              "shorthand": false,
              "computed": false,
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
                "left": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 135,
                  "name": "showRename",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 138,
                  "end": 144,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                "name": "Show",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 156,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 168,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 169,
          "end": 208,
          "properties": [
            {
              "type": "Property",
              "start": 171,
              "end": 200,
              "method": false,
              "shorthand": false,
              "computed": true,
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
                "left": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 191,
                  "name": "showRename",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 194,
                  "end": 200,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                "name": "Show",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 210,
        "end": 212,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 214,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 230,
        "name": "Nested",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "Show",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "ff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 264,
          "end": 315,
          "properties": [
            {
              "type": "Property",
              "start": 266,
              "end": 305,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 266,
                "end": 272,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 274,
                "end": 305,
                "left": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 286,
                  "name": "nestedRename",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 295,
                        "name": "show",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 297,
                        "end": 303,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 297,
                            "end": 298,
                            "name": "v",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "name": "v",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                "name": "Nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 317,
        "end": 319,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 321,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 345,
        "name": "StringIdentity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "stringIdentity",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 368,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 370,
                    "end": 376
                  }
                },
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 479,
          "id": {
            "type": "ObjectPattern",
            "start": 393,
            "end": 451,
            "properties": [
              {
                "type": "Property",
                "start": 395,
                "end": 433,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 409,
                  "name": "stringIdentity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 411,
                  "end": 433,
                  "left": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 413,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 416,
                    "end": 433,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 416,
                        "end": 419,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 423,
                      "end": 433,
                      "object": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 426,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 427,
                        "end": 433,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
                  "name": "StringIdentity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 470,
                  "name": "stringIdentity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 472,
                  "end": 478,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 472,
                      "end": 473,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "Tuples",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 542,
          "end": 572,
          "properties": [
            {
              "type": "Property",
              "start": 544,
              "end": 562,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 544,
                "end": 548,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 544,
                "end": 562,
                "left": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 548,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                "name": "Tuples",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 574,
        "end": 576,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 578,
      "end": 628,
      "id": {
        "type": "Identifier",
        "start": 588,
        "end": 599,
        "name": "StringUnion",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "h",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 640,
          "end": 669,
          "properties": [
            {
              "type": "Property",
              "start": 642,
              "end": 654,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 642,
                "end": 646,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 642,
                "end": 654,
                "left": {
                  "type": "Identifier",
                  "start": 642,
                  "end": 646,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 649,
                  "end": 654,
                  "value": "baz",
                  "raw": "\"baz\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                "name": "StringUnion",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 671,
        "end": 673,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
