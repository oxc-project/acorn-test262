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
            "name": "test1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "test1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "test2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "name": "test2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "wrappedTest1",
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
            "start": 91,
            "end": 97,
            "name": "obj",
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
            "start": 99,
            "end": 103,
            "name": "k",
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
          }
        ],
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
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 122,
                    "end": 125,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
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
            },
            {
              "type": "TSTypeParameter",
              "start": 73,
              "end": 89,
              "name": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "wrappedTest2",
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
            "start": 184,
            "end": 190,
            "name": "obj",
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
            "start": 192,
            "end": 196,
            "name": "k",
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
          }
        ],
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
                  "name": "test2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
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
            },
            {
              "type": "TSTypeParameter",
              "start": 166,
              "end": 182,
              "name": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "Obj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 288,
      "end": 353,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 295,
        "end": 353,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 301,
            "end": 352,
            "id": {
              "type": "Identifier",
              "start": 301,
              "end": 321,
              "name": "processedInternally1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 324,
              "end": 352,
              "callee": {
                "type": "Identifier",
                "start": 324,
                "end": 336,
                "name": "wrappedTest1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 354,
      "end": 419,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 361,
        "end": 419,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 367,
            "end": 418,
            "id": {
              "type": "Identifier",
              "start": 367,
              "end": 387,
              "name": "processedInternally2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 390,
              "end": 418,
              "callee": {
                "type": "Identifier",
                "start": 390,
                "end": 402,
                "name": "wrappedTest2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
        "name": "OmitReal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          },
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "Exclude",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
        "name": "OmitUnveiled",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 198,
          "end": 222,
          "name": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 203,
            "end": 222,
            "typeName": {
              "type": "Identifier",
              "start": 203,
              "end": 210,
              "name": "Exclude",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 203,
          "end": 222,
          "typeName": {
            "type": "Identifier",
            "start": 203,
            "end": 210,
            "name": "Exclude",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "key": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
          "name": "test1",
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
            "start": 278,
            "end": 284,
            "name": "obj",
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
            "start": 286,
            "end": 290,
            "name": "k",
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
          }
        ],
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
            },
            {
              "type": "TSTypeParameter",
              "start": 260,
              "end": 276,
              "name": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "OmitReal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "test2",
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
            "start": 376,
            "end": 382,
            "name": "obj",
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
            "start": 384,
            "end": 388,
            "name": "k",
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
          }
        ],
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
            },
            {
              "type": "TSTypeParameter",
              "start": 358,
              "end": 374,
              "name": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "OmitUnveiled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
