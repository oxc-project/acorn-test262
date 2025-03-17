__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 395,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 20,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 18,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 18,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 18,
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 21,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 37,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "A",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "name": "Deep",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
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
        "type": "TSMappedType",
        "start": 54,
        "end": 84,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 57,
          "end": 69,
          "name": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 62,
            "end": 69,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 68,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 72,
          "end": 82,
          "typeName": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "name": "Deep",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 76,
            "end": 82,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 77,
                "end": 81,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 77,
                  "end": 78,
                  "typeName": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 62,
          "end": 69,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 68,
            "end": 69,
            "typeName": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 85,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "name": "foo",
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
          "start": 109,
          "end": 122,
          "name": "deep",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 115,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "name": "Deep",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 119,
                "end": 122,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 121,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 123,
        "end": 126,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 125,
          "end": 126,
          "typeName": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 137,
            "name": "out",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 140,
            "end": 146,
            "callee": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "name": "a",
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
      "type": "ExpressionStatement",
      "start": 148,
      "end": 153,
      "expression": {
        "type": "MemberExpression",
        "start": 148,
        "end": 153,
        "object": {
          "type": "Identifier",
          "start": 148,
          "end": 151,
          "name": "out",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 161,
      "expression": {
        "type": "MemberExpression",
        "start": 154,
        "end": 161,
        "object": {
          "type": "MemberExpression",
          "start": 154,
          "end": 159,
          "object": {
            "type": "Identifier",
            "start": 154,
            "end": 157,
            "name": "out",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 179,
      "expression": {
        "type": "MemberExpression",
        "start": 162,
        "end": 179,
        "object": {
          "type": "MemberExpression",
          "start": 162,
          "end": 177,
          "object": {
            "type": "MemberExpression",
            "start": 162,
            "end": 175,
            "object": {
              "type": "MemberExpression",
              "start": 162,
              "end": 173,
              "object": {
                "type": "MemberExpression",
                "start": 162,
                "end": 171,
                "object": {
                  "type": "MemberExpression",
                  "start": 162,
                  "end": 169,
                  "object": {
                    "type": "MemberExpression",
                    "start": 162,
                    "end": 167,
                    "object": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 165,
                      "name": "out",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 179,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 182,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 194,
        "end": 212,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 196,
            "end": 210,
            "parameters": [
              {
                "type": "Identifier",
                "start": 197,
                "end": 206,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 198,
                  "end": 206,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 200,
                    "end": 206
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 210,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 229,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "name": "B",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 240,
            "name": "oub",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 243,
            "end": 249,
            "callee": {
              "type": "Identifier",
              "start": 243,
              "end": 246,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "name": "b",
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
      "type": "ExpressionStatement",
      "start": 251,
      "end": 256,
      "expression": {
        "type": "MemberExpression",
        "start": 251,
        "end": 256,
        "object": {
          "type": "Identifier",
          "start": 251,
          "end": 254,
          "name": "oub",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 255,
          "end": 256,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 264,
      "expression": {
        "type": "MemberExpression",
        "start": 257,
        "end": 264,
        "object": {
          "type": "MemberExpression",
          "start": 257,
          "end": 262,
          "object": {
            "type": "Identifier",
            "start": 257,
            "end": 260,
            "name": "oub",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 263,
          "end": 264,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 280,
      "expression": {
        "type": "MemberExpression",
        "start": 265,
        "end": 280,
        "object": {
          "type": "MemberExpression",
          "start": 265,
          "end": 278,
          "object": {
            "type": "MemberExpression",
            "start": 265,
            "end": 276,
            "object": {
              "type": "MemberExpression",
              "start": 265,
              "end": 274,
              "object": {
                "type": "MemberExpression",
                "start": 265,
                "end": 272,
                "object": {
                  "type": "MemberExpression",
                  "start": 265,
                  "end": 270,
                  "object": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 268,
                    "name": "oub",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 270,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 279,
          "end": 280,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 305,
            "name": "xhr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 305,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 305,
                  "name": "XMLHttpRequest",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 317,
            "name": "out2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 320,
            "end": 328,
            "callee": {
              "type": "Identifier",
              "start": 320,
              "end": 323,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 324,
                "end": 327,
                "name": "xhr",
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
      "type": "ExpressionStatement",
      "start": 330,
      "end": 346,
      "expression": {
        "type": "MemberExpression",
        "start": 330,
        "end": 346,
        "object": {
          "type": "Identifier",
          "start": 330,
          "end": 334,
          "name": "out2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 335,
          "end": 346,
          "name": "responseXML",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 347,
      "end": 394,
      "expression": {
        "type": "MemberExpression",
        "start": 347,
        "end": 394,
        "object": {
          "type": "MemberExpression",
          "start": 347,
          "end": 387,
          "object": {
            "type": "MemberExpression",
            "start": 347,
            "end": 377,
            "object": {
              "type": "MemberExpression",
              "start": 347,
              "end": 363,
              "object": {
                "type": "Identifier",
                "start": 347,
                "end": 351,
                "name": "out2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 352,
                "end": 363,
                "name": "responseXML",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 364,
              "end": 377,
              "name": "activeElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 378,
            "end": 387,
            "name": "className",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 388,
          "end": 394,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
