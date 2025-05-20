__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 339,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 86,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 84,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 40,
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
              "start": 40,
              "end": 84,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 41,
                  "end": 58,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 58,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 52,
                        "end": 58
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 60,
                  "end": 79,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 79,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 73,
                        "end": 79
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 96,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 96,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "C",
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
      "start": 98,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 106,
            "end": 109,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "y",
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
      "start": 111,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 117,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 120,
            "end": 123,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "x",
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
      "start": 134,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 140,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 143,
            "end": 146,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "z",
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
      "type": "ClassDeclaration",
      "start": 158,
      "end": 238,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 169,
        "end": 238,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 175,
            "end": 180,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
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
              "start": 176,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
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
            "start": 185,
            "end": 236,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 196,
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
              "start": 196,
              "end": 236,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 236,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 201,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 200,
                      "end": 201,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 201,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 203,
                  "end": 215,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 215,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 214,
                        "end": 215,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 215,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 217,
                  "end": 231,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 231,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 228,
                      "end": 231,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 230,
                        "end": 231,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 231,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 164,
        "end": 165,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 165,
        "end": 168,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 166,
            "end": 167,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
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
      "type": "VariableDeclaration",
      "start": 240,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 256,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 256,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 256,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 256,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 248,
                  "end": 256,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 249,
                      "end": 255
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "D",
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
      "start": 258,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 266,
            "end": 269,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "y",
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
      "start": 271,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 277,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 280,
            "end": 283,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "x",
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
      "start": 294,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 306,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 303,
            "end": 306,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "a",
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
      "start": 317,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 323,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 326,
            "end": 329,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
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
