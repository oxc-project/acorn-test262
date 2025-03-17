__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 388,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 66,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 66,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 53,
                    "end": 64,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 53,
                      "end": 63,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 53,
                        "end": 59,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 53,
                          "end": 57
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 59,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 49,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 70,
      "end": 127,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 127,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 103,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 107,
              "end": 108,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 125,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 117,
              "end": 124,
              "raw": "'hello'",
              "value": "hello"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 83,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 92,
        "end": 96,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 137,
            "end": 150,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 141,
              "end": 148,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 170,
            "end": 184,
            "arguments": [
              {
                "type": "Literal",
                "start": 182,
                "end": 183,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 174,
              "end": 181,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 254,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 254,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 214,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 213,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 219,
            "end": 252,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 230,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 252,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 237,
                "end": 252,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 239,
                    "end": 250,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 239,
                      "end": 249,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 239,
                        "end": 245,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 239,
                          "end": 243
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 245,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 235,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 232,
                    "end": 235,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 234,
                      "end": 235,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 199,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
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
      "type": "ClassDeclaration",
      "start": 256,
      "end": 327,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 297,
        "end": 327,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 303,
            "end": 308,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 307,
              "end": 308,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 313,
            "end": 325,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 316,
                "end": 317,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 320,
              "end": 324,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 263,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 288,
        "end": 293,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 293,
        "end": 296,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 294,
            "end": 295,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 263,
        "end": 279,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 264,
            "end": 278,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 274,
              "end": 278,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 274,
                "end": 278,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
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
      "start": 329,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 337,
            "end": 344,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 364,
            "end": 381,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 370,
                "end": 380,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 378,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
