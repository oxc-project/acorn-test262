__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 785,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 20,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 49,
            "end": 98,
            "properties": [
              {
                "type": "Property",
                "start": 51,
                "end": 57,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 54,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 56,
                  "end": 57,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 59,
                "end": 67,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 64,
                  "end": 67,
                  "raw": "'s'",
                  "value": "s"
                }
              },
              {
                "type": "Property",
                "start": 69,
                "end": 84,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 73,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 76,
                  "end": 84,
                  "expression": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 83,
                    "end": 84,
                    "literal": {
                      "type": "Literal",
                      "start": 83,
                      "end": 84,
                      "raw": "0",
                      "value": 0
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 86,
                "end": 96,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 90,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 218,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 218,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 192,
            "end": 216,
            "argument": {
              "type": "AssignmentExpression",
              "start": 199,
              "end": 215,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 199,
                "end": 207,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 202,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 210,
                "end": 215,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 113,
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 153,
          "end": 159,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 159,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 161,
          "end": 167,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 164,
            "end": 167,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 166,
              "end": 167,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 169,
          "end": 180,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 180,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 176,
              "end": 180,
              "indexType": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 177,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 187,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 183,
          "end": 187,
          "indexType": {
            "type": "TSTypeReference",
            "start": 185,
            "end": 186,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 183,
            "end": 184,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 151,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 131,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 125,
              "end": 131
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 150,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 143,
              "end": 150,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 150,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 232,
            "end": 251,
            "arguments": [
              {
                "type": "Identifier",
                "start": 236,
                "end": 239,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 241,
                "end": 246,
                "raw": "'str'",
                "value": "str"
              },
              {
                "type": "Literal",
                "start": 248,
                "end": 250,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 232,
              "end": 235,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 295,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 273,
            "decorators": [],
            "name": "valB",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 276,
            "end": 295,
            "arguments": [
              {
                "type": "Identifier",
                "start": 280,
                "end": 283,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 285,
                "end": 290,
                "raw": "'num'",
                "value": "num"
              },
              {
                "type": "Literal",
                "start": 292,
                "end": 294,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 276,
              "end": 279,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 423,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 402,
            "decorators": [],
            "name": "valC",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 405,
            "end": 423,
            "arguments": [
              {
                "type": "Identifier",
                "start": 409,
                "end": 412,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 414,
                "end": 417,
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 419,
                "end": 422,
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 405,
              "end": 408,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 535,
      "end": 567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 566,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 545,
            "decorators": [],
            "name": "valD",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 548,
            "end": 566,
            "arguments": [
              {
                "type": "Identifier",
                "start": 552,
                "end": 555,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 557,
                "end": 560,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 562,
                "end": 565,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 548,
              "end": 551,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 666,
      "end": 699,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 671,
        "end": 679,
        "decorators": [],
        "name": "KeyofObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 682,
        "end": 698,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 688,
          "end": 698,
          "exprName": {
            "type": "Identifier",
            "start": 695,
            "end": 698,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 717,
      "end": 745,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 722,
        "end": 728,
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 734,
        "end": 744,
        "indexType": {
          "type": "TSTypeOperator",
          "start": 736,
          "end": 743,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 742,
            "end": 743,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 742,
              "end": 743,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 734,
          "end": 735,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 734,
            "end": 735,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 728,
        "end": 731,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 729,
            "end": 730,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 729,
              "end": 730,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 747,
      "end": 785,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 752,
        "end": 763,
        "decorators": [],
        "name": "ValuesOfObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 766,
        "end": 784,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 772,
          "end": 784,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 773,
              "end": 783,
              "exprName": {
                "type": "Identifier",
                "start": 780,
                "end": 783,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 766,
          "end": 772,
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
