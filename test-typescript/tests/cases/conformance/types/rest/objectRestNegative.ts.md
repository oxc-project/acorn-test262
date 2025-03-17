__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 371,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 14,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 16,
                "end": 23,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 23,
                  "value": "no",
                  "raw": "'no'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 31,
            "end": 51,
            "properties": [
              {
                "type": "RestElement",
                "start": 33,
                "end": 46,
                "argument": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 46,
                  "name": "mustBeLast",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 71,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
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
      "start": 73,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 105,
            "name": "notAssignable",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 97,
                        "end": 103
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 108,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 108,
          "end": 131,
          "properties": [
            {
              "type": "Property",
              "start": 110,
              "end": 111,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 113,
              "end": 129,
              "argument": {
                "type": "Identifier",
                "start": 116,
                "end": 129,
                "name": "notAssignable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 134,
          "end": 135,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 164,
        "name": "stillMustBeLast",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 165,
          "end": 211,
          "properties": [
            {
              "type": "RestElement",
              "start": 167,
              "end": 180,
              "argument": {
                "type": "Identifier",
                "start": 170,
                "end": 180,
                "name": "mustBeLast",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 192,
                      "end": 198
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 200,
                  "end": 209,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 203,
                      "end": 209
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 219,
        "end": 222,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 212,
        "end": 218,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 214,
          "end": 218
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 239,
        "name": "generic",
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
          "start": 260,
          "end": 264,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 264,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 263,
              "end": 264,
              "typeName": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 276,
                  "end": 290,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 278,
                      "end": 279,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 279,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 279,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 281,
                      "end": 288,
                      "argument": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 288,
                        "name": "rest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 300,
            "end": 312,
            "argument": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "name": "rest",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 239,
        "end": 259,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 240,
            "end": 258,
            "name": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 250,
              "end": 258,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 252,
                  "end": 254,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 255,
                  "end": 256,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 256,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                }
              ]
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
      "start": 316,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 339,
            "name": "rest",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 329,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 329,
                      "end": 337,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 331,
                        "end": 337
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 370,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 368,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 341,
          "end": 364,
          "properties": [
            {
              "type": "Property",
              "start": 342,
              "end": 343,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 345,
              "end": 363,
              "argument": {
                "type": "BinaryExpression",
                "start": 348,
                "end": 363,
                "left": {
                  "type": "MemberExpression",
                  "start": 348,
                  "end": 354,
                  "object": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 352,
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 354,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "start": 357,
                  "end": 363,
                  "object": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 361,
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 367,
          "end": 368,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
