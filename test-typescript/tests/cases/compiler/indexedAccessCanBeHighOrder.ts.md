__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 61,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "get",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 43,
          "end": 47,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 47,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 46,
              "end": 47,
              "typeName": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 49,
          "end": 53,
          "decorators": [],
          "name": "y",
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
                "name": "Y",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 60,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 56,
          "end": 60,
          "indexType": {
            "type": "TSTypeReference",
            "start": 58,
            "end": 59,
            "typeName": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "Y",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 56,
            "end": 57,
            "typeName": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 41,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 34,
              "end": 41,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "Y",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 62,
      "end": 123,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 83,
        "decorators": [],
        "name": "find",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 106,
          "end": 113,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 113,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 109,
              "end": 113,
              "indexType": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 122,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 116,
          "end": 122,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 117,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 120,
              "end": 121,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 87,
            "end": 104,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 97,
              "end": 104,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 227,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 173,
        "end": 227,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 179,
            "end": 202,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 185,
                "end": 201,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "decorators": [],
                  "name": "item",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 192,
                  "end": 201,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 195,
                    "decorators": [],
                    "name": "get",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 207,
            "end": 225,
            "argument": {
              "type": "CallExpression",
              "start": 214,
              "end": 224,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 219,
                  "end": 223,
                  "decorators": [],
                  "name": "item",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 214,
                "end": 218,
                "decorators": [],
                "name": "find",
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
        "start": 134,
        "end": 138,
        "decorators": [],
        "name": "impl",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 165,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 165,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 165,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 167,
          "end": 171,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 171,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 171,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 138,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 140,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 142,
            "end": 159,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 152,
              "end": 159,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 159,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 239,
            "end": 246,
            "properties": [
              {
                "type": "Property",
                "start": 240,
                "end": 245,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 243,
                  "end": 245,
                  "raw": "42",
                  "value": 42
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
      "type": "VariableDeclaration",
      "start": 248,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 258,
            "end": 270,
            "arguments": [
              {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 266,
                "end": 269,
                "raw": "\"x\"",
                "value": "x"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "decorators": [],
              "name": "impl",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 293,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 292,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 272,
          "end": 282,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 272,
            "end": 276,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "r",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 274,
              "end": 275,
              "raw": "0",
              "value": 0
            }
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 277,
            "end": 281,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "r",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 279,
              "end": 280,
              "raw": "1",
              "value": 1
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 285,
          "end": 292,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 287,
            "end": 291,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "decorators": [],
              "name": "r",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 289,
              "end": 290,
              "raw": "1",
              "value": 1
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
