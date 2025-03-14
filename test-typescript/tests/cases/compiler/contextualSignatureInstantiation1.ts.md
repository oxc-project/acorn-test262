contextualSignatureInstantiation1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 474,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 60,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "map",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 41,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 41,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 30,
              "end": 41,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 35,
                      "typeName": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 40,
                  "end": 41,
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 42,
        "end": 59,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 44,
          "end": 59,
          "params": [
            {
              "type": "Identifier",
              "start": 45,
              "end": 51,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 46,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 48,
                  "end": 51,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 48,
                    "end": 49,
                    "typeName": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    }
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 59,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 56,
              "end": 59,
              "elementType": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 57,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
      "start": 61,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 69,
            "end": 102,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 94,
              "end": 102,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 102,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 73,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 74,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 76,
                    "end": 82
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 84,
                "end": 89,
                "decorators": [],
                "name": "y",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 86,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 88,
                    "end": 89,
                    "typeName": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 69,
              "end": 72,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 70,
                  "end": 71,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 111,
            "decorators": [],
            "name": "r99",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 120,
            "arguments": [
              {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 197,
      "end": 285,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
        "decorators": [],
        "name": "map2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 252,
          "end": 266,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 253,
            "end": 266,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 255,
              "end": 266,
              "params": [
                {
                  "type": "Identifier",
                  "start": 256,
                  "end": 260,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 257,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 259,
                      "end": 260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 260,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 262,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 265,
                  "end": 266,
                  "typeName": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 266,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 267,
        "end": 284,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 269,
          "end": 284,
          "params": [
            {
              "type": "Identifier",
              "start": 270,
              "end": 276,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 271,
                "end": 276,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 273,
                  "end": 276,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 273,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    }
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 278,
            "end": 284,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 281,
              "end": 284,
              "elementType": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 218,
        "end": 251,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 247,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 229,
              "end": 247,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 231,
                  "end": 245,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 237,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 249,
            "end": 250,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
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
      "start": 286,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 292,
            "decorators": [],
            "name": "e2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 295,
            "end": 328,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 320,
              "end": 328,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 320,
                "end": 321,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 322,
                "end": 328,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 299,
                "end": 308,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 300,
                  "end": 308,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 302,
                    "end": 308
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 310,
                "end": 315,
                "decorators": [],
                "name": "y",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 312,
                  "end": 315,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 314,
                    "end": 315,
                    "typeName": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 315,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 295,
              "end": 298,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 296,
                  "end": 297,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 297,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 338,
            "decorators": [],
            "name": "r100",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 341,
            "end": 349,
            "arguments": [
              {
                "type": "Identifier",
                "start": 346,
                "end": 348,
                "decorators": [],
                "name": "e2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 341,
              "end": 345,
              "decorators": [],
              "name": "map2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
