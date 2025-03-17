__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "name": "LinkedList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 32,
                  "name": "next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 34,
                    "end": 47,
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 44,
                      "name": "LinkedList",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 68,
        "name": "Entity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
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
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 109,
        "name": "Product",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 118,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "name": "Entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 136,
              "name": "price",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 138,
                "end": 144
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
      "start": 149,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 183,
            "name": "entityList",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 175,
                  "name": "LinkedList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "Entity",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 193,
            "end": 208,
            "object": {
              "type": "Identifier",
              "start": 193,
              "end": 203,
              "name": "entityList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 204,
              "end": 208,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 218,
            "end": 238,
            "object": {
              "type": "MemberExpression",
              "start": 218,
              "end": 233,
              "object": {
                "type": "Identifier",
                "start": 218,
                "end": 228,
                "name": "entityList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 229,
                "end": 233,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 234,
              "end": 238,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 248,
            "end": 273,
            "object": {
              "type": "MemberExpression",
              "start": 248,
              "end": 268,
              "object": {
                "type": "MemberExpression",
                "start": 248,
                "end": 263,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 258,
                  "name": "entityList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 263,
                  "name": "next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 264,
                "end": 268,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 283,
            "end": 313,
            "object": {
              "type": "MemberExpression",
              "start": 283,
              "end": 308,
              "object": {
                "type": "MemberExpression",
                "start": 283,
                "end": 303,
                "object": {
                  "type": "MemberExpression",
                  "start": 283,
                  "end": 298,
                  "object": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 293,
                    "name": "entityList",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 298,
                    "name": "next",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 303,
                  "name": "next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 308,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 309,
              "end": 313,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 352,
            "name": "productList",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 333,
                "end": 352,
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 343,
                  "name": "LinkedList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "Product",
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
      "kind": "var",
      "declare": false
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
          "name": "entityList",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 367,
          "end": 378,
          "name": "productList",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "productList",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 394,
          "end": 404,
          "name": "entityList",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
