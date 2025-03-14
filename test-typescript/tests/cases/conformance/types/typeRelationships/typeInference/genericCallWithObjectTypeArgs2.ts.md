__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 624,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 27,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
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
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 75,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 73,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
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
        "start": 36,
        "end": 43,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 52,
        "end": 56,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 122,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 122,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 110,
            "end": 120,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
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
        "start": 82,
        "end": 90,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 99,
        "end": 103,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 228,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 228,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 208,
            "end": 226,
            "argument": {
              "type": "ArrayExpression",
              "start": 215,
              "end": 225,
              "elements": [
                {
                  "type": "MemberExpression",
                  "start": 216,
                  "end": 219,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 219,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 221,
                  "end": 224,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 183,
          "end": 200,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 200,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 186,
              "end": 200,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 188,
                  "end": 193,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 194,
                  "end": 198,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 195,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 197,
                      "end": 198,
                      "typeName": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 198,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 150,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 151,
            "end": 165,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 161,
              "end": 165,
              "typeName": {
                "type": "Identifier",
                "start": 161,
                "end": 165,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 181,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 181,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 280,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 238,
            "end": 280,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 240,
                "end": 279,
                "properties": [
                  {
                    "type": "Property",
                    "start": 242,
                    "end": 258,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 243,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 245,
                      "end": 258,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 256,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "start": 260,
                    "end": 277,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 263,
                      "end": 277,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 267,
                        "end": 275,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "f",
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
      "start": 290,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 338,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 296,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 299,
            "end": 338,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 301,
                "end": 337,
                "properties": [
                  {
                    "type": "Property",
                    "start": 303,
                    "end": 316,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 304,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 306,
                      "end": 316,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 314,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "start": 318,
                    "end": 335,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 321,
                      "end": 335,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 333,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "f",
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
      "type": "FunctionDeclaration",
      "start": 350,
      "end": 442,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 413,
        "end": 442,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 419,
            "end": 440,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 426,
              "end": 439,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 436,
                "end": 439,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 437,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 427,
                  "end": 431,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 428,
                    "end": 431,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 430,
                      "end": 431,
                      "typeName": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 361,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 394,
          "end": 411,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 395,
            "end": 411,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 397,
              "end": 411,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 399,
                  "end": 404,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 400,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 400,
                    "end": 403,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 402,
                      "end": 403,
                      "typeName": {
                        "type": "Identifier",
                        "start": 402,
                        "end": 403,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 405,
                  "end": 409,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 406,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 406,
                    "end": 409,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 408,
                      "end": 409,
                      "typeName": {
                        "type": "Identifier",
                        "start": 408,
                        "end": 409,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 361,
        "end": 393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 362,
            "end": 376,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 372,
              "end": 376,
              "typeName": {
                "type": "Identifier",
                "start": 372,
                "end": 376,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 378,
            "end": 392,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 388,
              "end": 392,
              "typeName": {
                "type": "Identifier",
                "start": 388,
                "end": 392,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 496,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 450,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 453,
            "end": 496,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 456,
                "end": 495,
                "properties": [
                  {
                    "type": "Property",
                    "start": 458,
                    "end": 474,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 459,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 461,
                      "end": 474,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 472,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "start": 476,
                    "end": 493,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 477,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 479,
                      "end": 493,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 491,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 453,
              "end": 455,
              "decorators": [],
              "name": "f2",
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
      "type": "TSInterfaceDeclaration",
      "start": 522,
      "end": 563,
      "body": {
        "type": "TSInterfaceBody",
        "start": 540,
        "end": 563,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 546,
            "end": 551,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 547,
              "end": 550,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 549,
                "end": 550,
                "typeName": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 556,
            "end": 561,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 556,
              "end": 557,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 557,
              "end": 560,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 559,
                "end": 560,
                "typeName": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 560,
                  "decorators": [],
                  "name": "U",
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
        "start": 532,
        "end": 533,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 533,
        "end": 539,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 534,
            "end": 535,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 534,
              "end": 535,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 537,
            "end": 538,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 589,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 588,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 588,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 588,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 588,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 573,
                  "end": 588,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 574,
                      "end": 578,
                      "typeName": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 578,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 580,
                      "end": 587,
                      "typeName": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 587,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
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
      "start": 590,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 604,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 596,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 599,
            "end": 604,
            "arguments": [
              {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "decorators": [],
                "name": "i",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 599,
              "end": 601,
              "decorators": [],
              "name": "f2",
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
  "sourceType": "script",
  "hashbang": null
}
```
