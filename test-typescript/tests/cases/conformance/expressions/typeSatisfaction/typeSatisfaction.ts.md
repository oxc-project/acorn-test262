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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 43,
        "end": 64,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 49,
            "end": 62,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "value": "a",
                      "raw": "\"a\""
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
                      "value": "b",
                      "raw": "\"b\""
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
      "type": "TSTypeAliasDeclaration",
      "start": 66,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 76,
        "end": 95,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 77,
            "end": 86,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              }
            },
            "decorators": [],
            "optional": false
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
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 114,
                    "end": 115,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 130,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 130,
                "name": "I1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                },
                {
                  "type": "Property",
                  "start": 157,
                  "end": 161,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 160,
                    "end": 161,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 174,
              "end": 176,
              "typeName": {
                "type": "Identifier",
                "start": 174,
                "end": 176,
                "name": "I1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 195,
            "name": "t3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 212,
                "end": 214,
                "name": "I1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 238,
            "name": "t4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 238,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 238,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 238,
                  "name": "T1",
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 246,
                    "end": 249,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 264,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 264,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 280,
            "name": "t5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 283,
            "end": 317,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 284,
              "end": 303,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 289,
                "end": 303,
                "callee": {
                  "type": "MemberExpression",
                  "start": 289,
                  "end": 300,
                  "object": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 300,
                    "name": "substring",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 301,
                    "end": 302,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 315,
              "end": 317,
              "typeName": {
                "type": "Identifier",
                "start": 315,
                "end": 317,
                "name": "T2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "name": "t6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 341,
                  "end": 342,
                  "value": 2,
                  "raw": "2"
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 373,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 384,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 385,
        "end": 402,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 391,
            "end": 400,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 400,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 394,
                "end": 400
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
      "type": "VariableDeclaration",
      "start": 403,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 409,
            "name": "t7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 417,
                    "end": 423,
                    "value": "test",
                    "raw": "'test'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 436,
              "end": 437,
              "typeName": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 445,
            "name": "t8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 453,
                    "end": 459,
                    "value": "test",
                    "raw": "'test'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 461,
                  "end": 470,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 464,
                    "end": 470,
                    "value": "test",
                    "raw": "'test'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 483,
              "end": 484,
              "typeName": {
                "type": "Identifier",
                "start": 483,
                "end": 484,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
