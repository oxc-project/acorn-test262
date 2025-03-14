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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "S",
        "optional": false
      },
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
              "raw": "\"a\"",
              "value": "a"
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
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 39,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "T",
        "optional": false
      },
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
                "decorators": [],
                "name": "S",
                "optional": false
              }
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
              "decorators": [],
              "name": "S",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 106,
      "async": false,
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
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 81,
                "end": 90,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 87,
                  "end": 90,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 94,
                "end": 103,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 100,
                  "end": 103,
                  "raw": "\"b\"",
                  "value": "b"
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
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "isS",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 61,
          "end": 67,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "t",
            "optional": false
          },
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
                "decorators": [],
                "name": "S",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 217,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 217,
        "body": [
          {
            "type": "IfStatement",
            "start": 133,
            "end": 215,
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
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 205,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 206,
                      "end": 207,
                      "raw": "0",
                      "value": 0
                    }
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 137,
              "end": 145,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 137,
                "end": 140,
                "decorators": [],
                "name": "isS",
                "optional": false
              },
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
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 125,
          "decorators": [],
          "name": "foo",
          "optional": false,
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
                "decorators": [],
                "name": "T",
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
