__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 330,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 45,
        "name": "getPermissions",
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
          "start": 46,
          "end": 58,
          "name": "user",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 126,
        "body": [
          {
            "type": "IfStatement",
            "start": 66,
            "end": 102,
            "test": {
              "type": "BinaryExpression",
              "start": 70,
              "end": 85,
              "left": {
                "type": "Identifier",
                "start": 70,
                "end": 74,
                "name": "user",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 79,
                "end": 85,
                "value": "Jack",
                "raw": "'Jack'"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 87,
              "end": 102,
              "argument": {
                "type": "Literal",
                "start": 94,
                "end": 101,
                "value": "admin",
                "raw": "'admin'"
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 107,
            "end": 124,
            "argument": {
              "type": "Identifier",
              "start": 114,
              "end": 123,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 140,
            "name": "admins",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 143,
            "end": 186,
            "callee": {
              "type": "MemberExpression",
              "start": 143,
              "end": 162,
              "object": {
                "type": "ArrayExpression",
                "start": 143,
                "end": 158,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 144,
                    "end": 150,
                    "value": "Mike",
                    "raw": "'Mike'"
                  },
                  {
                    "type": "Literal",
                    "start": 152,
                    "end": 157,
                    "value": "Joe",
                    "raw": "'Joe'"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 159,
                "end": 162,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 163,
                "end": 185,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 168,
                  "end": 185,
                  "callee": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 182,
                    "name": "getPermissions",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 207,
        "name": "isDefined",
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
          "start": 211,
          "end": 227,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 212,
            "end": 227,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 214,
              "end": 227,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 215,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 218,
                  "end": 227
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 268,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 243,
            "end": 266,
            "argument": {
              "type": "BinaryExpression",
              "start": 250,
              "end": 265,
              "left": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 256,
                "end": 265,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 210,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 209,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
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
        "start": 228,
        "end": 236,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 230,
          "end": 236,
          "parameterName": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 236,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 236,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 287,
            "name": "foundAdmins",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 290,
            "end": 314,
            "callee": {
              "type": "MemberExpression",
              "start": 290,
              "end": 303,
              "object": {
                "type": "Identifier",
                "start": 290,
                "end": 296,
                "name": "admins",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 297,
                "end": 303,
                "name": "filter",
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
                "start": 304,
                "end": 313,
                "name": "isDefined",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
