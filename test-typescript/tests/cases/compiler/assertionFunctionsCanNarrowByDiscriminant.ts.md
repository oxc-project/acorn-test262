__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 558,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Cat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "cat",
                  "raw": "'cat'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 51,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "name": "canMeow",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": true,
                  "raw": "true"
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "name": "Dog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 87,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "dog",
                  "raw": "'dog'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 106,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 99,
              "name": "canBark",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": true,
                  "raw": "true"
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 121,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 124,
        "end": 133,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 124,
            "end": 127,
            "typeName": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "name": "Cat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 130,
            "end": 133,
            "typeName": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "name": "Dog",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 136,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 164,
        "name": "assertEqual",
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
          "start": 168,
          "end": 178,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 178,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 175,
              "end": 178
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 180,
          "end": 187,
          "name": "type",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 187,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 167,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 166,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
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
        "start": 188,
        "end": 208,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 190,
          "end": 208,
          "parameterName": {
            "type": "Identifier",
            "start": 198,
            "end": 203,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 208,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 207,
              "end": 208,
              "typeName": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 223,
            "name": "animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 232,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 234,
                    "end": 239,
                    "value": "cat",
                    "raw": "'cat'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 241,
                  "end": 254,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 248,
                    "name": "canMeow",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 250,
                    "end": 254,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 266,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 266,
                "name": "Animal",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 309,
      "expression": {
        "type": "CallExpression",
        "start": 268,
        "end": 308,
        "callee": {
          "type": "Identifier",
          "start": 268,
          "end": 279,
          "name": "assertEqual",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 280,
            "end": 291,
            "object": {
              "type": "Identifier",
              "start": 280,
              "end": 286,
              "name": "animal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 287,
              "end": 291,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          {
            "type": "TSAsExpression",
            "start": 293,
            "end": 307,
            "expression": {
              "type": "Literal",
              "start": 293,
              "end": 298,
              "value": "cat",
              "raw": "'cat'"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 302,
              "end": 307,
              "typeName": {
                "type": "Identifier",
                "start": 302,
                "end": 307,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 311,
      "end": 326,
      "expression": {
        "type": "MemberExpression",
        "start": 311,
        "end": 325,
        "object": {
          "type": "Identifier",
          "start": 311,
          "end": 317,
          "name": "animal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 318,
          "end": 325,
          "name": "canMeow",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 387,
            "name": "animalOrUndef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 396,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 398,
                    "end": 403,
                    "value": "cat",
                    "raw": "'cat'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 405,
                  "end": 418,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 412,
                    "name": "canMeow",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 414,
                    "end": 418,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 430,
                    "name": "Animal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 433,
                  "end": 442
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 493,
      "expression": {
        "type": "CallExpression",
        "start": 444,
        "end": 492,
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 455,
          "name": "assertEqual",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ChainExpression",
            "start": 456,
            "end": 475,
            "expression": {
              "type": "MemberExpression",
              "start": 456,
              "end": 475,
              "object": {
                "type": "Identifier",
                "start": 456,
                "end": 469,
                "name": "animalOrUndef",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 471,
                "end": 475,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true
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
              "value": "cat",
              "raw": "'cat'"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 486,
              "end": 491,
              "typeName": {
                "type": "Identifier",
                "start": 486,
                "end": 491,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 517,
      "expression": {
        "type": "MemberExpression",
        "start": 495,
        "end": 516,
        "object": {
          "type": "Identifier",
          "start": 495,
          "end": 508,
          "name": "animalOrUndef",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 509,
          "end": 516,
          "name": "canMeow",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
