__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 217,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 20,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 11,
            "end": 14,
            "literal": {
              "type": "Literal",
              "start": 11,
              "end": 14,
              "value": "a",
              "raw": "\"a\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 17,
            "end": 20,
            "literal": {
              "type": "Literal",
              "start": 17,
              "end": 20,
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
      "start": 22,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 31,
        "end": 38,
        "types": [
          {
            "type": "TSArrayType",
            "start": 31,
            "end": 34,
            "elementType": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 37,
            "end": 38,
            "typeName": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "isS",
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
          "start": 54,
          "end": 58,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 106,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 74,
            "end": 104,
            "argument": {
              "type": "LogicalExpression",
              "start": 81,
              "end": 103,
              "left": {
                "type": "BinaryExpression",
                "start": 81,
                "end": 90,
                "left": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 87,
                  "end": 90,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 94,
                "end": 103,
                "left": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 100,
                  "end": 103,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 61,
          "end": 67,
          "parameterName": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "S",
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
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "f",
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
          "start": 119,
          "end": 125,
          "name": "foo",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 124,
              "end": 125,
              "typeName": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 217,
        "body": [
          {
            "type": "IfStatement",
            "start": 133,
            "end": 215,
            "test": {
              "type": "CallExpression",
              "start": 137,
              "end": 145,
              "callee": {
                "type": "Identifier",
                "start": 137,
                "end": 140,
                "name": "isS",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 147,
              "end": 174,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 157,
                  "end": 168,
                  "argument": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 167,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 184,
              "end": 215,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 195,
                  "end": 209,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 202,
                    "end": 208,
                    "object": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 205,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 206,
                      "end": 207,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": true,
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
