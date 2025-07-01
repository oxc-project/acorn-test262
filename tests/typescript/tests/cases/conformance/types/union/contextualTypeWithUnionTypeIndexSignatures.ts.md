__ESTREE_TEST__:PASS:
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
