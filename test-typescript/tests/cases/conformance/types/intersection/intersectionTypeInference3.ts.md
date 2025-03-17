__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "name": "Nominal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "name": "Kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 48,
              "end": 54
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "name": "Type",
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
              "name": "Type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 78,
                  "end": 92,
                  "object": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 84,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 92,
                    "name": "species",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
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
                      "name": "Kind",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 105,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 114,
        "end": 134,
        "typeName": {
          "type": "Identifier",
          "start": 114,
          "end": 121,
          "name": "Nominal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": "A",
                "raw": "'A'"
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 127,
              "end": 133
            }
          ]
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 160,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "A",
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
      "start": 162,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 185,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 185,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 182,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "A",
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
      "start": 188,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 196,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 199,
            "end": 234,
            "callee": {
              "type": "MemberExpression",
              "start": 199,
              "end": 219,
              "object": {
                "type": "CallExpression",
                "start": 199,
                "end": 212,
                "callee": {
                  "type": "MemberExpression",
                  "start": 199,
                  "end": 209,
                  "object": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 204,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 209,
                    "name": "from",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 213,
                "end": 219,
                "name": "concat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 220,
                "end": 233,
                "callee": {
                  "type": "MemberExpression",
                  "start": 220,
                  "end": 230,
                  "object": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 225,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 230,
                    "name": "from",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
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
      "type": "TSDeclareFunction",
      "start": 255,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
        "name": "from",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 276,
        "end": 279,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 277,
            "end": 278,
            "name": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 314,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 314,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 311,
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "A",
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
          },
          "init": {
            "type": "CallExpression",
            "start": 317,
            "end": 323,
            "callee": {
              "type": "Identifier",
              "start": 317,
              "end": 321,
              "name": "from",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
