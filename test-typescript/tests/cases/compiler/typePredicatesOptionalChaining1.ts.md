__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 394,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 42,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 41,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 13,
            "end": 39,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 17,
                "end": 38,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 23,
                    "end": 34,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 24,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 27,
                        "end": 33
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 53,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 56,
            "end": 68,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 65,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 63,
                  "end": 65,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 176,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 176,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 137,
            "end": 174,
            "argument": {
              "type": "LogicalExpression",
              "start": 144,
              "end": 173,
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 144,
                "end": 154,
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 150,
                  "end": 154,
                  "raw": "null",
                  "value": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 158,
                "end": 173,
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 173,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 102,
        "decorators": [],
        "name": "isNotNull",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 106,
          "end": 110,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 109,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 111,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 113,
          "end": 132,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 132,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 132,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 129,
                "end": 132,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 130,
                    "end": 131,
                    "typeName": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 129,
                "decorators": [],
                "name": "NonNullable",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 102,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 104,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 242,
      "end": 330,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 270,
        "end": 330,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 274,
            "end": 328,
            "argument": {
              "type": "ConditionalExpression",
              "start": 281,
              "end": 327,
              "alternate": {
                "type": "Literal",
                "start": 314,
                "end": 327,
                "raw": "\"Dear nobody\"",
                "value": "Dear nobody"
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 298,
                "end": 311,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 298,
                  "end": 305,
                  "raw": "\"Dear \"",
                  "value": "Dear "
                },
                "right": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 311,
                  "decorators": [],
                  "name": "str",
                  "optional": false
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 281,
                "end": 295,
                "operator": ">",
                "left": {
                  "type": "MemberExpression",
                  "start": 281,
                  "end": 291,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 284,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 291,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 294,
                  "end": 295,
                  "raw": "0",
                  "value": 0
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 256,
        "decorators": [],
        "name": "title",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 257,
          "end": 268,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 260,
            "end": 268,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 262,
              "end": 268
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 332,
      "end": 373,
      "expression": {
        "type": "ConditionalExpression",
        "start": 332,
        "end": 372,
        "alternate": {
          "type": "Literal",
          "start": 368,
          "end": 372,
          "raw": "null",
          "value": null
        },
        "consequent": {
          "type": "CallExpression",
          "start": 353,
          "end": 365,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 359,
              "end": 364,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 359,
                "end": 362,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 353,
            "end": 358,
            "decorators": [],
            "name": "title",
            "optional": false
          },
          "optional": false
        },
        "test": {
          "type": "CallExpression",
          "start": 332,
          "end": 350,
          "arguments": [
            {
              "type": "ChainExpression",
              "start": 342,
              "end": 349,
              "expression": {
                "type": "MemberExpression",
                "start": 342,
                "end": 349,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 342,
                  "end": 346,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 346,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 349,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 332,
            "end": 341,
            "decorators": [],
            "name": "isNotNull",
            "optional": false
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
