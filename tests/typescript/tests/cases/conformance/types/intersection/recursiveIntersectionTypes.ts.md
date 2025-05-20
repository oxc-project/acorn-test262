__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 414,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 49,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "LinkedList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 21,
        "end": 48,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 21,
            "end": 22,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 25,
            "end": 48,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 27,
                "end": 46,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 31,
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 46,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 43,
                      "end": 46,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 44,
                          "end": 45,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 44,
                            "end": 45,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 43,
                      "decorators": [],
                      "name": "LinkedList",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 89,
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 89,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 87,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 67,
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 91,
      "end": 146,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 146,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 144,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 135,
              "decorators": [],
              "name": "price",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 143,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 137,
                "end": 143
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 117,
          "end": 123,
          "expression": {
            "type": "Identifier",
            "start": 117,
            "end": 123,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 108,
        "decorators": [],
        "name": "Product",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 182,
            "decorators": [],
            "name": "entityList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 182,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 174,
                  "end": 182,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 181,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 181,
                        "decorators": [],
                        "name": "Entity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 174,
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 184,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 192,
            "end": 207,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 192,
              "end": 202,
              "decorators": [],
              "name": "entityList",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 203,
              "end": 207,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 217,
            "end": 237,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 217,
              "end": 232,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 217,
                "end": 227,
                "decorators": [],
                "name": "entityList",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 232,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 233,
              "end": 237,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 247,
            "end": 272,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 247,
              "end": 267,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 247,
                "end": 262,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 257,
                  "decorators": [],
                  "name": "entityList",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 262,
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 263,
                "end": 267,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 268,
              "end": 272,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 312,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 282,
            "end": 312,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 282,
              "end": 307,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 282,
                "end": 302,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 282,
                  "end": 297,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 292,
                    "decorators": [],
                    "name": "entityList",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 297,
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 302,
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 303,
                "end": 307,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 308,
              "end": 312,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 351,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 351,
            "decorators": [],
            "name": "productList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 330,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 332,
                "end": 351,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 342,
                  "end": 351,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 343,
                      "end": 350,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 350,
                        "decorators": [],
                        "name": "Product",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 342,
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 353,
      "end": 378,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 353,
        "end": 377,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 353,
          "end": 363,
          "decorators": [],
          "name": "entityList",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 366,
          "end": 377,
          "decorators": [],
          "name": "productList",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 404,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 379,
        "end": 403,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 379,
          "end": 390,
          "decorators": [],
          "name": "productList",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 393,
          "end": 403,
          "decorators": [],
          "name": "entityList",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
