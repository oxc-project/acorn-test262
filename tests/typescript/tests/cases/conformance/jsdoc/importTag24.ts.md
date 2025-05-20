__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 25,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 18,
          "end": 24
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 347,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 79,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 60,
            "end": 77,
            "argument": {
              "type": "Identifier",
              "start": 67,
              "end": 76,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 188,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 88,
        "end": 188,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 102,
          "end": 188,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 136,
              "end": 170,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 142,
                  "end": 169,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 148,
                    "end": 169,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "start": 156,
                        "end": 168,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 158,
                            "end": 161,
                            "raw": "'a'",
                            "value": "a"
                          },
                          {
                            "type": "Literal",
                            "start": 163,
                            "end": 166,
                            "raw": "'b'",
                            "value": "b"
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "decorators": [],
                      "name": "Set",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ReturnStatement",
              "start": 175,
              "end": 186,
              "argument": {
                "type": "Identifier",
                "start": 182,
                "end": 185,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 99,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 225,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 225,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 206,
            "end": 223,
            "argument": {
              "type": "Identifier",
              "start": 213,
              "end": 222,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 201,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 251,
      "end": 292,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 258,
        "end": 292,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 264,
            "end": 291,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 264,
              "end": 267,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 270,
              "end": 291,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 278,
                  "end": 290,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 280,
                      "end": 283,
                      "raw": "'a'",
                      "value": "a"
                    },
                    {
                      "type": "Literal",
                      "start": 285,
                      "end": 288,
                      "raw": "'b'",
                      "value": "b"
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 274,
                "end": 277,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 320,
      "end": 347,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 334,
        "end": 347,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 336,
            "end": 345,
            "argument": {
              "type": "Literal",
              "start": 343,
              "end": 344,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 331,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
