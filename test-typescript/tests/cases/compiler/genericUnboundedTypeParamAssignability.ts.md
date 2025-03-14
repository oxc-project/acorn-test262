genericUnboundedTypeParamAssignability.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 433,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 49,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 49,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 25,
            "end": 38,
            "expression": {
              "type": "CallExpression",
              "start": 25,
              "end": 37,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 25,
                "end": 35,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 35,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
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
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 19,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 19,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
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
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "start": 51,
      "end": 114,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 114,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 87,
            "end": 100,
            "expression": {
              "type": "CallExpression",
              "start": 87,
              "end": 99,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 87,
                "end": 97,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 97,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
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
        "start": 60,
        "end": 62,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 81,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 81,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 81,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
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
        "start": 62,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 75,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 73,
              "end": 75,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
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
      "start": 116,
      "end": 196,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 196,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 182,
            "expression": {
              "type": "CallExpression",
              "start": 169,
              "end": 181,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 169,
                "end": 179,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 179,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
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
        "start": 125,
        "end": 127,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 159,
          "end": 163,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 163,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
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
        "start": 127,
        "end": 158,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 157,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 157,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 144,
                "end": 157,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 145,
                    "end": 151
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 153,
                    "end": 156
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 144,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
      "start": 198,
      "end": 432,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 221,
        "end": 432,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 225,
            "end": 231,
            "expression": {
              "type": "CallExpression",
              "start": 225,
              "end": 230,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 225,
                "end": 227,
                "decorators": [],
                "name": "f1",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 234,
            "end": 240,
            "expression": {
              "type": "CallExpression",
              "start": 234,
              "end": 239,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 234,
                "end": 236,
                "decorators": [],
                "name": "f2",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 306,
            "end": 312,
            "expression": {
              "type": "CallExpression",
              "start": 306,
              "end": 311,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 306,
                "end": 308,
                "decorators": [],
                "name": "f3",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 378,
            "end": 391,
            "expression": {
              "type": "CallExpression",
              "start": 378,
              "end": 390,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 378,
                "end": 388,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 379,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 388,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
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
        "start": 207,
        "end": 211,
        "decorators": [],
        "name": "user",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 215,
          "end": 219,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 216,
            "end": 219,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 219,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
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
        "start": 211,
        "end": 214,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 212,
            "end": 213,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
