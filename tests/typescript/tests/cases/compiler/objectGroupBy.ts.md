__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "basic",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 20
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 28
              },
              "optional": false,
              "computed": false,
              "start": 14,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 30,
                    "end": 31
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 33,
                    "end": 34
                  },
                  {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 36,
                    "end": 37
                  }
                ],
                "start": 29,
                "end": 38
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 46
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 49,
                      "end": 50
                    },
                    "start": 45,
                    "end": 50
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "small",
                    "raw": "'small'",
                    "start": 53,
                    "end": 60
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "large",
                    "raw": "'large'",
                    "start": 63,
                    "end": 70
                  },
                  "start": 45,
                  "end": 70
                },
                "id": null,
                "generator": false,
                "start": 40,
                "end": 70
              }
            ],
            "optional": false,
            "start": 14,
            "end": 71
          },
          "definite": false,
          "start": 6,
          "end": 71
        }
      ],
      "declare": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "chars",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 85
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 94
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 102
              },
              "optional": false,
              "computed": false,
              "start": 88,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a string",
                "raw": "'a string'",
                "start": 103,
                "end": 113
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "id": null,
                "generator": false,
                "start": 115,
                "end": 121
              }
            ],
            "optional": false,
            "start": 88,
            "end": 122
          },
          "definite": false,
          "start": 80,
          "end": 122
        }
      ],
      "declare": false,
      "start": 74,
      "end": 123
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Employee",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 138
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 149,
                "end": 155
              },
              "start": 147,
              "end": 155
            },
            "accessibility": null,
            "static": false,
            "start": 143,
            "end": 156
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 161
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ic",
                      "raw": "'ic'",
                      "start": 163,
                      "end": 167
                    },
                    "start": 163,
                    "end": 167
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "manager",
                      "raw": "'manager'",
                      "start": 170,
                      "end": 179
                    },
                    "start": 170,
                    "end": 179
                  }
                ],
                "start": 163,
                "end": 179
              },
              "start": 161,
              "end": 179
            },
            "accessibility": null,
            "static": false,
            "start": 157,
            "end": 179
          }
        ],
        "start": 141,
        "end": 181
      },
      "declare": false,
      "start": 125,
      "end": 181
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "employees",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 202
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Employee",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 211
                      },
                      "typeArguments": null,
                      "start": 203,
                      "end": 211
                    }
                  ],
                  "start": 202,
                  "end": 212
                },
                "start": 199,
                "end": 212
              },
              "start": 197,
              "end": 212
            },
            "start": 188,
            "end": 212
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 222
            },
            "typeArguments": null,
            "arguments": [],
            "start": 215,
            "end": 224
          },
          "definite": false,
          "start": 188,
          "end": 224
        }
      ],
      "declare": false,
      "start": 182,
      "end": 225
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "byRole",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 238
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 247
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 255
              },
              "optional": false,
              "computed": false,
              "start": 241,
              "end": 255
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 265
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 268
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "role",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 278
                  },
                  "optional": false,
                  "computed": false,
                  "start": 272,
                  "end": 278
                },
                "id": null,
                "generator": false,
                "start": 267,
                "end": 278
              }
            ],
            "optional": false,
            "start": 241,
            "end": 279
          },
          "definite": false,
          "start": 232,
          "end": 279
        }
      ],
      "declare": false,
      "start": 226,
      "end": 280
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "byNonKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 296
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 313
              },
              "optional": false,
              "computed": false,
              "start": 299,
              "end": 313
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 323
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 331
                },
                "id": null,
                "generator": false,
                "start": 325,
                "end": 331
              }
            ],
            "optional": false,
            "start": 299,
            "end": 332
          },
          "definite": false,
          "start": 288,
          "end": 332
        }
      ],
      "declare": false,
      "start": 282,
      "end": 333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 333
}
```
