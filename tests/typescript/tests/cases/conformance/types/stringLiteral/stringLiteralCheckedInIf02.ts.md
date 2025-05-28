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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "a",
              "raw": "\"a\""
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
              "value": "b",
              "raw": "\"b\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "isS",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "parameterName": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 65,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
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
              "left": {
                "type": "BinaryExpression",
                "start": 79,
                "end": 88,
                "left": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 85,
                  "end": 88,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 92,
                "end": 101,
                "left": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 98,
                  "end": 101,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 215,
        "body": [
          {
            "type": "IfStatement",
            "start": 131,
            "end": 213,
            "test": {
              "type": "CallExpression",
              "start": 135,
              "end": 143,
              "callee": {
                "type": "Identifier",
                "start": 135,
                "end": 138,
                "decorators": [],
                "name": "isS",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
              "optional": false
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
                    "object": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 203,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 204,
                      "end": 205,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
