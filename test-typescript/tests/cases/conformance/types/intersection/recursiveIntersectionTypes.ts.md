recursiveIntersectionTypes.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 416,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1,
      "end": 50,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "decorators": [],
        "name": "LinkedList",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 22,
        "end": 49,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 22,
            "end": 23,
            "typeName": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 26,
            "end": 49,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 28,
                "end": 47,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 32,
                  "decorators": [],
                  "name": "next",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 34,
                    "end": 47,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 44,
                      "end": 47,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 45,
                          "end": 46,
                          "typeName": {
                            "type": "Identifier",
                            "start": 45,
                            "end": 46,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 44,
                      "decorators": [],
                      "name": "LinkedList",
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
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 90,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 90,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 88,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 68,
        "decorators": [],
        "name": "Entity",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 147,
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 147,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 131,
            "end": 145,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 136,
              "decorators": [],
              "name": "price",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 138,
                "end": 144
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 118,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "decorators": [],
            "name": "Entity",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 109,
        "decorators": [],
        "name": "Product",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 183,
            "decorators": [],
            "name": "entityList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 183,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 175,
                  "end": 183,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 176,
                      "end": 182,
                      "typeName": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 182,
                        "decorators": [],
                        "name": "Entity",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 175,
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 193,
            "end": 208,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 193,
              "end": 203,
              "decorators": [],
              "name": "entityList",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 204,
              "end": 208,
              "decorators": [],
              "name": "name",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 218,
            "end": 238,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 218,
              "end": 233,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 218,
                "end": 228,
                "decorators": [],
                "name": "entityList",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 229,
                "end": 233,
                "decorators": [],
                "name": "next",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 234,
              "end": 238,
              "decorators": [],
              "name": "name",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 248,
            "end": 273,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 248,
              "end": 268,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 248,
                "end": 263,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 258,
                  "decorators": [],
                  "name": "entityList",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 263,
                  "decorators": [],
                  "name": "next",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 264,
                "end": 268,
                "decorators": [],
                "name": "next",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "decorators": [],
              "name": "name",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 313,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 283,
            "end": 313,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 283,
              "end": 308,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 283,
                "end": 303,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 283,
                  "end": 298,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 293,
                    "decorators": [],
                    "name": "entityList",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 298,
                    "decorators": [],
                    "name": "next",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 303,
                  "decorators": [],
                  "name": "next",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 308,
                "decorators": [],
                "name": "next",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 309,
              "end": 313,
              "decorators": [],
              "name": "name",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 352,
            "decorators": [],
            "name": "productList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 333,
                "end": 352,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 343,
                  "end": 352,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 351,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 351,
                        "decorators": [],
                        "name": "Product",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 343,
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 354,
      "end": 379,
      "expression": {
        "type": "AssignmentExpression",
        "start": 354,
        "end": 378,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 354,
          "end": 364,
          "decorators": [],
          "name": "entityList",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 367,
          "end": 378,
          "decorators": [],
          "name": "productList",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 405,
      "expression": {
        "type": "AssignmentExpression",
        "start": 380,
        "end": 404,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 380,
          "end": 391,
          "decorators": [],
          "name": "productList",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 394,
          "end": 404,
          "decorators": [],
          "name": "entityList",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
