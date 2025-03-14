__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 568,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
              }
            },
            "value": null
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 36,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 43,
      "end": 77,
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 77,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 58,
            "end": 75,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 65,
              "end": 75,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 69,
                  "end": 74,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 73,
                    "end": 74,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 78,
      "end": 90,
      "body": {
        "type": "TSEnumBody",
        "start": 85,
        "end": 90,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 87,
            "end": 88,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 343,
      "body": {
        "type": "TSInterfaceBody",
        "start": 106,
        "end": 343,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 112,
            "end": 122,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 115,
                "end": 121
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 137,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 142,
            "end": 153,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 152,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 145,
                "end": 152
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 158,
            "end": 165,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 164,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 161,
                "end": 164
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 170,
            "end": 178,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 177,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 173,
                "end": 177
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 183,
            "end": 195,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 194,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 186,
                "end": 194,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 186,
                  "end": 192
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 200,
            "end": 210,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 209,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 215,
            "end": 240,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 239,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 218,
                "end": 239,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 219,
                    "end": 228,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 222,
                        "end": 228
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 233,
                    "end": 239
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 245,
            "end": 263,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 262,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 248,
                "end": 262,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 252,
                    "end": 256,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 253,
                      "end": 256,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 255,
                        "end": 256,
                        "typeName": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 256,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 258,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 261,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 248,
                  "end": 251,
                  "params": [
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
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 268,
            "end": 275,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 274,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 274,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 280,
            "end": 285,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "decorators": [],
              "name": "k",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 284,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 283,
                "end": 284,
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 290,
            "end": 303,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "l",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 293,
                "end": 302,
                "exprName": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 302,
                  "decorators": [],
                  "name": "f1",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 308,
            "end": 320,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 319,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 311,
                "end": 319,
                "exprName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 325,
            "end": 331,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 326,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 328,
                "end": 330,
                "members": []
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 336,
            "end": 341,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 340,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 340,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 568,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 355,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 352,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 355,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 358,
            "end": 568,
            "properties": [
              {
                "type": "Property",
                "start": 364,
                "end": 368,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 367,
                  "end": 368,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 374,
                "end": 379,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 375,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 377,
                  "end": 379,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 385,
                "end": 392,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 386,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 388,
                  "end": 392,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 398,
                "end": 403,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 401,
                  "end": 403,
                  "properties": []
                }
              },
              {
                "type": "Property",
                "start": 409,
                "end": 416,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 410,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 412,
                  "end": 416,
                  "raw": "null",
                  "value": null
                }
              },
              {
                "type": "Property",
                "start": 423,
                "end": 429,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 424,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 426,
                  "end": 429,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 427,
                      "end": 428,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 435,
                "end": 440,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 438,
                  "end": 440,
                  "properties": []
                }
              },
              {
                "type": "Property",
                "start": 446,
                "end": 465,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "decorators": [],
                  "name": "h",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 449,
                  "end": 465,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 464,
                    "end": 465,
                    "raw": "1",
                    "value": 1
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 450,
                      "end": 459,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 451,
                        "end": 459,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 453,
                          "end": 459
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 471,
                "end": 488,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 472,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 474,
                  "end": 488,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 488,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 478,
                      "end": 482,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 479,
                        "end": 482,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 481,
                          "end": 482,
                          "typeName": {
                            "type": "Identifier",
                            "start": 481,
                            "end": 482,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 474,
                    "end": 477,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 475,
                        "end": 476,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              },
              {
                "type": "Property",
                "start": 494,
                "end": 506,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "decorators": [],
                  "name": "j",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 497,
                  "end": 506,
                  "expression": {
                    "type": "Literal",
                    "start": 502,
                    "end": 506,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 498,
                    "end": 501,
                    "typeName": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 501,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 512,
                "end": 522,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 513,
                  "decorators": [],
                  "name": "k",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 515,
                  "end": 522,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 520,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              },
              {
                "type": "Property",
                "start": 528,
                "end": 533,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 529,
                  "decorators": [],
                  "name": "l",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 533,
                  "decorators": [],
                  "name": "f1",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 539,
                "end": 543,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 540,
                  "decorators": [],
                  "name": "m",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 543,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 549,
                "end": 554,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 552,
                  "end": 554,
                  "properties": []
                }
              },
              {
                "type": "Property",
                "start": 560,
                "end": 566,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 561,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 563,
                  "end": 566,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 563,
                    "end": 564,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            ]
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
