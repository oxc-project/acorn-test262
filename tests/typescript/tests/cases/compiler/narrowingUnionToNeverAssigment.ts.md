__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Variants",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 16,
              "end": 19
            },
            "start": 16,
            "end": 19
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 22,
              "end": 25
            },
            "start": 22,
            "end": 25
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 28,
              "end": 31
            },
            "start": 28,
            "end": 31
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "d",
              "raw": "\"d\"",
              "start": 34,
              "end": 37
            },
            "start": 34,
            "end": 37
          }
        ],
        "start": 16,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Variants",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 65
              },
              "typeArguments": null,
              "start": 57,
              "end": 65
            },
            "start": 55,
            "end": 65
          },
          "start": 54,
          "end": 65
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 83,
                  "end": 86
                },
                "start": 77,
                "end": 86
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 96,
                  "end": 99
                },
                "start": 90,
                "end": 99
              },
              "start": 77,
              "end": 99
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 101,
              "end": 116
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 145,
                            "end": 150
                          },
                          "start": 143,
                          "end": 150
                        },
                        "start": 142,
                        "end": 150
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 154
                      },
                      "definite": false,
                      "start": 142,
                      "end": 154
                    }
                  ],
                  "declare": false,
                  "start": 136,
                  "end": 155
                }
              ],
              "start": 126,
              "end": 161
            },
            "start": 73,
            "end": 161
          }
        ],
        "start": 67,
        "end": 163
      },
      "expression": false,
      "start": 41,
      "end": 163
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 163
}
```
