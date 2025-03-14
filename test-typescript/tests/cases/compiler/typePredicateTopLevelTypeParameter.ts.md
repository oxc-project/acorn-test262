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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 126,
        "body": [
          {
            "type": "IfStatement",
            "start": 66,
            "end": 102,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 87,
              "end": 102,
              "argument": {
                "type": "Literal",
                "start": 94,
                "end": 101,
                "raw": "'admin'",
                "value": "admin"
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 70,
              "end": 85,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 70,
                "end": 74,
                "decorators": [],
                "name": "user",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 79,
                "end": 85,
                "raw": "'Jack'",
                "value": "Jack"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 107,
            "end": 124,
            "argument": {
              "type": "Identifier",
              "start": 114,
              "end": 123,
              "decorators": [],
              "name": "undefined",
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
        "start": 31,
        "end": 45,
        "decorators": [],
        "name": "getPermissions",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 58,
          "decorators": [],
          "name": "user",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            }
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 140,
            "decorators": [],
            "name": "admins",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 143,
            "end": 186,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 163,
                "end": 185,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 168,
                  "end": 185,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 182,
                    "decorators": [],
                    "name": "getPermissions",
                    "optional": false
                  },
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 143,
              "end": 162,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 143,
                "end": 158,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 144,
                    "end": 150,
                    "raw": "'Mike'",
                    "value": "Mike"
                  },
                  {
                    "type": "Literal",
                    "start": 152,
                    "end": 157,
                    "raw": "'Joe'",
                    "value": "Joe"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 159,
                "end": 162,
                "decorators": [],
                "name": "map",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 268,
      "async": false,
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
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 256,
                "end": 265,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 207,
        "decorators": [],
        "name": "isDefined",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 211,
          "end": 227,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 218,
                  "end": 227
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 236,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 230,
          "end": 236,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "a",
            "optional": false
          },
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 210,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 209,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 287,
            "decorators": [],
            "name": "foundAdmins",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 290,
            "end": 314,
            "arguments": [
              {
                "type": "Identifier",
                "start": 304,
                "end": 313,
                "decorators": [],
                "name": "isDefined",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 290,
              "end": 303,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 290,
                "end": 296,
                "decorators": [],
                "name": "admins",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 297,
                "end": 303,
                "decorators": [],
                "name": "filter",
                "optional": false
              }
            },
            "optional": false
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
