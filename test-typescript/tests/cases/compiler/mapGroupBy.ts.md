__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 322,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "basic",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 68,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 26,
                "end": 35,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 27,
                    "end": 28,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "raw": "8",
                    "value": 8
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 37,
                "end": 67,
                "async": false,
                "body": {
                  "type": "ConditionalExpression",
                  "start": 42,
                  "end": 67,
                  "alternate": {
                    "type": "Literal",
                    "start": 60,
                    "end": 67,
                    "raw": "'large'",
                    "value": "large"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 50,
                    "end": 57,
                    "raw": "'small'",
                    "value": "small"
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 42,
                    "end": 47,
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 46,
                      "end": 47,
                      "raw": "5",
                      "value": 5
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 14,
              "end": 25,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 14,
                "end": 17,
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 18,
                "end": 25,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 71,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 82,
            "decorators": [],
            "name": "chars",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 85,
            "end": 116,
            "arguments": [
              {
                "type": "Literal",
                "start": 97,
                "end": 107,
                "raw": "'a string'",
                "value": "a string"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 109,
                "end": 115,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 85,
              "end": 96,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 88,
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 89,
                "end": 96,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              }
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
      "type": "TSTypeAliasDeclaration",
      "start": 119,
      "end": 175,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 132,
        "decorators": [],
        "name": "Employee",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 135,
        "end": 175,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 141,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 151,
            "end": 173,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 155,
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 173,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 157,
                "end": 173,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 157,
                    "end": 161,
                    "literal": {
                      "type": "Literal",
                      "start": 157,
                      "end": 161,
                      "raw": "'ic'",
                      "value": "ic"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 164,
                    "end": 173,
                    "literal": {
                      "type": "Literal",
                      "start": 164,
                      "end": 173,
                      "raw": "'manager'",
                      "value": "manager"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 206,
            "decorators": [],
            "name": "employees",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 206,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 196,
                  "end": 206,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 197,
                      "end": 205,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 205,
                        "decorators": [],
                        "name": "Employee",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 209,
            "end": 218,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 232,
            "decorators": [],
            "name": "byRole",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 235,
            "end": 270,
            "arguments": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 256,
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 258,
                "end": 269,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 263,
                  "end": 269,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 264,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 269,
                    "decorators": [],
                    "name": "role",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 258,
                    "end": 259,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 235,
              "end": 246,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 235,
                "end": 238,
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 239,
                "end": 246,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 273,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 320,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 287,
            "decorators": [],
            "name": "byNonKey",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 290,
            "end": 320,
            "arguments": [
              {
                "type": "Identifier",
                "start": 302,
                "end": 311,
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 313,
                "end": 319,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 290,
              "end": 301,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 290,
                "end": 293,
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 294,
                "end": 301,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              }
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
