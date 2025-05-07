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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 38,
        "raw": "\"./other\"",
        "value": "./other",
        "regex": null,
        "bigint": null
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null
          }
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 132,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 48,
        "end": 132,
        "async": false,
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
                "callee": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 69,
          "decorators": [],
          "name": "wrappedTest1",
          "optional": false,
          "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 69,
          "end": 90,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 70,
              "end": 71,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 73,
              "end": 89,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 225,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 141,
        "end": 225,
        "async": false,
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
                "callee": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 214,
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 150,
          "end": 162,
          "decorators": [],
          "name": "wrappedTest2",
          "optional": false,
          "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 162,
          "end": 183,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 163,
              "end": 164,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 166,
              "end": 182,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 227,
      "end": 286,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 234,
        "end": 286,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 239,
          "end": 242,
          "decorators": [],
          "name": "Obj",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 245,
          "end": 285,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 249,
              "end": 259,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
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
                "start": 250,
                "end": 258,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 252,
                  "end": 258
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 262,
              "end": 283,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 271,
                "end": 274,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 274,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 276,
                  "end": 282
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 288,
      "end": 353,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 295,
        "end": 353,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 301,
            "end": 352,
            "definite": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 346,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Literal",
                  "start": 348,
                  "end": 351,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 324,
                "end": 336,
                "decorators": [],
                "name": "wrappedTest1",
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 354,
      "end": 419,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 361,
        "end": 419,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 367,
            "end": 418,
            "definite": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 412,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Literal",
                  "start": 414,
                  "end": 417,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 390,
                "end": 402,
                "decorators": [],
                "name": "wrappedTest2",
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 45,
        "decorators": [],
        "name": "OmitReal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 72,
        "end": 100,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 76,
          "end": 100,
          "params": [
            {
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
            },
            {
              "type": "TSTypeReference",
              "start": 80,
              "end": 99,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 98,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 87,
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 72,
          "end": 76,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 68,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
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
      "type": "TSTypeAliasDeclaration",
      "start": 134,
      "end": 233,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 151,
        "decorators": [],
        "name": "OmitUnveiled",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 193,
        "end": 232,
        "constraint": {
          "type": "TSTypeReference",
          "start": 203,
          "end": 222,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "start": 220,
                "end": 221,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 203,
            "end": 210,
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 225,
          "end": 229,
          "indexType": {
            "type": "TSTypeReference",
            "start": 227,
            "end": 228,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 225,
            "end": 226,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
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
        "start": 151,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 189,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
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
      "type": "ExportNamedDeclaration",
      "start": 235,
      "end": 331,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 242,
        "end": 331,
        "async": false,
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
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 251,
          "end": 256,
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 301,
              "end": 307,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 302,
                  "end": 303,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 305,
                  "end": 306,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 306,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 293,
              "end": 301,
              "decorators": [],
              "name": "OmitReal",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 256,
          "end": 277,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 257,
              "end": 258,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 260,
              "end": 276,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 333,
      "end": 433,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 340,
        "end": 433,
        "async": false,
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
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 349,
          "end": 354,
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 382,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 403,
              "end": 409,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 404,
                  "end": 405,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 405,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 407,
                  "end": 408,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 391,
              "end": 403,
              "decorators": [],
              "name": "OmitUnveiled",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 354,
          "end": 375,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 355,
              "end": 356,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 358,
              "end": 374,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 368,
                "end": 374
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
