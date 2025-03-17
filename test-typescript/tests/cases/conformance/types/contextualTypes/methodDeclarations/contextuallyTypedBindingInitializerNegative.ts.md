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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "show",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 48,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 27,
                "end": 48,
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
                },
                "typeParameters": null
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
        "end": 14,
        "decorators": [],
        "name": "Show",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 102,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 102,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 63,
          "end": 98,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 65,
              "end": 90,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 69,
                "decorators": [],
                "name": "show",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
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
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 84,
                  "end": 90,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 98,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 98,
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 156,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 156,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 115,
          "end": 152,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 117,
              "end": 144,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 117,
                "end": 123,
                "raw": "\"show\"",
                "value": "show"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
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
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 138,
                  "end": 144,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 152,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 152,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 152,
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 212,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 210,
        "end": 212,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 168,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 169,
          "end": 208,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 171,
              "end": 200,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 172,
                "end": 178,
                "raw": "\"show\"",
                "value": "show"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
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
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 194,
                  "end": 200,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 208,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 204,
              "end": 208,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 204,
                "end": 208,
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 214,
      "end": 251,
      "body": {
        "type": "TSInterfaceBody",
        "start": 231,
        "end": 251,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 237,
            "end": 249,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 243,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 249,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 249,
                  "decorators": [],
                  "name": "Show",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 230,
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 252,
      "end": 319,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 317,
        "end": 319,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 263,
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 264,
          "end": 315,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 266,
              "end": 305,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 266,
                "end": 272,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
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
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 289,
                  "end": 305,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 291,
                      "end": 303,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 295,
                        "decorators": [],
                        "name": "show",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 297,
                        "end": 303,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
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
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 307,
            "end": 315,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 309,
              "end": 315,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 309,
                "end": 315,
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 321,
      "end": 388,
      "body": {
        "type": "TSInterfaceBody",
        "start": 346,
        "end": 388,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 352,
            "end": 386,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 366,
              "decorators": [],
              "name": "stringIdentity",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
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
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 345,
        "decorators": [],
        "name": "StringIdentity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 393,
            "end": 451,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 395,
                "end": 433,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 409,
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
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
                  "optional": false,
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 416,
                    "end": 433,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 423,
                      "end": 433,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 426,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 427,
                        "end": 433,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 451,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 451,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 451,
                  "decorators": [],
                  "name": "StringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 470,
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 472,
                  "end": 478,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 482,
      "end": 530,
      "body": {
        "type": "TSInterfaceBody",
        "start": 499,
        "end": 530,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 505,
            "end": 528,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 509,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 492,
        "end": 498,
        "decorators": [],
        "name": "Tuples",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 531,
      "end": 576,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 574,
        "end": 576,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 540,
        "end": 541,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 542,
          "end": 572,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 544,
              "end": 562,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 544,
                "end": 548,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
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
                "optional": false,
                "right": {
                  "type": "ArrayExpression",
                  "start": 551,
                  "end": 562,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 552,
                      "end": 555,
                      "raw": "101",
                      "value": 101
                    },
                    {
                      "type": "Literal",
                      "start": 557,
                      "end": 561,
                      "raw": "1234",
                      "value": 1234
                    }
                  ]
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 564,
            "end": 572,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 566,
              "end": 572,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 566,
                "end": 572,
                "decorators": [],
                "name": "Tuples",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 578,
      "end": 628,
      "body": {
        "type": "TSInterfaceBody",
        "start": 600,
        "end": 628,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 606,
            "end": 626,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 606,
              "end": 610,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                      "raw": "\"foo\"",
                      "value": "foo"
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
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 588,
        "end": 599,
        "decorators": [],
        "name": "StringUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 629,
      "end": 673,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 671,
        "end": 673,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 639,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 640,
          "end": 669,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 642,
              "end": 654,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 642,
                "end": 646,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
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
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 649,
                  "end": 654,
                  "raw": "\"baz\"",
                  "value": "baz"
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 656,
            "end": 669,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 658,
              "end": 669,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 658,
                "end": 669,
                "decorators": [],
                "name": "StringUnion",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
