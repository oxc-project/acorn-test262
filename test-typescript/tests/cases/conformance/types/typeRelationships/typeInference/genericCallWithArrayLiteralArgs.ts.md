__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 336,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 39,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 28,
            "end": 37,
            "argument": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "t",
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
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 20,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 20,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
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
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "start": 41,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 49,
            "end": 60,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 53,
                "end": 59,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 54,
                    "end": 55,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 57,
                    "end": 58,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 82,
            "end": 103,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 96,
                "end": 102,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 97,
                    "end": 98,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 100,
                    "end": 101,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 85,
              "end": 95,
              "params": [
                {
                  "type": "TSArrayType",
                  "start": 86,
                  "end": 94,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 86,
                    "end": 92
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 123,
            "decorators": [],
            "name": "ra",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 126,
            "end": 144,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 137,
                "end": 143,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 138,
                    "end": 139,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 141,
                    "end": 142,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 129,
              "end": 136,
              "params": [
                {
                  "type": "TSArrayType",
                  "start": 130,
                  "end": 135,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 130,
                    "end": 133
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 161,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 164,
            "end": 171,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 168,
                "end": 170,
                "elements": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 191,
            "end": 208,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 205,
                "end": 207,
                "elements": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 194,
              "end": 204,
              "params": [
                {
                  "type": "TSArrayType",
                  "start": 195,
                  "end": 203,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 195,
                    "end": 201
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 228,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 231,
            "end": 243,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 235,
                "end": 242,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 236,
                    "end": 237,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 239,
                    "end": 241,
                    "raw": "''",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 231,
              "end": 234,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 262,
            "end": 281,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 273,
                "end": 280,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 274,
                    "end": 275,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 277,
                    "end": 279,
                    "raw": "''",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 262,
              "end": 265,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 265,
              "end": 272,
              "params": [
                {
                  "type": "TSArrayType",
                  "start": 266,
                  "end": 271,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 266,
                    "end": 269
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 323,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 298,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 301,
            "end": 323,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 315,
                "end": 322,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 316,
                    "end": 317,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 319,
                    "end": 321,
                    "raw": "''",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 301,
              "end": 304,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 304,
              "end": 314,
              "params": [
                {
                  "type": "TSArrayType",
                  "start": 305,
                  "end": 313,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 305,
                    "end": 311,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 311,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            }
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
