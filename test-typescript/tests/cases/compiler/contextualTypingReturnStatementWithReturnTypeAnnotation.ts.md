contextualTypingReturnStatementWithReturnTypeAnnotation.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 446,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 59,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "PropOfRaw",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 20,
        "end": 58,
        "types": [
          {
            "type": "TSTypeOperator",
            "start": 20,
            "end": 32,
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 29,
              "end": 32,
              "elementType": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSLiteralType",
            "start": 35,
            "end": 46,
            "literal": {
              "type": "Literal",
              "start": 35,
              "end": 46,
              "raw": "\"not-array\"",
              "value": "not-array"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 49,
            "end": 58,
            "literal": {
              "type": "Literal",
              "start": 49,
              "end": 58,
              "raw": "\"no-prop\"",
              "value": "no-prop"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "type": "TSDeclareFunction",
      "start": 61,
      "end": 118,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 86,
        "decorators": [],
        "name": "isString",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 100,
          "decorators": [],
          "name": "text",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 100,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 93,
              "end": 100
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 117,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 103,
          "end": 117,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 103,
            "end": 107,
            "decorators": [],
            "name": "text",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 117,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 111,
              "end": 117
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 120,
      "end": 302,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 151,
        "decorators": [],
        "name": "getPropFromRaw",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 158,
          "end": 210,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 210,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 164,
              "end": 210,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 164,
                  "end": 171,
                  "literal": {
                    "type": "Literal",
                    "start": 164,
                    "end": 171,
                    "raw": "\"files\"",
                    "value": "files"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 174,
                  "end": 183,
                  "literal": {
                    "type": "Literal",
                    "start": 174,
                    "end": 183,
                    "raw": "\"include\"",
                    "value": "include"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 186,
                  "end": 195,
                  "literal": {
                    "type": "Literal",
                    "start": 186,
                    "end": 195,
                    "raw": "\"exclude\"",
                    "value": "exclude"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 198,
                  "end": 210,
                  "literal": {
                    "type": "Literal",
                    "start": 198,
                    "end": 210,
                    "raw": "\"references\"",
                    "value": "references"
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 214,
          "end": 258,
          "decorators": [],
          "name": "validateElement",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 229,
            "end": 258,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 231,
              "end": 258,
              "params": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 246,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 246,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 239,
                      "end": 246
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 248,
                "end": 258,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 251,
                  "end": 258
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 262,
          "end": 285,
          "decorators": [],
          "name": "elementTypeName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 277,
            "end": 285,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 279,
              "end": 285
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 287,
        "end": 301,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 289,
          "end": 301,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 298,
            "end": 301,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 299,
                "end": 300,
                "typeName": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 300,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 289,
            "end": 298,
            "decorators": [],
            "name": "PropOfRaw",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
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
      "type": "FunctionDeclaration",
      "start": 304,
      "end": 445,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 391,
        "end": 445,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 395,
            "end": 443,
            "argument": {
              "type": "CallExpression",
              "start": 402,
              "end": 442,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 417,
                  "end": 421,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 423,
                  "end": 431,
                  "decorators": [],
                  "name": "isString",
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 433,
                  "end": 441,
                  "raw": "\"string\"",
                  "value": "string"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 402,
                "end": 416,
                "decorators": [],
                "name": "getPropFromRaw",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 328,
        "decorators": [],
        "name": "getSpecsFromRaw",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 332,
          "end": 369,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 369,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 338,
              "end": 369,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 338,
                  "end": 345,
                  "literal": {
                    "type": "Literal",
                    "start": 338,
                    "end": 345,
                    "raw": "\"files\"",
                    "value": "files"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 348,
                  "end": 357,
                  "literal": {
                    "type": "Literal",
                    "start": 348,
                    "end": 357,
                    "raw": "\"include\"",
                    "value": "include"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 360,
                  "end": 369,
                  "literal": {
                    "type": "Literal",
                    "start": 360,
                    "end": 369,
                    "raw": "\"exclude\"",
                    "value": "exclude"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 371,
        "end": 390,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 373,
          "end": 390,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 382,
            "end": 390,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 383,
                "end": 389
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 373,
            "end": 382,
            "decorators": [],
            "name": "PropOfRaw",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
