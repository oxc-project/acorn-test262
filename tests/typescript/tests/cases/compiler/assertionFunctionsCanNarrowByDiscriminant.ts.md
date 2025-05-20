__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 557,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 31,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 26,
                "end": 31,
                "literal": {
                  "type": "Literal",
                  "start": 26,
                  "end": 31,
                  "raw": "'cat'",
                  "value": "cat"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 51,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "decorators": [],
              "name": "canMeow",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 50,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 46,
                "end": 50,
                "literal": {
                  "type": "Literal",
                  "start": 46,
                  "end": 50,
                  "raw": "true",
                  "value": true
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
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Cat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 87,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 86,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 81,
                "end": 86,
                "literal": {
                  "type": "Literal",
                  "start": 81,
                  "end": 86,
                  "raw": "'dog'",
                  "value": "dog"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 99,
              "decorators": [],
              "name": "canBark",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 105,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 101,
                "end": 105,
                "literal": {
                  "type": "Literal",
                  "start": 101,
                  "end": 105,
                  "raw": "true",
                  "value": true
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
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 134,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 121,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 124,
        "end": 133,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 124,
            "end": 127,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "Cat",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 130,
            "end": 133,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "Dog",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 136,
      "end": 209,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 164,
        "decorators": [],
        "name": "assertEqual",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 168,
          "end": 178,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 178,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 175,
              "end": 178
            }
          }
        },
        {
          "type": "Identifier",
          "start": 180,
          "end": 187,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 187,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 187,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 188,
        "end": 208,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 190,
          "end": 208,
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "start": 198,
            "end": 203,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 208,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 207,
              "end": 208,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 167,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 166,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
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
      "start": 211,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 223,
            "decorators": [],
            "name": "animal",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 226,
            "end": 266,
            "expression": {
              "type": "ObjectExpression",
              "start": 226,
              "end": 256,
              "properties": [
                {
                  "type": "Property",
                  "start": 228,
                  "end": 239,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 232,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 234,
                    "end": 239,
                    "raw": "'cat'",
                    "value": "cat"
                  }
                },
                {
                  "type": "Property",
                  "start": 241,
                  "end": 254,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 248,
                    "decorators": [],
                    "name": "canMeow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 250,
                    "end": 254,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 266,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 266,
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 309,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 268,
        "end": 308,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 280,
            "end": 291,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 280,
              "end": 286,
              "decorators": [],
              "name": "animal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 287,
              "end": 291,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSAsExpression",
            "start": 293,
            "end": 307,
            "expression": {
              "type": "Literal",
              "start": 293,
              "end": 298,
              "raw": "'cat'",
              "value": "cat"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 302,
              "end": 307,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 302,
                "end": 307,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 268,
          "end": 279,
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 311,
      "end": 326,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 311,
        "end": 325,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 311,
          "end": 317,
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 318,
          "end": 325,
          "decorators": [],
          "name": "canMeow",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 442,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 387,
            "decorators": [],
            "name": "animalOrUndef",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 390,
            "end": 442,
            "expression": {
              "type": "ObjectExpression",
              "start": 390,
              "end": 420,
              "properties": [
                {
                  "type": "Property",
                  "start": 392,
                  "end": 403,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 396,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 398,
                    "end": 403,
                    "raw": "'cat'",
                    "value": "cat"
                  }
                },
                {
                  "type": "Property",
                  "start": 405,
                  "end": 418,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 412,
                    "decorators": [],
                    "name": "canMeow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 414,
                    "end": 418,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 424,
              "end": 442,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 424,
                  "end": 430,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 430,
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 433,
                  "end": 442
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 493,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 444,
        "end": 492,
        "arguments": [
          {
            "type": "ChainExpression",
            "start": 456,
            "end": 475,
            "expression": {
              "type": "MemberExpression",
              "start": 456,
              "end": 475,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 456,
                "end": 469,
                "decorators": [],
                "name": "animalOrUndef",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 471,
                "end": 475,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSAsExpression",
            "start": 477,
            "end": 491,
            "expression": {
              "type": "Literal",
              "start": 477,
              "end": 482,
              "raw": "'cat'",
              "value": "cat"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 486,
              "end": 491,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 486,
                "end": 491,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 455,
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 517,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 495,
        "end": 516,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 495,
          "end": 508,
          "decorators": [],
          "name": "animalOrUndef",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 509,
          "end": 516,
          "decorators": [],
          "name": "canMeow",
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
