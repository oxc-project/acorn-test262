__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 370,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 25,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 14,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 14,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 16,
                "end": 23,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 23,
                  "raw": "'no'",
                  "value": "no",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 55,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 31,
            "end": 51,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "RestElement",
                "start": 33,
                "end": 46,
                "argument": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 46,
                  "decorators": [],
                  "name": "mustBeLast",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              },
              {
                "type": "Property",
                "start": 48,
                "end": 49,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 71,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
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
      "start": 73,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 105,
            "decorators": [],
            "name": "notAssignable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 92,
                "end": 105,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 94,
                    "end": 103,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 97,
                        "end": 103
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 108,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 108,
          "end": 131,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 110,
              "end": 111,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "RestElement",
              "start": 113,
              "end": 129,
              "argument": {
                "type": "Identifier",
                "start": 116,
                "end": 129,
                "decorators": [],
                "name": "notAssignable",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 134,
          "end": 135,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 222,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 219,
        "end": 222,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 164,
        "decorators": [],
        "name": "stillMustBeLast",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 165,
          "end": 211,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "RestElement",
              "start": 167,
              "end": 180,
              "argument": {
                "type": "Identifier",
                "start": 170,
                "end": 180,
                "decorators": [],
                "name": "mustBeLast",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            },
            {
              "type": "Property",
              "start": 182,
              "end": 183,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 211,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 187,
              "end": 211,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 189,
                  "end": 199,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 192,
                      "end": 198
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 200,
                  "end": 209,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 203,
                      "end": 209
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 212,
        "end": 218,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 214,
          "end": 218
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 314,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 266,
        "end": 314,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 272,
            "end": 295,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 276,
                "end": 294,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 276,
                  "end": 290,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 278,
                      "end": 279,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 279,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 279,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 281,
                      "end": 288,
                      "argument": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 288,
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 300,
            "end": 312,
            "argument": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 239,
        "decorators": [],
        "name": "generic",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 264,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 264,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 263,
              "end": 264,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 239,
        "end": 259,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 240,
            "end": 258,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 250,
              "end": 258,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 252,
                  "end": 254,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null
                },
                {
                  "type": "TSPropertySignature",
                  "start": 255,
                  "end": 256,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 256,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
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
      "start": 316,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 339,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 339,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 326,
                "end": 339,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 328,
                    "end": 337,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 329,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 329,
                      "end": 337,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 331,
                        "end": 337
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 370,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 368,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 341,
          "end": 364,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 342,
              "end": 343,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "RestElement",
              "start": 345,
              "end": 363,
              "argument": {
                "type": "BinaryExpression",
                "start": 348,
                "end": 363,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 348,
                  "end": 354,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 352,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 354,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 357,
                  "end": 363,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 361,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 367,
          "end": 368,
          "decorators": [],
          "name": "o",
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
