__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 201,
  "end": 2961,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 201,
      "end": 248,
      "body": {
        "type": "TSInterfaceBody",
        "start": 220,
        "end": 248,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 226,
            "end": 246,
            "params": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 236,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 228,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 230,
                    "end": 236
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 219,
        "decorators": [],
        "name": "SomeType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 249,
      "end": 297,
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 297,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 275,
            "end": 295,
            "params": [
              {
                "type": "Identifier",
                "start": 276,
                "end": 285,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 277,
                  "end": 285,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 279,
                    "end": 285
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 294,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 288,
                "end": 294
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 268,
        "decorators": [],
        "name": "SomeType2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 299,
      "end": 357,
      "body": {
        "type": "TSInterfaceBody",
        "start": 337,
        "end": 357,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 355,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 346,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 354,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 348,
                "end": 354
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 336,
        "decorators": [],
        "name": "IWithNoStringIndexSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 358,
      "end": 414,
      "body": {
        "type": "TSInterfaceBody",
        "start": 396,
        "end": 414,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 402,
            "end": 412,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 402,
              "end": 403,
              "raw": "0",
              "value": 0
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 411,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 395,
        "decorators": [],
        "name": "IWithNoNumberIndexSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 415,
      "end": 482,
      "body": {
        "type": "TSInterfaceBody",
        "start": 452,
        "end": 482,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 458,
            "end": 480,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 459,
                "end": 468,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 460,
                  "end": 468,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 462,
                    "end": 468
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 479,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 471,
                "end": 479,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 479,
                  "decorators": [],
                  "name": "SomeType",
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
        "start": 425,
        "end": 451,
        "decorators": [],
        "name": "IWithStringIndexSignature1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 483,
      "end": 551,
      "body": {
        "type": "TSInterfaceBody",
        "start": 520,
        "end": 551,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 526,
            "end": 549,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 527,
                "end": 536,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 528,
                  "end": 536,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 530,
                    "end": 536
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 537,
              "end": 548,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 539,
                "end": 548,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 548,
                  "decorators": [],
                  "name": "SomeType2",
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
        "start": 493,
        "end": 519,
        "decorators": [],
        "name": "IWithStringIndexSignature2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 552,
      "end": 619,
      "body": {
        "type": "TSInterfaceBody",
        "start": 589,
        "end": 619,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 595,
            "end": 617,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 596,
                "end": 605,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 597,
                  "end": 605,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 599,
                    "end": 605
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 606,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 608,
                "end": 616,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 616,
                  "decorators": [],
                  "name": "SomeType",
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
        "start": 562,
        "end": 588,
        "decorators": [],
        "name": "IWithNumberIndexSignature1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 620,
      "end": 688,
      "body": {
        "type": "TSInterfaceBody",
        "start": 657,
        "end": 688,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 663,
            "end": 686,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 664,
                "end": 673,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 665,
                  "end": 673,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 667,
                    "end": 673
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 674,
              "end": 685,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 676,
                "end": 685,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 685,
                  "decorators": [],
                  "name": "SomeType2",
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
        "start": 630,
        "end": 656,
        "decorators": [],
        "name": "IWithNumberIndexSignature2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1614,
      "end": 1694,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1618,
          "end": 1693,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1618,
            "end": 1677,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1619,
              "end": 1677,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1621,
                "end": 1677,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1621,
                    "end": 1648,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1621,
                      "end": 1648,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1651,
                    "end": 1677,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1651,
                      "end": 1677,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1680,
            "end": 1693,
            "properties": [
              {
                "type": "Property",
                "start": 1682,
                "end": 1691,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1682,
                  "end": 1683,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1685,
                  "end": 1691,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1690,
                    "end": 1691,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1685,
                      "end": 1686,
                      "decorators": [],
                      "name": "a",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1717,
      "end": 1799,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1721,
          "end": 1798,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1721,
            "end": 1780,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1722,
              "end": 1780,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1724,
                "end": 1780,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1724,
                    "end": 1751,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1724,
                      "end": 1751,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1754,
                    "end": 1780,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1754,
                      "end": 1780,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1783,
            "end": 1798,
            "properties": [
              {
                "type": "Property",
                "start": 1785,
                "end": 1796,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1785,
                  "end": 1788,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1790,
                  "end": 1796,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1795,
                    "end": 1796,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1790,
                      "end": 1791,
                      "decorators": [],
                      "name": "a",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1881,
      "end": 1964,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1885,
          "end": 1963,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1885,
            "end": 1944,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1886,
              "end": 1944,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1888,
                "end": 1944,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1888,
                    "end": 1915,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1888,
                      "end": 1915,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1918,
                    "end": 1944,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1918,
                      "end": 1944,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1947,
            "end": 1963,
            "properties": [
              {
                "type": "Property",
                "start": 1949,
                "end": 1961,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1949,
                  "end": 1952,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1954,
                  "end": 1961,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1966,
      "end": 2057,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1970,
          "end": 2056,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1970,
            "end": 2029,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1972,
              "end": 2029,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1974,
                "end": 2029,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1974,
                    "end": 2000,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1974,
                      "end": 2000,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2003,
                    "end": 2029,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2003,
                      "end": 2029,
                      "decorators": [],
                      "name": "IWithStringIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2032,
            "end": 2056,
            "properties": [
              {
                "type": "Property",
                "start": 2034,
                "end": 2054,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2034,
                  "end": 2035,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2037,
                  "end": 2054,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 2042,
                    "end": 2054,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2042,
                      "end": 2052,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2042,
                        "end": 2043,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2044,
                        "end": 2052,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2037,
                      "end": 2038,
                      "decorators": [],
                      "name": "a",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2080,
      "end": 2160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2084,
          "end": 2159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2084,
            "end": 2143,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2086,
              "end": 2143,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2088,
                "end": 2143,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2088,
                    "end": 2114,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2088,
                      "end": 2114,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2117,
                    "end": 2143,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2117,
                      "end": 2143,
                      "decorators": [],
                      "name": "IWithStringIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2146,
            "end": 2159,
            "properties": [
              {
                "type": "Property",
                "start": 2148,
                "end": 2157,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2148,
                  "end": 2149,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2151,
                  "end": 2157,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2156,
                    "end": 2157,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2151,
                      "end": 2152,
                      "decorators": [],
                      "name": "a",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2395,
      "end": 2476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2399,
          "end": 2475,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2399,
            "end": 2459,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2401,
              "end": 2459,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2403,
                "end": 2459,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2403,
                    "end": 2430,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2403,
                      "end": 2430,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2433,
                    "end": 2459,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2433,
                      "end": 2459,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2462,
            "end": 2475,
            "properties": [
              {
                "type": "Property",
                "start": 2464,
                "end": 2473,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2464,
                  "end": 2465,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2467,
                  "end": 2473,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2472,
                    "end": 2473,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2467,
                      "end": 2468,
                      "decorators": [],
                      "name": "a",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2499,
      "end": 2580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2503,
          "end": 2579,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2503,
            "end": 2563,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2505,
              "end": 2563,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2507,
                "end": 2563,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2507,
                    "end": 2534,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2507,
                      "end": 2534,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2537,
                    "end": 2563,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2537,
                      "end": 2563,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2566,
            "end": 2579,
            "properties": [
              {
                "type": "Property",
                "start": 2568,
                "end": 2577,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2568,
                  "end": 2569,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2571,
                  "end": 2577,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2576,
                    "end": 2577,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2571,
                      "end": 2572,
                      "decorators": [],
                      "name": "a",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2662,
      "end": 2744,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2666,
          "end": 2743,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2666,
            "end": 2726,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2668,
              "end": 2726,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2670,
                "end": 2726,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2670,
                    "end": 2697,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2670,
                      "end": 2697,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2700,
                    "end": 2726,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2700,
                      "end": 2726,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2729,
            "end": 2743,
            "properties": [
              {
                "type": "Property",
                "start": 2731,
                "end": 2741,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2731,
                  "end": 2732,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2734,
                  "end": 2741,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2745,
      "end": 2836,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2749,
          "end": 2835,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2749,
            "end": 2808,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2751,
              "end": 2808,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2753,
                "end": 2808,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2753,
                    "end": 2779,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2753,
                      "end": 2779,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2782,
                    "end": 2808,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2782,
                      "end": 2808,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2811,
            "end": 2835,
            "properties": [
              {
                "type": "Property",
                "start": 2813,
                "end": 2833,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2813,
                  "end": 2814,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2816,
                  "end": 2833,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 2821,
                    "end": 2833,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2821,
                      "end": 2831,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2821,
                        "end": 2822,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2823,
                        "end": 2831,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2816,
                      "end": 2817,
                      "decorators": [],
                      "name": "a",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2859,
      "end": 2939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2863,
          "end": 2938,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2863,
            "end": 2922,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2865,
              "end": 2922,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2867,
                "end": 2922,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2867,
                    "end": 2893,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2867,
                      "end": 2893,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2896,
                    "end": 2922,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2896,
                      "end": 2922,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2925,
            "end": 2938,
            "properties": [
              {
                "type": "Property",
                "start": 2927,
                "end": 2936,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2927,
                  "end": 2928,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2930,
                  "end": 2936,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2935,
                    "end": 2936,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2930,
                      "end": 2931,
                      "decorators": [],
                      "name": "a",
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
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
