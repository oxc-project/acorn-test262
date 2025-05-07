__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 45,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 45,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 43,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
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
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 47,
      "end": 102,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 85,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 85,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 78,
              "end": 85,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 85,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 97,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 97,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 90,
              "end": 97,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "T",
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
        "start": 98,
        "end": 101,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 100,
          "end": 101,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 73,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
      "start": 103,
      "end": 154,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 137,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 128,
            "end": 137,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 130,
              "end": 137,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 137,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 139,
          "end": 149,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 140,
            "end": 149,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 142,
              "end": 149,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 149,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "T",
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
        "start": 150,
        "end": 153,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 152,
          "end": 153,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
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
      "start": 156,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 166,
            "end": 182,
            "arguments": [
              {
                "type": "Literal",
                "start": 173,
                "end": 176,
                "raw": "'a'",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 178,
                "end": 181,
                "raw": "'b'",
                "value": "b",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 169,
              "end": 172,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 170,
                  "end": 171,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 214,
            "end": 227,
            "arguments": [
              {
                "type": "Literal",
                "start": 218,
                "end": 221,
                "raw": "'a'",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 223,
                "end": 226,
                "raw": "'b'",
                "value": "b",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
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
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 256,
            "end": 269,
            "arguments": [
              {
                "type": "Literal",
                "start": 260,
                "end": 263,
                "raw": "'a'",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 265,
                "end": 268,
                "raw": "'b'",
                "value": "b",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 256,
              "end": 259,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
