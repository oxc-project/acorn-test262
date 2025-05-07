__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 353,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 92,
        "end": 174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 98,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 102,
                "end": 129,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 116,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 105,
                      "end": 116,
                      "elementType": {
                        "type": "TSTypeOperator",
                        "start": 106,
                        "end": 113,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 112,
                          "end": 113,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 119,
                  "end": 129,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 120,
                      "end": 123,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 125,
                      "end": 128,
                      "raw": "\"b\"",
                      "value": "b",
                      "regex": null,
                      "bigint": null
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
            "start": 135,
            "end": 172,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 171,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 153,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 142,
                      "end": 153,
                      "elementType": {
                        "type": "TSTypeOperator",
                        "start": 143,
                        "end": 150,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 149,
                          "end": 150,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 150,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 156,
                  "end": 171,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 157,
                      "end": 160,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 162,
                      "end": 165,
                      "raw": "\"b\"",
                      "value": "b",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 167,
                      "end": 170,
                      "raw": "\"c\"",
                      "value": "c",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 88,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 64,
              "end": 88,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 66,
                  "end": 76,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
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
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 86,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
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
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 80,
                      "end": 86
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
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
      "type": "TSDeclareFunction",
      "start": 198,
      "end": 278,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 219,
        "decorators": [],
        "name": "pick",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 242,
          "end": 248,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 248,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 247,
              "end": 248,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 250,
          "end": 264,
          "decorators": [],
          "name": "propNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 264,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 261,
              "end": 264,
              "elementType": {
                "type": "TSTypeReference",
                "start": 261,
                "end": 262,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 265,
        "end": 277,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 267,
          "end": 277,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 271,
            "end": 277,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 272,
                "end": 273,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 275,
                "end": 276,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 276,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 267,
            "end": 271,
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 219,
        "end": 241,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 221,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 240,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 233,
              "end": 240,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 239,
                "end": 240,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "K",
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
      "start": 280,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 288,
            "end": 329,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 293,
                "end": 316,
                "properties": [
                  {
                    "type": "Property",
                    "start": 295,
                    "end": 300,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 296,
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
                      "start": 298,
                      "end": 300,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 302,
                    "end": 307,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 303,
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
                      "start": 305,
                      "end": 307,
                      "raw": "20",
                      "value": 20,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 309,
                    "end": 314,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 310,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 312,
                      "end": 314,
                      "raw": "30",
                      "value": 30,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 318,
                "end": 328,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 319,
                    "end": 322,
                    "raw": "\"a\"",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 324,
                    "end": 327,
                    "raw": "\"c\"",
                    "value": "c",
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 288,
              "end": 292,
              "decorators": [],
              "name": "pick",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 339,
            "end": 342,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
