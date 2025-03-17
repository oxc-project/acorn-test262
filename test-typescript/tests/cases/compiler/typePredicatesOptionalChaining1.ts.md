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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 24,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 27,
                        "end": 33
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 43,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 53,
            "name": "x",
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
                  "name": "X",
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
          "init": {
            "type": "ObjectExpression",
            "start": 56,
            "end": 68,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 65,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 63,
                  "end": 65,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 102,
        "name": "isNotNull",
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
          "start": 106,
          "end": 110,
          "name": "x",
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
                "name": "A",
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
              "left": {
                "type": "BinaryExpression",
                "start": 144,
                "end": 154,
                "left": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 150,
                  "end": 154,
                  "value": null,
                  "raw": "null"
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 158,
                "end": 173,
                "left": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 173,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 102,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 104,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "A",
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
        "start": 111,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 113,
          "end": 132,
          "parameterName": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 132,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 132,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 129,
                "name": "NonNullable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 242,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 256,
        "name": "title",
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
          "start": 257,
          "end": 268,
          "name": "str",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 260,
            "end": 268,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 262,
              "end": 268
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 281,
                "end": 295,
                "left": {
                  "type": "MemberExpression",
                  "start": 281,
                  "end": 291,
                  "object": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 284,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 291,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "start": 294,
                  "end": 295,
                  "value": 0,
                  "raw": "0"
                }
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 298,
                "end": 311,
                "left": {
                  "type": "Literal",
                  "start": 298,
                  "end": 305,
                  "value": "Dear ",
                  "raw": "\"Dear \""
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 311,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "alternate": {
                "type": "Literal",
                "start": 314,
                "end": 327,
                "value": "Dear nobody",
                "raw": "\"Dear nobody\""
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 332,
      "end": 373,
      "expression": {
        "type": "ConditionalExpression",
        "start": 332,
        "end": 372,
        "test": {
          "type": "CallExpression",
          "start": 332,
          "end": 350,
          "callee": {
            "type": "Identifier",
            "start": 332,
            "end": 341,
            "name": "isNotNull",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "ChainExpression",
              "start": 342,
              "end": 349,
              "expression": {
                "type": "MemberExpression",
                "start": 342,
                "end": 349,
                "object": {
                  "type": "MemberExpression",
                  "start": 342,
                  "end": 346,
                  "object": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 346,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 349,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "consequent": {
          "type": "CallExpression",
          "start": 353,
          "end": 365,
          "callee": {
            "type": "Identifier",
            "start": 353,
            "end": 358,
            "name": "title",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 359,
              "end": 364,
              "object": {
                "type": "MemberExpression",
                "start": 359,
                "end": 362,
                "object": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "alternate": {
          "type": "Literal",
          "start": 368,
          "end": 372,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
