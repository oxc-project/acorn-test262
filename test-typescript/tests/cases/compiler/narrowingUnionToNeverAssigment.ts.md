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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "Variants",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "a",
              "raw": "\"a\""
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
              "value": "b",
              "raw": "\"b\""
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
              "value": "c",
              "raw": "\"c\""
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
              "value": "d",
              "raw": "\"d\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "fx1",
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
          "end": 65,
          "name": "x",
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
                "name": "Variants",
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
        "start": 67,
        "end": 163,
        "body": [
          {
            "type": "IfStatement",
            "start": 73,
            "end": 161,
            "test": {
              "type": "LogicalExpression",
              "start": 77,
              "end": 99,
              "left": {
                "type": "BinaryExpression",
                "start": 77,
                "end": 86,
                "left": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 83,
                  "end": 86,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 90,
                "end": 99,
                "left": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 96,
                  "end": 99,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 101,
              "end": 116,
              "body": []
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 150,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 143,
                          "end": 150,
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 145,
                            "end": 150
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
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
