__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 423,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 43,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 41,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 41,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 28,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 35,
                      "end": 39,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 24,
                  "end": 25,
                  "typeName": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 56,
        "end": 59,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 58,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 77,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 66,
            "end": 75,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "name": "c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 90,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 99,
            "name": "i1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 101,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 113,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 110,
                  "end": 113,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 111,
                      "end": 112,
                      "typeName": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 112,
                        "name": "I",
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
      "start": 115,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 127,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 127,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 125,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "name": "C",
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
      "type": "FunctionDeclaration",
      "start": 130,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 142,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 143,
          "end": 147,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 147,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 146,
              "end": 147,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 149,
          "end": 153,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 153,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 152,
              "end": 153,
              "typeName": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 155,
        "end": 158,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 172,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 180,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 177,
                "end": 180,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 178,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "name": "I",
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
        {
          "type": "Identifier",
          "start": 182,
          "end": 189,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 189,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 186,
                "end": 189,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 187,
                    "end": 188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "name": "C",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 194,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 211,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 203,
                "end": 211,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 205,
                    "end": 209,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 209,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 208,
                        "end": 209,
                        "typeName": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "name": "C",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 214,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 234,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 219,
                  "end": 234,
                  "callee": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 224,
                    "end": 232,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 225,
                        "end": 231
                      }
                    ]
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 254,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 246,
                "end": 254,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 248,
                    "end": 252,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 249,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 249,
                      "end": 252,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 251,
                        "end": 252,
                        "typeName": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "name": "I",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 257,
            "end": 286,
            "properties": [
              {
                "type": "Property",
                "start": 259,
                "end": 284,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 262,
                  "end": 284,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 264,
                      "end": 282,
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 267,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 267,
                        "end": 282,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 270,
                          "end": 282,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 272,
                              "end": 280,
                              "argument": {
                                "type": "Literal",
                                "start": 279,
                                "end": 280,
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 296,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 300,
        "end": 323,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 306,
            "end": 311,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 310,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 310,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 316,
            "end": 321,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 320,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 296,
        "end": 299,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 297,
            "end": 298,
            "name": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 325,
      "end": 363,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 336,
        "name": "J",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 336,
        "end": 339,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 337,
            "end": 338,
            "name": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 340,
        "end": 363,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 346,
            "end": 351,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 349,
                "end": 350,
                "typeName": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 356,
            "end": 361,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 360,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 360,
                "typeName": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "name": "J",
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
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 365,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 372,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 376,
        "end": 379,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 372,
        "end": 375,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 373,
            "end": 374,
            "name": {
              "type": "Identifier",
              "start": 373,
              "end": 374,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 380,
      "end": 423,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 390,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 394,
          "end": 398,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 395,
            "end": 398,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 397,
              "end": 398,
              "typeName": {
                "type": "Identifier",
                "start": 397,
                "end": 398,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 403,
        "end": 423,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 409,
            "end": 421,
            "argument": {
              "type": "Literal",
              "start": 416,
              "end": 420,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 390,
        "end": 393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 391,
            "end": 392,
            "name": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
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
        "start": 399,
        "end": 402,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 401,
          "end": 402,
          "typeName": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
