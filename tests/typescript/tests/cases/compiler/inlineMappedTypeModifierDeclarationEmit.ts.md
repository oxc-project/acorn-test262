__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 419,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 38,
        "value": "./other",
        "raw": "\"./other\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 132,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 48,
        "end": 132,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 69,
          "decorators": [],
          "name": "wrappedTest1",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 69,
          "end": 90,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 70,
              "end": 71,
              "name": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 73,
              "end": 89,
              "name": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 91,
            "end": 97,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 99,
            "end": 103,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 105,
          "end": 132,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 109,
              "end": 130,
              "argument": {
                "type": "CallExpression",
                "start": 116,
                "end": 129,
                "callee": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 122,
                    "end": 125,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 225,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 141,
        "end": 225,
        "id": {
          "type": "Identifier",
          "start": 150,
          "end": 162,
          "decorators": [],
          "name": "wrappedTest2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 162,
          "end": 183,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 163,
              "end": 164,
              "name": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 166,
              "end": 182,
              "name": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 184,
            "end": 190,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 189,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 192,
            "end": 196,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 198,
          "end": 225,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 202,
              "end": 223,
              "argument": {
                "type": "CallExpression",
                "start": 209,
                "end": 222,
                "callee": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 214,
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 227,
      "end": 286,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 234,
        "end": 286,
        "id": {
          "type": "Identifier",
          "start": 239,
          "end": 242,
          "decorators": [],
          "name": "Obj",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 245,
          "end": 285,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 249,
              "end": 259,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 250,
                "end": 258,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 252,
                  "end": 258
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 262,
              "end": 283,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 271,
                "end": 274,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 274,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 276,
                  "end": 282
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 288,
      "end": 353,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 295,
        "end": 353,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 301,
            "end": 352,
            "id": {
              "type": "Identifier",
              "start": 301,
              "end": 321,
              "decorators": [],
              "name": "processedInternally1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 324,
              "end": 352,
              "callee": {
                "type": "Identifier",
                "start": 324,
                "end": 336,
                "decorators": [],
                "name": "wrappedTest1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 337,
                  "end": 346,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 337,
                    "end": 339,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 343,
                    "end": 346,
                    "typeName": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 346,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "Literal",
                  "start": 348,
                  "end": 351,
                  "value": "a",
                  "raw": "\"a\""
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 354,
      "end": 419,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 361,
        "end": 419,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 367,
            "end": 418,
            "id": {
              "type": "Identifier",
              "start": 367,
              "end": 387,
              "decorators": [],
              "name": "processedInternally2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 390,
              "end": 418,
              "callee": {
                "type": "Identifier",
                "start": 390,
                "end": 402,
                "decorators": [],
                "name": "wrappedTest2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 403,
                  "end": 412,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 403,
                    "end": 405,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 409,
                    "end": 412,
                    "typeName": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 412,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "Literal",
                  "start": 414,
                  "end": 417,
                  "value": "a",
                  "raw": "\"a\""
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "start": 32,
  "end": 433,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 32,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 45,
        "decorators": [],
        "name": "OmitReal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 69,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 59,
              "end": 68,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 72,
        "end": 100,
        "typeName": {
          "type": "Identifier",
          "start": 72,
          "end": 76,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 76,
          "end": 100,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 77,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 80,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 87,
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 87,
                "end": 99,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 88,
                    "end": 95,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 94,
                      "end": 95,
                      "typeName": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 98,
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 134,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 151,
        "decorators": [],
        "name": "OmitUnveiled",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 165,
              "end": 189,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 165,
                  "end": 171
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 174,
                  "end": 180
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 183,
                  "end": 189
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 193,
        "end": 232,
        "key": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 203,
          "end": 222,
          "typeName": {
            "type": "Identifier",
            "start": 203,
            "end": 210,
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 210,
            "end": 222,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 211,
                "end": 218,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 217,
                  "end": 218,
                  "typeName": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 220,
                "end": 221,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 225,
          "end": 229,
          "objectType": {
            "type": "TSTypeReference",
            "start": 225,
            "end": 226,
            "typeName": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 227,
            "end": 228,
            "typeName": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 235,
      "end": 331,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 242,
        "end": 331,
        "id": {
          "type": "Identifier",
          "start": 251,
          "end": 256,
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 256,
          "end": 277,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 257,
              "end": 258,
              "name": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 260,
              "end": 276,
              "name": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 278,
            "end": 284,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 284,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 283,
                "end": 284,
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 286,
            "end": 290,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 290,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 289,
                "end": 290,
                "typeName": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 291,
          "end": 307,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 293,
            "end": 307,
            "typeName": {
              "type": "Identifier",
              "start": 293,
              "end": 301,
              "decorators": [],
              "name": "OmitReal",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 301,
              "end": 307,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 302,
                  "end": 303,
                  "typeName": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 305,
                  "end": 306,
                  "typeName": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 306,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 308,
          "end": 331,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 312,
              "end": 329,
              "argument": {
                "type": "TSAsExpression",
                "start": 319,
                "end": 328,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 319,
                  "end": 321,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 325,
                  "end": 328
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 333,
      "end": 433,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 340,
        "end": 433,
        "id": {
          "type": "Identifier",
          "start": 349,
          "end": 354,
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 354,
          "end": 375,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 355,
              "end": 356,
              "name": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 358,
              "end": 374,
              "name": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 368,
                "end": 374
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 376,
            "end": 382,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 382,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 381,
                "end": 382,
                "typeName": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 382,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 384,
            "end": 388,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 385,
              "end": 388,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 387,
                "end": 388,
                "typeName": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 389,
          "end": 409,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 391,
            "end": 409,
            "typeName": {
              "type": "Identifier",
              "start": 391,
              "end": 403,
              "decorators": [],
              "name": "OmitUnveiled",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 403,
              "end": 409,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 404,
                  "end": 405,
                  "typeName": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 405,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 407,
                  "end": 408,
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 410,
          "end": 433,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 414,
              "end": 431,
              "argument": {
                "type": "TSAsExpression",
                "start": 421,
                "end": 430,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 421,
                  "end": 423,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 427,
                  "end": 430
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
