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
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 219,
        "decorators": [],
        "name": "SomeType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 220,
        "end": 248,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 226,
            "end": 246,
            "typeParameters": null,
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 249,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 268,
        "decorators": [],
        "name": "SomeType2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 297,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 275,
            "end": 295,
            "typeParameters": null,
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 299,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 336,
        "decorators": [],
        "name": "IWithNoStringIndexSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 337,
        "end": 357,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 355,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 346,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 354,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 348,
                "end": 354
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
      "type": "TSInterfaceDeclaration",
      "start": 358,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 395,
        "decorators": [],
        "name": "IWithNoNumberIndexSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 396,
        "end": 414,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 402,
            "end": 412,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 402,
              "end": 403,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 411,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
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
      "type": "TSInterfaceDeclaration",
      "start": 415,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 451,
        "decorators": [],
        "name": "IWithStringIndexSignature1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 452,
        "end": 482,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 458,
            "end": 480,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 479,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 471,
                "end": 479,
                "typeName": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 479,
                  "decorators": [],
                  "name": "SomeType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 483,
      "end": 551,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 519,
        "decorators": [],
        "name": "IWithStringIndexSignature2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 520,
        "end": 551,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 526,
            "end": 549,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 537,
              "end": 548,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 539,
                "end": 548,
                "typeName": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 548,
                  "decorators": [],
                  "name": "SomeType2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 552,
      "end": 619,
      "id": {
        "type": "Identifier",
        "start": 562,
        "end": 588,
        "decorators": [],
        "name": "IWithNumberIndexSignature1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 589,
        "end": 619,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 595,
            "end": 617,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 606,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 608,
                "end": 616,
                "typeName": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 616,
                  "decorators": [],
                  "name": "SomeType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 620,
      "end": 688,
      "id": {
        "type": "Identifier",
        "start": 630,
        "end": 656,
        "decorators": [],
        "name": "IWithNumberIndexSignature2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 657,
        "end": 688,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 663,
            "end": 686,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 674,
              "end": 685,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 676,
                "end": 685,
                "typeName": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 685,
                  "decorators": [],
                  "name": "SomeType2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1614,
      "end": 1694,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1618,
          "end": 1693,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1621,
                      "end": 1648,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1651,
                    "end": 1677,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1651,
                      "end": 1677,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1682,
                  "end": 1683,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1685,
                  "end": 1691,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Identifier",
                    "start": 1690,
                    "end": 1691,
                    "decorators": [],
                    "name": "a",
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
      "type": "VariableDeclaration",
      "start": 1717,
      "end": 1799,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1721,
          "end": 1798,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1724,
                      "end": 1751,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1754,
                    "end": 1780,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1754,
                      "end": 1780,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1785,
                  "end": 1788,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1790,
                  "end": 1796,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Identifier",
                    "start": 1795,
                    "end": 1796,
                    "decorators": [],
                    "name": "a",
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
      "type": "VariableDeclaration",
      "start": 1881,
      "end": 1964,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1885,
          "end": 1963,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1888,
                      "end": 1915,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1918,
                    "end": 1944,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1918,
                      "end": 1944,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1949,
                  "end": 1952,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1954,
                  "end": 1961,
                  "value": "hello",
                  "raw": "\"hello\""
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
      "start": 1966,
      "end": 2057,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1970,
          "end": 2056,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1974,
                      "end": 2000,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2003,
                    "end": 2029,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2003,
                      "end": 2029,
                      "decorators": [],
                      "name": "IWithStringIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2034,
                  "end": 2035,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2037,
                  "end": 2054,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "CallExpression",
                    "start": 2042,
                    "end": 2054,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2042,
                      "end": 2052,
                      "object": {
                        "type": "Identifier",
                        "start": 2042,
                        "end": 2043,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2044,
                        "end": 2052,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
      "type": "VariableDeclaration",
      "start": 2080,
      "end": 2160,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2084,
          "end": 2159,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2088,
                      "end": 2114,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2117,
                    "end": 2143,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2117,
                      "end": 2143,
                      "decorators": [],
                      "name": "IWithStringIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2148,
                  "end": 2149,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2151,
                  "end": 2157,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Identifier",
                    "start": 2156,
                    "end": 2157,
                    "decorators": [],
                    "name": "a",
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
      "type": "VariableDeclaration",
      "start": 2395,
      "end": 2476,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2399,
          "end": 2475,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2403,
                      "end": 2430,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2433,
                    "end": 2459,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2433,
                      "end": 2459,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 2464,
                  "end": 2465,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2467,
                  "end": 2473,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Identifier",
                    "start": 2472,
                    "end": 2473,
                    "decorators": [],
                    "name": "a",
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
      "type": "VariableDeclaration",
      "start": 2499,
      "end": 2580,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2503,
          "end": 2579,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2507,
                      "end": 2534,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2537,
                    "end": 2563,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2537,
                      "end": 2563,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 2568,
                  "end": 2569,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2571,
                  "end": 2577,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Identifier",
                    "start": 2576,
                    "end": 2577,
                    "decorators": [],
                    "name": "a",
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
      "type": "VariableDeclaration",
      "start": 2662,
      "end": 2744,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2666,
          "end": 2743,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2670,
                      "end": 2697,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2700,
                    "end": 2726,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2700,
                      "end": 2726,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 2731,
                  "end": 2732,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "Literal",
                  "start": 2734,
                  "end": 2741,
                  "value": "hello",
                  "raw": "\"hello\""
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
      "start": 2745,
      "end": 2836,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2749,
          "end": 2835,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2753,
                      "end": 2779,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2782,
                    "end": 2808,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2782,
                      "end": 2808,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 2813,
                  "end": 2814,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2816,
                  "end": 2833,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "CallExpression",
                    "start": 2821,
                    "end": 2833,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2821,
                      "end": 2831,
                      "object": {
                        "type": "Identifier",
                        "start": 2821,
                        "end": 2822,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2823,
                        "end": 2831,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
      "type": "VariableDeclaration",
      "start": 2859,
      "end": 2939,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2863,
          "end": 2938,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2867,
                      "end": 2893,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2896,
                    "end": 2922,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2896,
                      "end": 2922,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 2927,
                  "end": 2928,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2930,
                  "end": 2936,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Identifier",
                    "start": 2935,
                    "end": 2936,
                    "decorators": [],
                    "name": "a",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
