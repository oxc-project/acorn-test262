__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 295,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 30,
      "end": 64,
      "body": {
        "type": "TSInterfaceBody",
        "start": 42,
        "end": 64,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 48,
            "end": 62,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 74,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "I",
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
      "start": 76,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 90,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 84,
                "end": 90
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 93,
            "end": 96,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "i",
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
      "type": "VariableDeclaration",
      "start": 98,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 113,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 107,
                "end": 113
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 116,
            "end": 123,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "i",
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
      "start": 125,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 158,
            "decorators": [],
            "name": "r2c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 158,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 134,
                "end": 158,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 135,
                    "end": 141,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 141,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 138,
                        "end": 141
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 143,
                    "end": 150,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 147,
                        "end": 150
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 158,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 155,
                    "end": 158
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 161,
            "end": 168,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 163,
              "end": 168,
              "decorators": [],
              "name": "apply",
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
      "start": 171,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 200,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 178,
                "end": 200,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 184,
                    "end": 198,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 189,
                      "end": 197,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 191,
                        "end": 197
                      }
                    }
                  }
                ]
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
      "start": 202,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 222,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 216,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 216,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 210,
                "end": 216
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 219,
            "end": 222,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "b",
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
      "type": "VariableDeclaration",
      "start": 224,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 239,
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 239,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 233,
                "end": 239
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 242,
            "end": 249,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "decorators": [],
              "name": "b",
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
      "start": 251,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 284,
            "decorators": [],
            "name": "r4c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 284,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 260,
                "end": 284,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 261,
                    "end": 267,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 262,
                      "end": 267,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 264,
                        "end": 267
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 269,
                    "end": 276,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 271,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 273,
                        "end": 276
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 278,
                  "end": 284,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 281,
                    "end": 284
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 287,
            "end": 294,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 289,
              "end": 294,
              "decorators": [],
              "name": "apply",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
