__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPermissions",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 45
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "user",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            },
            "start": 50,
            "end": 58
          },
          "start": 46,
          "end": 58
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "user",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 74
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "Jack",
                "raw": "'Jack'",
                "start": 79,
                "end": 85
              },
              "start": 70,
              "end": 85
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "admin",
                "raw": "'admin'",
                "start": 94,
                "end": 101
              },
              "start": 87,
              "end": 102
            },
            "alternate": null,
            "start": 66,
            "end": 102
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 123
            },
            "start": 107,
            "end": 124
          }
        ],
        "start": 60,
        "end": 126
      },
      "expression": false,
      "start": 22,
      "end": 126
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
            "name": "admins",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 140
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "Mike",
                    "raw": "'Mike'",
                    "start": 144,
                    "end": 150
                  },
                  {
                    "type": "Literal",
                    "value": "Joe",
                    "raw": "'Joe'",
                    "start": 152,
                    "end": 157
                  }
                ],
                "start": 143,
                "end": 158
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 162
              },
              "optional": false,
              "computed": false,
              "start": 143,
              "end": 162
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPermissions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 182
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 184
                    }
                  ],
                  "optional": false,
                  "start": 168,
                  "end": 185
                },
                "id": null,
                "generator": false,
                "start": 163,
                "end": 185
              }
            ],
            "optional": false,
            "start": 143,
            "end": 186
          },
          "definite": false,
          "start": 134,
          "end": 186
        }
      ],
      "declare": false,
      "start": 128,
      "end": 187
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 207
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 208,
            "end": 209
          }
        ],
        "start": 207,
        "end": 210
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 215
                  },
                  "typeArguments": null,
                  "start": 214,
                  "end": 215
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 218,
                  "end": 227
                }
              ],
              "start": 214,
              "end": 227
            },
            "start": 212,
            "end": 227
          },
          "start": 211,
          "end": 227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              },
              "typeArguments": null,
              "start": 235,
              "end": 236
            },
            "start": 235,
            "end": 236
          },
          "start": 230,
          "end": 236
        },
        "start": 228,
        "end": 236
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 265
              },
              "start": 250,
              "end": 265
            },
            "start": 243,
            "end": 266
          }
        ],
        "start": 237,
        "end": 268
      },
      "expression": false,
      "start": 189,
      "end": 268
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
            "name": "foundAdmins",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 287
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "admins",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 296
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 303
              },
              "optional": false,
              "computed": false,
              "start": 290,
              "end": 303
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isDefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 313
              }
            ],
            "optional": false,
            "start": 290,
            "end": 314
          },
          "definite": false,
          "start": 276,
          "end": 314
        }
      ],
      "declare": false,
      "start": 270,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 329
}
```
