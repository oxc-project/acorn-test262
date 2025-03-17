__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 467,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 59,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 58,
        "raw": "'./api'",
        "value": "./api"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 25,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 25,
            "decorators": [],
            "name": "dropPrivateProps1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 25,
            "decorators": [],
            "name": "dropPrivateProps1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 27,
          "end": 44,
          "imported": {
            "type": "Identifier",
            "start": 27,
            "end": 44,
            "decorators": [],
            "name": "dropPrivateProps2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 27,
            "end": 44,
            "decorators": [],
            "name": "dropPrivateProps2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 70,
            "end": 114,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 88,
                "end": 113,
                "properties": [
                  {
                    "type": "Property",
                    "start": 89,
                    "end": 96,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 92,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 94,
                      "end": 96,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  {
                    "type": "Property",
                    "start": 98,
                    "end": 112,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 102,
                      "decorators": [],
                      "name": "_bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 104,
                      "end": 112,
                      "raw": "'secret'",
                      "value": "secret"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 87,
              "decorators": [],
              "name": "dropPrivateProps1",
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
      "start": 256,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 310,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 310,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 284,
                "end": 309,
                "properties": [
                  {
                    "type": "Property",
                    "start": 285,
                    "end": 292,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 288,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 290,
                      "end": 292,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  {
                    "type": "Property",
                    "start": 294,
                    "end": 308,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 298,
                      "decorators": [],
                      "name": "_bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 300,
                      "end": 308,
                      "raw": "'secret'",
                      "value": "secret"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 283,
              "decorators": [],
              "name": "dropPrivateProps2",
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
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 68,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 55,
        "end": 67,
        "raw": "'./internal'",
        "value": "./internal"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 27,
            "decorators": [],
            "name": "excludePrivateKeys1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 27,
            "decorators": [],
            "name": "excludePrivateKeys1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 29,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 29,
            "end": 48,
            "decorators": [],
            "name": "excludePrivateKeys2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 48,
            "decorators": [],
            "name": "excludePrivateKeys2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 146,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 76,
        "end": 146,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 82,
            "end": 145,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 99,
              "decorators": [],
              "name": "dropPrivateProps1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 102,
              "end": 145,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 121,
                "end": 145,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 141,
                    "end": 144,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 140,
                  "decorators": [],
                  "name": "excludePrivateKeys1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 116,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 113,
                      "end": 116,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 116,
                        "decorators": [],
                        "name": "Obj",
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
                "start": 102,
                "end": 107,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 103,
                    "end": 106,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 106,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
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
      "start": 147,
      "end": 224,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 154,
        "end": 224,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 160,
            "end": 223,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 160,
              "end": 177,
              "decorators": [],
              "name": "dropPrivateProps2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 180,
              "end": 223,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 199,
                "end": 223,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 219,
                    "end": 222,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 218,
                  "decorators": [],
                  "name": "excludePrivateKeys2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 186,
                  "end": 194,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 194,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 194,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 194,
                        "decorators": [],
                        "name": "Obj",
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
                "start": 180,
                "end": 185,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 181,
                    "end": 184,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 184,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
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
  "start": 0,
  "end": 331,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 100,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 100,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 43,
          "decorators": [],
          "name": "excludePrivateKeys1",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 57,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 57,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 58,
          "end": 99,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 60,
            "end": 99,
            "constraint": {
              "type": "TSTypeReference",
              "start": 67,
              "end": 89,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 78,
                "end": 89,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 79,
                    "end": 88,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 88,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 88,
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 67,
                "end": 78,
                "decorators": [],
                "name": "PublicKeys1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": null,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 92,
              "end": 98,
              "indexType": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 95,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 95,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 43,
          "end": 48,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 44,
              "end": 47,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 44,
                "end": 47,
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 101,
      "end": 201,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 108,
        "end": 201,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 125,
          "end": 144,
          "decorators": [],
          "name": "excludePrivateKeys2",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 150,
            "end": 158,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 158,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 158,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 159,
          "end": 200,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 161,
            "end": 200,
            "constraint": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 190,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 179,
                "end": 190,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 180,
                    "end": 189,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 186,
                      "end": 189,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 189,
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 179,
                "decorators": [],
                "name": "PublicKeys2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": null,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 193,
              "end": 199,
              "indexType": {
                "type": "TSTypeReference",
                "start": 197,
                "end": 198,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 198,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 196,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 144,
          "end": 149,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 145,
              "end": 148,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 202,
      "end": 266,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 209,
        "end": 266,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 214,
          "end": 225,
          "decorators": [],
          "name": "PublicKeys1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 231,
          "end": 265,
          "checkType": {
            "type": "TSTypeReference",
            "start": 231,
            "end": 232,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 241,
            "end": 253,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 241,
                "end": 245,
                "tail": false,
                "value": {
                  "cooked": "_",
                  "raw": "_"
                }
              },
              {
                "type": "TemplateElement",
                "start": 251,
                "end": 253,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 245,
                "end": 251
              }
            ]
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 264,
            "end": 265,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 256,
            "end": 261
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 225,
          "end": 228,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 226,
              "end": 227,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 267,
      "end": 331,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 283,
        "decorators": [],
        "name": "PublicKeys2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 296,
        "end": 330,
        "checkType": {
          "type": "TSTypeReference",
          "start": 296,
          "end": 297,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 306,
          "end": 318,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 306,
              "end": 310,
              "tail": false,
              "value": {
                "cooked": "_",
                "raw": "_"
              }
            },
            {
              "type": "TemplateElement",
              "start": 316,
              "end": 318,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 310,
              "end": 316
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 329,
          "end": 330,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 321,
          "end": 326
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 283,
        "end": 286,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 284,
            "end": 285,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
