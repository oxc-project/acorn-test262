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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "name": "basic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 68,
            "callee": {
              "type": "MemberExpression",
              "start": 14,
              "end": 25,
              "object": {
                "type": "Identifier",
                "start": 14,
                "end": 17,
                "name": "Map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 18,
                "end": 25,
                "name": "groupBy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "value": 8,
                    "raw": "8"
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 37,
                "end": 67,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ConditionalExpression",
                  "start": 42,
                  "end": 67,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 42,
                    "end": 47,
                    "left": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "start": 46,
                      "end": 47,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 50,
                    "end": 57,
                    "value": "small",
                    "raw": "'small'"
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 60,
                    "end": 67,
                    "value": "large",
                    "raw": "'large'"
                  }
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 71,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 82,
            "name": "chars",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 85,
            "end": 116,
            "callee": {
              "type": "MemberExpression",
              "start": 85,
              "end": 96,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 88,
                "name": "Map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 89,
                "end": 96,
                "name": "groupBy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 97,
                "end": 107,
                "value": "a string",
                "raw": "'a string'"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 109,
                "end": 115,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 119,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 132,
        "name": "Employee",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 135,
        "end": 175,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 141,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 151,
            "end": 173,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 155,
              "name": "role",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "value": "ic",
                      "raw": "'ic'"
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
                      "value": "manager",
                      "raw": "'manager'"
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 176,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 206,
            "name": "employees",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 206,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 196,
                  "end": 206,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 197,
                      "end": 205,
                      "typeName": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 205,
                        "name": "Employee",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 209,
            "end": 218,
            "callee": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "name": "Set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 220,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 232,
            "name": "byRole",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 235,
            "end": 270,
            "callee": {
              "type": "MemberExpression",
              "start": 235,
              "end": 246,
              "object": {
                "type": "Identifier",
                "start": 235,
                "end": 238,
                "name": "Map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 239,
                "end": 246,
                "name": "groupBy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 256,
                "name": "employees",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 258,
                "end": 269,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 258,
                    "end": 259,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 263,
                  "end": 269,
                  "object": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 264,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 269,
                    "name": "role",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 273,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 320,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 287,
            "name": "byNonKey",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 290,
            "end": 320,
            "callee": {
              "type": "MemberExpression",
              "start": 290,
              "end": 301,
              "object": {
                "type": "Identifier",
                "start": 290,
                "end": 293,
                "name": "Map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 294,
                "end": 301,
                "name": "groupBy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 302,
                "end": 311,
                "name": "employees",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 313,
                "end": 319,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
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
