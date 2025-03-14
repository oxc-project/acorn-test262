__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 216,
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
      "end": 216,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 216,
        "body": [
          {
            "type": "IfStatement",
            "start": 66,
            "end": 214,
            "alternate": {
              "type": "IfStatement",
              "start": 120,
              "end": 214,
              "alternate": {
                "type": "BlockStatement",
                "start": 174,
                "end": 214,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 185,
                    "end": 208,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 192,
                      "end": 207,
                      "computed": true,
                      "object": {
                        "type": "TSAsExpression",
                        "start": 193,
                        "end": 203,
                        "expression": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 196,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 200,
                          "end": 203,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 200,
                            "end": 201,
                            "typeName": {
                              "type": "Identifier",
                              "start": 200,
                              "end": 201,
                              "decorators": [],
                              "name": "S",
                              "optional": false
                            }
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 205,
                        "end": 206,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 137,
                "end": 164,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 147,
                    "end": 158,
                    "argument": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 157,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 124,
                "end": 135,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 127,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 132,
                  "end": 135,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 83,
              "end": 110,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 93,
                  "end": 104,
                  "argument": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 103,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 70,
              "end": 81,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 78,
                "end": 81,
                "raw": "\"a\"",
                "value": "a"
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
        "end": 51,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 58,
          "decorators": [],
          "name": "foo",
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
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
