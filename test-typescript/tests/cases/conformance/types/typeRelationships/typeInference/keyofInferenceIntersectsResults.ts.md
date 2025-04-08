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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 45,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 43,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
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
      "type": "TSDeclareFunction",
      "start": 47,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "name": "foo",
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
          "start": 75,
          "end": 85,
          "name": "x",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "name": "T",
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
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 97,
          "name": "y",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "T",
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
        "start": 67,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 98,
        "end": 101,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 100,
          "end": 101,
          "typeName": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "name": "bar",
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
          "start": 127,
          "end": 137,
          "name": "x",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "name": "T",
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
        },
        {
          "type": "Identifier",
          "start": 139,
          "end": 149,
          "name": "y",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "name": "T",
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
        "start": 123,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 150,
        "end": 153,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 152,
          "end": 153,
          "typeName": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 166,
            "end": 182,
            "callee": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 173,
                "end": 176,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 178,
                "end": 181,
                "value": "b",
                "raw": "'b'"
              }
            ],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 214,
            "end": 227,
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 218,
                "end": 221,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 223,
                "end": 226,
                "value": "b",
                "raw": "'b'"
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
      "type": "VariableDeclaration",
      "start": 246,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 256,
            "end": 269,
            "callee": {
              "type": "Identifier",
              "start": 256,
              "end": 259,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 260,
                "end": 263,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 265,
                "end": 268,
                "value": "b",
                "raw": "'b'"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
