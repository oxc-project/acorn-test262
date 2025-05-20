__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
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
        "name": "f0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 28,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 29,
        "end": 32,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 31,
          "end": 32,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "start": 34,
      "end": 84,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 69,
          "end": 74,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 74,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 74,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 75,
        "end": 83,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 77,
          "end": 83,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 78,
              "end": 79,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 81,
              "end": 82,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 55,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 67,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 61,
              "end": 67
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 142,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 111,
            "end": 116,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 115,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 140,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 132,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 132,
              "end": 140,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 138,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 138,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "type": "ClassDeclaration",
      "start": 143,
      "end": 217,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 217,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 191,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 184,
                "end": 190,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 185,
                    "end": 186,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 186,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 188,
                    "end": 189,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 215,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 207,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 207,
              "end": 215,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 213,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 212,
                      "end": 213,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 159,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 174,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 161,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 173,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 167,
              "end": 173
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "U",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1118,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "f0_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 18,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "decorators": [],
              "name": "f0",
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
      "start": 20,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "decorators": [],
            "name": "f0_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 34,
            "end": 39,
            "arguments": [
              {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 34,
              "end": 36,
              "decorators": [],
              "name": "f0",
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
      "start": 42,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 53,
            "decorators": [],
            "name": "f1_c0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 60,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 58,
              "decorators": [],
              "name": "f1",
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
      "start": 62,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "f1_c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 76,
            "end": 81,
            "arguments": [
              {
                "type": "Literal",
                "start": 79,
                "end": 80,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 76,
              "end": 78,
              "decorators": [],
              "name": "f1",
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
      "start": 84,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 95,
            "decorators": [],
            "name": "C0_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 98,
            "end": 106,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 104,
              "decorators": [],
              "name": "C0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 121,
            "decorators": [],
            "name": "C0_v0_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 124,
            "end": 131,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 124,
              "end": 129,
              "decorators": [],
              "name": "C0_v0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 145,
            "decorators": [],
            "name": "C0_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 148,
            "end": 157,
            "arguments": [
              {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 152,
              "end": 154,
              "decorators": [],
              "name": "C0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 172,
            "decorators": [],
            "name": "C0_v1_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 182,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 175,
              "end": 180,
              "decorators": [],
              "name": "C0_v1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 196,
            "decorators": [],
            "name": "C1_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 199,
            "end": 207,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 203,
              "end": 205,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 222,
            "decorators": [],
            "name": "C1_v0_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 225,
            "end": 232,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 225,
              "end": 230,
              "decorators": [],
              "name": "C1_v0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 258,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 246,
            "decorators": [],
            "name": "C1_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 249,
            "end": 258,
            "arguments": [
              {
                "type": "Literal",
                "start": 256,
                "end": 257,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 273,
            "decorators": [],
            "name": "C1_v1_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 276,
            "end": 283,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 276,
              "end": 281,
              "decorators": [],
              "name": "C1_v1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 286,
      "end": 311,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 309,
        "end": 311,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 297,
        "decorators": [],
        "name": "C0_B0",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 306,
        "end": 308,
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 312,
      "end": 381,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 381,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 341,
            "end": 379,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 341,
              "end": 352,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 379,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 355,
                "end": 379,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 365,
                    "end": 373,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 365,
                      "end": 372,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 365,
                        "end": 370
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 323,
        "decorators": [],
        "name": "C0_B1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 332,
        "end": 334,
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 382,
      "end": 452,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 405,
        "end": 452,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 411,
            "end": 450,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 422,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 422,
              "end": 450,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 425,
                "end": 450,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 435,
                    "end": 444,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 435,
                      "end": 443,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 441,
                          "end": 442,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 435,
                        "end": 440
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 393,
        "decorators": [],
        "name": "C0_B2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 402,
        "end": 404,
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 454,
      "end": 483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 482,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 468,
            "decorators": [],
            "name": "C0_B0_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 471,
            "end": 482,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 475,
              "end": 480,
              "decorators": [],
              "name": "C0_B0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 484,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 513,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 500,
            "decorators": [],
            "name": "C0_B0_v0_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 503,
            "end": 513,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 503,
              "end": 511,
              "decorators": [],
              "name": "C0_B0_v0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 516,
      "end": 546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 545,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 530,
            "decorators": [],
            "name": "C0_B0_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 533,
            "end": 545,
            "arguments": [
              {
                "type": "Literal",
                "start": 543,
                "end": 544,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 537,
              "end": 542,
              "decorators": [],
              "name": "C0_B0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 547,
      "end": 577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 576,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 563,
            "decorators": [],
            "name": "C0_B0_v1_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 566,
            "end": 576,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 566,
              "end": 574,
              "decorators": [],
              "name": "C0_B0_v1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 575,
              "end": 576,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 579,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 607,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 593,
            "decorators": [],
            "name": "C0_B1_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 596,
            "end": 607,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 600,
              "end": 605,
              "decorators": [],
              "name": "C0_B1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 609,
      "end": 639,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 638,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 625,
            "decorators": [],
            "name": "C0_B1_v0_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 628,
            "end": 638,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 628,
              "end": 636,
              "decorators": [],
              "name": "C0_B1_v0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 637,
              "end": 638,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 641,
      "end": 670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 647,
          "end": 669,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 647,
            "end": 655,
            "decorators": [],
            "name": "C0_B2_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 658,
            "end": 669,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 662,
              "end": 667,
              "decorators": [],
              "name": "C0_B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 671,
      "end": 701,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 677,
          "end": 700,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 677,
            "end": 687,
            "decorators": [],
            "name": "C0_B2_v0_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 690,
            "end": 700,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 690,
              "end": 698,
              "decorators": [],
              "name": "C0_B2_v0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 699,
              "end": 700,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 703,
      "end": 728,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 726,
        "end": 728,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 714,
        "decorators": [],
        "name": "C1_B0",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 723,
        "end": 725,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 729,
      "end": 798,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 752,
        "end": 798,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 758,
            "end": 796,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 758,
              "end": 769,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 769,
              "end": 796,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 772,
                "end": 796,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 782,
                    "end": 790,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 782,
                      "end": 789,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 782,
                        "end": 787
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 740,
        "decorators": [],
        "name": "C1_B1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 749,
        "end": 751,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 799,
      "end": 869,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 822,
        "end": 869,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 828,
            "end": 867,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 828,
              "end": 839,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 839,
              "end": 867,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 842,
                "end": 867,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 852,
                    "end": 861,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 852,
                      "end": 860,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 858,
                          "end": 859,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 852,
                        "end": 857
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 810,
        "decorators": [],
        "name": "C1_B2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 819,
        "end": 821,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 871,
      "end": 900,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 877,
          "end": 899,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 877,
            "end": 885,
            "decorators": [],
            "name": "C1_B0_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 888,
            "end": 899,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 892,
              "end": 897,
              "decorators": [],
              "name": "C1_B0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 931,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 907,
          "end": 930,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 907,
            "end": 917,
            "decorators": [],
            "name": "C1_B0_v0_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 920,
            "end": 930,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 920,
              "end": 928,
              "decorators": [],
              "name": "C1_B0_v0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 929,
              "end": 930,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 933,
      "end": 963,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 939,
          "end": 962,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 939,
            "end": 947,
            "decorators": [],
            "name": "C1_B0_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 950,
            "end": 962,
            "arguments": [
              {
                "type": "Literal",
                "start": 960,
                "end": 961,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 954,
              "end": 959,
              "decorators": [],
              "name": "C1_B0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 964,
      "end": 994,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 970,
          "end": 993,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 970,
            "end": 980,
            "decorators": [],
            "name": "C1_B0_v1_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 983,
            "end": 993,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 983,
              "end": 991,
              "decorators": [],
              "name": "C1_B0_v1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 992,
              "end": 993,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 996,
      "end": 1025,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1002,
          "end": 1024,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1002,
            "end": 1010,
            "decorators": [],
            "name": "C1_B1_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1013,
            "end": 1024,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1017,
              "end": 1022,
              "decorators": [],
              "name": "C1_B1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1026,
      "end": 1056,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1032,
          "end": 1055,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1032,
            "end": 1042,
            "decorators": [],
            "name": "C1_B1_v0_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1045,
            "end": 1055,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1045,
              "end": 1053,
              "decorators": [],
              "name": "C1_B1_v0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1054,
              "end": 1055,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1058,
      "end": 1087,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1064,
          "end": 1086,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1064,
            "end": 1072,
            "decorators": [],
            "name": "C1_B2_v0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1075,
            "end": 1086,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1079,
              "end": 1084,
              "decorators": [],
              "name": "C1_B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1088,
      "end": 1118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1094,
          "end": 1117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1094,
            "end": 1104,
            "decorators": [],
            "name": "C1_B2_v0_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1107,
            "end": 1117,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1107,
              "end": 1115,
              "decorators": [],
              "name": "C1_B2_v0",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1116,
              "end": 1117,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
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
