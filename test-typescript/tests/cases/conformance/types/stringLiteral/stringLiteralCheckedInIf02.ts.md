__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 19,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 18,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 9,
            "end": 12,
            "literal": {
              "type": "Literal",
              "start": 9,
              "end": 12,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 15,
            "end": 18,
            "literal": {
              "type": "Literal",
              "start": 15,
              "end": 18,
              "raw": "\"b\"",
              "value": "b",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 37,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 29,
        "end": 36,
        "types": [
          {
            "type": "TSArrayType",
            "start": 29,
            "end": 32,
            "elementType": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 104,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 104,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 72,
            "end": 102,
            "argument": {
              "type": "LogicalExpression",
              "start": 79,
              "end": 101,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 79,
                "end": 88,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 85,
                  "end": 88,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 92,
                "end": 101,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 98,
                  "end": 101,
                  "raw": "\"b\"",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                }
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
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "isS",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 56,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 56,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 65,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 59,
          "end": 65,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 65,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 215,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 215,
        "body": [
          {
            "type": "IfStatement",
            "start": 131,
            "end": 213,
            "alternate": {
              "type": "BlockStatement",
              "start": 182,
              "end": 213,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 193,
                  "end": 207,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 200,
                    "end": 206,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 203,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 204,
                      "end": 205,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 145,
              "end": 172,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 155,
                  "end": 166,
                  "argument": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 165,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 135,
              "end": 143,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 142,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 135,
                "end": 138,
                "decorators": [],
                "name": "isS",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 117,
          "end": 123,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 123,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 122,
              "end": 123,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
