__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 486,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 64,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 43,
        "end": 64,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 49,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 61,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 52,
                "end": 61,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 52,
                    "end": 55,
                    "literal": {
                      "type": "Literal",
                      "start": 52,
                      "end": 55,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 58,
                    "end": 61,
                    "literal": {
                      "type": "Literal",
                      "start": 58,
                      "end": 61,
                      "raw": "\"b\"",
                      "value": "b"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 66,
      "end": 96,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 76,
        "end": 95,
        "params": [
          {
            "type": "Identifier",
            "start": 77,
            "end": 86,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 88,
          "end": 95,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 91,
            "end": 95
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 109,
            "end": 130,
            "expression": {
              "type": "ObjectExpression",
              "start": 109,
              "end": 117,
              "properties": [
                {
                  "type": "Property",
                  "start": 111,
                  "end": 115,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 114,
                    "end": 115,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 130,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 130,
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 149,
            "end": 176,
            "expression": {
              "type": "ObjectExpression",
              "start": 149,
              "end": 163,
              "properties": [
                {
                  "type": "Property",
                  "start": 151,
                  "end": 155,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 154,
                    "end": 155,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 157,
                  "end": 161,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 160,
                    "end": 161,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 174,
              "end": 176,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 174,
                "end": 176,
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 195,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 198,
            "end": 214,
            "expression": {
              "type": "ObjectExpression",
              "start": 198,
              "end": 201,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 212,
              "end": 214,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 212,
                "end": 214,
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 238,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 238,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 238,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 238,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 241,
            "end": 264,
            "expression": {
              "type": "ObjectExpression",
              "start": 241,
              "end": 251,
              "properties": [
                {
                  "type": "Property",
                  "start": 243,
                  "end": 249,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 246,
                    "end": 249,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 264,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 264,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 280,
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 283,
            "end": 317,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 284,
              "end": 303,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 289,
                "end": 303,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 301,
                    "end": 302,
                    "raw": "0",
                    "value": 0
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 289,
                  "end": 300,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 300,
                    "decorators": [],
                    "name": "substring",
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
                  "start": 284,
                  "end": 285,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 315,
              "end": 317,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 315,
                "end": 317,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 370,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 337,
            "end": 370,
            "expression": {
              "type": "ArrayExpression",
              "start": 337,
              "end": 343,
              "elements": [
                {
                  "type": "Literal",
                  "start": 338,
                  "end": 339,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 341,
                  "end": 342,
                  "raw": "2",
                  "value": 2
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 354,
              "end": 370,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 355,
                  "end": 361
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 363,
                  "end": 369
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 373,
      "end": 402,
      "body": {
        "type": "TSInterfaceBody",
        "start": 385,
        "end": 402,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 391,
            "end": 400,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 400,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 394,
                "end": 400
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 384,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 437,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 409,
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 412,
            "end": 437,
            "expression": {
              "type": "ObjectExpression",
              "start": 412,
              "end": 425,
              "properties": [
                {
                  "type": "Property",
                  "start": 414,
                  "end": 423,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 417,
                    "end": 423,
                    "raw": "'test'",
                    "value": "test"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 436,
              "end": 437,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 484,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 445,
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 448,
            "end": 484,
            "expression": {
              "type": "ObjectExpression",
              "start": 448,
              "end": 472,
              "properties": [
                {
                  "type": "Property",
                  "start": 450,
                  "end": 459,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 453,
                    "end": 459,
                    "raw": "'test'",
                    "value": "test"
                  }
                },
                {
                  "type": "Property",
                  "start": 461,
                  "end": 470,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 464,
                    "end": 470,
                    "raw": "'test'",
                    "value": "test"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 483,
              "end": 484,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 483,
                "end": 484,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
