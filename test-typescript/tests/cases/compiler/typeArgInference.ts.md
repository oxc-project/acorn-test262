__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 451,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 145,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 86,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 19,
              "end": 25,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 20,
                  "end": 21,
                  "name": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 21,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 23,
                  "end": 24,
                  "name": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 46,
                "name": "a1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 30,
                    "end": 46,
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "start": 30,
                      "end": 44,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 32,
                          "end": 37,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 33,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 33,
                            "end": 36,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 35,
                              "end": 36,
                              "typeName": {
                                "type": "Identifier",
                                "start": 35,
                                "end": 36,
                                "name": "T",
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
                          "start": 38,
                          "end": 42,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 38,
                            "end": 39,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 39,
                            "end": 42,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 41,
                              "end": 42,
                              "typeName": {
                                "type": "Identifier",
                                "start": 41,
                                "end": 42,
                                "name": "U",
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
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 48,
                "end": 68,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 52,
                    "end": 68,
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "start": 52,
                      "end": 66,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 54,
                          "end": 59,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 54,
                            "end": 55,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 55,
                            "end": 58,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 57,
                              "end": 58,
                              "typeName": {
                                "type": "Identifier",
                                "start": 57,
                                "end": 58,
                                "name": "T",
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
                          "start": 60,
                          "end": 64,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 61,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 61,
                            "end": 64,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 63,
                              "end": 64,
                              "typeName": {
                                "type": "Identifier",
                                "start": 63,
                                "end": 64,
                                "name": "U",
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
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 71,
                "end": 85,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 73,
                    "end": 78,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 74,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 76,
                        "end": 77,
                        "typeName": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 77,
                          "name": "T",
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
                    "start": 79,
                    "end": 83,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 80,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 80,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 82,
                        "end": 83,
                        "typeName": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 83,
                          "name": "U",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 91,
            "end": 143,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 92,
              "end": 98,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 93,
                  "end": 94,
                  "name": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 96,
                  "end": 97,
                  "name": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "name": "U",
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
            "params": [
              {
                "type": "RestElement",
                "start": 99,
                "end": 125,
                "argument": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 105,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 105,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 107,
                    "end": 125,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 107,
                      "end": 123,
                      "elementType": {
                        "type": "TSTypeLiteral",
                        "start": 107,
                        "end": 121,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 109,
                            "end": 114,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 109,
                              "end": 110,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 110,
                              "end": 113,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 112,
                                "end": 113,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 112,
                                  "end": 113,
                                  "name": "T",
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
                            "start": 115,
                            "end": 119,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 115,
                              "end": 116,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 116,
                              "end": 119,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 118,
                                "end": 119,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 118,
                                  "end": 119,
                                  "name": "U",
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
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 128,
                "end": 142,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 130,
                    "end": 135,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 131,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 133,
                        "end": 134,
                        "typeName": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "name": "T",
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
                    "start": 136,
                    "end": 140,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 137,
                      "end": 140,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 139,
                        "end": 140,
                        "typeName": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "name": "U",
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
      "start": 146,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 154,
            "end": 173,
            "properties": [
              {
                "type": "Property",
                "start": 156,
                "end": 160,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 160,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 162,
                "end": 171,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 165,
                  "end": 171,
                  "value": "test",
                  "raw": "\"test\""
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
      "start": 175,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 183,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
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
      "start": 185,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 207,
            "callee": {
              "type": "MemberExpression",
              "start": 194,
              "end": 197,
              "object": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 198,
                "end": 201,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 203,
                "end": 206,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 241,
            "name": "t1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 217,
                "end": 241,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 219,
                    "end": 229,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 222,
                        "end": 228
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 230,
                    "end": 239,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 231,
                      "end": 239,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 233,
                        "end": 239
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 253,
            "end": 282,
            "callee": {
              "type": "MemberExpression",
              "start": 253,
              "end": 256,
              "object": {
                "type": "Identifier",
                "start": 253,
                "end": 254,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 273,
                "end": 276,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 274,
                    "end": 275,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 278,
                "end": 281,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 279,
                    "end": 280,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 256,
              "end": 272,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 257,
                  "end": 263
                },
                {
                  "type": "TSStringKeyword",
                  "start": 265,
                  "end": 271
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 316,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 316,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 292,
                "end": 316,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 294,
                    "end": 304,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 295,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 295,
                      "end": 303,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 297,
                        "end": 303
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 305,
                    "end": 314,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 306,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 314,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 308,
                        "end": 314
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 341,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 325,
            "name": "t3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 328,
            "end": 341,
            "callee": {
              "type": "MemberExpression",
              "start": 328,
              "end": 331,
              "object": {
                "type": "Identifier",
                "start": 328,
                "end": 329,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 332,
                "end": 335,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 337,
                "end": 340,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 338,
                    "end": 339,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 375,
            "name": "t3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 351,
                "end": 375,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 353,
                    "end": 363,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 354,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 362,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 356,
                        "end": 362
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 364,
                    "end": 373,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 365,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 365,
                      "end": 373,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 367,
                        "end": 373
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "name": "t4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 386,
            "end": 415,
            "callee": {
              "type": "MemberExpression",
              "start": 386,
              "end": 389,
              "object": {
                "type": "Identifier",
                "start": 386,
                "end": 387,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 388,
                "end": 389,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 406,
                "end": 409,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 411,
                "end": 414,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 412,
                    "end": 413,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 389,
              "end": 405,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 390,
                  "end": 396
                },
                {
                  "type": "TSStringKeyword",
                  "start": 398,
                  "end": 404
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 449,
            "name": "t4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 449,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 425,
                "end": 449,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 427,
                    "end": 437,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 428,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 428,
                      "end": 436,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 430,
                        "end": 436
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 438,
                    "end": 447,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 439,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 439,
                      "end": 447,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 441,
                        "end": 447
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
