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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
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
          "start": 20,
          "end": 27,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 27,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 23,
              "end": 27
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 34,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "name": "f2",
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
          "start": 56,
          "end": 68,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 68,
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 59,
              "end": 68
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 69,
        "end": 75,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 71,
          "end": 75
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 77,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "name": "f3",
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
          "start": 97,
          "end": 107,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 107,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 100,
              "end": 107
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 108,
        "end": 114,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 110,
          "end": 114
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 116,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 135,
        "name": "f4",
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
          "start": 136,
          "end": 142,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 142,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 139,
              "end": 142
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 143,
        "end": 149,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 145,
          "end": 149
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 163,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 163,
        "end": 166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 165,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 185,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 169,
            "end": 183,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 175,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
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
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 211,
            "name": "o1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 243,
            "name": "o2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 273,
            "name": "o3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 273,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 299,
            "name": "o4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 299,
                "typeName": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
  "end": 138,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 60,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 59,
        "callee": {
          "type": "Identifier",
          "start": 55,
          "end": 57,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 68,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 67,
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 65,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 100,
      "expression": {
        "type": "CallExpression",
        "start": 95,
        "end": 99,
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 97,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 106,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 105,
        "callee": {
          "type": "Identifier",
          "start": 101,
          "end": 103,
          "name": "f3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 111,
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 109,
          "name": "f4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 120,
        "callee": {
          "type": "MemberExpression",
          "start": 114,
          "end": 118,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 116,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 129,
      "expression": {
        "type": "CallExpression",
        "start": 122,
        "end": 128,
        "callee": {
          "type": "MemberExpression",
          "start": 122,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "name": "o3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 136,
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 134,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "name": "o4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
