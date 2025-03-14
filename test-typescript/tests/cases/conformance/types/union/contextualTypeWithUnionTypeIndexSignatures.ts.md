contextualTypeWithUnionTypeIndexSignatures.ts
```json
{
  "type": "Program",
  "start": 202,
  "end": 2962,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 202,
      "end": 249,
      "body": {
        "type": "TSInterfaceBody",
        "start": 221,
        "end": 249,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 227,
            "end": 247,
            "params": [
              {
                "type": "Identifier",
                "start": 228,
                "end": 237,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 231,
                    "end": 237
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 246,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 240,
                "end": 246
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 220,
        "decorators": [],
        "name": "SomeType",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 250,
      "end": 298,
      "body": {
        "type": "TSInterfaceBody",
        "start": 270,
        "end": 298,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 276,
            "end": 296,
            "params": [
              {
                "type": "Identifier",
                "start": 277,
                "end": 286,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 278,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 280,
                    "end": 286
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 269,
        "decorators": [],
        "name": "SomeType2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 300,
      "end": 358,
      "body": {
        "type": "TSInterfaceBody",
        "start": 338,
        "end": 358,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 344,
            "end": 356,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 347,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 355,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 349,
                "end": 355
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 337,
        "decorators": [],
        "name": "IWithNoStringIndexSignature",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 359,
      "end": 415,
      "body": {
        "type": "TSInterfaceBody",
        "start": 397,
        "end": 415,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 403,
            "end": 413,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 403,
              "end": 404,
              "raw": "0",
              "value": 0
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 412,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 406,
                "end": 412
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 396,
        "decorators": [],
        "name": "IWithNoNumberIndexSignature",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 416,
      "end": 483,
      "body": {
        "type": "TSInterfaceBody",
        "start": 453,
        "end": 483,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 459,
            "end": 481,
            "parameters": [
              {
                "type": "Identifier",
                "start": 460,
                "end": 469,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 461,
                  "end": 469,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 463,
                    "end": 469
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 472,
                "end": 480,
                "typeName": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 480,
                  "decorators": [],
                  "name": "SomeType",
                  "optional": false
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
        "start": 426,
        "end": 452,
        "decorators": [],
        "name": "IWithStringIndexSignature1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 484,
      "end": 552,
      "body": {
        "type": "TSInterfaceBody",
        "start": 521,
        "end": 552,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 527,
            "end": 550,
            "parameters": [
              {
                "type": "Identifier",
                "start": 528,
                "end": 537,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 529,
                  "end": 537,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 531,
                    "end": 537
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 549,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 540,
                "end": 549,
                "typeName": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 549,
                  "decorators": [],
                  "name": "SomeType2",
                  "optional": false
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
        "start": 494,
        "end": 520,
        "decorators": [],
        "name": "IWithStringIndexSignature2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 553,
      "end": 620,
      "body": {
        "type": "TSInterfaceBody",
        "start": 590,
        "end": 620,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 596,
            "end": 618,
            "parameters": [
              {
                "type": "Identifier",
                "start": 597,
                "end": 606,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 598,
                  "end": 606,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 600,
                    "end": 606
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 617,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 609,
                "end": 617,
                "typeName": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 617,
                  "decorators": [],
                  "name": "SomeType",
                  "optional": false
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
        "start": 563,
        "end": 589,
        "decorators": [],
        "name": "IWithNumberIndexSignature1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 621,
      "end": 689,
      "body": {
        "type": "TSInterfaceBody",
        "start": 658,
        "end": 689,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 664,
            "end": 687,
            "parameters": [
              {
                "type": "Identifier",
                "start": 665,
                "end": 674,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 666,
                  "end": 674,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 668,
                    "end": 674
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 686,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 677,
                "end": 686,
                "typeName": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 686,
                  "decorators": [],
                  "name": "SomeType2",
                  "optional": false
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
        "start": 631,
        "end": 657,
        "decorators": [],
        "name": "IWithNumberIndexSignature2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1615,
      "end": 1695,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1619,
          "end": 1694,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1619,
            "end": 1678,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1620,
              "end": 1678,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1622,
                "end": 1678,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1622,
                    "end": 1649,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1622,
                      "end": 1649,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1652,
                    "end": 1678,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1652,
                      "end": 1678,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1681,
            "end": 1694,
            "properties": [
              {
                "type": "Property",
                "start": 1683,
                "end": 1692,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1683,
                  "end": 1684,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1686,
                  "end": 1692,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1691,
                    "end": 1692,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1686,
                      "end": 1687,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
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
      "start": 1718,
      "end": 1800,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1722,
          "end": 1799,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1722,
            "end": 1781,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1723,
              "end": 1781,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1725,
                "end": 1781,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1725,
                    "end": 1752,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1752,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1755,
                    "end": 1781,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1755,
                      "end": 1781,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1784,
            "end": 1799,
            "properties": [
              {
                "type": "Property",
                "start": 1786,
                "end": 1797,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1786,
                  "end": 1789,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1791,
                  "end": 1797,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1796,
                    "end": 1797,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1791,
                      "end": 1792,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
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
      "start": 1882,
      "end": 1965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1886,
          "end": 1964,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1886,
            "end": 1945,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1887,
              "end": 1945,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1889,
                "end": 1945,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1889,
                    "end": 1916,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1889,
                      "end": 1916,
                      "decorators": [],
                      "name": "IWithNoStringIndexSignature",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1919,
                    "end": 1945,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1919,
                      "end": 1945,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1948,
            "end": 1964,
            "properties": [
              {
                "type": "Property",
                "start": 1950,
                "end": 1962,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1950,
                  "end": 1953,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1955,
                  "end": 1962,
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
      "start": 1967,
      "end": 2058,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1971,
          "end": 2057,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1971,
            "end": 2030,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1973,
              "end": 2030,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1975,
                "end": 2030,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1975,
                    "end": 2001,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1975,
                      "end": 2001,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2004,
                    "end": 2030,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2004,
                      "end": 2030,
                      "decorators": [],
                      "name": "IWithStringIndexSignature2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2033,
            "end": 2057,
            "properties": [
              {
                "type": "Property",
                "start": 2035,
                "end": 2055,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2035,
                  "end": 2036,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2038,
                  "end": 2055,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 2043,
                    "end": 2055,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2043,
                      "end": 2053,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2043,
                        "end": 2044,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2045,
                        "end": 2053,
                        "decorators": [],
                        "name": "toString",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2038,
                      "end": 2039,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
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
      "start": 2081,
      "end": 2161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2085,
          "end": 2160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2085,
            "end": 2144,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2087,
              "end": 2144,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2089,
                "end": 2144,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2089,
                    "end": 2115,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2089,
                      "end": 2115,
                      "decorators": [],
                      "name": "IWithStringIndexSignature1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2118,
                    "end": 2144,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2118,
                      "end": 2144,
                      "decorators": [],
                      "name": "IWithStringIndexSignature2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2147,
            "end": 2160,
            "properties": [
              {
                "type": "Property",
                "start": 2149,
                "end": 2158,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2149,
                  "end": 2150,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2152,
                  "end": 2158,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2157,
                    "end": 2158,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2152,
                      "end": 2153,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
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
      "start": 2396,
      "end": 2477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2400,
          "end": 2476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2400,
            "end": 2460,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2402,
              "end": 2460,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2404,
                "end": 2460,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2404,
                    "end": 2431,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2404,
                      "end": 2431,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2434,
                    "end": 2460,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2434,
                      "end": 2460,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2463,
            "end": 2476,
            "properties": [
              {
                "type": "Property",
                "start": 2465,
                "end": 2474,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2465,
                  "end": 2466,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2468,
                  "end": 2474,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2473,
                    "end": 2474,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2468,
                      "end": 2469,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
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
      "start": 2500,
      "end": 2581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2504,
          "end": 2580,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2504,
            "end": 2564,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2506,
              "end": 2564,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2508,
                "end": 2564,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2508,
                    "end": 2535,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2508,
                      "end": 2535,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2538,
                    "end": 2564,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2538,
                      "end": 2564,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2567,
            "end": 2580,
            "properties": [
              {
                "type": "Property",
                "start": 2569,
                "end": 2578,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2569,
                  "end": 2570,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2572,
                  "end": 2578,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2577,
                    "end": 2578,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2572,
                      "end": 2573,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
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
      "start": 2663,
      "end": 2745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2667,
          "end": 2744,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2667,
            "end": 2727,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2669,
              "end": 2727,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2671,
                "end": 2727,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2671,
                    "end": 2698,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2671,
                      "end": 2698,
                      "decorators": [],
                      "name": "IWithNoNumberIndexSignature",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2701,
                    "end": 2727,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2701,
                      "end": 2727,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2730,
            "end": 2744,
            "properties": [
              {
                "type": "Property",
                "start": 2732,
                "end": 2742,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2732,
                  "end": 2733,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2735,
                  "end": 2742,
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
      "start": 2746,
      "end": 2837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2750,
          "end": 2836,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2750,
            "end": 2809,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2752,
              "end": 2809,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2754,
                "end": 2809,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2754,
                    "end": 2780,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2754,
                      "end": 2780,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2783,
                    "end": 2809,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2783,
                      "end": 2809,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2812,
            "end": 2836,
            "properties": [
              {
                "type": "Property",
                "start": 2814,
                "end": 2834,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2814,
                  "end": 2815,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2817,
                  "end": 2834,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 2822,
                    "end": 2834,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2822,
                      "end": 2832,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2822,
                        "end": 2823,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2824,
                        "end": 2832,
                        "decorators": [],
                        "name": "toString",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2817,
                      "end": 2818,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
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
      "start": 2860,
      "end": 2940,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2864,
          "end": 2939,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2864,
            "end": 2923,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2866,
              "end": 2923,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2868,
                "end": 2923,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2868,
                    "end": 2894,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2868,
                      "end": 2894,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2897,
                    "end": 2923,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2897,
                      "end": 2923,
                      "decorators": [],
                      "name": "IWithNumberIndexSignature2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2926,
            "end": 2939,
            "properties": [
              {
                "type": "Property",
                "start": 2928,
                "end": 2937,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2928,
                  "end": 2929,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2931,
                  "end": 2937,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2936,
                    "end": 2937,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2931,
                      "end": 2932,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
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
  "sourceType": "script"
}
```
