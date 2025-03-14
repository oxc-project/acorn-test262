intersectionTypeInference3.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 325,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 103,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "decorators": [],
        "name": "Nominal",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 64,
        "end": 102,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 64,
            "end": 68,
            "typeName": {
              "type": "Identifier",
              "start": 64,
              "end": 68,
              "decorators": [],
              "name": "Type",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 71,
            "end": 102,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 77,
                "end": 100,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 78,
                  "end": 92,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 84,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 92,
                    "decorators": [],
                    "name": "species",
                    "optional": false
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 99,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 99,
                      "decorators": [],
                      "name": "Kind",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 54,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 48,
              "end": 54
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "Kind",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 60,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "Type",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 105,
      "end": 135,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 114,
        "end": 134,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 121,
          "end": 134,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 122,
              "end": 125,
              "literal": {
                "type": "Literal",
                "start": 122,
                "end": 125,
                "raw": "'A'",
                "value": "A"
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 127,
              "end": 133
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 114,
          "end": 121,
          "decorators": [],
          "name": "Nominal",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 160,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 160,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 157,
                  "end": 160,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 159,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "Set",
                  "optional": false
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
      "start": 162,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 185,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 185,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 182,
                  "end": 185,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 183,
                      "end": 184,
                      "typeName": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 182,
                  "decorators": [],
                  "name": "Set",
                  "optional": false
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
      "start": 188,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 234,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 196,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 199,
            "end": 234,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 220,
                "end": 233,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 220,
                  "end": 230,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 225,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 230,
                    "decorators": [],
                    "name": "from",
                    "optional": false
                  }
                },
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 199,
              "end": 219,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 199,
                "end": 212,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 199,
                  "end": 209,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 204,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 209,
                    "decorators": [],
                    "name": "from",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 213,
                "end": 219,
                "decorators": [],
                "name": "concat",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 255,
      "end": 287,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
        "decorators": [],
        "name": "from",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 281,
        "end": 286,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 283,
          "end": 286,
          "elementType": {
            "type": "TSTypeReference",
            "start": 283,
            "end": 284,
            "typeName": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 276,
        "end": 279,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 277,
            "end": 278,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 288,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 323,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 314,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 314,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 311,
                  "end": 314,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 312,
                      "end": 313,
                      "typeName": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 313,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 311,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 317,
            "end": 323,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 317,
              "end": 321,
              "decorators": [],
              "name": "from",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
