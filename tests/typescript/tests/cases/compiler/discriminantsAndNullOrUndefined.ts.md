__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 393,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 46,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 40,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 45,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 42,
                "end": 45,
                "literal": {
                  "type": "Literal",
                  "start": 42,
                  "end": 45,
                  "value": "A",
                  "raw": "'A'"
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
      "start": 49,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 67,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 72,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 69,
                "end": 72,
                "literal": {
                  "type": "Literal",
                  "start": 69,
                  "end": 72,
                  "value": "B",
                  "raw": "'B'"
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
      "start": 77,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 86,
        "end": 103,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 86,
            "end": 87,
            "typeName": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 90,
            "end": 91,
            "typeName": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 94,
            "end": 103
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 120,
        "decorators": [],
        "name": "never",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 121,
          "end": 129,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 129,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 124,
              "end": 129
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 130,
        "end": 137,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 132,
          "end": 137
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 164,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 144,
            "end": 162,
            "argument": {
              "type": "NewExpression",
              "start": 150,
              "end": 161,
              "callee": {
                "type": "Identifier",
                "start": 154,
                "end": 159,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 166,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 179,
        "decorators": [],
        "name": "useA",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 180,
          "end": 184,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 184,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 183,
              "end": 184,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 185,
        "end": 191,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 187,
          "end": 191
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 195,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 196,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 209,
        "decorators": [],
        "name": "useB",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 210,
          "end": 214,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 211,
            "end": 214,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 213,
              "end": 214,
              "typeName": {
                "type": "Identifier",
                "start": 213,
                "end": 214,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 221,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 217,
          "end": 221
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 225,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 244,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 242,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 243,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 246,
      "end": 393,
      "test": {
        "type": "BinaryExpression",
        "start": 250,
        "end": 265,
        "left": {
          "type": "Identifier",
          "start": 250,
          "end": 251,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 256,
          "end": 265,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 267,
        "end": 393,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 273,
            "end": 391,
            "discriminant": {
              "type": "MemberExpression",
              "start": 281,
              "end": 287,
              "object": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 283,
                "end": 287,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 299,
                "end": 324,
                "test": {
                  "type": "Literal",
                  "start": 304,
                  "end": 307,
                  "value": "A",
                  "raw": "'A'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 309,
                    "end": 317,
                    "expression": {
                      "type": "CallExpression",
                      "start": 309,
                      "end": 316,
                      "callee": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 313,
                        "decorators": [],
                        "name": "useA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 314,
                          "end": 315,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 318,
                    "end": 324,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 333,
                "end": 358,
                "test": {
                  "type": "Literal",
                  "start": 338,
                  "end": 341,
                  "value": "B",
                  "raw": "'B'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 343,
                    "end": 351,
                    "expression": {
                      "type": "CallExpression",
                      "start": 343,
                      "end": 350,
                      "callee": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 347,
                        "decorators": [],
                        "name": "useB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 352,
                    "end": 358,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 367,
                "end": 385,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 376,
                    "end": 385,
                    "expression": {
                      "type": "CallExpression",
                      "start": 376,
                      "end": 384,
                      "callee": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 381,
                        "decorators": [],
                        "name": "never",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 382,
                          "end": 383,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
