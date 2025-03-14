__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 85,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 84,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 25,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 41,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 66,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 65,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 58,
                "end": 65
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 82,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 81,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 74,
                "end": 81
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 109,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 96,
        "end": 108,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 100,
          "end": 108,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 101,
              "end": 102,
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            {
              "type": "TSLiteralType",
              "start": 104,
              "end": 107,
              "literal": {
                "type": "Literal",
                "start": 104,
                "end": 107,
                "raw": "'a'",
                "value": "a"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 96,
          "end": 100,
          "decorators": [],
          "name": "Omit",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 259,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 128,
        "end": 259,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 134,
            "end": 148,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 140,
                "end": 147,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 144,
                  "end": 147,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 167,
            "expression": {
              "type": "AssignmentExpression",
              "start": 153,
              "end": 166,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 153,
                "end": 156,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 159,
                "end": 166,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 172,
            "end": 188,
            "expression": {
              "type": "AssignmentExpression",
              "start": 172,
              "end": 187,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 172,
                "end": 175,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 178,
                "end": 187,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 194,
            "end": 208,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 200,
                "end": 207,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 201,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 204,
                  "end": 207,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 207,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 213,
            "end": 224,
            "expression": {
              "type": "AssignmentExpression",
              "start": 213,
              "end": 223,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 213,
                "end": 216,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 219,
                "end": 223,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 230,
            "end": 244,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 236,
                "end": 243,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 240,
                  "end": 243,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 249,
            "end": 257,
            "expression": {
              "type": "AssignmentExpression",
              "start": 249,
              "end": 256,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 249,
                "end": 252,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "d",
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
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 122,
          "end": 126,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 126,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
