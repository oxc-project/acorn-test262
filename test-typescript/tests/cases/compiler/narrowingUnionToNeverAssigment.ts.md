__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 38,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "Variants",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 16,
        "end": 37,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 16,
            "end": 19,
            "literal": {
              "type": "Literal",
              "start": 16,
              "end": 19,
              "raw": "\"a\"",
              "value": "a"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 22,
            "end": 25,
            "literal": {
              "type": "Literal",
              "start": 22,
              "end": 25,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 28,
            "end": 31,
            "literal": {
              "type": "Literal",
              "start": 28,
              "end": 31,
              "raw": "\"c\"",
              "value": "c"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 34,
            "end": 37,
            "literal": {
              "type": "Literal",
              "start": 34,
              "end": 37,
              "raw": "\"d\"",
              "value": "d"
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 163,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 163,
        "body": [
          {
            "type": "IfStatement",
            "start": 73,
            "end": 161,
            "alternate": {
              "type": "BlockStatement",
              "start": 126,
              "end": 161,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 136,
                  "end": 155,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 142,
                      "end": 154,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 150,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 143,
                          "end": 150,
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 145,
                            "end": 150
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 101,
              "end": 116,
              "body": []
            },
            "test": {
              "type": "LogicalExpression",
              "start": 77,
              "end": 99,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 77,
                "end": 86,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 83,
                  "end": 86,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 90,
                "end": 99,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 96,
                  "end": 99,
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
        "name": "fx1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 65,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 65,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 65,
                "decorators": [],
                "name": "Variants",
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
