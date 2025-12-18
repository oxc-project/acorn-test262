__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeType",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 219
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 230,
                    "end": 236
                  },
                  "start": 228,
                  "end": 236
                },
                "start": 227,
                "end": 236
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
              },
              "start": 237,
              "end": 245
            },
            "start": 226,
            "end": 246
          }
        ],
        "start": 220,
        "end": 248
      },
      "declare": false,
      "start": 201,
      "end": 248
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 268
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 279,
                    "end": 285
                  },
                  "start": 277,
                  "end": 285
                },
                "start": 276,
                "end": 285
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 288,
                "end": 294
              },
              "start": 286,
              "end": 294
            },
            "start": 275,
            "end": 295
          }
        ],
        "start": 269,
        "end": 297
      },
      "declare": false,
      "start": 249,
      "end": 297
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithNoStringIndexSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 336
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 348,
                "end": 354
              },
              "start": 346,
              "end": 354
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 355
          }
        ],
        "start": 337,
        "end": 357
      },
      "declare": false,
      "start": 299,
      "end": 357
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithNoNumberIndexSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 395
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 402,
              "end": 403
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
              },
              "start": 403,
              "end": 411
            },
            "accessibility": null,
            "static": false,
            "start": 402,
            "end": 412
          }
        ],
        "start": 396,
        "end": 414
      },
      "declare": false,
      "start": 358,
      "end": 414
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithStringIndexSignature1",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 451
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 462,
                    "end": 468
                  },
                  "start": 460,
                  "end": 468
                },
                "start": 459,
                "end": 468
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 479
                },
                "typeArguments": null,
                "start": 471,
                "end": 479
              },
              "start": 469,
              "end": 479
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 458,
            "end": 480
          }
        ],
        "start": 452,
        "end": 482
      },
      "declare": false,
      "start": 415,
      "end": 482
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithStringIndexSignature2",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 519
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 530,
                    "end": 536
                  },
                  "start": 528,
                  "end": 536
                },
                "start": 527,
                "end": 536
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeType2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 539,
                  "end": 548
                },
                "typeArguments": null,
                "start": 539,
                "end": 548
              },
              "start": 537,
              "end": 548
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 526,
            "end": 549
          }
        ],
        "start": 520,
        "end": 551
      },
      "declare": false,
      "start": 483,
      "end": 551
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithNumberIndexSignature1",
        "optional": false,
        "typeAnnotation": null,
        "start": 562,
        "end": 588
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 599,
                    "end": 605
                  },
                  "start": 597,
                  "end": 605
                },
                "start": 596,
                "end": 605
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 616
                },
                "typeArguments": null,
                "start": 608,
                "end": 616
              },
              "start": 606,
              "end": 616
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 595,
            "end": 617
          }
        ],
        "start": 589,
        "end": 619
      },
      "declare": false,
      "start": 552,
      "end": 619
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithNumberIndexSignature2",
        "optional": false,
        "typeAnnotation": null,
        "start": 630,
        "end": 656
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 667,
                    "end": 673
                  },
                  "start": 665,
                  "end": 673
                },
                "start": 664,
                "end": 673
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeType2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 685
                },
                "typeArguments": null,
                "start": 676,
                "end": 685
              },
              "start": 674,
              "end": 685
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 663,
            "end": 686
          }
        ],
        "start": 657,
        "end": 688
      },
      "declare": false,
      "start": 620,
      "end": 688
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1621,
                      "end": 1648
                    },
                    "typeArguments": null,
                    "start": 1621,
                    "end": 1648
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1651,
                      "end": 1677
                    },
                    "typeArguments": null,
                    "start": 1651,
                    "end": 1677
                  }
                ],
                "start": 1621,
                "end": 1677
              },
              "start": 1619,
              "end": 1677
            },
            "start": 1618,
            "end": 1677
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1682,
                  "end": 1683
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1685,
                      "end": 1686
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1690,
                    "end": 1691
                  },
                  "id": null,
                  "generator": false,
                  "start": 1685,
                  "end": 1691
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1682,
                "end": 1691
              }
            ],
            "start": 1680,
            "end": 1693
          },
          "definite": false,
          "start": 1618,
          "end": 1693
        }
      ],
      "declare": false,
      "start": 1614,
      "end": 1694
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1751
                    },
                    "typeArguments": null,
                    "start": 1724,
                    "end": 1751
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1754,
                      "end": 1780
                    },
                    "typeArguments": null,
                    "start": 1754,
                    "end": 1780
                  }
                ],
                "start": 1724,
                "end": 1780
              },
              "start": 1722,
              "end": 1780
            },
            "start": 1721,
            "end": 1780
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1785,
                  "end": 1788
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1790,
                      "end": 1791
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1795,
                    "end": 1796
                  },
                  "id": null,
                  "generator": false,
                  "start": 1790,
                  "end": 1796
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1785,
                "end": 1796
              }
            ],
            "start": 1783,
            "end": 1798
          },
          "definite": false,
          "start": 1721,
          "end": 1798
        }
      ],
      "declare": false,
      "start": 1717,
      "end": 1799
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1888,
                      "end": 1915
                    },
                    "typeArguments": null,
                    "start": 1888,
                    "end": 1915
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1918,
                      "end": 1944
                    },
                    "typeArguments": null,
                    "start": 1918,
                    "end": 1944
                  }
                ],
                "start": 1888,
                "end": 1944
              },
              "start": 1886,
              "end": 1944
            },
            "start": 1885,
            "end": 1944
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1949,
                  "end": 1952
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1954,
                  "end": 1961
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1949,
                "end": 1961
              }
            ],
            "start": 1947,
            "end": 1963
          },
          "definite": false,
          "start": 1885,
          "end": 1963
        }
      ],
      "declare": false,
      "start": 1881,
      "end": 1964
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1974,
                      "end": 2000
                    },
                    "typeArguments": null,
                    "start": 1974,
                    "end": 2000
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithStringIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2003,
                      "end": 2029
                    },
                    "typeArguments": null,
                    "start": 2003,
                    "end": 2029
                  }
                ],
                "start": 1974,
                "end": 2029
              },
              "start": 1972,
              "end": 2029
            },
            "start": 1970,
            "end": 2029
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2034,
                  "end": 2035
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2037,
                      "end": 2038
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2042,
                        "end": 2043
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2044,
                        "end": 2052
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2042,
                      "end": 2052
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2042,
                    "end": 2054
                  },
                  "id": null,
                  "generator": false,
                  "start": 2037,
                  "end": 2054
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2034,
                "end": 2054
              }
            ],
            "start": 2032,
            "end": 2056
          },
          "definite": false,
          "start": 1970,
          "end": 2056
        }
      ],
      "declare": false,
      "start": 1966,
      "end": 2057
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2088,
                      "end": 2114
                    },
                    "typeArguments": null,
                    "start": 2088,
                    "end": 2114
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithStringIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2117,
                      "end": 2143
                    },
                    "typeArguments": null,
                    "start": 2117,
                    "end": 2143
                  }
                ],
                "start": 2088,
                "end": 2143
              },
              "start": 2086,
              "end": 2143
            },
            "start": 2084,
            "end": 2143
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2148,
                  "end": 2149
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2151,
                      "end": 2152
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2156,
                    "end": 2157
                  },
                  "id": null,
                  "generator": false,
                  "start": 2151,
                  "end": 2157
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2148,
                "end": 2157
              }
            ],
            "start": 2146,
            "end": 2159
          },
          "definite": false,
          "start": 2084,
          "end": 2159
        }
      ],
      "declare": false,
      "start": 2080,
      "end": 2160
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2403,
                      "end": 2430
                    },
                    "typeArguments": null,
                    "start": 2403,
                    "end": 2430
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2433,
                      "end": 2459
                    },
                    "typeArguments": null,
                    "start": 2433,
                    "end": 2459
                  }
                ],
                "start": 2403,
                "end": 2459
              },
              "start": 2401,
              "end": 2459
            },
            "start": 2399,
            "end": 2459
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2464,
                  "end": 2465
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2467,
                      "end": 2468
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2472,
                    "end": 2473
                  },
                  "id": null,
                  "generator": false,
                  "start": 2467,
                  "end": 2473
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2464,
                "end": 2473
              }
            ],
            "start": 2462,
            "end": 2475
          },
          "definite": false,
          "start": 2399,
          "end": 2475
        }
      ],
      "declare": false,
      "start": 2395,
      "end": 2476
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2507,
                      "end": 2534
                    },
                    "typeArguments": null,
                    "start": 2507,
                    "end": 2534
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2537,
                      "end": 2563
                    },
                    "typeArguments": null,
                    "start": 2537,
                    "end": 2563
                  }
                ],
                "start": 2507,
                "end": 2563
              },
              "start": 2505,
              "end": 2563
            },
            "start": 2503,
            "end": 2563
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2568,
                  "end": 2569
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2571,
                      "end": 2572
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2576,
                    "end": 2577
                  },
                  "id": null,
                  "generator": false,
                  "start": 2571,
                  "end": 2577
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2568,
                "end": 2577
              }
            ],
            "start": 2566,
            "end": 2579
          },
          "definite": false,
          "start": 2503,
          "end": 2579
        }
      ],
      "declare": false,
      "start": 2499,
      "end": 2580
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2670,
                      "end": 2697
                    },
                    "typeArguments": null,
                    "start": 2670,
                    "end": 2697
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2700,
                      "end": 2726
                    },
                    "typeArguments": null,
                    "start": 2700,
                    "end": 2726
                  }
                ],
                "start": 2670,
                "end": 2726
              },
              "start": 2668,
              "end": 2726
            },
            "start": 2666,
            "end": 2726
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2731,
                  "end": 2732
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 2734,
                  "end": 2741
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2731,
                "end": 2741
              }
            ],
            "start": 2729,
            "end": 2743
          },
          "definite": false,
          "start": 2666,
          "end": 2743
        }
      ],
      "declare": false,
      "start": 2662,
      "end": 2744
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2753,
                      "end": 2779
                    },
                    "typeArguments": null,
                    "start": 2753,
                    "end": 2779
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNumberIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2782,
                      "end": 2808
                    },
                    "typeArguments": null,
                    "start": 2782,
                    "end": 2808
                  }
                ],
                "start": 2753,
                "end": 2808
              },
              "start": 2751,
              "end": 2808
            },
            "start": 2749,
            "end": 2808
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2813,
                  "end": 2814
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2816,
                      "end": 2817
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2821,
                        "end": 2822
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2823,
                        "end": 2831
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2821,
                      "end": 2831
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2821,
                    "end": 2833
                  },
                  "id": null,
                  "generator": false,
                  "start": 2816,
                  "end": 2833
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2813,
                "end": 2833
              }
            ],
            "start": 2811,
            "end": 2835
          },
          "definite": false,
          "start": 2749,
          "end": 2835
        }
      ],
      "declare": false,
      "start": 2745,
      "end": 2836
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2867,
                      "end": 2893
                    },
                    "typeArguments": null,
                    "start": 2867,
                    "end": 2893
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNumberIndexSignature2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2896,
                      "end": 2922
                    },
                    "typeArguments": null,
                    "start": 2896,
                    "end": 2922
                  }
                ],
                "start": 2867,
                "end": 2922
              },
              "start": 2865,
              "end": 2922
            },
            "start": 2863,
            "end": 2922
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2927,
                  "end": 2928
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2930,
                      "end": 2931
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2935,
                    "end": 2936
                  },
                  "id": null,
                  "generator": false,
                  "start": 2930,
                  "end": 2936
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2927,
                "end": 2936
              }
            ],
            "start": 2925,
            "end": 2938
          },
          "definite": false,
          "start": 2863,
          "end": 2938
        }
      ],
      "declare": false,
      "start": 2859,
      "end": 2939
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 201,
  "end": 2961
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 201,
    "end": 210,
    "range": [
      201,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeType",
    "start": 211,
    "end": 219,
    "range": [
      211,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 230,
    "end": 236,
    "range": [
      230,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 249,
    "end": 258,
    "range": [
      249,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeType2",
    "start": 259,
    "end": 268,
    "range": [
      259,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 279,
    "end": 285,
    "range": [
      279,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 288,
    "end": 294,
    "range": [
      288,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 299,
    "end": 308,
    "range": [
      299,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoStringIndexSignature",
    "start": 309,
    "end": 336,
    "range": [
      309,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 343,
    "end": 346,
    "range": [
      343,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 348,
    "end": 354,
    "range": [
      348,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 358,
    "end": 367,
    "range": [
      358,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoNumberIndexSignature",
    "start": 368,
    "end": 395,
    "range": [
      368,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 415,
    "end": 424,
    "range": [
      415,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature1",
    "start": 425,
    "end": 451,
    "range": [
      425,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 462,
    "end": 468,
    "range": [
      462,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeType",
    "start": 471,
    "end": 479,
    "range": [
      471,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 483,
    "end": 492,
    "range": [
      483,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature2",
    "start": 493,
    "end": 519,
    "range": [
      493,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 530,
    "end": 536,
    "range": [
      530,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeType2",
    "start": 539,
    "end": 548,
    "range": [
      539,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 552,
    "end": 561,
    "range": [
      552,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature1",
    "start": 562,
    "end": 588,
    "range": [
      562,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 599,
    "end": 605,
    "range": [
      599,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeType",
    "start": 608,
    "end": 616,
    "range": [
      608,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 620,
    "end": 629,
    "range": [
      620,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature2",
    "start": 630,
    "end": 656,
    "range": [
      630,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 667,
    "end": 673,
    "range": [
      667,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeType2",
    "start": 676,
    "end": 685,
    "range": [
      676,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1614,
    "end": 1617,
    "range": [
      1614,
      1617
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoStringIndexSignature",
    "start": 1621,
    "end": 1648,
    "range": [
      1621,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature1",
    "start": 1651,
    "end": 1677,
    "range": [
      1651,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1687,
    "end": 1689,
    "range": [
      1687,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1717,
    "end": 1720,
    "range": [
      1717,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoStringIndexSignature",
    "start": 1724,
    "end": 1751,
    "range": [
      1724,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature1",
    "start": 1754,
    "end": 1780,
    "range": [
      1754,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1785,
    "end": 1788,
    "range": [
      1785,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1792,
    "end": 1794,
    "range": [
      1792,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1881,
    "end": 1884,
    "range": [
      1881,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoStringIndexSignature",
    "start": 1888,
    "end": 1915,
    "range": [
      1888,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature1",
    "start": 1918,
    "end": 1944,
    "range": [
      1918,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1949,
    "end": 1952,
    "range": [
      1949,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1954,
    "end": 1961,
    "range": [
      1954,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1966,
    "end": 1969,
    "range": [
      1966,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1970,
    "end": 1972,
    "range": [
      1970,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature1",
    "start": 1974,
    "end": 2000,
    "range": [
      1974,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature2",
    "start": 2003,
    "end": 2029,
    "range": [
      2003,
      2029
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2039,
    "end": 2041,
    "range": [
      2039,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2044,
    "end": 2052,
    "range": [
      2044,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2080,
    "end": 2083,
    "range": [
      2080,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2084,
    "end": 2086,
    "range": [
      2084,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature1",
    "start": 2088,
    "end": 2114,
    "range": [
      2088,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithStringIndexSignature2",
    "start": 2117,
    "end": 2143,
    "range": [
      2117,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2153,
    "end": 2155,
    "range": [
      2153,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2395,
    "end": 2398,
    "range": [
      2395,
      2398
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2399,
    "end": 2401,
    "range": [
      2399,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoNumberIndexSignature",
    "start": 2403,
    "end": 2430,
    "range": [
      2403,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature1",
    "start": 2433,
    "end": 2459,
    "range": [
      2433,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2460,
    "end": 2461,
    "range": [
      2460,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2464,
    "end": 2465,
    "range": [
      2464,
      2465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2469,
    "end": 2471,
    "range": [
      2469,
      2471
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2474,
    "end": 2475,
    "range": [
      2474,
      2475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476,
    "range": [
      2475,
      2476
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2499,
    "end": 2502,
    "range": [
      2499,
      2502
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2503,
    "end": 2505,
    "range": [
      2503,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoNumberIndexSignature",
    "start": 2507,
    "end": 2534,
    "range": [
      2507,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature1",
    "start": 2537,
    "end": 2563,
    "range": [
      2537,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2564,
    "end": 2565,
    "range": [
      2564,
      2565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2573,
    "end": 2575,
    "range": [
      2573,
      2575
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2662,
    "end": 2665,
    "range": [
      2662,
      2665
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2666,
    "end": 2668,
    "range": [
      2666,
      2668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoNumberIndexSignature",
    "start": 2670,
    "end": 2697,
    "range": [
      2670,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature1",
    "start": 2700,
    "end": 2726,
    "range": [
      2700,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2734,
    "end": 2741,
    "range": [
      2734,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2745,
    "end": 2748,
    "range": [
      2745,
      2748
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 2749,
    "end": 2751,
    "range": [
      2749,
      2751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature1",
    "start": 2753,
    "end": 2779,
    "range": [
      2753,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature2",
    "start": 2782,
    "end": 2808,
    "range": [
      2782,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815,
    "range": [
      2814,
      2815
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2818,
    "end": 2820,
    "range": [
      2818,
      2820
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2823,
    "end": 2831,
    "range": [
      2823,
      2831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2831,
    "end": 2832,
    "range": [
      2831,
      2832
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2859,
    "end": 2862,
    "range": [
      2859,
      2862
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 2863,
    "end": 2865,
    "range": [
      2863,
      2865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2865,
    "end": 2866,
    "range": [
      2865,
      2866
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature1",
    "start": 2867,
    "end": 2893,
    "range": [
      2867,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNumberIndexSignature2",
    "start": 2896,
    "end": 2922,
    "range": [
      2896,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2927,
    "end": 2928,
    "range": [
      2927,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2932,
    "end": 2934,
    "range": [
      2932,
      2934
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  }
]
```
