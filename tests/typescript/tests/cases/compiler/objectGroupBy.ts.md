__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 333,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 72,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 71,
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
            "end": 71,
            "callee": {
              "type": "MemberExpression",
              "start": 14,
              "end": 28,
              "object": {
                "type": "Identifier",
                "start": 14,
                "end": 20,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 29,
                "end": 38,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 36,
                    "end": 37,
                    "value": 8,
                    "raw": "8"
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 40,
                "end": 70,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "start": 45,
                  "end": 70,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 45,
                    "end": 50,
                    "left": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "start": 49,
                      "end": 50,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 53,
                    "end": 60,
                    "value": "small",
                    "raw": "'small'"
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 63,
                    "end": 70,
                    "value": "large",
                    "raw": "'large'"
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 123,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 85,
            "decorators": [],
            "name": "chars",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 88,
            "end": 122,
            "callee": {
              "type": "MemberExpression",
              "start": 88,
              "end": 102,
              "object": {
                "type": "Identifier",
                "start": 88,
                "end": 94,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 95,
                "end": 102,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 103,
                "end": 113,
                "value": "a string",
                "raw": "'a string'"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 115,
                "end": 121,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 125,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 138,
        "decorators": [],
        "name": "Employee",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 141,
        "end": 181,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 143,
            "end": 156,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 147,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 155,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 149,
                "end": 155
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 157,
            "end": 179,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 161,
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 179,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 163,
                "end": 179,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 163,
                    "end": 167,
                    "literal": {
                      "type": "Literal",
                      "start": 163,
                      "end": 167,
                      "value": "ic",
                      "raw": "'ic'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 170,
                    "end": 179,
                    "literal": {
                      "type": "Literal",
                      "start": 170,
                      "end": 179,
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
      "start": 182,
      "end": 225,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 212,
            "decorators": [],
            "name": "employees",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 212,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 202,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 202,
                  "end": 212,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 203,
                      "end": 211,
                      "typeName": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 211,
                        "decorators": [],
                        "name": "Employee",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 215,
            "end": 224,
            "callee": {
              "type": "Identifier",
              "start": 219,
              "end": 222,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 280,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 238,
            "decorators": [],
            "name": "byRole",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 241,
            "end": 279,
            "callee": {
              "type": "MemberExpression",
              "start": 241,
              "end": 255,
              "object": {
                "type": "Identifier",
                "start": 241,
                "end": 247,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 248,
                "end": 255,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 256,
                "end": 265,
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 267,
                "end": 278,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 272,
                  "end": 278,
                  "object": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 278,
                    "decorators": [],
                    "name": "role",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 333,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 296,
            "decorators": [],
            "name": "byNonKey",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 299,
            "end": 332,
            "callee": {
              "type": "MemberExpression",
              "start": 299,
              "end": 313,
              "object": {
                "type": "Identifier",
                "start": 299,
                "end": 305,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 306,
                "end": 313,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 314,
                "end": 323,
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 325,
                "end": 331,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
