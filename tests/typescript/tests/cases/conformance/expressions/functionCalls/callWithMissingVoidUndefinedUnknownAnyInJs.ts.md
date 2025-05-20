__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 35,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 27,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 27,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 23,
              "end": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 34,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 76,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 68,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 68,
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 59,
              "end": 68
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 69,
        "end": 75,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 71,
          "end": 75
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 77,
      "end": 115,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 107,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 107,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 100,
              "end": 107
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 108,
        "end": 114,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 110,
          "end": 114
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 116,
      "end": 150,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 135,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 136,
          "end": 142,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 142,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 139,
              "end": 142
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 143,
        "end": 149,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 145,
          "end": 149
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 185,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 185,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 169,
            "end": 183,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 175,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 175,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 182,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 178,
                "end": 182
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
        "start": 162,
        "end": 163,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 163,
        "end": 166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 165,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
      "type": "VariableDeclaration",
      "start": 186,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 211,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 211,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 205,
                  "end": 211,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 206,
                      "end": 210
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 243,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 243,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 232,
                  "end": 243,
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 233,
                      "end": 242
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 273,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 273,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 264,
                  "end": 273,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 265,
                      "end": 272
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 299,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 299,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 294,
                  "end": 299,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 295,
                      "end": 298
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 201,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 59,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 55,
          "end": 57,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 68,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 67,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 65,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 158,
        "end": 162,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 158,
          "end": 160,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 169,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 168,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 166,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 175,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 170,
        "end": 174,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 170,
          "end": 172,
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 184,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 183,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 177,
          "end": 181,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 192,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 185,
        "end": 191,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 185,
          "end": 189,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 185,
            "end": 187,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 200,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 193,
        "end": 199,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 193,
          "end": 197,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 193,
            "end": 195,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 137,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 59,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 55,
          "end": 57,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 68,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 67,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 65,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 100,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 95,
        "end": 99,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 97,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 106,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 105,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 101,
          "end": 103,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 112,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 111,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 109,
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 121,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 120,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 114,
          "end": 118,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 116,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 122,
        "end": 128,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 122,
          "end": 126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 136,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 134,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
