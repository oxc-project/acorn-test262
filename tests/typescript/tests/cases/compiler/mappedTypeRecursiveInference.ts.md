__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 394,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 20,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 20,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 18,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
              "start": 15,
              "end": 18,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 18,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 37,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "A",
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
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 84,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Deep",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 54,
        "end": 84,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 62,
          "end": 69,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 68,
            "end": 69,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 72,
          "end": 82,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 76,
            "end": 82,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 77,
                "end": 81,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 77,
                  "end": 78,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "decorators": [],
            "name": "Deep",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 48,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 50,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
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
      "type": "TSDeclareFunction",
      "start": 85,
      "end": 127,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 122,
          "decorators": [],
          "name": "deep",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 115,
              "end": 122,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 119,
                "end": 122,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 121,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "decorators": [],
                "name": "Deep",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 123,
        "end": 126,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 125,
          "end": 126,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
      "start": 128,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 137,
            "decorators": [],
            "name": "out",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 140,
            "end": 146,
            "arguments": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "decorators": [],
              "name": "foo",
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
      "type": "ExpressionStatement",
      "start": 148,
      "end": 153,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 148,
        "end": 153,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 148,
          "end": 151,
          "decorators": [],
          "name": "out",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 161,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 154,
        "end": 161,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 154,
          "end": 159,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 154,
            "end": 157,
            "decorators": [],
            "name": "out",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 179,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 162,
        "end": 179,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 162,
          "end": 177,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 162,
            "end": 175,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 162,
              "end": 173,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 162,
                "end": 171,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 162,
                  "end": 169,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 162,
                    "end": 167,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 165,
                      "decorators": [],
                      "name": "out",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 179,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 182,
      "end": 212,
      "body": {
        "type": "TSInterfaceBody",
        "start": 194,
        "end": 212,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 196,
            "end": 210,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 197,
                "end": 206,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 198,
                  "end": 206,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 200,
                    "end": 206
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 210,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 229,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 229,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "decorators": [],
                  "name": "B",
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 240,
            "decorators": [],
            "name": "oub",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 243,
            "end": 249,
            "arguments": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 243,
              "end": 246,
              "decorators": [],
              "name": "foo",
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
      "type": "ExpressionStatement",
      "start": 251,
      "end": 256,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 251,
        "end": 256,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 251,
          "end": 254,
          "decorators": [],
          "name": "oub",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 255,
          "end": 256,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 264,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 257,
        "end": 264,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 257,
          "end": 262,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 257,
            "end": 260,
            "decorators": [],
            "name": "oub",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 263,
          "end": 264,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 280,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 265,
        "end": 280,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 265,
          "end": 278,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 265,
            "end": 276,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 265,
              "end": 274,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 265,
                "end": 272,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 265,
                  "end": 270,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 268,
                    "decorators": [],
                    "name": "oub",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 270,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 279,
          "end": 280,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 305,
            "decorators": [],
            "name": "xhr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 305,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 305,
                  "decorators": [],
                  "name": "XMLHttpRequest",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 317,
            "decorators": [],
            "name": "out2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 320,
            "end": 328,
            "arguments": [
              {
                "type": "Identifier",
                "start": 324,
                "end": 327,
                "decorators": [],
                "name": "xhr",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 320,
              "end": 323,
              "decorators": [],
              "name": "foo",
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
      "type": "ExpressionStatement",
      "start": 330,
      "end": 346,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 330,
        "end": 346,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 330,
          "end": 334,
          "decorators": [],
          "name": "out2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 335,
          "end": 346,
          "decorators": [],
          "name": "responseXML",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 347,
      "end": 394,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 347,
        "end": 394,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 347,
          "end": 387,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 347,
            "end": 377,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 347,
              "end": 363,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 347,
                "end": 351,
                "decorators": [],
                "name": "out2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 352,
                "end": 363,
                "decorators": [],
                "name": "responseXML",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 364,
              "end": 377,
              "decorators": [],
              "name": "activeElement",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 378,
            "end": 387,
            "decorators": [],
            "name": "className",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 388,
          "end": 394,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
