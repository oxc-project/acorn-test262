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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 43,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 52,
        "end": 56,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 75,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 73,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
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
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 90,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 99,
        "end": 103,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 122,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 110,
            "end": 120,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "z",
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
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
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
          "start": 183,
          "end": 200,
          "name": "a",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "start": 194,
                  "end": 198,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
          "decorators": [],
          "optional": false
        }
      ],
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
                  "object": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 219,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "MemberExpression",
                  "start": 221,
                  "end": 224,
                  "object": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 150,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 151,
            "end": 165,
            "name": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 161,
              "end": 165,
              "typeName": {
                "type": "Identifier",
                "start": 161,
                "end": 165,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 181,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 181,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 238,
            "end": 280,
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 243,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 245,
                      "end": 258,
                      "callee": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 256,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 260,
                    "end": 277,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 263,
                      "end": 277,
                      "callee": {
                        "type": "Identifier",
                        "start": 267,
                        "end": 275,
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
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
      "start": 290,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 296,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 299,
            "end": 338,
            "callee": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 304,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 306,
                      "end": 316,
                      "callee": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 314,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 318,
                    "end": 335,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 321,
                      "end": 335,
                      "callee": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 333,
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
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
      "type": "FunctionDeclaration",
      "start": 350,
      "end": 442,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 361,
        "name": "f2",
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
          "end": 411,
          "name": "a",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 400,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "start": 405,
                  "end": 409,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 406,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
          "decorators": [],
          "optional": false
        }
      ],
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
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 427,
                  "end": 431,
                  "name": "x",
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
                "type": "MemberExpression",
                "start": 436,
                "end": 439,
                "object": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 437,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 361,
        "end": 393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 362,
            "end": 376,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 372,
              "end": 376,
              "typeName": {
                "type": "Identifier",
                "start": 372,
                "end": 376,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 378,
            "end": 392,
            "name": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 388,
              "end": 392,
              "typeName": {
                "type": "Identifier",
                "start": 388,
                "end": 392,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 450,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 453,
            "end": 496,
            "callee": {
              "type": "Identifier",
              "start": 453,
              "end": 455,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 459,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 461,
                      "end": 474,
                      "callee": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 472,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 476,
                    "end": 493,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 477,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 479,
                      "end": 493,
                      "callee": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 491,
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
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
      "type": "TSInterfaceDeclaration",
      "start": 522,
      "end": 563,
      "id": {
        "type": "Identifier",
        "start": 532,
        "end": 533,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 533,
        "end": 539,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 534,
            "end": 535,
            "name": {
              "type": "Identifier",
              "start": 534,
              "end": 535,
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
            "start": 537,
            "end": 538,
            "name": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "start": 556,
            "end": 561,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 556,
              "end": 557,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 588,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 588,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 588,
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 580,
                      "end": 587,
                      "typeName": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 587,
                        "name": "Derived",
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
      "start": 590,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 596,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 599,
            "end": 604,
            "callee": {
              "type": "Identifier",
              "start": 599,
              "end": 601,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
