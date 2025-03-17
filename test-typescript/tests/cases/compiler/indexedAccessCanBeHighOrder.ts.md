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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "get",
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
          "start": 43,
          "end": 47,
          "name": "x",
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
                "name": "U",
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
        {
          "type": "Identifier",
          "start": 49,
          "end": 53,
          "name": "y",
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
                "name": "Y",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 60,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 56,
          "end": 60,
          "objectType": {
            "type": "TSTypeReference",
            "start": 56,
            "end": 57,
            "typeName": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 58,
            "end": 59,
            "typeName": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 62,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 83,
        "name": "find",
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
          "end": 113,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 113,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 109,
              "end": 113,
              "objectType": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 87,
            "end": 104,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 120,
              "end": 121,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 138,
        "name": "impl",
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
          "start": 161,
          "end": 165,
          "name": "a",
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
        },
        {
          "type": "Identifier",
          "start": 167,
          "end": 171,
          "name": "b",
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
                "name": "B",
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
                "id": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 192,
                  "end": 201,
                  "callee": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 195,
                    "name": "get",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 207,
            "end": 225,
            "argument": {
              "type": "CallExpression",
              "start": 214,
              "end": 224,
              "callee": {
                "type": "Identifier",
                "start": 214,
                "end": 218,
                "name": "find",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 219,
                  "end": 223,
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 138,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 140,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 142,
            "end": 159,
            "name": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
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
      "start": 229,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 243,
                  "end": 245,
                  "value": 42,
                  "raw": "42"
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
      "type": "VariableDeclaration",
      "start": 248,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 258,
            "end": 270,
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "name": "impl",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 266,
                "end": 269,
                "value": "x",
                "raw": "\"x\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "object": {
            "type": "MemberExpression",
            "start": 272,
            "end": 276,
            "object": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 274,
              "end": 275,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 277,
            "end": 281,
            "object": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 279,
              "end": 280,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 285,
          "end": 292,
          "object": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 287,
            "end": 291,
            "object": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 289,
              "end": 290,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "computed": true,
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
