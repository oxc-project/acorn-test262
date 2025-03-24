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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "sym",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 20,
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "name": "num",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 54,
                  "name": "num",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 56,
                  "end": 57,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 59,
                "end": 67,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 64,
                  "end": 67,
                  "value": "s",
                  "raw": "'s'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 69,
                "end": 84,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 73,
                  "name": "num",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 76,
                  "end": 84,
                  "expression": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 83,
                    "end": 84,
                    "literal": {
                      "type": "Literal",
                      "start": 83,
                      "end": 84,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 86,
                "end": 96,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 90,
                  "name": "sym",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "name": "sym",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 113,
        "name": "set",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 153,
          "end": 159,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 159,
              "typeName": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 161,
          "end": 167,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 164,
            "end": 167,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 166,
              "end": 167,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "name": "K",
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
        {
          "type": "Identifier",
          "start": 169,
          "end": 180,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 180,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 176,
              "end": 180,
              "objectType": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "object": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 202,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 210,
                "end": 215,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 151,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 131,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 125,
              "end": 131
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 150,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 143,
              "end": 150,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 187,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 183,
          "end": 187,
          "objectType": {
            "type": "TSTypeReference",
            "start": 183,
            "end": 184,
            "typeName": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 185,
            "end": 186,
            "typeName": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "name": "val",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 232,
            "end": 251,
            "callee": {
              "type": "Identifier",
              "start": 232,
              "end": 235,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 236,
                "end": 239,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 241,
                "end": 246,
                "value": "str",
                "raw": "'str'"
              },
              {
                "type": "Literal",
                "start": 248,
                "end": 250,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 273,
            "name": "valB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 276,
            "end": 295,
            "callee": {
              "type": "Identifier",
              "start": 276,
              "end": 279,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 280,
                "end": 283,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 285,
                "end": 290,
                "value": "num",
                "raw": "'num'"
              },
              {
                "type": "Literal",
                "start": 292,
                "end": 294,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 402,
            "name": "valC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 405,
            "end": 423,
            "callee": {
              "type": "Identifier",
              "start": 405,
              "end": 408,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 409,
                "end": 412,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 414,
                "end": 417,
                "name": "sym",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 419,
                "end": 422,
                "name": "sym",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 545,
            "name": "valD",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 548,
            "end": 566,
            "callee": {
              "type": "Identifier",
              "start": 548,
              "end": 551,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 552,
                "end": 555,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 557,
                "end": 560,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 562,
                "end": 565,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 666,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 671,
        "end": 679,
        "name": "KeyofObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 717,
      "end": 745,
      "id": {
        "type": "Identifier",
        "start": 722,
        "end": 728,
        "name": "Values",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 729,
              "end": 730,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 734,
        "end": 744,
        "objectType": {
          "type": "TSTypeReference",
          "start": 734,
          "end": 735,
          "typeName": {
            "type": "Identifier",
            "start": 734,
            "end": 735,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 736,
          "end": 743,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 742,
            "end": 743,
            "typeName": {
              "type": "Identifier",
              "start": 742,
              "end": 743,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 747,
      "end": 785,
      "id": {
        "type": "Identifier",
        "start": 752,
        "end": 763,
        "name": "ValuesOfObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 766,
        "end": 784,
        "typeName": {
          "type": "Identifier",
          "start": 766,
          "end": 772,
          "name": "Values",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
